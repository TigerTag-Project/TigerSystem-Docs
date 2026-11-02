---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## O que é

O **OpenSpool** é um padrão comunitário aberto de etiquetas: os dados do filamento como **JSON NDEF** em etiquetas NFC Type 2 — sem autenticação, sem criptografia, totalmente aberto. No espírito, é um primo próximo do TigerTag.

## TigerTag vs OpenSpool

| Aspeto | TigerTag | OpenSpool |
|---|---|---|
| Suporte | NTAG, payload NDEF de 144 bytes | NFC Type 2, JSON NDEF |
| Modelo de dados | IDs compactos resolvidos numa base de dados de referência partilhada | JSON autodescritivo |
| Nuvem | Conta opcional, inventário, partilha ([conta TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Nenhuma (padrão apenas de etiqueta) |
| Autenticidade | Opcional — um [TigerTag+](../products/tigertag-plus.md) assinado por um fabricante certificado é um **TigerTag+ Certified**, verificável offline | Nenhuma |
| Abertura | Especificação aberta + SDKs | Especificação aberta |

## Migrar um chip de TigerTag para OpenSpool

Os chips TigerTag **nunca estão bloqueados contra escrita** — o TigerTag é apenas o protocolo de base com que as bobinas são fornecidas. Se preferir o OpenSpool (ou qualquer formato personalizado), é livre de reescrever os dados de um chip de fábrica nesse formato.

## Interoperabilidade — especificação documentada, conversão para TigerData em curso

Uma ficha de descodificação só de leitura para as etiquetas OpenSpool é mantida em [`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md), no âmbito da leitura RFID multifabricante prevista no Tiger Studio.

> **TODO:** decidir e documentar o mapeamento de importação (campos JSON do OpenSpool → IDs de referência do TigerTag) quando o suporte de leitura for lançado.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Programadores](../developers/README.md)
