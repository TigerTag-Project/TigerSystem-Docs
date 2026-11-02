---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Drucker-Verbindung – noch nicht, aber das Fundament steht

Generische Klipper-Drucker (über die **Moonraker**-API) sind **heute keine
offizielle Integration**. Die Snapmaker-Anbindung von Tiger Studio spricht
allerdings bereits Moonraker per WebSocket/JSON-RPC – das natürliche Fundament
für eine herstellerneutrale Klipper-Integration.

| Aspekt | Status |
|---|---|
| Moonraker-Transport | Vorhanden (von der Snapmaker-Integration genutzt) |
| Generische Klipper-Unterstützung | Geplant / noch einzugrenzen |
| Zuordnung der Filament-Slots | Hängt vom MMU-Aufbau der Maschine ab – noch einzugrenzen |

> **TODO:** das Ziel festlegen: welche Moonraker-Schnittstelle generisch genug
> ist (Drucker-Objekte, Job-Warteschlange, Webcams) und wie MMU-/Filament-Slots
> im Klipper-Ökosystem zugeordnet werden (ERCF, MMU2, Box Turtle …).

## TigerTag heute mit Klipper nutzen

Alles außer der Live-Verbindung zum Drucker funktioniert bereits: TigerTag-Chips,
Bestand, Gewichtsverfolgung, Racks und Teilen sind unabhängig vom Drucker.

---

**◀ Zurück:** [Snapmaker](./snapmaker.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [OpenSpool](./openspool.md)
