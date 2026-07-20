# The Smartphone Bridge concept

## The insight

> In China we kept asking: *"Where are the RFID readers?"* Everyone answered:
> *"In the Bambu Labs."* False — Bambu's readers are in the AMS, not in the
> printer; the machine can't detect a third-party spool at all. **The RFID
> readers are in your pockets** — in every phone, ready to use, without you
> even knowing.

Every modern smartphone contains an NFC reader. That means **every 3D-printing
user already owns TigerTag hardware** — no proprietary reader, no printer
upgrade, no purchase required to start.

```mermaid
flowchart LR
    TAG[TigerTag chip on spool] -- NFC tap --> PHONE[Smartphone + Tiger NFC Connect]
    PHONE -- sync --> CLOUD[("Your TigerSystem account (Firebase)")]
    CLOUD --> STUDIO[Tiger Studio — desktop]
    STUDIO --> PRINTER[Connected printer]
    CLOUD --> WEB["tigersystem.io — public sharing"]
```

The phone acts as the **bridge** between the physical spool and the digital
inventory:

1. **Tap** — the chip's profile (brand, material, color, settings) is read in one gesture.
2. **Sync** — the spool appears in the user's cloud inventory instantly.
3. **Everywhere** — the desktop app, the web, and connected printers now know the spool.

## Native RFID vs the bridge

Some printers read tags natively (their own proprietary format); most read
nothing at all. The bridge makes the printer's capabilities irrelevant:

| Path | Requires | Works with |
|---|---|---|
| **Native RFID** | A printer that reads that vendor's locked tag | One brand only |
| **Smartphone bridge** | Any NFC phone | **Every printer**, every brand, even fully offline machines |

With the bridge, filament data reaches the printer through
[Tiger Studio's printer integrations](../compatibility/README.md) (six brands
live today) — the spool identifies itself to the *system*, and the system talks
to the machine.

The proof by example: **FlashForge printers have no RFID reader at all** —
and through the bridge they now work with NFC-identified filament anyway. An
entire new capability, added to someone else's machines, **totally free for
the user** ([the FlashForge case](../compatibility/flashforge.md)).

---

**◀ Previous:** [Open ecosystem](./open-ecosystem.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Second Life workflow](./second-life.md)

**Related:** [Tiger NFC Connect](../products/tigertag-connect.md), [Architecture overview](../architecture/overview.md)
