# Creality

## Printer link — ✅ Live

| Aspect | Detail |
|---|---|
| Protocol | WebSocket, port 9999 (heartbeat-based) |
| Filament | CFS multi-spool support (boxsInfo) |
| Camera | WebRTC video (port 8000) |
| Telemetry | Temperatures, job progress, print preview |

## Native RFID — 📋 spec documented, in-app read planned

Creality spool tags are **Mifare Classic 1K** with an **AES-128-ECB key for
sector 1** and optional payload encryption. Read-only decoding spec:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## The workflow

1. **Add the printer** — LAN discovery or Add by IP; Tiger Studio connects
   over the printer's WebSocket and keeps the link alive.
2. **Scan a spool** — phone or desktop reader; it lands in your inventory.
3. **Assign it to a CFS slot** — Tiger Studio maps inventory spools to the
   CFS boxes so the machine-side filament info matches reality.
4. **Live** — temperatures, job progress, print preview, "Ends at" time, and
   the **WebRTC camera** stream in the printers view.

## Limitations

- Native Creality tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).

---

**◀ Previous:** [Bambu Lab](./bambu-lab.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Elegoo](./elegoo.md)
