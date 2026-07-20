# Elegoo

## Printer link — ✅ Live

| Aspect | Detail |
|---|---|
| Protocol | MQTT, port 1883 |
| Discovery | UDP broadcast, port 52700 |
| Filament | 4 slots (Canvas / tray) |
| Control | Live control panel: home/jog, temperatures, light, fan, speed mode, load/unload |
| Telemetry | Temperatures, job progress |

## Native RFID — 📋 spec documented, in-app read planned

Elegoo spool tags are **Mifare Ultralight** protected only by **magic bytes**
(`EE EE EE EE`) — no real authentication. Read-only decoding spec:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## Using TigerTag with Elegoo

TigerTag chips work on any spool; Tiger Studio assigns inventory spools to the
printer's slots and drives the machine from the control panel.

## Limitations

- Native Elegoo tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).

---

**◀ Previous:** [Creality](./creality.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [FlashForge](./flashforge.md)
