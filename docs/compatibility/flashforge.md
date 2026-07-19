# FlashForge

## Printer link — ✅ Live

| Aspect | Detail |
|---|---|
| Protocol | HTTP polling (port 8898) + TCP M-codes (port 8899) |
| Discovery | UDP multicast (225.0.0.9:19000) |
| Filament | Material station (matlStation) support |
| Camera | MJPEG stream |
| Telemetry | Temperatures, job progress |

## Native RFID — ❔ unknown

No public decoding sheet exists yet for FlashForge spool tags in the ecosystem
documentation.

> **TODO:** document whether current FlashForge machines ship RFID-tagged
> spools and, if so, the tag family and lock scheme.

## Using TigerTag with FlashForge

TigerTag chips work on any spool feeding a FlashForge printer; Tiger Studio
maps inventory spools to material-station slots.

---

**◀ Previous:** [Elegoo](./elegoo.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Anycubic](./anycubic.md)
