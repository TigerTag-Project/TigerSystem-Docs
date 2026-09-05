# Buying pitfalls

Everything in the ecosystem runs on cheap, widely available parts — that's the
point. The flip side: marketplace listings all look alike, and the wrong
variant only reveals itself **after delivery**. Every pitfall below cost a
real builder time or money; most were reported on the
[Discord](https://discord.gg/3Qv5TSqnJH).

Read this **before** placing an order, not after.

## Blank NFC chips

| Buy | Avoid | Why |
|---|---|---|
| **NTAG213 / 215 / 216**, 25 mm round sticker recommended | Listings that only say "NFC 13.56 MHz" | That label also covers incompatible chips. Insist on the exact NTAG reference. |
| | **MIFARE Classic 1K** tags | Same frequency, different standard — it's what several printer vendors use for their own locked tags ([compatibility](../compatibility/README.md)). A blank one cannot hold a TigerTag. |
| | UID-changeable **"magic" chips** | The [TigerTag+](../products/tigertag-plus.md) trust model is anchored on the factory-locked UID. A spoofable UID defeats it — and a seller pushing "magic" chips for spool tagging is a red flag in itself. |
| | Pre-locked promotional tags | Some promotional NFC stickers ship **write-locked** and can never be encoded. |

> **Note:** NTAG213 is the minimum — the 144-byte payload is sized to fit it.
> Official branded chips ship as NTAG215 so the chip can be reused as a plain
> NDEF object at end of life ([the TigerTag chip](../concepts/tigertag-chip.md)).

Sticking a chip **on a metal surface**? A standard sticker goes dead on metal —
you need an *on-metal* (ferrite-backed) tag, which costs more. For a plastic or
cardboard spool, the standard sticker is fine.

## USB desktop readers (ACR122U class)

The ACR122U is the reference desktop reader — two of them power a
[TigerPOD](../products/tigerpod.md). The reader itself is a safe buy; how you
plug it is the trap:

> **Warning:** on an **unpowered USB hub**, an ACR122U reads fine but **fails
> writes intermittently** — the most confusing failure mode there is, reported
> repeatedly by builders. Plug it directly into the computer, or use a powered
> hub.

## PN532 modules (TigerScale builds)

> **Warning:** *"Sealed USB-C-only PN532 dongles will not work with this
> board"* — the
> [Tiger-Scale-V3 README](https://github.com/TigerTag-Project/Tiger-Scale-V3)'s
> own words. You need bare **PN532 V3 modules with accessible header pins**.
> The sealed dongles look like the convenient option; they are the single most
> common wrong purchase of the build.

Two more things to check on the listing photos:

- The common red PN532 boards carry **two DIP switches** selecting the bus
  (I²C / SPI / HSU). Wrongly set, the module is simply invisible — set them to
  match the transport you flash.
- You need **two** modules for a TigerScale.

## The TigerScale touchscreen: 3.5 vs 3.5B

Both Waveshare variants are supported — they differ only in controllers:

| | ESP32-S3-Touch-LCD-**3.5** | ESP32-S3-Touch-LCD-**3.5B** |
|---|---|---|
| Display controller | ST7796 (SPI) | AXS15231B (QSPI) |
| Touch controller | FT6336 (separate chip, I²C) | AXS15231B (integrated, I²C) |
| MCU / PSRAM / resolution | identical | identical |

The **3.5B** was the original development target and is the nicer
architecture — but it is chronically **out of stock**. The plain **3.5**
performs just as well in practice (team-confirmed after user testing, on the
Discord). **Buy whichever you can find**; you select the variant at flash
time.

## Screws: order them with the electronics

The TigerScale build needs 2× M5×30 + 2× M4×30 (load cell), 4× M2×6
(display) and M3 self-tapping screws (housing). In non-metric countries these
are genuinely hard to find in local hardware stores — a builder on the
Discord ended up assembling a separate parts order after discovering this
mid-build. One online order **together with the electronics** avoids the
wait.

## Filament for the printed parts

Do **not** print any part that sits between a reader and a chip in
carbon-fiber-filled filament (PLA-CF, PETG-CF): the conductive fibers disturb
the NFC field. Plain PLA or PETG works fine.

---

**▲ [Documentation index](../../README.md)** · **Related:** [The TigerTag chip](../concepts/tigertag-chip.md), [TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md), [FAQ](../faq/README.md)
