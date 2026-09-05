#!/usr/bin/env node
/**
 * sync-docs — build the Starlight content tree from the source of truth.
 *
 *   docs/**            (English, canonical) ─┐
 *   i18n/fr/**         (French, derived)    ─┼─►  src/content/docs/**   (gitignored)
 *   site/en|fr/**      (site-only pages)    ─┘
 *   docs/** non-markdown + llms.txt         ──►  public/**             (gitignored)
 *   site/public/**                          ──►  public/**
 *
 * The sources are only ever read. Every transformation happens on the copy.
 *
 * Flags:
 *   --check   validate instead of trusting: every internal link must resolve and
 *             every published page must be reachable from the curated sidebar.
 *             Exits non-zero on the first category of failure. Used in CI.
 *   --quiet   only print warnings and errors.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  DEFAULT_LOCALE,
  LOCALES,
  NOT_PUBLISHED,
  REPO_URL,
} from './lib/docs-config.mjs';
import {
  docPathToContentPath,
  docPathToUrl,
  localizeUrl,
  transformDoc,
  yamlString,
} from './lib/markdown.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const I18N = path.join(ROOT, 'i18n');
const SITE = path.join(ROOT, 'site');
const CONTENT = path.join(ROOT, 'src', 'content', 'docs');
const PUBLIC = path.join(ROOT, 'public');

const args = new Set(process.argv.slice(2));
const CHECK = args.has('--check');
const QUIET = args.has('--quiet');

const log = (...rest) => {
  if (!QUIET) console.log(...rest);
};

const problems = [];
const warnings = [];
const internalLinks = [];
/** Every URL the site actually serves. */
const served = new Set();
/** Published page URL -> source file, English only. */
const englishPages = new Map();

/* -------------------------------------------------------------------------- */

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
    else out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out.sort();
}

async function writeFile(target, content) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

async function copyFile(from, to) {
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
}

/* -------------------------------------------------------------------------- */
/* Markdown pages                                                              */
/* -------------------------------------------------------------------------- */

function frenchBanner(docRelPath) {
  const issue = new URL(`${REPO_URL}/issues/new`);
  issue.searchParams.set('title', `[FR] ${docRelPath}`);
  issue.searchParams.set(
    'body',
    `Page : \`i18n/fr/${docRelPath}\`\nSource : \`docs/${docRelPath}\`\n\nErreur constatée :\n`,
  );
  return (
    'Cette page a été <strong>traduite automatiquement</strong> depuis l’anglais. ' +
    `<a href="${issue.href.replace(/&/g, '&amp;')}">Signalez une erreur</a> ou ` +
    `<a href="${REPO_URL}/blob/main/i18n/fr/${docRelPath}">proposez une correction</a>.`
  );
}

async function syncLocale(locale) {
  const sourceRoot = locale === DEFAULT_LOCALE ? DOCS : path.join(I18N, locale);
  const outRoot = locale === DEFAULT_LOCALE ? CONTENT : path.join(CONTENT, locale);
  const files = (await walk(sourceRoot)).filter((f) => f.endsWith('.md'));

  if (!files.length) {
    warnings.push(
      `No markdown found for locale "${locale}" (${path.relative(ROOT, sourceRoot)}) — that locale will be empty.`,
    );
    return 0;
  }

  let count = 0;
  for (const fileRel of files) {
    if (NOT_PUBLISHED.has(fileRel)) continue;

    const source = await fs.readFile(path.join(sourceRoot, fileRel), 'utf8');
    const result = transformDoc({ source, fileRel, locale });
    problems.push(...result.problems);
    internalLinks.push(...result.links.map((link) => ({ ...link, locale })));

    const url = localizeUrl(docPathToUrl(fileRel), locale);
    served.add(url);
    if (locale === DEFAULT_LOCALE) englishPages.set(url, `docs/${fileRel}`);

    const editUrl =
      locale === DEFAULT_LOCALE
        ? `${REPO_URL}/edit/main/docs/${fileRel}`
        : `${REPO_URL}/edit/main/i18n/${locale}/${fileRel}`;

    const frontmatter = [
      '---',
      `title: ${yamlString(result.title || fileRel)}`,
      result.description ? `description: ${yamlString(result.description)}` : null,
      `editUrl: ${yamlString(editUrl)}`,
      locale === DEFAULT_LOCALE
        ? null
        : ['banner:', `  content: ${yamlString(frenchBanner(fileRel))}`].join('\n'),
      result.frontmatter || null,
      '---',
    ]
      .filter(Boolean)
      .join('\n') + '\n\n';

    await writeFile(path.join(outRoot, docPathToContentPath(fileRel)), `${frontmatter}${result.body}\n`);
    count += 1;
  }
  return count;
}

