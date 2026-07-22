# TigerScale

## Purpose

**TigerScale answers the eternal question: how much filament is left?** Put a
spool on the open-source ESP32 scale and the live weight flows straight into
your inventory — no manual entry, no shaking the spool next to your ear.

> **The chip knows what the filament *is*; the scale knows how much is
> *left*.** Together they make the inventory actually true: identity from
> [TigerTag](./tigertag.md), live quantity from TigerScale.

<img src="../assets/tigerscale-photo.jpg" width="480" alt="TigerScale — the open-source ESP32 filament scale" />

## Where it sits

```mermaid
flowchart LR
    SPOOL["🧵 Spool on the scale"] --> SCALE["⚖ TigerScale (ESP32)"]
    SCALE -- "live weight" --> CLOUD[("☁ Your TigerSystem account<br/>(Firebase)")]
    CLOUD --> ST["🖥 Tiger Studio"] & CO["📱 Connect"]
```

## Features

- ESP32-based hardware + firmware, fully open source (MIT) — commodity parts,
  the living example that a simple ESP32 and an NFC reader module (PN532 /
  RC522 class) are enough to build a TigerTag-reading device.
- **Live weight tracking** — updates appear in real time in Tiger Studio and
  Tiger NFC Connect via Firestore.
- Works with Tiger Studio's **container weight calibration** so net filament
  weight stays accurate per container type.

> **TODO:** hardware BOM, build guide and flashing instructions — canonical in
> the [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) repo;
> summarize here once stabilized.

## Third-party scales — USB HID (DYMO M series and friends)

TigerScale is the first-party scale — but Tiger Studio also reads standard
**USB "HID Scale" devices** (HID usage page `0x8D`, usage `0x20`): starting
with the **DYMO M5** and the rest of the DYMO M series (M10, M25… same
protocol), and **any compliant HID Scale**, whatever the brand. A third-party
option, not a Tiger product.

Protocol, validated on real hardware — 6-byte *Scale Data Reports* at ~1 Hz:

| Byte | Meaning |
|---|---|
| `[0]` | report id `0x03` |
| `[1]` | status: 1 fault · 2 stable @ zero · 3 in motion · 4 stable · 5 negative · 6 over capacity |
| `[2]` | unit (HID PoS codes): `0x02` gram · `0x0B` ounce · `0x0C` pound |
| `[3]` | signed power-of-ten exponent applied to the raw value |
| `[4..5]` | weight, LE16 (LSB, MSB) |

DYMO vendor id `0x0922`; the M5 is pid `0x8009`. Quirk: the very first frame
right after a tare reports unit `0x00`.

## Interactions

| With | How |
|---|---|
| Firebase (account database) | Writes live weight to the user's account |
| Tiger Studio / Connect | Display live weight; health monitoring |

## Links

- 📦 Repo: [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) (MIT)

---

**◀ Previous:** [TigerPOD](./tigerpod.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Compatibility](../compatibility/README.md)

**Related:** [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md)
