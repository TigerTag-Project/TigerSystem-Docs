---
sourceHash: eab1adc3f872d4b5582c9b4268b736ced3e4e09c765932e0c738f989d8097836
sourcePath: docs/developers/spool-ids-and-qr-links.md
---

# Spoel-id's en QR-links

> **Geratificeerd op 2026-11-05 — nog niet geïmplementeerd.** Apps bouwen op dit
> contract. De punten die nog openstaan, staan aan het eind; als er een wordt
> beslecht, verandert alleen wat dat punt noemt. Secties gemarkeerd als
> **Voorgesteld** zijn nog niet geratificeerd: bouw er niet op voordat ze dat zijn.

De regels die elke TigerSystem-app volgt:

1. hoe een **spoel zonder chip** (TigerData / TigerData+) zijn id krijgt;
2. hoe een spoel **zijn link behoudt** wanneer hij een chip krijgt;
3. hoe het id van een spoel in de **QR-code** van een geprint label wordt
   geschreven, en weer wordt gelezen;
4. hoe een app **een spoel met waarden aanroept** (een gewicht, een notitie) via
   een link;
5. hoe een **product** zijn eigen link krijgt;
6. hoe een link antwoordt in **JSON** of als **`.ttag`-bestand**.
7. wat een **geprint label** bevat, en de sjablonen ervan.

## 1. Spoel-id's

Een spoel is een document in de inventaris van het account,
`users/{uid}/inventory/{spoolId}`. Het document-id **is** het spoel-id: één
account kan geen twee spoelen met hetzelfde id bevatten.

| Spoel | Id | Voorbeeld |
|---|---|---|
| Chip (TigerTag / TigerTag+) | de NFC-UID van de chip, hexadecimaal in hoofdletters, 14 tekens (de 7-byte UID van een NTAG) | `04AB12CD3E4F80` |
| Zonder chip, vanaf nu aangemaakt | `TigerData_` + epoch-**milliseconden** (13 cijfers) + een willekeurig getal **0000–9999** (altijd 4 cijfers) | `TigerData_17623456789014213` |
| Zonder chip, aangemaakt vóór dit contract | `TigerData_` + 10 willekeurige cijfers | `TigerData_4480517985` |
| Zonder chip, oud voorvoegsel | `CLOUD_` + 10 willekeurige cijfers | `CLOUD_4480517985` |
| Oud decimaal (oude Android-app) | de UID decimaal geschreven, wordt gemigreerd naar hex | `1234567890123456` |

Al aangemaakte id's worden door dit contract **nooit herschreven**. Lezers testen
alleen het voorvoegsel (`TigerData_` / `CLOUD_` → zonder chip); geen van hen hangt
af van het aantal cijfers. Het id is een identificatie, verder niets: leid er
nooit een aanmaakdatum uit af. Een 4-byte UID (een propriëtaire chip die aan een
spoel is gekoppeld) is nooit de naam van een inventarisdocument, dus hij komt
nooit in een link voor.

### Een id zonder chip aanmaken

Elke app die spoelen zonder chip aanmaakt (vandaag Tiger Studio, later de
mobiele app) maakt het id op dezelfde manier aan:

1. **Samenstellen** `TigerData_<Date.now()><four random digits>`.
2. **Lokale controle** — als het id al in de inventaris staat die de app heeft
   (de kopie van de live listener, offline cache inbegrepen) of in zijn
   `uidMigrationMap`, stel dan een ander samen. Dit werkt offline.
3. **Schrijven**
   - **online:** in een transactie die het document eerst leest en mislukt als
     het bestaat; bij mislukking terug naar stap 1;
   - **offline:** een gewone schrijfactie, door Firestore in de wachtrij gezet
     tot het netwerk terug is. Stap 1 en 2 zijn de enige bescherming.

Een gewone `set()` op een id dat al bestaat, **overschrijft** de spoel die er al
stond, zonder melding. Dat is wat stap 3 voorkomt.

