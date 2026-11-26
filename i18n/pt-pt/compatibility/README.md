---
sourceHash: a581b7504900fdbaa60b5f02b81447a4b0e07c77d262b6236434620b7378d87a
sourcePath: docs/compatibility/README.md
---

# Compatibilidade

Como o TigerSystem funciona com cada ecossistema de impressoras. Dois eixos independentes:

- **Ligação à impressora** — o Tiger Studio a comunicar com a máquina através da LAN (telemetria, slots de filamento, trabalho, câmara). **Seis marcas estão ativas hoje, a Prusa está em beta e qualquer impressora Klipper ou OctoPrint liga-se em beta: cerca de 380 modelos.**
- **RFID nativo** — leitura das etiquetas de bobina do próprio fabricante. Documentado por fabricante. A descodificação direta na aplicação **ainda não está integrada** (o modelo de interoperabilidade certo continua a ser uma questão em aberto); o trabalho atual visa **converter os dados das etiquetas dos fabricantes em bobinas digitais TigerData**, para que o filamento de outras marcas possa ser lido e gerido no ecossistema. Entretanto, o próprio chip TigerTag já funciona com todas as impressoras através da [ponte do telemóvel](../philosophy/smartphone-bridge.md).

## Matriz

| Ecossistema | Ligação à impressora (Tiger Studio) | Formato nativo da etiqueta | Bloqueio nativo da etiqueta | Estado da leitura RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Ativa** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, chaves derivadas do UID | Especificação documentada |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Ativa** — WebSocket + CFS | Mifare Classic 1K | Chave de setor AES-128-ECB | Especificação documentada |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Ativa** — MQTT + Canvas; Centauri Carbon 1 via SDCP em beta | Mifare Ultralight | Apenas bytes mágicos | Especificação documentada |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Ativa** — HTTP + IFS | — (as máquinas não têm leitor RFID) | — | O TigerTag acrescenta-lhe NFC, sem custos |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Ativa** — MQTTS LAN + nuvem, ACE | Mifare Ultralight | Nenhum | Especificação documentada |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Ativa** — WebSocket Moonraker + 4 slots | Mifare Classic 1K | HKDF + assinatura RSA-2048 | Especificação documentada |
| Prusa | **Beta** — PrusaLink HTTP + MMU | OpenPrintTag (NFC) | Nenhum — formato aberto | Comparado em [Formatos de etiqueta de bobina comparados](./tag-formats.md) |
| [Klipper](./klipper.md) | **Ativa (beta)** — Moonraker + Happy Hare / AFC | n/a | n/a | n/a |
| OctoPrint (Marlin) | **Ativa (beta)** — OctoPrint REST | n/a | n/a | n/a |
| [OpenSpool](./openspool.md) | n/a (norma de etiquetas, não uma impressora) | NFC Tipo 2, NDEF JSON | Nenhum — norma aberta | Especificação documentada |
| Qidi | Não integrada | Mifare Classic 1K | Chave predefinida | [Especificação documentada](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Nota:** as fichas RFID por fabricante (especificações de descodificação só de leitura, derivadas do projeto [OpenRFID](https://github.com/suchmememanyskill/OpenRFID)) são mantidas no repositório do Tiger Studio em [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors) — estão aqui ligadas, não duplicadas.

## Formatos de etiqueta lado a lado

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab e Creality CFS, número a número e com fontes: **[Formatos de etiqueta de bobina comparados](./tag-formats.md)**.

## Para além das impressoras

A compatibilidade não diz respeito apenas a impressoras: veja a lista crescente de **[hardware de terceiros compatível](./third-party-hardware.md)** — leitores NFC, analisadores de filamento, balanças USB — e o **[software construído sobre o TigerTag](../developers/integrations.md)**.

As etiquetas de bobina imprimem-se diretamente do telemóvel em **[impressoras de etiquetas Bluetooth](./label-printers.md)**.

## A resposta universal

Seja qual for a impressora: cole um chip [TigerTag](../products/tigertag.md) na bobina e todo o ecossistema funciona — identificação, inventário, peso, partilha e dados de filamento enviados para cada impressora integrada.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Bambu Lab](./bambu-lab.md)
