# TigerScale

## Purpose

**TigerScale** is the open-source ESP32 filament scale: put a spool on it and
its live weight flows into the owner's cloud inventory — no manual entry, no
guessing how much filament is left.

## Features

- ESP32-based hardware + firmware, fully open source (MIT).
- **Live weight tracking** — updates appear in real time in Tiger Studio and
  TigerTag Connect via Firestore.
- Works with Tiger Studio's **container weight calibration** so net filament
  weight stays accurate per container type.

> **TODO:** hardware BOM, build guide and flashing instructions — canonical in
> the [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) repo;
> summarize here once stabilized.

## Interactions

| With | How |
|---|---|
| Tiger Cloud | Writes live weight to the user's account |
| Tiger Studio / Connect | Display live weight; health monitoring |

## Links

- 📦 Repo: [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) (MIT)

---

**◀ Previous:** [TigerPOD](./tigerpod.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Compatibility](../compatibility/README.md)

**Related:** [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md)
