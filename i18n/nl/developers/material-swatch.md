---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# De materiaalswatch — de officiële conventie

De kleur van een materiaal wordt als gegevens opgeslagen, niet als afbeelding. De **swatch** is die
data getekend: de gekleurde vorm die het materiaal vertegenwoordigt in een lijst, op een
kaart, in een rackslot, naast zijn naam. Deze pagina is de **officiële conventie van
TigerSystem** om hem te maken, zodat hetzelfde materiaal overal dezelfde swatch toont
— in Tiger Studio, in de mobiele app, op het web, in je eigen integratie.

**“Materiaal”, niet “spoel”, is bewust.** Een TigerTag identificeert een filamentspoel, maar
ook een accessoire, een reserveonderdeel, een hars — en de producttypen die het
protocol nog moet krijgen. De conventie is geschreven tegen `id_type` in het
algemeen: niets hieronder leest het producttype, dus een swatch wordt op dezelfde
manier gemaakt, wat het materiaal ook is.

Ze is normatief. Een bicolor filament dat in de ene app een zachte splitsing toont en in een andere een harde rand of een volledige
verloop, is een bug in de app die van deze pagina afweek
— geen kwestie van smaak. Als je een regel niet exact kunt reproduceren (een platform
zonder conisch verloop bijvoorbeeld), implementeer dan het dichtstbijzijnde equivalent dat beschreven staat in
[Platforms zonder CSS](#platforms-zonder-css) en zeg dat erbij; verzin geen ander
beeld.

- **Conventieversie:** 1.2 — bicolor is een **zachte splitsing van 135°** (effen kleuren, 20 % gemengde
 naad) en een **Tricolor-uiterlijk is een conische sweep** (tenzij ook Rainbow) (1.1 tekende bicolor als harde diagonale splitsing en tricolor als camembert; 1.0
 splitste bicolor verticaal)
- **Referentierenderer:** [`material-swatch-playground.html`](./material-swatch-playground.html) —
 open hem in elke browser, zonder server, zonder afhankelijkheid. Elk geval, elke boxvorm,
 live kleurkiezers en de exacte CSS die hij produceert.

---

## Vier vormen, en alleen vier

| Vorm | Wanneer | Geometrie |
|---|---|---|
| **Zachte splitsing** | **Twee of drie** scherp afgebakende kleuren — bicolor, of drie kleuren zonder Tricolor-uiterlijk | N gelijke banden langs de **135°**-as, eerste kleur **linksboven**; elke kleur blijft **effen**, en alleen een naad van **20 %** van de diagonaal (`SPLIT_BLEND`) gecentreerd op elke grens wordt gemengd |
| **Verloop** | Rainbow, en het door de catalogus gedeclareerde `gradient`-type | Een vloeiend lineair verloop onder **135°**, gelijkmatig verdeelde stops — wijzend naar rechtsonder, zodat de eerste kleur linksboven zit |
| **Camembert** (taart) | **Vier of meer** scherp afgebakende kleuren — elke lijst met N ≥ 4 | N gelijke conische sectoren, eerste kleur beginnend op **12 uur**, **met de klok mee** |
| **Conische sweep** | Een **Tricolor**-uiterlijk (id 24) dat niet ook Rainbow is, en het door de catalogus gedeclareerde `conic_gradient` | Een vloeiend conisch verloop vanaf **12 uur**, met de klok mee, eindigend op de eerste kleur — het kleurenwiel |

Kortom: **twee of drie harde kleuren maken een zachte splitsing, vier of meer maken een
camembert, vloeiende kleuren maken een verloop, en een Tricolor-uiterlijk draait uit tot een conische
sweep** — en er is precies één hoek in het
hele systeem, 135°, gedeeld door de zachte splitsing en het verloop.

**Bicolor en tricolor zijn een zachte splitsing — de as van het verloop, de helderheid van de splitsing.**
Dezelfde as en volgorde als een verloop (eerste kleur linksboven), maar elke kleur blijft
effen over zijn band en slechts een naad van **20 %** wordt bij elke grens gemengd. Met
`seg = 100 / N` en `h = SPLIT_BLEND / 2 = 10` loopt kleur *i* van
`i·seg + h` (0 voor de eerste) tot `(i+1)·seg − h` (100 voor de laatste).
Implementeer het één keer, in de functie die een lijst kleuren splitst (N ≤ 3 →
zachte splitsing, N ≥ 4 → taart), zodat elke aanroeper het krijgt; teken het nooit gespiegeld.

Waarom een zachte splitsing voor twee of drie kleuren: een harde rand las nog steeds als twee of
drie afzonderlijke objecten — op een miniatuur, en nog meer op het kleurkader
rond een productfoto, waar de foto het midden verborg en losse
gekleurde balken overliet. Een volledig verloop loste dat op maar waste de kleuren uit, zodat geen van beide
de ware kleur leest. De zachte splitsing houdt elke kleur effen en mengt alleen
de naad: één meerkleurig materiaal, ware kleuren, op elke boxvorm. 20 % is
op het oog gekozen over alle oppervlakken (een bredere naad laat de middelste
kleur van een tricolor bijna geen effen band). Waarom een taart vanaf vier
kleuren: vier of meer banden langs één diagonaal worden te smal om te lezen, terwijl de grenzen
van sectoren hoekig en herkenbaar blijven — gemeten vanuit het midden van de box, zodat N
sectoren leesbaar blijven, wat de beeldverhouding van de box ook is. Waarom 135°: het is de enige
hoek van het systeem, gedeeld door de zachte splitsing en elk verloop.
Waarom een conische sweep voor een Tricolor-uiterlijk: drie banden op één diagonaal laten de
middelste kleur een dun reepje; een kleurenwiel geeft alle drie hetzelfde gewicht en
leest meteen als “drie kleuren”, op elke grootte.

---

## Waar de gegevens vandaan komen

Twee lagen voeden de renderer, en ze zijn niet hetzelfde.

### De chip — hoogstens drie kleuren

Een TigerTag bevat **drie kleurslots en een uiterlijk**. Niets anders: er is
geen verlooptype op de chip, en dat is er nooit geweest.

| Veld | Type | Betekenis |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alfa — **genegeerd bij het renderen**; meng een materiaalkleur nooit |
| `id_aspect1` / `id_aspect2` | `int` | Elk slot kan het kleuruiterlijk bevatten |

Drie uiterlijk-id's veranderen de vorm (hun referentietabel bevat ook een
gezaghebbende `color_count`):