De vier willekeurige cijfers maken een nieuw id zonder chip bovendien praktisch
uniek **over alle accounts heen** (ongeveer één botsing per 600 jaar bij een
miljoen spoelen zonder chip per jaar), zodat een server later een link kan
oplossen voor iemand anders dan de eigenaar, zonder een geprint label te
wijzigen.

## 2. De link behouden wanneer een spoel een chip krijgt

Een chip programmeren op een spoel zonder chip verplaatst de spoel naar de UID
van de chip. In **één batch**:

1. de spoel schrijven onder de UID van de chip (en de tweeling-UID, bij een
   tweelingpaar);
2. het `TigerData_…`-document verwijderen;
3. de doorverwijzing `users/{uid}/uidMigrationMap/{old id}` →
   `{ hex_uid, migrated_at }` schrijven.

De batch zorgt ervoor dat de drie samen gebeuren of helemaal niet. De
doorverwijzing staat in `uidMigrationMap` (de collectie die oude decimale id's al
naar hex vertaalt), nooit als stubdocument in de inventaris: alles wat de
inventaris leest, telt één document als één spoel.

## 3. QR-links

Een geprint spoellabel draagt een QR-code met een link naar de spoel, **en verder
niets** (geen gewicht, geen notitie — geprinte waarden raken verouderd):

```
https://qr.tigertag.io/<id>
```

Naast de code wordt niets in leesbare tekst geprint: geen id, geen link. De
QR-code is de weg terug naar de spoel.

`<id>` is het spoel-id **zonder zijn voorvoegsel**:

| Spoel | Link |
|---|---|
| Chip | `https://qr.tigertag.io/04ab12cd3e4f80` |
| Zonder chip (nieuw) | `https://qr.tigertag.io/17623456789014213` |
| Zonder chip (vóór dit contract) | `https://qr.tigertag.io/4480517985` |
| `CLOUD_` | **geen QR-link** — het label wordt zonder QR-code geprint |
| Oud decimaal | **geen QR-link** — migreer de spoel eerst naar hex |

### Codering

- De hele link is in **kleine letters**, het id inbegrepen: `https://qr.tigertag.io/04ab12cd3e4f80`.
  Getest op 2026-11-07: de iPhone-camera opent een link in beide vormen, maar de
  Samsung-camera (Galaxy S24) toont een link met `HTTPS://` in hoofdletters als
  gewone tekst en opent alleen een link in kleine letters.
- Eén segment in **byte**-modus. Een schema in kleine letters kan de
  alfanumerieke modus niet gebruiken, en de link in segmenten opsplitsen levert
  niets op (gemeten: elke variant is 29 × 29).
- Foutcorrectie **M** (15 %): labels raken bekrast en gevouwen.
- Resultaat: **29 × 29 modules** voor elke spoel- en productlink. Teken elke
  module op een geheel aantal printerpunten, met de standaard stille zone van 4
  modules.

### Een link teruglezen

Lezers halen het id **offline** uit de link: een app die een label scant, heeft
de website nooit nodig. Ze lezen het pad zonder onderscheid tussen hoofd- en
kleine letters, negeren een afsluitende `/` en lossen het op naar zijn vorm:

