---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Enlace con la impresora — todavía no, pero la base existe

Las impresoras Klipper genéricas (mediante la API de **Moonraker**) **no son hoy
una integración oficial**. Sin embargo, el enlace de Tiger Studio con Snapmaker ya
habla WebSocket/JSON-RPC de Moonraker, la base natural para una integración
Klipper independiente del fabricante.

| Aspecto | Estado |
|---|---|
| Transporte Moonraker | Existe (lo usa la integración con Snapmaker) |
| Compatibilidad genérica con Klipper | Prevista / por definir |
| Asignación de ranuras de filamento | Depende de la configuración MMU de la máquina — por definir |

> **TODO:** definir el objetivo: qué superficie de Moonraker es lo bastante
> genérica (objetos de impresora, cola de trabajos, cámaras web) y cómo se
> asignan las ranuras MMU/de filamento en el ecosistema Klipper (ERCF, MMU2, Box Turtle…).

## Usar TigerTag con Klipper hoy

Todo funciona ya salvo el enlace en vivo con la impresora: los chips TigerTag, el
inventario, el seguimiento del peso, los racks y el uso compartido no dependen de
la impresora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [OpenSpool](./openspool.md)
