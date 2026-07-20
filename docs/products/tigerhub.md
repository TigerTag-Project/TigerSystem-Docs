# TigerHub

## Purpose

**TigerHub is the ecosystem's home on the web** — the site at
**[tigersystem.io](https://tigersystem.io)**. It presents the TigerSystem
sandbox and what the open TigerTag protocol makes possible, and it hosts the
**social side** of the sandbox: share a wishlist, invite someone to become a
friend, publish a read-only list anyone can open in a browser.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — the TigerSystem web home, with the mobile app scanning in front of Tiger Studio" />

## Where it sits

```mermaid
flowchart TB
    ST["🖥 Tiger Studio"] & CO["📱 Connect"] <--> FB[("☁ Your TigerSystem account<br/>(Firebase — one shared database)")]
    FB -- "published lists · invites" --> HUB["🌐 TigerHub<br/>tigersystem.io"]
    HUB --> VIS["👀 Anyone with the link<br/>plain browser, no account"]
```

## Features

- **Ecosystem showcase** — tigersystem.io presents the sandbox and the
  potential of the open protocol.
- **Public list links** — share a read-only inventory or wishlist as
  `https://tigersystem.io/list/<token>`; the viewer needs no app and no
  account.
- **Friend invitations** — links that let users add each other as friends.
- **More social-sandbox features** as they ship.

> **TODO:** keep this feature list in sync with what is live on
> tigersystem.io.

## TigerHub is not the database

The user accounts and the data behind all the apps live in **plain Firebase**
(Auth + Firestore) — deliberately unbranded infrastructure: **a single shared
database, in a single place**, so Tiger Studio, Tiger NFC Connect, TigerScale
and the TigerSystem account all interoperate on the same data. TigerHub is the
**web surface** built on top of it. See
[Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md).

## Interactions

| With | How |
|---|---|
| Tiger Studio / Connect | Generate & revoke share links, send friend invites |
| Firebase (account database) | Source of the published data |
| Visitors | Plain browser, no account needed |

---

**◀ Previous:** [Tiger Studio](./tiger-studio.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [TigerPOD](./tigerpod.md)

**Related:** [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Architecture](../architecture/overview.md)
