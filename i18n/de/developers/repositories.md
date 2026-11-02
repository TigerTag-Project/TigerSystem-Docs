---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Repository-Übersicht

Alle öffentlichen Repositories liegen unter der GitHub-Organisation
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repository | Was es ist | Lizenz |
|---|---|---|
| **TigerSystem-Docs** (dieses Repo) | Dokumentation des Ökosystems – der maßgebliche Einstiegspunkt | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Desktop-App Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | JavaScript-SDK – npm-Paket `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Python-SDK | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Maßgebliche Spezifikation des Chip-Formats | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Cloud-Integrationsvertrag + funktionierende Beispiele | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (aktuell) – ESP32-S3, Touchscreen, doppelter PN532, Akku | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (vorherige Generation – andere Hardware) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | 3D-druckbarer Ständer für zwei Lesegeräte | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Spulen-Scanner am Drucker – ESP32-S3 + PN532, Touchscreen, markenübergreifend | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware für den Bildschirm BIGTREETECH Panda Touch / K-Touch – jede Druckermarke auf einem Display | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Offizielle FlashForge-Firmware für den Creator 5 / 5 Pro – Cloud und LAN gleichzeitig, von FlashForge mit TigerTag gebaut | siehe Repo |

## Welches Repo wofür maßgeblich ist

Um Dokumentationsdrift zu vermeiden, hat jede Tatsache genau **ein** Zuhause:

| Thema | Maßgeblicher Ort |
|---|---|
| Überblick über das Ökosystem, Philosophie, Produktseiten, FAQ | **Dieses Repo** |
| Das Austauschdateiformat `.ttag` | **Dieses Repo** ([Spezifikation](./ttag-format.md)) |
| Chip-Format auf Byte-Ebene | TigerTag-RFID-Guide |
| Firestore-Datenmodell & Authentifizierungsabläufe | TigerTag_Firebase_Integration (`docs/`) |
| LAN-Protokolle der Drucker (pro Marke) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| RFID-Dekodierungsblätter der Hersteller | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Funktionskatalog der App & Changelog | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Hinweis:** Die mobile App (Tiger NFC Connect), TigerHub und die
> Backend-Repositories sind derzeit nicht öffentlich.

---

**◀ Zurück:** [Entwicklerübersicht](./README.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [SDKs](./sdks.md)
