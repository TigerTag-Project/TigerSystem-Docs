# Klipper / Moonraker

## Printer link — **Live (beta)**, since Tiger Studio 2.41

Tiger Studio connects to **any printer running Klipper with Moonraker**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon and the rest — 161 machines are in
the add flow with their picture. The integration is a **beta**.

| Aspect | Detail |
|---|---|
| Protocol | Moonraker HTTP API, polled every 2 s; port 7125 by default, another port can be set |
| Discovery | LAN scan, or added by hand with its address and an optional Moonraker API key |
| Filament slots | **Happy Hare** gates and **AFC** lanes, read and edited through the machine's own commands (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); a plain extruder is shown but keeps no filament data |
| Job | Live job with thumbnail and layers; pause, resume, cancel |
| Control | Jog, home, part fan, speed, lights; temperatures set with a click |
| Telemetry | Extruders, bed, chamber and every `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Camera | MJPEG stream or snapshots |

Machines whose makers ship closed firmware on top of Klipper keep their own
link: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) and
[Anycubic](./anycubic.md) are reached through their own connectors, not this
one. A machine reachable both ways — a Creality K1, for instance — offers the
choice when it is added.

## Native RFID — n/a

Klipper is printer firmware, not a spool tag format. The spool's identity comes
from its TigerTag, read with a phone or a desktop reader.

## The workflow

1. **Add the printer** — found by the LAN scan, or added by hand.
2. **Scan a spool** — with your phone (or a desktop reader); it lands in your
 inventory.
3. **Assign it to a gate or a lane** — Tiger Studio writes it with the
 machine's own Happy Hare or AFC command, so nothing has to be installed on
 the printer.
4. **Live** — job, temperatures and camera in the printers view.

A [TigerSpool](../products/tigerspool.md) can assign a Klipper slot too, but
that path is **experimental**: written against Tiger Studio's driver and a
Moonraker mock, not yet run on a printer.

---

**◀ Previous:** [Snapmaker](./snapmaker.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [OpenSpool](./openspool.md)
