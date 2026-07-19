# TigerSystem

> **Your filament, finally smart — and finally yours.**

Every 3D-printing shelf hides the same mystery: twenty spools, half of them
unlabeled, none of them able to tell you what they are, how much is left, or
how they like to be printed.

**TigerSystem fixes that with one small chip.** Stick a **TigerTag** NFC chip
on a spool and the spool can introduce itself — to your phone, to your
computer, to your printer: *"I'm matte black PLA from brand X, 1.75 mm, print
me at 210 °C, and there's 640 g of me left."*

No subscription. No locked format. No printer brand deciding what you're
allowed to know about **your own filament**.

## What you can actually do with it

- 📱 **Tap a spool with your phone** — its full profile appears instantly.
- 🖥 **See your whole collection on one screen** — searchable, sorted, with photos.
- ⚖ **Know how much is really left** — put the spool on the open-source scale, the number updates everywhere.
- 📦 **Find any spool in seconds** — map your shelves and racks; the app remembers the exact slot.
- 🖨 **Let your printer know what's loaded** — live link with six printer brands, filament data pushed to the slot.
- 🤝 **Share with friends** — a simple code or a web link shows your collection, read-only.
- ♻️ **Give old spools a second life** — refill or re-purpose any spool, rewrite its chip, done.

## The idea in 30 seconds

Printer manufacturers put RFID tags on their spools too — but **locked**, in
secret formats, working only with their machines, feeding their cloud. Your
inventory ends up belonging to them.

TigerSystem flips it: the chip is **open and readable by anything**, the data
belongs to **your** account, and every piece — apps, cloud, scale, reader,
even the chip spec — is published for anyone to use or build on. It's a
format, not a walled garden.

→ The full story: **[Why TigerSystem exists](docs/vision/why-tigersystem.md)**

## How it all connects

```mermaid
flowchart LR
    subgraph On your desk
        TAG["🏷 TigerTag chip<br/>on each spool"]
        POD["📡 TigerPOD reader stand"]
        SCALE["⚖ TigerScale"]
        PRN["🖨 Your printers<br/>6 brands live"]
        SLICER["🔪 Your slicer<br/>(unchanged)"]
    end
    subgraph Your screens
        CO["📱 TigerTag Connect<br/>mobile"]
        ST["🖥 Tiger Studio<br/>desktop"]
        HUB["🌐 TigerHub<br/>web sharing"]
    end
    CLOUD[("☁ Tiger Cloud<br/>your account, your data")]

    TAG -- tap --> CO
    TAG --> POD --> ST
    SCALE --> CLOUD
    CO <--> CLOUD
    ST <--> CLOUD
    CLOUD --> HUB
    ST -- local network --> PRN
    SLICER -- print jobs, as always --> PRN
```

Every piece is optional. Phone only? Works. Desktop only? Works. Just the
chips, fully offline? Works too.

## Meet the family

| Product | In plain words |
|---|---|
| 🏷 **[TigerTag](docs/products/tigertag.md)** | The chip — gives any spool a memory of its own |
| 🏷 **[TigerTag+](docs/products/tigertag-plus.md)** | The chip your account backs up — lose it, restore it |
| 📱 **[TigerTag Connect](docs/products/tigertag-connect.md)** | The phone app — tap to read, tap to write |
| 🖥 **[Tiger Studio](docs/products/tiger-studio.md)** | Mission control on desktop — inventory, racks, printers, sensors |
| 🌐 **[TigerHub](docs/products/tigerhub.md)** | Share your collection with a simple link |
| ☁ **[Tiger Cloud](docs/products/tiger-cloud.md)** | The memory behind it all — your data, synced everywhere |
| 📡 **[TigerPOD](docs/products/tigerpod.md)** | A 3D-printable scanner stand for your desk — free STL |
| ⚖ **[TigerScale](docs/products/tigerscale.md)** | The open-source scale that answers "how much is left?" |

## Everything is open — the public repositories

This repo is the **map**: it explains the ecosystem and links every public
piece of it.

| Repository | What you'll find there |
|---|---|
| **TigerSystem-Docs** (you are here) | The whole story, explained — for humans and for AI assistants ([llms.txt](llms.txt)) |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | The desktop app, full source + downloads (MIT) |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Read & write chips from JavaScript — npm `tigertag` (MIT) |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Same, from Python (MIT) |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | The chip format, byte by byte |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Connect your own app/device to the cloud — with working examples (ESP32, Home Assistant, Spoolman) |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | Build the scale yourself — hardware + firmware (MIT) |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Print the reader stand — free STL (CC BY 4.0) |

## Dive deeper

| You are… | Start here |
|---|---|
| **Curious** — what is this, why does it exist? | [Vision](docs/vision/why-tigersystem.md) → [Philosophy](docs/philosophy/user-centric-ecosystem.md) |
| **A user** — what does each product do for me? | [Products](docs/products/README.md) → [FAQ](docs/faq/README.md) |
| **A printer owner** — does it work with MY printer? | [Compatibility](docs/compatibility/README.md) |
| **A developer** — how do I build on it? | [Developers](docs/developers/README.md) → [SDKs](docs/developers/sdks.md) → [Cloud API](docs/developers/cloud-api.md) |
| **An AI assistant** — how does this ecosystem work? | **[llms.txt](llms.txt)** — the condensed, canonical explainer |
| **In a hurry** | [How it works end-to-end](docs/architecture/data-flow.md) in two diagrams |

## Quick links

- 🌐 **[tigersystem.io](https://tigersystem.io)** — public sharing (TigerHub)
- ⬇ **[Download Tiger Studio](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases)** — Windows · macOS · Linux
- 📦 **[github.com/TigerTag-Project](https://github.com/TigerTag-Project)** — all the open repos

## Contributing

Spotted a gap, a typo, a question the FAQ should answer? PRs welcome —
see [CONTRIBUTING.md](CONTRIBUTING.md). One rule above all: every fact has one
canonical home; this repo explains and links, it never forks the truth.

## License

Documentation: **[CC BY 4.0](LICENSE)** · Trademarks: **[TRADEMARK.md](TRADEMARK.md)**
