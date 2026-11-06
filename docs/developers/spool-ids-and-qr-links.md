# Spool ids and QR links

> **Ratified 2026-11-05 — not implemented yet.** Apps build on this contract.
> The points still open are listed at the end; settling one changes only what
> it names. Sections marked **Proposed** are not ratified yet: do not build on
> them before they are.

The rules every TigerSystem app follows:

1. how a **chipless spool** (TigerData / TigerData+) gets its id;
2. how a spool **keeps its link** when it gets a chip;
3. how a spool's id is written into the **QR code** of a printed label, and
   read back;
4. how an app **calls a spool with values** (a weight, a note) through a link;
5. how a **product** gets its own link (the page it opens is **proposed**);
6. how a link answers in **JSON** or as a **`.ttag` file**.
7. what a **printed label** carries, and its templates.

## 1. Spool ids

A spool is a document of the account's inventory,
`users/{uid}/inventory/{spoolId}`. The document id **is** the spool id: one
account cannot hold two spools with the same id.

| Spool | Id | Example |
|---|---|---|
| Chip (TigerTag / TigerTag+) | the chip's NFC UID, uppercase hex, 14 characters (an NTAG's 7-byte UID) | `04AB12CD3E4F80` |
| Chipless, minted from now on | `TigerData_` + epoch **milliseconds** (13 digits) + a random number **0000–9999** (always 4 digits) | `TigerData_17623456789014213` |
| Chipless, minted before this contract | `TigerData_` + 10 random digits | `TigerData_4480517985` |
| Chipless, legacy prefix | `CLOUD_` + 10 random digits | `CLOUD_4480517985` |
| Legacy decimal (old Android app) | the UID written in decimal, being migrated to hex | `1234567890123456` |

Ids already minted are **never rewritten** by this contract. Readers only test
the prefix (`TigerData_` / `CLOUD_` → chipless); none of them depends on the
number of digits. The id is an identifier, nothing else: never derive a
creation date from it. A 4-byte UID (a proprietary chip linked to a spool) is
never the name of an inventory document, so it never appears in a link.

### Minting a chipless id

Every app that creates chipless spools (Tiger Studio today, the mobile app
later) mints the id the same way:

