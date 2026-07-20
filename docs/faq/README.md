# FAQ

## General

**What is TigerSystem?**
An open ecosystem for 3D printing built around one idea: a filament spool's
identity belongs to its owner, not to a printer brand. See
[Why TigerSystem exists](../vision/why-tigersystem.md).

**Do I need to buy anything to start?**
No. Any NFC smartphone reads TigerTag chips, the apps are free, and the desktop
app is open source. Chips themselves are the only consumable.

**Is this tied to one filament brand or printer brand?**
No — neutrality is a design rule. Any filament, any printer, no partner list.

**Are these apps THE product?**
No — the ecosystem is deliberately a **sandbox**. Everything we create (Tiger
Studio, TigerTag Connect, TigerScale, TigerPOD, and projects to come) is a
working **proof of concept**: its only goal is to show the potential of an
open-source, standard, agnostic, cross-platform protocol, and to inspire
others to imagine the features of tomorrow. Use them, fork them, or build your
own instead — see [A sandbox, on purpose](../vision/why-tigersystem.md).

**Why do you build all these demonstrators yourselves?**
Because nobody else did. More than 2 million TigerTag chips have been
produced and ship in filament spools, and we assumed the community would
invent uses for an open NFC identity on its own — it didn't happen. Building the
demonstrators was never the initial goal; it became necessary to show what
the protocol makes possible. The full story:
[The story behind the sandbox](../vision/why-tigersystem.md).

## TigerTag (chips)

**What chip is a TigerTag?**
A standard NTAG NFC chip carrying an open 144-byte payload — brand, material,
color, diameter, print settings. No keys, no encryption on the data.
See [The TigerTag chip](../concepts/tigertag-chip.md).

**Can I rewrite a chip?**
Yes — chips are rewritable, which is the point of the
[Second Life workflow](../philosophy/second-life.md): refill or re-purpose a
spool and re-encode its chip.

**What is TigerTag+?**
A TigerTag your account has backed up. Scan the chip in Tiger Studio with a
TigerPOD/ACR122U reader (mobile support coming) and its exact content —
factory authentication included — is saved, keyed to that chip's physical
UID. If the chip is ever rewritten or corrupted, you can reprogram it back to
its factory state — **on the original chip only** (the UID must match the
backup). See [TigerTag+](../products/tigertag-plus.md).

