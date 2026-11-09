---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# Het `.ttag`-bestandsformaat

Het **`.ttag`-uitwisselingsbestand voor de inventaris** is een draagbare, offline momentopname van
een of meer inventarismaterialen. Het is de eenheid om je filamenten te
**back-uppen**, op een USB-stick te **meenemen** en te **delen** — tussen
accounts, tussen tools, of als kant-en-klare merk-/assortimentscollecties.

Geïntroduceerd in **Tiger Studio Manager v2.14.0** (export + import). Het formaat
is stabiel en werkt tussen apps: tools van derden, een toekomstige webplayground die
`.ttag`-bestanden genereert, en voorbereide filamentcollecties bouwen allemaal op deze
specificatie.

## Vorm van het bestand

Een `.ttag`-bestand is één **UTF-8 JSON**-document:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Veld | Betekenis |
|---|---|
| `format` / `kind` | Altijd `"tigertag"` / `"ttag"` — het identificatiepaar dat bij het importeren wordt gecontroleerd |
| `version` | Formaatversie; momenteel `1` |
| `exportedAt` | Exporttijd, **ISO 8601-tekenreeks** (bijv. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | Uid van de exporterende eigenaar — **alleen een UX-hint voor het kiezen van de importmodus, nooit een beveiligingsgrens** |
| `records[]` | Inventarisdocumenten, **letterlijk** meegenomen |
| `rfidBackups` | *Optioneel.* Gesleuteld op chip-UID; alleen aanwezig voor TigerTag+-spoelen (gecertificeerd) — de ondertekende fabrieksdump waarmee de chip wordt hersteld |

**`records[]` zijn de Firestore-inventarisdocumenten, letterlijk** — precies
`users/{uid}/inventory/{spoolId}` zoals gedocumenteerd in het
[gezaghebbende datamodel](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(gebruik het als veldenwoordenboek). Drie nuances:

- **Velden zijn schaars** — een veld wordt alleen geschreven als het op het document aanwezig is:
 `twin_tag_uid` alleen bij tweelingen, `rfidBackup: true` alleen bij TigerTag+,
 `id_product` alleen als het bekend is, enzovoort.
- **URL-velden worden door aanvallers bepaald** — `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` en `url_img*` worden
 bij het importeren gesaneerd: elk niet-http(s)-schema wordt verwijderd.
- **Rackplaatsing reist mee maar wordt niet toegepast** — `rack`, `rack_id`, `level`,
 `position` kunnen in het bestand staan maar hebben bij het importeren geen betekenis (een
 geïmporteerde spoel erft het rack van de exporteur niet).

### Verplichte versus optionele velden

Op **bestandsniveau**:

| Veld | Status |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Verplicht** — ontbrekend of niet overeenkomend = het bestand wordt geweigerd |
| `records[]`, niet leeg | **Verplicht** — een leeg bestand wordt geweigerd |
| `exportedAt`, `exportedBy` | Informatief (`exportedBy` is alleen een UX-hint) |
| `rfidBackups` | Optioneel — alleen aanwezig als TigerTag+-spoelen zijn opgenomen |

Op **recordniveau**:

| Categorie | Velden |
|---|---|
| **Verplicht** | `uid` (`TigerData_<id>` of chip-UID) · **`id_brand`** |
| Kernidentiteit (aanwezig in elk correct record) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — opgelost via de gedeelde referentiedatabase |
| Capaciteit | Genormaliseerd uit `measure` + `id_unit`: **`measure_gr` in grammen voor vaste stoffen** (bijv. `measure: 1` + kg → `measure_gr: 1000`) en **`measure_ml` in milliliters voor vloeistoffen** (harsen). Generatoren mogen `measure` + `id_unit` aanleveren; de genormaliseerde waarde is de canonieke opgeslagen waarde |
| Vaak optioneel | kleurvelden (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, weergavetekenreeksen (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Voorwaardelijk | `twin_tag_uid` (alleen tweelingen — wederkerig binnen het bestand) · `tag_index` / `tag_count` (alleen records met chip — chip *i* van *n* gelezen uit chipbyte +39, TigerTag-protocol v2.2; elk één nibble, `0` = onbekend; nooit op een record zonder chip) · `rfidBackup: true` **plus** een bijpassend `rfidBackups`-item (alleen TigerTag+) · `id_product` (alleen bekende catalogusproducten) |
| Meegenomen maar genegeerd bij het importeren | `rack`, `rack_id`, `level`, `position` |

Voor elk randgeval dat hier niet is behandeld, is **de importer van Tiger Studio de
referentie-implementatie** — generatoren van derden horen records na te streven die een
standaard Studio accepteert.

Regels die in het formaat zijn ingebakken:

- **Twee tijdstempelconventies, bewust.** De hoofdwaarde `exportedAt` is een
 **ISO 8601-tekenreeks**. Tijdstempels *binnen* `records[]` (`updatedAt`, en de
 oudere varianten `updated_at` / `last_update`) zijn **getallen in epoch-ms** —
 Firestore-timestamps worden door de serialiser omgezet zodat het bestand
 netjes serialiseert. “Repareer” de ene niet naar de andere: bestanden in de praktijk
 hebben deze vorm al.
- **Tweelingen zijn atomair.** Een materiaal met tweeling exporteert altijd **beide** kanten —
 één materiaal → twee records, gekoppeld via `twin_tag_uid`. Een halve tweeling wordt nooit
 geproduceerd.
- **Id-discipline.** Alleen `TigerData_<id>`-id's zonder chip mogen voorkomen; een oude
 `CLOUD_<id>`-id wordt bij het exporteren geweigerd.

### Containers (`container_id`, `container_weight`)

`container_id` benoemt de lege spoel waarop het filament zit.
`container_weight` is het gewicht van die lege spoel in grammen: de tarra die
een weegschaal aftrekt zodat de inventaris netto filament toont.

De id's zijn strings uit één vaste lijst die met Tiger Studio wordt
meegeleverd, [`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Elk item draagt het merk waartoe het behoort (`brandId`, hetzelfde getal als
`id_brand`) en een catalogusgewicht. De meeste zijn de eigen spoel van een
merk — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — en drie zijn generiek, voor een merk waarvan
de spoel nog niet in de lijst staat:

| `container_id` | Weergave in Tiger Studio | Catalogusgewicht |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` trekt niets af. Het klopt voor een refill die zonder
spoel wordt gewogen, en is overal elders fout: een spoel die het draagt toont
zijn brutogewicht, ongeveer 200 g meer dan het resterende filament.

`container_weight` is een **momentopname** van het moment waarop de container
werd gekozen, geen opzoeking. Een record houdt zijn waarde als de lijst
verandert, en een account kan het gewicht van een container voor zijn eigen
spoelen corrigeren (opgeslagen in `users/{uid}/containerOverrides/{id}`; de
gedeelde lijst wordt nooit gewijzigd).

Een generator die de lege spoel kent, schrijft beide velden. Een die hem niet
kent, laat ze weg in plaats van te gokken: Tiger Studio zet dan de eigen
container van het merk, of vraagt het wanneer er meerdere of geen zijn.
## Mediatype

Het canonieke mediatype is **`application/vnd.tigertag.ttag+json`** — het is
van belang waar een `.ttag` **via http(s) wordt aangeboden** (de `Content-Type` die een webplayground,
een CDN of een host van merkcollecties moet sturen).
`application/json` wordt ook geaccepteerd. Een bestand op schijf heeft geen MIME — het wordt
herkend aan de extensie `.ttag` en, doorslaggevend, aan zijn inhoud:
importers **valideren op inhoud** (`format`/`kind`/`version`), nooit alleen op MIME-header
of bestandsextensie.

## Beschikbaarheid

Export en import worden meegeleverd in **Tiger Studio v2.14.0+**. Het formaat is ontworpen
om draagbaar te zijn; andere oppervlakken kunnen het na verloop van tijd overnemen — vandaag is Studio de
referentie-implementatie.

## Wat een `.ttag` kan bevatten

Alle drie de [spoelniveaus](../concepts/universal-filament-identity.md) kunnen worden geëxporteerd
en geïmporteerd:

| Niveau | In het bestand |
|---|---|
| **TigerData** (volledig digitaal, geen chip) | Het record zelf |
| **TigerTag** (een beschreven chip) | Het record zelf |
| **TigerTag+** (gecertificeerde chip) | Het record **plus** zijn ondertekende fabrieksdump in `rfidBackups` |

## Exporteren

- **Eén spoel** — vanuit de gereedschapskist in het detailscherm van de spoel → een bestand met de naam
 `brand-material-color.ttag`.
- **Meervoudige selectie** — selecteer meerdere spoelen, knop **Export** in de werkbalk → een
 bestand met de naam `tigertag-selection-<date>.ttag`.
- Exporteren is alleen mogelijk voor de **eigen inventaris van de gebruiker**.

## Importeren — valideren → voorvertonen → accepteren

De importer accepteert **meerdere `.ttag`-bestanden tegelijk**: bladeren, een
http(s)-link plakken, of slepen en neerzetten ergens op het venster.

1. **Valideren.** Elk bestand moet het paar `format`/`kind` bevatten en
 `version ≤ 1`. Een bestand dat geen `.ttag` is, een nieuwere versie of een leeg bestand wordt
 geweigerd. Elk **record** moet daarna de volledige chippayload bevatten — zie
 *Verplichte velden* hieronder.
2. **Saneren.** De inhoud van het bestand is onbetrouwbare invoer: URL-velden die niet
 http(s) zijn, worden verwijderd; kleur-, gewichts- en TD-waarden worden begrensd tot geldige bereiken.
3. **Voorvertonen.** Elk materiaal wordt getoond in een voorbeeldtabel met een
 **aanvinkvakje om op te nemen** per materiaal.
4. **Accepteren** in een van twee modi — vooraf gesuggereerd op basis van `exportedBy`, vrij
 te wisselen:

|| **Herstellen** | **Importeren** |
|---|---|---|
| Doel | Hetzelfde account / een echt herstel | De materialen van iemand anders overnemen |
| Record-id's | Behouden — **letterlijk** geschreven onder de oorspronkelijke id's | **Nieuwe** id's — elk record wordt een nieuwe `TigerData_`-spoel zonder chip, eigendom van de importeur |
| Chipstatus | Behouden — elke `rfidList`-back-up hersteld | Vervalt — de kopie heeft geen chip: `id_tigertag` verwijderd, `rfidBackup:false`, back-ups verworpen (een ondertekende dump is gebonden aan een chip die de importeur niet heeft) |
| Product | Behouden | **Behouden** als `id_product` een echt catalogus-id is (niet `0`, niet `0xFFFFFFFF`), zodat een TigerData+ een TigerData+ blijft en een TigerTag+ aankomt als de TigerData+ van hetzelfde product; al het andere wordt op `0xFFFFFFFF` (niet ingesteld) gezet. Vóór Tiger Studio v2.51.1 was het altijd niet ingesteld, zodat een TigerData+ aankwam als een gewone TigerData |
| Gewicht | Zoals vastgelegd | Teruggezet naar volle capaciteit |
| Tweelingen | Zoals vastgelegd | `twin_tag_uid` opnieuw toegewezen via de nieuwe id's |

### Verplichte velden — een record moet een chip kunnen maken

Een `.ttag` bestaat om **TigerTag- / TigerTag+-chips te maken**. Een record dat er geen
kan opleveren, is geen gedeeltelijk record maar een onbruikbaar record — dus sinds Tiger
Studio **2.15.0** weigert de importer het meteen, in plaats van een spoel te importeren
die er goed uitziet en stilletjes fout is.

Een record wordt alleen geaccepteerd als het **`uid` plus deze 24 numerieke velden** bevat,
elk aanwezig en eindig (`null` en `""` tellen **niet** als aanwezig — pas op,
`Number(null)` is `0`):

| Groep | Velden |
|---|---|
| Identiteits-id's | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Hoeveelheid | `measure` |
| Kleur | `color_r`, `color_g`, `color_b`, `color_a` |
| Payload per type | `data1` … `data7` |
| Stempel | `timestamp` |

Plus **`id_tigertag`, maar alleen als het record een chip heeft.** Dat veld benoemt de
chipversie in `id_version.json`, waar precies vier waarden zijn toegestaan — `0`
RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init, `3155151767`
TigerTag+. Een record zonder chip (`uid` die met `TigerData_` begint of het oude `CLOUD_`)
heeft geen chip en dus geen versie, dus het **mag het veld helemaal niet bevatten**;
het wordt voor het eerst geschreven wanneer een echte chip wordt geprogrammeerd. Verzin er nooit een
waarde voor, en los er nooit een op zonder te controleren of het record een chip heeft.

Al het andere in een record — namen, afbeeldingen, prijs, notities, rackpositie — is
**verrijking**: prettig om mee te nemen, nooit verplicht.

**Een materiaal is atomair.** Een tweelingpaar slaagt alleen als *beide* records slagen; een
half geldige tweeling wordt in zijn geheel geweigerd, omdat het importeren van één kant van een paar
een spoel zou creëren waarvan de partner nooit geschreven kan worden.

**Weigeringen worden geteld en getoond, nooit stil.** De voorvertoning meldt hoeveel
materialen zijn afgewezen, zodat een slechte export zichtbaar is in plaats van stilletjes de helft
van de inhoud te verliezen. Wie `.ttag`-bestanden schrijft, moet tegen deze lijst valideren
voordat een bestand naar gebruikers gaat.

## Volledig voorbeeld

Een getrouwe, geanonimiseerde export van een meervoudige selectie — één TigerData, één tweelingpaar
(wederkerige `twin_tag_uid`), één TigerTag+ waarvan de chipinhoud een back-up heeft:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Het voorbeeld lezen: het eerste record heeft geen chip (een `TigerData_`-id); de
volgende twee zijn een tweelingpaar — hetzelfde materiaal, wederkerige `twin_tag_uid`, altijd
samen geëxporteerd; het laatste is een TigerTag+ (`rfidBackup: true`) waarvan de ondertekende
fabrieksdump in `rfidBackups` staat onder zijn chip-UID.

## Beveiligings- / vertrouwensmodel

Een `.ttag`-bestand is **onbetrouwbare invoer**. Elk record wordt bij het importeren gesaneerd
(zie hierboven). `exportedBy` selecteert alleen vooraf de modus in de UI — de echte
autorisatiegrens zijn de **Firestore Security Rules**. Beschouw de inhoud van een bestand nooit
als gezaghebbend voor identiteit of eigendom.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Universele filamentidentiteit](../concepts/universal-filament-identity.md), [Inventaris en cloudsynchronisatie](../concepts/inventory-and-cloud-sync.md), [Overzicht voor ontwikkelaars](./README.md)