1. **Compose** `TigerData_<Date.now()><four random digits>`.
2. **Local check** — if the id is already in the inventory the app holds (the
   live listener's copy, offline cache included) or in its `uidMigrationMap`,
   compose another one. This works offline.
3. **Write**
   - **online:** in a transaction that reads the document first and fails if
     it exists; on failure go back to step 1;
   - **offline:** a plain write, queued by Firestore until the network
     returns. Steps 1 and 2 are the only guard.

A plain `set()` on an id that already exists **overwrites** the spool already
there, silently. That is what step 3 prevents.

The four random digits also make a new chipless id practically unique
**across all accounts** (about one collision every 600 years at a million
chipless spools a year), so a server can later resolve a link for someone
other than the owner without changing any printed label.

## 2. Keeping the link when a spool gets a chip

Programming a chip on a chipless spool moves the spool to the chip's UID. In
**one batch**:

1. write the spool under the chip UID (and the twin UID, for a twin pair);
2. delete the `TigerData_…` document;
3. write the redirect `users/{uid}/uidMigrationMap/{old id}` →
   `{ hex_uid, migrated_at }`.

The batch makes the three happen together or not at all. The redirect lives in
`uidMigrationMap` (the collection that already maps legacy decimal ids to hex),
never as a stub document in the inventory: everything that reads the inventory
counts one document as one spool.

## 3. QR links

A printed spool label carries a QR code holding a link to the spool, **and
nothing else** (no weight, no note — printed values go stale):

```
HTTPS://QR.TIGERTAG.IO/<id>
```

Nothing is printed in clear next to the code: no id, no link. The QR code is
the way back to the spool.

`<id>` is the spool id **without its prefix**:

| Spool | Link |
|---|---|
| Chip | `HTTPS://QR.TIGERTAG.IO/04AB12CD3E4F80` |
| Chipless (new) | `HTTPS://QR.TIGERTAG.IO/17623456789014213` |
| Chipless (before this contract) | `HTTPS://QR.TIGERTAG.IO/4480517985` |
| `CLOUD_` | **no QR link** — the label is printed without a QR code |
| Legacy decimal | **no QR link** — migrate the spool to hex first |

### Encoding

- The whole link is **uppercase**. Only digits, uppercase letters and
  ` $%*+-./:` fit the QR **alphanumeric** mode, which keeps the code small; one
  lowercase letter or `_` switches it to byte mode. Schemes and host names are
  case-insensitive, and UIDs are uppercase hex already.
- Segments, with the mode set explicitly (generators default to byte mode):
  - chipless id (all digits): `HTTPS://QR.TIGERTAG.IO/` in **alphanumeric**
    mode, then the digits in **numeric** mode;
  - UID: the whole link as **one alphanumeric** segment (a second segment's
    header would cost a size).
- Error correction **M** (15 %): labels get scratched and folded.
- Result: **25 × 25 modules** for every spool. Draw each module on a whole
  number of printer dots, with the standard 4-module quiet zone.

### Reading a link back

Readers parse the id from the link **offline**: an app scanning a label never
needs the website. They read the path case-insensitively, ignore a trailing
`/`, and resolve it by its shape:

| Path | Spool id |
|---|---|
| 17 digits | `TigerData_<17 digits>` |
| 10 digits | `TigerData_<10 digits>` |
| 14 hex characters | the UID, uppercased |
| 13 hex characters starting with `4` | a truncated NTAG UID: `0` + the 13 characters ([repair rule](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `P/` + 8 hex characters | a product — [section 5](#5-product-links) |

A `.JSON` or `.TTAG` ending asks for the answer for tools — [section 6](#6-json-and-ttag-answers).

Apps **write** the short form above, but readers also **accept the long form**:
the `TigerData` prefix in any case, followed by `_` or `-`, then the 17 or 10
digits — `TigerData_17623456789014213`, `TigerData-17623456789014213`,
`TIGERDATA-17623456789014213`, `tigerdata_4480517985` all resolve to the same
spool. A link typed or shared by hand keeps working. The `CLOUD` prefix is not
accepted in either form.

A UID may be all digits, but it is 14 characters long, never 17 or 10, so the
length always decides. No legacy decimal id reaches a reader, since none is ever
printed. Any **other shape** is a label from a newer version: the reader says so
("update the app") instead of failing. Every other kind of thing gets its own
folder, a letter and a `/` (`P/` for a product, later `R/` for a rack), so it can
never clash with spool links already printed.

### Resolving the spool

1. Look the id up **in the signed-in viewer's own inventory**.
2. Not there → look it up in the viewer's `uidMigrationMap` and follow the
   redirect.
3. A twin pair has one label, with the main UID; either UID opens the spool.
4. A deleted spool (`deleted: true`) opens as "deleted", not as an error.

5. Anyone who is **not the owner** — not signed in, another account, an
   accepted friend included — is **sent to the product** of the spool, never
   shown the spool: the server finds the spool by its id across accounts (an
   index on the spool id), reads its `id_product` and redirects to the product
   link of [section 5](#5-product-links). No product, no match, or the same id
   in two accounts with different products → a page saying the spool is
   private, with "Start my inventory". The lookup runs only for those scans, so
   its cost follows them, not the number of accounts. *(Ratified 2026-11-06.)*

**Privacy:** knowing an id never shows a spool. A scanned link opens a spool
for its owner only; inside the apps, a spool is shown only to someone the
Firestore rules already let read it (the owner, an accepted
friend, a public inventory). Ids contain a timestamp and can be guessed; that
must never matter. The product of a spool is not private: it is printed on the
label, and a TigerTag+ chip carries it in clear for any NFC phone. The weight,
the note, the rack and the owner never leave.

## 4. Calling a spool with values

An app may build a link that opens a spool **and proposes values**, with
ordinary query parameters (these links are never printed, so readability wins
over QR size):

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Parameters

| Parameter | Value | Limit |
|---|---|---|
| `weight` | net filament weight, in grams | whole number, from 0 to the spool's capacity |
| `note` | the spool's note (the `message` field) | plain text, 28 bytes UTF-8 at most (the chip's slot) |

Names are case-insensitive. An unknown parameter is ignored, never an error. A
value out of its limit is refused. New parameters are added to this table, never
invented by one app alone.

### Who can apply them

| Situation | What happens |
|---|---|
| Not signed in | Values **refused**. The link offers to sign in, then opens the spool without them. |
| Signed in, not the owner (a friend's spool included) | Values **refused**. The spool opens if the rules allow it. |
| Signed in, the owner | The spool opens with the values **pre-filled**, and **one gesture** saves them ("Update: 640 g"). |

A link never writes by itself: anyone can craft one and send it, and being
signed in does not prove the person meant to apply it. An app that has to
write without a confirmation (a scale updating the weight continuously, an
integration) does not use links: it writes through the user's account under the
Firestore rules ([integration guide](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Product links

> **Ratified 2026-11-06.** The scan page below is still **proposed**.

A product — a filament of the catalogue, whoever owns a spool of it — has its
own link, for packaging, a shop shelf, a showroom or a printed catalogue:

```
HTTPS://QR.TIGERTAG.IO/P/<id_product>
```

- `<id_product>` is written in **hexadecimal, always 8 characters**, uppercase,
  zero-padded: the 4 bytes as they sit on the chip, so a firmware or an NFC
  reader builds the link without converting. Example: product `2855882328`
  → `HTTPS://QR.TIGERTAG.IO/P/AA394E58`, **25 × 25** modules.
- The decimal form stays where people see the number — the catalogue
  (`tigersystem.io/<lang>/catalog/2855882328`), a Code 128 barcode — and never
  goes into a `qr.tigertag.io` link.
- `P/00000000` and `P/FFFFFFFF` mean "no product": never printed, answered
  with `404`. An id that is not in the catalogue: `404` too.
- A product **removed** from the catalogue (withdrawn, or merged into another)
  answers `410` with a page saying it is no longer in the catalogue and offering
  the search. An `id_product` is never given to another product: a label already
  stuck can never open the wrong filament.
- The links are served by the **Hub** (`tigersystem.io`): `qr.tigertag.io`
  points to it. The scan page is a Hub page, in the phone's language; the
  `.JSON` and `.TTAG` answers are Hub API routes that read the catalogue
  (cached).
- A spool label never repeats its product: the spool link already leads to it
  ([section 3](#resolving-the-spool)).

### The scan page (proposed)

`P/…` opens a page built for a phone just after a scan, not the catalogue page:

1. the photo and the colour swatch, large; brand, material, colour name;
2. the print settings as large tiles: nozzle, bed, drying (temperature and
   time), density, diameter;
3. the documents (TDS, MSDS, RoHS, food contact) and the video;
4. where to buy it;
5. not signed in → "Start my inventory"; signed in → "Add to my inventory"
   (a TigerData+) and "Add to favourites";
6. "See it in the catalogue", to the full page.

## 6. JSON and .TTAG answers

> **Ratified 2026-11-06.**

A link ending in `.JSON` (any case) — or sent with `Accept: application/json` —
answers in JSON instead of a page. A link ending in `.TTAG` answers with the same
record as a [`.ttag` file](./ttag-format.md) to download
(`Content-Disposition: attachment`). These are addresses for tools, never printed.

The same logic as a scan ([resolving the spool](#resolving-the-spool)): the
owner gets the spool, anyone else its product.

| Link | The owner (`Authorization: Bearer <Firebase ID token>`) | Anyone else (not signed in, another account, a friend) |
|---|---|---|
| `…/P/AA394E58.JSON` | the product record | the same |
| `…/P/AA394E58.TTAG` | the product as a `.ttag` file | the same |
| `…/04AB12CD3E4F80.JSON` | the spool | `303` → `…/P/<id_product>.JSON`; no catalogue product (a TigerData, a maker TigerTag) → `404` |
| `…/04AB12CD3E4F80.TTAG` | the spool as a `.ttag` file | `303` → `…/P/<id_product>.TTAG`; no catalogue product → `404` |

Without a catalogue product nothing of the spool is answered, not even its
material: the `404` matches the "private spool" page of a scan.

- **Spool:** a [`.ttag` file](./ttag-format.md) holding that one record, the
  inventory document as Firestore stores it. It carries `id_product`; a tool
  that wants the product calls `…/P/<id_product>.JSON` next.
- **Product:** the catalogue record as the product API returns it, in the
  language of `?lang=` (English by default). Cached on the server and allowed
  from any site.
- A spool answer is never cached: it depends on who asks.
- Opened in Tiger Studio, a spool's `.ttag` imports in **Restore** mode (the
  spool as it was, chip and backup included); a product's `.ttag` imports in
  **Import** mode, as a new TigerData+ with a fresh id.
- A JSON or `.TTAG` request never writes: link values (`?weight=`, `?note=`)
  are ignored there.

## 7. Printed labels

Every app prints the same labels: two kinds, one set of templates, so a label
printed from Tiger Studio, the mobile app or the website looks and scans the
same.

| Label | Its QR code | Printed for |
|---|---|---|
| **Spool** | the spool link ([section 3](#3-qr-links)) | any spool that has a QR link (not `CLOUD_`, not legacy decimal) |
| **Product** (swatch card) | the product link ([section 5](#5-product-links)) | a spool or a catalogue product with a real `id_product` (TigerTag+, TigerData+) |

The owner scanning a spool label gets the spool; anyone else gets its product
([resolving the spool](#resolving-the-spool)). A product label opens the product
for everyone: it is the one for a swatch, a shelf or a showroom.

### What a label carries

- the brand, `material · series`, the colour name and the colour swatch (drawn
  with the [material swatch convention](../concepts/universal-filament-identity.md));
- up to **four value slots**, chosen by the user among: nozzle range, bed range,
  drying (temperature · time), TD, diameter;
- the QR code.

Only what does not change: never the remaining weight, the note, the rack or the
owner. Nothing in clear next to the QR code ([section 3](#3-qr-links)).

### Templates

| Template | Size (width × height) | Content |
|---|---|---|
| Classic (default) | 40 × 30 mm | everything, four slots |
| Expanded | 50 × 30 mm | everything, four slots, larger text |
| Compact | 40 × 25 mm | everything, two slots |
| Slim | 40 × 12 mm | brand, `material · series`, colour name, QR code — no slots |
| Vertical | 30 × 40 mm | everything, four slots, QR code below |
| Vertical compact | 25 × 40 mm | everything, two slots, QR code below |

40 × 30 mm is the common thermal label and fits a spool side and a printed
swatch. The QR code takes the largest whole number of printer dots per module
that fits, with its 4-module quiet zone: at 203 dpi a 25 × 25 code is 3 dots a
module on the Classic (≈ 12.4 mm with the quiet zone) and 2 on the Slim
(≈ 8.3 mm).

### Output

- **PDF**, **PNG** (at the printer's resolution) and **SVG**, so any printer
  works, through its own app if need be;
- direct printing to label printers (Brother QL, Niimbot, Phomemo) comes later,
  printer by printer, with the same templates.

## Open points

- **Uppercase scheme.** `HTTPS://` in uppercase is recognised as a link by the
  iPhone camera (tested 2026-11-05, chip and chipless links). Still to test:
  Google Lens, the Samsung camera and a basic scanner app. If one fails,
  the link goes lowercase (`https://qr.tigertag.io/` in byte mode + the id),
  which costs one size (29 × 29).
- **App links.** iOS (`apple-app-site-association`) and Android (intent
  filters) match paths case-sensitively by default: the mobile app must declare
  case-insensitive matching (iOS) and every form (Android).
- **Domain.** `qr.tigertag.io` is printed forever: renew `tigertag.io` on a long
  term.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Universal filament identity](../concepts/universal-filament-identity.md), [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Developer overview](./README.md)
