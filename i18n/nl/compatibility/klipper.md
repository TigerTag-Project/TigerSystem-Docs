---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Printerkoppeling — **Live (bèta)**, sinds Tiger Studio 2.41

Tiger Studio maakt verbinding met **elke printer die Klipper met Moonraker draait**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon en de rest — 161 machines staan met hun
afbeelding in de toevoegstap. De integratie is een **bèta**.

| Aspect | Detail |
|---|---|
| Protocol | Moonraker-HTTP-API, elke 2 s opgevraagd; standaard poort 7125, een andere poort kan worden ingesteld |
| Detectie | LAN-scan, of handmatig toegevoegd met het adres en een optionele Moonraker-API-sleutel |
| Filamentslots | **Happy Hare**-gates en **AFC**-lanes, gelezen en bewerkt via de eigen commando's van de machine (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); een gewone extruder wordt getoond maar bewaart geen filamentgegevens |
| Printopdracht | Lopende printopdracht met miniatuur en lagen; pauzeren, hervatten, annuleren |
| Bediening | Assen verplaatsen, homen, onderdeelventilator, snelheid, verlichting; temperaturen met één klik ingesteld |
| Telemetrie | Extruders, bed, kamer en elke `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Camera | MJPEG-stream of momentopnamen |

Machines waarvan de fabrikant gesloten firmware bovenop Klipper levert, houden
hun eigen koppeling: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) en
[Anycubic](./anycubic.md) worden via hun eigen connectoren bereikt, niet via deze.
Een machine die op beide manieren bereikbaar is — een Creality K1 bijvoorbeeld —
biedt de keuze aan bij het toevoegen.

## Native RFID — n.v.t.

Klipper is printerfirmware, geen tagformaat voor spoelen. De identiteit van de
spoel komt van zijn TigerTag, gelezen met een telefoon of een desktoplezer.

## De werkwijze

1. **Voeg de printer toe** — gevonden door de LAN-scan, of handmatig toegevoegd.
2. **Scan een spoel** — met je telefoon (of een desktoplezer); hij komt in je
 inventaris terecht.
3. **Wijs hem toe aan een gate of een lane** — Tiger Studio schrijft hem met het
 eigen Happy Hare- of AFC-commando van de machine, dus er hoeft niets op de
 printer te worden geïnstalleerd.
4. **Live** — printopdracht, temperaturen en camera in de printerweergave.

Een [TigerSpool](../products/tigerspool.md) kan ook een Klipper-slot toewijzen,
maar dat pad is **experimenteel**: geschreven tegen de driver van Tiger Studio en
een Moonraker-mock, nog niet op een printer gedraaid.

---

**◀ Vorige:** [Snapmaker](./snapmaker.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [OpenSpool](./openspool.md)
