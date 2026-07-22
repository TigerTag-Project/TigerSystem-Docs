# Roadmap

## Ecosystem direction

High-level, non-dated intentions (details live per product):

- **Multi-vendor RFID → TigerData** — retrieve the data from manufacturer
  tags (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
  and convert it into TigerData digital spools, so other brands' filament can
  be scanned and managed in the ecosystem; the read-only specs are already
  documented ([compatibility](../compatibility/README.md)). Direct in-app
  decoding is deliberately not integrated until the interoperability model is
  settled.
- **More printer integrations** — Klipper/Moonraker as the next natural
  transport ([Klipper page](../compatibility/klipper.md)).
- **A distributor map** *(planned)* — official distributors are growing
  beyond [Atome3D](https://atome3d.com); a map will show where to buy
  TigerTag chips locally.
- **The `.ttag` portable file** — the TigerData standalone file format
  (JSON-based): a virtual spool that travels on a USB stick, by mail, or
  between tools — and can carry measured values like the TD.
- **TigerTag for resins** — extending the protocol to resin containers for
  resin 3D printers, bringing the same open identity to a whole second family
  of machines.
- **TigerHub growth** — the ecosystem site at
  [tigersystem.io](https://tigersystem.io): richer social-sandbox features
  (wishlists, friends, sharing).
- **Documentation** — fill the TODO placeholders across this repo (tutorials,
  guides, manufacturer onboarding, RFID payload summary).

## Detailed roadmaps

| Product | Where |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) in the app repo — grouped by domain, with sizing and risk notes |
| Other products | > **TODO:** publish public roadmaps as the repos open up |

> **Note:** this page states direction, not commitments or dates.

---

**◀ Previous:** [FAQ](../faq/README.md) · **▲ [Documentation index](../../README.md)**

**Related:** [Products](../products/README.md), [Compatibility](../compatibility/README.md)
