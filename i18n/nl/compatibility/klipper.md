---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Printerkoppeling — nog niet, maar de basis ligt er

Generieke Klipper-printers (via de **Moonraker**-API) zijn **vandaag geen officiële
integratie**. De Snapmaker-koppeling van Tiger Studio spreekt echter al
Moonraker WebSocket/JSON-RPC — de logische basis voor een
leveranciersneutrale Klipper-integratie.

| Aspect | Status |
|---|---|
| Moonraker-transport | Bestaat (gebruikt door de Snapmaker-integratie) |
| Generieke Klipper-ondersteuning | Gepland / nog af te bakenen |
| Toewijzing van filamentslots | Hangt af van de MMU-opstelling van de machine — nog af te bakenen |

> **TODO:** het doel bepalen: welk deel van Moonraker is generiek genoeg
> (printerobjecten, jobwachtrij, webcams) en hoe MMU-/filamentslots in het
> Klipper-ecosysteem worden toegewezen (ERCF, MMU2, Box Turtle…).

## TigerTag vandaag met Klipper gebruiken

Alles behalve de live printerkoppeling werkt al: TigerTag-chips,
inventaris, gewichtsregistratie, racks en delen zijn printeronafhankelijk.

---

**◀ Vorige:** [Snapmaker](./snapmaker.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [OpenSpool](./openspool.md)
