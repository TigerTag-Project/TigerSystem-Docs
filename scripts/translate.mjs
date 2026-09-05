#!/usr/bin/env node
/**
 * translate — keep i18n/fr/ in step with the English source of truth.
 *
 *   docs/**.md  ──(Claude)──►  i18n/fr/**.md   (committed, reviewable)
 *
 * Each French file records the SHA-256 of the English file it was made from, in
 * its frontmatter. That is the whole staleness mechanism: if the hashes differ,
 * the translation is out of date and says so.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=… node scripts/translate.mjs            # translate what changed
 *   ANTHROPIC_API_KEY=… node scripts/translate.mjs --force    # retranslate everything
 *   node scripts/translate.mjs --check                        # report staleness, never calls the API
 *   node scripts/translate.mjs --only products/tigertag.md    # one page
 *
 * --check needs no credentials and never fails the build: a stale translation is
 * a thing to notice, not a thing to block a merge on.
 */

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { NOT_PUBLISHED } from './lib/docs-config.mjs';
import { splitFrontmatter } from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const TARGET_LOCALE = 'fr';
const OUT = path.join(ROOT, 'i18n', TARGET_LOCALE);

const MODEL = process.env.TRANSLATE_MODEL ?? 'claude-opus-5';
const EFFORT = process.env.TRANSLATE_EFFORT ?? 'low';
const CONCURRENCY = Number(process.env.TRANSLATE_CONCURRENCY ?? 4);

const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const FORCE = argv.includes('--force');
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;

const SYSTEM = `You translate the documentation of TigerSystem, an open NFC/RFID identity standard for 3D-printing filament, from English into French.

You are given one Markdown page. Return the translated page and nothing else: no preamble, no explanation, and no code fence wrapped around the whole answer.

Translate:
- prose, headings, table cells, list items, image alt text, and the visible text of links.

Never translate, and reproduce byte-for-byte:
- the contents of fenced code blocks, including Mermaid diagram source (node labels included — they are diagram identifiers, not prose);
- inline code spans;
- URLs, link targets, file paths, and file names — with one exception: a link to
  a heading on the *same* page, written as a bare fragment, must follow the
  translated heading, because translating the heading changes its anchor.
  Keeping the English anchor there produces a dead link;
- HTML attributes and their values;
- product, brand and organisation names: TigerSystem, TigerTag, TigerTag+, TigerData, TigerData+, TigerHub, TigerPOD, TigerScale, Tiger Studio, Tiger NFC Connect, TigerTag Certified, TigerTag Factory, TigerTag Manager, Bambu Lab, Creality, Elegoo, Anycubic, FlashForge, Snapmaker, Klipper, Moonraker, OpenSpool, OpenRFID, Spoolman, Home Assistant, Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Atome3D, AJAX-3D;
- technical identifiers and units: NTAG213/215/216, NDEF, NFC, RFID, UID, ECDSA, AMS, CFS, ACE, Canvas, matlStation, MMU, ESP32, PN532, RC522, ACR122U, TD-1, TD1s, .ttag, Firebase, Firestore, PLA, PETG, ABS, TPU, MQTT, MQTTS, HTTP, WebSocket, SDK, API, mm, °C, g, kg.

Preserve the Markdown structure exactly: the same headings at the same levels, the same tables with the same number of columns, the same blockquote callouts, the same footer lines, the same blank-line layout. A "> **Note:**" callout becomes "> **Note :**"; "> **TODO:**" stays "> **TODO :**". In the footer line, "**Related:**" becomes "**Voir aussi :**", and the Previous / Documentation index / Next labels are translated while their ◀ ▲ ▶ arrows stay exactly where they are.

Attributed quotations: the original of every quotation in this documentation is
the English one. Translate it so the page reads, then reproduce the English
original immediately after, introduced as the version to cite. A journalist
quoting a founder needs the exact words, not a round trip through another
language. The same applies to slogans and standing lines: give the translation,
then the original in parentheses.

Write natural technical French with French typography: a narrow non-breaking space before : ; ! ? and inside « », French quotation marks for quoted prose, and « vous » rather than « tu ».`;

/* -------------------------------------------------------------------------- */

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');

async function walk(dir, base = dir) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return out;
    throw error;
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, base)));
    else if (entry.name.endsWith('.md'))
      out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out.sort();
}

function readSourceHash(frontmatter) {
  return /^sourceHash:\s*(\S+)\s*$/m.exec(frontmatter ?? '')?.[1] ?? null;
}

