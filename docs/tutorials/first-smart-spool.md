# Your first smart spool in 5 minutes

Make any filament spool intelligent — **free, at home**, with things you
already own or can get for a few cents.

## What you need

- **Any NFC smartphone** (that's the reader — it's already in your pocket)
- **A blank NTAG chip** — NTAG213, 215 or 216, **25 mm round** recommended
 (a few cents on Amazon, AliExpress or locally; nothing official required)
- **Tiger NFC Connect**, the free app —
 [download for iOS & Android](https://tigersystem.io/fr/download)

> Already bought filament from Rosa3D, eSun, Sunlu, R3D…? Your spool may
> **already carry TigerTag chips** — skip the form and just tap "Scan".

## Steps

**You tap the chip twice:** once to start, once to write.

1. **Install Tiger NFC Connect** and open it.
2. **Tap "Scan"** and hold the phone against your blank chip. The app reads
 it, sees that it is empty, and offers to create a filament for it.
3. **Describe your filament** — pick the material, the color, the aspect, the
 weight, and so on. The choices come from the shared catalogue, so your
 spool will be understood identically by every compatible app. It is a quick
 form; nothing to type from memory.
4. **Tap "Make", then hold the phone against the chip again.** That second
 tap is the write. A second later the data is **on the chip itself** — your
 spool now knows what it is.
5. **Stick the chip on the spool.**

<img src="../assets/nfc-scan.gif" width="420" alt="The NFC tap, animated — phone meets chip, spool identified" />

*The whole gesture, in motion.*

### Two chips on one spool — "Dual NFC"

Factory spools carry **two chips, on opposite sides**, so that a chip is
always facing the reader ([why two?](../concepts/tigertag-chip.md)). You can
do the same, in one session:

1. Scan the first blank chip and fill the form as above.
2. Before writing, **tap the "Dual NFC" button**.
3. **Tap "Make"** as usual — but now the app asks for the chips one after the
 other: **Make 1/2**, then **Make 2/2**. Both chips end up carrying the same
 identity.

> **Always start with the chip you scanned.** The chip that opened the
> creation is the one the app expects as 1/2; the other chip follows as 2/2.

That's it. Re-scan the spool any time, with whichever reader is closest: a
tap of **any NFC phone**, or place it on a reader connected to
[Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)) — the spool introduces itself either
way. Everything above works **100 % offline** — no account, no cloud, no
cost.

## Optional: add it to your inventory

Want the spool in your synced inventory (visible on desktop, shareable with
friends)? Just say so in the app when prompted — it's an explicit choice,
never automatic.

## What next?

- Put the spool on a [TigerScale](../products/tigerscale.md) and watch its
 weight update live.
- Open [Tiger Studio](../products/tiger-studio.md) on your computer and see
 the same spool there.
- Refilled or re-purposed the spool? Re-encode the chip —
 [Second Life](../philosophy/second-life.md).

---

**▲ [Documentation index](../../README.md)** · **Related:** [Tiger NFC Connect](../products/tigertag-connect.md), [The TigerTag chip](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
