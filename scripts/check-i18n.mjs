#!/usr/bin/env node
/**
 * check-i18n — hold every translation to the shape of its English source.
 *
 * There are no translation keys here: a locale is a mirror of `docs/`, one file
 * per file, and the contract between them is structural. These are the ways a
 * machine translation actually breaks, and each one is checkable:
 *
 *   errors   a link target rewritten (a translated URL is a dead URL)
 *            a fenced code block altered — including Mermaid diagram source
 *            an image source rewritten
 *            a heading added, dropped, or moved to another level
 *            a table gaining or losing a column
 *            an orphan file whose English source no longer exists
 *            missing or malformed sourceHash / sourcePath frontmatter
 *
 *   warnings a translation whose source has moved on since (stale, not wrong)
 *            an English page with no translation yet
 *
 * Structural checks are skipped on stale files: comparing a translation against
 * a source that has changed under it reports the change, not a defect.
 *
 * Run directly, from the pre-commit hook, or in CI:
 *   node scripts/check-i18n.mjs [--quiet]
 */

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DEFAULT_LOCALE, LOCALES, LOCALE_STATUS, NOT_PUBLISHED } from './lib/docs-config.mjs';
import { splitFrontmatter } from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const I18N = path.join(ROOT, 'i18n');
const QUIET = process.argv.includes('--quiet');

const errors = [];
const warnings = [];

/* -------------------------------------------------------------------------- */
/* Structure extraction                                                        */
/* -------------------------------------------------------------------------- */

