# Contributing to the TigerSystem documentation

Thank you for helping document the TigerSystem ecosystem! This repository is
**documentation only** — no application code lives here.

## Where things go

| You want to… | Go to |
|---|---|
| Fix or improve **ecosystem documentation** (this repo) | Open a PR here |
| Report a bug in the **desktop app** | [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues) |
| Improve the **cloud / third-party integration docs** | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) |
| Work on the **JS / Python SDKs** | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) · [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) |
| Hack on **TigerScale** or **TigerPOD** hardware | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) · [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) |

## Writing rules

1. **English only.** All documentation is written in English.
2. **One topic per page.** If a page grows two unrelated subjects, split it.
3. **Never duplicate — cross-reference.** Every fact has exactly one canonical
 location. If it already lives in another repo (e.g. the Firestore data model,
 a printer protocol), **link to it** instead of copying it.
4. **Never invent.** If information is missing, mark it explicitly:

  >**TODO:** exact NTAG payload offsets — see the RFID guide once published.

5. **Markdown + Mermaid only.** Diagrams are written as ` ```mermaid ` blocks so
 they render on GitHub and stay diffable.
6. **Navigation footer.** Every page in `docs/` ends with a *Previous / Index /
 Next* footer and a *Related* line — keep them working when you move pages.
7. **Tables over walls of text.** Prefer short sections, tables, and callouts
 (`> **Note:**`, `> **Warning:**`).

## Workflow

1. Fork, branch from `main`.
2. Make your change; check every relative link you touched.
3. Open a PR with a one-line summary of *what* changed and *why*.

## The documentation site

Everything in `docs/` is also published at
**[wiki.tigersystem.io](https://wiki.tigersystem.io)**. The site is generated
from this repository at build time — it never keeps a second copy of the
content, so `docs/` stays the only place a fact lives.

```
docs/**             English, canonical  ─┐
i18n/fr/**          French, derived     ─┼─►  src/content/docs/**   (generated, gitignored)
site/en|fr/**       site-only pages     ─┘
docs/** (non-.md), llms.txt             ──►  public/**             (generated, gitignored)
```

### Adding or changing a page

1. Edit the Markdown in `docs/` — nothing else. The site picks it up.
2. A folder's `README.md` becomes that folder's index page: `docs/products/README.md`
   is served at `/products/`, `docs/products/tigertag.md` at `/products/tigertag/`.
3. Keep writing relative links exactly as you do today (`../concepts/tigertag-chip.md`).
   The build rewrites them to site URLs, and fails if one points nowhere.
4. The first `# H1` becomes the page title and is removed from the body, so the
   title is not printed twice.
5. The *Previous / Index / Next* footer is dropped on the site — Starlight
   renders its own pagination from the navigation. Keep the footer anyway: it is
   what makes the pages readable directly on GitHub. The *Related* line is kept.
6. **A new page must be added to the navigation** in [`src/sidebar.mjs`](src/sidebar.mjs).
   `pnpm check:docs` fails until it is — that is deliberate: the navigation is
   curated by hand, which is what separates documentation from a file listing.

### Running it locally

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # what Vercel runs
pnpm check:docs   # broken links + navigation coverage; also runs in CI
```

`pnpm dev` and `pnpm build` both run `scripts/sync-docs.mjs` first. If you edit
`docs/` while the dev server is running, re-run `pnpm sync:docs` to refresh the
generated tree.

### Translations

English is the source language. French is derived and lives in `i18n/fr/`,
mirroring `docs/` file for file. Each French page records the SHA-256 of the
English file it was made from:

```bash
pnpm translate:check                      # which French pages are stale or missing
ANTHROPIC_API_KEY=… pnpm translate        # refresh the stale ones
ANTHROPIC_API_KEY=… pnpm translate -- --only products/tigertag.md
```

The key is read from the environment and must never be committed — see
[`.env.example`](.env.example). Translations are committed and reviewable like
any other change; correcting French prose by hand is welcome, and the site
carries a banner on every French page inviting readers to report an error.
A page with no translation yet is still served under `/fr/`, showing the English
text with Starlight's own "not translated" notice.

### What lives where

| Path | What it is |
|---|---|
| `docs/` | The source of truth. English. Never written to by the build. |
| `i18n/fr/` | French translations, committed. |
| `site/en/`, `site/fr/` | Pages that belong to the site, not to the documentation — the home page. |
| `site/public/` | Static files the site owns (as opposed to the ones under `docs/`). |
| `src/sidebar.mjs` | The curated navigation. |
| `src/styles/tigersystem.css` | Brand tokens and component styling. |
| `src/components/` | Starlight overrides — header brand, mermaid, Giscus comments. |
| `scripts/sync-docs.mjs` | Builds the content tree from `docs/`. The piece to read first. |
| `scripts/translate.mjs` | Refreshes `i18n/fr/`. |
| `scripts/screenshots.mjs` | Visual QA: every key page, both themes, desktop and mobile. |

## License

By contributing you agree that your contribution is licensed under
[CC BY 4.0](./LICENSE).