| id | label | `color_count` | Vorm |
|---|---|---|---|
| `252` | Bicolor | 2 | **Zachte splitsing**, 135° |
| `24` | Tricolor | 3 | **Conische sweep** |
| `145` | Rainbow | 3 | Verloop, 135° |

Elk ander uiterlijk (`Silk`, `Matt`, `Glitter`, …) heeft `color_count` ≤ 1 en heeft
geen invloed op de vorm. **Vergelijk op de id, niet op het label** — labels zijn weergave-
tekenreeksen en kunnen worden vertaald.

> **Tel nooit de slots om te raden hoeveel kleuren er zijn.** Een chipdocument
> bevat altijd alle drie de slots: ontbrekende componenten worden als `0` opgeslagen,
> dus slots 2 en 3 lezen als zuiver zwart bij een monomateriaal. **Het aantal kleuren
> komt uit het uiterlijk, nooit uit de slots.**

### De catalogus — een rijkere beschrijving, alleen in de cloud

Een product uit de officiële catalogus kan zijn kleur nauwkeuriger beschrijven
dan een chip. Deze twee velden bestaan **alleen** in cloud-/productgegevens — ze worden
nooit naar een chip geschreven:

| Veld | Type | Betekenis |
|---|---|---|
| `online_color_list` | `string[]` | Geordende kleuren, `RRGGBB` of `RRGGBBAA`, `#` optioneel. De volgorde is betekenisvol: index 0 is de eerste sector / eerste stop. |
| `online_color_type` | `string` | Renderinstructie: `mono`, `multi`, `gradient`, `conic_gradient`. Elke andere waarde, of een ontbrekende, wordt behandeld als `multi`. |

Wanneer beide lagen aanwezig zijn, **wint de catalogus** — die is de nauwkeurigere
beschrijving van hetzelfde product.

---

## De beslisladder

Evalueer **in deze volgorde, de eerste treffer wint**. De volgorde codeert een prioriteit: de
catalogus gaat voor de chip, een expliciet kleurtype gaat voor een gok, en het
uiterlijk spreekt pas als er geen onlinekleurenlijst is.