| Pad | Spoel-id |
|---|---|
| 17 cijfers | `TigerData_<17 digits>` |
| 10 cijfers | `TigerData_<10 digits>` |
| 14 hextekens | de UID, in hoofdletters |
| 13 hextekens die beginnen met `4` | een afgekapte NTAG-UID: `0` + de 13 tekens ([herstelregel](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `p/` + 8 hextekens (gedrukte vorm), of de decimale `id_product` | een product — [sectie 5](#5-productlinks) |

Een uitgang `.JSON` of `.TTAG` vraagt om het antwoord voor tools — [sectie 6](#6-json--en-ttag-antwoorden).

Apps **schrijven** de korte vorm hierboven, maar lezers **accepteren ook de lange
vorm**: het voorvoegsel `TigerData` in willekeurige schrijfwijze, gevolgd door `_`
of `-`, dan de 17 of 10 cijfers — `TigerData_17623456789014213`,
`TigerData-17623456789014213`, `TIGERDATA-17623456789014213`,
`tigerdata_4480517985` verwijzen allemaal naar dezelfde spoel. Een link die met
de hand is getypt of gedeeld, blijft werken. Het voorvoegsel `CLOUD` wordt in geen
van beide vormen geaccepteerd.

Een UID kan uit alleen cijfers bestaan, maar hij is 14 tekens lang, nooit 17 of
10, dus de lengte beslist altijd. Geen enkel oud decimaal id bereikt een lezer,
omdat er nooit een wordt geprint. Elke **andere vorm** is een label van een
nieuwere versie: de lezer zegt dat („werk de app bij”) in plaats van te falen.
Elk ander soort ding krijgt een eigen map, een letter en een `/` (`p/` voor een
product, later `r/` voor een rack), zodat het nooit kan botsen met spoellinks die
al geprint zijn.

### De spoel opzoeken

1. Zoek het id op **in de eigen inventaris van de aangemelde kijker**.
2. Niet daar → zoek het op in de `uidMigrationMap` van de kijker en volg de
   doorverwijzing.
3. Een tweelingpaar heeft één label, met de hoofd-UID; elk van beide UID's opent
   de spoel.
4. Een verwijderde spoel (`deleted: true`) opent als „verwijderd”, niet als
   fout.

   **De eigenaar ziet de spoel op de pagina zelf**, in de browser gelezen uit
   zijn eigen inventarisdocument (de regels beperken het tot hem): het product
   (foto op zijn kleur), merk, materiaal, niveau, resterend gewicht van de
   capaciteit, nozzle-, bed- en droogtemperaturen, diameter, rack en slot,
   leeg-spoelgewicht. Twee knoppen: „Open in Tiger Studio”
   (`https://studio.tigersystem.io/?spool=<docId>`, met de waarden van de link)
   en „See the product page”. Een eigenaar die op het apparaat bij Studio Web is
   aangemeld maar niet op de site, wordt naar Studio Web gestuurd: de site kan
   het document niet lezen zonder een eigen sessie. *(2026-11-07.)* De eigenaar
   kan daar het gewicht en de notitie wijzigen, met dezelfde schrijfactie als
   Studio: `weight_available` of `message` (hoogstens 28 bytes UTF-8),
   `updatedAt` (servertijd), `needUpdateAt` (servertijd) bij een chipformaat, de
   tweeling in dezelfde batch. Ook de houder (lege spoel) kan daar worden
   gewijzigd, zoals Studio die schrijft: `container_id`, `container_weight` (met
   de eigen correctie van het account), `updatedAt`, de tweeling in dezelfde
   batch. De pagina heeft een afmeldknop. *(2026-11-08.)*

5. Wie **niet de eigenaar** is — niet aangemeld, een ander account, een
   geaccepteerde vriend inbegrepen — wordt **naar het product** van de spoel
   gestuurd en krijgt de spoel nooit te zien: de server vindt de spoel via zijn
   id over alle accounts heen (een index op het spoel-id), leest het
   `id_product` en verwijst door naar de productlink uit
   [sectie 5](#5-productlinks). Hetzelfde id in twee accounts met verschillende
   producten (een herschreven chip waarvan een ander account het oude document
   heeft gehouden) → het product van het laatst bijgewerkte document
   (`updatedAt`), in praktisch elk geval juist. Geen product of geen
   overeenkomst → een pagina die zegt dat de spoel privé is, met „Start my
   inventory”. De zoekactie draait alleen voor die scans, dus de kosten volgen
   de scans, niet het aantal accounts. *(Geratificeerd op 2026-11-06; de
   conflictregel op 2026-11-07.)*

   Een bezoeker **zonder sessie** (geen aanmelding gevonden op het apparaat)
   wordt niet doorverwezen: de pagina laat hem kiezen. Ze toont een kaart van
   het product van de spoel (alleen het openbare product, nooit bij een
   privéspoel), meldt hem ter plekke aan (na de aanmelding draait de
   eigenaarscontrole opnieuw en komt de eigenaar bij de spoel uit) of gaat door
   naar de productpagina. Iemand die aangemeld is maar niet de eigenaar is,
   wordt zoals hierboven naar het product gestuurd. *(2026-11-07.)*

   **Van wie de spoel is.** Iedereen die een spoel scant, aangemeld of niet,
   ziet de eigenaar: de weergavenaam en foto uit `userProfiles` van het account
   waarvan het document het laatst is bijgewerkt, ook als het profiel niet
   openbaar is en ook bij een spoel zonder product, zodat wie een spoel vindt,
   weet van wie hij is. Nooit de uid of het e-mailadres. *(2026-11-08.)*

**Privacy:** een id kennen toont nooit een spoel. Een gescande link opent een
spoel alleen voor de eigenaar; in de apps wordt een spoel alleen getoond aan
iemand die de Firestore-regels al toestaan hem te lezen (de eigenaar, een
geaccepteerde vriend, een openbare inventaris). Id's bevatten een tijdstempel en
kunnen worden geraden; dat mag nooit uitmaken. Het product van een spoel is niet
privé: het staat op het label geprint, en een TigerTag+-chip draagt het leesbaar
voor elke NFC-telefoon. Het gewicht, de notitie en het rack gaan nooit naar
buiten; de eigenaar verschijnt alleen als weergavenaam en foto (hierboven). Een
scan wordt één keer per browsertabblad en spoel geteld (herladen is geen nieuwe
scan), met het product, merk, materiaal en een plaats op stadsniveau, nooit het
spoel-id. Het scanrapport bevat ook het IP-adres van de bezoeker, bewaard tegen
overspoeling en voor analyse: het wordt alleen in de beheergeschiedenis getoond,
nooit aan merken, en wordt gebruikt om de stad te controleren die de edge
doorgaf. Het wordt één jaar bewaard, alleen voor de beveiliging. Een scan door
een aangemelde bezoeker wordt aan zijn account gekoppeld.

## 4. Een spoel met waarden aanroepen

Een app kan een link bouwen die een spoel opent **en waarden voorstelt**, met
gewone queryparameters (deze links worden nooit geprint, dus leesbaarheid gaat
voor QR-grootte):

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Parameters

| Parameter | Waarde | Grens |
|---|---|---|
| `weight` | netto filamentgewicht, in gram | geheel getal, van 0 tot de capaciteit van de spoel |
| `note` | de notitie van de spoel (het veld `message`) | platte tekst, hoogstens 28 bytes UTF-8 (de ruimte op de chip) |

Namen zijn niet hoofdlettergevoelig. Een onbekende parameter wordt genegeerd,
nooit een fout. Een waarde buiten de grens wordt geweigerd. Nieuwe parameters
worden aan deze tabel toegevoegd, nooit door één app alleen bedacht.

### Wie ze kan toepassen

| Situatie | Wat er gebeurt |
|---|---|
| Niet aangemeld | Waarden **geweigerd**. De link biedt aan om aan te melden en opent de spoel daarna zonder ze. |
| Aangemeld, niet de eigenaar (de spoel van een vriend inbegrepen) | Waarden **geweigerd**. De spoel opent als de regels dat toestaan. |
| Aangemeld, de eigenaar | Studio: de spoel opent met de waarden **vooraf ingevuld**, en **één handeling** slaat ze op („Update: 640 g”). De Hub-pagina: een gewicht dat binnen de capaciteit past en afwijkt van het opgeslagen gewicht, wordt **meteen opgeslagen**, op de spoel en zijn tweeling in één batch, waarna een banner aanbiedt het vorige gewicht terug te zetten („Revert to 772 g”), voor het geval een oude link opnieuw wordt gescand. *(Hub, 2026-11-08.)* |

Een link van iemand anders schrijft nooit: waarden gelden alleen voor de eigen
spoel van de eigenaar. Een app die zonder bevestiging moet schrijven (een
weegschaal die het gewicht continu bijwerkt, een integratie) gebruikt geen
links: ze schrijft via het account van de gebruiker onder de Firestore-regels
([integratiegids](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Productlinks

> **Geratificeerd op 2026-11-06.**

Een product — een filament uit de catalogus, wie er ook een spoel van bezit —
heeft een eigen link, voor verpakkingen, een winkelschap, een showroom of een
geprinte catalogus:

```
https://qr.tigertag.io/p/<id_product>
```

- `<id_product>` wordt **hexadecimaal, altijd 8 tekens** geschreven, in kleine
  letters, aangevuld met nullen: de 4 bytes zoals ze op de chip staan, zodat een
  firmware of een NFC-lezer de link zonder omrekenen bouwt. Voorbeeld: product
  `2855882328` → `https://qr.tigertag.io/p/aa394e58`, **29 × 29** modules.
- De decimale vorm blijft waar mensen het getal zien — de catalogus
  (`tigersystem.io/<lang>/catalog/2855882328`), een Code 128-barcode — en wordt nooit in een `qr.tigertag.io`-link gedrukt, al accepteert een lezer hem daar ook (zie hieronder).
- Een id dat niet, of niet meer, in de catalogus staat — `p/00000000` en
  `p/ffffffff` („geen product”, nooit geprint), een onbekend id, een
  gearchiveerd, verwijderd of samengevoegd product — opent **één enkele pagina
  „vergeten product”**: dit filament staat niet meer in de catalogus, met de
  zoekfunctie. Eén status voor allemaal, `404` (de pagina en de `.json`- /
  `.ttag`-antwoorden net zo): waarom een product is verdwenen, doet er voor de
  lezer niet toe. Een `id_product` wordt nooit aan een ander product gegeven: een
  label dat al is opgeplakt, kan nooit het verkeerde filament openen.
- De links worden geserveerd door de **Hub** (`tigersystem.io`): `qr.tigertag.io`
  wijst ernaar. De pagina is de cataloguspagina van de Hub (hieronder); de
  `.JSON`- en `.TTAG`-antwoorden zijn Hub-API-routes die de catalogus lezen
  (gecachet).
- Een spoellabel herhaalt nooit zijn product: de spoellink leidt er al naartoe
  ([sectie 3](#de-spoel-opzoeken)).

### Een productlink lezen

Een productlink wordt altijd hexadecimaal **gedrukt**. Bij het **lezen** werkt
ook de decimale `id_product`: `p/2673739332` opent hetzelfde product als
`p/9f5e0644`. Wat na `p/` komt, wordt zo gelezen, ongeacht hoofdletters:

1. 8 tekens `0-9` / `a-f` met minstens één letter → hexadecimaal.
2. Precies 8 cijfers → eerst hexadecimaal, want dat is de vorm van elk gedrukt
   label; staat dat product niet in de catalogus, dan leest de server het
   opnieuw als decimaal. Een offline lezer houdt beide lezingen en neemt de
   lezing die zijn catalogus kent.
3. 1 tot 10 cijfers van een andere lengte → decimaal, als de waarde onder 2³²
   ligt (`p/2673739332` = `p/9f5e0644`); daarboven is de link onbekend.
4. `0` en `4294967295` betekenen in beide vormen (`p/00000000`,
   `p/ffffffff`) "geen product" (`404`).
5. De uitgangen `.json` en `.ttag` werken op beide vormen, ongeacht
   hoofdletters.

Waarom eerst hexadecimaal bij 8 cijfers: 442 echte producten hebben een decimale
id van 8 cijfers. Vandaag komt geen van beide lezingen bij een ander product uit,
maar eerst hexadecimaal lezen zorgt ervoor dat elk gedrukt label zijn eigen
product opent.

### De pagina die hij opent

`p/…` verwijst (`302`) door naar de **bestaande cataloguspagina** van het
product, `tigersystem.io/<lang>/catalog/<id_product in decimal>`, in de taal van
de telefoon. Er is geen aparte scanpagina: de cataloguspagina is **eerst voor de
telefoon** gebouwd (responsief), omdat de meeste bezoeken van een scan komen —
foto en kleurstaal, merk, materiaal en kleurnaam bovenaan, de printinstellingen
in één oogopslag leesbaar, daarna de rest van de pagina.

## 6. JSON- en .TTAG-antwoorden

> **Geratificeerd op 2026-11-06.**

Een link die eindigt op `.JSON` (in elke schrijfwijze) — of die wordt verstuurd
met `Accept: application/json` — antwoordt in JSON in plaats van met een pagina.
Een link die eindigt op `.TTAG` antwoordt met hetzelfde record als
[`.ttag`-bestand](./ttag-format.md) om te downloaden
(`Content-Disposition: attachment`). Dit zijn adressen voor tools, nooit
geprint.

Dezelfde logica als bij een scan ([de spoel opzoeken](#de-spoel-opzoeken)): de
eigenaar krijgt de spoel, ieder ander het product.

| Link | De eigenaar (`Authorization: Bearer <Firebase ID token>`) | Ieder ander (niet aangemeld, een ander account, een vriend) |
|---|---|---|
| `…/p/aa394e58.json` | het productrecord | hetzelfde |
| `…/p/aa394e58.ttag` | het product als `.ttag`-bestand | hetzelfde |
| `…/04ab12cd3e4f80.json` | de spoel | `303` → `…/p/<id_product>.json`; geen catalogusproduct (een TigerData, een TigerTag van een maker) → `404` |
| `…/04ab12cd3e4f80.ttag` | de spoel als `.ttag`-bestand | `303` → `…/p/<id_product>.ttag`; geen catalogusproduct → `404` |

Zonder catalogusproduct wordt niets van de spoel teruggegeven, zelfs niet het
materiaal: de `404` komt overeen met de pagina „privéspoel” van een scan.

- **Spoel:** een [`.ttag`-bestand](./ttag-format.md) met dat ene record, het
  inventarisdocument zoals Firestore het opslaat. Het bevat `id_product`; een
  tool die het product wil, roept daarna `…/p/<id_product>.json` aan.
- **Product:** het catalogusrecord zoals de product-API het teruggeeft, in de
  taal van `?lang=` (standaard Engels). Gecachet op de server en toegestaan
  vanaf elke site.
- Een spoelantwoord wordt nooit gecachet: het hangt af van wie het vraagt.
- Geopend in Tiger Studio wordt de `.ttag` van een spoel geïmporteerd in de modus
  **Restore** (de spoel zoals hij was, chip en back-up inbegrepen); de `.ttag`
  van een product wordt geïmporteerd in de modus **Import**, als nieuwe
  TigerData+ met een vers id.
- Een JSON- of `.TTAG`-verzoek schrijft nooit: linkwaarden (`?weight=`,
  `?note=`) worden daar genegeerd.

## 7. Geprinte labels

Elke app print dezelfde labels: twee soorten, één set sjablonen, zodat een label
dat vanuit Tiger Studio, de mobiele app of de website is geprint, er hetzelfde
uitziet en hetzelfde scant.

| Label | De QR-code | Geprint voor |
|---|---|---|
| **Spoel** | de spoellink ([sectie 3](#3-qr-links)) | elke spoel met een QR-link (niet `CLOUD_`, niet oud decimaal) |
| **Product** (kleurstaalkaart) | de productlink ([sectie 5](#5-productlinks)) | een spoel of een catalogusproduct met een echt `id_product` (TigerTag+, TigerData+) |

De eigenaar die een spoellabel scant, krijgt de spoel; ieder ander het product
([de spoel opzoeken](#de-spoel-opzoeken)). Een productlabel opent het product
voor iedereen: het is het label voor een kleurstaal, een schap of een showroom.

### Wat een label bevat

- het merk, waar een fabrikantenlogo zou komen (fabrikantenlogo's komen later);
- de serie in wit op een zwarte balk (`PLA Rainbow`; het materiaal als er geen serie is);
- de kleurnaam, en de hexcode(s) (`#F2D066`, tot drie op de brede sjablonen);
- op een spoellabel de naam van het label in de rechterbovenhoek, als omlijnde pil:
  `TigerQR+` als de referentie een catalogusproduct (een echt `id_product`) of een
  TigerTag+-chip is, anders `TigerQR` (een TigerTag-chip zonder product geeft dus
  `TigerQR`); een product-(filament)label draagt altijd `TigerQR+`. Net als bij TigerTag
  en TigerTag+ betekent de `+`: gekoppeld aan de catalogus. De pil zegt niet of de spoel
  een chip heeft;
- tot **vier waardevakken**, door de gebruiker gekozen uit: nozzlebereik, bedbereik,
  drogen (temperatuur · tijd), TD, diameter;
- de QR-code.

Alleen wat niet verandert: nooit het resterende gewicht, de notitie, het rack of
de eigenaar. Niets in leesbare tekst naast de QR-code ([sectie 3](#3-qr-links)).

### Sjablonen

Acht sjablonen, de gangbare formaten en indelingen van spoellabels:

| Sjabloon | Formaat (breedte × hoogte) | Indeling |
|---|---|---|
| Classic (standaard) | 40 × 30 mm | merk, balk, kleur + hex, vier vakken, QR rechtsonder |
| Wide | 50 × 30 mm | de Classic, bredere balk |
| Compact | 40 × 25 mm | merk, QR links, balk, kleur, hex — geen vakken |
| Slim | 40 × 12 mm | QR links, merk, balk, kleur — geen vakken |
| Slicer-friendly | 40 × 30 mm | merk, serie, kleur groot gestapeld, grote QR rechts — geen vakken |
| Vertical | 30 × 40 mm | merk, balk, kleur groot, hex, een lijn, vakken links gestapeld, QR rechtsonder |
| Vertical bold | 30 × 40 mm | merk, balk over de volle breedte, kleur, een lijn, QR gecentreerd eronder — geen vakken |
| Vertical compact | 25 × 40 mm | merk, balk, kleur, hex, een lijn, grote QR eronder — geen vakken |

Elk sjabloon is één SVG, opgemaakt in tienden van een millimeter en geschaald
naar de punten van de printer. De QR-code vult hetzelfde vak als op de gangbare
spoellabels (≈ 14 mm op de Classic), met een geheel aantal printerpunten per
module: het dichtstbijzijnde, naar boven afgerond als dat binnen 6 % van het vak
blijft. De witte marges van het label zijn de stille zone. Bij 203 dpi is een
code van 29 × 29 op de Classic 4 punten per module (≈ 14,5 mm).

### Uitvoer

- **PDF**, **PNG** (op de resolutie van de printer) en **SVG**, zodat elke
  printer werkt, desnoods via zijn eigen app;
- direct printen naar labelprinters (Brother QL, Niimbot, Phomemo) komt later,
  printer voor printer, met dezelfde sjablonen.

## Open punten

- **App-links.** iOS (`apple-app-site-association`) en Android (intentfilters)
  vergelijken paden standaard hoofdlettergevoelig: links worden in kleine letters
  geprint, maar een link die met de hand is getypt of gedeeld, is dat misschien
  niet, dus de mobiele app declareert hoofdletterongevoelige vergelijking (iOS)
  en filtert het pad in code (Android).
- **Domein.** `qr.tigertag.io` wordt voor altijd geprint: verleng `tigertag.io`
  voor een lange termijn.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Universele filamentidentiteit](../concepts/universal-filament-identity.md), [Inventaris en cloudsynchronisatie](../concepts/inventory-and-cloud-sync.md), [Overzicht voor ontwikkelaars](./README.md)
