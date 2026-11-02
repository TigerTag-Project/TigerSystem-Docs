---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Ligação à impressora — ainda não, mas a base já existe

As impressoras Klipper genéricas (através da API **Moonraker**) **não são, atualmente, uma integração oficial**. No entanto, a ligação Snapmaker do Tiger Studio já fala Moonraker WebSocket/JSON-RPC — a base natural para uma integração Klipper independente do fabricante.

| Aspeto | Estado |
|---|---|
| Transporte Moonraker | Existe (usado pela integração Snapmaker) |
| Suporte Klipper genérico | Previsto / a definir |
| Mapeamento dos slots de filamento | Depende da configuração MMU da máquina — a definir |

> **TODO:** definir o objetivo: que superfície do Moonraker é suficientemente genérica (objetos da impressora, fila de trabalhos, webcams) e como os slots MMU/de filamento se mapeiam no ecossistema Klipper (ERCF, MMU2, Box Turtle…).

## Usar o TigerTag com o Klipper hoje

Tudo, exceto a ligação em direto à impressora, já funciona: os chips TigerTag, o inventário, o registo do peso, os racks e a partilha não dependem da impressora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [OpenSpool](./openspool.md)
