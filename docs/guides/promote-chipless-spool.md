# Promote a chipless spool to a real chip

You can manage a whole inventory with **no chips at all** — as
[TigerData or TigerData+](../concepts/universal-filament-identity.md) records,
the identity living purely in your account. When you're ready, "promoting" a
record means writing it onto a physical NTAG chip so the spool carries its own
identity, offline.

## What you need

- The chipless spool in your inventory (a **TigerData** or **TigerData+**
  record).
- A blank **NTAG213 / 215 / 216** chip.
- **[Tiger Studio](../products/tiger-studio.md) + a USB reader** — an ACR122U
  or a [TigerPOD](../products/tigerpod.md).

> **Warning:** this one step is **desktop-only**. Tiger NFC Connect can write a
> tag you describe on the spot, but it cannot burn an existing chipless
> **record** onto a chip yet — that path runs through Tiger Studio and a reader.

## Steps

1. In Tiger Studio, open the chipless spool from your inventory.
2. Place the blank chip on the reader.
3. Write the record to the chip. The record keeps its catalogue identity — a
   promoted TigerData+ stays identified.
4. Re-scan to confirm, and stick the chip on the spool.

The moment the data lands on the chip, the record becomes a **TigerTag**: a
physical UID is now associated with the identity. A promoted **TigerData+**
becomes a **TigerTag+** (still identified, still not signed — see
[TigerTag+](../products/tigertag-plus.md)).

## Two chips? Promote them as a pair

If the spool will carry two chips, write both in the same operation so they
stay one spool — with two readers, or by repairing the pair afterwards with
**Link to twin Spool**. See
[Buy and encode chips](./buy-and-encode-chips.md#4-encode-two-chips-as-a-pair-twin-tag).

## The reverse is always possible

Chips are never write-locked. A promoted spool can be re-encoded, wiped, or
returned to a plain chipless record at any time — the identity is yours to move
between digital and physical.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Universal filament identity](../concepts/universal-filament-identity.md), [Buy and encode chips](./buy-and-encode-chips.md), [TigerPOD](../products/tigerpod.md), [Tiger Studio](../products/tiger-studio.md)
