# Compatibility

How TigerSystem works with each printer ecosystem. Two independent axes:

- **Printer link** — Tiger Studio talking to the machine over the LAN
  (telemetry, filament slots, job, camera). **Six brands are live today.**
- **Native RFID** — reading the vendor's own spool tags. Documented per
  vendor. Direct in-app decoding is **not integrated yet** (the right
  interoperability model is still an open question); the current work aims at
  **converting vendor tag data into TigerData digital spools**, so filament
  from other brands can be scanned and managed in the ecosystem. Meanwhile,
  the TigerTag chip itself already works with every printer via the
  [smartphone bridge](../philosophy/smartphone-bridge.md).

## Matrix

| Ecosystem | Printer link (Tiger Studio) | Native tag format | Native tag lock | RFID read status |
|---|---|---|---|---|
| [Bambu Lab](./bambu-lab.md) | ✅ Live — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, UID-derived keys | 📋 Spec documented |
| [Creality](./creality.md) | ✅ Live — WebSocket + CFS | Mifare Classic 1K | AES-128-ECB sector key | 📋 Spec documented |
| [Elegoo](./elegoo.md) | ✅ Live — MQTT + Canvas | Mifare Ultralight | Magic bytes only | 📋 Spec documented |
| [FlashForge](./flashforge.md) | ✅ Live — HTTP + matlStation | — (machines have no RFID reader) | — | ✨ TigerTag adds NFC to it, zero cost |
| [Anycubic](./anycubic.md) | ✅ Live — MQTTS LAN + cloud, ACE | Mifare Ultralight | None | 📋 Spec documented |
| [Snapmaker](./snapmaker.md) | ✅ Live — Moonraker WebSocket | Mifare Classic 1K | HKDF + RSA-2048 signature | 📋 Spec documented |
| [Klipper](./klipper.md) | ⏳ Not yet (groundwork exists) | n/a | n/a | n/a |
| [OpenSpool](./openspool.md) | n/a (tag standard, not a printer) | NFC Type 2, NDEF JSON | None — open standard | 📋 Spec documented |
| Qidi | ❌ Not integrated | Mifare Classic 1K | Default key | 📋 [Spec documented](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

**Legend:** ✅ shipped · ⏳ planned/possible · 📋 read-spec available · ❔ unknown

> **Note:** the per-vendor RFID sheets (read-only decoding specs, derived from
> the [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) project) are
> maintained in the Tiger Studio repo under
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — they are linked, not duplicated, here.

## The universal answer

Whatever the printer: stick a [TigerTag](../products/tigertag.md) chip on the
spool and the whole ecosystem works — identification, inventory, weight,
sharing, and filament data pushed to any of the six integrated brands.

---

**◀ Previous:** [TigerScale](../products/tigerscale.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Bambu Lab](./bambu-lab.md)
