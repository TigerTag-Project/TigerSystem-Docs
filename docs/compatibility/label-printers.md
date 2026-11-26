# Bluetooth label printers

Print a spool's TigerQR label straight from your phone to a small Bluetooth
thermal label printer: no computer, no PDF, no printer app in between.

> **Status, 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) prints to these printers from its **next update**. In
> [Tiger Studio](../products/tiger-studio.md) the same printers are being
> integrated, **not released yet**. Until then, any printer works through its
> own app from the label's PDF, PNG or SVG
> ([printed labels](../developers/spool-ids-and-qr-links.md)).

## How it works

- Tiger NFC Connect sends the TigerQR **spool** or **filament** label to the
  printer over Bluetooth.
- **Each printer remembers its own label format**, the roll loaded in it.
- Every print keeps a **small safety margin**, so a slightly offset roll still
  gets the whole label.
- 12 mm rolls print the 40 × 12 mm **Slim** label; 50 mm wide rolls take
  bigger labels (50 × 30 mm tested).

> **Tip:** a printer connects to **one device at a time**. Close the printer
> maker's own app before printing from Tiger NFC Connect.

## Our pick

Niimbot printers are very, very good. The **D110** is the best value, very
good for its price; the **B1** and **B1 Pro** are the ones to take with more
budget, for bigger labels. The Marklife **P15** works, but it is bulkier and
its print quality seems slightly lower.

All four were tested on paper.

| Printer | Rolls | Tested label | Our take | Buy |
|---|---|---|---|---|
| **Niimbot D110** (and D110-M) | 12 mm | 40 × 12 mm | **Best value**: very good for its price | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | up to 50 mm wide | 50 × 30 mm | Bigger labels, with more budget | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm wide | 50 × 30 mm | 300 dpi, the sharpest print | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (sold as "Pristar P15" on Amazon) | 12 mm | 40 × 12 mm | Works, but bulkier, print slightly lower in quality | [Amazon](https://link.amazon/B0iRdI1G6) |

> The links in this table are **Amazon affiliate links** (amazon.fr): as an
> Amazon Associate, TigerTag earns from qualifying purchases, **at no extra
> cost to you**. It helps fund the open protocol. Buying the same printer
> anywhere else works exactly as well.

No prices here: they change too often.

## Also supported, not tested on paper yet

The app's code also drives these models; they have not been tested on paper
yet:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Compatible third-party hardware](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Spool ids and QR links](../developers/spool-ids-and-qr-links.md)