/** Hand-authored, site-only pages (the home splash) that are not part of docs/. */
async function syncSitePages(locale) {
  const from = path.join(SITE, locale);
  const outRoot = locale === DEFAULT_LOCALE ? CONTENT : path.join(CONTENT, locale);
  const files = await walk(from);
  for (const fileRel of files) {
    await copyFile(path.join(from, fileRel), path.join(outRoot, fileRel));
    const url = localizeUrl(docPathToUrl(fileRel.replace(/\.mdx?$/, '.md')), locale);
    served.add(url.replace(/index\/$/, ''));
    served.add(localizeUrl('/', locale));
  }
  return files.length;
}

/* -------------------------------------------------------------------------- */
/* Static files                                                                */
/* -------------------------------------------------------------------------- */

async function syncPublic() {
  const docFiles = (await walk(DOCS)).filter((f) => !f.endsWith('.md'));
  for (const fileRel of docFiles) {
    await copyFile(path.join(DOCS, fileRel), path.join(PUBLIC, fileRel));
    served.add(`/${fileRel}`);
  }

  // llms.txt is the canonical explainer for AI assistants — serve it at the root.
  await copyFile(path.join(ROOT, 'llms.txt'), path.join(PUBLIC, 'llms.txt'));
  served.add('/llms.txt');

  for (const fileRel of await walk(path.join(SITE, 'public'))) {
    await copyFile(path.join(SITE, 'public', fileRel), path.join(PUBLIC, fileRel));
    served.add(`/${fileRel}`);
  }
  return docFiles.length;
}

/* -------------------------------------------------------------------------- */
/* Checks                                                                      */
/* -------------------------------------------------------------------------- */

function collectSidebarLinks(items, out = new Set()) {
  for (const item of items ?? []) {
    if (typeof item === 'string') out.add(normalizeSlug(item));
    else if (item.link) out.add(normalizeSlug(item.link));
    else if (item.slug) out.add(normalizeSlug(item.slug));
    if (item.items) collectSidebarLinks(item.items, out);
  }
  return out;
}

function normalizeSlug(value) {
  const withSlashes = value.startsWith('/') ? value : `/${value}`;
  return withSlashes.endsWith('/') ? withSlashes : `${withSlashes}/`;
}

async function runChecks() {
  // 1. Every internal link resolves to something the site serves.
  const broken = [];
  for (const link of internalLinks) {
    const url = link.url.split('#')[0].split('?')[0];
    if (served.has(url)) continue;
    if (served.has(url.replace(/\/$/, ''))) continue;
    broken.push(`${link.locale}:${link.from} → ${link.url}`);
  }
  if (broken.length) {
    problems.push(`${broken.length} internal link(s) point at pages the site does not serve:`);
    problems.push(...broken.map((line) => `    ${line}`));
  }

  // 2. Every published English page is reachable from the curated sidebar.
  const { sidebar } = await import('../src/sidebar.mjs');
  const linked = collectSidebarLinks(sidebar);
  const orphans = [...englishPages.entries()]
    .filter(([url]) => url !== '/' && !linked.has(url))
    .map(([url, source]) => `${url}  (${source})`);
  if (orphans.length) {
    problems.push(`${orphans.length} page(s) are not reachable from the curated sidebar:`);
    problems.push(...orphans.map((line) => `    ${line}`));
  }

  // 3. The sidebar does not point at pages that no longer exist.
  const dangling = [...linked].filter((url) => !served.has(url));
  if (dangling.length) {
    problems.push(`${dangling.length} sidebar entr(ies) point at a missing page:`);
    problems.push(...dangling.map((line) => `    ${line}`));
  }
}

/* -------------------------------------------------------------------------- */

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true });
  await fs.rm(PUBLIC, { recursive: true, force: true });

  const assets = await syncPublic();
  let pages = 0;
  for (const locale of LOCALES) {
    pages += await syncLocale(locale);
    pages += await syncSitePages(locale);
  }

  // The site-only pages are the last word: they may deliberately shadow nothing,
  // but they must not have been clobbered by the doc pass.
  log(`sync-docs: ${pages} page(s), ${assets} asset(s) → src/content/docs + public`);

  for (const [file, reason] of NOT_PUBLISHED) {
    if (await exists(path.join(DOCS, file))) log(`sync-docs: not published — docs/${file} (${reason})`);
  }

  if (CHECK) await runChecks();

  for (const warning of warnings) console.warn(`sync-docs: warning: ${warning}`);

  if (problems.length) {
    console.error('\nsync-docs: problems found\n');
    for (const problem of problems) console.error(`  ${problem}`);
    console.error('');
    process.exit(1);
  }

  if (CHECK) log('sync-docs: check passed — links resolve, navigation covers every page');
}

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

await main();
