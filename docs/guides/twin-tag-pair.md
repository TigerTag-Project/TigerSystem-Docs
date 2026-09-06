# Encode a spool's two chips as a pair

A factory spool carries two chips, one on each face, written together so that
a reader always finds one whichever way the spool is loaded
([why two chips](../concepts/tigertag-chip.md)). When you tag a spool yourself
you can do the same. This guide is about getting the **pair** right: two chips
that the whole ecosystem counts as **one** spool.

## What a pair is

Two chips, two UIDs, one identity. Written together they are a
[Twin Tag](../glossary.md): every app reads either chip and lands on the same
spool, and the weight, the print settings and the inventory entry stay one
record for the spool's whole life. A spool with a single chip works too — two
is what the [first smart spool tutorial](../tutorials/first-smart-spool.md)
calls the full experience.

## Pick your tool

| | Writes the pair | Checks it against itself | Best for |
|---|---|---|---|
| **Phone** — [Tiger NFC Connect](../products/tigertag-connect.md), *Dual NFC* | in one session, chip 1/2 then 2/2 | — | one spool, no hardware |
| **Desktop with a [TigerPOD](../products/tigerpod.md)** — two readers facing each other | in one go, both chips at once | yes — [Tiger Studio](../products/tiger-studio.md) verifies the two against each other | tagging a shelf, a batch |
| **Desktop with a single reader** | in two passes | no | it works — read the note below |

## On the phone: Dual NFC

Tiger NFC Connect writes both chips in a single session: fill the form once,
tap **Dual NFC** before writing, and the app asks for the chips one after the
other. The [first smart spool tutorial](../tutorials/first-smart-spool.md)
walks through it, including the one rule that matters — **the chip you
scanned first is the one the app expects as 1/2**.

## On the desktop: two readers, one pass

Place the spool — a blank chip on each face — in a TigerPOD, so that one chip
faces each reader. Tiger Studio writes both sides in one go and verifies them
against each other. This is what the two-reader geometry exists for; the
[TigerPOD page](../products/tigerpod.md) explains the trade-off with a single
reader.

> **Note:** with **one** reader you write the chips in two separate passes, and
> there is no second chip for Tiger Studio to verify the pair against — *two
> chances to mismatch them*, in the TigerPOD page's words. It works; it is
> simply the path on which a pair most easily ends up as two spools.

## Check the pair

Both chips must open the **same** spool: scan one face, then the other, and
confirm the app lands on one entry, not two. In a `.ttag` export the pair
shows as two records that reference each other through `twin_tag_uid` — a
twin is exported and imported as a whole, never one side alone
([the .ttag format](../developers/ttag-format.md)).

## When a chip stops answering

The surviving chip still identifies the spool, and serves to repair the other
([the TigerTag chip](../concepts/tigertag-chip.md)).

> **TODO:** the exact steps in Tiger Studio for pairing a replacement chip to a
> surviving one are not documented yet.

---

**▲ [Documentation index](../../README.md)** · **Related:** [The TigerTag chip](../concepts/tigertag-chip.md), [Your first smart spool](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md), [The .ttag format](../developers/ttag-format.md)
