---
sourceHash: a05c4e52f6cae3704b4e16e2b3d1b6d55653145391a9bdd6f31630c6821c91ab
sourcePath: docs/compatibility/third-party-hardware.md
---

# Compatibele hardware van derden

Het ecosysteem werkt goed samen met hardware die het niet zelf heeft gemaakt. Deze pagina is de
**groeiende lijst** van apparaten van derden die op de een of andere manier verbinden —
ze blijft uitbreiden naarmate de ontwikkeling doorgaat en meer makers hun
apparatuur aansluiten.

| Apparaat | Maker | Wat het doet | Werkt met |
|---|---|---|---|
| **ACR122U** NFC-lezer | ACS | USB NFC-lezer/-schrijver — scan een chip en de spoel opent automatisch; begeleid schrijven met UID-controle. Twee ervan vormen een [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| **TD-1** filamentanalyzer | [AJAX-3D](https://ajax-3d.com) | Doe-het-zelfbouwpakket — meet de **Transmission Distance** van een filament (de HueForge- / Full Spectrum-printwaarde) + kleur (RGB, 1–3 slots, indicatief) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| **TD1s** filamentanalyzer | [AJAX-3D](https://ajax-3d.com) | Dezelfde apparaatfamilie, kant-en-klaar gemonteerd en direct bruikbaar | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| **DYMO M-serie** USB-weegschalen (M5, M10, M25…) | DYMO | Standaard USB-“HID Scale”-apparaten — live gewicht in het profiel van de spoel ([protocoldetails](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Elke HID Scale-conforme USB-weegschaal** | elk | Hetzelfde standaardprotocol als de DYMO M-serie (HID-gebruikspagina `0x8D`) — het merk maakt niet uit | [Tiger Studio](../products/tiger-studio.md) |
| **Elke blanco NTAG213/215/216-chip** | elk | Het verbruiksartikel zelf — overal te koop, werkt identiek ([welke chip?](../../docs/faq/README.md)) | Alles |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="De ACR122U USB NFC-lezer" /> | <img src="../assets/td1s-front.jpg" alt="De AJAX-3D TD1s filamentanalyzer" /> | <img src="../assets/dymo-usb-scale.png" alt="Een DYMO M-serie USB HID-weegschaal" /> | <img src="../assets/ntag-chip.png" alt="Een kale NTAG NFC-chip — de antennespoel is zichtbaar" /> |

*De ACR122U-lezer (twee ervan zitten in elke
[TigerPOD](../products/tigerpod.md)) · de AJAX-3D TD1s · een DYMO M-serie USB-
weegschaal · de chip zelf, met blootgelegde antenne.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="De TD1s geïntegreerd in Tiger Studio — gemeten kleur en TD stromen het profiel van de spoel in" />

*De TD1s aan het werk in Tiger Studio.*

Gemeten waarden blijven niet in het apparaat: een TD of een gewicht komt in het
profiel van de spoel terecht en kan **in het TigerTag-protocol zelf** leven — op de
chip, of in een `.ttag`-bestand.

## Lezers gebouwd door anderen

Sommige makers bouwen hun eigen lezers die rechtstreeks TigerTag spreken, zonder dat er
iets van onze software aan te pas komt. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) is een Duits open-sourceproject
dat op ESP32 gebaseerde spoellezers publiceert — broncode op GitHub, printbare
behuizingen, pcb-bestanden en firmware, allemaal gratis. Twee van zijn apparaten geven aan
TigerTag te ondersteunen:

| Apparaat | Wat het is | Wat het met TigerTag doet |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Een apparaat op batterijen met een 5″ 800×480 touchscreen — ESP32-S3 en één RC522-lezer — dat meer dan 2000 tags lokaal opslaat | **Leest, kloont en schrijft** TigerTag, naast tags van Bambu Lab, Spoolease, OpenSpool en OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Een lezer met vier slots die op een Bambu Lab AMS wordt gemonteerd — ESP32 met 4× RC522, OLED- en TFT-schermen, adresseerbare leds. Toont live AMS-slotgegevens en **stuurt tagdata naar de printer / BMCU** | Leest dezelfde vijf tagfamilies, één per slot |

Twee dingen waar we nauwkeurig over willen zijn.

**Deze zijn compatibel, niet gecertificeerd.** Een derde mag vrij en zonder het aan
iemand te vragen zeggen *“compatibel met TigerTag”* — en dat is precies wat dit
is, en het hele punt van een open formaat. Het is niet *gecertificeerd*:
certificering is een audit die TigerSystem verleent, en geen van beide apparaten heeft
er een doorlopen. Het verschil wordt uitgelegd in
[het merkbeleid](../../TRADEMARK.md).

**Een chip klonen is geen gat in het formaat.** Een standaard TigerTag bevat geen
authenticatie en is nooit tegen schrijven vergrendeld, dus kopiëren is te verwachten — het is
dezelfde eigenschap waarmee je je eigen chips kunt herschrijven. Wat een kopie niet kan
dragen is een geldige [TigerTag+](../products/tigertag-plus.md)-handtekening: een gekloonde
tag faalt bij de controle op de eigen telefoon van de klant, offline.

Dat apparaten als deze zonder ons bestaan, is de maatstaf voor het formaat: er is ons
niets gevraagd, er was geen sleutel nodig, er is geen overeenkomst getekend.

## Jouw hardware hier

Bouw of koppel je een apparaat? Het protocol is open, de
[SDK's](../developers/sdks.md) staan klaar en **TigerTag Certified** bestaat
voor geverifieerde integraties. Laat het ons weten op de
[Discord](https://discord.gg/3Qv5TSqnJH) of via
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) — deze lijst is bedoeld om
te groeien.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Compatibiliteit](./README.md), [Integraties van derden (software)](../developers/integrations.md), [Producten](../products/README.md)
