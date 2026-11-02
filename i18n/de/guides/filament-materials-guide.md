---
sourceHash: e5862ee1342ae90c0f611c8239c4b34958fb835dffae1e4f1f608c941c7a25f9
sourcePath: docs/guides/filament-materials-guide.md
---

# Leitfaden zu Filamentmaterialien

Ein Nachschlagewerk für 21 Materialien: Überblick, Festigkeit, chemische Beständigkeit, Hitze-/Schlag-/UV-Beständigkeit, Temperaturen, Trocknung und Dichte, Empfehlungen und typische Beispiele.

**Namen und Zahlen stammen aus dem Protokoll.** Jede Karte nennt das Material
genau so, wie ein TigerTag es codiert, mit seiner ID in der gemeinsamen Referenzdatenbank –
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), auch über die [TigerTag-API](https://api.tigertag.io/api:tigertag/material/get/all) bereitgestellt. Die
Werte für Düse, Druckbett und Trocknung sowie die Dichte stammen aus dieser Datenbank: Sie
trägt Tiger Studio ein, wenn du das Material für eine Spule auswählst. Der
TigerTag einer Spule trägt die exakten Werte ihres Herstellers, und diese haben Vorrang.
Oberflächen wie Matt oder Metall sind in TigerTag keine Materialien, sondern **Optiken**,
die auf das Basismaterial aufgesetzt werden – siehe
[universelle Filamentidentität](../concepts/universal-filament-identity.md).

**Tags zur chemischen Beständigkeit:** <span class="ts-tag ts-tag--ok">OK</span> hält gut · <span class="ts-tag ts-tag--warn">BEDINGT</span> wird schwächer oder schwankt · <span class="ts-tag ts-tag--danger">SCHLECHT</span> löst sich auf oder zersetzt sich.

## Alltag

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Alltag</span>

| | |
|---|---|
| TigerTag-Material | `PLA` · ID 38219<br/>`PLA+` · ID 46591 |
| Überblick | Standard, einfach, industriell kompostierbar. |
| Festigkeit /10 | 6 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> IPA (greift es kaum an), Öle, kaltes Wasser<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird bei längerer Einwirkung schwächer, löst sich nicht auf<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen |
| Hitzebeständigkeit | ~50–60 °C |
| Schlagfestigkeit | Mittel |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 45–55 °C |
| Trocknung | 50 °C · 8 h |
| Dichte | 1.24 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Lüfter 100 % · Hohe Geschwindigkeit möglich |
| Beispiele | Prototypen, Figuren, Dekoration |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Alltag</span>

| | |
|---|---|
| TigerTag-Material | `PLA Silk` · ID 10602<br/>`PLA+ Silk` · ID 8345<br/>`PLA Wood` · ID 48001 |
| Überblick | Eine kosmetische PLA-Oberfläche – ein seidiger Glanz oder ein leichter Holzton-Hauch, nicht zu verwechseln mit dem viel stärker gefüllten Wood-Verbundwerkstoff weiter unten. |
| Festigkeit /10 | 5 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> IPA (greift es kaum an), Öle, kaltes Wasser<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird bei längerer Einwirkung schwächer, löst sich nicht auf; die Silk-/Holzton-Zusätze nehmen etwas schneller Feuchtigkeit auf als reines PLA<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen |
| Hitzebeständigkeit | ~50–60 °C |
| Schlagfestigkeit | Gering |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 45–55 °C |
| Trocknung | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Dichte | PLA Silk 1.24 g/cm³<br/>PLA+ Silk 1.24 g/cm³<br/>PLA Wood 1.28 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | 0,6-mm-Düse, wenn es Partikel enthält · Langsame Geschwindigkeit · Starke Betthaftung (Glas oder PEI) – vor dem Entfernen vollständig abkühlen lassen |
| Beispiele | Vasen, Dekoration, Kunstobjekte |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Alltag</span>

| | |
|---|---|
| TigerTag-Material | `PLA` · ID 38219<br/>+ Optik `Matt` · ID 247 |
| Überblick | Matte/geschliffene Oberfläche (mineralische Füllstoffe), die Schichtlinien gut verbirgt. |
| Festigkeit /10 | 5 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> IPA (greift es kaum an), Öle, kaltes Wasser<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird bei längerer Einwirkung schwächer, löst sich nicht auf<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen |
| Hitzebeständigkeit | ~50–55 °C |
| Schlagfestigkeit | Gering bis mittel |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 45–55 °C |
| Trocknung | 50 °C · 8 h |
| Dichte | 1.24 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Mäßige Geschwindigkeit (spröder bei feinen Details) · Ideal für Dekostücke ohne Glanz |
| Beispiele | Figuren, Modelle, Ausstellungsstücke |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Alltag</span>

| | |
|---|---|
| TigerTag-Material | `PETG` · ID 38256 |
| Überblick | Das „Schweizer Taschenmesser“: stabil, flexibel, gute chemische und UV-Beständigkeit. |
| Festigkeit /10 | 8 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Wasser, Alkohole, verdünnte Säuren, Salze<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> chlorierte Lösungsmittel, konzentrierte Ketone |
| Hitzebeständigkeit | ~70–80 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Ausgezeichnet |
| Düsentemperatur | 220–270 °C |
| Betttemperatur | 70–75 °C |
| Trocknung | 70 °C · 8 h |
| Dichte | 1.27 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Lüfter 20–50 % · Starke Betthaftung (Glas oder PEI) – vor dem Entfernen vollständig abkühlen lassen · Mäßige Geschwindigkeit |
| Beispiele | Mechanische Teile, wasserdichte Boxen, Clips |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Alltag</span>

| | |
|---|---|
| TigerTag-Material | `PETG HS` · ID 7649<br/>`PETG HF` · ID 57469 |
| Überblick | Dasselbe PETG, mit geringerer Viskosität formuliert, damit es bei 300+ mm/s schnell genug schmilzt. |
| Festigkeit /10 | 8 (wie PETG) |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Wasser, Alkohole, verdünnte Säuren, Salze<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> chlorierte Lösungsmittel, konzentrierte Ketone |
| Hitzebeständigkeit | ~70–80 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Ausgezeichnet |
| Düsentemperatur | 220–270 °C |
| Betttemperatur | 70–75 °C |
| Trocknung | 70 °C · 8 h |
| Dichte | 1.27 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Nur sinnvoll an einem „High-Flow“-Hotend oder einem durchflussbegrenzten Drucker · Kein Vorteil an einem langsamen oder klassischen Bowden-Drucker |
| Beispiele | Dieselben Einsätze wie PETG, an einem schnellen Drucker (CoreXY wie Bambu Lab, Creality K1…) |

</div>

## Technisch / funktional

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `TPU` · ID 43518<br/>Die Shore-Härte ist nicht Teil der ID |
| Überblick | Sehr weich, nimmt Stöße auf, lässt sich aber leicht eindrücken und verformen. |
| Festigkeit /10 | 3 (sehr weich) |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Öle, Fette, Kraftstoffe<br/><span class="ts-tag ts-tag--warn">VARIIERT</span> gegenüber Lösungsmitteln je nach Formulierung |
| Hitzebeständigkeit | ~55–60 °C |
| Schlagfestigkeit | Ausgezeichnet (Absorption) |
| UV-Beständigkeit | Gut |
| Düsentemperatur | 200–250 °C |
| Betttemperatur | 35–40 °C |
| Trocknung | 75 °C · 8 h |
| Dichte | 1.21 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Direct-Drive-Extruder erforderlich · Geschwindigkeit 15–25 mm/s, minimaler Rückzug |
| Beispiele | Sohlen, weiche Griffe, Dichtungen |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `TPU` · ID 43518<br/>Die Shore-Härte ist nicht Teil der ID |
| Überblick | Das gebräuchlichste TPU: ein guter Kompromiss aus Flexibilität und Druckbarkeit. |
| Festigkeit /10 | 5 (flexibel) |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Öle, Fette, Kraftstoffe<br/><span class="ts-tag ts-tag--warn">VARIIERT</span> gegenüber Lösungsmitteln je nach Formulierung |
| Hitzebeständigkeit | ~60 °C |
| Schlagfestigkeit | Ausgezeichnet |
| UV-Beständigkeit | Gut |
| Düsentemperatur | 200–250 °C |
| Betttemperatur | 35–40 °C |
| Trocknung | 75 °C · 8 h |
| Dichte | 1.21 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Direct Drive empfohlen (ein gut eingestellter Bowden kann funktionieren) · Geschwindigkeit 30–45 mm/s – das nachsichtigste TPU |
| Beispiele | RC-Reifen, Handyhüllen, Kabelummantelung |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `TPU` · ID 43518<br/>Die Shore-Härte ist nicht Teil der ID |
| Überblick | Fast ein starrer Kunststoff: leichte Flexibilität, sehr ermüdungsfest. |
| Festigkeit /10 | 7 (starr für ein TPU) |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Öle, Fette, Kraftstoffe<br/><span class="ts-tag ts-tag--warn">VARIIERT</span> gegenüber Lösungsmitteln je nach Formulierung |
| Hitzebeständigkeit | ~65–70 °C |
| Schlagfestigkeit | Ausgezeichnet (hält Schläge aus, ohne zu brechen) |
| UV-Beständigkeit | Gut |
| Düsentemperatur | 200–250 °C |
| Betttemperatur | 35–40 °C |
| Trocknung | 75 °C · 8 h |
| Dichte | 1.21 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Druckt sich fast wie ein PETG · Bowden in der Regel in Ordnung |
| Beispiele | Räder, flexible Scharniere, Schwingungsdämpfer |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `ABS` · ID 20562 |
| Überblick | Seit langem bewährt, hitzebeständig. Setzt beim Drucken Dämpfe (VOCs) frei. |
| Festigkeit /10 | 8 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--danger">SCHLECHT</span> Aceton – löst es auf (die Grundlage des Dampfglättens), Ester<br/><span class="ts-tag ts-tag--ok">OK</span> Öle, verdünnte Basen |
| Hitzebeständigkeit | ~95–100 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 240–280 °C |
| Betttemperatur | 85–90 °C |
| Trocknung | 80 °C · 8 h |
| Dichte | 1.04 g/cm³ |
| Gehäuse | Erforderlich |
| Empfehlungen | Lüfter aus · Luftfilterung (VOCs) |
| Beispiele | Teile für den Fahrzeuginnenraum, Gehäuse, Hüllen |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `ASA` · ID 12844 |
| Überblick | Wie ABS, aber für den Außeneinsatz gemacht (UV, Witterung). |
| Festigkeit /10 | 10 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Regen, Salz, Alkohole<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> Aceton, starke Säuren |
| Hitzebeständigkeit | ~95–100 °C |
| Schlagfestigkeit | Ausgezeichnet |
| UV-Beständigkeit | Ausgezeichnet |
| Düsentemperatur | 240–280 °C |
| Betttemperatur | 95–100 °C |
| Trocknung | 80 °C · 8 h |
| Dichte | 1.05 g/cm³ |
| Gehäuse | Empfohlen |
| Empfehlungen | Filament trocknen · Niedriger Lüfter |
| Beispiele | Außenteile, Gartengehäuse |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `PA` · ID 59328<br/>`PA6` · ID 56666<br/>`PA11` · ID 29272<br/>`PA12` · ID 55796 |
| Überblick | Der König der Reibungs- und Ermüdungsfestigkeit. Stark hygroskopisch. |
| Festigkeit /10 | 10 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Aceton, Alkohole, Kohlenwasserstoffe (Benzin), Basen<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> Säuren (Essig, HCl); quillt in Wasser |
| Hitzebeständigkeit | ~110–115 °C |
| Schlagfestigkeit | Ausgezeichnet |
| UV-Beständigkeit | Bedingt |
| Düsentemperatur | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Betttemperatur | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Trocknung | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Dichte | PA 1.52 g/cm³<br/>PA6 1.52 g/cm³<br/>PA11 —<br/>PA12 1.52 g/cm³ |
| Gehäuse | Erforderlich |
| Empfehlungen | Trocknung vor/während des Druckens erforderlich · Magigoo/PVA-Kleber |
| Beispiele | Zahnräder, Verschleiß-/Reibteile |

</div>

### PC (Polycarbonat)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `PC` · ID 30458 |
| Überblick | Extreme Steifigkeit sowie Wärme- und Schlagfestigkeit. |
| Festigkeit /10 | 10 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> verdünnte Säuren, Alkohole, Fette<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird schwächer / bekommt Risse<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> starke Basen (Ammoniak), heißes Wasser (Hydrolyse) |
| Hitzebeständigkeit | ~115–130 °C |
| Schlagfestigkeit | Ausgezeichnet (kugelsicheres Glas) |
| UV-Beständigkeit | Bedingt (vergilbt, bleibt aber stabil) |
| Düsentemperatur | 260–290 °C |
| Betttemperatur | 110–115 °C |
| Trocknung | 85 °C · 8 h |
| Dichte | 1.3 g/cm³ |
| Gehäuse | Erforderlich |
| Empfehlungen | Trocknung erforderlich · Magigoo-PC-Kleber |
| Beispiele | Motorteile, Strukturteile, Formen |

</div>

### PP (Polypropylen)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technisch</span>

| | |
|---|---|
| TigerTag-Material | `PP` · ID 30884 |
| Überblick | Sehr leicht, fast chemisch inert – aber (fast) nichts haftet daran. |
| Festigkeit /10 | 6 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> nahezu alle verdünnten Säuren/Basen, gängige Lösungsmittel, Öle, Kraftstoffe |
| Hitzebeständigkeit | ~100 °C |
| Schlagfestigkeit | Ausgezeichnet (wiederholtes Biegen) |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 220–250 °C |
| Betttemperatur | 55–60 °C |
| Trocknung | 60 °C · 4 h |
| Dichte | 0.9 g/cm³ |
| Gehäuse | Empfohlen |
| Empfehlungen | PP-Klebeband erforderlich (nichts anderes haftet) · Breiter Brim (~2 % Schrumpf) |
| Beispiele | Filmscharniere, Flaschen, Teile mit Lebensmittelkontakt |

</div>

## Verbundwerkstoffe (gefüllt)

### Carbonfaser (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Verbundwerkstoff</span>

| | |
|---|---|
| TigerTag-Material | `PLA-CF` · ID 48310<br/>`PETG-CF` · ID 55418<br/>`PA-CF` · ID 39944 |
| Überblick | Kurze Carbonfasern (10–25 %) in einer Basis aus PLA, PETG oder Nylon: steifer, weniger Schrumpf, matte Oberfläche. |
| Festigkeit /10 | 8 (starr, spröde) |
| Chemische Beständigkeit | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, Öle, kaltes Wasser · <span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton · <span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> Wasser, Alkohole, verdünnte Säuren, Salze · <span class="ts-tag ts-tag--danger">SCHLECHT</span> chlorierte Lösungsmittel, konzentrierte Ketone<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> Aceton, Alkohole, Kohlenwasserstoffe, Basen · <span class="ts-tag ts-tag--danger">SCHLECHT</span> Säuren; quillt in Wasser |
| Hitzebeständigkeit | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Schlagfestigkeit | Gering (trotz der Steifigkeit spröde) |
| UV-Beständigkeit | Schlecht bis gut (hängt von der Basis ab) |
| Düsentemperatur | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Betttemperatur | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Trocknung | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Dichte | PLA-CF 1.24 g/cm³<br/>PETG-CF 1.27 g/cm³<br/>PA-CF 1.52 g/cm³ |
| Gehäuse | PLA-CF/PETG-CF nicht nötig<br/>PA-CF erforderlich |
| Empfehlungen | 0,6 mm empfohlen (0,4 mm minimal) · PA-CF: Hotend ganz aus Metall + Trocknung erforderlich, anspruchsvoller als PLA-CF/PETG-CF |
| Beispiele | Drohnen, starre Vorrichtungen, gering belastete Halterungen |

</div>

### Glasfaser (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Verbundwerkstoff</span>

| | |
|---|---|
| TigerTag-Material | `PETG-GF` · ID 34944<br/>`PA-GF` · ID 30594<br/>noch kein PLA-GF-Eintrag |
| Überblick | Kurze Glasfasern (10–30 %) in einer Basis aus PLA, PETG oder Nylon: steifer als die ungefüllte Basis und zäher (weniger spröde) als die entsprechende CF-Sorte – aber nicht elektrisch leitend, sodass es Funksignale nicht abschirmt, wie es CF können kann. |
| Festigkeit /10 | 7 (starr, schlagtoleranter als CF) |
| Chemische Beständigkeit | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, Öle, kaltes Wasser · <span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton · <span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> Wasser, Alkohole, verdünnte Säuren, Salze · <span class="ts-tag ts-tag--danger">SCHLECHT</span> chlorierte Lösungsmittel, konzentrierte Ketone<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> Aceton, Alkohole, Kohlenwasserstoffe, Basen · <span class="ts-tag ts-tag--danger">SCHLECHT</span> Säuren; quillt in Wasser |
| Hitzebeständigkeit | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Schlagfestigkeit | Mittel (zäher als CF bei gleichem Fasergehalt) |
| UV-Beständigkeit | Schlecht bis gut (hängt von der Basis ab) |
| Düsentemperatur | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Betttemperatur | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Trocknung | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Dichte | PETG-GF —<br/>PA-GF 1.52 g/cm³ |
| Gehäuse | PLA-GF/PETG-GF nicht nötig<br/>PA-GF erforderlich |
| Empfehlungen | 0,6 mm empfohlen (0,4 mm minimal) · PA-GF: Hotend ganz aus Metall + Trocknung erforderlich, anspruchsvoller als PLA-GF/PETG-GF |
| Beispiele | Funkdurchlässige Gehäuse (Antennen, Funkgeräte), Werkzeugvorrichtungen, schlagtolerante Halterungen |

</div>

### Metall

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Verbundwerkstoff</span>

| | |
|---|---|
| TigerTag-Material | `PLA` · ID 38219<br/>+ Optik `Metal` · ID 226 |
| Überblick | 5–60 % Metallpulver (Bronze, Kupfer, Edelstahl…) in einer PLA-Basis: Metalloptik und -gewicht, lässt sich polieren. |
| Festigkeit /10 | 5 (zerbrechliche Basis) |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> IPA (greift es kaum an), Öle, kaltes Wasser<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird bei längerer Einwirkung schwächer, löst sich nicht auf; Kupfer-/Bronzepulver kann an der Luft oxidieren und Patina ansetzen<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen |
| Hitzebeständigkeit | ~50–60 °C |
| Schlagfestigkeit | Gering (spröde, sehr dicht und damit schwer) |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 45–55 °C |
| Trocknung | 50 °C · 8 h |
| Dichte | 1.24 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Schleifen (Körnung 220 → 1000), dann polieren |
| Beispiele | „Metall“-Figuren/-Büsten, schwere Dekoobjekte, Pokale |

</div>

### Holz

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Verbundwerkstoff</span>

| | |
|---|---|
| TigerTag-Material | `PLA Wood` · ID 48001 |
| Überblick | Holzpartikel in einer PLA-Basis: lässt sich wie echtes Holz schleifen, beizen und ölen. |
| Festigkeit /10 | 4 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> IPA (greift es kaum an), Öle, kaltes Wasser<br/><span class="ts-tag ts-tag--warn">BEDINGT</span> Aceton – wird bei längerer Einwirkung schwächer, löst sich nicht auf; nimmt Feuchtigkeit auf wie echtes Holz (quillt, kann schimmeln)<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Säuren/Basen |
| Hitzebeständigkeit | ~50–55 °C |
| Schlagfestigkeit | Gering |
| UV-Beständigkeit | Schlecht (vergraut wie Holz im Freien) |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 45–55 °C |
| Trocknung | 60 °C · 8 h |
| Dichte | 1.28 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Nie heiß im Leerlauf stehen lassen (verkohlt und verstopft die Düse) |
| Beispiele | Dekoration, Modelle, Kunstobjekte, Rahmen |

</div>

## Stützmaterialien

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Stütze</span>

| | |
|---|---|
| TigerTag-Material | `PVA` · ID 9483 |
| Überblick | Wasserlösliches Stützmaterial, kompatibel mit PLA. |
| Festigkeit /10 | 4 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--danger">SCHLECHT</span> Wasser – löst sich sofort auf<br/><span class="ts-tag ts-tag--ok">OK</span> Öle (manchmal) |
| Hitzebeständigkeit | ~60–70 °C |
| Schlagfestigkeit | Schlecht |
| UV-Beständigkeit | Schlecht |
| Düsentemperatur | 190–240 °C |
| Betttemperatur | 30–60 °C |
| Trocknung | 85 °C · 12 h |
| Dichte | 1.23 g/cm³ |
| Gehäuse | Nicht nötig |
| Empfehlungen | Trocken halten (sehr hygroskopisch) · Im Dual-Extrusion-Betrieb verwenden |
| Beispiele | Stützen für komplexe Geometrien (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Stütze</span>

| | |
|---|---|
| TigerTag-Material | `HIPS` · ID 26029 |
| Überblick | In Limonen lösliches Stützmaterial, kompatibel mit ABS. Auch allein verwendbar. |
| Festigkeit /10 | 6 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--danger">SCHLECHT</span> Limonen – löslich (das ist sein Zweck)<br/><span class="ts-tag ts-tag--ok">OK</span> Basen, Alkohole |
| Hitzebeständigkeit | ~95–100 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Schlecht (vergilbt, wird spröde) |
| Düsentemperatur | 220–270 °C |
| Betttemperatur | 90–95 °C |
| Trocknung | 80 °C · 6 h |
| Dichte | 1.03 g/cm³ |
| Gehäuse | Erforderlich |
| Empfehlungen | Lüfter aus · Löst sich in Limonen |
| Beispiele | Stützen für ABS-Drucke, leichte Prototypen |

</div>

## Hochleistung

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Hochleistung</span>

| | |
|---|---|
| TigerTag-Material | `PEEK` · ID 29815 |
| Überblick | Der Gipfel der druckbaren Thermoplaste: extreme mechanische und thermische Leistung. |
| Festigkeit /10 | 10 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> nahezu alle Lösungsmittel, verdünnte Säuren, Autoklav-Sterilisation<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> konzentrierte Schwefelsäure |
| Hitzebeständigkeit | ~250–260 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Bedingt |
| Düsentemperatur | 390–410 °C |
| Betttemperatur | 130–145 °C |
| Trocknung | 120 °C · 6 h |
| Dichte | 1.32 g/cm³ |
| Gehäuse | Erforderlich, beheizt auf >100 °C |
| Empfehlungen | Trocknung erforderlich |
| Beispiele | Medizinische Implantate, Teile für die Luft- und Raumfahrt |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Hochleistung</span>

| | |
|---|---|
| TigerTag-Material | `PEI-1010` · ID 56527<br/>`PEI-9085` · ID 14508 |
| Überblick | Brandgeschütztes Harz aus der Luftfahrt, sehr maßhaltig. |
| Festigkeit /10 | 9 |
| Chemische Beständigkeit | <span class="ts-tag ts-tag--ok">OK</span> Kraftstoffe, Öle, die meisten Lösungsmittel<br/><span class="ts-tag ts-tag--danger">SCHLECHT</span> chlorierte Lösungsmittel, starke Basen |
| Hitzebeständigkeit | ~170–200 °C |
| Schlagfestigkeit | Gut |
| UV-Beständigkeit | Bedingt |
| Düsentemperatur | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Betttemperatur | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Trocknung | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Dichte | PEI-1010 1.27 g/cm³<br/>PEI-9085 — |
| Gehäuse | Erforderlich, beheizt |
| Empfehlungen | Borosilikatglas-Bett · Sehr hygroskopisch: Trocknung erforderlich |
| Beispiele | Flugzeuginnenräume (Brand-/Rauchklassifizierung), industrielle Vorrichtungen |

</div>

Festigkeit, Beständigkeitsbewertungen und Empfehlungen sind allgemeine Richtwerte und variieren je nach Marke und Charge. Temperaturen, Trocknung und Dichte sind die Standardwerte der Referenzdatenbank.

---

**▲ [Dokumentationsindex](../../README.md)**
