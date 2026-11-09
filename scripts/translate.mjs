#!/usr/bin/env node
/**
 * translate — keep i18n/<locale>/ in step with the English source of truth.
 *
 *   docs/**.md  ──(Claude)──►  i18n/<locale>/**.md   (committed, reviewable)
 *
 * English is the only source: every language is translated from the English page,
 * never from another translation. Each translated file records the SHA-256 of the
 * English file it was made from, in its frontmatter. That is the whole staleness
 * mechanism: if the hashes differ, the translation is out of date and says so.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=… node scripts/translate.mjs                    # every locale, what changed
 *   ANTHROPIC_API_KEY=… node scripts/translate.mjs --locale de        # one locale
 *   ANTHROPIC_API_KEY=… node scripts/translate.mjs --force            # retranslate everything
 *   node scripts/translate.mjs --check                                # report staleness, never calls the API
 *   node scripts/translate.mjs --locale de --only products/tigertag.md  # one page
 *
 * --check needs no credentials and never fails the build: a stale translation is
 * a thing to notice, not a thing to block a merge on.
 */

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DEFAULT_LOCALE, LOCALES, LOCALE_META, NOT_PUBLISHED } from './lib/docs-config.mjs';
import { glossaryFor } from './lib/glossary.mjs';
import { stringsFor } from './lib/locale-strings.mjs';
import { splitFrontmatter } from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');

const MODEL = process.env.TRANSLATE_MODEL ?? 'claude-opus-5';
const EFFORT = process.env.TRANSLATE_EFFORT ?? 'low';
const CONCURRENCY = Number(process.env.TRANSLATE_CONCURRENCY ?? 4);

const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const FORCE = argv.includes('--force');
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;
const LOCALE_ARG = argv.includes('--locale') ? argv[argv.indexOf('--locale') + 1] : null;

const TARGETS = LOCALES.filter((code) => code !== DEFAULT_LOCALE);
if (LOCALE_ARG && !TARGETS.includes(LOCALE_ARG)) {
  console.error(`translate: unknown locale "${LOCALE_ARG}" — expected one of ${TARGETS.join(', ')}`);
  process.exit(1);
}
const SELECTED = LOCALE_ARG ? [LOCALE_ARG] : TARGETS;

/** Typography and register, per language: the one part of the prompt that is not about structure. */
const STYLE = {
  fr: 'Write natural technical French with French typography: a narrow non-breaking space before : ; ! ? and inside « », French quotation marks for quoted prose, and « vous » rather than « tu ».',
  de: 'Write natural technical German. Use German quotation marks („…“), address the reader as "du" (as Tiger Studio itself does), and form compound nouns the way German technical writing does.',
  es: 'Write natural technical Spanish (neutral, not tied to one country). Use « » for quoted prose, the opening ¿ and ¡ marks, and address the reader as "tú" or with impersonal forms.',
  it: 'Write natural technical Italian. Use « » for quoted prose, and address the reader as "tu" or with impersonal forms.',
  nl: 'Write natural technical Dutch. Use “…” for quoted prose and address the reader as "je".',
  pl: 'Write natural technical Polish. Use „…” for quoted prose, and address the reader with impersonal forms or the imperative rather than "Ty".',
  pt: 'Write natural technical Brazilian Portuguese (pt-BR spelling and vocabulary: "arquivo", "tela", "você"). Use “…” for quoted prose.',
  'pt-pt': 'Write natural technical European Portuguese (pt-PT spelling and vocabulary: "ficheiro", "ecrã", "utilizador"). Use « » for quoted prose and the impersonal or "você" form, never the Brazilian gerund style.',
  ru: 'Write natural technical Russian. Use « » for quoted prose, a spaced em dash, and address the reader as "вы".',
  zh: 'Write natural technical Simplified Chinese. Use full-width Chinese punctuation and “…” for quoted prose, a space between Chinese text and Latin words or numbers, and address the reader as "你".',
};