Laat `LIST` = `online_color_list` na [normalisatie](#normalisatie), `TYPE` =
`online_color_type`, `SLOTS` = de niet-null chipslots.

| # | Voorwaarde | Resultaat |
|---|---|---|
| 1 | `LIST ≥ 2` en `TYPE == "conic_gradient"` | Vloeiende conische sweep, eindigend op de eerste kleur |
| 2 | `LIST ≥ 2` en `TYPE == "gradient"` | Verloop — ook bij twee of drie kleuren; de catalogus vroeg om een vloeiend verloop, dus het wordt geen zachte splitsing |
| 3 | `LIST ≥ 3`, uiterlijk **Tricolor**, niet **Rainbow** | **Conische sweep** van `LIST` |
| 3b | `LIST ≥ 2` | **Zachte splitsing** van `LIST` bij 2 of 3 kleuren, **camembert** van `LIST.length` sectoren bij 4 of meer |
| 4 | `LIST == 1` | Effen kleur — **gaat voor de chipkleur** |
| 5 | uiterlijk **Rainbow** *en* **Tricolor** | Verloop, 3 stops |
| 6 | uiterlijk **Rainbow** *en* **Bicolor** | Verloop, 2 stops |
| 7 | uiterlijk **Rainbow** | Verloop over `SLOTS`; 1 slot → effen; 0 slots → de standaard met 6 kleuren |
| 8 | uiterlijk **Tricolor** | **Conische sweep** over `SLOTS` (slot 3 ontbreekt → een zachte splitsing met 2 kleuren over slots 1 en 2, slot 1 wordt niet herhaald) |
| 9 | uiterlijk **Bicolor** | **Zachte splitsing**, 135°, over slots 1 en 2 |
| 10 | anders | Effen slot 1; helemaal niets → `#1c2030` |

Standaardwaarden wanneer een uiterlijk geen bruikbare kleur bevat:

| Geval | Standaardwaarden |
|---|---|
| Rainbow, geen kleuren | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (slot 3 ontbreekt → zachte splitsing met 2 kleuren, slot 1 wordt niet herhaald) |
| Bicolor | `#cccccc #ffffff` |
| Niets | `#1c2030` |

---

## Normalisatie

Toegepast op elk item van `online_color_list` voordat de ladder wordt geëvalueerd:

1. Trim, verwijder een voorafgaande `#`.
2. Bij 8 tekens (`RRGGBBAA`), **houd de eerste 6** — alfa wordt weggelaten, nooit
 gemengd.
3. Accepteer alleen `^[0-9a-fA-F]{6}$`. **Al het andere wordt uit de lijst verwijderd**,
 niet vervangen door een standaard — een misvormd item mag nooit stilletjes zwart worden.
4. Voeg `#` weer toe voor de uitvoer.

Het verwijderen gebeurt *voordat* de ladder draait, dus `["ff0000", "oops"]` is een
lijst met **één kleur** (regel 4), geen taart met twee sectoren.

Chipslots worden omgezet naar `#` + twee hexcijfers per component, alleen als alle drie de
componenten getallen zijn.

---

## De exacte uitdrukkingen

Met `c1…cN` de genormaliseerde kleuren, `step = 360 / N`, `seg = 100 / N` en
`SPLIT_BLEND = 20`:

```css
/* Soft split — 2 or 3 hard colours: rule 3 with 2-3 colours, rules 8-9.
   Each colour solid over its band, a 20 % blended seam at each boundary. */
linear-gradient(135deg, c1 0% 40%, c2 60% 100%)                        /* N = 2 */
linear-gradient(135deg, c1 0% 23.33%, c2 43.33% 56.67%, c3 76.67% 100%) /* N = 3 */

/* Ramp — rainbow and a declared gradient: rules 2, 5-7 */
linear-gradient(135deg, c1, c2, …)

/* Camembert — four or more hard colours: rule 3 with ≥ 4 colours */
conic-gradient(c1 0deg <step>deg, c2 <step>deg <2·step>deg, …)

/* Catalogue-declared conic gradient — rule 1 (first colour repeated to close) */
conic-gradient(from 0deg, c1, c2, …, c1)

/* Mono — rules 4, 10 */
# RRGGBB
```

### Testvectoren

Elke implementatie moet deze exact reproduceren.

| Invoer | Verwacht |
|---|---|
| `{online_color_list:["FF5722"]}` | `#FF5722` |
| `{online_color_list:["000000FF"]}` | `#000000` |
| `{online_color_list:["e02424","2463e0"]}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b"]}` | `linear-gradient(135deg, #e02424 0% 23.33%, #2463e0 43.33% 56.67%, #22a06b 76.67% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b","f0a020"]}` | `conic-gradient(#e02424 0deg 90deg, #2463e0 90deg 180deg, #22a06b 180deg 270deg, #f0a020 270deg 360deg)` |
| `{online_color_list:["e02424","2463e0"],online_color_type:"gradient"}` | `linear-gradient(135deg, #e02424, #2463e0)` |
| `{color_r:224,color_g:36,color_b:36,color_r2:36,color_g2:99,color_b2:224,id_aspect2:252}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{id_aspect1:145}` | `linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00cc00, #0000ff, #8b00ff)` |
| `{}` | `#1c2030` |

---

## Het TigerTag-watermerk

Elk oppervlak dat een materiaalkleur toont **zonder** productfoto draagt het
TigerTag-logo erbovenop, als watermerk.

| Regel | Waarde |
|---|---|
| Positie | Rechterbovenhoek van de tegel |
| Dekking | **1** — altijd, op elk oppervlak |
| Grootte | Een **percentage** van de tegel, nooit een vaste pixelgrootte, zodat het met het oppervlak meeschaalt |
| Variant | **Donkere achtergrond → het effen WITTE logo. Lichte achtergrond → het ZWARTE logo met contour.** |

De twee logobestanden zijn **geen inkleurbare varianten van elkaar** — elk wordt geleverd
met zijn eigen ingebakken vulling, en de regel bepaalt welk *bestand* je gebruikt. Pas nooit
een CSS-filter, maskerkleur of dekking toe om de ene voor de andere te laten doorgaan: het
artwork met contour is een andere tekening, niet het witte omgekeerd.

**De variant kiezen** — neem de relatieve luminantie van de **eerste kleur** van de
geproduceerde uitdrukking:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Als je die kleur haalt door de eerste `#`-hex in een CSS-tekenreeks te matchen, match dan
**eerst 8 cijfers**, dan 6, dan 4, dan 3. Anders matcht een `#RRGGBBAA` zijn
eerste zes cijfers, mislukt de woordgrens die erop volgt, en gaat de hele match
verloren — wat als “licht” leest en een zwart logo op een zwarte spoel zet. Laat de
alfa weg en breid de verkorte notatie uit voordat je rekent.

---

## Platforms zonder CSS

Flutter, SwiftUI, Android of elke canvasrenderer implementeert dezelfde drie vormen.
Hoeken worden altijd op de CSS-manier gemeten: **0° wijst omhoog, hoeken nemen toe
met de klok mee.**

- **Camembert** — een sweepverloop gecentreerd op de tegel, beginnend op 12 uur,
 met de klok mee, met harde stops op elke `k · 360/N` graden. Flutter:
 `SweepGradient` met `transform: GradientRotation(-pi/2)`. Benader het niet
 met taartpunten die als paden zijn getekend, tenzij de tegel vierkant is — de grenzen
 van de sectoren moeten de box volgen. Alleen voor **vier of meer** harde kleuren.
- **Zachte splitsing** — een lineair verloop van de **linkerbovenhoek** naar de
 **rechteronderhoek** met de stops hierboven: elke kleur effen gehouden, een naad van 20 %
 gemengd bij elke grens. Gebruikt voor **twee of drie** harde kleuren (bicolor,
 tricolor). Flutter: `LinearGradient(begin: Alignment.topLeft, end:
 Alignment.bottomRight)` met `colors` verdubbeld en `stops` `[0, .4, .6, 1]`
 (N = 2) of `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Verloop** — dezelfde as, gelijkmatig verdeelde stops, zonder effen deel. Gebruikt voor rainbow en
 voor het door de catalogus gedeclareerde `gradient`-type. Flutter: `Alignment.topLeft →
 Alignment.bottomRight`.

---

## De conventie wijzigen

Deze pagina is de bron. Een wijziging hier is een wijziging aan elk TigerSystem-oppervlak:
pas hem eerst aan, verhoog de conventieversie, breng dan de implementaties weer op één lijn
en controleer ze tegen de referentierenderer.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [De TigerTag-chip](../concepts/tigertag-chip.md), [Het `.ttag`-formaat](./ttag-format.md), [Overzicht voor ontwikkelaars](./README.md)
