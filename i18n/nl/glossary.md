---
sourceHash: b28699b1ffe29a8197a36d00c7662d7a3930211c20f3d4e28aab3ac33abd11e8
sourcePath: docs/glossary.md
---

# Woordenlijst

Elke term die deze documentatie gebruikt zonder hem uit te leggen. De definities zijn
ontleend aan de pagina’s die ernaast gelinkt zijn — elk item verwijst naar de pagina die
het volledige verhaal beheert.

> **Let op:** deze woordenlijst is een **zaadje**. Ze omvat de termen die al
> in deze repository voorkomen; ze is bewust onvolledig, en items
> worden pas toegevoegd zodra de inhoud ervoor ergens in de documentatie bestaat.
> Mis je een term? Voeg hem toe met een link naar de pagina die hem definieert.

## De eigen woordenschat van het ecosysteem

| Term | Betekenis |
|---|---|
| **TigerSystem** | Het hele open ecosysteem: het chipformaat, de referentiegegevens, de apps, de hardware en het cloudoppervlak. Zie [Waarom TigerSystem bestaat](./vision/why-tigersystem.md). |
| **TigerTag** | Een standaard NTAG-NFC-chip met de open TigerTag-payload van 144 bytes — de identiteit van een spoel, door alles te lezen. Zie [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Een TigerTag waarvan de identiteit een **product-ID uit de officiële catalogus** draagt, plus optionele verrijkingsgegevens die door de metadata van de Web API worden aangeboden. De chip blijft 100% offline leesbaar. De `+` betekent *geïdentificeerd*, niet *gecertificeerd*. Zie [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Een TigerTag+ die ook een cryptografische **handtekening** draagt, geschreven door een fabrikant die de certificering en de ondertekeningstools bezit. Er een verifiëren is gratis en offline; er een uitgeven is wat certificering toekent. |
| **TigerData** | Dezelfde identiteit zonder enige chip: de gegevens van het protocol in puur digitale vorm, geen UID, op elk moment te promoveren naar een echte chip. Zie [Eén identiteit, vier toestanden](./concepts/universal-filament-identity.md). |
| **TigerData+** | Een spoel zonder chip die een echt product uit de officiële catalogus draagt — exact merk, kleur, materiaal, temperaturen, diameter, SKU en EAN — in plaats van met de hand getypte waarden. De `+` betekent *geïdentificeerd*, niet *gecertificeerd*. |
| **Officieel** | Door TigerSystem zelf gemaakt — de chips in beide vormfactoren, en de apps en hardware in [Producten](./products/README.md). Een verklaring van herkomst, geen merkteken dat wordt verleend: TigerSystem certificeert zichzelf niet. |
| **TigerTag Compatible** | Het gratis niveau: alles wat met TigerTag-chips *praat* — lezers, apps, printers, slicers, tools. Geen toestemming nodig om het te implementeren, het te zeggen of het logo te tonen in een app, documentatie of winkelvermelding. Het omvat ook **TigerTag+**: een handtekening verifiëren is gratis, offline en onbeperkt. Het ene woord dat het nooit omvat is *gecertificeerd*. |
| **TigerTag Certified** | Het geauditeerde niveau, open voor alles wat een derde partij bouwt — een apparaat, een applicatie, filament, een inlay, een drager — zodra het een audit tegen de eisen doorstaat. Verleend in plaats van geclaimd, vermeld in het register van gecertificeerden, en intrekbaar. Komt in twee reikwijdtes, **TigerTag Certified** en **TigerTag+ Certified**. Gecertificeerde partners mogen het merkteken **op het product** aanbrengen en TigerTag+-handtekeningen uitgeven. Zie [Documentatie voor ontwikkelaars](./developers/README.md) en de [certificeringscriteria](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | De mobiele app (iOS/Android) — tik om te lezen, tik om te schrijven, blader door de catalogus. Eerder “TigerTag RFID Connect”. Zie [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | De open-source desktop-app (Windows/macOS/Linux) — inventaris, racks, sensoren en printerkoppelingen. Zie [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | Het webthuis van het ecosysteem op `tigersystem.io` — etalage, verlanglijsten, vriendcodes, openbaar delen van lijsten. Zie [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | De 3D-printbare lezerstandaard met dubbele NFC — gratis STL. Zie [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | De open-source ESP32-filamentweegschaal die “hoeveel is er nog?” beantwoordt. Zie [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | Het kastje naast de printer dat bij contact de identiteit van een spoel in een printerslot schrijft — geen app, geen toetsenbord, elk merk. Zie [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | De industriële toolchain van productiekwaliteit die chips programmeert op filamentproductielijnen, en de tools die de filamentdatabase beheren. Niet openbaar. Zie [Fabriekssuite](./products/factory-suite.md). |
| **Drager** | De strook die de twee chips van een spoel draagt — een aan elk gevouwen uiteinde, met industrieel 3M-plakmiddel op de kartonnen kern geplakt. Gebruikt op de fabrieksband, apart verkocht voor refills, en openbaar en thuis te printen. Zie [De TigerTag-chip](./concepts/tigertag-chip.md). |
| **Masterspoel** | Een herbruikbare haspel waarop een refill zonder spoel wordt gemonteerd. De chip van een refill zit in de kartonnen kern, dus hij blijft bij het filament en niet bij de haspel. |
| **Twin Tag** | De twee chips van één spoel, samen als paar geschreven en tijdens het hele leven van de spoel identiek gehouden — altijd geteld als **één** spoel. |
| **Referentiedatabase** | De gedeelde id-tabellen (merken, materialen, uiterlijken, typen, diameters, eenheden) die vanaf `cdn.tigertag.io` worden aangeboden, zodat een chip die met de ene tool is gecodeerd in elke andere identiek wordt gelezen. Zie [Universele filamentidentiteit](./concepts/universal-filament-identity.md). |
| **Aspect** | Het veld in de referentiedatabase dat de kleur en afwerking van een filament beschrijft; de [materiaalstaal](./developers/material-swatch.md) wordt eruit geschilderd. |
| **Materiaalstaal** | De normatieve conventie om de kleur*gegevens* van een spoel op elk oppervlak om te zetten in hetzelfde *beeld* — drie vormen (een zachte split van 135° voor 2-3 harde kleuren, een taartpunt voor 4+, een verloop van 135° voor vloeiende kleuren), met een referentierenderer om een implementatie tegen te toetsen. Zie [De materiaalstaal](./developers/material-swatch.md). |
| **`.ttag`-bestand** | Het draagbare, offline uitwisselbestand dat een of meer inventarismaterialen (TigerData, TigerData+, TigerTag of TigerTag+) tussen tools vervoert. Zie [het `.ttag`-formaat](./developers/ttag-format.md). |
| **Tweede leven** | Een chip opnieuw coderen voor een bijgevulde of een nieuwe bestemming gegeven spoel, of hem omzetten naar gewone NDEF voor ander NFC-gebruik — een chip mag nooit e-waste worden. Zie [Tweede leven](./philosophy/second-life.md). |
| **Smartphonebrug** | Een telefoon (of een desktoplezer) gebruiken om een spoel te identificeren voor een printer die geen eigen RFID-lezer heeft. Zie [De smartphonebrug](./philosophy/smartphone-bridge.md). |
| **Printerkoppeling** | Tiger Studio dat via het LAN met een machine praat — telemetrie, filamentslots, taak, camera. Los van het lezen van de eigen tags van die fabrikant. Zie [Compatibiliteit](./compatibility/README.md). |
| **Refill** | Een rol filament die zonder haspel wordt verkocht, om op een spoel te monteren die je al hebt. |

## NFC en RFID

| Term | Betekenis |
|---|---|
| **NFC** | Near-Field Communication — de kortetafstandsradio die elke moderne smartphone kan gebruiken om een TigerTag te lezen. |
| **RFID** | Radio-Frequency Identification, de bredere familie waartoe NFC behoort. Hier gebruikt voor de eigen vergrendelde spoeltags van fabrikanten en voor TigerTag. |
| **NTAG213 / 215 / 216** | De NXP-chipfamilie die een TigerTag gebruikt (NFC Forum Type 2). De payload is zo gedimensioneerd dat hij in de kleinste past, NTAG213; officiële chips met opdruk zijn NTAG215 om geheugenruimte over te houden voor hergebruik. Zie [De TigerTag-chip](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — de standaardcontainer waarin de TigerTag-payload is opgeslagen, en daarom kan elke NFC-tool hem lezen, en daarom kan de chip van een lege spoel in een gewoon NFC-object worden veranderd. |
| **UID** | De unieke hardware-identifier van de chip, bij de productie vastgelegd en niet herschrijfbaar. Een chipback-up is eraan gekoppeld, en een TigerTag+ Certified-handtekening ook. |
| **Mifare Classic / Mifare Ultralight** | De chipfamilies die printerfabrikanten voor hun eigen spoeltags gebruiken — per fabrikant gedocumenteerd in de [compatibiliteitsmatrix](./compatibility/README.md). |
| **ACR122U** | De gangbare klasse USB-NFC-lezers waarmee je vanaf een computer chips leest en schrijft; een [TigerPOD](./products/tigerpod.md) is een standaard rond zo’n lezer. |
| **PN532 / RC522** | Goedkope NFC-lezermodules, meestal gekoppeld aan een ESP32, voor DIY-lezers — de aanpak die [TigerScale](./products/tigerscale.md) gebruikt. |
| **ECDSA** | Het handtekeningschema dat de optionele extra `verify` van de Python-SDK controleert — het mechanisme achter een TigerTag+-herkomsthandtekening. Zie [SDK’s](./developers/sdks.md). |
| **OpenSpool** | Een onafhankelijke open NFC-tagstandaard voor spoelen (NFC Type 2, NDEF JSON, ontgrendeld). Zie [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | De multi-vendor-RFID-toolkit van de community waarvan de decoderingsbladen per fabrikant zijn afgeleid, en die TigerTags leest. Zie [Integraties van derden](./developers/integrations.md). |

## Printers en hardware

| Term | Betekenis |
|---|---|
| **AMS** | Het Automatic Material System van Bambu Lab — de voeder voor meerdere spoelen. Hier relevant omdat het doorgaans één RFID-lezer deelt tussen twee slots, en daarom draagt een spoel twee chips. |
| **CFS** | Het Filament System van Creality — zijn eenheid voor meerdere materialen. |
| **ACE** | De eenheid voor meerdere materialen van Anycubic. |
| **Canvas** | De eenheid voor meerdere materialen van Elegoo. |
| **IFS** | Het multifilamentsysteem van FlashForge — het veld in zijn protocol heet nog steeds `matlStation`. |
| **MMU** | Multi-Material Unit — de algemene term voor de add-on die meerdere filamenten aan één printer voedt (ERCF, MMU2, Box Turtle… in de Klipper-wereld). Zie [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | De open printerfirmware en zijn API — de WebSocket van Moonraker is het transport dat de koppeling van Snapmaker al gebruikt, en het volgende vanzelfsprekende voor Klipper-machines. Zie [Klipper](./compatibility/klipper.md). |
| **HID Scale** | Het standaard USB-protocol voor weegschalen (DYMO M-serie en compatibele), native gelezen door Tiger Studio als alternatief van een derde partij voor een TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — hoeveel licht een filament doorlaat, de waarde waarop HueForge en full-spectrum-printen steunen — en de [AJAX-3D](https://ajax-3d.com)-analyzer die hem meet, in DIY- (TD-1) en kant-en-klare (TD1s) varianten. De gemeten TD kan in het TigerTag-protocol zelf worden opgeslagen. Zie [Hardware van derden](./compatibility/third-party-hardware.md). |
| **ESP32** | De gangbare microcontroller achter TigerScale en de meeste DIY-TigerTag-lezers. |

## Cloud en gegevens

| Term | Betekenis |
|---|---|
| **Firebase / Firestore** | De gewone Google-dienst die accounts en inventarissen host — één gedeelde database waar alle apps in lezen en schrijven, met handhaving in beveiligingsregels aan serverzijde. Zie [Inventaris en cloudsynchronisatie](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Waar de gedeelde referentiedatabase vandaan wordt aangeboden. |
| **Vriendcode / lijstlink** | De twee manieren om een inventaris te delen — een geaccepteerde vriend, of een alleen-lezen openbare link die iedereen in een browser opent, zonder app en zonder account. Zie [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | De productcode van de fabrikant en het nummer van zijn streepjescode — wat een TigerData+ draagt om precies te zeggen welk catalogusproduct een spoel is. |

---

**▲ [Documentatie-index](../README.md)** · **Zie ook:** [FAQ](./faq/README.md), [De TigerTag-chip](./concepts/tigertag-chip.md), [Universele filamentidentiteit](./concepts/universal-filament-identity.md)
