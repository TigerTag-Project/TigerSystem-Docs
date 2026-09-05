/**
 * Shared configuration for the documentation site generator.
 *
 * Everything here describes how the *site* derives from `docs/`.
 * `docs/` itself is the source of truth and is never written to by the build.
 */

/** GitHub repository the docs live in — used for edit links and blob links. */
export const REPO = 'TigerTag-Project/TigerSystem-Docs';
export const REPO_URL = `https://github.com/${REPO}`;
export const BLOB_URL = `${REPO_URL}/blob/main`;

/** Public origin of the documentation site. */
export const SITE_URL = 'https://wiki.tigersystem.io';

/** Locales. `en` is the source language and is served from the site root. */
export const LOCALES = /** @type {const} */ (['en', 'fr']);
export const DEFAULT_LOCALE = 'en';

/**
 * Repository-root files that `docs/**` links to with `../../`.
 * Anything not listed here is a broken link and fails the sync.
 */
export const ROOT_FILE_TARGETS = {
  'README.md': '/',
  'llms.txt': '/llms.txt',
  'CONTRIBUTING.md': `${BLOB_URL}/CONTRIBUTING.md`,
  'TRADEMARK.md': `${BLOB_URL}/TRADEMARK.md`,
  'LICENSE': `${BLOB_URL}/LICENSE`,
};

/**
 * Pages in `docs/` that are repository housekeeping rather than reader-facing
 * documentation, and are therefore not published as site pages.
 * Keep this list tiny and justified — every other page must be reachable
 * from the curated sidebar.
 */
export const NOT_PUBLISHED = new Map([
  [
    'assets/README.md',
    'Naming conventions for the docs/assets folder — meaningful to repo contributors, noise for readers.',
  ],
  [
    '_TODO-content.md',
    'Working file tracking content gaps; removed before the docs-site branch is merged.',
  ],
]);

/**
 * Section index pages whose leading table is turned into a visual card grid.
 * The cards are *derived from the table*, so the page cannot drift from the
 * source of truth. If the table shape changes, the sync fails loudly.
 */
export const CARD_GRIDS = {
  'products/README.md': {
    mode: 'replace-table', // the cards carry every column, so the table goes
    columns: { title: 0, description: 1, badge: 2 },
    minRows: 6,
  },
  'compatibility/README.md': {
    mode: 'before-table', // the matrix carries more than the cards do — keep it
    columns: { title: 0, description: 1 },
    minRows: 6,
    heading: null,
  },
};

/**
 * The hand-maintained "Previous / Index / Next" footer segments, matched by their
 * arrows rather than their wording so the French pages are recognised too.
 * The "Related:" line carries real information and is deliberately not matched.
 */
export const NAV_FOOTER_SEGMENT = /^\*\*(?:◀|▲\s*\[|[^*]*▶\*\*)/;
