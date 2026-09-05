# Troubleshooting: symptom → cause

Chip reading, writing and verification problems, ordered from most to least
frequent. Start at your symptom, work down the checks in order — most of them
were collected from real cases on the
[Discord](https://discord.gg/3Qv5TSqnJH).

For printer-link problems (a machine not appearing in Tiger Studio, a slot not
updating), see the per-vendor pages in [compatibility](../compatibility/README.md);
for purchases that fail by design, see [buying pitfalls](./buying-pitfalls.md).

## The chip is not detected at all

| Check | Detail |
|---|---|
| Is NFC on? | Android: Settings → Connections → NFC. iPhone: always on, nothing to enable. |
| Right antenna spot? | Android phones usually have the antenna in the **upper back**; iPhones read from the **top edge**. Sweep the phone slowly over the chip rather than holding one spot. |
| Case in the way? | A thick case, a magnetic mount plate or a metal ring blocks the field. Take the case off for the read. |
| Chip on metal? | A standard sticker goes dead on a metal surface — that needs an on-metal tag ([buying pitfalls](./buying-pitfalls.md)). |
| Chip damaged? | A fold, tear or puncture cuts the antenna trace. That chip is permanently dead — encode a fresh one. |
| Two chips in the field? | Two chips presented to one reader at the same time collide and neither reads. Separate them. (The two chips of a single spool sit on **opposite sides** precisely so a reader only ever sees one — [why two chips](../concepts/tigertag-chip.md).) |

## The chip reads as blank / "Init"

Not a fault: the chip is new. It carries the TigerTag Init marker and no data
yet. Encode it — [your first smart spool](../tutorials/first-smart-spool.md).

## The chip reads, but the data is wrong

The chip was encoded with the wrong values, or it came off another spool.
Chips are **never write-locked**: just re-encode it with the right data
([the TigerTag chip](../concepts/tigertag-chip.md)).

## The phone reads fine, but the printer does nothing

The chip is fine — what's missing is printer-side support. No printer reads
TigerTag chips by itself out of the box today (the one exception is the
Snapmaker U1 running the community firmware — see
[Snapmaker](../compatibility/snapmaker.md)); the filament data reaches the
six integrated brands **through Tiger Studio**. Check where your machine
stands in the [compatibility matrix](../compatibility/README.md).

## TigerTag+ verification fails

| Cause | What to do |
|---|---|
| Stale reference data | Verification resolves against the shared reference database. Update the app / let it sync, then re-scan. |
| Data was rewritten after signing | **Expected behaviour.** Rewriting the signed area invalidates the signature; the chip keeps working as a standard TigerTag ([TigerTag+](../products/tigertag-plus.md)). |
| Data was copied onto another chip | **By design.** The chip's factory-locked UID is part of what's signed — a clone can never verify. |

Only the first row is fixable; the other two are the trust model doing its
job.

## A write fails midway

- **Hold still.** Moving the phone or the chip during a write can interrupt it
  and leave the chip in an inconsistent state — reported by builders, and
  recoverable: a full re-encode brings the chip back.
- **ACR122U writing intermittently?** Check how it's powered —
  [buying pitfalls](./buying-pitfalls.md#usb-desktop-readers-acr122u-class).

## Still stuck?

Ask in **#help-and-support** on the [Discord](https://discord.gg/3Qv5TSqnJH),
with the five things that make an answer possible:

1. chip model (NTAG213/215/216, or unknown),
2. reader — phone model, ACR122U, TigerPOD, TigerScale,
3. app and version,
4. what you did, in order,
5. what the app showed, word for word (or a screenshot).

---

**▲ [Documentation index](../../README.md)** · **Related:** [Buying pitfalls](./buying-pitfalls.md), [The TigerTag chip](../concepts/tigertag-chip.md), [Compatibility](../compatibility/README.md), [FAQ](../faq/README.md)
