---
sourceHash: 64b34d2f406da778544e6820ff66230f1ac8a92eedaa2d5a5a70337ce0a025e8
sourcePath: docs/concepts/tigertag-chip.md
---

# De TigerTag-chip (RFID/NFC-formaat)

## Fysieke laag

| Eigenschap | Waarde |
|---|---|
| Chipfamilie | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Aanbevolen vormfactor | **ronde sticker van 25 mm** (andere vormen werken ook) |
| Payload | NDEF-payload van 144 bytes — afgestemd op de kleine NTAG213; grotere chips laten ruimte ongebruikt |
| Officiële chips met merk | Geproduceerd als **NTAG215** — het extra geheugen maximaliseert hergebruik aan het einde van de levensduur (standaard NDEF-objecten), zodat de chip nooit e-afval wordt |
| Authenticatie | Geen — openlijk leesbaar |
| Schrijfbeveiliging | **Geen** — chips worden ontgrendeld geleverd; de gebruiker kan ze herschrijven, ook om volledig naar een ander protocol te migreren |
| Gereserveerd gebied | **64 bytes** aan het einde van de payload — pagina's `0x18`–`0x27`, waardoor 80 bytes aan gegevens overblijven. Op een standaard TigerTag zijn ze **vrij voor functies die de community toevoegt**; op een [TigerTag+](../products/tigertag-plus.md) bevatten ze de **oorsprongshandtekening**, 32 bytes `R` en 32 bytes `S` (indeling op byteniveau: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips per spoel | **Twee**, aan tegenovergestelde zijden geplaatst |
| Leesbaar door | Elke NFC-smartphone, USB-lezers van het type ACR122U, [TigerPOD](../products/tigerpod.md) |

Dit is het bewuste tegendeel van tags van fabrikanten (Mifare Classic met
afgeleide sleutels, AES-sectoren, RSA-handtekeningen — zie
[compatibiliteit](../compatibility/README.md)): een TigerTag-chip verbergt niets.

Zie de chip als **langetermijnopslag in de koude kast** voor de identiteit van de spoel: de
gegevens staan op de chip zelf, offline, jarenlang — geen server, geen account,
niets nodig om ze in leven te houden. De onlinelaag (referentiedatabase,
cloudsynchronisatie) voegt er alleen maar actualiteit *aan toe*.

## Waarom elke spoel TWEE chips draagt

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Een filamentrefill met zijn ronde TigerTag-chip" />

Twee chips, aan tegenovergestelde zijden van de spoel — het lijkt overbodig, maar het is
eigenlijk het slimste detail van het formaat:

- **Printers delen lezers.** Een machine heeft doorgaans **één RFID-lezer
 voor twee spoelslots**, gemonteerd **tussen de twee** — of aan de zijkant van de
 printer, waar hij de linker- of rechterkant leest, afhankelijk van in welk slot
 je spoel zit. Een Bambu Lab AMS heeft 2 lezers voor 4 slots; bij een Snapmaker
 zit de spoel aan een van beide zijden van de printer. Met een chip aan elke kant
 **zit er, welk slot ook, altijd één chip naar de lezer gericht** — en je hoeft de spoel nooit
 op een bepaalde manier te laden.
- **Niet zoeken naar de chip als je met de hand scant.** Op een
 [TigerPOD](../products/tigerpod.md) of met je telefoon hoef je nooit
 uit te zoeken welke kant de chip draagt: hoe je de spoel ook oppakt,
 er zit er al een aan de juiste kant voor wat je doet.
- **Ter plekke scannen.** Een spoel op een AMS Lite, aan de zijkant van een Elegoo
 Centauri Carbon of op een FlashForge kan worden gescand zonder hem eruit te halen.
- **Vrijheid voor integrators.** Een fabrikant van filamentdrogers plaatst de lezer gewoon waar
 het past — links of rechts voor een droger met één spoel, tussen de twee spoelen voor een
 dubbele — en het werkt altijd.
