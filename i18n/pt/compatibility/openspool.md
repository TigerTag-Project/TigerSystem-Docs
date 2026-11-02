---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## O que é

O **OpenSpool** é um padrão aberto de tags da comunidade: dados de filamento em **NDEF JSON**
em tags NFC Tipo 2 — sem autenticação, sem criptografia, totalmente aberto. No espírito, é
um primo próximo do TigerTag.

## TigerTag vs OpenSpool

| Aspecto | TigerTag | OpenSpool |
|---|---|---|
| Suporte | NTAG, payload NDEF de 144 bytes | NFC Tipo 2, NDEF JSON |
| Modelo de dados | IDs compactos resolvidos em um banco de dados de referência compartilhado | JSON autodescritivo |
| Cloud | Conta opcional, inventário, compartilhamento ([conta TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Nenhuma (padrão apenas de tag) |
| Autenticidade | Opcional — um [TigerTag+](../products/tigertag-plus.md) assinado por um fabricante certificado é um **TigerTag+ Certified**, verificável offline | Nenhuma |
| Abertura | Especificação aberta + SDKs | Especificação aberta |

## Migrar um chip do TigerTag para o OpenSpool

Os chips TigerTag **nunca são bloqueados para gravação** — o TigerTag é apenas o protocolo
base com que as bobinas saem de fábrica. Se você prefere o OpenSpool (ou qualquer formato
personalizado), pode regravar os dados de um chip de fábrica nesse formato.

## Interoperabilidade — especificação documentada, conversão para TigerData em andamento

Uma ficha de decodificação somente leitura das tags OpenSpool é mantida em
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
como parte da leitura RFID multifabricante planejada no Tiger Studio.

> **TODO:** decidir e documentar o mapeamento de importação (campos JSON do OpenSpool →
> IDs de referência do TigerTag) quando o suporte de leitura for lançado.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Desenvolvedores](../developers/README.md)
