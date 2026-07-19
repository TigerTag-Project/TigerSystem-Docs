# Klipper / Moonraker

## Printer link — ⏳ not yet, but the groundwork exists

Generic Klipper printers (via the **Moonraker** API) are **not an official
integration today**. However, Tiger Studio's Snapmaker link already speaks
Moonraker WebSocket/JSON-RPC — the natural foundation for a
vendor-neutral Klipper integration.

| Aspect | Status |
|---|---|
| Moonraker transport | ✅ Exists (used by the Snapmaker integration) |
| Generic Klipper support | ⏳ Planned / to be scoped |
| Filament slot mapping | Depends on the machine's MMU setup — to be scoped |

> **TODO:** define the target: which Moonraker surface is generic enough
> (printer objects, job queue, webcams) and how MMU/filament slots map across
> the Klipper ecosystem (ERCF, MMU2, Box Turtle…).

## Using TigerTag with Klipper today

Everything except the live printer link already works: TigerTag chips,
inventory, weight tracking, racks and sharing are printer-agnostic.

---

**◀ Previous:** [Snapmaker](./snapmaker.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [OpenSpool](./openspool.md)