- **Redundantie.** Als één chip niet meer antwoordt, identificeert de andere de
 spoel nog steeds — en dient hij om de kapotte te herstellen.
- **Dubbele oogst.** Aan het einde van de levensduur laat elk kilo geprint filament
 **twee herbruikbare NTAG-chips** achter voor doe-het-zelfprojecten
 ([nul e-afval](../philosophy/second-life.md)).

Enkele implementatiedetails:

- De twee chips zijn **volledig onafhankelijk — elk heeft zijn eigen UID**; er is geen
 gedeelde antenne. Ze worden **samen als paar geschreven (Twin Tag)** en blijven
 identiek gedurende het hele leven van de spoel, tot op de gram die er nog op zit — en worden altijd
 als **één** spoel geteld.
- Op fabrieksspoelen rijden de chips mee op een **drager**: een strip waarvan de twee uiteinden
 om de kartonnen kern vouwen (één chip per uiteinde), vastgehouden met industriële
 **3M-lijm (468MP / 200MP)** — de operator trekt en plakt, verder verandert er
 niets aan de lijn. Het ontwerp van de drager is **openbaar en thuis te printen**,
 en dezelfde vorm wordt apart verkocht voor
 [refills](../philosophy/second-life.md), zodat de chip met het
 filament meereist in plaats van met de haspel.

<img src="../assets/carrier-bare.png" width="440" alt="De blanco TigerTag-drager — twee onafhankelijke NFC-antennes, één aan elk uiteinde" />

*De drager, blanco: de twee onafhankelijke antennes zijn duidelijk zichtbaar — één
per omgevouwen uiteinde, elk met zijn eigen UID.*

### Hoe de twee chips worden gekoppeld

Niets centraals legt het paar vast. Het wordt **afgeleid uit wat de twee chips
bevatten**, en het veld dat het bewust maakt in plaats van toevallig is de
**tijdstempel**.

De 4 bytes op pagina `0x0C` (offset `+32`) hebben een dubbele functie: seconden
sinds 2000-01-01 GMT, *en* de **Twin Tag-ID**. Twee chips die in dezelfde
sessie zijn geschreven, krijgen exact dezelfde waarde — die gedeelde seconde is de koppelingssleutel.

De resolutie is één seconde, dus de tijdstempel alleen is geen bewijs: twee spoelen
die binnen dezelfde seconde zijn getagd, zouden hem ook dragen. Wat het paar bevestigt, is
dat ook de **beschrijvende identiteit overeenkomt** — de twee chips beschrijven één
spoel, dus elk veld dat die spoel beschrijft moet op beide identiek zijn:

| Veld | Pagina | Offset |
|---|---|---|
| Twin Tag-ID / tijdstempel | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

Wat werkelijk onderscheidt, hangt af van de variant:

- Op een **[TigerTag+](../products/tigertag-plus.md)** is `ID Product` een echte
 catalogus-id. Dezelfde tijdstempel **en** dezelfde product-id volstaan om met bijna
 zekerheid van een paar te spreken.
- Op een **standaard TigerTag** is `ID Product` de constante `0xFFFFFFFF` op
 elke bestaande chip, dus onderscheidt het niets. Het merk,
 het materiaal, de drie kleuren en beide uiterlijken doen dat werk in plaats daarvan —
 samen met de tijdstempel.

Twee gevolgen die we helder willen benoemen:

- **De chips in twee afzonderlijke rondes schrijven levert geen paar op.** Ze
 krijgen twee verschillende tijdstempels, dus niets bindt ze en het ecosysteem
 telt twee spoelen. Daarom schrijft de telefoon-app beide in één
 *Dual NFC*-sessie, en daarom heeft de [TigerPOD](../products/tigerpod.md) twee
 lezers die naar elkaar toe gericht zijn.
- **De handtekening is het enige dat legitiem verschilt.** Op een TigerTag+
 ondertekent hij `SHA-256(uid ‖ id_tigertag ‖ id_product)`, en elke chip heeft zijn eigen
 UID — dus de twee chips van een paar dragen per constructie twee *verschillende* handtekeningen.
 Identieke handtekeningen zouden een kopie betekenen, geen tweeling.

