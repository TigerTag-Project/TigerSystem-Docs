---
sourceHash: e5862ee1342ae90c0f611c8239c4b34958fb835dffae1e4f1f608c941c7a25f9
sourcePath: docs/guides/filament-materials-guide.md
---

# Gids voor filamentmaterialen

Een praktisch naslagwerk voor 21 materialen: overzicht, sterkte, chemische bestendigheid, hitte-/slag-/uv-bestendigheid, temperaturen, drogen en dichtheid, aanbevelingen en typische voorbeelden.

**Namen en getallen komen uit het protocol.** Elke kaart noemt het materiaal
precies zoals een TigerTag het codeert, met zijn id in de gedeelde referentiedatabase —
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), ook aangeboden door de [TigerTag API](https://api.tigertag.io/api:tigertag/material/get/all). De
waarden voor nozzle, bed en drogen en de dichtheid zijn die van die database zelf: ze zijn
wat Tiger Studio invult wanneer je het materiaal voor een spoel kiest. De
TigerTag van een spoel draagt de exacte waarden van zijn fabrikant, en die gaan voor.
Afwerkingen zoals mat of metaal zijn in TigerTag geen materialen maar **aspecten**,
bovenop het basismateriaal toegevoegd — zie
[universele filamentidentiteit](../concepts/universal-filament-identity.md).

**Labels voor chemische bestendigheid:** <span class="ts-tag ts-tag--ok">OK</span> houdt goed stand · <span class="ts-tag ts-tag--warn">MATIG</span> verzwakt of varieert · <span class="ts-tag ts-tag--danger">SLECHT</span> lost op of degradeert.

## Dagelijks gebruik

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Dagelijks</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Overzicht | Standaard, makkelijk, industrieel composteerbaar. |
| Sterkte /10 | 6 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> IPA (raakt het amper aan), oliën, koud water<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt bij langdurige blootstelling, lost niet op<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen |
| Hittebestendigheid | ~50–60 °C |
| Slagvastheid | Matig |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 45–55 °C |
| Drogen | 50 °C · 8 u |
| Dichtheid | 1,24 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Ventilator 100% · Hoge snelheid mogelijk |
| Voorbeelden | Prototypes, figuurtjes, decoratie |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Dagelijks</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Overzicht | Een cosmetische PLA-afwerking — een zijdeachtige glans of een lichte houtkleurige bestuiving, niet te verwarren met het veel zwaarder gevulde Wood-composiet verderop. |
| Sterkte /10 | 5 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> IPA (raakt het amper aan), oliën, koud water<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt bij langdurige blootstelling, lost niet op; de silk-/houtkleuradditieven nemen iets sneller vocht op dan gewoon PLA<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen |
| Hittebestendigheid | ~50–60 °C |
| Slagvastheid | Laag |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 45–55 °C |
| Drogen | PLA Silk 50 °C · 8 u<br/>PLA+ Silk 50 °C · 8 u<br/>PLA Wood 60 °C · 8 u |
| Dichtheid | PLA Silk 1,24 g/cm³<br/>PLA+ Silk 1,24 g/cm³<br/>PLA Wood 1,28 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Nozzle van 0,6 mm als het deeltjes bevat · Lage snelheid · Sterke bedhechting (glas of PEI) — laat het volledig afkoelen voor je het verwijdert |
| Voorbeelden | Vazen, decoratie, kunstwerken |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Dagelijks</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA` · id 38219<br/>+ aspect `Matt` · id 247 |
| Overzicht | Matte/geschuurde afwerking (minerale vulstoffen) die laaglijnen goed verbergt. |
| Sterkte /10 | 5 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> IPA (raakt het amper aan), oliën, koud water<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt bij langdurige blootstelling, lost niet op<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen |
| Hittebestendigheid | ~50–55 °C |
| Slagvastheid | Laag tot matig |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 45–55 °C |
| Drogen | 50 °C · 8 u |
| Dichtheid | 1,24 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Matige snelheid (brozer bij fijne details) · Ideaal voor decorstukken zonder glans |
| Voorbeelden | Figuurtjes, modellen, displaystukken |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Dagelijks</span>

| | |
|---|---|
| TigerTag-materiaal | `PETG` · id 38256 |
| Overzicht | Het “Zwitserse zakmes”: sterk, flexibel, goede chemische en uv-bestendigheid. |
| Sterkte /10 | 8 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> water, alcoholen, verdunde zuren, zouten<br/><span class="ts-tag ts-tag--danger">SLECHT</span> gechloreerde oplosmiddelen, geconcentreerde ketonen |
| Hittebestendigheid | ~70–80 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Uitstekend |
| Nozzletemperatuur | 220–270 °C |
| Bedtemperatuur | 70–75 °C |
| Drogen | 70 °C · 8 u |
| Dichtheid | 1,27 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Ventilator 20–50% · Sterke bedhechting (glas of PEI) — laat het volledig afkoelen voor je het verwijdert · Matige snelheid |
| Voorbeelden | Mechanische onderdelen, waterdichte dozen, clips |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Dagelijks</span>

| | |
|---|---|
| TigerTag-materiaal | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Overzicht | Dezelfde PETG, geformuleerd met een lagere viscositeit om snel genoeg te smelten bij 300+ mm/s. |
| Sterkte /10 | 8 (gelijk aan PETG) |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> water, alcoholen, verdunde zuren, zouten<br/><span class="ts-tag ts-tag--danger">SLECHT</span> gechloreerde oplosmiddelen, geconcentreerde ketonen |
| Hittebestendigheid | ~70–80 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Uitstekend |
| Nozzletemperatuur | 220–270 °C |
| Bedtemperatuur | 70–75 °C |
| Drogen | 70 °C · 8 u |
| Dichtheid | 1,27 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Alleen nuttig op een “high-flow” hotend of een printer met beperkte flow · Geen voordeel op een trage of klassieke Bowden-printer |
| Voorbeelden | Dezelfde toepassingen als PETG, op een snelle printer (CoreXY zoals Bambu Lab, Creality K1…) |

</div>

## Technisch / functioneel

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `TPU` · id 43518<br/>Shore-hardheid maakt geen deel uit van de id |
| Overzicht | Heel zacht, absorbeert schokken, maar wordt makkelijk samengedrukt en vervormd. |
| Sterkte /10 | 3 (heel zacht) |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> oliën, vetten, brandstoffen<br/><span class="ts-tag ts-tag--warn">VARIEERT</span> tegen oplosmiddelen, afhankelijk van de formulering |
| Hittebestendigheid | ~55–60 °C |
| Slagvastheid | Uitstekend (absorptie) |
| Uv-bestendigheid | Goed |
| Nozzletemperatuur | 200–250 °C |
| Bedtemperatuur | 35–40 °C |
| Drogen | 75 °C · 8 u |
| Dichtheid | 1,21 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Direct-drive-extruder vereist · Snelheid 15–25 mm/s, minimale retractie |
| Voorbeelden | Zolen, zachte grepen, pakkingen |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `TPU` · id 43518<br/>Shore-hardheid maakt geen deel uit van de id |
| Overzicht | De meest gangbare TPU: een goede balans tussen flexibiliteit en printbaarheid. |
| Sterkte /10 | 5 (flexibel) |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> oliën, vetten, brandstoffen<br/><span class="ts-tag ts-tag--warn">VARIEERT</span> tegen oplosmiddelen, afhankelijk van de formulering |
| Hittebestendigheid | ~60 °C |
| Slagvastheid | Uitstekend |
| Uv-bestendigheid | Goed |
| Nozzletemperatuur | 200–250 °C |
| Bedtemperatuur | 35–40 °C |
| Drogen | 75 °C · 8 u |
| Dichtheid | 1,21 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Direct-drive aanbevolen (een goed afgestelde Bowden kan werken) · Snelheid 30–45 mm/s — de meest vergevingsgezinde TPU |
| Voorbeelden | RC-banden, telefoonhoesjes, kabelmantels |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `TPU` · id 43518<br/>Shore-hardheid maakt geen deel uit van de id |
| Overzicht | Bijna een stijf plastic: lichte flex, zeer vermoeiingsbestendig. |
| Sterkte /10 | 7 (stijf voor een TPU) |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> oliën, vetten, brandstoffen<br/><span class="ts-tag ts-tag--warn">VARIEERT</span> tegen oplosmiddelen, afhankelijk van de formulering |
| Hittebestendigheid | ~65–70 °C |
| Slagvastheid | Uitstekend (verdraagt klappen zonder te breken) |
| Uv-bestendigheid | Goed |
| Nozzletemperatuur | 200–250 °C |
| Bedtemperatuur | 35–40 °C |
| Drogen | 75 °C · 8 u |
| Dichtheid | 1,21 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Print bijna als een PETG · Bowden is meestal prima |
| Voorbeelden | Wielen, flexibele scharnieren, trillingsdempende onderdelen |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `ABS` · id 20562 |
| Overzicht | Al lang in gebruik, hittebestendig. Geeft tijdens het printen dampen (VOS) af. |
| Sterkte /10 | 8 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--danger">SLECHT</span> aceton — lost het op (de basis van dampgladmaken), esters<br/><span class="ts-tag ts-tag--ok">OK</span> oliën, verdunde basen |
| Hittebestendigheid | ~95–100 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 240–280 °C |
| Bedtemperatuur | 85–90 °C |
| Drogen | 80 °C · 8 u |
| Dichtheid | 1,04 g/cm³ |
| Behuizing | Vereist |
| Aanbevelingen | Ventilator uit · Luchtfiltratie (VOS) |
| Voorbeelden | Auto-interieuronderdelen, behuizingen, kasten |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `ASA` · id 12844 |
| Overzicht | Zoals ABS maar gebouwd voor buiten (uv, weer). |
| Sterkte /10 | 10 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> regen, zout, alcoholen<br/><span class="ts-tag ts-tag--danger">SLECHT</span> aceton, sterke zuren |
| Hittebestendigheid | ~95–100 °C |
| Slagvastheid | Uitstekend |
| Uv-bestendigheid | Uitstekend |
| Nozzletemperatuur | 240–280 °C |
| Bedtemperatuur | 95–100 °C |
| Drogen | 80 °C · 8 u |
| Dichtheid | 1,05 g/cm³ |
| Behuizing | Aanbevolen |
| Aanbevelingen | Droog het filament · Lage ventilator |
| Voorbeelden | Onderdelen voor buiten, tuinbehuizingen |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Overzicht | De koning van wrijvings- en vermoeiingsbestendigheid. Sterk hygroscopisch. |
| Sterkte /10 | 10 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> aceton, alcoholen, koolwaterstoffen (benzine), basen<br/><span class="ts-tag ts-tag--danger">SLECHT</span> zuren (azijn, HCl); zwelt op in water |
| Hittebestendigheid | ~110–115 °C |
| Slagvastheid | Uitstekend |
| Uv-bestendigheid | Matig |
| Nozzletemperatuur | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Bedtemperatuur | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Drogen | PA 85 °C · 12 u<br/>PA6 85 °C · 12 u<br/>PA11 80 °C · 12 u<br/>PA12 85 °C · 12 u |
| Dichtheid | PA 1,52 g/cm³<br/>PA6 1,52 g/cm³<br/>PA11 —<br/>PA12 1,52 g/cm³ |
| Behuizing | Vereist |
| Aanbevelingen | Drogen vereist voor/tijdens het printen · Magigoo/PVA-lijm |
| Voorbeelden | Tandwielen, slijtage-/wrijvingsonderdelen |

</div>

### PC (polycarbonaat)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `PC` · id 30458 |
| Overzicht | Extreme stijfheid en thermische/slagbestendigheid. |
| Sterkte /10 | 10 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> verdunde zuren, alcoholen, vetten<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt / krijgt haarscheurtjes<br/><span class="ts-tag ts-tag--danger">SLECHT</span> sterke basen (ammoniak), heet water (hydrolyse) |
| Hittebestendigheid | ~115–130 °C |
| Slagvastheid | Uitstekend (kogelvrij glas) |
| Uv-bestendigheid | Matig (vergeelt, blijft sterk) |
| Nozzletemperatuur | 260–290 °C |
| Bedtemperatuur | 110–115 °C |
| Drogen | 85 °C · 8 u |
| Dichtheid | 1,3 g/cm³ |
| Behuizing | Vereist |
| Aanbevelingen | Drogen vereist · Magigoo PC-lijm |
| Voorbeelden | Motoronderdelen, constructieonderdelen, mallen |

</div>

### PP (polypropyleen)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-materiaal | `PP` · id 30884 |
| Overzicht | Zeer licht, bijna chemisch inert — maar er blijft (bijna) niets aan plakken. |
| Sterkte /10 | 6 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> bijna alle verdunde zuren/basen, gangbare oplosmiddelen, oliën, brandstoffen |
| Hittebestendigheid | ~100 °C |
| Slagvastheid | Uitstekend (herhaald buigen) |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 220–250 °C |
| Bedtemperatuur | 55–60 °C |
| Drogen | 60 °C · 4 u |
| Dichtheid | 0,9 g/cm³ |
| Behuizing | Aanbevolen |
| Aanbevelingen | PP-tape vereist (niets anders hecht) · Brede brim (~2% krimp) |
| Voorbeelden | Living hinges, flessen, onderdelen voor voedselcontact |

</div>

## Composieten (gevuld)

### Koolstofvezel (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composiet</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Overzicht | Gehakselde koolstofvezel (10–25%) in een basis van PLA, PETG of nylon: stijver, minder krimp, matte afwerking. |
| Sterkte /10 | 8 (stijf, bros) |
| Chemische bestendigheid | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oliën, koud water · <span class="ts-tag ts-tag--warn">MATIG</span> aceton · <span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> water, alcoholen, verdunde zuren, zouten · <span class="ts-tag ts-tag--danger">SLECHT</span> gechloreerde oplosmiddelen, geconcentreerde ketonen<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> aceton, alcoholen, koolwaterstoffen, basen · <span class="ts-tag ts-tag--danger">SLECHT</span> zuren; zwelt op in water |
| Hittebestendigheid | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Slagvastheid | Laag (bros ondanks de stijfheid) |
| Uv-bestendigheid | Slecht tot goed (hangt af van de basis) |
| Nozzletemperatuur | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Bedtemperatuur | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Drogen | PLA-CF 60 °C · 8 u<br/>PETG-CF 70 °C · 8 u<br/>PA-CF 85 °C · 12 u |
| Dichtheid | PLA-CF 1,24 g/cm³<br/>PETG-CF 1,27 g/cm³<br/>PA-CF 1,52 g/cm³ |
| Behuizing | PLA-CF/PETG-CF niet nodig<br/>PA-CF vereist |
| Aanbevelingen | 0,6 mm aanbevolen (0,4 mm minimum) · PA-CF: full-metal hotend + drogen vereist, veeleisender dan PLA-CF/PETG-CF |
| Voorbeelden | Drones, stijve mallen, bevestigingen met weinig slagbelasting |

</div>

### Glasvezel (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composiet</span>

| | |
|---|---|
| TigerTag-materiaal | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>nog geen PLA-GF-item |
| Overzicht | Gehakselde glasvezel (10–30%) in een basis van PLA, PETG of nylon: stijver dan de ongevulde basis en taaier (minder bros) dan de equivalente CF-kwaliteit — maar niet elektrisch geleidend, dus het blokkeert radiosignalen niet zoals CF dat kan. |
| Sterkte /10 | 7 (stijf, slagtoleranter dan CF) |
| Chemische bestendigheid | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oliën, koud water · <span class="ts-tag ts-tag--warn">MATIG</span> aceton · <span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> water, alcoholen, verdunde zuren, zouten · <span class="ts-tag ts-tag--danger">SLECHT</span> gechloreerde oplosmiddelen, geconcentreerde ketonen<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> aceton, alcoholen, koolwaterstoffen, basen · <span class="ts-tag ts-tag--danger">SLECHT</span> zuren; zwelt op in water |
| Hittebestendigheid | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Slagvastheid | Matig (taaier dan CF bij dezelfde vezelbelading) |
| Uv-bestendigheid | Slecht tot goed (hangt af van de basis) |
| Nozzletemperatuur | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Bedtemperatuur | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Drogen | PETG-GF 70 °C · 8 u<br/>PA-GF 85 °C · 12 u |
| Dichtheid | PETG-GF —<br/>PA-GF 1,52 g/cm³ |
| Behuizing | PLA-GF/PETG-GF niet nodig<br/>PA-GF vereist |
| Aanbevelingen | 0,6 mm aanbevolen (0,4 mm minimum) · PA-GF: full-metal hotend + drogen vereist, veeleisender dan PLA-GF/PETG-GF |
| Voorbeelden | RF-transparante behuizingen (antennes, radioapparatuur), gereedschapsmallen, slagtolerante beugels |

</div>

### Metaal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composiet</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA` · id 38219<br/>+ aspect `Metal` · id 226 |
| Overzicht | 5–60% metaalpoeder (brons, koper, roestvrij staal…) in een PLA-basis: metaalachtige look en gewicht, laat zich polijsten. |
| Sterkte /10 | 5 (breekbare basis) |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> IPA (raakt het amper aan), oliën, koud water<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt bij langdurige blootstelling, lost niet op; koper-/bronspoeder kan oxideren en in open lucht een patina krijgen<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen |
| Hittebestendigheid | ~50–60 °C |
| Slagvastheid | Laag (bros, zeer dicht dus zwaar) |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 45–55 °C |
| Drogen | 50 °C · 8 u |
| Dichtheid | 1,24 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Schuren (korrel 220 → 1000) en dan polijsten |
| Voorbeelden | “Metalen” figuurtjes/bustes, zware decorobjecten, trofeeën |

</div>

### Hout

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composiet</span>

| | |
|---|---|
| TigerTag-materiaal | `PLA Wood` · id 48001 |
| Overzicht | Houtdeeltjes in een PLA-basis: laat zich schuren, beitsen en oliën als echt hout. |
| Sterkte /10 | 4 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> IPA (raakt het amper aan), oliën, koud water<br/><span class="ts-tag ts-tag--warn">MATIG</span> aceton — verzwakt bij langdurige blootstelling, lost niet op; neemt vocht op als echt hout (zwelt, kan schimmelen)<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerde zuren/basen |
| Hittebestendigheid | ~50–55 °C |
| Slagvastheid | Laag |
| Uv-bestendigheid | Slecht (grijst als hout buiten) |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 45–55 °C |
| Drogen | 60 °C · 8 u |
| Dichtheid | 1,28 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Laat het nooit heet stilstaan (verkoolt en verstopt de nozzle) |
| Voorbeelden | Decor, modellen, kunstobjecten, lijsten |

</div>

## Supports

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| TigerTag-materiaal | `PVA` · id 9483 |
| Overzicht | In water oplosbaar supportmateriaal, compatibel met PLA. |
| Sterkte /10 | 4 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--danger">SLECHT</span> water — lost direct op<br/><span class="ts-tag ts-tag--ok">OK</span> oliën (soms) |
| Hittebestendigheid | ~60–70 °C |
| Slagvastheid | Slecht |
| Uv-bestendigheid | Slecht |
| Nozzletemperatuur | 190–240 °C |
| Bedtemperatuur | 30–60 °C |
| Drogen | 85 °C · 12 u |
| Dichtheid | 1,23 g/cm³ |
| Behuizing | Niet nodig |
| Aanbevelingen | Houd het droog (zeer hygroscopisch) · Gebruik in dual extrusion |
| Voorbeelden | Supports voor complexe geometrieën (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| TigerTag-materiaal | `HIPS` · id 26029 |
| Overzicht | In limoneen oplosbaar supportmateriaal, compatibel met ABS. Ook zelfstandig bruikbaar. |
| Sterkte /10 | 6 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--danger">SLECHT</span> limoneen — oplosbaar (dat is zijn doel)<br/><span class="ts-tag ts-tag--ok">OK</span> basen, alcoholen |
| Hittebestendigheid | ~95–100 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Slecht (vergeelt, wordt bros) |
| Nozzletemperatuur | 220–270 °C |
| Bedtemperatuur | 90–95 °C |
| Drogen | 80 °C · 6 u |
| Dichtheid | 1,03 g/cm³ |
| Behuizing | Vereist |
| Aanbevelingen | Ventilator uit · Lost op in limoneen |
| Voorbeelden | Supports voor ABS-prints, lichte prototypes |

</div>

## Hoogwaardig

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Hoogwaardig</span>

| | |
|---|---|
| TigerTag-materiaal | `PEEK` · id 29815 |
| Overzicht | Het toppunt van printbare thermoplasten: extreme mechanische/thermische prestaties. |
| Sterkte /10 | 10 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> bijna alle oplosmiddelen, verdunde zuren, sterilisatie in een autoclaaf<br/><span class="ts-tag ts-tag--danger">SLECHT</span> geconcentreerd zwavelzuur |
| Hittebestendigheid | ~250–260 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Matig |
| Nozzletemperatuur | 390–410 °C |
| Bedtemperatuur | 130–145 °C |
| Drogen | 120 °C · 6 u |
| Dichtheid | 1,32 g/cm³ |
| Behuizing | Vereist, verwarmd >100 °C |
| Aanbevelingen | Drogen vereist |
| Voorbeelden | Medische implantaten, onderdelen voor de lucht- en ruimtevaart |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Hoogwaardig</span>

| | |
|---|---|
| TigerTag-materiaal | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Overzicht | Brandwerende hars uit de ruimtevaart, zeer maatvast. |
| Sterkte /10 | 9 |
| Chemische bestendigheid | <span class="ts-tag ts-tag--ok">OK</span> brandstoffen, oliën, de meeste oplosmiddelen<br/><span class="ts-tag ts-tag--danger">SLECHT</span> gechloreerde oplosmiddelen, sterke basen |
| Hittebestendigheid | ~170–200 °C |
| Slagvastheid | Goed |
| Uv-bestendigheid | Matig |
| Nozzletemperatuur | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Bedtemperatuur | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Drogen | PEI-1010 130 °C · 12 u<br/>PEI-9085 150 °C · 12 u |
| Dichtheid | PEI-1010 1,27 g/cm³<br/>PEI-9085 — |
| Behuizing | Vereist, verwarmd |
| Aanbevelingen | Bed van borosilicaatglas · Zeer hygroscopisch: drogen vereist |
| Voorbeelden | Vliegtuiginterieurs (brand-/rookclassificatie), industriële mallen |

</div>

Sterkte, bestendigheidsclassificaties en aanbevelingen zijn algemene richtlijnen en variëren per merk en batch. Temperaturen, drogen en dichtheid zijn de standaardwaarden van de referentiedatabase.

---

**▲ [Documentatie-index](../../README.md)**
