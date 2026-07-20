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

## The workflow

1. **Add the printer** — Tiger Studio finds it on the LAN (SSDP discovery, or
   Add by IP); pair with the printer's **LAN mode access code** (step-by-step
   in-app tutorials cover Dev/LAN mode per series: A1, P1, X1, H2).
2. **Scan a spool** — phone or desktop reader; the spool lands in your
   inventory.
3. **Assign it to an AMS slot** — Tiger Studio pushes the filament profile
   (material, color) to the slot over MQTTS; the machine-side info now
   matches reality, across up to 16 AMS slots.
4. **Live** — temperatures, job progress, print preview, wall-clock
   **"Ends at"** time, and the camera feed, right in the printers view.

## Limitations

- Native Bambu tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).
- LAN mode required for the direct link.

---

**◀ Previous:** [Compatibility](./README.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Creality](./creality.md)
