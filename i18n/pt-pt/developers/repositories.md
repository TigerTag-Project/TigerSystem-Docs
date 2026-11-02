---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Mapa dos repositórios

Todos os repositórios públicos vivem na organização GitHub **[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repositório | O que é | Licença |
|---|---|---|
| **TigerSystem-Docs** (este repositório) | Documentação do ecossistema — o ponto de entrada de referência | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Aplicação de computador Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK JavaScript — pacote npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Especificação de referência do formato do chip | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contrato de integração na nuvem + exemplos funcionais | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (atual) — ESP32-S3, ecrã tátil, PN532 duplo, bateria | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (geração anterior — hardware diferente) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Suporte de dois leitores imprimível em 3D | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Leitor de bobinas junto à impressora — ESP32-S3 + PN532, ecrã tátil, multimarca | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware para o ecrã BIGTREETECH Panda Touch / K-Touch — todas as marcas de impressoras num só ecrã | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Firmware oficial da FlashForge para a Creator 5 / 5 Pro — Cloud e LAN em simultâneo, criado pela FlashForge com o TigerTag | ver o repositório |

## Que repositório é a referência para quê

Para evitar divergências na documentação, cada facto tem exatamente **uma** casa:

| Tema | Local de referência |
|---|---|
| Visão geral do ecossistema, filosofia, páginas de produtos, FAQ | **Este repositório** |
| O formato de ficheiro de intercâmbio `.ttag` | **Este repositório** ([especificação](./ttag-format.md)) |
| Formato do chip ao nível do byte | TigerTag-RFID-Guide |
| Modelo de dados do Firestore e fluxos de autenticação | TigerTag_Firebase_Integration (`docs/`) |
| Protocolos LAN das impressoras (por marca) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Fichas de descodificação RFID dos fabricantes | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Catálogo de funcionalidades da aplicação e registo de alterações | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Nota:** os repositórios da aplicação móvel (Tiger NFC Connect), do TigerHub e do backend não são públicos de momento.

---

**◀ Anterior:** [Visão geral para programadores](./README.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [SDKs](./sdks.md)
