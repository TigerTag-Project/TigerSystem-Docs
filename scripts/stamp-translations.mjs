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
 */
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DEFAULT_LOCALE, LOCALES } from './lib/docs-config.mjs';
import { splitFrontmatter } from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const LOCALE_ARG = args.includes('--locale') ? args[args.indexOf('--locale') + 1] : null;

const TARGETS = LOCALES.filter((code) => code !== DEFAULT_LOCALE);
if (LOCALE_ARG && !TARGETS.includes(LOCALE_ARG)) {
  console.error(`stamp-translations: unknown locale "${LOCALE_ARG}" — expected one of ${TARGETS.join(', ')}`);
  process.exit(1);
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

for (const locale of LOCALE_ARG ? [LOCALE_ARG] : TARGETS) {
  const localeRoot = path.join(ROOT, 'i18n', locale);
  for (const fileRel of await walk(localeRoot)) {
    const target = path.join(localeRoot, fileRel);
    const source = path.join(ROOT, 'docs', fileRel);

    let english;
    try {
      english = await fs.readFile(source, 'utf8');
    } catch {
      missing.push(`${locale}/${fileRel}`);
      continue;
    }

    const raw = await fs.readFile(target, 'utf8');
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
}

console.log(`stamp-translations: ${stamped} stamped, ${skipped} already carried a hash`);
for (const entry of missing) {
  console.error(`stamp-translations: no English source for i18n/${entry}`);
}
if (missing.length) process.exit(1);
