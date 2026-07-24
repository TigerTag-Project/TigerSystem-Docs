# The `.ttag` file format

The **`.ttag` inventory-interchange file** is a portable, offline snapshot of
one or more inventory materials. It is the unit for **backing up** your
filaments, **carrying** them on a USB stick, and **sharing** them — between
accounts, between tools, or as ready-made brand/range collections.

Introduced in **Tiger Studio Manager v2.14.0** (export + import). The format
is stable and cross-app: third-party tools, a future web playground that
generates `.ttag` files, and prepared filament collections all build on this
spec.

## File shape

A `.ttag` file is a single **UTF-8 JSON** document:

```json
{
  "format": "tigertag",
  "kind": "ttag",
  "version": 1,
  "exportedAt": 1752969600000,
  "exportedBy": "<owner uid>",
  "records": [ /* inventory documents, verbatim */ ],
  "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Field | Meaning |
|---|---|
| `format` / `kind` | Always `"tigertag"` / `"ttag"` — the identification pair checked on import |
| `version` | Format version; currently `1` |
| `exportedAt` | Export time, epoch-ms |
| `exportedBy` | Exporting owner's uid — **a UX hint for choosing the import mode ONLY, never a security boundary** |
| `records[]` | Inventory documents, carried **verbatim** |
| `rfidBackups` | *Optional.* Keyed by chip UID; present only for TigerTag+ (certified) spools — the signed factory dump used to restore the chip |

Rules baked into the format:

- **Timestamps are normalised.** Firestore Timestamps become epoch-ms so the
  file serialises cleanly.
- **Twins are atomic.** A twinned material always exports **both** sides —
  one material → two records, linked by `twin_tag_uid`. A half-twin is never
  produced.
- **Id discipline.** Only chipless `TigerData_<id>` ids may appear; a legacy
  `CLOUD_<id>` id is refused at export time.

## What a `.ttag` can carry

All three [spool tiers](../concepts/universal-filament-identity.md) export
and import:

| Tier | In the file |
|---|---|
| **TigerData** (fully digital, no chip) | The record itself |
| **TigerTag** (a written chip) | The record itself |
| **TigerTag+** (certified chip) | The record **plus** its signed factory dump in `rfidBackups` |

## Export

- **Single spool** — from the spool's detail toolbox → a file named
  `brand-material-color.ttag`.
- **Multi-selection** — select several spools, toolbar **Export** button → a
  file named `tigertag-selection-<date>.ttag`.
- Export is available for the **user's own inventory only**.

## Import — validate → preview → accept

The importer accepts **several `.ttag` files at once**: browse, paste an
http(s) link, or drag-and-drop anywhere on the window.

1. **Validate.** Each file must carry the `format`/`kind` pair and
   `version ≤ 1`. A non-`.ttag` file, a newer version, or an empty file is
   rejected.
2. **Sanitise.** File contents are untrusted input: non-http(s) URL fields
   are dropped; colour, weight and TD values are clamped to valid ranges.
3. **Preview.** Every material is shown in a preview table with a
   per-material **include checkbox**.
4. **Accept** in one of two modes — pre-hinted from `exportedBy`, freely
   switchable:

| | **Restore** | **Import** |
|---|---|---|
| Intent | Same account / a genuine restore | Adopting someone else's materials |
| Record ids | Kept — written **verbatim** under the original ids | **New** ids — each record becomes a fresh chipless `TigerData_` spool owned by the importer |
| TigerTag+ status | Kept — each `rfidList` backup restored | Dropped — fresh `id_tigertag` nonce (NOT TigerTag+), `id_product` unset, `rfidBackup:false`; backups discarded (a signed dump is bound to a chip the importer doesn't hold) |
| Weight | As recorded | Reset to full capacity |
| Twins | As recorded | `twin_tag_uid` remapped through the new ids |

## Security / trust model

A `.ttag` file is **untrusted input**. Every record is sanitised on import
(see above). `exportedBy` only pre-selects the mode in the UI — the real
authorisation boundary is the **Firestore Security Rules**. Never treat file
contents as authoritative for identity or ownership.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Universal filament identity](../concepts/universal-filament-identity.md), [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Developer overview](./README.md)
