# Anycubic

## Printer link — ✅ Live (LAN + cloud)

| Aspect | Detail |
|---|---|
| Protocol (LAN) | MQTTS, port 9883 (TLS 1.2), direct to the printer |
| Protocol (cloud) | Signed REST + vendor cloud MQTT |
| Filament | ACE multi-color box — per-slot support |
| Discovery | `/info` probe, port 18910 |
| Camera | FLV stream (port 18088) |
| Control | Live control panel (axes, temps, light, fan, load/unload) |

> **Note:** cloud mode is the one place where a printer link transits a vendor
> cloud — LAN mode stays fully local.

## Native RFID — 📋 spec documented, in-app read planned

Anycubic spool tags are **Mifare Ultralight** with **no authentication and no
crypto** — trivially readable (and clonable). Read-only decoding spec:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## The workflow

1. **Add the printer** — two paths: **LAN mode** (local discovery via the
   `/info` probe; the connection credentials are imported from the vendor
   slicer's configuration) or **cloud mode** through the Anycubic account.
2. **Scan a spool** — phone or desktop reader; it lands in your inventory.
3. **Assign it to an ACE slot** — Tiger Studio maps inventory spools to the
   ACE multi-color box.
4. **Live & control** — telemetry, job progress, the FLV camera stream, and
   a **control panel**: axes, temperatures, light, fan, load/unload per
   slot.

## Limitations

- Native Anycubic tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).

---

**◀ Previous:** [FlashForge](./flashforge.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Snapmaker](./snapmaker.md)
