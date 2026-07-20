# Tiger NFC Connect (mobile app)

## Purpose

**Your phone already is a TigerTag reader — Connect switches it on.** The
iOS/Android app reads any spool with a tap, writes chips just as easily, and
keeps your whole collection in your pocket. It is the everyday entry point to
the ecosystem and the embodiment of the
[smartphone bridge](../philosophy/smartphone-bridge.md).

## Where it sits

```mermaid
flowchart LR
    TAG["🏷 TigerTag chip"] -- "NFC tap" --> CO["📱 Tiger NFC Connect"]
    CO -- "read / encode" --> TAG
    CO <--> CLOUD[("☁ Your TigerSystem account<br/>(Firebase)")]
    CLOUD <--> ST["🖥 Tiger Studio — same account"]
```

## Features

- **NFC scanning on the go** — tap a spool, see its full profile.
- **Chip programming** — encode and re-encode TigerTag chips from the phone.
- **Catalogue browsing** — the shared brand/material/color reference database.
- **Shared account** — same Firebase backend as Tiger Studio: inventory,
  friends and racks stay in sync in real time across devices.

## Get it

- **Released** on the **App Store (iOS)** and **Google Play (Android)** —
  version 1.0.2 today.
- **Public betas** also available (TestFlight on iOS, open beta on Android).
- All download links: **[tigersystem.io/fr/download](https://tigersystem.io/fr/download)**
  — a QR code is also always available in Tiger Studio's sidebar.

> **Naming note:** formerly published as *"TigerTag RFID Connect"* — renamed
> **Tiger NFC Connect** to echo the NFC reader already in every phone.
> The app is **free to use but proprietary** (not open source) for now —
> unlike Tiger Studio, the SDKs and the hardware, which are open.

## Architecture

Flutter app talking to Firebase (Auth + Firestore) — the single shared
account database behind all the apps. Printer connectivity on mobile is cloud-oriented where vendors
allow it.

## Interactions

| With | How |
|---|---|
| TigerTag chips | Read & write by NFC tap |
| Firebase (account database) | Real-time inventory / friends / prefs sync |
| Tiger Studio | Desktop companion — same account, complementary features |

## In pictures

| | | |
|---|---|---|
| <img src="../assets/connect-scan.jpg" alt="Tiger NFC Connect — scanning a chip by NFC tap" /> | <img src="../assets/connect-inventory.png" alt="Tiger NFC Connect — the mobile inventory" /> | <img src="../assets/connect-printer-live.png" alt="Tiger NFC Connect — live printer view" /> |

<img src="../assets/studio-and-connect-mockup.jpg" width="100%" alt="Tiger Studio on desktop and Tiger NFC Connect on mobile, same account, same data" />

---

**◀ Previous:** [TigerTag+](./tigertag-plus.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Tiger Studio](./tiger-studio.md)

**Related:** [Smartphone bridge](../philosophy/smartphone-bridge.md), [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md)
