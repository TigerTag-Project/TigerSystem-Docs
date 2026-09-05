import path from 'node:path';

import {
  CARD_GRIDS,
  NAV_FOOTER_SEGMENT,
  NOT_PUBLISHED,
  REPO_URL,
  ROOT_FILE_TARGETS,
} from './docs-config.mjs';

const posix = path.posix;

/* -------------------------------------------------------------------------- */
/* Frontmatter                                                                 */
/* -------------------------------------------------------------------------- */

/** Split a leading `---` YAML block off a markdown string. */
export function splitFrontmatter(source) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { frontmatter: '', body: source };
  return { frontmatter: match[1], body: source.slice(match[0].length) };
}

/** Minimal YAML scalar quoting — enough for titles and descriptions. */
export function yamlString(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

/* -------------------------------------------------------------------------- */
/* URL mapping                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Map a path relative to `docs/` to its site URL.
 * `products/README.md` -> `/products/`, `products/tigertag.md` -> `/products/tigertag/`,
 * anything else (assets, .html, .zip) keeps its path and is served from `public/`.
 */
export function docPathToUrl(docRelPath) {
  if (!docRelPath.endsWith('.md')) return `/${docRelPath}`;
  const dir = posix.dirname(docRelPath);
  const base = posix.basename(docRelPath, '.md');
  const segments = base.toLowerCase() === 'readme' ? dir : posix.join(dir, base);
  const clean = segments === '.' ? '' : segments;
  return clean ? `/${clean}/` : '/';
}

/** Map a path relative to `docs/` to its path inside the content collection. */
export function docPathToContentPath(docRelPath) {
  const dir = posix.dirname(docRelPath);
  const base = posix.basename(docRelPath, '.md');
  const name = base.toLowerCase() === 'readme' ? 'index' : base;
  return dir === '.' ? `${name}.md` : `${dir}/${name}.md`;
}

/** Prefix a site-internal page URL with its locale (the root locale keeps `/`). */
export function localizeUrl(url, locale) {
  if (locale === 'en') return url;
  return url === '/' ? `/${locale}/` : `/${locale}${url}`;
}

/* -------------------------------------------------------------------------- */
/* Link rewriting                                                              */
/* -------------------------------------------------------------------------- */

const ABSOLUTE = /^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#)/i;

/**
 * Resolve one relative href found inside `fileRel` (a path relative to `docs/`).
 * Returns `{ href, internal }`, where `internal` is the site path to validate,
 * or `null` when the link leaves the site.
 */
export function resolveHref(rawHref, fileRel, locale, problems) {
  const href = rawHref.trim();
  if (!href || ABSOLUTE.test(href)) return { href: rawHref, internal: null };

  const hashIndex = href.search(/[#?]/);
  const target = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const suffix = hashIndex === -1 ? '' : href.slice(hashIndex);
  if (!target) return { href: rawHref, internal: null };

  const decoded = decodeURIComponent(target);

  // Resolve against the repository root, so a link that climbs out of docs/ and
  // back in again (`../../docs/faq/README.md`) lands where GitHub puts it.
  const fromRoot = posix.normalize(posix.join('docs', posix.dirname(fileRel), decoded));
  if (fromRoot.startsWith('..')) {
    problems.push(`${fileRel}: link "${rawHref}" escapes the repository`);
    return { href: rawHref, internal: null };
  }

  if (!fromRoot.startsWith('docs/')) {
    const mapped = ROOT_FILE_TARGETS[fromRoot];
    if (!mapped) {
      problems.push(`${fileRel}: link "${rawHref}" points outside docs/ to an unmapped file "${fromRoot}"`);
      return { href: rawHref, internal: null };
    }
    const internal = mapped.startsWith('/') ? localizeUrl(mapped, locale) : null;
    return { href: (internal ?? mapped) + suffix, internal };
  }

  const resolved = fromRoot.slice('docs/'.length);

  // A link to a folder inside docs/ means "browse this folder" — the site has no
  // page for it, so it keeps pointing at the repository tree.
  if (decoded.endsWith('/') || !posix.basename(resolved).includes('.')) {
    return { href: `${REPO_URL}/tree/main/${fromRoot}${suffix}`, internal: null };
  }

  if (NOT_PUBLISHED.has(resolved)) {
    problems.push(`${fileRel}: link "${rawHref}" points at "${resolved}", which is not published to the site`);
    return { href: rawHref, internal: null };
  }

  if (resolved.endsWith('.md')) {
    const url = localizeUrl(docPathToUrl(resolved), locale);
    return { href: url + suffix, internal: url, source: resolved };
  }

  // Assets, the swatch playground, press archives: served straight from public/.
  const url = `/${resolved}`;
  return { href: url + suffix, internal: url, source: resolved };
}

const MD_LINK = /(!?\[(?:[^\][]|\[[^\]]*\])*\])\(\s*<?([^)<>\s]+)>?((?:\s+"[^"]*")?)\s*\)/g;
const HTML_ATTR = /\b(src|href)=(")([^"]*)(")/g;

/** Rewrite every relative link and asset path on a single line of markdown. */
export function rewriteLinks(line, fileRel, locale, problems, links) {
  const record = (result) => {
    if (result.internal) links.push({ url: result.internal, source: result.source, from: fileRel });
    return result.href;
  };

  let out = line.replace(MD_LINK, (match, label, href, title) => {
    const result = resolveHref(href, fileRel, locale, problems);
    return `${label}(${record(result)}${title})`;
  });

  out = out.replace(HTML_ATTR, (match, attr, q1, value, q2) => {
    const result = resolveHref(value, fileRel, locale, problems);
    return `${attr}=${q1}${record(result)}${q2}`;
  });

  return out;
}

/* -------------------------------------------------------------------------- */
/* Card grids derived from a section index table                               */
/* -------------------------------------------------------------------------- */

const CELL_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;
const CELL_IMG = /<img[^>]*\bsrc="([^"]+)"[^>]*>/;

function stripInline(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitRow(row) {
  return row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split(/(?<!\\)\|/)
    .map((cell) => cell.trim());
}

/** Locate the first GFM table in a set of lines. Returns null if there is none. */
function findTable(lines, fenced) {
  for (let i = 0; i < lines.length - 1; i += 1) {
    if (fenced[i] || fenced[i + 1]) continue;
    if (!lines[i].trim().startsWith('|')) continue;
    if (!/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) continue;
    let end = i + 2;
    while (end < lines.length && !fenced[end] && lines[end].trim().startsWith('|')) end += 1;
    return { start: i, separator: i + 1, bodyStart: i + 2, end };
  }
  return null;
}

function cardHtml({ icon, title, href, description, badge }) {
  const parts = ['<a class="ts-card" href="', escapeAttr(href), '">'];
  if (icon) {
    // Product icons are drawn in the brand orange and sit well on a tinted tile;
    // printer-maker marks are neutral grey and should not be tinted.
    const kind = icon.includes('/brands/') ? ' ts-card__icon--neutral' : '';
    parts.push(
      `<span class="ts-card__icon${kind}"><img src="${escapeAttr(icon)}" alt="" loading="lazy" /></span>`,
    );
  }
  parts.push('<span class="ts-card__body">');
  parts.push(`<span class="ts-card__title">${escapeText(title)}</span>`);
  if (badge) parts.push(`<span class="ts-card__badge">${escapeText(badge)}</span>`);
  if (description) parts.push(`<span class="ts-card__text">${escapeText(description)}</span>`);
  parts.push('</span></a>');
  return parts.join('');
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function escapeText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Turn the leading table of a configured section index into a card grid.
 * Cards are derived from the table itself, so the visual router and the source
 * of truth can never disagree.
 */
export function applyCardGrid(lines, fenced, fileRel, problems) {
  const config = CARD_GRIDS[fileRel];
  if (!config) return lines;

  const table = findTable(lines, fenced);
  if (!table) {
    problems.push(`${fileRel}: expected a table to build the card grid from, found none`);
    return lines;
  }

  const rows = lines.slice(table.bodyStart, table.end).map(splitRow);
  const cards = [];
  for (const row of rows) {
    const titleCell = row[config.columns.title] ?? '';
    const link = CELL_LINK.exec(titleCell);
    if (!link) continue; // rows without a page of their own (e.g. Qidi) get no card
    const icon = CELL_IMG.exec(titleCell)?.[1];
    cards.push(
      cardHtml({
        icon,
        title: link[1],
        href: link[2],
        description: stripInline(row[config.columns.description] ?? ''),
        badge: config.columns.badge === undefined ? null : stripInline(row[config.columns.badge] ?? ''),
      }),
    );
  }

  if (cards.length < config.minRows) {
    problems.push(
      `${fileRel}: card grid built only ${cards.length} cards from the leading table ` +
        `(expected at least ${config.minRows}) — the table shape probably changed`,
    );
    return lines;
  }

  const grid = ['<div class="ts-cardgrid">', ...cards, '</div>'];
  const before = lines.slice(0, table.start);
  const after = lines.slice(table.end);
  const original = lines.slice(table.start, table.end);

  return config.mode === 'replace-table'
    ? [...before, ...grid, '', ...after]
    : [...before, ...grid, '', ...original, ...after];
}

/* -------------------------------------------------------------------------- */
/* Mermaid                                                                     */
/* -------------------------------------------------------------------------- */

const MERMAID_OPEN = /^\s{0,3}(`{3,}|~{3,})\s*mermaid\s*$/;
const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };

/**
 * Turn ```mermaid fences into <pre class="mermaid"> blocks the browser draws.
 *
 * Done here rather than as a remark plugin because Starlight's Expressive Code
 * claims code fences first and would render the diagram as highlighted source.
 * A <pre> is a CommonMark HTML block that runs to its closing tag, so the
 * diagram source survives verbatim, blank lines included.
 */
function inlineMermaid(lines, fenced) {
  const out = [];
  for (let i = 0; i < lines.length; i += 1) {
    const open = MERMAID_OPEN.exec(lines[i]);
    if (!open || !fenced[i]) {
      out.push(lines[i]);
      continue;
    }
    const marker = open[1];
    const close = new RegExp(`^\\s{0,3}${marker[0]}{${marker.length},}\\s*$`);
    let end = i + 1;
    while (end < lines.length && !close.test(lines[end])) end += 1;

    out.push('<pre class="mermaid">');
    for (const line of lines.slice(i + 1, end)) {
      out.push(line.replace(/[&<>]/g, (char) => HTML_ESCAPES[char]));
    }
    out.push('</pre>');
    i = end;
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Whole-file transform                                                        */
/* -------------------------------------------------------------------------- */

/** Mark which lines sit inside a fenced code block, so they are never rewritten. */
function markFences(lines) {
  const fenced = new Array(lines.length).fill(false);
  let fence = null;
  lines.forEach((line, index) => {
    const open = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
    if (fence) {
      fenced[index] = true;
      if (open && open[1][0] === fence[0] && open[1].length >= fence.length) fence = null;
    } else if (open) {
      fence = open[1];
      fenced[index] = true;
    }
  });
  return fenced;
}

/** Strip the hand-maintained Previous / Index / Next footer, keeping "Related:". */
function stripNavFooter(lines, fenced) {
  const out = lines.map((line, index) => {
    if (fenced[index]) return line;
    if (!line.includes('**')) return line;
    if (!NAV_FOOTER_SEGMENT.test(line.trim())) return line;
    const kept = line
      .trim()
      .split(' · ')
      .filter((segment) => !NAV_FOOTER_SEGMENT.test(segment.trim()));
    return kept.length ? kept.join(' · ') : null;
  });

  const kept = out.filter((line) => line !== null);

  // Drop the separator rule that used to introduce the footer, if it is now last.
  let last = kept.length - 1;
  while (last >= 0 && kept[last].trim() === '') last -= 1;
  if (last >= 0 && /^\s*(-{3,}|\*{3,})\s*$/.test(kept[last])) kept.length = last;

  return kept;
}

const SKIP_FOR_DESCRIPTION = /^\s*(?:#|\||<|!\[|\*\s|-\s|\d+\.\s|```|~~~|\*\*Related)/;

/** First real sentence of the page, used as the meta description. */
function deriveDescription(lines, fenced) {
  const collected = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (fenced[i]) continue;
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      if (collected.length) break;
      continue;
    }
    if (SKIP_FOR_DESCRIPTION.test(line)) {
      if (collected.length) break;
      continue;
    }
    collected.push(trimmed.replace(/^>\s?/, ''));
  }
  if (!collected.length) return '';

  let text = stripInline(collected.join(' '));
  if (text.length > 160) {
    const cut = text.slice(0, 160);
    const space = cut.lastIndexOf(' ');
    text = `${(space > 80 ? cut.slice(0, space) : cut).replace(/[,;:.—-]+$/, '')}…`;
  }
  return text;
}

/**
 * Transform one source markdown file into the page the site renders.
 * Never mutates the source; everything happens on the copy.
 */
export function transformDoc({ source, fileRel, locale }) {
  const problems = [];
  const links = [];
  const { frontmatter, body } = splitFrontmatter(source);

  let lines = body.split(/\r?\n/);
  let fenced = markFences(lines);

  // 1. Title: the first H1 becomes the Starlight page title and leaves the body,
  //    so the rendered page does not show it twice.
  let title = '';
  for (let i = 0; i < lines.length; i += 1) {
    if (fenced[i]) continue;
    const heading = /^#\s+(.+?)\s*$/.exec(lines[i]);
    if (!heading) continue;
    title = stripInline(heading[1]);
    lines.splice(i, 1);
    while (i < lines.length && lines[i].trim() === '') lines.splice(i, 1);
    fenced = markFences(lines);
    break;
  }
  if (!title) problems.push(`${fileRel}: no level-1 heading to derive a title from`);

  // 2. Description, read before links become absolute URLs.
  const description = deriveDescription(lines, fenced);

  // 3. Drop the repository navigation footer (Starlight renders its own).
  lines = stripNavFooter(lines, fenced);
  fenced = markFences(lines);

  // 4. Visual card grid for the section index pages that have one.
  lines = applyCardGrid(lines, fenced, fileRel, problems);
  fenced = markFences(lines);

  // 5. Rewrite every relative link and asset path.
  lines = lines.map((line, index) =>
    fenced[index] ? line : rewriteLinks(line, fileRel, locale, problems, links),
  );

  // 6. Hand the mermaid diagrams to the browser. Last, so link rewriting never
  //    looked at diagram source in the first place.
  lines = inlineMermaid(lines, fenced);
  fenced = markFences(lines);

  // Collapse the blank runs left behind by the removed headings and footers,
  // taking care not to reflow anything inside a code block.
  const outBody = lines
    .map((line, index) => (fenced[index] ? line : line.replace(/\s+$/, '')))
    .join('\n')
    .replace(/(^|\n)\n{2,}(?=\S|$)/g, '$1\n')
    .trimEnd();

  return { title, description, frontmatter, body: outBody, problems, links };
}
