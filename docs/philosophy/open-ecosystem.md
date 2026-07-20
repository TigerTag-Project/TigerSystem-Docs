# Open ecosystem philosophy

## Everything is open

Every layer of TigerSystem is published — hardware, firmware, SDKs, apps, docs:

| Layer | Project | License |
|---|---|---|
| Desktop app | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| JS SDK (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | MIT |
| Python SDK | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | MIT |
| Scale hardware + firmware | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Reader stand (STL + docs) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Chip format guide | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | see repo |
| Cloud integration docs | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| This documentation | TigerSystem-Docs | CC BY 4.0 |

## A sandbox, not a walled garden

The **whole user-facing ecosystem** is deliberately **a laboratory, not the
destination**.
Every product — [Tiger Studio](../products/tiger-studio.md), the mobile app,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) —
is a working demonstration of what open, documented technology makes possible
once a spool can identify itself: live printer telemetry across six brands,
physical rack mapping, sensors, shared inventories. Some of it will mature,
some of it exists to prove a point, and all of it is readable, forkable and
free to copy. Every product — current and future — is a **proof of concept**
of an **open-source, standard, agnostic, cross-platform protocol**: its only
job is to show the potential, so that anyone can take our integration work as
inspiration and imagine the features of tomorrow.

## Build your own

TigerTag is an open **protocol**, not a platform you have to join:

1. Read the chip format ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Pick up an [SDK](../developers/sdks.md).
3. Connect to the [cloud](../developers/cloud-api.md) — or don't; chips work offline.
4. Ship the software, the hardware or the business you actually want.

Your app can be something else entirely — it will still speak the same chips.
An NFC phone, an ACR122U USB reader — or a DIY ESP32 with a PN532/RC522
module, TigerScale-style — is all the hardware it takes: plug spool
identity into an ERP, an internal stock tool, a tracking workflow, a fablab
lending system, a private or public R&D project — anything.

---

**◀ Previous:** [User-centric ecosystem](./user-centric-ecosystem.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Smartphone bridge](./smartphone-bridge.md)

**Related:** [Developer overview](../developers/README.md), [Products](../products/README.md)
