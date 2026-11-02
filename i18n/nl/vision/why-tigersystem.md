---
sourceHash: 41cc4260975408514f69a1b2d61294c1a71723db05cddb913c0f599e1dade5b0
sourcePath: docs/vision/why-tigersystem.md
---

# Waarom TigerSystem bestaat

## Het probleem

Een filamentspoel is het meest gehanteerde object in 3D-printen — en het minst
intelligente. Zodra het etiket weg is, kan een spoel je niet vertellen:

- welk materiaal en welke kleur hij is,
- hoe hij geprint moet worden,
- hoeveel filament er nog over is,
- waar hij in je rek staat,
- van wie hij is.

Printerfabrikanten zijn begonnen dit op te lossen met RFID-tags — **maar elk lost het
alleen binnen zijn eigen muren op.** Een Bambu Lab-tag betekent niets voor een
Creality-printer; een Anycubic-tag betekent niets voor wie dan ook. De gegevens
horen bij het ecosysteem van de fabrikant, niet bij de persoon die het
filament kocht.

## Het antwoord

**TigerSystem** is een open ecosysteem gebouwd rond één idee:

> **De identiteit van de spoel is van de eigenaar — niet van een printermerk.**

**We hebben filamentspoelen intelligent gemaakt.** Ze weten wat ze zijn — en ze
kunnen het iedereen vertellen, zonder enige wrijving. De ambitie: **voor 3D-printmaterialen worden
wat de streepjescode voor het schap werd.**

Elke spoel draagt een [TigerTag](../products/tigertag.md)-NFC-chip met zijn
volledige profiel — merk, materiaal, kleur, diameter, printinstellingen. Elke compatibele
lezer — een smartphone, een desktoplezer, een printer — kan hem lezen.
Eén gedeelde online database ([gewoon Firebase](../concepts/inventory-and-cloud-sync.md))
houdt het account, de inventaris, de geschiedenis en het delen van de eigenaar op elk
apparaat gesynchroniseerd.

## Wat “gebruikersgericht” in de praktijk betekent

| Printergericht ecosysteem | TigerSystem |
|---|---|
| Tag alleen leesbaar voor printers van één merk | Tag leesbaar door elk NFC-apparaat |
| Gegevensformaat geheim of versleuteld | Formaat open en gedocumenteerd |
| Inventaris leeft in de app van de fabrikant | Inventaris leeft in **jouw** account |
| Werkt alleen met het filament van de fabrikant | Werkt met **elk** filamentmerk |
| Sterft met de cloud van de fabrikant | Open SDK’s, open specificatie, zelf te bouwen |

## Het verhaal achter de zandbak

Het begon in **2023, direct na Formnext**. Bambu Lab had het tijdperk van
propriëtaire spoeltags geopend; dat jaar volgden Creality en Anycubic, elk
met printers met RFID/NFC-lezers — en elk met zijn eigen vergrendelde,
propriëtaire chip. We besloten dat zo de industrie zich niet mocht vestigen: er moest een
formaat bestaan dat **open source, neutraal, platformonafhankelijk en
gericht op de gebruiker** was. En het kon geen manifest zijn — het moest een
**haalbaar, capabeler alternatief** zijn voor wat printerfabrikanten bieden,
aan filamentmakers van derden aangereikt zodat hun spoelen *meer* konden dan
de propriëtaire, en hun marktaandeel niet zou eroderen tegenover gebonden
filament.

Dus gingen we aan de slag — en naar China. We presenteerden het project aan printerfabrikanten
— Bambu Lab (aan Dr. Tao, de CEO), Elegoo, Creality, Anycubic,
en Biqu / BigTreeTech (ook daar ontmoetten we de CEO) — en aan
filamentmakers en apparatuurleveranciers (eSun, R3D, Landu, Sunlu, Jamg He),
nadat we het in Europa al aan Rosa3D hadden gepresenteerd. De ontvangst was warm.
We ontwierpen een protocol dat **beter geoptimaliseerd en veelzijdiger** was dan
de propriëtaire — gebruikersgericht, multi-merk, platformonafhankelijk. We bestudeerden de
werkstromen van filamentfabrieken om te begrijpen hoe je NFC-chips op
industriële schaal programmeert, en zochten chipproductie — eigen labels, eigen
dragers, enorme volumes — tegen kosten die laag genoeg waren voor één niet-onderhandelbaar doel:
**de technologie toevoegen zonder één cent toe te voegen aan de prijs van de spoel voor de
eindgebruiker.**

In **september 2024** waren de chips in massaproductie en werden de fabrieken
beleverd — het hele ecosysteem aan fabriekszijde kwam eerst. Op dat moment was er
**helemaal geen mobiele app en geen desktop-app**; die kwamen
later. Mobiel eerst, omdat het niets kopen vereist: de lezer zit
al in ieders zak.

