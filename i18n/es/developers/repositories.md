---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Mapa de repositorios

Todos los repositorios públicos viven bajo la organización de GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repositorio | Qué es | Licencia |
|---|---|---|
| **TigerSystem-Docs** (este repositorio) | Documentación del ecosistema: el punto de entrada canónico | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Aplicación de escritorio Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK de JavaScript: paquete npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK de Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Especificación canónica del formato del chip | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contrato de integración con la nube + ejemplos funcionales | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (actual): ESP32-S3, pantalla táctil, doble PN532, batería | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (generación anterior, hardware distinto) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Soporte lector doble imprimible en 3D | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Escáner de bobinas junto a la impresora: ESP32-S3 + PN532, pantalla táctil, multimarca | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware para la pantalla BIGTREETECH Panda Touch / K-Touch: todas las marcas de impresoras en una sola pantalla | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Firmware oficial de FlashForge para la Creator 5 / 5 Pro: Cloud y LAN a la vez, creado por FlashForge con TigerTag | véase el repositorio |

## Qué repositorio es canónico para qué

Para evitar que la documentación se desfase, cada dato tiene exactamente **un** hogar:

| Tema | Ubicación canónica |
|---|---|
| Visión general del ecosistema, filosofía, páginas de producto, FAQ | **Este repositorio** |
| El formato de archivo de intercambio `.ttag` | **Este repositorio** ([especificación](./ttag-format.md)) |
| Formato del chip a nivel de byte | TigerTag-RFID-Guide |
| Modelo de datos de Firestore y flujos de autenticación | TigerTag_Firebase_Integration (`docs/`) |
| Protocolos LAN de las impresoras (por marca) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Fichas de decodificación RFID de fabricantes | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Catálogo de funciones de la aplicación y registro de cambios | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Nota:** los repositorios de la aplicación móvil (Tiger NFC Connect), de TigerHub
> y del backend no son públicos por el momento.

---

**◀ Anterior:** [Resumen para desarrolladores](./README.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [SDK](./sdks.md)
