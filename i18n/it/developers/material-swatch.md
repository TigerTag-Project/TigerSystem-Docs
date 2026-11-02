---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# Il campione di materiale — la convenzione ufficiale

Il colore di un materiale è memorizzato come dato, non come immagine. Il **campione**
è quel dato disegnato: la forma colorata che rappresenta il materiale in un elenco, su una
scheda, in uno slot di un rack, accanto al suo nome. Questa pagina è la **convenzione
ufficiale di TigerSystem** per produrlo, così che lo stesso materiale mostri lo stesso campione
ovunque: in Tiger Studio, nell'app mobile, sul web, nella tua integrazione.

**«Materiale», non «bobina», è una scelta voluta.** Un TigerTag identifica una bobina
di filamento, ma anche un accessorio, un ricambio, una resina — e i tipi di prodotto che il
protocollo deve ancora acquisire. La convenzione è scritta rispetto a `id_type` in
generale: nulla di quanto segue legge il tipo di prodotto, quindi un campione viene prodotto allo
stesso modo qualunque sia il materiale.

È normativa. Un filamento bicolore che mostra una divisione morbida in un'app e un bordo netto
o una rampa completa in un'altra è un bug in quella che si è discostata da questa pagina,
non una questione di gusto. Se non puoi riprodurre esattamente una regola (una
piattaforma senza gradiente conico, ad esempio), implementa l'equivalente più vicino descritto in
[Piattaforme non CSS](#piattaforme-non-css) e dichiaralo; non inventare un'immagine diversa.

- **Versione della convenzione:** 1.2 — il bicolore è una **divisione morbida a 135°** (colori pieni, giunzione
 sfumata al 20 %) e un aspetto **Tricolor è uno sweep conico** (a meno che non sia anche Rainbow) (la 1.1 disegnava il bicolore come divisione diagonale netta e il tricolore come un camembert; la 1.0
 divideva il bicolore in verticale)
- **Renderer di riferimento:** [`material-swatch-playground.html`](./material-swatch-playground.html) —
 aprilo in qualsiasi browser, senza server, senza dipendenze. Ogni caso, ogni forma di riquadro,
 selettori di colore dal vivo e il CSS esatto che produce.

---

## Quattro forme, e soltanto quattro

| Forma | Quando | Geometria |
|---|---|---|
| **Divisione morbida** | **Due o tre** colori a bordo netto — bicolore, o tre colori senza un aspetto Tricolor | N bande uguali lungo l'asse a **135°**, primo colore **in alto a sinistra**; ogni colore resta **pieno**, e solo una giunzione del **20 %** della diagonale (`SPLIT_BLEND`) centrata su ogni confine si sfuma |
| **Rampa** | Rainbow, e il tipo `gradient` dichiarato dal catalogo | Una rampa lineare continua a **135°**, con stop equidistanti — verso il basso a destra, così il primo colore sta in alto a sinistra |
| **Camembert** (a torta) | **Quattro o più** colori a bordo netto — qualsiasi elenco con N ≥ 4 | N settori conici uguali, il primo colore parte alle **ore 12**, in senso **orario** |
| **Sweep conico** | Un aspetto **Tricolor** (id 24) non anche Rainbow, e il `conic_gradient` dichiarato dal catalogo | Un gradiente conico continuo dalle **ore 12**, in senso orario, che si chiude sul primo colore — la ruota dei colori |

Detto semplicemente: **due o tre colori netti formano una divisione morbida, quattro o più formano un
camembert, i colori continui formano una rampa, e un aspetto Tricolor si trasforma in uno sweep
conico** — e in tutto il sistema c'è esattamente un solo angolo,
135°, condiviso dalla divisione morbida e dalla rampa.

**Bicolore e tricolore sono una divisione morbida: l'asse della rampa, la nitidezza della divisione.**
Stesso asse e stesso ordine di una rampa (primo colore in alto a sinistra), ma ogni colore resta
pieno lungo la propria banda e solo una giunzione del **20 %** si sfuma a ogni confine. Con
`seg = 100 / N` e `h = SPLIT_BLEND / 2 = 10`, il colore *i* tiene da
`i·seg + h` (0 per il primo) a `(i+1)·seg − h` (100 per l'ultimo).
Implementalo una volta sola, nella funzione che divide un elenco di colori (N ≤ 3 →
divisione morbida, N ≥ 4 → torta), così ogni chiamante lo ottiene; non disegnarlo mai speculare.

Perché una divisione morbida per due o tre colori: un bordo netto si leggeva comunque come due o
tre oggetti separati — in miniatura, e ancora di più nella cornice colorata
intorno a una foto del prodotto, dove la foto nascondeva il centro e lasciava barre
colorate disgiunte. Una rampa completa risolveva questo problema ma stingeva i colori, così nessuna delle due
rende il vero colore. La divisione morbida mantiene ogni colore pieno e sfuma solo
la giunzione: un unico materiale multitono, colori veri, su qualsiasi forma di riquadro. Il 20 % è stato
scelto a occhio su ogni superficie (una giunzione più larga lascia al colore centrale di un tricolore
quasi nessuna banda piena). Perché una torta da quattro
colori in su: quattro o più bande lungo una diagonale diventano troppo sottili per essere lette, mentre i confini dei
settori restano angolari e riconoscibili — misurati dal centro del riquadro, così N
settori restano leggibili qualunque sia il rapporto d'aspetto del riquadro. Perché 135°: è l'unico
angolo del sistema, condiviso dalla divisione morbida e da ogni rampa.
Perché uno sweep conico per un aspetto Tricolor: tre bande su una diagonale lasciano al
colore centrale una sottile striscia; una ruota dei colori dà a tutti e tre lo stesso peso e
si legge subito come «tre colori», a qualsiasi dimensione.

---

## Da dove provengono i dati

Due livelli alimentano il renderer, e non sono la stessa cosa.

### Il chip — al massimo tre colori

Un TigerTag porta **tre slot colore e un aspetto**. Nient'altro: sul chip non c'è
alcun tipo di gradiente, e non c'è mai stato.

| Campo | Tipo | Significato |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alfa — **ignorato per il rendering**; non sfumare mai un colore del materiale |
| `id_aspect1` / `id_aspect2` | `int` | Ciascuno slot può portare l'aspetto di colorazione |

Tre id di aspetto cambiano la forma (la loro tabella di riferimento porta anche un
`color_count` autorevole):

| id | etichetta | `color_count` | Forma |
|---|---|---|---|
| `252` | Bicolor | 2 | **Divisione morbida**, 135° |
| `24` | Tricolor | 3 | **Sweep conico** |
| `145` | Rainbow | 3 | Rampa, 135° |

Ogni altro aspetto (`Silk`, `Matt`, `Glitter`, …) ha `color_count` ≤ 1 e non
influisce sulla forma. **Confronta l'id, non l'etichetta**: le etichette sono stringhe
di visualizzazione e possono essere tradotte.

> **Non contare mai gli slot per indovinare quanti colori ci sono.** Un documento
> chip porta sempre tutti e tre gli slot: le componenti assenti sono memorizzate come `0`,
> quindi gli slot 2 e 3 si leggono come nero puro su un materiale monocolore. **Il numero di colori
> viene dall'aspetto, mai dagli slot.**

### Il catalogo — una descrizione più ricca, solo cloud

Un prodotto del catalogo ufficiale può descrivere il proprio colore in modo più preciso
di un chip. Questi due campi esistono **solo** nei dati cloud/prodotto: non
vengono mai scritti su un chip:

| Campo | Tipo | Significato |
|---|---|---|
| `online_color_list` | `string[]` | Colori ordinati, `RRGGBB` o `RRGGBBAA`, `#` facoltativo. L'ordine è significativo: l'indice 0 è il primo settore / il primo stop. |
| `online_color_type` | `string` | Istruzione di rendering: `mono`, `multi`, `gradient`, `conic_gradient`. Qualsiasi altro valore, o assente, è trattato come `multi`. |

Quando sono presenti entrambi i livelli, **vince il catalogo**: è la descrizione più
precisa dello stesso prodotto.

---

## La scala decisionale

Valuta **in quest'ordine, vince la prima corrispondenza**. L'ordine codifica una priorità: il
catalogo prevale sul chip, un tipo di colore esplicito prevale su una congettura, e
l'aspetto parla solo quando non c'è un elenco di colori online.

Sia `LIST` = `online_color_list` dopo la [normalizzazione](#normalizzazione), `TYPE` =
`online_color_type`, `SLOTS` = gli slot del chip non nulli.

| # | Condizione | Risultato |
|---|---|---|
| 1 | `LIST ≥ 2` e `TYPE == "conic_gradient"` | Sweep conico continuo, che si chiude sul primo colore |
| 2 | `LIST ≥ 2` e `TYPE == "gradient"` | Rampa — anche con due o tre colori; il catalogo ha chiesto una rampa continua, quindi non diventa una divisione morbida |
| 3 | `LIST ≥ 3`, aspetto **Tricolor**, non **Rainbow** | **Sweep conico** di `LIST` |
| 3b | `LIST ≥ 2` | **Divisione morbida** di `LIST` con 2 o 3 colori, **camembert** di `LIST.length` settori con 4 o più |
| 4 | `LIST == 1` | Colore pieno — **prevale sul colore del chip** |
| 5 | aspetto **Rainbow** *e* **Tricolor** | Rampa, 3 stop |
| 6 | aspetto **Rainbow** *e* **Bicolor** | Rampa, 2 stop |
| 7 | aspetto **Rainbow** | Rampa su `SLOTS`; 1 slot → pieno; 0 slot → i 6 colori predefiniti |
| 8 | aspetto **Tricolor** | **Sweep conico** su `SLOTS` (slot 3 mancante → una divisione morbida a 2 colori sugli slot 1 e 2, non ripete lo slot 1) |
| 9 | aspetto **Bicolor** | **Divisione morbida**, 135°, sugli slot 1 e 2 |
| 10 | altrimenti | Slot 1 pieno; niente del tutto → `#1c2030` |

Valori predefiniti quando un aspetto non porta alcun colore utilizzabile:

| Caso | Valori predefiniti |
|---|---|
| Rainbow, senza colori | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (slot 3 mancante → divisione morbida a 2 colori, lo slot 1 non viene ripetuto) |
| Bicolor | `#cccccc #ffffff` |
| Niente | `#1c2030` |

---

## Normalizzazione

Applicata a ogni voce di `online_color_list` prima di valutare la scala:

1. Rimuovi gli spazi, togli un `#` iniziale.
2. Se sono 8 caratteri (`RRGGBBAA`), **tieni i primi 6**: l'alfa viene scartato, mai
 sfumato.
3. Accetta solo `^[0-9a-fA-F]{6}$`. **Tutto il resto viene eliminato dall'elenco**,
 non sostituito con un valore predefinito: una voce malformata non deve mai diventare silenziosamente nera.
4. Riaggiungi `#` per l'output.

L'eliminazione avviene *prima* dell'esecuzione della scala, quindi `["ff0000", "oops"]` è un
elenco di **un solo colore** (regola 4), non una torta a due settori.

Gli slot del chip si convertono in `#` + due cifre esadecimali per componente, solo quando tutte e tre le
componenti sono numeri.

---

## Le espressioni esatte

Con `c1…cN` i colori normalizzati, `step = 360 / N`, `seg = 100 / N` e
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

### Vettori di test

Qualsiasi implementazione deve riprodurli esattamente.

| Input | Atteso |
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

## La filigrana TigerTag

Qualsiasi superficie che dipinge il colore di un materiale **senza** una foto del prodotto porta il
logo TigerTag in sovrimpressione, come filigrana.

| Regola | Valore |
|---|---|
| Posizione | Angolo in alto a destra del riquadro |
| Opacità | **1** — sempre, su ogni superficie |
| Dimensione | Una **percentuale** del riquadro, mai una dimensione fissa in pixel, così si adatta alla superficie |
| Variante | **Sfondo scuro → il logo BIANCO semplice. Sfondo chiaro → il logo NERO con contorno.** |

I due file del logo **non sono varianti tingibili l'una dell'altra**: ciascuno è fornito
con il proprio riempimento incorporato, e la regola indica quale *file* usare. Non applicare mai
un filtro CSS, un colore di maschera o un'opacità per far passare l'uno per l'altro: il
disegno con contorno è un disegno diverso, non il bianco invertito.

**Scelta della variante**: prendi la luminanza relativa del **primo colore** dell'espressione
prodotta:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Se estrai quel colore cercando il primo `#` esadecimale in una stringa CSS, cerca **prima 8 cifre**,
poi 6, poi 4, poi 3. Altrimenti un `#RRGGBBAA` corrisponde alle sue
prime sei cifre, fallisce al confine di parola che segue, e l'intera corrispondenza va
persa — il che si legge come «chiaro» e mette un logo nero su una bobina nera. Elimina
l'alfa ed espandi la forma abbreviata prima di calcolare.

---

## Piattaforme non CSS

Flutter, SwiftUI, Android o qualsiasi renderer canvas implementa le stesse tre forme.
Gli angoli si misurano sempre alla maniera CSS: **0° punta verso l'alto, gli angoli aumentano
in senso orario.**

- **Camembert**: un gradiente sweep centrato sul riquadro, che parte alle ore 12,
 in senso orario, con stop netti a ogni `k · 360/N` gradi. Flutter:
 `SweepGradient` con `transform: GradientRotation(-pi/2)`. Non approssimarlo
 con spicchi di torta disegnati come tracciati, a meno che il riquadro sia quadrato: i confini dei
 settori devono seguire il riquadro. Solo per **quattro o più** colori netti.
- **Divisione morbida**: un gradiente lineare dall'angolo **in alto a sinistra** a quello
 **in basso a destra** con gli stop indicati sopra: ogni colore tenuto pieno, una giunzione del 20 %
 sfumata a ogni confine. Usata per **due o tre** colori netti (bicolore,
 tricolore). Flutter: `LinearGradient(begin: Alignment.topLeft, end:
 Alignment.bottomRight)` con `colors` raddoppiati e `stops` `[0, .4, .6, 1]`
 (N = 2) o `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Rampa**: lo stesso asse, stop equidistanti, nessuna tenuta. Usata per rainbow e
 per il tipo `gradient` dichiarato dal catalogo. Flutter: `Alignment.topLeft →
 Alignment.bottomRight`.

---

## Modificare la convenzione

Questa pagina è la fonte. Una modifica qui è una modifica a ogni superficie di TigerSystem:
correggila per prima, incrementa la versione della convenzione, poi riallinea le implementazioni
e verificale con il renderer di riferimento.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Il chip TigerTag](../concepts/tigertag-chip.md), [Il formato `.ttag`](./ttag-format.md), [Panoramica per sviluppatori](./README.md)
