# Architecture overview

## The stack, top to bottom

```mermaid
flowchart TB
    TAG["TigerTag chip<br/>(open NDEF payload on the spool)"]
    CONNECT["TigerTag Connect<br/>(mobile — NFC scan & encode)"]
    CLOUD["TigerHub<br/>(Firebase Auth + Firestore + cdn.tigertag.io)"]
    STUDIO["Tiger Studio<br/>(desktop — inventory, devices, printers)"]
    PRINTERS["Printer integrations<br/>(Bambu Lab · Creality · Elegoo · FlashForge · Snapmaker · Anycubic)"]
    THIRD["Third-party apps & APIs<br/>(SDKs, Home Assistant, Spoolman, ESP32…)"]
    WEB["tigersystem.io<br/>(TigerHub's public web sharing)"]

    TAG --> CONNECT
    TAG --> STUDIO
    CONNECT <--> CLOUD
    STUDIO <--> CLOUD
    STUDIO --> PRINTERS
    CLOUD --> WEB
    CLOUD <--> THIRD
```

## Layers

| Layer | Role | Canonical docs |
|---|---|---|
| **TigerTag chip** | Portable, open identity of the physical spool | [Chip format](../concepts/tigertag-chip.md) |
| **TigerTag Connect** | The smartphone bridge: scan, encode, browse | [Product page](../products/tigertag-connect.md) |
| **TigerHub** | Identity + inventory + sharing backbone | [Product page](../products/tigerhub.md) |
| **Tiger Studio** | Desktop workbench: inventory, racks, sensors, printers | [Product page](../products/tiger-studio.md) |
| **Printer integrations** | Live LAN links to six printer brands | [Compatibility](../compatibility/README.md) |
| **Third-party APIs** | SDKs + documented Firestore surface for anyone | [Developers](../developers/README.md) |

## The full map — every element and its connections

Accessories, apps, cloud, printers, slicers and third-party integrations, on
one picture:

```mermaid
flowchart TB
    subgraph SP["🧵 The spool"]
        TAG["🏷 TigerTag chip"]
    end
    subgraph ACC["🔌 Accessories"]
        POD["📡 TigerPOD<br/>dual reader stand"]
        ACR["📡 ACR122U<br/>USB NFC reader"]
        SCALE["⚖ TigerScale"]
        TD1S["🎨 TD1S color sensor"]
    end
    subgraph APPS["🖥 Apps"]
        CO["📱 TigerTag Connect"]
        ST["🖥 Tiger Studio"]
        WEB["🌐 tigersystem.io<br/>public sharing"]
    end
    CLOUD[("☁ TigerHub<br/>your account")]
    subgraph PRT["🖨 Printing"]
        SLICER["🔪 Your slicer<br/>(OrcaSlicer, vendor slicers…)"]
        PRN["🖨 Printers<br/>Anycubic · Bambu Lab · Creality<br/>Elegoo · FlashForge · Snapmaker"]
    end
    THIRD["🧩 Third-party<br/>Home Assistant · Spoolman · ESP32 · your app"]

    TAG -- "NFC tap" --> CO
    TAG -- "scan" --> POD --> ST
    TAG -- "scan" --> ACR --> ST
    TD1S -- "measured color" --> ST
    SCALE -- "live weight" --> CLOUD
    CO <--> CLOUD
    ST <--> CLOUD
    CLOUD -- "public share links" --> WEB
    CLOUD <--> THIRD
    ST -- "filament data to slots" --> PRN
    PRN -- "live telemetry, job, camera" --> ST
    SLICER -- "print job" --> PRN
```

Read it left to right: the **chip** identifies the spool; **accessories**
capture reality (scans, weight, color); the **apps** and **cloud** keep it all
in sync; the **printer** receives the filament data and reports back live.
Your **slicer keeps its job** — TigerSystem doesn't slice, it makes sure
everyone (you, the machine, the apps) knows exactly which filament is where.

## Design principles

1. **The chip is self-sufficient.** A spool identifies itself with no cloud, no
   account, no network — the payload is complete and open.
2. **The cloud is the user's, not the system's.** All state lives under the
   user's account; server-side security rules — not client code — enforce
   access.
3. **Every layer is optional.** Phone-only, desktop-only, chip-only, or
   API-only usage all work; components add value but never gate each other.
4. **Integrations speak the printer's native protocol.** No firmware mods, no
   cloud detours: Tiger Studio talks MQTT/WebSocket/HTTP directly on the LAN
   (see [data flow](./data-flow.md)).

---

**◀ Previous:** [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Data flow](./data-flow.md)

**Related:** [Products](../products/README.md), [Developers](../developers/README.md)
