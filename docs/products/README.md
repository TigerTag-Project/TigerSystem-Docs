# Products

The TigerSystem ecosystem, one page per product.

> **Note:** every **user-facing** product below — and every future one — is a
> working **proof of concept**. Their only goal is to show the potential of an
> open-source, standard, agnostic, cross-platform protocol, and to inspire
> what others will build with it. (The factory-side chip-programming toolchain
> is a different story: industrial-grade, in production.) See
> [A sandbox, on purpose](../vision/why-tigersystem.md).

| Product | What it is | Type |
|---|---|---|
| <img src="../assets/icons/tigertag.svg" width="18" alt="" /> [TigerTag](./tigertag.md) | Open RFID/NFC chip + standard for spool identity | Hardware + spec |
| <img src="../assets/icons/tigertag-plus.svg" width="18" alt="" /> [TigerTag+](./tigertag-plus.md) | A TigerTag backed up in your account — factory-state restore on the original chip | Hardware + service |
| <img src="../assets/icons/connect.svg" width="18" alt="" /> [Tiger NFC Connect](./tigertag-connect.md) | Mobile app (iOS/Android) — scan, encode, browse | App |
| <img src="../assets/icons/studio.svg" width="18" alt="" /> [Tiger Studio](./tiger-studio.md) | Desktop app — inventory, racks, sensors, printers | App |
| <img src="../assets/icons/tigerhub.svg" width="18" alt="" /> [TigerHub](./tigerhub.md) | The ecosystem's web home — showcase, wishlists, friends & sharing at `tigersystem.io` | Web |
| <img src="../assets/icons/tigerpod.svg" width="18" alt="" /> [TigerPOD](./tigerpod.md) | 3D-printable dual NFC reader stand | Hardware |
| <img src="../assets/icons/tigerscale.svg" width="18" alt="" /> [TigerScale](./tigerscale.md) | Open-source ESP32 filament scale | Hardware |
| <img src="../assets/icons/factory.svg" width="18" alt="" /> [TigerTag Factory & Manager](./factory-suite.md) | Industrial chip programming & filament-database tools for factories — **not public**, production-grade | Industrial |

```mermaid
flowchart LR
    TT[TigerTag / TigerTag+] --> CO[Tiger NFC Connect]
    TT --> POD[TigerPOD] --> ST[Tiger Studio]
    SC[TigerScale] --> FB[("Your TigerSystem account — Firebase")]
    CO <--> FB
    ST <--> FB
    FB --> HUB["TigerHub — tigersystem.io"]
```

---

**◀ Previous:** [Data flow](../architecture/data-flow.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [TigerTag](./tigertag.md)
