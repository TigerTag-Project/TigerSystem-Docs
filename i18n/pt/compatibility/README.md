---
sourceHash: e7b7c04f1668fe717ad7b48ac2cc3860f2a28e40c1c8e39db72c30fde1f7810f
sourcePath: docs/compatibility/README.md
---

# Compatibilidade

Como o TigerSystem funciona com cada ecossistema de impressoras. Dois eixos independentes:

- **Vínculo com a impressora** — o Tiger Studio conversando com a máquina pela LAN
 (telemetria, slots de filamento, trabalho, câmera). **Seis marcas estão ativas hoje.**
- **RFID nativo** — leitura das tags de bobina do próprio fabricante. Documentado por
 fabricante. A decodificação direta no aplicativo **ainda não está integrada** (o modelo certo de
 interoperabilidade ainda é uma questão em aberto); o trabalho atual visa
 **converter os dados das tags dos fabricantes em bobinas digitais TigerData**, para que o filamento
 de outras marcas possa ser lido e gerenciado no ecossistema. Enquanto isso,
 o próprio chip TigerTag já funciona com todas as impressoras por meio da
 [ponte do smartphone](../philosophy/smartphone-bridge.md).

## Matriz

| Ecossistema | Vínculo com a impressora (Tiger Studio) | Formato nativo da tag | Bloqueio nativo da tag | Status da leitura RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Ativo** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, chaves derivadas do UID | Especificação documentada |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Ativo** — WebSocket + CFS | Mifare Classic 1K | Chave de setor AES-128-ECB | Especificação documentada |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Ativo** — MQTT + Canvas | Mifare Ultralight | Apenas bytes mágicos | Especificação documentada |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Ativo** — HTTP + IFS | — (as máquinas não têm leitor RFID) | — | O TigerTag acrescenta NFC a ela, sem custo |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Ativo** — MQTTS LAN + nuvem, ACE | Mifare Ultralight | Nenhum | Especificação documentada |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Ativo** — WebSocket do Moonraker + 4 slots | Mifare Classic 1K | HKDF + assinatura RSA-2048 | Especificação documentada |
| [Klipper](./klipper.md) | **Ativo (beta)** — Moonraker + Happy Hare / AFC | n/d | n/d | n/d |
| [OpenSpool](./openspool.md) | n/d (padrão de tag, não uma impressora) | NFC Type 2, JSON NDEF | Nenhum — padrão aberto | Especificação documentada |
| Qidi | Não integrada | Mifare Classic 1K | Chave padrão | [Especificação documentada](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Nota:** as fichas RFID por fabricante (especificações de decodificação somente leitura, derivadas do
> projeto [OpenRFID](https://github.com/suchmememanyskill/OpenRFID)) são
> mantidas no repositório do Tiger Studio em
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — aqui elas são referenciadas por link, não duplicadas.

## Formatos de tag lado a lado

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab e Creality CFS, número
por número e com fontes: **[Formatos de tag de bobina comparados](./tag-formats.md)**.

## Além das impressoras

A compatibilidade não se resume às impressoras: veja a lista crescente de
**[hardware de terceiros compatível](./third-party-hardware.md)** — leitores
NFC, analisadores de filamento, balanças USB — e os
**[softwares construídos sobre o TigerTag](../developers/integrations.md)**.

## A resposta universal

Seja qual for a impressora: cole um chip [TigerTag](../products/tigertag.md) na
bobina e todo o ecossistema funciona — identificação, inventário, peso,
compartilhamento e dados de filamento enviados a qualquer uma das seis marcas integradas.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Bambu Lab](./bambu-lab.md)