function systemPrompt(locale) {
  const { name } = LOCALE_META[locale];
  const { footer, callouts } = stringsFor(locale);
  const colon = callouts.note.slice(callouts.note.search(/\s?[:：]$/));
  return `You translate the documentation of TigerSystem, an open NFC/RFID identity standard for 3D-printing filament, from English into ${name}.

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

Preserve the Markdown structure exactly: the same headings at the same levels, the same tables with the same number of columns, the same blockquote callouts, the same footer lines, the same blank-line layout. A "> **Note:**" callout becomes "> **${callouts.note}**"; "> **Warning:**" becomes "> **${callouts.warning}**"; "> **In short:**" becomes "> **${callouts.inShort}**"; "> **TODO:**" becomes "> **TODO${colon}**". In the footer line, "**Related:**" becomes "**${footer.related}${colon}**", and the Previous / Documentation index / Next labels become "${footer.previous}" / "${footer.docIndex}" / "${footer.next}" while their ◀ ▲ ▶ arrows stay exactly where they are.

Attributed quotations: the original of every quotation in this documentation is
the English one. Translate it so the page reads, then reproduce the English
original immediately after, introduced as the version to cite. A journalist
quoting a founder needs the exact words, not a round trip through another
language. The same applies to slogans and standing lines: give the translation,
then the original in parentheses.

${STYLE[locale]}

Use these words for these concepts, every time, so that the whole documentation says the same thing the same way (the left side is the English concept, the right side is the word to write):
${glossaryFor(locale)}`;
}

/* -------------------------------------------------------------------------- */

/** Hashed with LF endings, so a Windows checkout and the committed blob agree. */
const sha256 = (value) =>
  crypto.createHash('sha256').update(String(value).replaceAll('\r\n', '\n')).digest('hex');

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

async function translateOne(client, locale, { fileRel, source }) {
  const { frontmatter, body } = splitFrontmatter(source);

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 32000,
    system: systemPrompt(locale),
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

  // What each selected locale still owes: its pages that are missing or stale.
  const plan = [];
  for (const locale of SELECTED) {
    const out = path.join(ROOT, 'i18n', locale);
    const work = [];
    for (const fileRel of files) {
      const source = await fs.readFile(path.join(DOCS, fileRel), 'utf8');
      const hash = sha256(source);
      let state = 'missing';
      try {
        const existing = await fs.readFile(path.join(out, fileRel), 'utf8');
        state = readSourceHash(splitFrontmatter(existing).frontmatter) === hash ? 'current' : 'stale';
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      work.push({ fileRel, source, state });
    }
    plan.push({ locale, out, work, outdated: work.filter((item) => item.state !== 'current') });
  }

  if (CHECK) {
    for (const { locale, work, outdated } of plan) {
      console.log(
        `translate --check: ${locale} — ${work.length - outdated.length}/${work.length} pages match their English source`,
      );
      for (const item of outdated) {
        console.warn(`  ${item.state.padEnd(7)} i18n/${locale}/${item.fileRel}`);
      }
    }
    const behind = plan.filter(({ outdated }) => outdated.length);
    if (behind.length) {
      const list = behind.map(({ locale, outdated }) => `${locale} (${outdated.length})`).join(', ');
      console.warn(`\nRun \`pnpm translate\` to refresh ${list}.`);
    }
    return; // never a failure: staleness is a signal, not a broken build
  }

  const todo = plan
    .map((entry) => ({ ...entry, pages: FORCE ? entry.work : entry.outdated }))
    .filter((entry) => entry.pages.length);
  if (!todo.length) {
    console.log('translate: every translated page is already in step with its English source');
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

  const totals = { input: 0, output: 0 };
  const failures = [];

  for (const { locale, out, pages } of todo) {
    console.log(`translate: ${pages.length} page(s) → i18n/${locale}/ using ${MODEL}`);
    const queue = [...pages];

    const worker = async () => {
      for (let item = queue.shift(); item; item = queue.shift()) {
        try {
          const { content, usage } = await translateOne(client, locale, item);
          await fs.mkdir(path.dirname(path.join(out, item.fileRel)), { recursive: true });
          await fs.writeFile(path.join(out, item.fileRel), content);
          totals.input += usage.input_tokens ?? 0;
          totals.output += usage.output_tokens ?? 0;
          console.log(`  ✓ ${locale}/${item.fileRel}`);
        } catch (error) {
          failures.push(`${locale}/${item.fileRel}: ${error.message}`);
          console.error(`  ✗ ${locale}/${item.fileRel}: ${error.message}`);
        }
      }
    };

    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, worker));
  }

  console.log(`translate: ${totals.input} input tokens, ${totals.output} output tokens`);
  if (failures.length) {
    console.error(`translate: ${failures.length} page(s) failed`);
    process.exit(1);
  }
}

await main();
