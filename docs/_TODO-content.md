# Content gaps found while building the documentation site

> **Working file.** Written while reading every page in `docs/` to curate the
> site navigation. Nothing here was fixed in place: these are editorial calls,
> not build problems. **Delete this file before merging `feat/docs-site`**, once
> each item is either fixed or moved to an issue.

## Fixed on this branch

- **Reserved area was documented as 32 bytes; it is 64.** Pages `0x18`–`0x1F`
  hold 32 bytes of *Signature R* and `0x20`–`0x27` 32 bytes of *Signature S*,
  which is also 16 NTAG pages × 4 bytes, leaving 80 bytes of data out of the
  144-byte payload. Reported by a community member, verified against the RFID
  guide, confirmed by Benoit. Corrected in `concepts/tigertag-chip.md` and
  `products/tigertag.md`.
- **"It moves through three states"** in `concepts/universal-filament-identity.md`,
  under a heading, a diagram and a bullet list that all say four. Corrected to
  four. This exact sentence made an outside reader publish the wrong model.

## Also fixed: the trademark was documented as more closed than it is

Reading the RFID guide's `TRADEMARK.md` and `CERTIFICATION.md` — which are far
more precise than this repository's summary was — turned up a systematic
understatement in four places. All corrected:

- **Referential logo use is free** and was documented nowhere. Anyone may show
  the TigerTag logo, unmodified, in an app, documentation or store listing to
  say their product works with TigerTag. What needs a licence is applying the
  mark **on** a chip, carrier, spool or packaging, where it asserts origin
  rather than compatibility. `TRADEMARK.md`, `developers/README.md`,
  `products/tigertag.md` and `glossary.md` all said only the restrictive half.
- **`TigerTag Compatible` is a named tier** in the guide's certification model
  and appeared nowhere here; only `TigerTag Certified` was documented. Added to
  the glossary as the free tier beside the licensed one.
- **Reselling** was undocumented. Official chips are made by TigerSystem and
  already carry the mark; a distributor listing them as official product is not
  applying the mark.
- The root `TRADEMARK.md` now defers to the guide for the detailed policy
  rather than paraphrasing it — two full trademark notices in two repositories
  had already drifted apart, which is exactly what rule 3 exists to prevent.

## Broken or misleading content

| Where | What | Suggested fix |
|---|---|---|
| [`concepts/tigertag-chip.md`](./concepts/tigertag-chip.md) — "Reading and writing" table | Three of the four rows have **empty Read and Write cells** (Tiger NFC Connect, JS SDK, Python SDK). Only the Tiger Studio row says anything. It looks like check marks were lost in an edit. | Restore the marks, or replace the columns with prose. |
| [`concepts/universal-filament-identity.md`](./concepts/universal-filament-identity.md) | The heading says **"One identity, four states"**, the sentence right below it says the identity "moves through **three** states", and the diagram shows four (TigerData, TigerData+, TigerTag, TigerTag+). | Change the sentence to four. |
| `README.md`, [`faq/README.md`](./faq/README.md), [`products/tigertag-connect.md`](./products/tigertag-connect.md), [`tutorials/first-smart-spool.md`](./tutorials/first-smart-spool.md), `llms.txt` | The Tiger NFC Connect download link is **`tigersystem.io/fr/download`** — an English-language page sending readers to a French URL, in five places. | Use a locale-neutral URL, or `…/en/download`. |
| [`compatibility/third-party-hardware.md`](./compatibility/third-party-hardware.md) line 15 | Links to `../../docs/faq/README.md` — it climbs out of `docs/` and back in. It resolves, but every other page writes `../faq/README.md`. | Normalise the path. |
| [`products/tigertag-connect.md`](./products/tigertag-connect.md) | The product is now **Tiger NFC Connect**, but the file is still `tigertag-connect.md`, so its URL reads `/products/tigertag-connect/`. | Renaming is a breaking change for existing links — decide deliberately, and add a redirect in `astro.config.mjs` if it happens. |
| [`products/tigertag-plus.md`](./products/tigertag-plus.md) | **The two repositories define TigerTag+ differently, and only one can be canonical.** This page says a TigerTag+ is a chip **the owner backed up** in their account — "a chip with a backup *is* a TigerTag+". The [RFID guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) defines it as a distinct chip type id (`0xBC0FCB97`) carrying an **ECDSA-P256 signature and a cloud product id**, written by **partner brands only**. Under the guide's model, backing up a standard TigerTag (`0x5BF59264`) does not change what the chip is. | Not a wording fix — a product decision. Decide which definition is canonical, then align the other repository. |
| [`concepts/universal-filament-identity.md`](./concepts/universal-filament-identity.md) and the RFID guide | **Two different state models.** This repo describes four states (TigerData → TigerData+ → TigerTag → TigerTag+). The guide knows three chip type ids — TigerTag, TigerTag+ and **TigerTag Init** (`0x6C41A2E1`, the factory blank marker) — and never mentions TigerData at all. Neither is wrong: one describes the record's lifecycle, the other what is written on silicon. But nothing says so, so readers reconcile them by guessing. | Say explicitly that the four states are states of the *identity* and the type ids are states of the *chip*, and document TigerTag Init somewhere. |
| [`compatibility/README.md`](./compatibility/README.md) and [`compatibility/klipper.md`](./compatibility/klipper.md) | The matrix lists Snapmaker as **Live — Moonraker WebSocket** and Klipper as **not yet**. Readers infer transitively that any Moonraker machine works. At least one person has written a public page based on that inference. | One sentence saying the Snapmaker link happens to use Moonraker but generic Klipper machines are not supported. |

## Outside this repository

| Where | What | Priority |
|---|---|---|
| The shop, and [`products/tigertag.md`](./products/tigertag.md) | **A naming decision, not a rename.** The shop sells under **"TigerTag Maker"** (21 occurrences on the collection page); `products/tigertag.md` states that name is retired in favour of plain **TigerTag**. But the shop sells **blank chips carrying the TigerTag logo** — no data on them — so calling them "TigerTag" would imply they arrive encoded, which is worse than the name it replaces. Whatever is chosen has to distinguish *the protocol tier* from *the blank product*, on both surfaces. | **Highest**, and it needs a decision before anyone edits either surface. |
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
