---
sourceHash: e5862ee1342ae90c0f611c8239c4b34958fb835dffae1e4f1f608c941c7a25f9
sourcePath: docs/guides/filament-materials-guide.md
---

# Przewodnik po materiałach filamentowych

Praktyczne kompendium 21 materiałów: przegląd, wytrzymałość, odporność chemiczna, odporność na ciepło, uderzenia i UV, temperatury, suszenie i gęstość, zalecenia oraz typowe przykłady.

**Nazwy i liczby pochodzą z protokołu.** Każda karta nazywa materiał
dokładnie tak, jak koduje go TigerTag, wraz z jego identyfikatorem we wspólnej bazie referencyjnej —
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), udostępnianej także przez [API TigerTag](https://api.tigertag.io/api:tigertag/material/get/all). Wartości
dyszy, stołu i suszenia oraz gęstość pochodzą z tej bazy: to je
Tiger Studio wypełnia po wybraniu materiału dla szpuli. TigerTag szpuli
niesie dokładne wartości jej producenta i to one mają pierwszeństwo.
Wykończenia takie jak mat czy metal nie są w TigerTag materiałami, lecz **aspektami**,
dodawanymi do materiału bazowego — zob.
[uniwersalna tożsamość filamentu](../concepts/universal-filament-identity.md).

**Znaczniki odporności chemicznej:** <span class="ts-tag ts-tag--ok">OK</span> dobrze wytrzymuje · <span class="ts-tag ts-tag--warn">ŚREDNIO</span> słabnie lub bywa różnie · <span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszcza się lub ulega degradacji.

## Codzienne

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Codzienne</span>

| | |
|---|---|
| Materiał TigerTag | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Przegląd | Standardowy, łatwy, przemysłowo kompostowalny. |
| Wytrzymałość /10 | 6 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> IPA (prawie go nie atakuje), oleje, zimna woda<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie przy długotrwałym kontakcie, nie rozpuszcza się<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady |
| Odporność na ciepło | ~50–60 °C |
| Odporność na uderzenia | Umiarkowana |
| Odporność na UV | Słaba |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 45–55 °C |
| Suszenie | 50 °C · 8 h |
| Gęstość | 1,24 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Wentylator 100% · Możliwa duża prędkość |
| Przykłady | Prototypy, figurki, dekoracje |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Codzienne</span>

| | |
|---|---|
| Materiał TigerTag | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Przegląd | Kosmetyczne wykończenie PLA — jedwabisty połysk lub lekkie drewnopodobne zabarwienie, nie mylić z znacznie silniej wypełnionym kompozytem Wood opisanym dalej. |
| Wytrzymałość /10 | 5 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> IPA (prawie go nie atakuje), oleje, zimna woda<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie przy długotrwałym kontakcie, nie rozpuszcza się; dodatki jedwabiu/drewna chłoną wilgoć nieco szybciej niż zwykły PLA<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady |
| Odporność na ciepło | ~50–60 °C |
| Odporność na uderzenia | Niska |
| Odporność na UV | Słaba |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 45–55 °C |
| Suszenie | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Gęstość | PLA Silk 1,24 g/cm³<br/>PLA+ Silk 1,24 g/cm³<br/>PLA Wood 1,28 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Dysza 0,6 mm, jeśli zawiera cząstki · Mała prędkość · Silna przyczepność do stołu (szkło lub PEI) — pozwól całkowicie ostygnąć przed zdjęciem |
| Przykłady | Wazony, dekoracje, dzieła sztuki |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Codzienne</span>

| | |
|---|---|
| Materiał TigerTag | `PLA` · id 38219<br/>+ aspekt `Matt` · id 247 |
| Przegląd | Matowe/szlifowane wykończenie (wypełniacze mineralne), które dobrze ukrywa linie warstw. |
| Wytrzymałość /10 | 5 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> IPA (prawie go nie atakuje), oleje, zimna woda<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie przy długotrwałym kontakcie, nie rozpuszcza się<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady |
| Odporność na ciepło | ~50–55 °C |
| Odporność na uderzenia | Niska do umiarkowanej |
| Odporność na UV | Słaba |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 45–55 °C |
| Suszenie | 50 °C · 8 h |
| Gęstość | 1,24 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Umiarkowana prędkość (bardziej kruchy przy drobnych detalach) · Idealny do elementów dekoracyjnych bez połysku |
| Przykłady | Figurki, modele, elementy ekspozycyjne |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Codzienne</span>

| | |
|---|---|
| Materiał TigerTag | `PETG` · id 38256 |
| Przegląd | „Scyzoryk szwajcarski”: mocny, elastyczny, dobra odporność chemiczna i na UV. |
| Wytrzymałość /10 | 8 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> woda, alkohole, rozcieńczone kwasy, sole<br/><span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszczalniki chlorowane, stężone ketony |
| Odporność na ciepło | ~70–80 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Doskonała |
| Temp. dyszy | 220–270 °C |
| Temp. stołu | 70–75 °C |
| Suszenie | 70 °C · 8 h |
| Gęstość | 1,27 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Wentylator 20–50% · Silna przyczepność do stołu (szkło lub PEI) — pozwól całkowicie ostygnąć przed zdjęciem · Umiarkowana prędkość |
| Przykłady | Części mechaniczne, wodoszczelne pudełka, klipsy |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Codzienne</span>

| | |
|---|---|
| Materiał TigerTag | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Przegląd | Ten sam PETG, o mniejszej lepkości, by topić się dość szybko przy 300+ mm/s. |
| Wytrzymałość /10 | 8 (tak jak PETG) |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> woda, alkohole, rozcieńczone kwasy, sole<br/><span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszczalniki chlorowane, stężone ketony |
| Odporność na ciepło | ~70–80 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Doskonała |
| Temp. dyszy | 220–270 °C |
| Temp. stołu | 70–75 °C |
| Suszenie | 70 °C · 8 h |
| Gęstość | 1,27 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Przydatny tylko z hotendem „high-flow” lub drukarką ograniczoną przepływem · Bez korzyści na wolnej lub klasycznej drukarce z Bowdenem |
| Przykłady | Te same zastosowania co PETG, na szybkiej drukarce (CoreXY, jak Bambu Lab, Creality K1…) |

</div>

## Techniczne / funkcjonalne

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `TPU` · id 43518<br/>Twardość Shore nie wchodzi w skład id |
| Przegląd | Bardzo miękki, pochłania uderzenia, ale łatwo się ściska i odkształca. |
| Wytrzymałość /10 | 3 (bardzo miękki) |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> oleje, smary, paliwa<br/><span class="ts-tag ts-tag--warn">ZALEŻNIE</span> wobec rozpuszczalników, w zależności od receptury |
| Odporność na ciepło | ~55–60 °C |
| Odporność na uderzenia | Doskonała (pochłanianie) |
| Odporność na UV | Dobra |
| Temp. dyszy | 200–250 °C |
| Temp. stołu | 35–40 °C |
| Suszenie | 75 °C · 8 h |
| Gęstość | 1,21 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Wymagany ekstruder direct-drive · Prędkość 15–25 mm/s, minimalna retrakcja |
| Przykłady | Podeszwy, miękkie uchwyty, uszczelki |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `TPU` · id 43518<br/>Twardość Shore nie wchodzi w skład id |
| Przegląd | Najpopularniejszy TPU: dobry kompromis między elastycznością a łatwością druku. |
| Wytrzymałość /10 | 5 (elastyczny) |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> oleje, smary, paliwa<br/><span class="ts-tag ts-tag--warn">ZALEŻNIE</span> wobec rozpuszczalników, w zależności od receptury |
| Odporność na ciepło | ~60 °C |
| Odporność na uderzenia | Doskonała |
| Odporność na UV | Dobra |
| Temp. dyszy | 200–250 °C |
| Temp. stołu | 35–40 °C |
| Suszenie | 75 °C · 8 h |
| Gęstość | 1,21 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Zalecany direct-drive (dobrze nastrojony Bowden może działać) · Prędkość 30–45 mm/s — najłatwiejszy w druku TPU |
| Przykłady | Opony RC, etui na telefony, osłony kabli |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `TPU` · id 43518<br/>Twardość Shore nie wchodzi w skład id |
| Przegląd | Prawie sztywne tworzywo: lekka elastyczność, bardzo odporny na zmęczenie. |
| Wytrzymałość /10 | 7 (sztywny jak na TPU) |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> oleje, smary, paliwa<br/><span class="ts-tag ts-tag--warn">ZALEŻNIE</span> wobec rozpuszczalników, w zależności od receptury |
| Odporność na ciepło | ~65–70 °C |
| Odporność na uderzenia | Doskonała (znosi uderzenia bez pękania) |
| Odporność na UV | Dobra |
| Temp. dyszy | 200–250 °C |
| Temp. stołu | 35–40 °C |
| Suszenie | 75 °C · 8 h |
| Gęstość | 1,21 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Drukuje się prawie jak PETG · Bowden zazwyczaj wystarcza |
| Przykłady | Koła, elastyczne zawiasy, części antywibracyjne |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `ABS` · id 20562 |
| Przegląd | Sprawdzony od lat, odporny na ciepło. Podczas druku wydziela opary (LZO). |
| Wytrzymałość /10 | 8 |
| Odporność chemiczna | <span class="ts-tag ts-tag--danger">SŁABO</span> aceton — rozpuszcza go (podstawa wygładzania oparami), estry<br/><span class="ts-tag ts-tag--ok">OK</span> oleje, rozcieńczone zasady |
| Odporność na ciepło | ~95–100 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Słaba |
| Temp. dyszy | 240–280 °C |
| Temp. stołu | 85–90 °C |
| Suszenie | 80 °C · 8 h |
| Gęstość | 1,04 g/cm³ |
| Obudowa | Wymagana |
| Zalecenia | Wentylator wyłączony · Filtracja powietrza (LZO) |
| Przykłady | Elementy wnętrza samochodów, obudowy, korpusy |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `ASA` · id 12844 |
| Przegląd | Jak ABS, ale stworzony do pracy na zewnątrz (UV, pogoda). |
| Wytrzymałość /10 | 10 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> deszcz, sól, alkohole<br/><span class="ts-tag ts-tag--danger">SŁABO</span> aceton, mocne kwasy |
| Odporność na ciepło | ~95–100 °C |
| Odporność na uderzenia | Doskonała |
| Odporność na UV | Doskonała |
| Temp. dyszy | 240–280 °C |
| Temp. stołu | 95–100 °C |
| Suszenie | 80 °C · 8 h |
| Gęstość | 1,05 g/cm³ |
| Obudowa | Zalecana |
| Zalecenia | Susz filament · Mały wentylator |
| Przykłady | Części zewnętrzne, ogrodowe obudowy |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Przegląd | Król odporności na tarcie i zmęczenie. Bardzo higroskopijny. |
| Wytrzymałość /10 | 10 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> aceton, alkohole, węglowodory (benzyna), zasady<br/><span class="ts-tag ts-tag--danger">SŁABO</span> kwasy (ocet, HCl); pęcznieje w wodzie |
| Odporność na ciepło | ~110–115 °C |
| Odporność na uderzenia | Doskonała |
| Odporność na UV | Średnia |
| Temp. dyszy | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Temp. stołu | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Suszenie | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Gęstość | PA 1,52 g/cm³<br/>PA6 1,52 g/cm³<br/>PA11 —<br/>PA12 1,52 g/cm³ |
| Obudowa | Wymagana |
| Zalecenia | Suszenie wymagane przed drukiem i w trakcie · Klej Magigoo/PVA |
| Przykłady | Koła zębate, części narażone na ścieranie/tarcie |

</div>

### PC (Polycarbonate)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `PC` · id 30458 |
| Przegląd | Ekstremalna sztywność oraz odporność termiczna i na uderzenia. |
| Wytrzymałość /10 | 10 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> rozcieńczone kwasy, alkohole, smary<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie / pojawiają się spękania<br/><span class="ts-tag ts-tag--danger">SŁABO</span> mocne zasady (amoniak), gorąca woda (hydroliza) |
| Odporność na ciepło | ~115–130 °C |
| Odporność na uderzenia | Doskonała (szkło kuloodporne) |
| Odporność na UV | Średnia (żółknie, pozostaje mocny) |
| Temp. dyszy | 260–290 °C |
| Temp. stołu | 110–115 °C |
| Suszenie | 85 °C · 8 h |
| Gęstość | 1,3 g/cm³ |
| Obudowa | Wymagana |
| Zalecenia | Suszenie wymagane · Klej Magigoo PC |
| Przykłady | Części silników, części konstrukcyjne, formy |

</div>

### PP (Polypropylene)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Techniczne</span>

| | |
|---|---|
| Materiał TigerTag | `PP` · id 30884 |
| Przegląd | Bardzo lekki, prawie chemicznie obojętny — ale (prawie) nic się do niego nie przykleja. |
| Wytrzymałość /10 | 6 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> niemal wszystkie rozcieńczone kwasy/zasady, popularne rozpuszczalniki, oleje, paliwa |
| Odporność na ciepło | ~100 °C |
| Odporność na uderzenia | Doskonała (wielokrotne zginanie) |
| Odporność na UV | Słaba |
| Temp. dyszy | 220–250 °C |
| Temp. stołu | 55–60 °C |
| Suszenie | 60 °C · 4 h |
| Gęstość | 0,9 g/cm³ |
| Obudowa | Zalecana |
| Zalecenia | Wymagana taśma PP (nic innego nie przylega) · Szeroki brim (~2% skurczu) |
| Przykłady | Zawiasy żywe, butelki, części w kontakcie z żywnością |

</div>

## Kompozyty (wypełnione)

### Carbon fiber (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Kompozyt</span>

| | |
|---|---|
| Materiał TigerTag | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Przegląd | Cięte włókno węglowe (10–25%) w bazie PLA, PETG lub nylonu: sztywniejszy, mniejszy skurcz, matowe wykończenie. |
| Wytrzymałość /10 | 8 (sztywny, kruchy) |
| Odporność chemiczna | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oleje, zimna woda · <span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton · <span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> woda, alkohole, rozcieńczone kwasy, sole · <span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszczalniki chlorowane, stężone ketony<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> aceton, alkohole, węglowodory, zasady · <span class="ts-tag ts-tag--danger">SŁABO</span> kwasy; pęcznieje w wodzie |
| Odporność na ciepło | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Odporność na uderzenia | Niska (kruchy mimo sztywności) |
| Odporność na UV | Słaba do dobrej (zależnie od bazy) |
| Temp. dyszy | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Temp. stołu | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Suszenie | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Gęstość | PLA-CF 1,24 g/cm³<br/>PETG-CF 1,27 g/cm³<br/>PA-CF 1,52 g/cm³ |
| Obudowa | PLA-CF/PETG-CF niepotrzebna<br/>PA-CF wymagana |
| Zalecenia | Zalecana dysza 0,6 mm (minimum 0,4 mm) · PA-CF: hotend całkowicie metalowy + suszenie wymagane, trudniejszy niż PLA-CF/PETG-CF |
| Przykłady | Drony, sztywne przyrządy, mocowania o małym obciążeniu udarowym |

</div>

### Glass fiber (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Kompozyt</span>

| | |
|---|---|
| Materiał TigerTag | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>na razie brak wpisu PLA-GF |
| Przegląd | Cięte włókno szklane (10–30%) w bazie PLA, PETG lub nylonu: sztywniejszy niż baza bez wypełnienia i bardziej wytrzymały (mniej kruchy) niż odpowiednik CF — ale nieprzewodzący prądu, więc nie blokuje sygnałów radiowych tak, jak może to robić CF. |
| Wytrzymałość /10 | 7 (sztywny, lepiej znosi uderzenia niż CF) |
| Odporność chemiczna | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oleje, zimna woda · <span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton · <span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> woda, alkohole, rozcieńczone kwasy, sole · <span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszczalniki chlorowane, stężone ketony<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> aceton, alkohole, węglowodory, zasady · <span class="ts-tag ts-tag--danger">SŁABO</span> kwasy; pęcznieje w wodzie |
| Odporność na ciepło | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Odporność na uderzenia | Umiarkowana (wytrzymalszy niż CF przy tej samej zawartości włókna) |
| Odporność na UV | Słaba do dobrej (zależnie od bazy) |
| Temp. dyszy | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Temp. stołu | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Suszenie | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Gęstość | PETG-GF —<br/>PA-GF 1,52 g/cm³ |
| Obudowa | PLA-GF/PETG-GF niepotrzebna<br/>PA-GF wymagana |
| Zalecenia | Zalecana dysza 0,6 mm (minimum 0,4 mm) · PA-GF: hotend całkowicie metalowy + suszenie wymagane, trudniejszy niż PLA-GF/PETG-GF |
| Przykłady | Obudowy przepuszczające fale radiowe (anteny, sprzęt radiowy), przyrządy narzędziowe, wsporniki odporne na uderzenia |

</div>

### Metal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Kompozyt</span>

| | |
|---|---|
| Materiał TigerTag | `PLA` · id 38219<br/>+ aspekt `Metal` · id 226 |
| Przegląd | 5–60% proszku metalu (brąz, miedź, stal nierdzewna…) w bazie PLA: wygląd i ciężar metalu, poddaje się polerowaniu. |
| Wytrzymałość /10 | 5 (krucha baza) |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> IPA (prawie go nie atakuje), oleje, zimna woda<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie przy długotrwałym kontakcie, nie rozpuszcza się; proszek miedzi/brązu może utleniać się i patynować na otwartym powietrzu<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady |
| Odporność na ciepło | ~50–60 °C |
| Odporność na uderzenia | Niska (kruchy, bardzo gęsty, więc ciężki) |
| Odporność na UV | Słaba |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 45–55 °C |
| Suszenie | 50 °C · 8 h |
| Gęstość | 1,24 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Szlifuj (od 220 do 1000) i poleruj |
| Przykłady | „Metalowe” figurki/popiersia, ciężkie przedmioty dekoracyjne, trofea |

</div>

### Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Kompozyt</span>

| | |
|---|---|
| Materiał TigerTag | `PLA Wood` · id 48001 |
| Przegląd | Cząstki drewna w bazie PLA: szlifuje się, bejcuje i olejuje jak prawdziwe drewno. |
| Wytrzymałość /10 | 4 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> IPA (prawie go nie atakuje), oleje, zimna woda<br/><span class="ts-tag ts-tag--warn">ŚREDNIO</span> aceton — słabnie przy długotrwałym kontakcie, nie rozpuszcza się; chłonie wilgoć jak prawdziwe drewno (puchnie, może pleśnieć)<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężone kwasy/zasady |
| Odporność na ciepło | ~50–55 °C |
| Odporność na uderzenia | Niska |
| Odporność na UV | Słaba (szarzeje jak drewno na zewnątrz) |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 45–55 °C |
| Suszenie | 60 °C · 8 h |
| Gęstość | 1,28 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Nigdy nie zostawiaj go gorącego w bezruchu (zwęgla się i zatyka dyszę) |
| Przykłady | Dekoracje, modele, przedmioty artystyczne, ramki |

</div>

## Podpory

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Podpora</span>

| | |
|---|---|
| Materiał TigerTag | `PVA` · id 9483 |
| Przegląd | Rozpuszczalny w wodzie materiał podporowy, zgodny z PLA. |
| Wytrzymałość /10 | 4 |
| Odporność chemiczna | <span class="ts-tag ts-tag--danger">SŁABO</span> woda — rozpuszcza się natychmiast<br/><span class="ts-tag ts-tag--ok">OK</span> oleje (czasami) |
| Odporność na ciepło | ~60–70 °C |
| Odporność na uderzenia | Słaba |
| Odporność na UV | Słaba |
| Temp. dyszy | 190–240 °C |
| Temp. stołu | 30–60 °C |
| Suszenie | 85 °C · 12 h |
| Gęstość | 1,23 g/cm³ |
| Obudowa | Niepotrzebna |
| Zalecenia | Trzymaj go w suchości (bardzo higroskopijny) · Używaj w druku dwuekstruderowym |
| Przykłady | Podpory do skomplikowanych geometrii (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Podpora</span>

| | |
|---|---|
| Materiał TigerTag | `HIPS` · id 26029 |
| Przegląd | Rozpuszczalny w limonenie materiał podporowy, zgodny z ABS. Można go też używać samodzielnie. |
| Wytrzymałość /10 | 6 |
| Odporność chemiczna | <span class="ts-tag ts-tag--danger">SŁABO</span> limonen — rozpuszcza go (taki jest jego cel)<br/><span class="ts-tag ts-tag--ok">OK</span> zasady, alkohole |
| Odporność na ciepło | ~95–100 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Słaba (żółknie, staje się kruchy) |
| Temp. dyszy | 220–270 °C |
| Temp. stołu | 90–95 °C |
| Suszenie | 80 °C · 6 h |
| Gęstość | 1,03 g/cm³ |
| Obudowa | Wymagana |
| Zalecenia | Wentylator wyłączony · Rozpuszcza się w limonenie |
| Przykłady | Podpory do wydruków z ABS, lekkie prototypy |

</div>

## Wysokowydajne

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Wysokowydajne</span>

| | |
|---|---|
| Materiał TigerTag | `PEEK` · id 29815 |
| Przegląd | Szczyt drukowalnych termoplastów: ekstremalne parametry mechaniczne i termiczne. |
| Wytrzymałość /10 | 10 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> niemal wszystkie rozpuszczalniki, rozcieńczone kwasy, sterylizacja w autoklawie<br/><span class="ts-tag ts-tag--danger">SŁABO</span> stężony kwas siarkowy |
| Odporność na ciepło | ~250–260 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Średnia |
| Temp. dyszy | 390–410 °C |
| Temp. stołu | 130–145 °C |
| Suszenie | 120 °C · 6 h |
| Gęstość | 1,32 g/cm³ |
| Obudowa | Wymagana, ogrzewana powyżej 100 °C |
| Zalecenia | Suszenie wymagane |
| Przykłady | Implanty medyczne, części lotnicze |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Wysokowydajne</span>

| | |
|---|---|
| Materiał TigerTag | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Przegląd | Lotnicza żywica z klasą ognioodporności, bardzo stabilna wymiarowo. |
| Wytrzymałość /10 | 9 |
| Odporność chemiczna | <span class="ts-tag ts-tag--ok">OK</span> paliwa, oleje, większość rozpuszczalników<br/><span class="ts-tag ts-tag--danger">SŁABO</span> rozpuszczalniki chlorowane, mocne zasady |
| Odporność na ciepło | ~170–200 °C |
| Odporność na uderzenia | Dobra |
| Odporność na UV | Średnia |
| Temp. dyszy | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Temp. stołu | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Suszenie | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Gęstość | PEI-1010 1,27 g/cm³<br/>PEI-9085 — |
| Obudowa | Wymagana, ogrzewana |
| Zalecenia | Stół ze szkła borokrzemowego · Bardzo higroskopijny: suszenie wymagane |
| Przykłady | Wnętrza samolotów (klasa ognioodporności/dymu), przyrządy przemysłowe |

</div>

Wytrzymałość, oceny odporności i zalecenia to wskazówki ogólne i zależą od marki oraz partii. Temperatury, suszenie i gęstość to wartości domyślne bazy referencyjnej.

---

**▲ [Spis dokumentacji](../../README.md)**
