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

   > **TODO:** exact NTAG payload offsets — see the RFID guide once published.

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

## License

By contributing you agree that your contribution is licensed under
[CC BY 4.0](./LICENSE).
