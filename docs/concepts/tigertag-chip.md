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
| Crypto | Reserved 16-byte signature slot (used by [TigerTag+](../products/tigertag-plus.md) certification) |
| Readable by | Any NFC smartphone, ACR122U-class USB readers, [TigerPOD](../products/tigerpod.md) |

This is the deliberate opposite of manufacturer tags (Mifare Classic with
derived keys, AES sectors, RSA signatures — see
[compatibility](../compatibility/README.md)): a TigerTag chip hides nothing.

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
| [TigerTag Connect](../products/tigertag-connect.md) (mobile NFC) | ✅ | ✅ |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | ✅ auto-opens the spool on scan | ✅ guided, UID-checked write |
| [JS SDK](../developers/sdks.md) (`tigertag` on npm) | ✅ | ✅ |
| [Python SDK](../developers/sdks.md) | ✅ | ✅ |

## Versioning

The payload carries a format version (reference table `id_version`), so readers
can stay compatible with older chips.

---

**◀ Previous:** [Universal filament identity](./universal-filament-identity.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Inventory & cloud sync](./inventory-and-cloud-sync.md)

**Related:** [TigerTag](../products/tigertag.md), [SDKs](../developers/sdks.md), [Compatibility](../compatibility/README.md)
