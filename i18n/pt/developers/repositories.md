---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Mapa dos repositórios

Todos os repositórios públicos ficam na organização do GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Repositório | O que é | Licença |
|---|---|---|
| **TigerSystem-Docs** (este repositório) | Documentação do ecossistema — o ponto de entrada de referência | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Aplicativo de desktop Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK JavaScript — pacote npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Especificação de referência do formato do chip | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contrato de integração com a nuvem + exemplos funcionais | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (atual) — ESP32-S3, tela sensível ao toque, dois PN532, bateria | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (geração anterior — hardware diferente) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Suporte de leitura duplo imprimível em 3D | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Escâner de bobina junto à impressora — ESP32-S3 + PN532, tela sensível ao toque, multimarcas | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Firmware para a tela BIGTREETECH Panda Touch / K-Touch — todas as marcas de impressora em um só display | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Firmware oficial da FlashForge para a Creator 5 / 5 Pro — nuvem e LAN ao mesmo tempo, criado pela FlashForge com o TigerTag | veja o repositório |

## Qual repositório é a referência para cada assunto

Para evitar divergências na documentação, cada fato tem exatamente **um** lugar:

| Assunto | Local de referência |
|---|---|
| Visão geral do ecossistema, filosofia, páginas de produtos, FAQ | **Este repositório** |
| O formato de arquivo de intercâmbio `.ttag` | **Este repositório** ([especificação](./ttag-format.md)) |
| Formato do chip em nível de byte | TigerTag-RFID-Guide |
| Modelo de dados do Firestore e fluxos de autenticação | TigerTag_Firebase_Integration (`docs/`) |
| Protocolos LAN das impressoras (por marca) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Fichas de decodificação RFID dos fabricantes | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Catálogo de recursos do aplicativo e changelog | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Nota:** os repositórios do aplicativo móvel (Tiger NFC Connect), do TigerHub e do backend
> não são públicos no momento.

---

**◀ Anterior:** [Visão geral para desenvolvedores](./README.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [SDKs](./sdks.md)
