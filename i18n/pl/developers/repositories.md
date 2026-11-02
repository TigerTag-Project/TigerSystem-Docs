---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Mapa repozytoriów

Wszystkie publiczne repozytoria znajdują się w organizacji GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repozytorium | Czym jest | Licencja |
|---|---|---|
| **TigerSystem-Docs** (to repozytorium) | Dokumentacja ekosystemu — wiążący punkt wejścia | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Aplikacja desktopowa Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK JavaScript — pakiet npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Wiążąca specyfikacja formatu chipa | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Kontrakt integracji z chmurą + działające przykłady | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (obecna) — ESP32-S3, ekran dotykowy, podwójny PN532, bateria | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (poprzednia generacja — inny sprzęt) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Drukowany w 3D stojak z podwójnym czytnikiem | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Skaner szpul przy drukarce — ESP32-S3 + PN532, ekran dotykowy, wielomarkowy | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware do ekranu BIGTREETECH Panda Touch / K-Touch — wszystkie marki drukarek na jednym wyświetlaczu | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Oficjalny firmware FlashForge dla Creator 5 / 5 Pro — Cloud i LAN jednocześnie, stworzony przez FlashForge z TigerTag | zobacz repozytorium |

## Które repozytorium jest wiążące dla czego

Aby uniknąć rozjazdu dokumentacji, każdy fakt ma dokładnie **jeden** dom:

| Temat | Wiążąca lokalizacja |
|---|---|
| Przegląd ekosystemu, filozofia, strony produktów, FAQ | **To repozytorium** |
| Format pliku wymiany `.ttag` | **To repozytorium** ([specyfikacja](./ttag-format.md)) |
| Format chipa na poziomie bajtów | TigerTag-RFID-Guide |
| Model danych Firestore i przepływy uwierzytelniania | TigerTag_Firebase_Integration (`docs/`) |
| Protokoły LAN drukarek (dla każdej marki) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Karty dekodowania RFID producentów | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Katalog funkcji aplikacji i dziennik zmian | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Uwaga:** aplikacja mobilna (Tiger NFC Connect), TigerHub i repozytoria
> backendu nie są obecnie publiczne.

---

**◀ Poprzednia:** [Przegląd dla deweloperów](./README.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [SDK](./sdks.md)
