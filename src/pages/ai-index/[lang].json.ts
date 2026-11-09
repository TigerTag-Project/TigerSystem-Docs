// /ai-index/<lang>.json — every page of one language as plain text, for the AI
// assistants that answer TigerSystem questions (Tiger Studio's `search_wiki` /
// `read_wiki_page` MCP tools). A page not translated yet comes in English, the
// way Starlight serves it. Built with the site; nothing is fetched at runtime.
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

import { DEFAULT_LOCALE, LOCALES, SITE_URL } from '../../../scripts/lib/docs-config.mjs';

const MAX_TEXT = 12000;   // characters per page — a page is read whole by read_wiki_page

export const getStaticPaths: GetStaticPaths = () => LOCALES.map((lang) => ({ params: { lang } }));

// Markdown / MDX → readable text: no imports, components, tags, link targets or
// image syntax; code and headings stay (they are what people search for).
function plain(body = '') {
  return body
    .replace(/^import\s.+$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    .replace(/^:::\w*.*$/gm, '')
    .replace(/[*_`]{1,3}([^*_`\n]+)[*_`]{1,3}/g, '$1')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = async ({ params }) => {
  const lang = String(params.lang);
  const prefixes = LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((l) => `${l}/`);
  const all = await getCollection('docs');
  const english = all.filter((e) => !prefixes.some((p) => e.id.startsWith(p)));
  const own = new Map(all.filter((e) => lang !== DEFAULT_LOCALE && e.id.startsWith(`${lang}/`)).map((e) => [e.id.slice(lang.length + 1), e]));
  const pages = english.map((en) => {
    const e = own.get(en.id) || en;
    const slug = en.id === 'index' ? '' : `${en.id}/`;
    const headings = [...String(e.body || '').matchAll(/^#{2,3}\s+(.+)$/gm)].map((m) => m[1].trim());
    return {
      url: `${SITE_URL}/${lang === DEFAULT_LOCALE ? '' : `${lang}/`}${slug}`,
      lang: own.has(en.id) ? lang : DEFAULT_LOCALE,
      title: e.data.title,
      description: e.data.description || '',
      headings,
      text: plain(e.body).slice(0, MAX_TEXT),
    };
  });
  return new Response(JSON.stringify({ lang, built: new Date().toISOString(), pages }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
