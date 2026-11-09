# Spool tag formats compared

Six NFC/RFID formats are used on filament spools today. This page puts them
side by side, on 6 November 2026, with every figure taken from the format's
own specification or, for Bambu Lab and Creality (no official
specification), from public reverse-engineering work. It describes; it does
not rank. [OpenSpool](./openspool.md) and [OpenTag3D](./opentag3d.md) have
their own pages.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([reverse-engineered][bbl]) | Creality CFS ([reverse-engineered][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bytes for one full record | **80** (+ 64 B signature) | 176 (248 B on the tag) | 224 | 126 (JSON) | not documented (1 KB chip) | 48 |
| Colours, max | 3 | 6 | 4 | 1 | 2 | 1 |
| Nozzle and bed min / max | yes | yes | yes | nozzle only | nozzle; one bed value | no |
| Drying temperature and time | yes | yes | yes | no | yes | no |
| Remaining quantity on the chip | yes | yes | no | no | no | no |
| HueForge TD | yes | yes | yes | no | no | no |
| Free text message | 28 B | no | no | no | no | no |
| Signature verifiable offline | ECDSA-P256, public key published | no | no | no | RSA-2048, public key not published | no |
| Chip rewritable | yes | yes | yes | yes | no (rejected once modified) | no |
| Open offline product catalogue | **20,348 products** | 15,874 packages | no | no | no | no |
| Chip corrections after the factory | one open, standardised API for every brand; the SDKs diff and patch the chip, signature kept valid | no | optional `data_url` to an API each maker builds and hosts itself; no common format, SDK or update workflow | no | no | no |

## What the table shows

- **The most compact complete record.** TigerTag stores a full print record —
  temperatures, drying, quantities, colours, TD — in 80 bytes, against 176 for
  OpenPrintTag and 224 for OpenTag3D. The two smaller records carry less:
  Creality's 48 bytes hold no temperature, OpenSpool's 126 bytes hold seven
  fields. It is also the only format here that fits an NTAG213, signature
  included.
- **Complete offline, thanks to the catalogue.** A TigerTag+ product id
  resolves against the bundled public catalogue — 20,348 products with name,
  series, SKU, barcode, photo and refill flag — with no network and no account.
- **Predictable updates.** A brand corrects a product once, on the API every
  brand shares; any reader then patches the chips already sold.
- **Not the most fields on the chip.** OpenPrintTag carries more colours and
  fields TigerTag does not (GTIN, length). What sets TigerTag apart is the
  combination: a complete record in few bytes, an offline-verifiable
  signature and an open catalogue of 20,000+ products, on an NTAG213.

## Sources

- OpenPrintTag: [field list][opt], size from the reference test vector
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  catalogue count from the [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database) README.
- OpenTag3D: [specification][ot3d] and its
  [memory map](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [tag format][osp], size from its documented example.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, reverse engineering).
- Creality CFS: [K2-RFID][cfs] (reverse engineering).
- TigerTag: the [specification](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

A figure is wrong or out of date? Open an issue: this page is corrected, not
defended.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Previous:** [OpenTag3D](./opentag3d.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Developers](../developers/README.md)

**Related:** [Compatibility](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
