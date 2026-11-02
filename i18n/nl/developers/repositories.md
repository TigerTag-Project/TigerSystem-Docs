---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Repositoryoverzicht

Alle openbare repositories staan onder de
GitHub-organisatie **[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repository | Wat het is | Licentie |
|---|---|---|
| **TigerSystem-Docs** (deze repo) | Documentatie van het ecosysteem — het canonieke startpunt | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Desktopapp Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | JavaScript-SDK — npm-pakket `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Python-SDK | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Canonieke specificatie van het chipformaat | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contract voor cloudintegratie + werkende voorbeelden | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (huidig) — ESP32-S3, touchscreen, dubbele PN532, batterij | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (vorige generatie — andere hardware) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | 3D-printbare standaard met twee lezers | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Spoelscanner aan de printerkant — ESP32-S3 + PN532, touchscreen, voor alle merken | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware voor het scherm BIGTREETECH Panda Touch / K-Touch — elk printermerk op één display | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Officiële FlashForge-firmware voor de Creator 5 / 5 Pro — Cloud en LAN tegelijk, door FlashForge gebouwd met TigerTag | zie repo |

## Welke repo is canoniek waarvoor

Om afwijkende documentatie te voorkomen, heeft elk feit precies **één** thuis:

| Onderwerp | Canonieke locatie |
|---|---|
| Overzicht van het ecosysteem, filosofie, productpagina's, FAQ | **Deze repo** |
| Het uitwisselingsbestandsformaat `.ttag` | **Deze repo** ([specificatie](./ttag-format.md)) |
| Chipformaat op byteniveau | TigerTag-RFID-Guide |
| Firestore-datamodel en authenticatiestromen | TigerTag_Firebase_Integration (`docs/`) |
| LAN-protocollen van printers (per merk) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Decoderingsbladen voor RFID van fabrikanten | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Functiecatalogus en changelog van de app | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Let op:** de repositories van de mobiele app (Tiger NFC Connect), TigerHub en de backend
> zijn op dit moment niet openbaar.

---

**◀ Vorige:** [Overzicht voor ontwikkelaars](./README.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [SDK's](./sdks.md)
