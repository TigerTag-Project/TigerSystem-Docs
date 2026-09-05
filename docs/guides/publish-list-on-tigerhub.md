# Publish a public list link on TigerHub

Share a read-only view of an inventory or a wishlist as a plain web link.
Whoever opens it needs **no app and no account** — just a browser.

## What it is

A public list link looks like:

```
https://tigersystem.io/list/<token>
```

It's a read-only snapshot served by [TigerHub](../products/tigerhub.md), the
ecosystem's web home. The `<token>` is what makes the link work — anyone who
has it can view the list, so treat it like a shared password (see revoking,
below).

## Publish a list

The link is generated from the apps, not from the website — TigerHub only
displays what [Tiger Studio](../products/tiger-studio.md) or
[Tiger NFC Connect](../products/tigertag-connect.md) publish:

1. In Tiger Studio or Tiger NFC Connect, open the inventory or wishlist you
   want to share.
2. Generate a **share link** for it.
3. Copy the `https://tigersystem.io/list/<token>` link and send it to anyone.

The viewer opens it in any browser and sees the list read-only — they cannot
edit it, and nothing about your account is exposed beyond what the list shows.

## Revoke a link

A share link stays valid until you revoke it. Revoke it from the same place you
generated it (Tiger Studio / Connect) once you no longer want the list public —
after that, the old `/list/<token>` URL stops resolving.

> **Tip:** revoking then re-publishing produces a **new** token. If you shared
> the old link widely and want to cut access, revoking is the way — the old URL
> goes dead immediately.

## Public link vs sharing with a friend

Two different mechanisms, same source data:

| | Public list link | Friend |
|---|---|---|
| Who can see it | anyone with the URL | a specific person you added |
| They need an account | no | yes (a TigerSystem account) |
| How | generate a `/list/<token>` link | exchange **friend codes / invitations** |
| Good for | a Reddit post, a forum, a quick show-and-tell | an ongoing, mutual view between two makers |

Friend codes and invitations are managed from the apps and from your account on
the web (`/account`).

## What's behind it

The published data comes from your TigerSystem account (a single shared Firebase
database that every app reads and writes); TigerHub is only the web surface that
renders the public view. Your account data is never public — only the specific
list you chose to publish. See
[Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md).

---

**▲ [Documentation index](../../README.md)** · **Related:** [TigerHub](../products/tigerhub.md), [Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md), [Tiger Studio](../products/tiger-studio.md)
