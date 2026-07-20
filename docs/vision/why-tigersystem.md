# Why TigerSystem exists

## The problem

A filament spool is the single most-handled object in 3D printing — and the least
intelligent. Once the label is gone, a spool cannot tell you:

- what material and color it is,
- how it should be printed,
- how much filament is left,
- where it lives on your shelf,
- who it belongs to.

Printer manufacturers have started fixing this with RFID tags — **but each one
fixes it only inside its own walls.** A Bambu Lab tag means nothing to a
Creality printer; an Anycubic tag means nothing to anyone else. The data
belongs to the manufacturer's ecosystem, not to the person who bought the
filament.

## The answer

**TigerSystem** is an open ecosystem built around one idea:

> **The spool's identity belongs to its owner — not to a printer brand.**

**We made filament spools intelligent.** They know what they are — and they
can tell everyone, with zero friction.

Every spool carries a [TigerTag](../products/tigertag.md) NFC chip holding its
full profile — brand, material, color, diameter, print settings. Any compatible
reader — a smartphone, a desktop reader, a printer — can read it.
A single shared online database ([plain Firebase](../concepts/inventory-and-cloud-sync.md))
keeps the owner's account, inventory, history and sharing in sync across every
device.

## What "user-centric" means in practice

| Printer-centric ecosystem | TigerSystem |
|---|---|
| Tag readable only by one brand's printers | Tag readable by any NFC device |
| Data format secret or encrypted | Format open and documented |
| Inventory lives in the vendor's app | Inventory lives in **your** account |
| Works only with the vendor's filament | Works with **any** filament brand |
| Dies with the vendor's cloud | Open SDKs, open spec, self-buildable |

## The story behind the sandbox

It started in **2023, right after Formnext**. Bambu Lab had opened the era of
proprietary spool tags; that year Creality and Anycubic followed, each
launching printers with RFID/NFC readers — and each with its own locked,
proprietary chip. We decided this could not be how the industry settles: a
format had to exist that was **open source, neutral, cross-platform and
centred on the user**. And it couldn't be a manifesto — it had to be a
**viable, more capable alternative** to what printer manufacturers offer,
handed to third-party filament makers so their spools could do *more* than
the proprietary ones, and their market share wouldn't erode against captive
filament.

So we went to work — and to China. We presented the project to printer
manufacturers — Bambu Lab (to Dr. Tao, its CEO), Elegoo, Creality, Anycubic,
and Biqu / BigTreeTech (meeting its CEO as well) — and to
filament makers and equipment suppliers (eSun, R3D, Landu, Sunlu, Jamg He),
after having already presented it to Rosa3D in Europe. The welcome was warm.
We designed a protocol that was **more optimized and more versatile** than
the proprietary ones — user-centric, multi-brand, cross-platform. We studied
filament factory workflows to understand how to program NFC chips at
industrial scale, and sourced chip production — custom labels, custom
carriers, huge volumes — at a cost low enough for one non-negotiable goal:
**add the technology without adding one cent to the spool's price for the
end user.**

By **September 2024**, the chips were in mass production and the factories
were being supplied — the entire factory-side ecosystem came first. At that
point there was **no mobile app and no desktop app at all**; they came
after. Mobile first, because it requires buying nothing: the reader is
already in everyone's pocket.

That choice came from a question we kept asking in China: *"Where are the
RFID readers?"* Everyone answered: *"In the Bambu Labs."* And we said: false.
At Bambu Lab the readers are **in the AMS, not in the printer** — a
third-party spool can't be detected by the machine at all. **The RFID readers
are in your pockets.** In every phone, ready to use — without you even
knowing.

Honestly: building all of this ourselves was never the initial plan. **More
than 2.5 million TigerTag NFC chips have been produced — making TigerTag the
most deployed third-party RFID protocol in the world** — most of them
integrated at the factory by third-party filament brands (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D, Filforme, Nanovia, with more being integrated), plus a smaller share
bought by makers to tag spools at home. We naively assumed the community
would imagine the uses on its own: an open, documented NFC identity on every
spool felt like an obvious playground.

It didn't happen. Despite the scale of the deployment, no community picked the
subject up; nobody found it worth building integrations around the protocol.
We hoped others would take it on — they didn't. So we did, even though it was
not our original goal: we started **imagining the uses ourselves**, to show
the potential of an **open-source NFC protocol for material identification
centred on the user, not on the printer** — and to leave behind working
examples for whoever finally picks up the thread.

## A sandbox, on purpose

The **user-facing side** of TigerSystem is deliberately a **sandbox**. Every
app and device we create for end users — Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD, and other projects to come — has no other ambition than
to **show the potential**: each is a working **proof of concept** of what an
**open-source, standard, agnostic, cross-platform protocol** like TigerTag
makes possible, from a weekend script to a full product. Anyone can take
inspiration from our integration work and **imagine the features of
tomorrow**. They are examples to copy, not a platform to join.

The **factory side is not a sandbox.** Behind the 2.5 million chips runs an
industrial-grade suite — [TigerTag Factory &
Manager](../products/factory-suite.md): filament-database management and
line-speed NFC/RFID mass programming, with a factory signature proving each
product's origin — used **in production** by partner filament factories.
The sandbox is the showroom; the production line is not an experiment.

## Neutral by design

TigerTag takes no side between filament brands, printer makers or distributors.
It is not a walled garden with a partner list — it is a **format anyone can read
and write**.

That neutrality extends to the chips themselves: most end users buy **cheap,
unbranded NTAG chips** on Amazon, AliExpress or locally — and that is
deliberately fine. Nothing blocks them; the protocol works identically.
Official TigerTag-branded chips help support the R&D, but they are not
required: **the protocol living in users' homes and offices is the first
reward.**

Even the protocol itself is not imposed: chips ship **unlocked**, so a user
who prefers another NFC/RFID format — existing or custom — can rewrite the
chip and migrate. TigerTag is the base format spools arrive with, not a
format you're locked into. Nothing in the ecosystem is a prerequisite: read the chip spec,
pick up an SDK, and build the software or the business you actually want.

---

**▲ [Documentation index](../../README.md)** · **Next ▶** [User-centric ecosystem](../philosophy/user-centric-ecosystem.md)

**Related:** [Open ecosystem philosophy](../philosophy/open-ecosystem.md), [Universal filament identity](../concepts/universal-filament-identity.md)
