---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Bluetooth-labelprinters

Print het TigerQR-label van een spoel rechtstreeks vanaf je telefoon op een
kleine thermische Bluetooth-labelprinter: geen computer, geen pdf, geen
printer-app ertussen.

> **Stand van 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) print op deze printers vanaf zijn **volgende update**. In
> [Tiger Studio](../products/tiger-studio.md) worden dezelfde printers
> geïntegreerd, **nog niet uitgebracht**. Tot dan werkt elke printer via zijn
> eigen app met de pdf, png of svg van het label
> ([geprinte labels](../developers/spool-ids-and-qr-links.md)).

## Hoe het werkt

- Tiger NFC Connect stuurt het TigerQR-label van de **spoel** of het
  **filament** via Bluetooth naar de printer.
- **Elke printer onthoudt zijn eigen labelformaat**, de rol die erin zit.
- Elke afdruk houdt een **kleine veiligheidsmarge** aan, zodat ook een licht
  verschoven rol het hele label krijgt.
- Rollen van 12 mm printen het **Slim**-label van 40 × 12 mm; rollen van 50 mm
  breed nemen grotere labels (50 × 30 mm getest).

> **Tip:** een printer verbindt met **één apparaat tegelijk**. Sluit de app van
> de printerfabrikant voordat je vanuit Tiger NFC Connect print.

## Onze keuze

Niimbot-printers zijn echt heel goed. De **D110** biedt de beste prijs-kwaliteit,
heel goed voor zijn prijs; de **B1** en **B1 Pro** zijn de keuze met meer
budget, voor grotere labels. De Marklife **P15** werkt, maar is groter en zijn
printkwaliteit lijkt iets lager.

Alle vier zijn op papier getest.

| Printer | Rollen | Getest label | Ons oordeel | Kopen |
|---|---|---|---|---|
| **Niimbot D110** (en D110-M) | 12 mm | 40 × 12 mm | **Beste prijs-kwaliteit**: heel goed voor zijn prijs | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | tot 50 mm breed | 50 × 30 mm | Grotere labels, met meer budget | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm breed | 50 × 30 mm | 300 dpi, de scherpste afdruk | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (op Amazon verkocht als "Pristar P15") | 12 mm | 40 × 12 mm | Werkt, maar groter, afdruk iets minder goed | [Amazon](https://link.amazon/B0iRdI1G6) |

> De links in deze tabel zijn **Amazon-affiliatelinks** (amazon.fr): als
> Amazon-partner verdient TigerTag aan in aanmerking komende aankopen,
> **zonder extra kosten voor jou**. Het helpt het open protocol te financieren.
> Dezelfde printer ergens anders kopen werkt precies zo goed.

Geen prijzen hier: die veranderen te vaak.

## Ook ondersteund, nog niet op papier getest

De code van de app stuurt ook deze modellen aan; ze zijn nog niet op papier
getest:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Compatibele hardware van derden](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Spoel-id's en QR-links](../developers/spool-ids-and-qr-links.md)
