# Repository map

All public repositories live under the
**[TigerTag-Project](https://github.com/TigerTag-Project)** GitHub organization.

| Repository | What it is | License |
|---|---|---|
| **TigerSystem-Docs** (this repo) | Ecosystem documentation — the canonical entry point | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Tiger Studio desktop app (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | JavaScript SDK — npm package `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Python SDK | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Canonical chip format specification | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Cloud integration contract + working examples | CC BY 4.0 |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale ESP32 hardware + firmware | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | 3D-printable dual reader stand | CC BY 4.0 |

## Which repo is canonical for what

To avoid documentation drift, each fact has exactly **one** home:

| Topic | Canonical location |
|---|---|
| Ecosystem overview, philosophy, product pages, FAQ | **This repo** |
| The `.ttag` interchange file format | **This repo** ([spec](./ttag-format.md)) |
| Chip byte-level format | TigerTag-RFID-Guide |
| Firestore data model & auth flows | TigerTag_Firebase_Integration (`docs/`) |
| Printer LAN protocols (per brand) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Vendor RFID decoding sheets | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| App feature catalogue & changelog | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Note:** mobile app (Tiger NFC Connect), TigerHub and backend repositories
> are not public at this time.

---

**◀ Previous:** [Developer overview](./README.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [SDKs](./sdks.md)
