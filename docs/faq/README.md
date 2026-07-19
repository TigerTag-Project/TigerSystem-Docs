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
The certified tier: same open chip, plus a cloud backup bound to your account
and the ability to prove physical possession by scanning.
See [TigerTag+](../products/tigertag-plus.md).

**Where do I buy chips?**
**[tigertag.io](https://tigertag.io)**.

**How does a chip get on a spool?**
It sticks on. One chip per spool, anywhere convenient — once attached, any tap
or scan identifies that exact spool.

**Do I need internet to read a chip?**
No. The chip's payload is complete and self-sufficient: phone in airplane
mode, offline desktop — the spool still introduces itself.

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

## TigerHub (your account & sharing)

**What is TigerHub?**
The backbone of the ecosystem: the Firebase service that manages your user
account and keeps every device in sync in real time. See
[TigerHub](../products/tigerhub.md).

**Can I show my collection to someone without an app?**
Yes — TigerHub's public web surface at
[tigersystem.io](https://tigersystem.io) serves read-only list links: anyone
with the link views it in a plain browser, no app, no account.

## TigerTag Connect (mobile)

**What does the mobile app do?**
NFC scanning and chip programming on the go, catalogue browsing, and full
inventory sync with the same account as the desktop app.

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
In your own account on TigerHub (Firebase/Firestore). Every device you sign
into sees the same data in real time. See
[Inventory & cloud sync](../concepts/inventory-and-cloud-sync.md).

**Does it work offline?**
Chips are fully readable offline; apps keep a local cache. Printer links are
LAN-local and don't need the internet at all (except Anycubic cloud mode).

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
Not yet — read-only decoding specs are documented for seven vendor formats and
in-app reading is planned. See [compatibility](../compatibility/README.md).

**Why are manufacturer tags locked and TigerTag isn't?**
Locked tags serve vendor lock-in. TigerTag's answer is an openly readable
format — see [User-centric vs printer-centric](../philosophy/user-centric-ecosystem.md).

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

**Is the Firebase config being public a security hole?**
No — that's the standard Firebase pattern. All enforcement is server-side in
security rules; a client can only touch its own user's data.

## Manufacturers

**We're a filament brand — how do we ship TigerTag-tagged spools?**
The format and reference database are open; chips can be factory-encoded.
Reach out through the
**[GitHub organization](https://github.com/TigerTag-Project)**.
> **TODO:** publish a dedicated manufacturer onboarding guide.

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
