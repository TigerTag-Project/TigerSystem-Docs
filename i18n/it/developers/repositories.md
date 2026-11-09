---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Mappa dei repository

Tutti i repository pubblici si trovano nell'organizzazione GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repository | Che cos'è | Licenza |
|---|---|---|
| **TigerSystem-Docs** (questo repository) | Documentazione dell'ecosistema — il punto di ingresso canonico | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | App desktop Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK JavaScript — pacchetto npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Specifica canonica del formato del chip | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contratto di integrazione cloud + esempi funzionanti | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (attuale) — ESP32-S3, touchscreen, doppio PN532, batteria | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (generazione precedente — hardware diverso) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Supporto stampabile in 3D con doppio lettore | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Scanner di bobine lato stampante — ESP32-S3 + PN532, touchscreen, multi-marca | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware per lo schermo BIGTREETECH Panda Touch / K-Touch — tutte le marche di stampanti su un solo display | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Firmware ufficiale FlashForge per Creator 5 / 5 Pro — Cloud e LAN contemporaneamente, realizzato da FlashForge con TigerTag | vedi repository |

## Quale repository fa fede per cosa

Per evitare la deriva della documentazione, ogni fatto ha esattamente **una** sede:

| Argomento | Posizione canonica |
|---|---|
| Panoramica dell'ecosistema, filosofia, pagine dei prodotti, FAQ | **Questo repository** |
| Il formato di file di scambio `.ttag` | **Questo repository** ([specifica](./ttag-format.md)) |
| Formato del chip a livello di byte | TigerTag-RFID-Guide |
| Modello dei dati Firestore e flussi di autenticazione | TigerTag_Firebase_Integration (`docs/`) |
| Protocolli LAN delle stampanti (per marca) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Schede di decodifica RFID dei produttori | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Catalogo delle funzioni dell'app e changelog | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Nota:** i repository dell'app mobile (Tiger NFC Connect), di TigerHub e del backend
> al momento non sono pubblici.

---

**◀ Precedente:** [Panoramica per sviluppatori](./README.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [SDK](./sdks.md)
