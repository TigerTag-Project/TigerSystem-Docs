# Snapmaker

## Printer link — ✅ Live

| Aspect | Detail |
|---|---|
| Protocol | Moonraker WebSocket (JSON-RPC), port 7125 + proprietary extensions |
| Discovery | HTTP scan |
| Filament | Per-slot filament edit (RRGGBBAA color model) |
| Control | Live control panel (axes, temps, light, fan, speed, load/unload) |
| Telemetry | Temperatures, job progress |

## Native RFID — 📋 spec documented, in-app read planned

Snapmaker spool tags are **Mifare Classic 1K** with **HKDF-derived per-sector
keys** and an **RSA-2048 PKCS#1 v1.5 + SHA-256 signature** — the most heavily
locked format documented so far. Read-only decoding spec:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## Using TigerTag with Snapmaker

TigerTag chips work on any spool; Tiger Studio drives the machine over
Moonraker and maps inventory spools to slots.

## Limitations

- Native Snapmaker tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).

## The first printer to read TigerTag natively

The community's
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
(independent, GPL-3.0) adds SSH, camera streaming, metrics — and with it,
**the Snapmaker U1 reads TigerTags natively, on the machine itself**. That
makes the U1 the first printer where a TigerTag spool is recognized without
any app in between — the future the
[collective play](../vision/for-filament-manufacturers.md) aims at, arrived
early via the community. See
[third-party integrations](../developers/integrations.md).

---

**◀ Previous:** [Anycubic](./anycubic.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Klipper](./klipper.md)
