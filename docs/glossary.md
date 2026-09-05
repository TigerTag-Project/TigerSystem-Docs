# Glossary

Every term this documentation uses without explaining it. Definitions are
drawn from the pages linked beside them — each entry points at the page that
owns the full story.

> **Note:** this glossary is a **seed**. It covers the terms that already
> appear across this repository; it is deliberately incomplete, and entries
> are only added once the substance for them exists somewhere in the docs.
> Missing a term? Add it with a link to the page that defines it.

## The ecosystem's own vocabulary

| Term | Meaning |
|---|---|
| **TigerSystem** | The whole open ecosystem: the chip format, the reference data, the apps, the hardware and the cloud surface. See [Why TigerSystem exists](./vision/why-tigersystem.md). |
| **TigerTag** | A standard NTAG NFC chip carrying the open 144-byte TigerTag payload — a spool's identity, readable by anything. See [TigerTag](./products/tigertag.md). |
| **TigerTag+** | A TigerTag whose exact content, factory authentication included, is backed up in your account and keyed to that chip's UID — restorable on the original chip only. See [TigerTag+](./products/tigertag-plus.md). |
| **TigerData** | The same identity with no chip at all: the protocol's data in purely digital form, no UID, promotable to a real chip at any time. See [One identity, three states](./concepts/universal-filament-identity.md). |
| **TigerData+** | A chipless spool that carries a real product from the official catalogue — exact brand, colour, material, temperatures, diameter, SKU and EAN — rather than hand-typed values. The `+` means *identified*, not *certified*. |
| **Official** | Made by TigerSystem itself — the chips in both form factors, and the apps and hardware in [Products](./products/README.md). A statement of origin, not a mark that is granted: TigerSystem does not certify itself. |
| **TigerTag Compatible** | The free tier: anything that *talks to* TigerTag chips — readers, apps, printers, slicers, tools. No permission needed to implement it, to say so, or to show the logo in an app, documentation or store listing. It covers **TigerTag+** too: verifying a signature is free, offline and unrestricted. The one word it never includes is *certified*. |
| **TigerTag Certified** | The audited tier, open to anything a third party builds — a device, an application, filament, an inlay, a carrier — once it passes an audit against the requirements. Granted rather than claimed, listed in the certified registry, and withdrawable. Comes in two scopes, **TigerTag Certified** and **TigerTag+ Certified**. Certified partners may apply the mark **on the product** and issue TigerTag+ signatures. See [Developer documentation](./developers/README.md) and the [certification criteria](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | The mobile app (iOS/Android) — tap to read, tap to write, browse the catalogue. Formerly "TigerTag RFID Connect". See [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | The open-source desktop app (Windows/macOS/Linux) — inventory, racks, sensors and printer links. See [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | The ecosystem's web home at `tigersystem.io` — showcase, wishlists, friend codes, public list sharing. See [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | The 3D-printable dual NFC reader stand — free STL. See [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | The open-source ESP32 filament scale that answers "how much is left?". See [TigerScale](./products/tigerscale.md). |
| **TigerTag Factory / Manager** | The industrial, production-grade toolchain that programs chips on filament production lines, and the tools that curate the filament database. Not public. See [Factory suite](./products/factory-suite.md). |
| **Carrier** | The strip that carries a spool's two chips — one at each folded end, stuck to the cardboard core with industrial 3M adhesive. Used on the factory line, sold on its own for refills, and public and printable at home. See [The TigerTag chip](./concepts/tigertag-chip.md). |
| **Masterspool** | A reusable reel a spool-less refill is mounted on. A refill's chip goes inside the cardboard core, so it stays with the filament rather than with the reel. |
| **Twin Tag** | The two chips of one spool, written together as a pair and kept identical for the spool's whole life — always counted as **one** spool. |
| **Reference database** | The shared ID tables (brands, materials, aspects, types, diameters, units) served from `cdn.tigertag.io`, so a chip encoded by one tool reads identically in every other. See [Universal filament identity](./concepts/universal-filament-identity.md). |
| **Aspect** | The reference-database field describing a filament's colour and finish; the [material swatch](./developers/material-swatch.md) is painted from it. |
| **Material swatch** | The normative convention for turning a spool's colour *data* into the same *picture* on every surface — two shapes only, with a reference renderer to check an implementation against. See [The material swatch](./developers/material-swatch.md). |
| **`.ttag` file** | The portable, offline interchange file carrying one or more inventory materials (TigerData, TigerData+, TigerTag or TigerTag+) between tools. See [the `.ttag` format](./developers/ttag-format.md). |
| **Second life** | Re-encoding a chip for a refilled or re-purposed spool, or converting it to plain NDEF for any other NFC use — a chip should never become e-waste. See [Second life](./philosophy/second-life.md). |
| **Smartphone bridge** | Using a phone (or a desktop reader) to identify a spool for a printer that has no RFID reader of its own. See [The smartphone bridge](./philosophy/smartphone-bridge.md). |
| **Printer link** | Tiger Studio talking to a machine over the LAN — telemetry, filament slots, job, camera. Distinct from reading that vendor's own tags. See [Compatibility](./compatibility/README.md). |
| **Refill** | A coil of filament sold without a reel, to be mounted on a spool you already own. |

## NFC and RFID

| Term | Meaning |
|---|---|
| **NFC** | Near-Field Communication — the short-range radio every modern smartphone can use to read a TigerTag. |
| **RFID** | Radio-Frequency Identification, the broader family NFC belongs to. Used here for the vendors' own locked spool tags as well as for TigerTag. |
| **NTAG213 / 215 / 216** | The NXP chip family a TigerTag uses (NFC Forum Type 2). The payload is sized to fit the smallest, NTAG213; official branded chips are NTAG215 to leave memory headroom for reuse. See [The TigerTag chip](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — the standard container the TigerTag payload is stored in, which is why any NFC tool can read it, and why an empty spool's chip can be turned into a plain NFC object. |
| **UID** | The chip's unique hardware identifier, set at manufacture and not rewritable. A TigerTag+ backup is bound to it. |
| **Mifare Classic / Mifare Ultralight** | The chip families printer vendors use for their own spool tags — documented per vendor in the [compatibility matrix](./compatibility/README.md). |
| **ACR122U** | The commodity USB NFC reader class used to read and write chips from a computer; a [TigerPOD](./products/tigerpod.md) is a stand built around one. |
| **PN532 / RC522** | Cheap NFC reader modules, typically paired with an ESP32, for DIY readers — the approach [TigerScale](./products/tigerscale.md) uses. |
| **ECDSA** | The signature scheme the Python SDK's optional `verify` extra checks — the mechanism behind a TigerTag+ origin signature. See [SDKs](./developers/sdks.md). |
| **OpenSpool** | An independent open NFC tag standard for spools (NFC Type 2, NDEF JSON, unlocked). See [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | The community multi-vendor RFID toolkit the per-vendor decoding sheets derive from, and which reads TigerTags. See [Third-party integrations](./developers/integrations.md). |

## Printers and hardware

| Term | Meaning |
|---|---|
| **AMS** | Bambu Lab's Automatic Material System — the multi-spool feeder. Relevant here because it typically shares one RFID reader between two slots, which is why a spool carries two chips. |
| **CFS** | Creality's Filament System — its multi-material unit. |
| **ACE** | Anycubic's multi-material unit. |
| **Canvas** | Elegoo's multi-material unit. |
| **matlStation** | FlashForge's material station. |
| **MMU** | Multi-Material Unit — the generic term for the add-on that feeds several filaments to one printer (ERCF, MMU2, Box Turtle… in the Klipper world). See [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | The open printer firmware and its API — Moonraker's WebSocket is the transport Snapmaker's link already uses, and the next natural one for Klipper machines. See [Klipper](./compatibility/klipper.md). |
| **HID Scale** | The standard USB protocol for weighing scales (DYMO M series and compatibles), read natively by Tiger Studio as a third-party alternative to a TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — how much light a filament lets through, the value HueForge and full-spectrum printing rely on — and the [AJAX-3D](https://ajax-3d.com) analyzer that measures it, in DIY (TD-1) and pre-assembled (TD1s) variants. The measured TD can be stored in the TigerTag protocol itself. See [Third-party hardware](./compatibility/third-party-hardware.md). |
| **ESP32** | The commodity microcontroller behind TigerScale and most DIY TigerTag readers. |

## Cloud and data

| Term | Meaning |
|---|---|
| **Firebase / Firestore** | The plain Google service hosting accounts and inventories — one shared database all the apps read and write, with enforcement in server-side security rules. See [Inventory & cloud sync](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Where the shared reference database is served from. |
| **Friend code / list link** | The two ways to share an inventory — an accepted friend, or a read-only public link anyone opens in a browser, no app and no account. See [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | The manufacturer's product code and its barcode number — what a TigerData+ carries to say exactly which catalogue product a spool is. |

---

**▲ [Documentation index](../README.md)** · **Related:** [FAQ](./faq/README.md), [The TigerTag chip](./concepts/tigertag-chip.md), [Universal filament identity](./concepts/universal-filament-identity.md)
