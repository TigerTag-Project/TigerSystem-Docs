---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory & TigerTag Manager (fabrieksuite)

## Doel

De **industriële kant** van TigerSystem — de tools waarmee filamentfabrieken
TigerTag in hun producten aanbrengen. In tegenstelling tot de sandbox voor gebruikers is **dit
productiesoftware**: hiermee zijn meer dan 2,5 miljoen chips op de
markt gebracht.

Twee tools dekken de twee helften van het werk:

- **TigerTag Manager** — beheert de **filamentdatabase** van het merk: producten,
 materialen, kleuren, instellingen.
- **TigerTag Factory** — **schrijft de data in bulk op elke geproduceerde spoel**,
 op lijnsnelheid: **ongeveer 1 seconde per chip** — duizenden spoelen per dag,
 met één klik.

## De carrier — twee chips, afpellen en plakken

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="De kale TigerTag-carrier — twee onafhankelijke NFC-antennes, één aan elk uiteinde" /> | <img src="../assets/carrier-branded.png" alt="De TigerTag-carrier zoals hij wordt geleverd, met de twee chips met merknaam" /> |

*De twee onafhankelijke NFC-chips zijn duidelijk zichtbaar — één per uiteinde. De uiteinden
vouwen om de kartonnen kern, zodat de spoel van beide kanten leesbaar is; het midden
houdt vast met industriële 3M-lijm (468MP / 200MP). De operator pelt af en
plakt — verder verandert er niets aan de lijn. Het ontwerp van de carrier is openbaar
en thuis te printen.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="De carrier aangebracht op een filament-refill" />

## Bewijs van herkomst

Chips die op de productielijn worden geschreven, dragen de **fabrieksondertekening** — de
authenticatie die **de herkomst van het product bewijst**. Zij is de laag achter de
fabrieksherstellingen van [TigerTag+](./tigertag-plus.md) en het vertrouwensanker
voor merken: een ondertekende chip komt aantoonbaar uit de echte fabriek.

## Beschikbaarheid

**Niet openbaar.** Deze tools zijn voorbehouden aan externe fabrikanten die
de TigerTag RFID/NFC-technologie in hun producten implementeren. Een filament-
productielijn kan met TigerTag draaien in **slechts
5 dagen** — zie
[Voor filamentfabrikanten](../vision/for-filament-manufacturers.md) en
neem contact op via de
[GitHub-organisatie](https://github.com/TigerTag-Project).

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Voor filamentfabrikanten](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Producten](./README.md)
