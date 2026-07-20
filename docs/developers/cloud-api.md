# Cloud API & third-party integration

## The contract

Third-party apps connect to the TigerSystem backend — plain Firebase — with
the **standard Firebase pattern**:

1. Fetch the public SDK config:
   `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Authenticate the **user's own TigerTag account** (the config being public is
   intentional — security is enforced server-side by Firestore rules).
4. Read/write that user's data within the documented surface.

## Canonical documentation

The full integration contract lives in
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Doc | Content |
|---|---|
| `docs/01-firebase-config.md` | Project config & connection |
| `docs/02-authentication.md` | Auth flows |
| `docs/03-data-model.md` | Firestore collections & fields (the data model reference) |
| `docs/04-friend-system.md` | Discovery codes, requests, shared inventories |
| `docs/05-rate-limiting.md` | Fair-use limits |
| `examples/` | Python CLI, ESP32/Arduino, Home Assistant, Spoolman bridge |

## Security rules — what to expect

- `users/{uid}/**` is owner-only by default.
- Cross-user writes always require a **prior relationship** (e.g. an accepted
  friendship) — there are no open write paths.
- Some collections are **field-whitelisted**: writes carrying unlisted fields
  are rejected.
- Admin-only fields (roles, debug flags) are never client-writable.

## HTTP endpoints

| Endpoint | Purpose |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Health check |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Push a spool weight by chip UID (used by scale-class devices) |

> **TODO:** full HTTP API catalogue (auth model, error shapes) — to be
> documented in the integration repo and summarized here.

---

**◀ Previous:** [SDKs](./sdks.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [FAQ](../faq/README.md)

**Related:** [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Architecture](../architecture/overview.md)
