---
sourceHash: 523ed86c04218e9fd4b3d044087a4f64103df5017b6ae258c84443a2243fcac2
sourcePath: docs/guides/filament-materials-guide.md
---

# Guía de materiales de filamento

Una referencia práctica de 21 materiales: resumen, resistencia, resistencia química, resistencia al calor, al impacto y a los UV, temperaturas, secado y densidad, recomendaciones y ejemplos típicos.

**Los nombres y las cifras vienen del protocolo.** Cada ficha nombra el material
exactamente como lo codifica un TigerTag, con su id en la base de datos de referencia compartida:
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), que también sirve la [API de TigerTag](https://api.tigertag.io/api:tigertag/material/get/all). Los
valores de boquilla, cama y secado y la densidad son los de esa base de datos: son
lo que Tiger Studio rellena cuando eliges el material de una bobina. El
TigerTag de una bobina lleva los valores exactos de su fabricante, y estos tienen prioridad.
Los acabados como el mate o el metal no son materiales en TigerTag sino **aspectos**,
que se añaden sobre el material base; consulta la
[identidad universal del filamento](../concepts/universal-filament-identity.md).

**Etiquetas de resistencia química:** <span class="ts-tag ts-tag--ok">BIEN</span> aguanta bien · <span class="ts-tag ts-tag--warn">REGULAR</span> se debilita o varía · <span class="ts-tag ts-tag--danger">MALA</span> se disuelve o se degrada.

## Uso cotidiano

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Resumen | Estándar, fácil, compostable industrialmente. |
| Resistencia /10 | 6 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> IPA (apenas lo afecta), aceites, agua fría<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: lo debilita con una exposición prolongada, no lo disuelve<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados |
| Resistencia al calor | ~50–60 °C |
| Resistencia al impacto | Moderada |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 45–55 °C |
| Secado | 50 °C · 8 h |
| Densidad | 1,24 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Ventilador 100 % · Alta velocidad posible |
| Ejemplos | Prototipos, figuras, decoración |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Resumen | Un acabado cosmético de PLA: un brillo sedoso o un ligero toque de tono madera; no confundir con el compuesto Wood, mucho más cargado, que aparece más abajo. |
| Resistencia /10 | 5 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> IPA (apenas lo afecta), aceites, agua fría<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: lo debilita con una exposición prolongada, no lo disuelve; los aditivos de seda/tono madera absorben la humedad algo más rápido que el PLA normal<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados |
| Resistencia al calor | ~50–60 °C |
| Resistencia al impacto | Baja |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 45–55 °C |
| Secado | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Densidad | PLA Silk 1,24 g/cm³<br/>PLA+ Silk 1,24 g/cm³<br/>PLA Wood 1,28 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Punta de 0,6 mm si contiene partículas · Velocidad lenta · Fuerte adhesión a la cama (cristal o PEI): déjalo enfriar por completo antes de retirarlo |
| Ejemplos | Jarrones, decoración, piezas de arte |

</div>

### PLA mate

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>+ aspecto `Matt` · id 247 |
| Resumen | Acabado mate/lijado (cargas minerales) que disimula bien las líneas de capa. |
| Resistencia /10 | 5 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> IPA (apenas lo afecta), aceites, agua fría<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: lo debilita con una exposición prolongada, no lo disuelve<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados |
| Resistencia al calor | ~50–55 °C |
| Resistencia al impacto | Baja a moderada |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 45–55 °C |
| Secado | 50 °C · 8 h |
| Densidad | 1,24 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Velocidad moderada (más frágil en el detalle fino) · Ideal para piezas decorativas sin brillo |
| Ejemplos | Figuras, modelos, piezas de exposición |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PETG` · id 38256 |
| Resumen | La «navaja suiza»: resistente, flexible, con buena resistencia química y a los UV. |
| Resistencia /10 | 8 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> agua, alcoholes, ácidos diluidos, sales<br/><span class="ts-tag ts-tag--danger">MALA</span> disolventes clorados, cetonas concentradas |
| Resistencia al calor | ~70–80 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Buena |
| Temp. de la boquilla | 220–270 °C |
| Temp. de la cama | 70–75 °C |
| Secado | 70 °C · 8 h |
| Densidad | 1,27 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Ventilador 20–50 % · Fuerte adhesión a la cama (cristal o PEI): déjalo enfriar por completo antes de retirarlo · Velocidad moderada |
| Ejemplos | Piezas mecánicas, cajas estancas, clips |

</div>

### PETG de alta velocidad

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Resumen | El mismo PETG, formulado con menor viscosidad para fundirse lo bastante rápido a más de 300 mm/s. |
| Resistencia /10 | 8 (igual que el PETG) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> agua, alcoholes, ácidos diluidos, sales<br/><span class="ts-tag ts-tag--danger">MALA</span> disolventes clorados, cetonas concentradas |
| Resistencia al calor | ~70–80 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Buena |
| Temp. de la boquilla | 220–270 °C |
| Temp. de la cama | 70–75 °C |
| Secado | 70 °C · 8 h |
| Densidad | 1,27 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Solo útil en un hotend de «alto flujo» o una impresora limitada por el flujo · Sin beneficio en una impresora lenta o Bowden clásica |
| Ejemplos | Los mismos usos que el PETG, en una impresora rápida (CoreXY como Bambu Lab, Creality K1…) |

</div>

## Técnicos / funcionales

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>La dureza Shore no forma parte del id |
| Resumen | Muy blando, absorbe los impactos, pero se aplasta y se deforma con facilidad. |
| Resistencia /10 | 3 (muy blando) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> aceites, grasas, combustibles<br/><span class="ts-tag ts-tag--warn">VARÍA</span> frente a disolventes según la formulación |
| Resistencia al calor | ~55–60 °C |
| Resistencia al impacto | Excelente (absorción) |
| Resistencia a los UV | Buena |
| Temp. de la boquilla | 200–250 °C |
| Temp. de la cama | 35–40 °C |
| Secado | 75 °C · 8 h |
| Densidad | 1,21 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Extrusor de accionamiento directo obligatorio · Velocidad 15–25 mm/s, retracción mínima |
| Ejemplos | Suelas, empuñaduras blandas, juntas |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>La dureza Shore no forma parte del id |
| Resumen | El TPU más común: un buen equilibrio entre flexibilidad e imprimibilidad. |
| Resistencia /10 | 5 (flexible) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> aceites, grasas, combustibles<br/><span class="ts-tag ts-tag--warn">VARÍA</span> frente a disolventes según la formulación |
| Resistencia al calor | ~60 °C |
| Resistencia al impacto | Excelente |
| Resistencia a los UV | Buena |
| Temp. de la boquilla | 200–250 °C |
| Temp. de la cama | 35–40 °C |
| Secado | 75 °C · 8 h |
| Densidad | 1,21 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Accionamiento directo recomendado (un Bowden bien ajustado puede servir) · Velocidad 30–45 mm/s: el TPU más tolerante |
| Ejemplos | Neumáticos RC, fundas de teléfono, cubiertas de cables |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>La dureza Shore no forma parte del id |
| Resumen | Casi un plástico rígido: ligera flexión, muy resistente a la fatiga. |
| Resistencia /10 | 7 (rígido para un TPU) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> aceites, grasas, combustibles<br/><span class="ts-tag ts-tag--warn">VARÍA</span> frente a disolventes según la formulación |
| Resistencia al calor | ~65–70 °C |
| Resistencia al impacto | Excelente (aguanta golpes sin romperse) |
| Resistencia a los UV | Buena |
| Temp. de la boquilla | 200–250 °C |
| Temp. de la cama | 35–40 °C |
| Secado | 75 °C · 8 h |
| Densidad | 1,21 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Se imprime casi como un PETG · Bowden generalmente válido |
| Ejemplos | Ruedas, bisagras flexibles, piezas antivibración |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `ABS` · id 20562 |
| Resumen | Veterano y resistente al calor. Libera vapores (COV) al imprimir. |
| Resistencia /10 | 8 |
| Resistencia química | <span class="ts-tag ts-tag--danger">MALA</span> acetona: lo disuelve (la base del alisado por vapor), ésteres<br/><span class="ts-tag ts-tag--ok">BIEN</span> aceites, bases diluidas |
| Resistencia al calor | ~95–100 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 240–280 °C |
| Temp. de la cama | 85–90 °C |
| Secado | 80 °C · 8 h |
| Densidad | 1,04 g/cm³ |
| Cerramiento | Obligatorio |
| Recomendaciones | Ventilador apagado · Filtración del aire (COV) |
| Ejemplos | Piezas de interior de coche, carcasas, cajas |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `ASA` · id 12844 |
| Resumen | Como el ABS pero hecho para el exterior (UV, intemperie). |
| Resistencia /10 | 8 (igual que el ABS) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> lluvia, sal, alcoholes<br/><span class="ts-tag ts-tag--danger">MALA</span> acetona, ácidos fuertes |
| Resistencia al calor | ~95–100 °C |
| Resistencia al impacto | Excelente |
| Resistencia a los UV | Excelente |
| Temp. de la boquilla | 240–280 °C |
| Temp. de la cama | 95–100 °C |
| Secado | 80 °C · 8 h |
| Densidad | 1,05 g/cm³ |
| Cerramiento | Recomendado |
| Recomendaciones | Seca el filamento · Ventilador bajo |
| Ejemplos | Piezas de exterior, cajas de jardín |

</div>

### PA (nailon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Resumen | El rey de la resistencia a la fricción y a la fatiga. Muy higroscópico. |
| Resistencia /10 | 10 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> acetona, alcoholes, hidrocarburos (gasolina), bases<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos (vinagre, HCl); se hincha en agua |
| Resistencia al calor | ~110–115 °C |
| Resistencia al impacto | Excelente |
| Resistencia a los UV | Regular |
| Temp. de la boquilla | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Temp. de la cama | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Secado | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Densidad | PA 1,52 g/cm³<br/>PA6 1,52 g/cm³<br/>PA11 —<br/>PA12 1,52 g/cm³ |
| Cerramiento | Obligatorio |
| Recomendaciones | Secado obligatorio antes/durante la impresión · Pegamento Magigoo/PVA |
| Ejemplos | Engranajes, piezas de desgaste/fricción |

</div>

### PC (policarbonato)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PC` · id 30458 |
| Resumen | Rigidez extrema y resistencia térmica y al impacto. |
| Resistencia /10 | 10 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> ácidos diluidos, alcoholes, grasas<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: se debilita / se cuartea<br/><span class="ts-tag ts-tag--danger">MALA</span> bases fuertes (amoníaco), agua caliente (hidrólisis) |
| Resistencia al calor | ~115–130 °C |
| Resistencia al impacto | Excelente (cristal antibalas) |
| Resistencia a los UV | Regular (amarillea, sigue siendo resistente) |
| Temp. de la boquilla | 260–290 °C |
| Temp. de la cama | 110–115 °C |
| Secado | 85 °C · 8 h |
| Densidad | 1,3 g/cm³ |
| Cerramiento | Obligatorio |
| Recomendaciones | Secado obligatorio · Pegamento Magigoo PC |
| Ejemplos | Piezas de motor, piezas estructurales, moldes |

</div>

### PP (polipropileno)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PP` · id 30884 |
| Resumen | Muy ligero, casi químicamente inerte, pero (casi) nada se pega a él. |
| Resistencia /10 | 6 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> casi todos los ácidos/bases diluidos, disolventes comunes, aceites, combustibles |
| Resistencia al calor | ~100 °C |
| Resistencia al impacto | Excelente (flexión repetida) |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 220–250 °C |
| Temp. de la cama | 55–60 °C |
| Secado | 60 °C · 4 h |
| Densidad | 0,9 g/cm³ |
| Cerramiento | Recomendado |
| Recomendaciones | Cinta de PP obligatoria (nada más se pega) · Borde ancho (~2 % de contracción) |
| Ejemplos | Bisagras vivas, botellas, piezas en contacto con alimentos |

</div>

## Compuestos (con carga)

### Fibra de carbono (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compuesto</span>

| | |
|---|---|
| Material TigerTag | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Resumen | Fibra de carbono picada (10–25 %) en una base de PLA, PETG o nailon: más rígido, menos contracción, acabado mate. |
| Resistencia /10 | 8 (rígido, frágil) |
| Resistencia química | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> IPA, aceites, agua fría · <span class="ts-tag ts-tag--warn">REGULAR</span> acetona · <span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> agua, alcoholes, ácidos diluidos, sales · <span class="ts-tag ts-tag--danger">MALA</span> disolventes clorados, cetonas concentradas<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> acetona, alcoholes, hidrocarburos, bases · <span class="ts-tag ts-tag--danger">MALA</span> ácidos; se hincha en agua |
| Resistencia al calor | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Resistencia al impacto | Baja (frágil a pesar de la rigidez) |
| Resistencia a los UV | De mala a buena (depende de la base) |
| Temp. de la boquilla | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Temp. de la cama | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Secado | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Densidad | PLA-CF 1,24 g/cm³<br/>PETG-CF 1,27 g/cm³<br/>PA-CF 1,52 g/cm³ |
| Cerramiento | PLA-CF/PETG-CF no necesario<br/>PA-CF obligatorio |
| Recomendaciones | Se recomienda 0,6 mm (0,4 mm como mínimo) · PA-CF: hotend totalmente metálico + secado obligatorios, más exigente que el PLA-CF/PETG-CF |
| Ejemplos | Drones, plantillas rígidas, utillajes de bajo impacto |

</div>

### Fibra de vidrio (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compuesto</span>

| | |
|---|---|
| Material TigerTag | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>aún no hay entrada PLA-GF |
| Resumen | Fibra de vidrio picada (10–30 %) en una base de PLA, PETG o nailon: más rígido que la base sin carga y más tenaz (menos frágil) que el grado CF equivalente, pero no conduce la electricidad, por lo que no bloquea las señales de radio como puede hacerlo el CF. |
| Resistencia /10 | 7 (rígido, más tolerante al impacto que el CF) |
| Resistencia química | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> IPA, aceites, agua fría · <span class="ts-tag ts-tag--warn">REGULAR</span> acetona · <span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> agua, alcoholes, ácidos diluidos, sales · <span class="ts-tag ts-tag--danger">MALA</span> disolventes clorados, cetonas concentradas<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">BIEN</span> acetona, alcoholes, hidrocarburos, bases · <span class="ts-tag ts-tag--danger">MALA</span> ácidos; se hincha en agua |
| Resistencia al calor | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Resistencia al impacto | Moderada (más tenaz que el CF con la misma carga de fibra) |
| Resistencia a los UV | De mala a buena (depende de la base) |
| Temp. de la boquilla | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Temp. de la cama | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Secado | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Densidad | PETG-GF —<br/>PA-GF 1,52 g/cm³ |
| Cerramiento | PLA-GF/PETG-GF no necesario<br/>PA-GF obligatorio |
| Recomendaciones | Se recomienda 0,6 mm (0,4 mm como mínimo) · PA-GF: hotend totalmente metálico + secado obligatorios, más exigente que el PLA-GF/PETG-GF |
| Ejemplos | Carcasas transparentes a la radiofrecuencia (antenas, equipos de radio), plantillas de herramientas, soportes que toleran impactos |

</div>

### Metal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compuesto</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>+ aspecto `Metal` · id 226 |
| Resumen | 5–60 % de polvo metálico (bronce, cobre, acero inoxidable…) en una base de PLA: aspecto y peso de metal, se pule. |
| Resistencia /10 | 5 (base frágil) |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> IPA (apenas lo afecta), aceites, agua fría<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: lo debilita con una exposición prolongada, no lo disuelve; el polvo de cobre/bronce puede oxidarse y crear pátina al aire libre<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados |
| Resistencia al calor | ~50–60 °C |
| Resistencia al impacto | Baja (frágil, muy denso y por tanto pesado) |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 45–55 °C |
| Secado | 50 °C · 8 h |
| Densidad | 1,24 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Lija (grano 220 → 1000) y luego pule |
| Ejemplos | Figuras/bustos «de metal», objetos decorativos pesados, trofeos |

</div>

### Madera

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compuesto</span>

| | |
|---|---|
| Material TigerTag | `PLA Wood` · id 48001 |
| Resumen | Partículas de madera en una base de PLA: se lija, se tiñe y se aceita como la madera de verdad. |
| Resistencia /10 | 4 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> IPA (apenas lo afecta), aceites, agua fría<br/><span class="ts-tag ts-tag--warn">REGULAR</span> acetona: lo debilita con una exposición prolongada, no lo disuelve; absorbe la humedad como la madera de verdad (se hincha, puede enmohecer)<br/><span class="ts-tag ts-tag--danger">MALA</span> ácidos/bases concentrados |
| Resistencia al calor | ~50–55 °C |
| Resistencia al impacto | Baja |
| Resistencia a los UV | Mala (se vuelve gris como la madera de exterior) |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 45–55 °C |
| Secado | 60 °C · 8 h |
| Densidad | 1,28 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Nunca lo dejes caliente en reposo (se carboniza y obstruye la boquilla) |
| Ejemplos | Decoración, modelos, objetos de arte, marcos |

</div>

## Soportes

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Soporte</span>

| | |
|---|---|
| Material TigerTag | `PVA` · id 9483 |
| Resumen | Material de soporte soluble en agua, compatible con el PLA. |
| Resistencia /10 | 4 |
| Resistencia química | <span class="ts-tag ts-tag--danger">MALA</span> agua: se disuelve al instante<br/><span class="ts-tag ts-tag--ok">BIEN</span> aceites (a veces) |
| Resistencia al calor | ~60–70 °C |
| Resistencia al impacto | Mala |
| Resistencia a los UV | Mala |
| Temp. de la boquilla | 190–240 °C |
| Temp. de la cama | 30–60 °C |
| Secado | 85 °C · 12 h |
| Densidad | 1,23 g/cm³ |
| Cerramiento | No necesario |
| Recomendaciones | Mantenlo seco (muy higroscópico) · Úsalo en doble extrusión |
| Ejemplos | Soportes para geometrías complejas (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Soporte</span>

| | |
|---|---|
| Material TigerTag | `HIPS` · id 26029 |
| Resumen | Material de soporte soluble en limoneno, compatible con el ABS. También se puede usar solo. |
| Resistencia /10 | 6 |
| Resistencia química | <span class="ts-tag ts-tag--danger">MALA</span> limoneno: soluble (ese es su propósito)<br/><span class="ts-tag ts-tag--ok">BIEN</span> bases, alcoholes |
| Resistencia al calor | ~95–100 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Mala (amarillea, se vuelve frágil) |
| Temp. de la boquilla | 220–270 °C |
| Temp. de la cama | 90–95 °C |
| Secado | 80 °C · 6 h |
| Densidad | 1,03 g/cm³ |
| Cerramiento | Obligatorio |
| Recomendaciones | Ventilador apagado · Se disuelve en limoneno |
| Ejemplos | Soportes para impresiones en ABS, prototipos ligeros |

</div>

## Alto rendimiento

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alto rendimiento</span>

| | |
|---|---|
| Material TigerTag | `PEEK` · id 29815 |
| Resumen | La cumbre de los termoplásticos imprimibles: rendimiento mecánico y térmico extremo. |
| Resistencia /10 | 10 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> casi todos los disolventes, ácidos diluidos, esterilización en autoclave<br/><span class="ts-tag ts-tag--danger">MALA</span> ácido sulfúrico concentrado |
| Resistencia al calor | ~250–260 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Regular |
| Temp. de la boquilla | 390–410 °C |
| Temp. de la cama | 130–145 °C |
| Secado | 120 °C · 6 h |
| Densidad | 1,32 g/cm³ |
| Cerramiento | Obligatorio, calentado a más de 100 °C |
| Recomendaciones | Secado obligatorio |
| Ejemplos | Implantes médicos, piezas aeroespaciales |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alto rendimiento</span>

| | |
|---|---|
| Material TigerTag | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Resumen | Resina aeroespacial con clasificación ignífuga, muy estable dimensionalmente. |
| Resistencia /10 | 9 |
| Resistencia química | <span class="ts-tag ts-tag--ok">BIEN</span> combustibles, aceites, la mayoría de los disolventes<br/><span class="ts-tag ts-tag--danger">MALA</span> disolventes clorados, bases fuertes |
| Resistencia al calor | ~170–200 °C |
| Resistencia al impacto | Buena |
| Resistencia a los UV | Regular |
| Temp. de la boquilla | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Temp. de la cama | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Secado | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Densidad | PEI-1010 1,27 g/cm³<br/>PEI-9085 — |
| Cerramiento | Obligatorio, calentado |
| Recomendaciones | Cama de vidrio de borosilicato · Muy higroscópico: secado obligatorio |
| Ejemplos | Interiores de aeronaves (clasificación contra fuego/humo), plantillas industriales |

</div>

La resistencia, las valoraciones de resistencia y las recomendaciones son orientaciones generales y varían según la marca y el lote. Las temperaturas, el secado y la densidad son los valores por defecto de la base de datos de referencia.

---

**▲ [Índice de la documentación](../../README.md)**