Die keuze kwam voort uit een vraag die we in China bleven stellen: *“Waar zijn de
RFID-lezers?”* Iedereen antwoordde: *“In de Bambu Labs.”* En wij zeiden: onjuist.
Bij Bambu Lab zitten de lezers **in de AMS, niet in de printer** — een
spoel van een derde partij kan door de machine helemaal niet worden gedetecteerd. **De RFID-lezers
zitten in je zakken.** In elke telefoon, klaar voor gebruik — zonder dat je het zelfs
weet.

Eerlijk gezegd: dit alles zelf bouwen was nooit het oorspronkelijke plan. **Er zijn
meer dan 2,5 miljoen TigerTag-NFC-chips geproduceerd — waarmee TigerTag het
meest ingezette RFID-protocol van derden ter wereld is** — de meeste ervan
in de fabriek geïntegreerd door filamentmerken van derden (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D — met Filforme, Nanovia en meer in
integratie), plus een kleiner deel
gekocht door makers om thuis spoelen te taggen. We gingen er naïef van uit dat de gemeenschap
de toepassingen zelf zou bedenken: een open, gedocumenteerde NFC-identiteit op elke
spoel voelde als een vanzelfsprekende speeltuin.

Dat gebeurde niet. Ondanks de omvang van de uitrol pakte geen enkele gemeenschap het
onderwerp op; niemand vond het de moeite waard om integraties rond het protocol te bouwen.
We hoopten dat anderen het zouden oppakken — dat deden ze niet. Dus deden wij het, ook al was het
niet ons oorspronkelijke doel: we begonnen **de toepassingen zelf te bedenken**, om
het potentieel te tonen van een **open-source NFC-protocol voor materiaalidentificatie
gericht op de gebruiker, niet op de printer** — en om werkende
voorbeelden achter te laten voor wie de draad eindelijk oppakt.

En het begint te gebeuren:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) leest TigerTags,
[Spooly Tracker](https://spoolytracker.com/) bouwde zijn spoolidentificatie
erop, en de
[door de community uitgebreide firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
van de Snapmaker U1 leest ze **native op de printer zelf** — zie
[integraties van derden](../developers/integrations.md).

## Een zandbak, met opzet

De **kant van TigerSystem aan gebruikerszijde** is bewust een **zandbak**. Elke
app en elk apparaat dat we voor eindgebruikers maken — Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD, en andere projecten die nog komen — heeft geen andere ambitie dan het
**potentieel te tonen**: elk is een werkend **proof of concept** van wat een
**open-source, standaard, agnostisch, platformonafhankelijk protocol** als TigerTag
mogelijk maakt, van een weekendscript tot een compleet product. Iedereen kan
inspiratie putten uit ons integratiewerk en **zich de functies van morgen voorstellen**. Het zijn voorbeelden om te kopiëren, geen platform om bij aan te sluiten.

De **fabriekskant is geen zandbak.** Achter de 2,5 miljoen chips draait een
suite van industriële kwaliteit — [TigerTag Factory &
Manager](../products/factory-suite.md): beheer van filamentdatabases en
massaprogrammering van NFC/RFID op lijnsnelheid, met een fabriekshandtekening die de herkomst van elk
product bewijst — **in productie** gebruikt door partnerfilamentfabrieken.
De zandbak is de showroom; de productielijn is geen experiment.

## Neutraal door ontwerp

TigerTag kiest geen kant tussen filamentmerken, printerfabrikanten of distributeurs.
Het is geen ommuurde tuin met een partnerlijst — het is een **formaat dat iedereen kan lezen
en schrijven**.

Die neutraliteit geldt ook voor de chips zelf: de meeste eindgebruikers kopen **goedkope,
merkloze NTAG-chips** op Amazon, AliExpress of lokaal — en dat is bewust prima. Niets blokkeert ze; het protocol werkt identiek.
Officiële chips met TigerTag-opdruk helpen het R&D te steunen, maar ze zijn niet
vereist: **het protocol dat in de huizen en kantoren van gebruikers leeft is de eerste
beloning.**

Zelfs het protocol zelf wordt niet opgelegd: chips worden **ontgrendeld** geleverd, zodat een gebruiker
die een ander NFC/RFID-formaat verkiest — bestaand of eigen — de
chip kan herschrijven en migreren. TigerTag is het basisformaat waarmee spoelen aankomen, niet een
formaat waaraan je vastzit. Niets in het ecosysteem is een voorwaarde: lees de chipspecificatie,
pak een SDK, en bouw de software of het bedrijf dat je echt wilt.

## Het manifest

> *“Gemaakt voor makers. Open voor iedereen. Geboren uit de community geeft TigerTag
> gebruikers echte data en totale vrijheid. Het is 100 % open source en verbindt je
> materiaal, printers en merken onder één universele taal,
> vandaag en morgen. Sluit je aan bij de beweging. Verbind je wereld met TigerTag.”*
>
> — **Benoit Michaut**, CEO & oprichter · Visie: **Cheap & Reusable**

---

**▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Gebruikersgericht ecosysteem](../philosophy/user-centric-ecosystem.md) · **De mensen erachter:** [Het team](./team.md)

**Zie ook:** [Filosofie van het open ecosysteem](../philosophy/open-ecosystem.md), [Universele filamentidentiteit](../concepts/universal-filament-identity.md)
