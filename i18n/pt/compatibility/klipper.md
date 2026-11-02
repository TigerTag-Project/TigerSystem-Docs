---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Conexão com a impressora — ainda não, mas a base já existe

As impressoras Klipper genéricas (via API **Moonraker**) **não são uma integração
oficial hoje**. No entanto, a conexão do Tiger Studio com a Snapmaker já fala
WebSocket/JSON-RPC do Moonraker — a base natural para uma integração Klipper
neutra em relação a fabricantes.

| Aspecto | Situação |
|---|---|
| Transporte Moonraker | Existe (usado pela integração com a Snapmaker) |
| Suporte genérico a Klipper | Planejado / a definir |
| Mapeamento dos slots de filamento | Depende da configuração MMU da máquina — a definir |

> **TODO:** definir o alvo: qual parte da API Moonraker é genérica o bastante
> (objetos da impressora, fila de trabalhos, webcams) e como o MMU e os slots de
> filamento se mapeiam no ecossistema Klipper (ERCF, MMU2, Box Turtle…).

## Usar o TigerTag com Klipper hoje

Tudo, exceto a conexão ao vivo com a impressora, já funciona: chips TigerTag,
inventário, controle de peso, racks e compartilhamento não dependem da impressora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [OpenSpool](./openspool.md)
