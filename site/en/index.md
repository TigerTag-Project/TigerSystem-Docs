---
title: The open filament identity
description: The open NFC identity for 3D-printing filament — what TigerTag is, what runs on it, and how to build your own thing with it.
template: splash
editUrl: false
hero:
  title: TigerSystem
  tagline: Your filament, finally smart — and finally yours. One small open NFC chip, and a spool can finally introduce itself.
  image:
    html: |
      <img src="/assets/hero-tigersystem-ecosystem.png" alt="Tiger Studio on a desktop, a TigerPOD reader holding a tagged spool, and the mobile app" width="720" height="480" />
  actions:
    - text: Your first smart spool
      link: /tutorials/first-smart-spool/
      icon: right-arrow
    - text: Why TigerSystem exists
      link: /vision/why-tigersystem/
      variant: minimal
    - text: Browse the products
      link: /products/
      variant: minimal
---

## TigerSystem in 30 seconds

Every 3D-printing shelf hides the same mystery: twenty spools, half of them
unlabeled, none of them able to say what they are, how much is left, or how they
like to be printed.

**TigerSystem fixes that with one small chip.** Stick a
[TigerTag](/products/tigertag/) NFC chip on a spool and the spool introduces
itself — to your phone, to your computer, to your printer: *“I'm matte black PLA
from brand X, 1.75 mm, print me at 210 °C, and there's 640 g of me left.”*

Printer manufacturers tag their spools too — but **locked**, in secret formats,
working only with their own machines. TigerSystem flips it: the chip is **open
and readable by anything**, the data belongs to **your** account, and every piece
— apps, cloud, scale, reader, the chip spec itself — is published for anyone to
use or build on. It is a format, not a walled garden.

More than **2.5 million chips** have been produced and ship from the factory in
filament by brands like Rosa3D, eSun, Sunlu and R3D, which makes TigerTag the
most deployed third-party RFID protocol in the world.

<div class="ts-cardgrid">
<a class="ts-card" href="/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Ready to try</span><span class="ts-card__text">Make a spool smart in five minutes — a blank NTAG chip, your phone, the free app. No account, fully offline.</span></span></a>
<a class="ts-card" href="/products/"><span class="ts-card__body"><span class="ts-card__title">A user</span><span class="ts-card__text">What each product actually does for you — chips, apps, the scale, the reader stand.</span></span></a>
<a class="ts-card" href="/compatibility/"><span class="ts-card__body"><span class="ts-card__title">A printer owner</span><span class="ts-card__text">Does it work with your machine? Six brands are live, and the chip works with all the others.</span></span></a>
<a class="ts-card" href="/developers/"><span class="ts-card__body"><span class="ts-card__title">A developer</span><span class="ts-card__text">Read and write chips from JavaScript or Python, or plug the identity into your own software.</span></span></a>
<a class="ts-card" href="/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">A filament manufacturer</span><span class="ts-card__text">Factory integration in days, about one second per chip, at production scale.</span></span></a>
<a class="ts-card" href="/faq/"><span class="ts-card__body"><span class="ts-card__title">Just curious</span><span class="ts-card__text">The questions everyone asks, answered — chips, cloud, printers, privacy, the lot.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="A real TigerSystem bench — Tiger Studio Manager, TigerScale, a TD1S colour sensor, an ACR122U reader and a TigerPOD" />
<figcaption>Not a mockup: the sandbox on a real bench — Studio, TigerScale, TD1s and TigerPOD working together.</figcaption>
</figure>

## Where the truth lives

This wiki is rendered from the
[TigerSystem-Docs repository](https://github.com/TigerTag-Project/TigerSystem-Docs),
which is the ecosystem's **source of truth**. Every page here has an “Edit page”
link that takes you straight to the Markdown file behind it — corrections travel
as pull requests, and where another surface disagrees with the repository, the
repository wins.

AI assistants should start at [llms.txt](/llms.txt), the condensed canonical
explainer. Everyone else can start with the
[glossary](/glossary/) if a term gets in the way.
