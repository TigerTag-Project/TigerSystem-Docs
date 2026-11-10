---
sourceHash: 7bb6dbb4efb816e836950f465cc62df5ef6eca1a0c8de04e7fb9820c26114c48
sourcePath: docs/tutorials/first-smart-spool.md
---

# Je eerste slimme spoel in 2 minuten

Maak van elke filamentspoel een intelligente — **gratis, thuis**, met dingen die je
al hebt of voor een paar cent kunt krijgen.

## Wat je nodig hebt

- **Elke NFC-smartphone** (dat is de lezer — hij zit al in je zak)
- **Een blanco NTAG-chip** — NTAG213, 215 of 216, **rond van 25 mm** aanbevolen
 (een paar cent op Amazon, AliExpress of lokaal; niets officieels vereist)
- **Tiger NFC Connect**, de gratis app —
 [download voor iOS en Android](https://tigersystem.io/download)

> Al filament gekocht van Rosa3D, eSun, Sunlu, R3D…? Je spoel kan
> **al TigerTag-chips dragen** — sla het formulier over en tik gewoon op “Scan”.

## Stappen

**Je tikt de chip twee keer aan:** één keer om te beginnen, één keer om te schrijven.

1. **Installeer Tiger NFC Connect** en open hem.
2. **Tik op “Scan”** en houd de telefoon tegen je blanco chip. De app leest
 hem, ziet dat hij leeg is, en biedt aan er een filament voor aan te maken.
3. **Beschrijf je filament** — kies het materiaal, de kleur, het uiterlijk, het
 gewicht, enzovoort. De keuzes komen uit de gedeelde catalogus, dus je
 spoel wordt door elke compatibele app identiek begrepen. Het is een snel
 formulier; niets om uit je hoofd te typen.
4. **Tik op “Make”, en houd de telefoon dan opnieuw tegen de chip.** Die tweede
 tik is het schrijven. Een seconde later staan de gegevens **op de chip zelf** — je
 spoel weet nu wat hij is.
5. **Plak de chip op de spoel.**

<img src="../assets/nfc-scan.gif" width="420" alt="De NFC-tik, geanimeerd — telefoon ontmoet chip, spoel geïdentificeerd" />

*Het hele gebaar, in beweging.*

### Twee chips op één spoel — “Dual NFC”

Fabrieksspoelen dragen **twee chips, aan tegenoverliggende zijden**, zodat er altijd een chip
naar de lezer kijkt ([waarom twee?](../concepts/tigertag-chip.md)). Je kunt
hetzelfde doen, in één sessie:

1. Scan de eerste blanco chip en vul het formulier in zoals hierboven.
2. **Tik vóór het schrijven op de knop “Dual NFC”.**
3. **Tik zoals gewoonlijk op “Make”** — maar nu vraagt de app om de chips een
 voor een: **Make 1/2**, dan **Make 2/2**. Beide chips dragen uiteindelijk dezelfde
 identiteit.

> **Begin altijd met de chip die je hebt gescand.** De chip die het aanmaken opende
> is degene die de app als 1/2 verwacht; de andere chip volgt als 2/2.

Dat is alles. Scan de spoel op elk moment opnieuw, met de lezer die het dichtst bij is: een
tik van **elke NFC-telefoon**, of leg hem op een lezer die op
[Tiger Studio Manager](../products/tiger-studio.md) is aangesloten (ACR122U /
[TigerPOD](../products/tigerpod.md)) — de spoel stelt zichzelf in beide gevallen voor. Alles hierboven werkt **100 % offline** — geen account, geen cloud, geen
kosten.

## Optioneel: voeg hem toe aan je inventaris

Wil je de spoel in je gesynchroniseerde inventaris (zichtbaar op desktop, te delen met
vrienden)? Zeg dat dan in de app wanneer erom wordt gevraagd — het is een expliciete keuze,
nooit automatisch.

## En nu?

- Zet de spoel op een [TigerScale](../products/tigerscale.md) en zie het
 gewicht live bijwerken.
- Open [Tiger Studio](../products/tiger-studio.md) op je computer en zie
 daar dezelfde spoel.
- Spoel bijgevuld of een nieuwe bestemming gegeven? Codeer de chip opnieuw —
 [Tweede leven](../philosophy/second-life.md).

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Tiger NFC Connect](../products/tiger-nfc-connect.md), [De TigerTag-chip](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