const FENCE = /^\s{0,3}(`{3,}|~{3,})/;

/** Fenced code blocks, in order, with their info string — content must survive translation. */
function codeBlocks(body) {
  const blocks = [];
  let open = null;
  let buffer = [];
  for (const line of body.split(/\r?\n/)) {
    const fence = FENCE.exec(line);
    if (open) {
      if (fence && fence[1][0] === open.marker[0] && fence[1].length >= open.marker.length) {
        blocks.push({ info: open.info, code: buffer.join('\n') });
        open = null;
        buffer = [];
      } else {
        buffer.push(line);
      }
    } else if (fence) {
      open = { marker: fence[1], info: line.slice(line.indexOf(fence[1]) + fence[1].length).trim() };
    }
  }
  if (open) blocks.push({ info: open.info, code: buffer.join('\n'), unterminated: true });
  return blocks;
}

/** Everything outside fenced code, so link and heading scans ignore samples. */
function withoutCode(body) {
  const out = [];
  let open = null;
  for (const line of body.split(/\r?\n/)) {
    const fence = FENCE.exec(line);
    if (open) {
      if (fence && fence[1][0] === open[0] && fence[1].length >= open.length) open = null;
      continue;
    }
    if (fence) {
      open = fence[1];
      continue;
    }
    out.push(line);
  }
  return out;
}

const MD_LINK = /(!?)\[(?:[^\][]|\[[^\]]*\])*\]\(\s*<?([^)<>\s]+)>?(?:\s+"[^"]*")?\s*\)/g;
const HTML_ATTR = /\b(?:src|href)="([^"]*)"/g;

/** Every link and asset target on the page — these must be byte-identical across locales. */
function targets(lines) {
  const found = [];
  for (const line of lines) {
    for (const match of line.matchAll(MD_LINK)) found.push(match[2]);
    for (const match of line.matchAll(HTML_ATTR)) found.push(match[1]);
  }
  return found.sort();
}

/** Heading levels, in order. The text is translated; the shape is not. */
function headingShape(lines) {
  return lines
    .map((line) => /^(#{1,6})\s+\S/.exec(line))
    .filter(Boolean)
    .map((match) => match[1].length);
}

/** Column count of each table, in order. A lost `|` silently mangles a table. */
function tableShape(lines) {
  const shape = [];
  for (let i = 0; i < lines.length - 1; i += 1) {
    if (!lines[i].trim().startsWith('|')) continue;
    if (!/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) continue;
    const columns = lines[i].trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).length;
    let rows = 0;
    let end = i + 2;
    while (end < lines.length && lines[end].trim().startsWith('|')) {
      rows += 1;
      end += 1;
    }
    shape.push(`${columns}x${rows}`);
    i = end - 1;
  }
  return shape;
}

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

function compare(label, fileRel, locale, english, translated) {
  if (JSON.stringify(english) === JSON.stringify(translated)) return;
  errors.push(
    `${locale}/${fileRel}: ${label} differs from the English source\n` +
      `      en: ${JSON.stringify(english)}\n` +
      `      ${locale}: ${JSON.stringify(translated)}`,
  );
}

async function checkLocale(locale) {
  // A locale that claims to be complete is held to it; one still being filled in
  // reports its gaps without failing anyone's commit.
  const enforced = LOCALE_STATUS[locale] === 'complete';
  const localeRoot = path.join(I18N, locale);
  const sources = (await walk(DOCS)).filter((fileRel) => !NOT_PUBLISHED.has(fileRel));
  const translations = await walk(localeRoot);

  for (const fileRel of translations) {
    if (!sources.includes(fileRel)) {
      errors.push(
        `${locale}/${fileRel}: no English source at docs/${fileRel} — the page was renamed or removed; ` +
          `move or delete this translation`,
      );
      continue;
    }

    const source = await fs.readFile(path.join(DOCS, fileRel), 'utf8');
    const translation = await fs.readFile(path.join(localeRoot, fileRel), 'utf8');
    const { frontmatter, body } = splitFrontmatter(translation);

    const declared = /^sourceHash:\s*(\S+)\s*$/m.exec(frontmatter ?? '')?.[1];
    if (!declared) {
      errors.push(
        `${locale}/${fileRel}: no sourceHash in the frontmatter — staleness cannot be tracked. ` +
          `Regenerate with \`pnpm translate\`.`,
      );
      continue;
    }
    if (!/^sourcePath:\s*\S+\s*$/m.test(frontmatter ?? '')) {
      errors.push(`${locale}/${fileRel}: no sourcePath in the frontmatter`);
    }

    if (declared !== sha256(source)) {
      const message =
        `${locale}/${fileRel}: stale — docs/${fileRel} changed since this was translated. ` +
        `Refresh it with \`pnpm translate\`.`;
      (enforced ? errors : warnings).push(message);
      continue; // structure is compared against the source it was made from, not a moved one
    }

    const enBody = splitFrontmatter(source).body;
    const enLines = withoutCode(enBody);
    const frLines = withoutCode(body);

    compare('link and asset targets', fileRel, locale, targets(enLines), targets(frLines));
    compare('heading structure', fileRel, locale, headingShape(enLines), headingShape(frLines));
    compare('table shape (columns x rows)', fileRel, locale, tableShape(enLines), tableShape(frLines));
    compare(
      'fenced code blocks',
      fileRel,
      locale,
      codeBlocks(enBody).map((block) => `${block.info}\n${block.code}`),
      codeBlocks(body).map((block) => `${block.info}\n${block.code}`),
    );
  }

  const missing = sources.filter((fileRel) => !translations.includes(fileRel));
  if (missing.length) {
    if (enforced) {
      errors.push(
        `${locale} is declared complete but ${missing.length} page(s) have no translation:\n` +
          missing.map((fileRel) => `      docs/${fileRel}`).join('\n'),
      );
    } else {
      warnings.push(`${locale}: ${missing.length}/${sources.length} page(s) not translated yet`);
    }
  }
  return { checked: translations.length, total: sources.length, enforced };
}

async function main() {
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    const { checked, total, enforced } = await checkLocale(locale);
    if (!QUIET)
      console.log(
        `check-i18n: ${locale} — ${checked}/${total} page(s) present` +
          (enforced ? ' (declared complete: gaps and staleness are fatal)' : ' (in progress)'),
      );
  }

  for (const warning of warnings) console.warn(`  warning: ${warning}`);

  if (errors.length) {
    console.error(`\ncheck-i18n: ${errors.length} problem(s)\n`);
    for (const error of errors) console.error(`  ✗ ${error}`);
    console.error(
      '\nA translation mirrors its source: same links, same code, same headings, same tables.\n' +
        'Only the prose changes.\n',
    );
    process.exit(1);
  }

  if (!QUIET) console.log('check-i18n: translations match the shape of their sources');
}

await main();
