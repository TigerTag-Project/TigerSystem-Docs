---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# Das Material-Farbmuster – die offizielle Konvention

Die Farbe eines Materials wird als Daten gespeichert, nicht als Bild. Das
**Farbmuster** (Swatch) sind diese Daten gezeichnet: die farbige Form, die in einer
Liste, auf einer Karte, in einem Rack-Slot, neben dem Namen für das Material
steht. Diese Seite ist die **offizielle TigerSystem-Konvention**, es zu erzeugen,
damit dasselbe Material überall dasselbe Farbmuster zeigt – in Tiger Studio, in der
mobilen App, im Web, in deiner eigenen Integration.

**„Material“, nicht „Spule“, ist Absicht.** Ein TigerTag identifiziert eine
Filamentspule, aber auch Zubehör, ein Ersatzteil, ein Harz – und die
Produkttypen, die das Protokoll erst noch bekommt. Die Konvention ist gegen
`id_type` im Allgemeinen geschrieben: Nichts unten liest den Produkttyp, ein
Farbmuster wird also auf dieselbe Weise erzeugt, was auch immer das Material ist.

Sie ist normativ. Ein zweifarbiges Filament, das in einer App einen weichen Split
zeigt und in einer anderen eine harte Kante oder einen vollen Verlauf, ist ein
Fehler in der App, die von dieser Seite abwich – keine Geschmackssache. Wenn du
eine Regel nicht exakt nachbilden kannst (etwa eine Plattform ohne konischen
Verlauf), setze die nächstliegende Entsprechung um, die unter
[Plattformen ohne CSS](#plattformen-ohne-css) beschrieben ist, und sage es; erfinde
kein anderes Bild.

- **Konventionsversion:** 1.2 – Bicolor ist ein **weicher Split bei 135°** (volle
 Farben, 20 % ineinander verlaufende Naht) und ein **Tricolor-Aspekt ist ein
 konischer Verlauf** (außer er ist zugleich Rainbow) (1.1 zeichnete Bicolor als
 harten diagonalen Split und Tricolor als Camembert; 1.0 teilte Bicolor vertikal)
- **Referenz-Renderer:** [`material-swatch-playground.html`](./material-swatch-playground.html) –
 in jedem Browser zu öffnen, ohne Server, ohne Abhängigkeit. Jeder Fall, jede
 Boxform, Live-Farbwähler und das exakte CSS, das er erzeugt.

---

## Vier Formen, und nur vier

| Form | Wann | Geometrie |
|---|---|---|
| **Weicher Split** | **Zwei oder drei** hartkantige Farben – Bicolor oder drei Farben ohne Tricolor-Aspekt | N gleich breite Bänder entlang der **135°**-Achse, erste Farbe **oben links**; jede Farbe bleibt **voll**, und nur eine Naht von **20 %** der Diagonale (`SPLIT_BLEND`), zentriert auf jeder Grenze, verläuft ineinander |
| **Verlauf** (Ramp) | Rainbow und der vom Katalog deklarierte Typ `gradient` | Ein weicher linearer Verlauf bei **135°**, gleichmäßig verteilte Stopps – nach unten rechts zeigend, sodass die erste Farbe oben links sitzt |
| **Camembert** (Kuchen) | **Vier oder mehr** hartkantige Farben – jede Liste mit N ≥ 4 | N gleich große konische Sektoren, die erste Farbe beginnt bei **12 Uhr** und läuft **im Uhrzeigersinn** |
| **Konischer Verlauf** | Ein **Tricolor**-Aspekt (ID 24), der nicht zugleich Rainbow ist, und der vom Katalog deklarierte `conic_gradient` | Ein weicher konischer Verlauf ab **12 Uhr**, im Uhrzeigersinn, der auf der ersten Farbe schließt – das Farbrad |

Klar gesagt: **Zwei oder drei harte Farben ergeben einen weichen Split, vier oder
mehr einen Camembert, weiche Farben einen Verlauf, und ein Tricolor-Aspekt dreht
sich zu einem konischen Verlauf** – und es gibt im ganzen System genau einen
Winkel, 135°, den sich weicher Split und Verlauf teilen.

**Bicolor und Tricolor sind ein weicher Split – die Achse des Verlaufs, die
Klarheit des Splits.** Gleiche Achse und Reihenfolge wie ein Verlauf (erste Farbe
oben links), aber jede Farbe hält sich über ihr Band voll, und nur eine Naht von
**20 %** verläuft an jeder Grenze ineinander. Mit `seg = 100 / N` und
`h = SPLIT_BLEND / 2 = 10` hält Farbe *i* von `i·seg + h` (0 bei der ersten) bis
`(i+1)·seg − h` (100 bei der letzten). Setze es einmal um, in der Funktion, die
eine Farbliste aufteilt (N ≤ 3 → weicher Split, N ≥ 4 → Kuchen), damit jeder
Aufrufer es bekommt; zeichne es nie gespiegelt.

Warum ein weicher Split für zwei oder drei Farben: Eine harte Kante las sich noch
wie zwei oder drei getrennte Objekte – auf einer Vorschau und noch mehr auf dem
Farbrahmen um ein Produktfoto, wo das Foto die Mitte verdeckte und getrennte
farbige Balken übrig ließ. Ein voller Verlauf behob das, ließ die Farben aber
verwaschen, sodass keine mehr als die wahre Farbe wirkte. Der weiche Split hält
jede Farbe voll und lässt nur die Naht ineinander verlaufen: ein mehrfarbiges
Material, wahre Farben, auf jeder Boxform. 20 % wurden nach Augenmaß über alle
Oberflächen gewählt (eine breitere Naht lässt der mittleren Farbe eines Tricolor
fast kein volles Band). Warum ein Kuchen ab vier Farben: Vier oder mehr Bänder
entlang einer Diagonale werden zu dünn, um lesbar zu sein, während
Sektorgrenzen eckig und erkennbar bleiben – gemessen ab der Boxmitte, sodass N
Sektoren unabhängig vom Seitenverhältnis der Box lesbar bleiben. Warum 135°: Es
ist der eine Winkel des Systems, den sich weicher Split und jeder Verlauf teilen.
Warum ein konischer Verlauf für einen Tricolor-Aspekt: Drei Bänder auf einer
Diagonale lassen der mittleren Farbe nur einen schmalen Streifen; ein Farbrad gibt
allen dreien dasselbe Gewicht und liest sich sofort als „drei Farben“, in jeder
Größe.

---

## Woher die Daten kommen

Zwei Schichten speisen den Renderer, und sie sind nicht dasselbe.

### Der Chip – höchstens drei Farben

Ein TigerTag trägt **drei Farb-Slots und einen Aspekt**. Sonst nichts: Es gibt
keinen Verlaufstyp auf dem Chip, und es gab nie einen.

| Feld | Typ | Bedeutung |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alpha – **beim Rendern ignoriert**; eine Materialfarbe nie überblenden |
| `id_aspect1` / `id_aspect2` | `int` | Jeder Slot kann den färbenden Aspekt tragen |

Drei Aspekt-IDs verändern die Form (ihre Referenztabelle trägt außerdem eine
maßgebliche `color_count`):

| id | Bezeichnung | `color_count` | Form |
|---|---|---|---|
| `252` | Bicolor | 2 | **Weicher Split**, 135° |
| `24` | Tricolor | 3 | **Konischer Verlauf** |
| `145` | Rainbow | 3 | Verlauf, 135° |

Jeder andere Aspekt (`Silk`, `Matt`, `Glitter`, …) hat `color_count` ≤ 1 und
beeinflusst die Form nicht. **Vergleiche die ID, nicht die Bezeichnung** –
Bezeichnungen sind Anzeigetexte und können übersetzt sein.

> **Zähle nie die Slots, um zu erraten, wie viele Farben es gibt.** Ein
> Chip-Dokument trägt immer alle drei Slots: Fehlende Komponenten werden als `0`
> gespeichert, sodass Slot 2 und 3 bei einem einfarbigen Material als reines
> Schwarz gelesen werden. **Die Zahl der Farben kommt vom Aspekt, nie von den
> Slots.**

### Der Katalog – eine reichere, nur in der Cloud vorhandene Beschreibung

Ein Produkt aus dem offiziellen Katalog kann seine Farbe genauer beschreiben, als
ein Chip es kann. Diese beiden Felder gibt es **nur** in Cloud-/Produktdaten – sie
werden nie auf einen Chip geschrieben:

| Feld | Typ | Bedeutung |
|---|---|---|
| `online_color_list` | `string[]` | Geordnete Farben, `RRGGBB` oder `RRGGBBAA`, `#` optional. Die Reihenfolge ist bedeutsam: Index 0 ist der erste Sektor / der erste Stopp. |
| `online_color_type` | `string` | Render-Anweisung: `mono`, `multi`, `gradient`, `conic_gradient`. Jeder andere Wert oder sein Fehlen wird wie `multi` behandelt. |

Liegen beide Schichten vor, **gewinnt der Katalog** – er ist die präzisere
Beschreibung desselben Produkts.

---

## Die Entscheidungsleiter

Der Reihe nach auswerten, **der erste Treffer gilt**. Die Reihenfolge kodiert eine
Priorität: Der Katalog schlägt den Chip, ein ausdrücklicher Farbtyp schlägt eine
Vermutung, und der Aspekt spricht nur, wenn es keine Online-Farbliste gibt.

Sei `LIST` = `online_color_list` nach der [Normalisierung](#normalisierung), `TYPE`
= `online_color_type`, `SLOTS` = die Chip-Slots, die nicht null sind.

| # | Bedingung | Ergebnis |
|---|---|---|
| 1 | `LIST ≥ 2` und `TYPE == "conic_gradient"` | Weicher konischer Verlauf, der auf der ersten Farbe schließt |
| 2 | `LIST ≥ 2` und `TYPE == "gradient"` | Verlauf – auch bei zwei oder drei Farben; der Katalog hat einen weichen Verlauf verlangt, also wird er nicht zum weichen Split |
| 3 | `LIST ≥ 3`, Aspekt **Tricolor**, nicht **Rainbow** | **Konischer Verlauf** aus `LIST` |
| 3b | `LIST ≥ 2` | **Weicher Split** aus `LIST` bei 2 oder 3 Farben, **Camembert** mit `LIST.length` Sektoren bei 4 oder mehr |
| 4 | `LIST == 1` | Volle Farbe – **schlägt die Chip-Farbe** |
| 5 | Aspekt **Rainbow** *und* **Tricolor** | Verlauf, 3 Stopps |
| 6 | Aspekt **Rainbow** *und* **Bicolor** | Verlauf, 2 Stopps |
| 7 | Aspekt **Rainbow** | Verlauf über `SLOTS`; 1 Slot → volle Farbe; 0 Slots → die 6-Farben-Vorgabe |
| 8 | Aspekt **Tricolor** | **Konischer Verlauf** über `SLOTS` (fehlt Slot 3 → ein weicher 2-Farben-Split über Slot 1 und 2, Slot 1 wird nicht wiederholt) |
| 9 | Aspekt **Bicolor** | **Weicher Split**, 135°, über Slot 1 und 2 |
| 10 | sonst | Volle Farbe Slot 1; gar nichts → `#1c2030` |

Vorgaben, wenn ein Aspekt keine brauchbare Farbe trägt:

| Fall | Vorgaben |
|---|---|
| Rainbow, keine Farben | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (fehlt Slot 3 → weicher 2-Farben-Split, Slot 1 wird nicht wiederholt) |
| Bicolor | `#cccccc #ffffff` |
| Nichts | `#1c2030` |

---

## Normalisierung

Wird auf jeden Eintrag von `online_color_list` angewendet, bevor die Leiter
ausgewertet wird:

1. Trimmen, ein führendes `#` entfernen.
2. Bei 8 Zeichen (`RRGGBBAA`) **die ersten 6 behalten** – Alpha wird verworfen,
 nie überblendet.
3. Nur `^[0-9a-fA-F]{6}$` akzeptieren. **Alles andere wird aus der Liste
 gestrichen**, nicht durch eine Vorgabe ersetzt – ein fehlerhafter Eintrag darf nie
 stillschweigend zu Schwarz werden.
4. Für die Ausgabe `#` wieder hinzufügen.

Das Streichen geschieht *bevor* die Leiter läuft, also ist `["ff0000", "oops"]`
eine **einfarbige** Liste (Regel 4), kein Kuchen mit zwei Sektoren.

Chip-Slots werden zu `#` + zwei Hexziffern pro Komponente umgewandelt, nur wenn
alle drei Komponenten Zahlen sind.

---

## Die exakten Ausdrücke

Mit `c1…cN` den normalisierten Farben, `step = 360 / N`, `seg = 100 / N` und
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

### Testvektoren

Jede Implementierung muss diese exakt reproduzieren.

| Eingabe | Erwartet |
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

## Das TigerTag-Wasserzeichen

Jede Oberfläche, die eine Materialfarbe **ohne** Produktfoto malt, trägt das
TigerTag-Logo obenauf als Wasserzeichen.

| Regel | Wert |
|---|---|
| Position | Obere rechte Ecke der Kachel |
| Deckkraft | **1** – immer, auf jeder Oberfläche |
| Größe | Ein **Prozentsatz** der Kachel, nie eine feste Pixelgröße, damit es mit der Oberfläche skaliert |
| Variante | **Dunkler Hintergrund → das einfache WEISSE Logo. Heller Hintergrund → das konturierte SCHWARZE Logo.** |

Die beiden Logodateien sind **keine einfärbbaren Varianten voneinander** – jede
bringt ihre eigene fest eingebrannte Füllung mit, und die Regel bestimmt, welche
*Datei* zu verwenden ist. Wende nie einen CSS-Filter, eine Maskenfarbe oder eine
Deckkraft an, damit das eine das andere ersetzt: Die konturierte Grafik ist eine
andere Zeichnung, nicht das invertierte Weiß.

**Die Variante wählen** – nimm die relative Luminanz der **ersten Farbe** des
erzeugten Ausdrucks:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Extrahierst du diese Farbe, indem du das erste `#`-Hex in einem CSS-String
abgleichst, gleiche **zuerst 8 Ziffern** ab, dann 6, dann 4, dann 3. Sonst trifft
ein `#RRGGBBAA` auf seine ersten sechs Ziffern, scheitert an der darauffolgenden
Wortgrenze, und der ganze Treffer geht verloren – das liest sich als „hell“ und
setzt ein schwarzes Logo auf eine schwarze Spule. Verwirf Alpha und expandiere die
Kurzschreibweise, bevor du rechnest.

---

## Plattformen ohne CSS

Flutter, SwiftUI, Android oder jeder Canvas-Renderer setzt dieselben drei Formen
um. Winkel werden immer nach CSS-Art gemessen: **0° zeigt nach oben, Winkel
wachsen im Uhrzeigersinn.**

- **Camembert** – ein Sweep-Verlauf, zentriert auf der Kachel, bei 12 Uhr
 beginnend, im Uhrzeigersinn, mit harten Stopps bei jedem `k · 360/N` Grad.
 Flutter: `SweepGradient` mit `transform: GradientRotation(-pi/2)`. Nähere ihn nicht
 mit als Pfade gezeichneten Tortenstücken an, außer die Kachel ist quadratisch –
 die Sektorgrenzen müssen der Box folgen. Nur für **vier oder mehr** harte Farben.
- **Weicher Split** – ein linearer Verlauf von der **linken oberen** Ecke zur
 **rechten unteren** mit den obigen Stopps: jede Farbe voll gehalten, eine
 20-%-Naht an jeder Grenze verlaufend. Verwendet für **zwei oder drei** harte
 Farben (Bicolor, Tricolor). Flutter: `LinearGradient(begin: Alignment.topLeft, end:
 Alignment.bottomRight)` mit verdoppelten `colors` und `stops` `[0, .4, .6, 1]`
 (N = 2) oder `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Verlauf** – dieselbe Achse, gleichmäßig verteilte Stopps, kein Halten.
 Verwendet für Rainbow und für den vom Katalog deklarierten Typ `gradient`.
 Flutter: `Alignment.topLeft → Alignment.bottomRight`.

---

## Die Konvention ändern

Diese Seite ist die Quelle. Eine Änderung hier ist eine Änderung an jeder
TigerSystem-Oberfläche: Zuerst hier anpassen, die Konventionsversion erhöhen, dann
die Implementierungen angleichen und gegen den Referenz-Renderer prüfen.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Der TigerTag-Chip](../concepts/tigertag-chip.md), [Das `.ttag`-Format](./ttag-format.md), [Entwicklerübersicht](./README.md)