**Where do I buy chips?**
Two equally valid answers. Official TigerTag-branded chips are at
**[tigertag.io](https://tigertag.io)** — buying them helps support the R&D.
But **any cheap, blank NTAG chip** from Amazon, AliExpress or your local shop
works identically, and that's deliberate: nothing is blocked, the protocol is
the point.

**Which blank chip should I buy exactly?**
**NTAG213, 215 or 216 — round, 25 mm** is the recommendation. The protocol is
deliberately optimized to fit the small NTAG213 (144 bytes); 215/216 work
identically with unused space left over. Other shapes work too, but 25 mm
round is the format the ecosystem's readers and holders are designed around.

**Which filament brands ship TigerTag from the factory?**
More than 2 million chips have been produced; most are integrated at the
factory by third-party filament brands — Rosa3D, eSun, Sunlu, Landu, Jamg He, Filforme, Nanovia,
R3D — with more being integrated.

**How does a chip get on a spool?**
It sticks on — and there are **two per spool, on opposite sides**. That's
deliberate: printers often share one RFID reader between two slots, so a chip
must face the reader whatever side the spool sits on; you can hand-scan
without flipping the spool; you can scan it without pulling it out of its
slot; and if one chip fails the other still answers. Bonus: every empty spool
gives you two reusable chips.
See [why two chips](../concepts/tigertag-chip.md).

**Do I need internet to read a chip?**
No. The chip's payload is complete and self-sufficient: phone in airplane
mode, offline desktop — the spool still introduces itself.

**I'd rather use another NFC protocol (OpenSpool, my own…) — am I stuck with
TigerTag?**
No. Chips are **never write-locked**: TigerTag is just the base protocol
spools ship with from the factory. You are free to rewrite the chip and
migrate its data to any other NFC/RFID protocol, custom or existing.

**What happens to the chip when the spool is empty?**
It gets a second life — never a landfill. Re-encode it for the next spool, or
convert it to standard NDEF and turn it into anything NFC: a keychain, a
business card, a connected object. Official branded chips switched to
**NTAG215** precisely to leave memory headroom for that reuse: a spool's chip
should never become electronic waste. See
[Second Life](../philosophy/second-life.md).

**Can I use TigerSystem with no chips at all?**
Yes — Tiger Studio's *TigerData* creates fully digital spools that live only
in your inventory. You can promote one to a real chip later, atomically, when
you're ready.

## Tiger Studio (desktop)

**What platforms?**
Windows, macOS and Linux (Electron). Downloads on the
[releases page](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Do I need an NFC reader?**
No — the app works standalone. An ACR122U reader (or a
[TigerPOD](../products/tigerpod.md) stand) adds instant spool identification
and chip encoding.

**Which printers can it drive?**
Six brands live: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker —
see the [compatibility matrix](../compatibility/README.md).

## Slicers & the printing workflow

**Do I have to change my slicer?**
No. Keep OrcaSlicer, your vendor's slicer, whatever you like — TigerSystem
doesn't slice and doesn't want to. You slice and launch jobs exactly as
before. See [where the slicer fits](../architecture/data-flow.md).

**Then what does TigerSystem add to printing?**
Two things. First, the machine-side filament info matches reality: Tiger
Studio pushes each spool's data to the printer's slots (AMS, CFS, Canvas, ACE,
material station). Second, live monitoring: whatever launched the print, the
job shows up in Tiger Studio with progress, temperatures, a wall-clock
"ends at" time and the camera — across your whole fleet, all brands mixed.

**Can the chip configure my slicer profile automatically?**
Not today. The chip carries the filament's recommended settings
(temperatures…); you mirror them in your slicer profile yourself.

**I have printers from three different brands. Problem?**
The opposite — that's the point. One printers table for the whole fleet, with
brand / state / tag filters, whatever the mix of the six supported brands.

## TigerHub (the ecosystem's web home)

**What is TigerHub?**
The web platform at [tigersystem.io](https://tigersystem.io). It presents the
TigerSystem ecosystem — the showcase of what the open protocol makes possible
— and hosts the social side of the sandbox: wishlists, friend invitations,
public sharing. See [TigerHub](../products/tigerhub.md).

**Can I show my collection to someone without an app?**
Yes — TigerHub serves read-only list links: anyone with the link views it in a
plain browser, no app, no account.

**Is TigerHub the database behind the apps?**
No. The accounts and data live in plain **Firebase** — one shared database, in
one place, so all the sandbox elements interoperate. TigerHub is the web
surface built on top of it.

## TigerTag Connect (mobile)

**What does the mobile app do?**
NFC scanning and chip programming on the go, catalogue browsing, and full
inventory sync with the same account as the desktop app.

**Where do I download it?**
It's released on the **App Store** and **Google Play** (currently under the
name "TigerTag RFID Connect", soon "TigerTag NFC Connect"), with public betas
on both platforms. All links:
[tigersystem.io/fr/download](https://tigersystem.io/fr/download).

## TigerScale & sensors

**What is TigerScale?**
An open-source ESP32 scale for filament spools. Put a spool on it and its live
weight flows straight into your inventory — visible instantly on desktop,
mobile and shared views. See [TigerScale](../products/tigerscale.md).

**Wait — the chip already knows everything, why a scale?**
The chip knows what the filament **is**; only a scale knows how much is
**left**. They're the two halves of a truly useful inventory: identity from
the chip, live quantity from the scale.

**Do I need a TigerScale to track weight?**
No. You can set or adjust a spool's weight manually in the apps at any time —
the scale just makes it automatic, live and effortless.

**Can I build one myself?**
Yes — that's the point. Hardware design and firmware are fully open (MIT) in
the [Tiger-Scale repo](https://github.com/TigerTag-Project/Tiger-Scale).

**What about the empty spool's own weight?**
Tiger Studio's container calibration lets you measure a container's real empty
weight once; it's then applied to every spool in that container, so the number
you see is net filament, not plastic reel.

**What is the TD1S?**
A color sensor used with Tiger Studio: scan a filament and capture its real
color for the spool's profile — handy for unlabeled or re-spooled filament.

## Cloud & inventory

**Where is my inventory stored?**
In your own TigerSystem account — plain Firebase (Firestore), one shared
database used by all the apps. Every device you sign
into sees the same data in real time. See
[Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md).

**Does it work offline?**
Chips are fully readable offline; apps keep a local cache. Printer links are
LAN-local and don't need the internet at all (except Anycubic cloud mode).

**I don't want ANY cloud. Can I still use TigerTag?**
Yes, 100 %. The chip's payload is complete and self-sufficient: read it,
write it, and manage a fully local inventory with no cloud, no account, no
server — the [JS and Python SDKs](../developers/sdks.md) exist precisely to
make that easy in your own or DIY projects. Even **TigerTag+ authenticates
locally, without an internet connection**. The cloud layer is optional
comfort (multi-device sync, sharing), never a requirement — we propose one
vision of the TigerTag user, and every other vision is accepted and
encouraged.

**I know nothing about NFC or RFID — is this for me?**
Especially for you. The whole experience is designed novice-first: tap a
spool with your phone, it introduces itself, done. No jargon required — the
technical layers exist for those who want to dig, not as a prerequisite.

**Can other people see my spools?**
Only if you choose: accepted friends, a public toggle, or a TigerHub share
link. Everything is private by default and enforced server-side.

**What happens if the TigerTag cloud shuts down one day?**
The design answer to that fear is openness: the chip format is public, chips
read fully offline forever, the SDKs and the desktop app are open source, and
the cloud surface is documented. Your spools cannot be "bricked" by a server —
that's precisely the difference with a manufacturer's silo.

## RFID & compatibility

**Can Tiger Studio read Bambu/Creality/… native tags?**
Not yet — the right way to handle interoperability is still an open question.
Read-only decoding specs are documented for seven vendor formats, and the
work under way aims at **converting vendor tag data into TigerData digital
spools**, so other brands' filament can be scanned and managed in the
ecosystem. See [compatibility](../compatibility/README.md).

**Why are manufacturer tags locked and TigerTag isn't?**
Locked tags serve vendor lock-in. TigerTag's answer is an openly readable
format — see [User-centric vs printer-centric](../philosophy/user-centric-ecosystem.md).

**What about resin printers?**
Coming: TigerTag is being extended to **resins** — the same open identity on
resin containers for resin 3D printers.

**Does TigerTag work with a printer that has no RFID reader?**
Yes — that's the [smartphone bridge](../philosophy/smartphone-bridge.md): your
phone (or a desktop reader) identifies the spool, and the system feeds the data
to the printer.

## Troubleshooting

**My chip doesn't scan on my phone.**
Check NFC is enabled and find your phone's antenna sweet spot; tags read best
flat against it. If the chip reads in one app but not another, update the app.

**My printer doesn't appear in Tiger Studio.**
Ensure the printer is on the same LAN, in LAN mode where relevant, then try
"Add by IP" — discovery methods vary per brand.

> **TODO:** grow this section from real support cases (Discord / GitHub issues).

## Developers

**Can I build my own app on TigerTag?**
Yes, without permission: open chip spec, [SDKs](../developers/sdks.md) (JS &
Python), and a [documented cloud surface](../developers/cloud-api.md) with
working ESP32 / Home Assistant / Spoolman examples.

**Can I plug TigerTag into my ERP or internal stock software?**
Yes — that's exactly the kind of use the open protocol invites. A scan (NFC
phone or ACR122U USB reader) gives you the spool's identity; what you do with
it — stock management, job tracking, traceability, reordering, R&D — is your
call. See [What can you build?](../developers/README.md)

**What hardware do I need to read chips in my own project?**
Any NFC smartphone, an ACR122U-class USB reader on a computer — or go full
DIY: a simple ESP32 with a PN532 or RC522 reader module is enough (that's how
[TigerScale](../products/tigerscale.md) does it). Commodity, cheap, no
proprietary gear.

**Is the Firebase config being public a security hole?**
No — that's the standard Firebase pattern. All enforcement is server-side in
security rules; a client can only touch its own user's data.

## Manufacturers

**We're a filament brand — how do we ship TigerTag-tagged spools?**
Quickly: we have the experience and technology to integrate chips into a
filament factory **in just a few days, at very low cost** — proven with more
than 2 million chips already shipped by Rosa3D, eSun, Sunlu, Landu, Jamg He
and R3D. And every brand that joins strengthens the collective case for
printer manufacturers to read TigerTag natively. Read
[For filament manufacturers](../vision/for-filament-manufacturers.md), then
reach out through the
**[GitHub organization](https://github.com/TigerTag-Project)**.

**Can my product become "TigerTag Certified"?**
Yes — **TigerTag Certified** is the certification mark, working as a
**quality label**, for three cases: third-party products that read and/or
write TigerTags (a printer, a dryer, a reader…); filament manufacturers that
ship TigerTags in their products; and third-party **apps** (mobile or
desktop) — certification guarantees the protocol is perfectly integrated in
that third-party ecosystem. Reach out through the
[GitHub organization](https://github.com/TigerTag-Project).

**We're a printer maker — can our firmware read TigerTag?**
Yes — NTAG/NDEF readers are commodity hardware and the payload spec is public
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).

## Community

**How do I contribute?**
Docs: [CONTRIBUTING.md](../../CONTRIBUTING.md) here. Code: each repo's own
guide — see the [repository map](../developers/repositories.md).

**Can I fork it all and build something else?**
Yes. MIT/CC-licensed, deliberately forkable — just respect the
[trademark policy](../../TRADEMARK.md).

---

**◀ Previous:** [Cloud API](../developers/cloud-api.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Roadmap](../roadmap/README.md)
