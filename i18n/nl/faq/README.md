---
sourceHash: 6f8896d0576b865d67ea9ac9210a2ef2bb3fe75b5617b90d3b2323c963c9b40f
sourcePath: docs/faq/README.md
---

# FAQ

## Algemeen

**Wat is TigerSystem?**
Een open ecosysteem voor 3D-printen, gebouwd rond één idee: de identiteit van een filamentspoel
is van de eigenaar, niet van een printermerk. Zie
[Waarom TigerSystem bestaat](../vision/why-tigersystem.md).

**Moet ik iets kopen om te beginnen?**
Nee — zelfs geen chip. De apps zijn gratis, elke NFC-smartphone is de lezer, en
een **TigerData**-spoel draagt de volledige identiteit zonder dat er iets op iets geplakt zit.
Chips zijn het comfort, nooit de voorwaarde:
[begin voor $0](../guides/start-for-free.md).

**Is dit gebonden aan één filamentmerk of printermerk?**
Nee — neutraliteit is een ontwerpregel. Elk filament, elke printer, geen partnerlijst.

**Zijn deze apps HET product?**
Nee — de kant voor **gebruikers** is bewust een **zandbak**. Elke app en elk
apparaat dat we voor eindgebruikers maken (Tiger Studio, Tiger NFC Connect, TigerScale,
TigerPOD en projecten die nog komen) is een werkend **proof of concept**: het enige
doel is het potentieel te tonen van een open-source, standaard, agnostisch,
platformonafhankelijk protocol, en anderen te inspireren om de functies
van morgen te bedenken. Gebruik ze, fork ze, of bouw in plaats daarvan je eigen. De **fabriekskant**
daarentegen is productiewaardig: een industriële toolchain
programmeert de chips met lijnsnelheid in fabrieken van partners — dat deel is geen
experiment. Zie [Een zandbak, met opzet](../vision/why-tigersystem.md).

**Waarom bouwen jullie al die demonstrators zelf?**
Omdat niemand anders het deed. Er zijn meer dan 2,5 miljoen TigerTag-chips
geproduceerd die in filamentspoelen worden geleverd, en we gingen ervan uit dat de community
zelf toepassingen voor een open NFC-identiteit zou bedenken — dat gebeurde niet. Het bouwen van de
demonstrators was nooit het oorspronkelijke doel; het werd nodig om te laten zien wat
het protocol mogelijk maakt. Het hele verhaal:
[Het verhaal achter de zandbak](../vision/why-tigersystem.md).

## TigerTag (chips)

**Welke chip is een TigerTag?**
Een standaard NTAG NFC-chip met een open payload van 144 bytes — merk, materiaal,
kleur, diameter, printinstellingen. Geen sleutels, geen versleuteling van de gegevens.
Zie [De TigerTag-chip](../concepts/tigertag-chip.md).

**Kan ik een chip herschrijven?**
Ja — chips zijn herschrijfbaar, en dat is het punt van de
[Second Life-workflow](../philosophy/second-life.md): vul een spoel bij of geef hem
een nieuwe bestemming en codeer de chip opnieuw.

**Wat is TigerTag+?**
Een TigerTag die precies weet *welk product* hij is. In plaats van waarden die iemand
typte, bevat hij een **product-ID uit de officiële catalogus** — merk, kleur,
materiaal, temperaturen, diameter, SKU, EAN — plus optionele verrijkingsmetadata
die na het schrijven van de chip beter kan worden. De chip blijft **100 % offline**:
alles wat nodig is om te printen staat er nog steeds op. De `+` betekent *geïdentificeerd*, niet
*gecertificeerd*.

**En TigerTag+ Certified?**
Een TigerTag+ die ook een cryptografische **handtekening** bevat, geschreven door een
fabrikant die de certificering en de bijbehorende ondertekeningstools heeft. Iedereen kan een handtekening
**controleren** — gratis, offline, op de eigen telefoon — maar alleen een
gecertificeerde fabrikant kan er een **uitgeven**, dus een gekloonde tag faalt bij de controle. Zie
[TigerTag+](../products/tigertag-plus.md).

