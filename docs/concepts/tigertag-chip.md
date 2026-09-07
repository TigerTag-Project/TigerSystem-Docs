# The TigerTag chip (RFID/NFC format)

## Physical layer

| Property | Value |
|---|---|
| Chip family | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Recommended form factor | **25 mm round sticker** (other shapes work) |
| Payload | 144-byte NDEF payload — sized to fit the small NTAG213; larger chips leave unused space |
| Official branded chips | Produced as **NTAG215** — the extra memory maximizes end-of-life reuse (standard NDEF objects) so the chip never becomes e-waste |
| Authentication | None — openly readable |
| Write lock | **None** — chips ship unlocked; the user can rewrite them, including migrating to another protocol entirely |
| Reserved area | **64 bytes** at the end of the payload — pages `0x18`–`0x27`, leaving 80 bytes of data. On a standard TigerTag they are **free for community add-on functions**; on a [TigerTag+](../products/tigertag-plus.md) they carry the **origin signature**, 32 bytes of `R` and 32 of `S` (byte-level layout: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips per spool | **Two**, placed on opposite sides |
| Readable by | Any NFC smartphone, ACR122U-class USB readers, [TigerPOD](../products/tigerpod.md) |

This is the deliberate opposite of manufacturer tags (Mifare Classic with
derived keys, AES sectors, RSA signatures — see
[compatibility](../compatibility/README.md)): a TigerTag chip hides nothing.

Think of the chip as **long-term cold storage** for the spool's identity: the
data lives on the chip itself, offline, for years — no server, no account,
nothing required to keep it alive. The online layer (reference database,
cloud sync) only ever *adds* freshness on top.

## Why every spool carries TWO chips

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="A filament refill coil carrying its round TigerTag chip" />

Two chips, on opposite sides of the spool — it looks redundant, it's actually
the smartest detail of the format:

- **Printers share readers.** A machine typically has **one RFID reader for
 two spool slots**, mounted **between the two** — or on the side of the
 printer, where it reads the left or the right face depending on which slot
 your spool is in. A Bambu Lab AMS has 2 readers for 4 slots; on a Snapmaker
 the spool sits either side of the printer. With a chip on each side,
 **whatever the slot, one chip always faces the reader** — and you never have
 to load the spool a particular way round.
- **No hunting for the chip when you scan by hand.** On a
 [TigerPOD](../products/tigerpod.md) or with your phone, you never have to
 work out which face carries the chip: whichever way you pick the spool up,
 one is already on the right side for what you are doing.
- **Scan in place.** A spool mounted on an AMS Lite, the side of an Elegoo
 Centauri Carbon or a FlashForge can be scanned without pulling it out.
- **Integrator freedom.** A filament-dryer maker just puts the reader wherever
 fits — left or right for a single-spool dryer, between the two spools for a
 dual — and it always works.
- **Redundancy.** If one chip stops answering, the other still identifies the
 spool — and serves to repair the broken one.
- **Double the harvest.** At end of life, every kilo of filament printed
 leaves you **two reusable NTAG chips** for DIY projects
 ([zero e-waste](../philosophy/second-life.md)).

A few implementation details:

- The two chips are **fully independent — each has its own UID**; there is no
 shared antenna. They are **written together as a pair (Twin Tag)** and kept
 identical for the spool's whole life, down to the grams left — and always
 counted as **one** spool.
- On factory spools, the chips ride a **carrier**: a strip whose two ends
 fold over the cardboard core (one chip per end), held with industrial
 **3M adhesive (468MP / 200MP)** — the operator peels and sticks, nothing
 else changes on the line. The carrier design is **public and printable at
 home**, and the same form is sold on its own for
 [refills](../philosophy/second-life.md), so the chip travels with the
 filament instead of with the reel.

<img src="../assets/carrier-bare.png" width="440" alt="The bare TigerTag carrier — two independent NFC antennas, one at each end" />

*The carrier, bare: the two independent antennas are plainly visible — one
per folded end, each with its own UID.*

### How the two chips are bound

Nothing central records the pair. It is **inferred from what the two chips
carry**, and the field that makes it deliberate rather than coincidental is
the **timestamp**.

The 4 bytes at page `0x0C` (offset `+32`) serve a double purpose: seconds
since 2000-01-01 GMT, *and* the **Twin Tag ID**. Two chips written in the same
session receive the exact same value — that shared second is the pairing key.

Resolution is one second, so the timestamp alone is not proof: two spools
tagged within the same second would carry it too. What confirms the pair is
that the **descriptive identity matches as well** — the two chips describe one
spool, so every field describing that spool must be identical on both:

| Field | Page | Offset |
|---|---|---|
| Twin Tag ID / timestamp | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

What actually discriminates depends on the variant:

- On a **[TigerTag+](../products/tigertag-plus.md)**, `ID Product` is a real
 catalogue id. Same timestamp **and** same product id is enough to call it a
 pair with near certainty.
- On a **standard TigerTag**, `ID Product` is the constant `0xFFFFFFFF` on
 every chip in existence, so it carries no discrimination at all. The brand,
 the material, the three colors and both aspects do that work instead —
 together with the timestamp.

Two consequences worth stating plainly:

- **Writing the chips in two separate passes does not produce a pair.** They
 receive two different timestamps, so nothing binds them and the ecosystem
 counts two spools. This is why the phone app writes both in a single
 *Dual NFC* session, and why the [TigerPOD](../products/tigerpod.md) holds two
 readers facing each other.
- **The signature is the one thing that legitimately differs.** On a TigerTag+
 it signs `SHA-256(uid ‖ id_tigertag ‖ id_product)`, and each chip has its own
 UID — so the two chips of a pair carry two *different* signatures, by
 construction. Identical signatures would mean a copy, not a twin.

Offsets above are quoted from the canonical
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
(§2.9), which remains the specification.

### The refill carrier, in practice

Two details that surprise people:

- **Gluing it is optional.** The 3M adhesive is there to hold the carrier
 while you handle and store the refill. Once the refill is mounted on the
 masterspool, the carrier is **wedged between the masterspool and the
 cardboard core** and cannot move — the glue has nothing left to do.
- **It comes back out, and it is reusable.** When the refill is finished,
 recover the carrier with its two chips, erase them from
 [Tiger NFC Connect](../products/tigertag-connect.md) or
 [Tiger Studio](../products/tiger-studio.md), and use it again — on another
 spool, or for any other NDEF project. Filament sold with a TigerTag Refill
 leaves you the carrier, not waste
 ([second life](../philosophy/second-life.md)).

Where to get one: see [buying the chips](../products/tigertag.md).

## Encoded at the factory, or blank in your hand

The same chip reaches you two ways, and the difference matters more than
anything else on this page:

| | Where it comes from | What is on it |
|---|---|---|
| **Pre-encoded** | integrated on the production line, inside filament from a partner brand | the spool's full identity, ready to read |
| **Blank** | bought on its own — TigerTag-branded, or any NTAG chip from anywhere | nothing yet; you write it once, in about a minute |

Chips sold separately ship **blank**, logo or no logo. That is not a
limitation: an unwritten chip is what makes
[second life](../philosophy/second-life.md) possible, and it is why the
protocol never depends on buying anything.

## Payload

The 144-byte payload encodes the spool's
[universal identity](./universal-filament-identity.md) — brand, material,
aspect/color, type, diameter, print settings — as IDs resolved against the
shared reference database.

> **TODO:** byte-level field layout. The canonical specification lives in
> [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide);
> this page should summarize it (offsets, versioning, ID tables) once
> finalized there. **Never document offsets here from memory.**

## Reading and writing

| Tool | Read | Write |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (mobile NFC) | tap the chip — the spool opens on the phone | tap **Make** and tap again to write; **Dual NFC** writes a spool's two chips in one session |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | auto-opens the spool on scan | guided, UID-checked write |
| [JS SDK](../developers/sdks.md) (`tigertag` on npm) | decodes the 144-byte payload | encodes a new payload |
| [Python SDK](../developers/sdks.md) | decodes the payload; `tigertag[verify]` also checks the signature | encodes a new payload |

The two apps talk to the reader; the SDKs do not. An SDK decodes and encodes
the **payload** — bring your own NFC hardware.

## Versioning

The payload carries a format version (reference table `id_version`), so readers
can stay compatible with older chips.

---

**◀ Previous:** [Universal filament identity](./universal-filament-identity.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Inventory & cloud sync](./inventory-and-cloud-sync.md)

**Related:** [TigerTag](../products/tigertag.md), [SDKs](../developers/sdks.md), [Compatibility](../compatibility/README.md)
