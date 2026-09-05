# TigerTag+

## Purpose

**The `+` means identified.** A TigerTag+ is a TigerTag whose identity carries a
**product ID from the official catalogue** — not values someone typed, but the
exact product: brand, colour, material, temperatures, diameter, SKU, EAN,
straight from the source. On top of that it can carry **optional enrichment
metadata**, held cloud-side and improvable after the chip is written.

The chip itself stays **100 % offline**. Everything needed to print is on it,
exactly as on a standard TigerTag — the catalogue ID adds the ability to look
up richer, fresher data *when you happen to be online*, and takes nothing away
when you are not. A TigerTag+ read in airplane mode behaves like any other
TigerTag.

This is the same `+` as in [TigerData+](../concepts/universal-filament-identity.md):
in both cases it means *this identity is a real catalogue product*, and in
neither case does it mean *certified*.

> **Naming note:** formerly sold as **"TigerTag Pro"** — the name is now
> **TigerTag+**.

## TigerTag+ Certified — the signed variant

A TigerTag+ that additionally carries a **cryptographic signature** is a
**TigerTag+ Certified**. The signature is written by a manufacturer holding
[TigerTag+ certification](../developers/README.md), who is given the signing
tools as part of it; TigerTag holds the private key.

| | TigerTag | TigerTag+ | TigerTag+ Certified |
|---|---|---|---|
| Print data on the chip | yes | yes | yes |
| Works fully offline | yes | yes | yes |
| Catalogue product ID | — | **yes** | yes |
| Optional enrichment metadata | — | **yes** | yes |
| Origin signature | — | — | **yes** |
| Who can produce one | anyone | anyone writing a catalogue product | **a certified manufacturer only** |

**Verifying** a signature is free, offline and unrestricted — the public keys
are published, and any reader can check one without an account or a network.
**Issuing** one is what certification grants. A cloned tag fails verification,
on the customer's own phone.

The byte-level layout — chip type ids, the 64-byte signature area at pages
`0x18`–`0x27` — is specified in
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide).

## Where it sits

```mermaid
flowchart LR
  CAT[("Official catalogue")] -- "product id + metadata" --> TTP["TigerTag+"]
  TTP -- "signed by a certified manufacturer" --> CERT["TigerTag+ Certified"]
  CERT -- "verify offline, public key" --> ANY["Any reader, any phone"]
  TTP -- "read offline" --> ANY
```

## Backing up a chip — a separate feature

Tiger Studio can **back up a chip's exact content** in your account, keyed to
its physical UID, and later reprogram it back to that state. This is useful and
unrelated to the `+`: it applies to any chip you can scan, and having a backup
does not make a chip a TigerTag+.

- **Factory-state restore**: if a chip is accidentally rewritten or corrupted,
 put it back exactly as it was — signature included, if it had one.
- **Same chip only**: the restore is valid on the original chip, because the
 backup is bound to its UID. A safeguard for *that* chip, never a way to clone.
- **Proof of possession**: a scan matching the backup shows the original chip
 is physically in your hands.

> **Note:** creating a backup currently requires **Tiger Studio + a USB reader
> (TigerPOD / ACR122U)**; mobile support is planned.

## Interactions

| With | How |
|---|---|
| Tiger Studio + TigerPOD/ACR122U | Reads and verifies signatures; creates and restores chip backups |
| Tiger NFC Connect | Reads and verifies; backup support coming |
| SDKs | `tigertag[verify]` checks a signature offline, in Python or JS |
| Firebase (account database) | Holds the catalogue, the enrichment metadata, and per-account chip backups |

## Links

- Official chips: **[tigertag.io](https://tigertag.io)** (shop)

---

**◀ Previous:** [TigerTag](./tigertag.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Tiger NFC Connect](./tigertag-connect.md)

**Related:** [Universal filament identity](../concepts/universal-filament-identity.md), [The TigerTag chip](../concepts/tigertag-chip.md), [Developer documentation](../developers/README.md)
