---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# La muestra de material: la convención oficial

El color de un material se almacena como datos, no como imagen. La **muestra** es
esos datos dibujados: la forma coloreada que representa al material en una lista,
en una tarjeta, en una ranura de un rack, junto a su nombre. Esta página es la
**convención oficial de TigerSystem** para producirla, de modo que el mismo
material muestre la misma muestra en todas partes: en Tiger Studio, en la
aplicación móvil, en la web, en tu propia integración.

**«Material», y no «bobina», es deliberado.** Un TigerTag identifica una bobina de
filamento, pero también un accesorio, una pieza de repuesto, una resina, y los
tipos de producto que el protocolo aún ha de incorporar. La convención está escrita
en torno a `id_type` en general: nada de lo que sigue lee el tipo de producto, así
que una muestra se produce de la misma manera sea cual sea el material.

Es normativa. Un filamento bicolor que muestra un corte suave en una aplicación y
un borde duro o una rampa completa en otra es un error de la que se apartó de esta
página, no una cuestión de gusto. Si no puedes reproducir una regla exactamente
(una plataforma sin degradado cónico, por ejemplo), implementa el equivalente más
cercano descrito en [Plataformas distintas de CSS](#plataformas-distintas-de-css)
y dilo; no inventes una imagen distinta.

- **Versión de la convención:** 1.2: el bicolor es un **corte suave a 135°** (colores
 sólidos, costura mezclada del 20 %) y un **aspecto Tricolor es un barrido cónico**
 (salvo que sea también Rainbow) (la 1.1 dibujaba el bicolor como un corte
 diagonal duro y el tricolor como un camembert; la 1.0 dividía el bicolor
 verticalmente)
- **Renderizador de referencia:** [`material-swatch-playground.html`](./material-swatch-playground.html):
 ábrelo en cualquier navegador, sin servidor, sin dependencias. Todos los casos,
 todas las formas de caja, selectores de color en vivo y el CSS exacto que produce.

---

## Cuatro formas, y solo cuatro

| Forma | Cuándo | Geometría |
|---|---|---|
| **Corte suave** | **Dos o tres** colores de borde duro: bicolor, o tres colores sin aspecto Tricolor | N bandas iguales a lo largo del eje de **135°**, el primer color **arriba a la izquierda**; cada color permanece **sólido**, y solo se mezcla una costura del **20 %** de la diagonal (`SPLIT_BLEND`) centrada en cada límite |
| **Rampa** | Rainbow, y el tipo `gradient` declarado por el catálogo | Una rampa lineal suave a **135°**, con paradas equidistantes, apuntando hacia abajo a la derecha, de modo que el primer color queda arriba a la izquierda |
| **Camembert** (sectores) | **Cuatro o más** colores de borde duro: cualquier lista de N ≥ 4 | N sectores cónicos iguales, el primer color empezando a las **12 en punto**, avanzando en sentido **horario** |
| **Barrido cónico** | Un aspecto **Tricolor** (id 24) que no sea también Rainbow, y el `conic_gradient` declarado por el catálogo | Un degradado cónico suave desde las **12 en punto**, en sentido horario, cerrando en el primer color: la rueda de color |

Dicho claramente: **dos o tres colores duros forman un corte suave, cuatro o más
forman un camembert, los colores suaves forman una rampa, y un aspecto Tricolor
gira hasta un barrido cónico**, y en todo el sistema hay exactamente un único
ángulo, 135°, compartido por el corte suave y la rampa.

**Bicolor y tricolor son un corte suave: el eje de la rampa, la claridad del corte.**
El mismo eje y orden que una rampa (el primer color arriba a la izquierda), pero
cada color se mantiene sólido en su banda y solo se mezcla una costura del **20 %**
en cada límite. Con `seg = 100 / N` y `h = SPLIT_BLEND / 2 = 10`, el color *i* se
mantiene desde `i·seg + h` (0 para el primero) hasta `(i+1)·seg − h` (100 para el
último). Impleméntalo una sola vez, en la función que divide una lista de colores
(N ≤ 3 → corte suave, N ≥ 4 → sectores), para que todos los llamantes lo obtengan;
nunca lo dibujes en espejo.

Por qué un corte suave para dos o tres colores: un borde duro seguía leyéndose como
dos o tres objetos separados, en una miniatura y más aún en el marco de color que
rodea la foto de un producto, donde la foto ocultaba el centro y dejaba barras de
color inconexas. Una rampa completa lo arreglaba, pero desvaía los colores, así que
ninguna se lee como el color verdadero. El corte suave mantiene cada color sólido y
mezcla solo la costura: un material multitono, colores verdaderos, en cualquier
forma de caja. El 20 % se eligió a ojo en todas las superficies (una costura más
ancha deja al color central de un tricolor casi sin banda sólida). Por qué sectores a
partir de cuatro colores: cuatro o más bandas a lo largo de una diagonal se vuelven
demasiado finas para leerse, mientras que los límites de los sectores siguen siendo
angulares y reconocibles, medidos desde el centro de la caja, de modo que N sectores
siguen siendo legibles sea cual sea la proporción de la caja. Por qué 135°: es el
único ángulo del sistema, compartido por el corte suave y toda rampa. Por qué un
barrido cónico para un aspecto Tricolor: tres bandas en una diagonal dejan al color
central una franja delgada; una rueda de color da a los tres el mismo peso y se lee
de inmediato como «tres colores», a cualquier tamaño.

---

## De dónde vienen los datos

Dos capas alimentan el renderizador, y no son lo mismo.

### El chip: como máximo tres colores

Un TigerTag lleva **tres ranuras de color y un aspecto**. Nada más: no hay tipo de
degradado en el chip, y nunca lo hubo.

| Campo | Tipo | Significado |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Ranura 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Ranura 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Ranura 3 |
| `color_a` | `int 0-255` | Alfa: **se ignora al renderizar**; nunca mezcles un color de material |
| `id_aspect1` / `id_aspect2` | `int` | Cualquiera de las dos ranuras puede llevar el aspecto de coloración |

Tres ids de aspecto cambian la forma (su tabla de referencia lleva además un
`color_count` autoritativo):

| id | etiqueta | `color_count` | Forma |
|---|---|---|---|
| `252` | Bicolor | 2 | **Corte suave**, 135° |
| `24` | Tricolor | 3 | **Barrido cónico** |
| `145` | Rainbow | 3 | Rampa, 135° |

Todos los demás aspectos (`Silk`, `Matt`, `Glitter`, …) tienen `color_count` ≤ 1 y
no afectan a la forma. **Compara con el id, no con la etiqueta**: las etiquetas son
cadenas para mostrar y pueden estar traducidas.

> **Nunca cuentes las ranuras para adivinar cuántos colores hay.** Un documento de
> chip lleva siempre las tres ranuras: los componentes ausentes se guardan como `0`,
> de modo que las ranuras 2 y 3 se leen como negro puro en un material monocolor.
> **El número de colores sale del aspecto, nunca de las ranuras.**

### El catálogo: una descripción más rica, solo en la nube

Un producto del catálogo oficial puede describir su color con más precisión que un
chip. Estos dos campos existen **solo** en los datos de la nube / del producto:
nunca se escriben en un chip:

| Campo | Tipo | Significado |
|---|---|---|
| `online_color_list` | `string[]` | Colores ordenados, `RRGGBB` o `RRGGBBAA`, `#` opcional. El orden es significativo: el índice 0 es el primer sector / la primera parada. |
| `online_color_type` | `string` | Instrucción de renderizado: `mono`, `multi`, `gradient`, `conic_gradient`. Cualquier otro valor, o ausente, se trata como `multi`. |

Cuando están presentes ambas capas, **gana el catálogo**: es la descripción más
precisa del mismo producto.

---

## La escalera de decisión

Evalúa **en este orden; gana la primera coincidencia**. El orden codifica una
prioridad: el catálogo supera al chip, un tipo de color explícito supera a una
suposición, y el aspecto solo habla cuando no hay lista de colores en línea.

Sea `LIST` = `online_color_list` tras la [normalización](#normalización), `TYPE` =
`online_color_type`, `SLOTS` = las ranuras no nulas del chip.

| # | Condición | Resultado |
|---|---|---|
| 1 | `LIST ≥ 2` y `TYPE == "conic_gradient"` | Barrido cónico suave, que cierra en el primer color |
| 2 | `LIST ≥ 2` y `TYPE == "gradient"` | Rampa, incluso con dos o tres colores; el catálogo pidió una rampa suave, así que no se convierte en un corte suave |
| 3 | `LIST ≥ 3`, aspecto **Tricolor**, no **Rainbow** | **Barrido cónico** de `LIST` |
| 3b | `LIST ≥ 2` | **Corte suave** de `LIST` con 2 o 3 colores, **camembert** de `LIST.length` sectores con 4 o más |
| 4 | `LIST == 1` | Color sólido: **supera al color del chip** |
| 5 | aspecto **Rainbow** *y* **Tricolor** | Rampa, 3 paradas |
| 6 | aspecto **Rainbow** *y* **Bicolor** | Rampa, 2 paradas |
| 7 | aspecto **Rainbow** | Rampa sobre `SLOTS`; 1 ranura → sólido; 0 ranuras → los 6 colores por defecto |
| 8 | aspecto **Tricolor** | **Barrido cónico** sobre `SLOTS` (falta la ranura 3 → un corte suave de 2 colores sobre las ranuras 1 y 2, no repite la ranura 1) |
| 9 | aspecto **Bicolor** | **Corte suave**, 135°, sobre las ranuras 1 y 2 |
| 10 | en cualquier otro caso | Ranura 1 sólida; nada en absoluto → `#1c2030` |

Valores por defecto cuando un aspecto no lleva ningún color utilizable:

| Caso | Valores por defecto |
|---|---|
| Rainbow, sin colores | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (falta la ranura 3 → corte suave de 2 colores, la ranura 1 no se repite) |
| Bicolor | `#cccccc #ffffff` |
| Nada | `#1c2030` |

---

## Normalización

Se aplica a cada entrada de `online_color_list` antes de evaluar la escalera:

1. Recortar, quitar un `#` inicial.
2. Si son 8 caracteres (`RRGGBBAA`), **conservar los 6 primeros**: el alfa se
 descarta, nunca se mezcla.
3. Aceptar solo `^[0-9a-fA-F]{6}$`. **Cualquier otra cosa se elimina de la lista**,
 no se sustituye por un valor por defecto: una entrada malformada nunca debe
 convertirse en negro en silencio.
4. Volver a añadir `#` en la salida.

El descarte ocurre *antes* de que se ejecute la escalera, así que `["ff0000", "oops"]`
es una lista de **un color** (regla 4), no un camembert de dos sectores.

Las ranuras del chip se convierten en `#` + dos dígitos hexadecimales por
componente, solo cuando los tres componentes son números.

---

## Las expresiones exactas

Con `c1…cN` los colores normalizados, `step = 360 / N`, `seg = 100 / N` y
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

### Vectores de prueba

Toda implementación debe reproducirlos exactamente.

| Entrada | Esperado |
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

## La marca de agua de TigerTag

Toda superficie que pinte un color de material **sin** foto de producto lleva
encima el logotipo de TigerTag, como marca de agua.

| Regla | Valor |
|---|---|
| Posición | Esquina superior derecha de la tesela |
| Opacidad | **1**: siempre, en todas las superficies |
| Tamaño | Un **porcentaje** de la tesela, nunca un tamaño fijo en píxeles, para que escale con la superficie |
| Variante | **Fondo oscuro → el logotipo BLANCO liso. Fondo claro → el logotipo NEGRO con contorno.** |

Los dos archivos de logotipo **no son variantes teñibles el uno del otro**: cada
uno trae su propio relleno incorporado, y la regla es qué *archivo* usar. Nunca
apliques un filtro CSS, un color de máscara o una opacidad para que uno haga las
veces del otro: la ilustración con contorno es un dibujo distinto, no el blanco
invertido.

**Elegir la variante:** toma la luminancia relativa del **primer color** de la
expresión producida:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Si extraes ese color buscando el primer `#` hexadecimal en una cadena CSS, busca
**primero 8 dígitos**, luego 6, luego 4, luego 3. De lo contrario, un `#RRGGBBAA`
coincide con sus primeros seis dígitos, falla el límite de palabra que sigue y se
pierde toda la coincidencia, lo que se lee como «claro» y pone un logotipo negro
sobre una bobina negra. Descarta el alfa y expande la forma abreviada antes de
calcular.

---

## Plataformas distintas de CSS

Flutter, SwiftUI, Android o cualquier renderizador de canvas implementa las mismas
tres formas. Los ángulos siempre se miden al estilo CSS: **0° apunta hacia arriba,
los ángulos aumentan en sentido horario.**

- **Camembert**: un degradado de barrido centrado en la tesela, empezando a las 12
 en punto, en sentido horario, con paradas duras en cada `k · 360/N` grados.
 Flutter: `SweepGradient` con `transform: GradientRotation(-pi/2)`. No lo
 aproximes con porciones dibujadas como trazados salvo que la tesela sea
 cuadrada: los límites de los sectores deben seguir la caja. Solo para **cuatro o
 más** colores duros.
- **Corte suave**: un degradado lineal desde la esquina **superior izquierda** hasta
 la **inferior derecha** con las paradas indicadas: cada color se mantiene sólido,
 con una costura del 20 % mezclada en cada límite. Se usa para **dos o tres**
 colores duros (bicolor, tricolor). Flutter: `LinearGradient(begin:
 Alignment.topLeft, end: Alignment.bottomRight)` con `colors` duplicado y `stops`
 `[0, .4, .6, 1]` (N = 2) o `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Rampa**: el mismo eje, paradas equidistantes, sin tramo sólido. Se usa para
 rainbow y para el tipo `gradient` declarado por el catálogo. Flutter:
 `Alignment.topLeft → Alignment.bottomRight`.

---

## Cambiar la convención

Esta página es la fuente. Un cambio aquí es un cambio en todas las superficies de
TigerSystem: modifícala primero, sube la versión de la convención, y luego realinea
las implementaciones y compruébalas con el renderizador de referencia.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [El chip TigerTag](../concepts/tigertag-chip.md), [El formato `.ttag`](./ttag-format.md), [Resumen para desarrolladores](./README.md)
