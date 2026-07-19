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

## Using TigerTag with Creality

TigerTag chips work on any spool feeding a Creality printer; Tiger Studio maps
inventory spools to CFS slots and shows live machine state.

## Limitations

- Native Creality tags are not yet decoded in-app (planned; spec available).

---

**◀ Previous:** [Bambu Lab](./bambu-lab.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Elegoo](./elegoo.md)