**Kan ik een back-up van een chip in mijn account maken?**
Ja, en het is een aparte functie naast de `+`. Tiger Studio kan de exacte inhoud van een chip opslaan,
gekoppeld aan zijn fysieke UID, en hem later weer terug programmeren — handig
als een chip wordt herschreven of beschadigd raakt, en geldig **alleen voor de oorspronkelijke chip**.
Een back-up hebben maakt een chip geen TigerTag+.

**Waar koop ik chips?**
Twee even geldige antwoorden. Officiële chips met TigerTag-merk zijn te koop op
**[tigertag.io](https://tigertag.io)** en via officiële distributeurs
(momenteel [Atome3D](https://atome3d.com), er komen er snel meer bij) — door ze te kopen
steun je de R&D. Maar **elke goedkope, blanco NTAG-chip** van Amazon,
AliExpress of je lokale winkel werkt identiek, en dat is bewust:
niets wordt geblokkeerd, het protocol is waar het om draait.

**Komen de chips die ik koop met gegevens erop aan?**
Nee — **los verkochte chips worden blanco geleverd**, met of zonder
TigerTag-logo. Je schrijft de identiteit van het filament zelf, in
[Tiger NFC Connect](../products/tigertag-connect.md) of
[Tiger Studio](../products/tiger-studio.md); dat duurt de eerste keer ongeveer een minuut.
De chips die **al gecodeerd** aankomen, zijn die welke in de fabriek zijn geïntegreerd,
in filament van de partnermerken. Een chip kopen en getagd filament kopen
zijn twee verschillende dingen.

**Welke vorm moet ik kopen — sticker of refilldrager?**
Twee vormfactoren, voor twee situaties. De **losse sticker** gaat op elke
spoel die je al hebt. De **refillversie** is gemaakt voor
[refills](../philosophy/second-life.md) zonder spoel: hij wordt in de **kartonnen
kern** geplakt voordat je de refill op een herbruikbare masterspoel monteert, zodat de chip
met het filament meereist in plaats van met de haspel — op dezelfde plek waar de
fabriek hem aanbrengt.

**Welke blanco chip moet ik precies kopen?**
**NTAG213, 215 of 216 — rond, 25 mm** is de aanbeveling. Het protocol is
bewust geoptimaliseerd om op de kleine NTAG213 te passen (144 bytes); 215/216 werken
identiek met ongebruikte ruimte over. Andere vormen werken ook, maar 25 mm
rond is het formaat waaromheen de lezers en houders van het ecosysteem zijn ontworpen.

**Welke filamentmerken leveren TigerTag vanuit de fabriek?**
Er zijn meer dan 2,5 miljoen chips geproduceerd — waarmee TigerTag **het meest
gebruikte RFID-protocol van derden ter wereld** is; de meeste worden in de
fabriek geïntegreerd door filamentmerken van derden — Rosa3D, eSun, Sunlu, Landu,
Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — en er worden meer
merken geïntegreerd.

**Hoe komt een chip op een spoel?**
Hij wordt opgeplakt — en er zitten **er twee per spoel, aan tegenovergestelde zijden**. Dat is
bewust: printers delen vaak één RFID-lezer tussen twee slots, dus een chip
moet naar de lezer gericht zijn, aan welke kant de spoel ook zit; je kunt
met de hand scannen zonder de spoel om te draaien; je kunt hem scannen zonder hem uit zijn
slot te halen; en als de ene chip uitvalt, antwoordt de andere nog. Bonus: elke lege spoel
levert je twee herbruikbare chips op.
Zie [waarom twee chips](../concepts/tigertag-chip.md).

**Heb ik internet nodig om een chip te lezen?**
Nee. De payload van de chip is volledig en zelfvoorzienend: telefoon in vliegtuigmodus,
offline desktop — de spoel stelt zich nog steeds voor.

**Ik gebruik liever een ander NFC-protocol (OpenSpool, mijn eigen…) — zit ik vast aan
TigerTag?**
Nee. Chips zijn **nooit tegen schrijven vergrendeld**: TigerTag is slechts het basisprotocol
waarmee spoelen vanuit de fabriek worden geleverd. Je kunt de chip vrij herschrijven en
de gegevens migreren naar elk ander NFC/RFID-protocol, op maat of bestaand.

**Wat gebeurt er met de chip als de spoel leeg is?**
Hij krijgt een tweede leven — nooit de vuilnisbelt. Codeer hem opnieuw voor de volgende spoel, of
zet hem om naar standaard NDEF en maak er alles van wat NFC kan: een sleutelhanger, een
visitekaartje, een verbonden object. Officiële chips met merk zijn overgestapt op
**NTAG215** precies om geheugenruimte over te houden voor dat hergebruik: de chip van een spoel
mag nooit elektronisch afval worden. Zie
[Second Life](../philosophy/second-life.md).

**Overleeft de chip een verwarmde kamer of een filamentdroger?**
Bij normaal gebruik zijn er in het veld geen chipdefecten gemeld — ook niet
van gebruikers die filamentdrogers gebruiken. Twee dingen werken in het voordeel van de chip: je
leest hem nooit echt heet uit (scans gebeuren bij omgevingstemperatuur, niet
midden in een print in een kamer), en het is standaard NTAG-hardware — voor formele
temperatuurspecificaties verwijzen we naar de NTAG213/215/216-datasheets van NXP.

**Wat is een `.ttag`-bestand?**
Een draagbare, offline momentopname van een of meer van je spoelen — de eenheid om je filamenten
te back-uppen, op een USB-stick mee te nemen en te delen. Exporteer één
spoel of een hele selectie vanuit Tiger Studio; importeer met een volledige voorvertoning en
een keuze tussen *Herstellen* (zelfde account) en *Importeren* (overnemen als nieuwe
spoelen). Volledige specificatie: [het `.ttag`-formaat](../developers/ttag-format.md).

**Kan ik TigerSystem zonder chips gebruiken?**
Ja — dat is **TigerData**: dezelfde protocolgegevens in puur digitale vorm, geen
chip, geen UID. De identiteit leeft in je inventaris (of overal waar het digitaal is) en
gedraagt zich als elke andere spoel. Schrijf hem later in een NFC-chip — atomair,
wanneer je er klaar voor bent — en het wordt een TigerTag, waaraan eindelijk een fysieke UID
is gekoppeld. Zie
[Eén identiteit, vier toestanden](../concepts/universal-filament-identity.md).

## Tiger Studio (desktop)

**Welke platforms?**
Windows, macOS en Linux (Electron). Downloads op de
[releasespagina](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Heb ik een NFC-lezer nodig?**
Nee — de app werkt zelfstandig. Een ACR122U-lezer (of een
[TigerPOD](../products/tigerpod.md)-standaard) voegt directe spoelherkenning
en chipcodering toe.

**Welke printers kan hij aansturen?**
Zes merken live: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker —
zie de [compatibiliteitsmatrix](../compatibility/README.md).

## Slicers en de printworkflow

**Moet ik mijn slicer veranderen?**
Nee. Houd OrcaSlicer, de slicer van je fabrikant, wat je maar wilt — TigerSystem
slicet niet en wil dat ook niet. Je slicet en start opdrachten precies zoals
voorheen. Zie [waar de slicer past](../architecture/data-flow.md).

**Wat voegt TigerSystem dan toe aan het printen?**
Twee dingen. Ten eerste klopt de filamentinformatie aan de machinekant met de werkelijkheid: Tiger
Studio stuurt de gegevens van elke spoel naar de slots van de printer (AMS, CFS, Canvas, ACE,
IFS). Ten tweede live monitoring: wat de print ook gestart heeft, de
opdracht verschijnt in Tiger Studio met voortgang, temperaturen, een klokkijd
“klaar om” en de camera — over je hele vloot, alle merken door elkaar.

**Kan de chip mijn slicerprofiel automatisch configureren?**
Vandaag niet. De chip bevat de aanbevolen instellingen van het filament
(temperaturen…); die neem je zelf over in je slicerprofiel.

**Ik heb printers van drie verschillende merken. Een probleem?**
Juist niet — daar draait het om. Eén printertabel voor de hele vloot, met
filters op merk / status / tag, welke mix van de zes ondersteunde merken je ook hebt.

## TigerHub (het webhuis van het ecosysteem)

**Wat is TigerHub?**
Het webplatform op [tigersystem.io](https://tigersystem.io). Het presenteert het
TigerSystem-ecosysteem — de etalage van wat het open protocol mogelijk maakt
— en herbergt de sociale kant van de zandbak, alles vandaag live: je account op
het web, verlanglijstjes (openbaar en alleen voor vrienden), vriendcodes en uitnodigingen,
het openbaar delen van lijsten, plus de materiaalcatalogus, de browser voor de referentiedatabase, 3D-modellen en meer. Zie [TigerHub](../products/tigerhub.md).

**Kan ik mijn collectie aan iemand tonen zonder app?**
Ja — TigerHub levert alleen-lezen lijstlinks: iedereen met de link bekijkt de lijst in een
gewone browser, zonder app en zonder account.

**Is TigerHub de database achter de apps?**
Nee. De accounts en gegevens staan in gewone **Firebase** — één gedeelde database, op
één plek, zodat alle elementen van de zandbak samenwerken. TigerHub is het weboppervlak
dat erop is gebouwd.

## Tiger NFC Connect (mobiel)

**Wat doet de mobiele app?**
NFC-scannen en chips programmeren onderweg, door de catalogus bladeren, en volledige
inventarissynchronisatie met hetzelfde account als de desktop-app.

**Waar download ik hem?**
Hij is uitgebracht in de **App Store** en op **Google Play** als **Tiger NFC
Connect** (voorheen “TigerTag RFID Connect”), met openbare bèta's op beide
platforms. Alle links:
[tigersystem.io/download](https://tigersystem.io/download).

## TigerScale en sensoren

**Wat is TigerScale?**
Een open-source ESP32-weegschaal voor filamentspoelen. Zet er een spoel op en het live
gewicht stroomt rechtstreeks je inventaris in — direct zichtbaar op desktop,
mobiel en gedeelde weergaven. Zie [TigerScale](../products/tigerscale.md).

**Wacht — de chip weet toch al alles, waarom een weegschaal?**
De chip weet wat het filament **is**; alleen een weegschaal weet hoeveel er
**over** is. Ze zijn de twee helften van een echt bruikbare inventaris: identiteit van
de chip, live hoeveelheid van de weegschaal.

**Heb ik een TigerScale nodig om gewicht bij te houden?**
Nee. Je kunt het gewicht van een spoel altijd handmatig instellen of aanpassen in de apps —
de weegschaal maakt het alleen automatisch, live en moeiteloos. Tiger Studio leest ook standaard
**USB-“HID Scale”-apparaten** — de DYMO M-serie (M5, M10,
M25…) en elke conforme weegschaal — als optie van derden
([details](../products/tigerscale.md)).

**Kan ik er zelf een bouwen?**
Ja — dat is het punt. Hardwareontwerp en firmware zijn volledig open (MIT) in
de [Tiger-Scale-repo](https://github.com/TigerTag-Project/Tiger-Scale).

**En het eigen gewicht van de lege spoel?**
Elke spoel in je inventaris legt vast op welke lege spoel hij zit — zijn
*container* — en het gewicht daarvan, dat wordt afgetrokken zodat het getal dat
je ziet netto filament is, geen plastic haspel. Een nieuwe spoel krijgt
automatisch de eigen container van zijn merk; Tiger Studio vraagt het wanneer
het merk er meerdere heeft, of nog geen in de lijst.

Een nieuwe spoel van 1 kg die ongeveer 200 g te veel aangeeft, zit bijna altijd
op de verkeerde container, meestal *Generic · Refill — Without MasterSpool*,
die 0 g weegt. Open de spoel in Tiger Studio en druk op **Wijzigen** op de
kaart **Container** om de juiste te kiezen. Wegen je lege spoelen anders dan de
catalogus, corrigeer het gewicht dan één keer vanuit diezelfde lijst (**Dit
gewicht corrigeren**): het geldt voor elke spoel op die container in je
account, en jij kiest of de spoelen die er al op zitten meegaan. De id's en
gewichten staan in [het `.ttag`-formaat](../developers/ttag-format.md).

**Wat is de TD-1 / TD1s?**
Een filamentanalyzer van derden van **[AJAX-3D](https://ajax-3d.com)**, in twee
varianten die allebei met het ecosysteem werken: **TD-1** (de doe-het-zelfversie — bouw
hem zelf) en **TD1s** (kant-en-klaar gemonteerd, direct bruikbaar). Zijn
hoofdtaak is het meten van de **Transmission Distance** van een filament (“TD” — hoeveel
licht het materiaal doorlaat), de waarde waar gebruikers van HueForge / Full Spectrum
printen niet buiten kunnen; hij leest ook de **kleur** (RGB, 1–3
slots) — iets minder nauwkeurig, maar een goede indicatie. Tiger Studio
integreert hem native via USB, en **Tiger NFC Connect ondersteunt hem via
USB-C** op mobiel. De gemeten TD kan **in het TigerTag-protocol zelf worden opgeslagen**
— op de NFC-chip, of in het `.ttag`-bestandsformaat. Een accessoire van derden
en het open ecosysteem die samenwerken, zoals bedoeld.

## Cloud en inventaris

**Waar wordt mijn inventaris opgeslagen?**
In je eigen TigerSystem-account — gewone Firebase (Firestore), één gedeelde
database die alle apps gebruiken. Elk apparaat waarop je je aanmeldt,
ziet in realtime dezelfde gegevens. Zie
[Inventaris en cloudsynchronisatie](../concepts/inventory-and-cloud-sync.md).

**Werkt het offline?**
Chips zijn volledig offline leesbaar; apps houden een lokale cache bij. Printerkoppelingen zijn
LAN-lokaal en hebben helemaal geen internet nodig (behalve de cloudmodus van Anycubic).

**Ik wil GEEN cloud. Kan ik TigerTag toch gebruiken?**
Ja, 100 %. De payload van de chip is volledig en zelfvoorzienend: lees hem,
schrijf hem, en beheer een volledig lokale inventaris zonder cloud, zonder account, zonder
server — de [JS- en Python-SDK's](../developers/sdks.md) bestaan precies om
dat gemakkelijk te maken in je eigen of doe-het-zelfprojecten. Zelfs **TigerTag+ authenticeert
lokaal, zonder internetverbinding**. De cloudlaag is optioneel
comfort (synchronisatie tussen apparaten, delen), nooit een vereiste — wij bieden één
visie op de TigerTag-gebruiker, en elke andere visie wordt aanvaard en
aangemoedigd.

**Ik weet niets van NFC of RFID — is dit iets voor mij?**
Juist voor jou. De hele ervaring is ontworpen met de beginner voorop: tik met je telefoon
op een spoel, hij stelt zich voor, klaar. Geen jargon nodig — de technische
lagen bestaan voor wie wil graven, niet als voorwaarde.

**Kunnen anderen mijn spoelen zien?**
Alleen als je dat kiest: geaccepteerde vrienden, een openbaar-schakelaar of een TigerHub-
deellink. Alles is standaard privé en wordt aan de serverkant afgedwongen.

**Wat gebeurt er als de TigerTag-cloud ooit sluit?**
Het ontwerpantwoord op die angst is openheid: het chipformaat is openbaar, chips
lezen voor altijd volledig offline, de SDK's en de desktop-app zijn open source, en
het cloudoppervlak is gedocumenteerd. Je spoelen kunnen niet door een server “gebricked” worden —
dat is precies het verschil met het silo van een fabrikant.

## RFID en compatibiliteit

**Kan Tiger Studio native tags van Bambu/Creality/… lezen?**
Nog niet — de juiste manier om interoperabiliteit aan te pakken is nog een open vraag.
Decodeerspecificaties voor alleen-lezen zijn gedocumenteerd voor zeven fabrikantformaten, en het
lopende werk richt zich op het **omzetten van tagdata van fabrikanten naar digitale TigerData-
spoelen**, zodat filament van andere merken in het ecosysteem gescand en beheerd kan worden. Zie [compatibiliteit](../compatibility/README.md).

**Waarom zijn tags van fabrikanten vergrendeld en TigerTag niet?**
Vergrendelde tags dienen vendor lock-in. Het antwoord van TigerTag is een openlijk leesbaar
formaat — zie [Gebruikersgericht versus printergericht](../philosophy/user-centric-ecosystem.md).

**En harsprinters?**
Komt eraan: TigerTag wordt uitgebreid naar **harsen** — dezelfde open identiteit op
harscontainers voor 3D-harsprinters.

**Werkt TigerTag met een printer zonder RFID-lezer?**
Ja — dat is de [smartphonebrug](../philosophy/smartphone-bridge.md): je
telefoon (of een desktoplezer) identificeert de spoel, en het systeem voedt de gegevens
aan de printer.

## Problemen oplossen

**Mijn chip scant niet op mijn telefoon.**
Controleer of NFC aan staat en zoek de beste plek op de antenne van je telefoon; tags lezen het best
plat ertegenaan. Als de chip in de ene app wel leest en in een andere niet, werk de app dan bij.

**Mijn printer verschijnt niet in Tiger Studio.**
Zorg dat de printer op hetzelfde LAN zit, waar relevant in LAN-modus, en probeer dan
“Toevoegen via IP” — detectiemethoden verschillen per merk.

> Echte gevallen zijn welkom — meld de jouwe op de
> [officiële Discord](https://discord.gg/3Qv5TSqnJH) of via GitHub-issues; dit
> deel groeit daaruit.

## Ontwikkelaars

**Heeft iemand echt op TigerTag gebouwd?**
Ja — en onafhankelijk van ons:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (community-toolkit voor
RFID van meerdere fabrikanten) leest TigerTags;
[Spooly Tracker](https://spoolytracker.com/) (inventarisplatform, web +
mobiel) identificeert spoelen met TigerTags; en de
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
maakt van de U1 **de eerste printer die TigerTags native leest**, en
[COSMOS](https://github.com/OpenCentauri/cosmos) doet hetzelfde op de Elegoo Centauri Carbon, met
de NFC-lezer die in de Canvas is ingebouwd. Zie
[integraties van derden](../developers/integrations.md).

**Kan ik mijn eigen app op TigerTag bouwen?**
Ja, zonder toestemming: open chipspecificatie, [SDK's](../developers/sdks.md) (JS &
Python) en een [gedocumenteerd accountoppervlak](../developers/account-api.md) met
werkende voorbeelden voor ESP32 / Home Assistant / Spoolman.

**Kan ik TigerTag aansluiten op mijn ERP of interne voorraadsoftware?**
Ja — dat is precies het soort gebruik dat het open protocol uitnodigt. Een scan (NFC-
telefoon of ACR122U USB-lezer) geeft je de identiteit van de spoel; wat je ermee doet
— voorraadbeheer, opdrachtregistratie, traceerbaarheid, nabestellen, R&D — bepaal je zelf. Zie [Wat kun je bouwen?](../developers/README.md)

**Welke hardware heb ik nodig om chips in mijn eigen project te lezen?**
Elke NFC-smartphone, een USB-lezer van het type ACR122U op een computer — of ga volledig
doe-het-zelf: een simpele ESP32 met een PN532- of RC522-lezermodule is genoeg (zo doet
[TigerScale](../products/tigerscale.md) het). Gewone, goedkope hardware, geen
eigen apparatuur.

**Is het openbaar zijn van de Firebase-configuratie een beveiligingslek?**
Nee — dat is het standaard Firebase-patroon. Alle afdwinging gebeurt aan de serverkant in
beveiligingsregels; een client kan alleen bij de gegevens van zijn eigen gebruiker.

## Fabrikanten

**Wij zijn een filamentmerk — hoe leveren we spoelen met TigerTag?**
Snel: een productielijn kan met TigerTag draaien in **slechts
5 dagen**, tegen zeer lage kosten, waarbij elke chip in **ongeveer
1 seconde** wordt geschreven — bewezen met meer dan 2,5 miljoen chips die al zijn geleverd door
Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree en Smart3DPT. En elk merk dat zich aansluit, versterkt het collectieve argument voor
printerfabrikanten om TigerTag native te lezen. Lees
[Voor filamentfabrikanten](../vision/for-filament-manufacturers.md) en neem dan
contact op via **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**Kan mijn product “TigerTag Certified” worden?**
Dat hangt af van aan welke kant van één lijn het zit — en de meeste producten zitten aan de
gratis kant.

Als je product **praat met** TigerTag-chips — een lezer, een app, een printer, een
slicer, een droger, een tool — is het **TigerTag Compatible**. Dat niveau is gratis,
op eigen verklaring en vereist geen audit en geen toestemming: bouw het, zeg *“compatibel
met TigerTag”* (of *“met TigerTag+”* als je handtekeningen controleert), en toon het
logo in je interface, je documentatie en je winkelvermelding. De meeste
producten van derden horen hier, en niets aan het protocol wordt hun onthouden.

**TigerTag Certified** is het andere niveau, en het staat open voor **alles wat een derde
bouwt** — een apparaat, een applicatie, filament, een inlay, een drager — dat
**een audit doorstaat** tegen de eisen. Het wordt toegekend, niet geclaimd:
schriftelijke autorisatie, een vermelding in het register van gecertificeerden, en het recht om
het merk **op het product, de chip en de verpakking** te plaatsen. Het kent twee
reikwijdtes, **TigerTag Certified** en **TigerTag+ Certified**, waarvan de tweede producten dekt
waarvan de omgang met ondertekende tags is geverifieerd.

Het verschil tussen de niveaus is niet wat je product *is* — het is of
iemand het heeft gecontroleerd. Compatible zegt *“het werkt”*, op jouw woord. Certified zegt
*“we hebben het getest”*, op het onze, en het kan worden ingetrokken. Volledige criteria:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Neem contact op via de
[GitHub-organisatie](https://github.com/TigerTag-Project).

**Wij zijn een printerfabrikant — kan onze firmware TigerTag lezen?**
Ja — NTAG/NDEF-lezers zijn gewone hardware, de payloadspecificatie is openbaar
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)),
en TigerTag-lezen aan een firmware toevoegen kost **minder dan 3 dagen**.

## Community

**Waar stel ik vragen of krijg ik hulp?**
De officiële **[Discord](https://discord.gg/3Qv5TSqnJH)** — vragen, hulp,
feedback, show-and-tell. Voor bugs en technische problemen werken de GitHub-issues van
elke repo ook.

**Hoe draag ik bij?**
Documentatie: [CONTRIBUTING.md](../../CONTRIBUTING.md) hier. Code: de eigen
gids van elke repo — zie het [repositoryoverzicht](../developers/repositories.md).

**Alles is gratis — hoe steun ik het project?**
Koop de officiële chips of de TigerPOD-kit als je toch al ging kopen; draag
[de pet of de polo](https://tigersystem.io/goodies); repareer een pagina, vertaal
er een, bouw iets compatibels; en vraag je filamentmerk waarom hun spoelen
niet getagd zijn — dat laatste heeft meer gedaan dan al het andere. De volledige lijst,
inclusief wat je gerust kunt negeren, staat op
[Steun het project](../support.md).

**Kan ik alles forken en iets anders bouwen?**
Ja. MIT-/CC-gelicentieerd, bewust forkbaar — respecteer alleen het
[merkbeleid](../../TRADEMARK.md).

---

**◀ Vorige:** [Account-API](../developers/account-api.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Roadmap](../roadmap/README.md)
