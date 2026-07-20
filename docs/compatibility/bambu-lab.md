# Bambu Lab

## Printer link — ✅ Live

Tiger Studio connects directly over the LAN:

| Aspect | Detail |
|---|---|
| Protocol | MQTTS (TLS), port 8883 |
| Filament | AMS support — up to 16 slots, per-slot filament edit |
| Discovery | SSDP + TLS probe, plus Add-by-IP |
| Camera | JPEG stream (TCP 6000) / RTSP |
| Telemetry | Temperatures, job progress, print preview |

## Native RFID — 📋 spec documented, in-app read planned

Bambu spool tags are **Mifare Classic 1K** with **HKDF-SHA256 UID-derived
keys** — cryptographically locked to serve the vendor's ecosystem. A read-only
decoding spec is maintained in
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Using TigerTag with Bambu Lab

Tag any spool (Bambu or third-party) with a TigerTag chip → scan → the spool is
in your inventory → assign it to an AMS slot from Tiger Studio, which pushes
the filament profile to the printer.

## Limitations

- Native Bambu tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).
- LAN mode required for the direct link.

---

**◀ Previous:** [Compatibility](./README.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Creality](./creality.md)
