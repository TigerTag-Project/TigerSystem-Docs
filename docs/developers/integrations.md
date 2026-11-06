# Built on TigerTag — third-party integrations

The whole point of an open protocol is what *others* build with it. It's
starting to happen — projects that integrated TigerTag on their own:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— the community's multi-vendor spool-RFID toolkit. It reads many vendors'
tag formats — and **TigerTag is one of them**: the open payload made it a
straightforward add.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— an independent, GPL-3.0 community firmware for the Snapmaker U1 (SSH,
camera streaming, metrics… and RFID goodness). **With it, the Snapmaker U1
reads TigerTags natively — making it the first printer to read TigerTag on
the machine itself.** Exactly the future the collective play aims at, arrived
early via the community.

## COSMOS — Elegoo Centauri Carbon firmware (OpenCentauri)

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)**
— an independent, GPL-3.0 community firmware for the Elegoo Centauri Carbon
(mainline Linux built with Yocto, Klipper / Kalico). Its Canvas RFID module
drives the **NFC reader built into the Canvas**, the printer's multi-colour
unit, and decodes the chips with OpenRFID: **the Centauri Carbon reads TigerTags
with its own reader**, no extra hardware.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — a filament inventory
platform (web, iOS/Android, Home Assistant, OrcaSlicer post-processing,
self-hostable). Its spool identification is built on TigerTag: *"Mark your
spools with NFC chips (TigerTags) and manage your inventory with a simple
gesture."* A third-party product, with its own vision — running on the open
protocol, precisely as intended.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — an AGPL-3.0 desktop app
(Python, Windows) that manages a local library of 3D-printing files: previews,
semantic search, slicer hand-off, print queue. Its filament side reads the
**TigerTag inventory**: sign in, or let it pick up an existing Tiger Studio
session, and your TigerTag spools appear in its stock — **read-only**, it never
writes to your inventory. From there it filters the library down to what your
spools can actually print and warns before a print runs short.

---

Building something on TigerTag? Tell us on the
[Discord](https://discord.gg/3Qv5TSqnJH) or through the
[GitHub organization](https://github.com/TigerTag-Project) — and remember
[TigerTag Certified](../../TRADEMARK.md) exists for verified integrations.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Developer overview](./README.md), [What can you build?](./README.md), [Compatibility](../compatibility/README.md)