De offsets hierboven zijn overgenomen uit de gezaghebbende
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
(§2.9), die de specificatie blijft.

### De refilldrager in de praktijk

Twee details die mensen verrassen:

- **Vastplakken is optioneel.** De 3M-lijm dient om de drager vast te houden
 terwijl je de refill hanteert en opbergt. Zodra de refill op de
 masterspoel is gemonteerd, zit de drager **geklemd tussen de masterspoel en de
 kartonnen kern** en kan hij niet bewegen — de lijm hoeft niets meer te doen.
- **Hij komt er weer uit en is herbruikbaar.** Als de refill op is,
 haal je de drager met zijn twee chips terug, wis je ze vanuit
 [Tiger NFC Connect](../products/tigertag-connect.md) of
 [Tiger Studio](../products/tiger-studio.md), en gebruik je hem opnieuw — op een andere
 spoel, of voor elk ander NDEF-project. Filament dat met een TigerTag Refill wordt verkocht
 laat je de drager na, geen afval
 ([tweede leven](../philosophy/second-life.md)).

Waar je er een kunt krijgen: zie [de chips kopen](../products/tigertag.md).

## In de fabriek gecodeerd, of blanco in je hand

Dezelfde chip bereikt je op twee manieren, en het verschil is belangrijker dan
al het andere op deze pagina:

| | Waar hij vandaan komt | Wat erop staat |
|---|---|---|
| **Voorgecodeerd** | geïntegreerd op de productielijn, in filament van een partnermerk | de volledige identiteit van de spoel, klaar om te lezen |
| **Blanco** | los gekocht — met TigerTag-merk, of elke NTAG-chip van waar dan ook | nog niets; je schrijft hem één keer, in ongeveer een minuut |

Los verkochte chips worden **blanco** geleverd, met of zonder logo. Dat is geen
beperking: een onbeschreven chip maakt het
[tweede leven](../philosophy/second-life.md) mogelijk, en daarom hangt het
protocol er nooit van af dat je iets koopt.

## Payload

De payload van 144 bytes codeert de
[universele identiteit](./universal-filament-identity.md) van de spoel — merk, materiaal,
uiterlijk/kleur, type, diameter, printinstellingen — als id's die worden opgelost via de
gedeelde referentiedatabase.

> **TODO:** veldindeling op byteniveau. De gezaghebbende specificatie staat in
> [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide);
> deze pagina moet die samenvatten (offsets, versiebeheer, id-tabellen) zodra ze
> daar definitief is. **Documenteer hier nooit offsets uit het hoofd.**

## Lezen en schrijven

| Tool | Lezen | Schrijven |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (mobiele NFC) | tik op de chip — de spoel opent op de telefoon | tik op **Make** en tik opnieuw om te schrijven; **Dual NFC** schrijft de twee chips van een spoel in één sessie |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | opent de spoel automatisch bij het scannen | begeleid schrijven met UID-controle |
| [JS SDK](../developers/sdks.md) (`tigertag` op npm) | decodeert de payload van 144 bytes | codeert een nieuwe payload |
| [Python SDK](../developers/sdks.md) | decodeert de payload; `tigertag[verify]` controleert ook de handtekening | codeert een nieuwe payload |

De twee apps praten met de lezer; de SDK's niet. Een SDK decodeert en codeert
de **payload** — neem je eigen NFC-hardware mee.

## Versiebeheer

De payload bevat een formaatversie (referentietabel `id_version`), zodat lezers
compatibel kunnen blijven met oudere chips.

---

**◀ Vorige:** [Universele filamentidentiteit](./universal-filament-identity.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Inventaris en cloudsynchronisatie](./inventory-and-cloud-sync.md)

**Zie ook:** [TigerTag](../products/tigertag.md), [SDK's](../developers/sdks.md), [Compatibiliteit](../compatibility/README.md)
