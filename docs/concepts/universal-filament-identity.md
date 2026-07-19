# Universal filament identity

## One identity, readable everywhere

A TigerTag chip gives a spool a **universal identity**: a single, open record of
what the filament *is*, independent of who made it, who sells it, and which
printer will melt it.

The identity covers (non-exhaustive):

| Field family | Examples |
|---|---|
| **Brand** | any filament manufacturer, from a shared reference list |
| **Material / type** | PLA, PETG, ABS, TPU… + subtype |
| **Aspect / color** | color value, finish |
| **Geometry** | diameter (1.75 / 2.85 mm) |
| **Print settings** | recommended temperatures |
| **Lifecycle** | weight, manufacturing date |

## The shared reference database

Identities are not free text: brands, materials, aspects, types, diameters and
units come from a **shared reference database** served by TigerHub
(`cdn.tigertag.io`). Every app resolves the same IDs to the same meaning, so a
chip encoded by one tool reads identically in every other.

> **TODO:** link the public database browsing endpoint / dump format once the
> RFID guide documents it. The reference data ships bundled with Tiger Studio
> (`assets/db/tigertag/`) and refreshes from the CDN.

## Identity without a chip

The identity is the *record*, not the *chip*. Tiger Studio's **TigerData** can
create fully digital spools that live only in the cloud inventory — and later
**promote** them onto a physical chip. The chip is the portable carrier of an
identity that exists independently.

---

**◀ Previous:** [Second Life workflow](../philosophy/second-life.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [The TigerTag chip](./tigertag-chip.md)

**Related:** [TigerTag product page](../products/tigertag.md), [TigerHub](../products/tigerhub.md)
