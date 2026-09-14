# When a spool's two chips read as two spools

You tagged a spool with a chip on each face, and your inventory now shows
**two** entries instead of one. Each chip works; each opens its own spool. The
weight you correct on one never appears on the other.

Nothing is broken. The two chips were almost certainly never a pair.

## The test that settles it

Two chips are a pair because they carry the **same Twin Tag ID** — a value
written at the moment of writing, shared only by chips written in the same
session. Read both chips and compare that value: it is the whole diagnosis.
Tiger Studio shows it; so does any reader that decodes the payload.

The full rule, including what else has to match and why the timestamp alone is
not proof, is on
[the TigerTag chip](../concepts/tigertag-chip.md).

## Different values: they were never a pair

This is the ordinary cause, and it has one origin: **the two chips were
written in two separate passes**. A second pass happens a second later or a day
later, so it stamps a different Twin Tag ID, and nothing binds the two chips
from that moment on. Every tool downstream is right to count two spools.

There is no repair short of rewriting. A pair is made at write time or not at
all.

## Rewriting them as one pair

Erase both chips, then write them together in a single session:

| | How the pair is written | Best for |
|---|---|---|
| **Phone** — [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC*: one form, then chip 1/2 and 2/2 in the same session | one spool, no hardware |
| **Desktop, two readers** — [TigerPOD](../products/tigerpod.md) | both chips at once, in one pass | a shelf, a batch |
| **Desktop, one reader** | not possible in one pass — this is how the problem was created | — |

The phone procedure, including the rule that the chip you scanned first is the
one the app expects as 1/2, is in
[your first smart spool](../tutorials/first-smart-spool.md).

The single-reader case is the reason the [TigerPOD](../products/tigerpod.md)
holds two readers facing each other: one pass, one timestamp, one pair.

## Same value, still two entries

Rarer, and worth reporting. The Twin Tag ID is necessary but not sufficient —
the two chips must also describe the same spool, field for field: brand,
material, the three colours, both aspects. Compare those next.

If every field matches and your inventory still splits the spool in two, that
is a bug rather than a mis-write. Say so on the
[Discord](https://discord.gg/3Qv5TSqnJH) with both chip readouts.

---

**▲ [Documentation index](../../README.md)** · **Related:** [The TigerTag chip](../concepts/tigertag-chip.md), [Your first smart spool](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
