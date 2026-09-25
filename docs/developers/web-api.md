# The Web API

## What it is for

A TigerTag carries everything a printer needs, **on the chip, offline**. The
Web API exists for what a chip cannot hold and what changes after it is
written: the datasheets, the safety documents, the photo, the video, the
manufacturer's corrections.

It is **one HTTP endpoint, for every filament, of every brand** — no key, no
account, no registration, no rate deal to negotiate. A product id goes in, the
product comes back.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

The `lang` parameter selects the language of the text fields.

## What comes back

Four real products, from four different brands, through that one address:

| `product_id` | Product | Documents returned |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · tips · video |
| `30` | R3D PLA High Speed | food · MSDS · REACH · RoHS · TDS · video |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · video |
| `50` | eSun PLA+ | food · MSDS · REACH · RoHS · TDS · tips · video |

Each answer carries the identity (brand, series, name, SKU, EAN, colour), the
full print profile (nozzle, bed, dryer, fan, diameter, weight, shore,
transmission distance), the product photo, and the `links` block above —
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Why it keeps a TigerTag+ current

A [TigerTag+](../products/tigertag-plus.md) stores a **catalogue product id**,
not an address. The id never expires and never moves, so a manufacturer can
correct a temperature or attach a datasheet six months after the spools
shipped, and every reader sees the new value on the next read — without
rewriting anything on the chip, and without the chip ever having depended on
the network to print.

That is also why a single endpoint matters: one address serves every brand, so
a reader implements it once and it works for filament it has never seen.

## What it never does

The Web API **cannot make a chip work**, because a chip already works without
it. Read a TigerTag in airplane mode and you get brand, material, colour,
diameter, weight and temperatures — the whole print. The Web API adds paper and
pictures around that, and corrections on top of it.

---

**◀ Previous:** [Cloud API & third-party integration](./cloud-api.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Repository map](./repositories.md)

**Related:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
