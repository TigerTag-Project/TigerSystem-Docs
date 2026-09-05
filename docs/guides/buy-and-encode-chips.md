# Buy and encode TigerTag chips

The fastest way to make a spool intelligent, start to finish: get the right
chips, then write their identity. No account, no cloud, a few cents per spool.

For the wrong purchases that only reveal themselves after delivery, read
[buying pitfalls](./buying-pitfalls.md) first — this guide assumes you bought
the right chips.

## 1. Which chips to buy

Any **NTAG213 / 215 / 216** (NFC Forum Type 2), **25 mm round sticker**
recommended. NTAG213 is the minimum — the 144-byte payload is sized to fit it
([the TigerTag chip](../concepts/tigertag-chip.md)). Buy from anywhere; nothing
official is required.

> **Note:** planning **two chips per spool**? That's how factory spools ship —
> one on each side, so a reader always faces one. Write them as a pair (see
> step 4).

## 2. Which reader to use

| You have | Use | Best for |
|---|---|---|
| An NFC phone | [Tiger NFC Connect](../products/tigertag-connect.md) | Getting started, occasional writes — the reader is already in your pocket |
| A computer + a USB reader | Tiger Studio + ACR122U or [TigerPOD](../products/tigerpod.md) | Encoding in series, an inventory, a workshop |

Everything below works **100 % offline**.

## 3. Encode a chip from your phone

1. Open Tiger NFC Connect and tap **Scan**.
2. Present the chip to the phone's antenna (Android: upper back; iPhone: top
   edge).
   - A **blank** chip → the app offers to write a new TigerTag.
   - A chip already holding **non-TigerTag** data → the app offers to
     **convert** it. (If it errors instead, wipe it blank with a generic NFC
     app, then re-scan — see [troubleshooting](./troubleshooting.md).)
3. **Describe the filament** — material, brand, colour, aspect, diameter, and
   the print settings: nozzle and bed temperature ranges, drying. The choices
   come from the shared catalogue, so every compatible app reads the spool the
   same way.
4. Tap **Make** and hold the phone to the chip until it confirms.
5. Stick the chip on the spool, and re-scan to check.

> **Tip:** fill in the temperatures even if you know them by heart. The day a
> reader-equipped machine reads the tag on its own, it needs them — and a
> field you leave empty is a field nobody else will fill for a generic
> filament.

## 4. Encode two chips as a pair (Twin Tag)

For the full experience, put a chip on each side of the spool and write them
**together**, so they stay one spool for its whole life:

- **On the phone** — use the **Dual Link** option at creation time.
- **On the desktop** — write both with two readers, or repair an unlinked pair
  in Tiger Studio with **Link to twin Spool**.

Writing the two chips one after another with a single reader may link them
temporarily, but the association is not guaranteed to survive a re-scan — write
them as a pair.

## 5. Encode in series (desktop)

Beyond three or four spools, Tiger Studio + an ACR122U (or a
[TigerPOD](../products/tigerpod.md)) is the practical route: prepare one
filament sheet, duplicate it, and encode spools one after another. This is also
where you burn a **chipless** [TigerData / TigerData+](../concepts/universal-filament-identity.md)
record onto a physical chip — the mobile app doesn't do that yet.

## What you can't do this way

You cannot produce a **TigerTag+ Certified** (signed) chip: the signature is
issued by certified manufacturers, and TigerTag holds the private key
([TigerTag+](../products/tigertag-plus.md)). Encoding at home always produces a
standard TigerTag — fully readable everywhere, just not signed.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Buying pitfalls](./buying-pitfalls.md), [The TigerTag chip](../concepts/tigertag-chip.md), [Your first smart spool](../tutorials/first-smart-spool.md), [Troubleshooting](./troubleshooting.md)
