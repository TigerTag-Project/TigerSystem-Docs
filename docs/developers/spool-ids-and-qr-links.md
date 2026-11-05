# Spool ids and QR links

> **Ratified 2026-11-05 — not implemented yet.** Apps build on this contract.
> The points still open are listed at the end; settling one changes only what
> it names.

Four rules every TigerSystem app follows:

1. how a **chipless spool** (TigerData / TigerData+) gets its id;
2. how a spool **keeps its link** when it gets a chip;
3. how a spool's id is written into the **QR code** of a printed label, and
   read back;
4. how an app **calls a spool with values** (a weight, a note) through a link.

## 1. Spool ids

A spool is a document of the account's inventory,
`users/{uid}/inventory/{spoolId}`. The document id **is** the spool id: one
account cannot hold two spools with the same id.

| Spool | Id | Example |
|---|---|---|
| Chip (TigerTag / TigerTag+) | the chip's NFC UID, uppercase hex: 14 characters (7-byte UID), 8 (4-byte) or 20 (10-byte) | `04AB12CD3E4F80` |
| Chipless, minted from now on | `TigerData_` + epoch **milliseconds** (13 digits) + a random number **0000–9999** (always 4 digits) | `TigerData_17623456789014213` |
| Chipless, minted before this contract | `TigerData_` + 10 random digits | `TigerData_4480517985` |
| Chipless, legacy prefix | `CLOUD_` + 10 random digits | `CLOUD_4480517985` |
| Legacy decimal (old Android app) | the UID written in decimal, being migrated to hex | `1234567890123456` |

Ids already minted are **never rewritten** by this contract. Readers only test
the prefix (`TigerData_` / `CLOUD_` → chipless); none of them depends on the
number of digits. The id is an identifier, nothing else: never derive a
creation date from it.

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
- Result: **25 × 25 modules** for every chipless spool and every 4- or 7-byte
  UID; 29 × 29 for a 10-byte UID. Draw each module on a whole number of printer
  dots, with the standard 4-module quiet zone.

### Reading a link back

Readers parse the id from the link **offline**: an app scanning a label never
needs the website. They read the path case-insensitively, ignore a trailing
`/`, and resolve it by its shape:

| Path | Spool id |
|---|---|
| 17 digits | `TigerData_<17 digits>` |
| 10 digits | `TigerData_<10 digits>` |
| 8, 14 or 20 hex characters | the UID, uppercased |
| 13 hex characters starting with `4` | a truncated NTAG UID: `0` + the 13 characters ([repair rule](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |

Apps **write** the short form above, but readers also **accept the long form**:
the `TigerData` prefix in any case, followed by `_` or `-`, then the 17 or 10
digits — `TigerData_17623456789014213`, `TigerData-17623456789014213`,
`TIGERDATA-17623456789014213`, `tigerdata_4480517985` all resolve to the same
spool. A link typed or shared by hand keeps working. The `CLOUD` prefix is not
accepted in either form.

A UID may be all digits, but it is 8, 14 or 20 characters long, never 17 or 10,
so the length always decides. No legacy decimal id reaches a reader, since none
is ever printed. Any **other shape** is a label from a newer version: the reader
says so ("update the app") instead of failing. No current form contains a
letter after `F`: a future label kind (a rack, a product) takes a letter prefix
such as `R-…` without clashing with spool links already printed.

### Resolving the spool

1. Look the id up **in the signed-in viewer's own inventory**.
2. Not there → look it up in the viewer's `uidMigrationMap` and follow the
   redirect.
3. A twin pair has one label, with the main UID; either UID opens the spool.
4. A deleted spool (`deleted: true`) opens as "deleted", not as an error.

**Privacy:** knowing an id never shows a spool. A spool is shown only to
someone the Firestore rules already let read it (the owner, an accepted
friend, a public inventory). Ids contain a timestamp and can be guessed; that
must never matter.

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
