#!/usr/bin/env node
/**
 * stamp-translations — add the bookkeeping frontmatter to freshly written translations.
 *
 * `scripts/translate.mjs` writes `sourceHash` itself. When a translation is
 * produced another way — by hand, or by an agent working in the repository —
 * the file arrives as body text only, and this stamps it:
 *
 *     ---
 *     sourceHash: <sha256 of the English source, as it stands now>
 *     sourcePath: docs/<path>
 *     ---
 *
 * Only ever run this on a translation that was just made from the current
 * English page. Stamping an older one would tell `check-i18n` that a stale
 * translation is current, which is the one lie the whole mechanism exists to
 * prevent — so it refuses to touch a file that already carries a hash unless
 * `--force` says the translation really was just refreshed.
 *
 * Usage:
 *   node scripts/stamp-translations.mjs                 # every translated locale
 *   node scripts/stamp-translations.mjs --locale de     # one locale
 *   node scripts/stamp-translations.mjs --force i18n/de/faq/README.md i18n/es/faq/README.md
 *                                                       # re-stamp exactly these files
 *
 * `--force` only works on files named one by one. Forcing a whole locale would
 * re-stamp the stale pages along with the refreshed ones and hide them from
 * `check-i18n` — which is how this script was once used by mistake, when file
 * arguments were silently ignored. Unknown arguments are now an error.
 */
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DEFAULT_LOCALE, LOCALES } from './lib/docs-config.mjs';
import { splitFrontmatter } from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGETS = LOCALES.filter((code) => code !== DEFAULT_LOCALE);

const fail = (message) => {
  console.error(`stamp-translations: ${message}`);
  process.exit(1);
};

let FORCE = false;
let LOCALE_ARG = null;
/** Files named on the command line, as { locale, fileRel }. */
const FILES = [];
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const arg = argv[i];
  if (arg === '--force') FORCE = true;
  else if (arg === '--locale') LOCALE_ARG = argv[++i] ?? fail('--locale needs a value');
  else if (arg.startsWith('-')) fail(`unknown option "${arg}"`);
  else {
    const rel = path.relative(ROOT, path.resolve(arg)).split(path.sep).join('/');
    const match = rel.match(/^i18n\/([^/]+)\/(.+\.md)$/);
    if (!match || !TARGETS.includes(match[1])) {
      fail(`"${arg}" is not a translated page — expected i18n/<locale>/<path>.md, locale one of ${TARGETS.join(', ')}`);
    }
    FILES.push({ locale: match[1], fileRel: match[2] });
  }
}

if (LOCALE_ARG && !TARGETS.includes(LOCALE_ARG)) {
  fail(`unknown locale "${LOCALE_ARG}" — expected one of ${TARGETS.join(', ')}`);
}
if (FILES.length && LOCALE_ARG) fail('name files or a locale, not both');
if (FORCE && !FILES.length) {
  fail('--force re-stamps pages that may still be stale; name the files you refreshed instead');
}

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

let stamped = 0;
let skipped = 0;
const missing = [];

/** The pages to consider: the named files, or every page of the chosen locales. */
async function work() {
  if (FILES.length) return FILES;
  const out = [];
  for (const locale of LOCALE_ARG ? [LOCALE_ARG] : TARGETS) {
    for (const fileRel of await walk(path.join(ROOT, 'i18n', locale))) out.push({ locale, fileRel });
  }
  return out;
}

for (const { locale, fileRel } of await work()) {
  const target = path.join(ROOT, 'i18n', locale, fileRel);
  const source = path.join(ROOT, 'docs', fileRel);

  let english;
  try {
    english = await fs.readFile(source, 'utf8');
  } catch {
    missing.push(`${locale}/${fileRel}`);
    continue;
  }

  let raw;
  try {
    raw = await fs.readFile(target, 'utf8');
  } catch {
    fail(`i18n/${locale}/${fileRel} does not exist`);
  }
  const { frontmatter, body } = splitFrontmatter(raw);
  if (/^sourceHash:/m.test(frontmatter ?? '') && !FORCE) {
    skipped += 1;
    continue;
  }

  // LF endings, as the committed blob has them — see check-i18n.
  const hash = crypto.createHash('sha256').update(english.replaceAll('\r\n', '\n')).digest('hex');
  const kept = (frontmatter ?? '')
    .split('\n')
    .filter((line) => line.trim() && !/^source(Hash|Path):/.test(line.trim()));
  const header = ['---', `sourceHash: ${hash}`, `sourcePath: docs/${fileRel}`, ...kept, '---', ''];
  await fs.writeFile(target, `${header.join('\n')}\n${body.trim()}\n`);
  stamped += 1;
}

console.log(`stamp-translations: ${stamped} stamped, ${skipped} already carried a hash`);
for (const entry of missing) {
  console.error(`stamp-translations: no English source for i18n/${entry}`);
}
if (missing.length) process.exit(1);
