---
sourceHash: 753177831a2577ac01ace40f8f49b6cf943aaf385d6b6c4107fcbd9d8660d0f2
sourcePath: docs/tutorials/first-smart-spool.md
---

# Tu primera bobina inteligente en 2 minutos

Convierte cualquier bobina de filamento en inteligente: **gratis, en casa**, con
cosas que ya tienes o que consigues por unos céntimos.

## Qué necesitas

- **Cualquier smartphone con NFC** (ese es el lector: ya lo llevas en el bolsillo)
- **Un chip NTAG en blanco**: NTAG213, 215 o 216, **redondo de 25 mm** recomendado
  (unos céntimos en Amazon, AliExpress o en tiendas locales; no hace falta nada
  oficial)
- **Tiger NFC Connect**, la aplicación gratuita:
  [descárgala para iOS y Android](https://tigersystem.io/download)

> ¿Ya compraste filamento de Rosa3D, eSun, Sunlu, R3D…? Es posible que tu bobina
> **ya lleve chips TigerTag**: sáltate el formulario y simplemente toca «Scan».

## Pasos

**Tocas el chip dos veces:** una para empezar, otra para escribir.

1. **Instala Tiger NFC Connect** y ábrela.
2. **Toca «Scan»** y mantén el teléfono contra tu chip en blanco. La aplicación lo
   lee, ve que está vacío y se ofrece a crear un filamento para él.
3. **Describe tu filamento**: elige el material, el color, el aspecto, el peso,
   etc. Las opciones salen del catálogo compartido, así que tu bobina será
   entendida de forma idéntica por todas las aplicaciones compatibles. Es un
   formulario rápido; nada que escribir de memoria.
4. **Toca «Make» y vuelve a mantener el teléfono contra el chip.** Ese segundo
   toque es la escritura. Un segundo después los datos están **en el propio chip**:
   tu bobina ya sabe lo que es.
5. **Pega el chip en la bobina.**

<img src="../assets/nfc-scan.gif" width="420" alt="El toque NFC, animado: el teléfono se encuentra con el chip, bobina identificada" />

*El gesto completo, en movimiento.*

### Dos chips en una bobina: «Dual NFC»

Las bobinas de fábrica llevan **dos chips, en lados opuestos**, para que siempre
haya un chip de cara al lector ([¿por qué dos?](../concepts/tigertag-chip.md)).
Puedes hacer lo mismo, en una sola sesión:

1. Escanea el primer chip en blanco y rellena el formulario como antes.
2. Antes de escribir, **toca el botón «Dual NFC»**.
3. **Toca «Make»** como siempre, pero ahora la aplicación pide los chips uno tras
   otro: **Make 1/2** y luego **Make 2/2**. Los dos chips acaban con la misma
   identidad.

> **Empieza siempre por el chip que escaneaste.** El chip que abrió la creación es
> el que la aplicación espera como 1/2; el otro chip viene después como 2/2.

Eso es todo. Vuelve a escanear la bobina cuando quieras, con el lector que tengas
más a mano: un toque de **cualquier teléfono NFC**, o colócala en un lector
conectado a [Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)): la bobina se presenta sola en ambos casos.
Todo lo anterior funciona **100 % sin conexión**: sin cuenta, sin nube, sin coste.

## Opcional: añadirla a tu inventario

¿Quieres la bobina en tu inventario sincronizado (visible en el escritorio,
compartible con amigos)? Dilo en la aplicación cuando te lo pregunte: es una
elección explícita, nunca automática.

## ¿Y después?

- Pon la bobina en una [TigerScale](../products/tigerscale.md) y mira cómo su
  peso se actualiza en directo.
- Abre [Tiger Studio](../products/tiger-studio.md) en tu ordenador y ve la misma
  bobina allí.
- ¿Recargaste o reutilizaste la bobina? Vuelve a codificar el chip:
  [Segunda vida](../philosophy/second-life.md).

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Tiger NFC Connect](../products/tigertag-connect.md), [El chip TigerTag](../concepts/tigertag-chip.md), [Preguntas frecuentes](../faq/README.md)
