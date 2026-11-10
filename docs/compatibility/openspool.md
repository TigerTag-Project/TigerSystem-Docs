# OpenSpool

## What it is

**OpenSpool** is an open community tag standard: filament data as **NDEF JSON**
on NFC Type 2 tags — no authentication, no crypto, fully open. In spirit it is
a close cousin of TigerTag.

## TigerTag vs OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Carrier | NTAG, 144-byte NDEF payload | NFC Type 2, NDEF JSON |
| Data model | Compact IDs resolved against a shared reference DB | Self-describing JSON |
| Cloud | Optional account, inventory, sharing ([TigerSystem account](../concepts/inventory-and-cloud-sync.md)) | None (tag-only standard) |
| Authenticity | Optional — a [TigerTag+](../products/tigertag-plus.md) signed by a certified manufacturer is a **TigerTag+ Certified**, verifiable offline | None |
| Openness | Open spec + SDKs | Open spec |

## Migrating a chip from TigerTag to OpenSpool

TigerTag chips are **never write-locked** — TigerTag is just the base
protocol spools ship with. If you prefer OpenSpool (or any custom format),
you are free to rewrite a factory chip's data into it.

## Interoperability — spec documented, TigerData conversion in the works

A read-only decoding sheet for OpenSpool tags is maintained in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
as part of the planned multi-vendor RFID reading in Tiger Studio.

### Import mapping: OpenSpool → TigerData

This is the mapping Tiger Studio's OpenSpool reader will implement. Reading
an OpenSpool tag creates a **TigerData**: a chipless record with a new
`TigerData_<id>`. The OpenSpool chip is not a TigerTag chip, and an OpenSpool
tag names no catalogue product, so the record is never a TigerData+. Written to
a TigerTag chip later, it becomes a TigerTag, like any TigerData.

A tag is OpenSpool only if its JSON carries `"protocol": "openspool"`. Its
fields are then resolved against the [reference tables](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Rule |
|---|---|---|
| `brand` | `id_brand` | matched by name in `id_brand.json`, ignoring case; missing or unknown → `Generic` (65535) |
| `type`, `subtype` | `id_material` | looked up in `id_material.json`, ignoring case, in this order: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), then `type` alone. `NYLON` reads as `PA` (59328). A missing or unknown type is asked for |
| `subtype`, if the material did not use it | `id_aspect1` | the aspect of that name in `id_aspect.json` (`Matte` reads as `Matt`, 247), otherwise `Basic` (104); a subtype that matches nothing is kept in the record's `message` |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | copied; OpenSpool carries a single color |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; missing → 1.75, OpenSpool's default; any other value is asked for |
| `weight` | `measure`, `id_measure_unit` | in grams, unit `g` (21); missing → 1000, OpenSpool's default. The spool starts full: `weight_available` = `weight` |
| `min_temp`, `max_temp` | nozzle min and max (`data2`, `data3`) | copied; when both are `0` (absent), the material's recommended values. `max_temp` below `min_temp`: the tag is refused, as in OpenRFID |
| — | drying temperature and time, bed min and max (`data4`–`data7`) | the material's `recommended` values in `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: no catalogue product |
| — | `timestamp` | the time of the import |

Two rules differ from OpenRFID's reader, on purpose:

- **Bed and drying values come from the TigerTag reference database**, not
 from OpenRFID's five-row table (PLA, PETG, ABS, TPU, NYLON, and zero for any
 other type). They are what Tiger Studio fills in when the same material is
 picked by hand, and they exist for all 113 materials.
- **The material is never guessed.** OpenRFID reads a missing type as PLA. A
 wrong material gives wrong temperatures, so the import asks instead.

---

**◀ Previous:** [Klipper](./klipper.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Developers](../developers/README.md)
