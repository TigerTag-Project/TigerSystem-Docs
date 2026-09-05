# Content gaps found while building the documentation site

> **Working file.** Written while reading every page in `docs/` to curate the
> site navigation. Nothing here was fixed in place: these are editorial calls,
> not build problems. **Delete this file before merging `feat/docs-site`**, once
> each item is either fixed or moved to an issue.

## Broken or misleading content

| Where | What | Suggested fix |
|---|---|---|
| [`concepts/tigertag-chip.md`](./concepts/tigertag-chip.md) — "Reading and writing" table | Three of the four rows have **empty Read and Write cells** (Tiger NFC Connect, JS SDK, Python SDK). Only the Tiger Studio row says anything. It looks like check marks were lost in an edit. | Restore the marks, or replace the columns with prose. |
| [`concepts/universal-filament-identity.md`](./concepts/universal-filament-identity.md) | The heading says **"One identity, four states"**, the sentence right below it says the identity "moves through **three** states", and the diagram shows four (TigerData, TigerData+, TigerTag, TigerTag+). | Change the sentence to four. |
| `README.md`, [`faq/README.md`](./faq/README.md), [`products/tigertag-connect.md`](./products/tigertag-connect.md), [`tutorials/first-smart-spool.md`](./tutorials/first-smart-spool.md), `llms.txt` | The Tiger NFC Connect download link is **`tigersystem.io/fr/download`** — an English-language page sending readers to a French URL, in five places. | Use a locale-neutral URL, or `…/en/download`. |
| [`compatibility/third-party-hardware.md`](./compatibility/third-party-hardware.md) line 15 | Links to `../../docs/faq/README.md` — it climbs out of `docs/` and back in. It resolves, but every other page writes `../faq/README.md`. | Normalise the path. |
| [`products/tigertag-connect.md`](./products/tigertag-connect.md) | The product is now **Tiger NFC Connect**, but the file is still `tigertag-connect.md`, so its URL reads `/products/tigertag-connect/`. | Renaming is a breaking change for existing links — decide deliberately, and add a redirect in `astro.config.mjs` if it happens. |
| [`concepts/tigertag-chip.md`](./concepts/tigertag-chip.md) and [`products/tigertag.md`](./products/tigertag.md) | **Factually wrong against the normative source.** Both say the chip has a **32-byte** reserved area. [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) lays out pages `0x18`–`0x1F` as 32 bytes of *Signature R* and `0x20`–`0x27` as 32 bytes of *Signature S* — **64 bytes**, which also matches 16 NTAG pages × 4 bytes. Reported by a community member, verified against the guide. | Correct both pages to 64 bytes. Per the README's own rule this repo wins over other surfaces — but not over a measurement. |
| [`products/tigertag-plus.md`](./products/tigertag-plus.md) | Leads with "a TigerTag your account remembers" and mentions the signature only in passing; the RFID guide leads with the **ECDSA-P256 offline signature** and never mentions the backup. Both facets are real, so this is not a contradiction — but it reads as one, and readers comparing the two repos conclude they disagree. | State both halves in the opening paragraph: backup *and* provable origin, with the crypto cross-referenced to the guide. |
| [`compatibility/README.md`](./compatibility/README.md) and [`compatibility/klipper.md`](./compatibility/klipper.md) | The matrix lists Snapmaker as **Live — Moonraker WebSocket** and Klipper as **not yet**. Readers infer transitively that any Moonraker machine works. At least one person has written a public page based on that inference. | One sentence saying the Snapmaker link happens to use Moonraker but generic Klipper machines are not supported. |

## Outside this repository

| Where | What | Priority |
|---|---|---|
| The shop, `tigertag.io/collections/tigertag-rfid-maker` | Still sells under **"TigerTag Maker"** (21 occurrences on the collection page) while the docs say the name is now simply **TigerTag**. The old **"TigerTag Pro"** name is documented as retired in favour of **TigerTag+**. | **Highest.** It is the first thing a buyer sees, and it makes the documentation look wrong rather than the shop. |
| The shop | Reported to advertise a **36-byte** personalised message; the RFID guide specifies **28 bytes** UTF-8 (pages `0x10`–`0x16`). Not verified on the shop side. | Check, then align on the guide. |

## Pages that are scaffolding

| Page | State |
|---|---|
| [`guides/README.md`](./guides/README.md) | No guides at all — four planned topics listed. It is in the navigation, so a reader can land on an empty section. |
| [`tutorials/README.md`](./tutorials/README.md) | One tutorial written, four planned. |
| [`roadmap/README.md`](./roadmap/README.md) | "Detailed roadmaps" table has a TODO in place of every product but Tiger Studio. |
| [`glossary.md`](./glossary.md) | Created with this branch as a **seed**, from terms already used elsewhere in the repo. Needs a pass by someone who can add the definitions the repo does not yet contain. |

## Declared TODOs, for the record

These are already marked in the source and are working as intended — listed so
the backlog is visible in one place.

- [`concepts/tigertag-chip.md`](./concepts/tigertag-chip.md) — byte-level field layout, pending the RFID guide.
- [`concepts/universal-filament-identity.md`](./concepts/universal-filament-identity.md) — public reference-database endpoint / dump format.
- [`developers/cloud-api.md`](./developers/cloud-api.md) — full HTTP API catalogue (auth model, error shapes).
- [`developers/sdks.md`](./developers/sdks.md) — minimal parse/encode examples for both SDKs.
- [`compatibility/klipper.md`](./compatibility/klipper.md) — which Moonraker surface to target.
- [`compatibility/openspool.md`](./compatibility/openspool.md) — OpenSpool → TigerData import mapping.
- [`vision/team.md`](./vision/team.md) — founder photo (`docs/assets/team-benoit-michaut.jpg`, absent) and further team members.

## Not published to the site

- [`assets/README.md`](./assets/README.md) — naming conventions for the assets
  folder. Useful to repository contributors, noise for readers, so
  `scripts/sync-docs.mjs` deliberately leaves it out (see `NOT_PUBLISHED` in
  `scripts/lib/docs-config.mjs`). Nothing links to it.
- This file, for the same reason.
