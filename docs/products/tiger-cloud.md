# Tiger Cloud

## Purpose

**Tiger Cloud is the memory behind everything.** Your inventory follows you —
phone, desktop, web — because it lives in *your* account, not in a printer
brand's silo. It also carries the shared reference catalogue every app speaks,
and a documented surface for anyone building their own integration.

## Components

| Component | Role |
|---|---|
| **Firebase Auth** | Sign-in (Google, passkeys) — one account across all apps |
| **Firestore** | Real-time per-user data: inventory, racks, friends, prefs, chip backups |
| **Security rules** | Server-side enforcement: owner-only by default, relationship-gated sharing |
| **`cdn.tigertag.io`** | Reference database (brands, materials, colors…), health endpoint, spool APIs |
| **`tigertag.io`** | Official website: buy chips, browse the catalogue, manage your account |

## Openness

The Firebase project config is **intentionally public** — any third-party app
can connect, authenticate its user, and read/write that user's own data within
the rules. The integration contract (config URL, auth flows, data model,
rate limits) is documented in the dedicated public repo:

**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)** —
with working examples (Python CLI, ESP32/Arduino, Home Assistant, Spoolman
bridge).

## Security model

- All user data under `users/{uid}/…` is **owner-only by default**.
- Cross-user access (friend inventories, notifications) always requires a
  **prior relationship**, enforced by Firestore security rules — never by
  client code.
- Sensitive collections are **field-whitelisted** server-side.

See [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md) for the
model and [Developers — Cloud API](../developers/cloud-api.md) for integration.

---

**◀ Previous:** [TigerHub](./tigerhub.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [TigerPOD](./tigerpod.md)

**Related:** [Cloud API](../developers/cloud-api.md), [Architecture](../architecture/overview.md)
