# TigerPOD

## Purpose

**The first "CD player" for smart filament spools.** TigerPOD puts a spool
scanner on your desk — and you print it yourself.
A free, open-source 3D-printable stand holding two USB NFC readers: place a
spool, it identifies itself in Tiger Studio; place a blank chip, encode it.
As natural as tapping a phone, but hands-free on the desktop.

Why **two** readers? Because every spool carries
[**two chips**, on opposite sides](../concepts/tigertag-chip.md) — the POD
reaches both in one pass: encode both, verify both, or repair one from the
other, without repositioning the spool.

## Where it sits

```mermaid
flowchart LR
  TAG["Spool / blank chip"] -- "placed on" --> POD["TigerPOD<br/>2× USB NFC readers"]
  POD -- "USB" --> ST["Tiger Studio"]
  ST -- "spool auto-opens · guided writes" --> YOU["You"]
```

## What it is made of

The STL is the shell; these are the parts that go inside it. Nothing here is
exclusive — any ACR122U-class reader and any USB-C splitter work — but this is
the combination the shell is designed around:

| Part | Quantity | What it is |
|---|---|---|
| **TigerTag Player** | **2** | The USB NFC reader — an ACR122U-class device. One per side, so both of the spool's chips are reached in a single pass. |
| **TigerTag Spliter** | 1 | USB-C to 2× USB-A, so the two readers reach the computer on one port and can be programmed in parallel. |
| **The printed shell** | 1 | Standard or **Mini**, depending on how much desk you want to give it. |

> **Note:** the readers and the splitter are sold on their own; the shell is a
> free download. Assembling one yourself and buying a pre-assembled one lead to
> exactly the same device.

## Features

- 3D-printable shell — **free STL on
 [MakerWorld](https://makerworld.com/en/models/1289152)**, in a **Standard** and
 a **Mini** size.
- Houses two ACR122U-class USB readers (read + write stations).
- Plug-and-play with [Tiger Studio](./tiger-studio.md): scanning a chip
 auto-opens the matching spool; the guided chip-update flow uses it for
 UID-checked writes.
- Licensed **CC BY 4.0** — remix and adapt freely.

## Interactions

| With | How |
|---|---|
| TigerTag chips | Read / encode / verify |
| Tiger Studio | Instant spool identification, chip promotion & update |

## In pictures

<img src="../assets/tigerpod-grey.png" width="420" alt="A grey TigerPOD holding a red filament spool" />

<img src="../assets/tigerpod-banner.png" width="100%" alt="TigerPOD line-up in rainbow colors" />
<img src="../assets/tigerpod-in-studio.jpg" width="100%" alt="TigerPOD connected to Tiger Studio" />

## Links

- Repo: [TigerPOD](https://github.com/TigerTag-Project/TigerPOD)
- STL: [MakerWorld model 1289152](https://makerworld.com/en/models/1289152)

---

**◀ Previous:** [TigerHub](./tigerhub.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [TigerScale](./tigerscale.md)

**Related:** [Second Life workflow](../philosophy/second-life.md)
