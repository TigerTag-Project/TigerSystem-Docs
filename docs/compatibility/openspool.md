# OpenSpool

## What it is

**OpenSpool** is an open community tag standard: filament data as **NDEF JSON**
on NFC Type 2 tags — no authentication, no crypto, fully open. In spirit it is
a close cousin of TigerTag.

## TigerTag vs OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Carrier | NTAG, 144-byte NDEF payload | NFC Type 2, NDEF JSON |
| Data model | Compact IDs resolved against a shared reference DB | Self-describing JSON |
| Cloud | Optional account, inventory, sharing ([TigerSystem account](../concepts/inventory-and-cloud-sync.md)) | None (tag-only standard) |
| Certification | Optional [TigerTag+](../products/tigertag-plus.md) backup/signature | None |
| Openness | Open spec + SDKs | Open spec |

## Migrating a chip from TigerTag to OpenSpool

TigerTag chips are **never write-locked** — TigerTag is just the base
protocol spools ship with. If you prefer OpenSpool (or any custom format),
you are free to rewrite a factory chip's data into it.

## Interoperability — 📋 spec documented, TigerData conversion in the works

A read-only decoding sheet for OpenSpool tags is maintained in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
as part of the planned multi-vendor RFID reading in Tiger Studio.

> **TODO:** decide and document the import mapping (OpenSpool JSON fields →
> TigerTag reference IDs) when read support ships.

---

**◀ Previous:** [Klipper](./klipper.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Developers](../developers/README.md)
