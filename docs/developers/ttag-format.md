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

**`records[]` are the Firestore inventory documents, verbatim** — exactly
`users/{uid}/inventory/{spoolId}` as documented in the
[canonical data model](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(use it as the field dictionary). Three nuances:

- **Fields are sparse** — a field is only written when present on the doc:
  `twin_tag_uid` only on twins, `rfidBackup: true` only on TigerTag+,
  `id_product` only when known, and so on.
- **URL fields are attacker-controlled** — `LinkTDS`, `LinkMSDS`,
  `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` and `url_img*` are
  sanitised on import: any non-http(s) scheme is dropped.
- **Rack placement travels but doesn't apply** — `rack`, `rack_id`, `level`,
  `position` may appear in the file but are not meaningful on import (an
  imported spool does not inherit the exporter's rack).

Rules baked into the format:

- **Timestamps are normalised.** Firestore Timestamps become epoch-ms so the
  file serialises cleanly.
- **Twins are atomic.** A twinned material always exports **both** sides —
  one material → two records, linked by `twin_tag_uid`. A half-twin is never
  produced.
- **Id discipline.** Only chipless `TigerData_<id>` ids may appear; a legacy
  `CLOUD_<id>` id is refused at export time.

## Media type

The canonical media type is **`application/vnd.tigertag.ttag+json`** — use
it when serving `.ttag` files over http(s) (the web playground, brand
collections, download links). `application/json` is also accepted, and
importers **validate by content** (`format`/`kind`/`version`), never by MIME
header or file extension alone.

## Availability

Export and import ship in **Tiger Studio v2.14.0+**. The format is designed
to be portable; other surfaces may adopt it over time — today, Studio is the
reference implementation.

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

## Complete example

A faithful, anonymized multi-selection export — one TigerData, one twin pair
(reciprocal `twin_tag_uid`), one TigerTag+ with its signed backup:

```json
{
  "format": "tigertag",
  "kind": "ttag",
  "version": 1,
  "exportedAt": 1769212800000,
  "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
  "records": [
    {
      "uid": "TigerData_9F3A2B1C",
      "id_brand": 12, "id_material": 3, "id_type": 1,
      "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
      "material": "PLA Basic", "color_name": "Sky Blue",
      "color_r": 88, "color_g": 170, "color_b": 220,
      "online_color_list": "58AADC", "online_color_type": 1,
      "measure_gr": 1000, "weight_available": 640,
      "container_id": 3, "container_weight": 215,
      "TD": 0, "tags": ["desk", "prototyping"],
      "rfidBackup": false, "updatedAt": 1769212800000
    },
    {
      "uid": "04A1B2C3D4E5F6",
      "id_brand": 5, "id_material": 3, "id_type": 1,
      "id_aspect1": 4, "id_tigertag": 55010,
      "material": "PLA Silk", "color_name": "Gold",
      "color_r": 212, "color_g": 175, "color_b": 55,
      "online_color_list": "D4AF37",
      "measure_gr": 1000, "weight_available": 500,
      "container_id": 3, "container_weight": 215,
      "twin_tag_uid": "04F6E5D4C3B2A1",
      "rfidBackup": false, "updatedAt": 1769212800000
    },
    {
      "uid": "04F6E5D4C3B2A1",
      "id_brand": 5, "id_material": 3, "id_type": 1,
      "id_aspect1": 4, "id_tigertag": 55011,
      "material": "PLA Silk", "color_name": "Emerald",
      "color_r": 0, "color_g": 130, "color_b": 90,
      "online_color_list": "00825A",
      "measure_gr": 1000, "weight_available": 500,
      "container_id": 3, "container_weight": 215,
      "twin_tag_uid": "04A1B2C3D4E5F6",
      "rfidBackup": false, "updatedAt": 1769212800000
    },
    {
      "uid": "04112233445566",
      "id_brand": 5, "id_material": 8, "id_type": 1,
      "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
      "material": "PETG HF Basic", "series": "Hyper PETG",
      "color_name": "Green",
      "color_r": 0, "color_g": 160, "color_b": 70,
      "online_color_list": "00A046",
      "measure_gr": 1000, "weight_available": 480,
      "container_id": 3, "container_weight": 215, "TD": 6,
      "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
      "sku": "RFHPPETG175GN1",
      "rfidBackup": true, "updatedAt": 1769212800000
    }
  ],
  "rfidBackups": {
    "04112233445566": {
      "firstSeen": 1767139200000,
      "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
    }
  }
}
```

Reading the example: the first record is chipless (a `TigerData_` id); the
next two are a twin pair — same material, reciprocal `twin_tag_uid`, always
exported together; the last is a TigerTag+ (`rfidBackup: true`) whose signed
factory dump sits in `rfidBackups` under its chip UID.

## Security / trust model

A `.ttag` file is **untrusted input**. Every record is sanitised on import
(see above). `exportedBy` only pre-selects the mode in the UI — the real
authorisation boundary is the **Firestore Security Rules**. Never treat file
contents as authoritative for identity or ownership.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Universal filament identity](../concepts/universal-filament-identity.md), [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Developer overview](./README.md)