/** Build the French file: our bookkeeping, then whatever frontmatter the source had. */
function composeTranslation({ sourceFrontmatter, translatedBody, hash, sourcePath }) {
  const lines = [
    '---',
    `sourceHash: ${hash}`,
    `sourcePath: docs/${sourcePath}`,
    ...(sourceFrontmatter ? sourceFrontmatter.split('\n') : []),
    '---',
    '',
  ];
  return `${lines.join('\n')}${translatedBody.trim()}\n`;
}

/** Models sometimes wrap a whole document in a fence. Take it back off. */
function unwrap(text) {
  const fenced = /^\s*```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/.exec(text);
  return (fenced ? fenced[1] : text).trim();
}

async function translateOne(client, { fileRel, source }) {
  const { frontmatter, body } = splitFrontmatter(source);

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 32000,
    system: SYSTEM,
    output_config: { effort: EFFORT },
    messages: [
      {
        role: 'user',
        content: `Page: docs/${fileRel}\n\n---\n\n${body}`,
      },
    ],
  });

  const message = await stream.finalMessage();
  if (message.stop_reason === 'refusal') {
    throw new Error(`refused (${message.stop_details?.category ?? 'unknown'}) — ${fileRel}`);
  }
  if (message.stop_reason === 'max_tokens') {
    throw new Error(`hit max_tokens before finishing — ${fileRel}`);
  }

  const text = message.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('');

  return {
    content: composeTranslation({
      sourceFrontmatter: frontmatter,
      translatedBody: unwrap(text),
      hash: sha256(source),
      sourcePath: fileRel,
    }),
    usage: message.usage,
  };
}

/* -------------------------------------------------------------------------- */

async function main() {
  const files = (await walk(DOCS)).filter(
    (fileRel) => !NOT_PUBLISHED.has(fileRel) && (!ONLY || fileRel === ONLY),
  );

  const work = [];
  for (const fileRel of files) {
    const source = await fs.readFile(path.join(DOCS, fileRel), 'utf8');
    const hash = sha256(source);
    let state = 'missing';
    try {
      const existing = await fs.readFile(path.join(OUT, fileRel), 'utf8');
      state = readSourceHash(splitFrontmatter(existing).frontmatter) === hash ? 'current' : 'stale';
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    work.push({ fileRel, source, state });
  }

  const outdated = work.filter((item) => item.state !== 'current');

  if (CHECK) {
    const missing = work.filter((item) => item.state === 'missing');
    const stale = work.filter((item) => item.state === 'stale');
    console.log(
      `translate --check: ${work.length - outdated.length}/${work.length} French pages match their English source`,
    );
    for (const item of stale) console.warn(`  stale   i18n/fr/${item.fileRel}`);
    for (const item of missing) console.warn(`  missing i18n/fr/${item.fileRel}`);
    if (outdated.length) {
      console.warn(`\nRun \`pnpm translate\` to refresh ${outdated.length} page(s).`);
    }
    return; // never a failure: staleness is a signal, not a broken build
  }

  const todo = FORCE ? work : outdated;
  if (!todo.length) {
    console.log('translate: every French page is already in step with its English source');
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    console.error(
      'translate: no credentials. Set ANTHROPIC_API_KEY (never commit it), or sign in with `ant auth login`.',
    );
    process.exit(1);
  }

  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic();

  console.log(`translate: ${todo.length} page(s) → i18n/${TARGET_LOCALE}/ using ${MODEL}`);
  const totals = { input: 0, output: 0 };
  const failures = [];
  const queue = [...todo];

  const worker = async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      try {
        const { content, usage } = await translateOne(client, item);
        await fs.mkdir(path.dirname(path.join(OUT, item.fileRel)), { recursive: true });
        await fs.writeFile(path.join(OUT, item.fileRel), content);
        totals.input += usage.input_tokens ?? 0;
        totals.output += usage.output_tokens ?? 0;
        console.log(`  ✓ ${item.fileRel}`);
      } catch (error) {
        failures.push(`${item.fileRel}: ${error.message}`);
        console.error(`  ✗ ${item.fileRel}: ${error.message}`);
      }
    }
  };

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, worker));

  console.log(`translate: ${totals.input} input tokens, ${totals.output} output tokens`);
  if (failures.length) {
    console.error(`translate: ${failures.length} page(s) failed`);
    process.exit(1);
  }
}

await main();
