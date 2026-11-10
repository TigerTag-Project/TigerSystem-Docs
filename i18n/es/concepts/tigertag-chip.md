---
sourceHash: ba348b03d60cc85812ec315cd808baee450bfd9e1eeef61fe74efb8f74550ab1
sourcePath: docs/concepts/tigertag-chip.md
---

# El chip TigerTag (formato RFID/NFC)

## Capa física

| Propiedad | Valor |
|---|---|
| Familia de chips | NTAG213 / 215 / 216 (NFC Forum Tipo 2) |
| Formato recomendado | **Pegatina redonda de 25 mm** (otras formas también sirven) |
| Carga útil | Carga útil NDEF de 144 bytes, dimensionada para caber en el pequeño NTAG213; los chips más grandes dejan espacio sin usar |
| Chips oficiales con marca | Producidos como **NTAG215**: la memoria extra maximiza la reutilización al final de su vida útil (objetos NDEF estándar), de modo que el chip nunca se convierte en residuo electrónico |
| Autenticación | Ninguna: legible abiertamente |
| Bloqueo de escritura | **Ninguno**: los chips se entregan sin bloquear; el usuario puede reescribirlos, incluso migrando por completo a otro protocolo |
| Área reservada | **64 bytes** al final de la carga útil (páginas `0x18`–`0x27`), lo que deja 80 bytes de datos. En un TigerTag estándar están **libres para funciones adicionales de la comunidad**; en un [TigerTag+](../products/tigertag-plus.md) contienen la **firma de origen**, 32 bytes de `R` y 32 de `S` (disposición byte a byte: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips por bobina | **Dos**, colocados en lados opuestos |
| Legible con | Cualquier smartphone NFC, lectores USB de tipo ACR122U, [TigerPOD](../products/tigerpod.md) |

Es el opuesto deliberado de las etiquetas de los fabricantes (Mifare Classic con
claves derivadas, sectores AES, firmas RSA; véase
[compatibilidad](../compatibility/README.md)): un chip TigerTag no esconde nada.

Piensa en el chip como un **almacenamiento en frío a largo plazo** de la identidad
de la bobina: los datos viven en el propio chip, sin conexión, durante años, sin
servidor, sin cuenta, sin nada que los mantenga vivos. La capa en línea (base de
datos de referencia, sincronización en la nube) solo *añade* frescura por encima.

## Por qué cada bobina lleva DOS chips

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Un refill de filamento con su chip TigerTag redondo" />

Dos chips, en lados opuestos de la bobina: parece redundante, pero es el detalle
más inteligente del formato:

- **Las impresoras comparten lectores.** Una máquina suele tener **un lector RFID
 para dos ranuras de bobina**, montado **entre las dos** o en el lateral de la
 impresora, donde lee la cara izquierda o la derecha según la ranura en que esté
 tu bobina. Un AMS de Bambu Lab tiene 2 lectores para 4 ranuras; en una Snapmaker
 la bobina se coloca a uno u otro lado de la impresora. Con un chip en cada
 lado, **sea cual sea la ranura, siempre hay un chip de cara al lector**, y nunca
 tienes que cargar la bobina en un sentido concreto.
- **Sin buscar el chip al escanear a mano.** En un
 [TigerPOD](../products/tigerpod.md) o con el teléfono, nunca tienes que averiguar
 qué cara lleva el chip: la cojas como la cojas, uno ya está en el lado correcto
 para lo que estás haciendo.
- **Escaneo en el sitio.** Una bobina montada en un AMS Lite, en el lateral de una
 Elegoo Centauri Carbon o en una FlashForge se puede escanear sin sacarla.
- **Libertad para los integradores.** El fabricante de un secador de filamento
 coloca el lector donde le convenga (a izquierda o derecha en un secador de una
 bobina, entre las dos bobinas en uno doble) y siempre funciona.
- **Redundancia.** Si un chip deja de responder, el otro sigue identificando la
 bobina y sirve para reparar el averiado.
- **Doble cosecha.** Al final de su vida útil, cada kilo de filamento impreso te
 deja **dos chips NTAG reutilizables** para proyectos DIY
 ([cero residuos electrónicos](../philosophy/second-life.md)).

Algunos detalles de implementación:

- Los dos chips son **totalmente independientes: cada uno tiene su propio UID**;
 no hay antena compartida. Se **escriben juntos como pareja (Twin Tag)** y se
 mantienen idénticos durante toda la vida de la bobina, hasta los gramos que
 quedan, y siempre se cuentan como **una** bobina.
- En las bobinas de fábrica, los chips van en un **soporte**: una tira cuyos dos
 extremos se pliegan sobre el núcleo de cartón (un chip por extremo), sujetos con
 adhesivo industrial **3M (468MP / 200MP)**: el operario despega y pega, y nada
 más cambia en la línea. El diseño del soporte es **público e imprimible en casa**,
 y la misma pieza se vende por separado para los
 [refills](../philosophy/second-life.md), de modo que el chip viaja con el
 filamento y no con el carrete.

<img src="../assets/carrier-bare.png" width="440" alt="El soporte TigerTag desnudo: dos antenas NFC independientes, una en cada extremo" />

*El soporte, desnudo: las dos antenas independientes se ven claramente, una por
extremo plegado, cada una con su propio UID.*

### Cómo se vinculan los dos chips

Nada central registra la pareja. Se **deduce de lo que llevan los dos chips**, y el
campo que la hace deliberada y no coincidente es la **marca de tiempo**.

Los 4 bytes de la página `0x0C` (desplazamiento `+32`) tienen un doble uso:
segundos desde el 2000-01-01 GMT, *y* el **Twin Tag ID**. Dos chips escritos en la
misma sesión reciben exactamente el mismo valor: ese segundo compartido es la clave
de emparejamiento.

La resolución es de un segundo, así que la marca de tiempo por sí sola no es una
prueba: dos bobinas etiquetadas en el mismo segundo la llevarían también. Lo que
confirma la pareja es que la **identidad descriptiva también coincide**: los dos
chips describen una sola bobina, así que todos los campos que la describen deben
ser idénticos en ambos:

| Campo | Página | Desplazamiento |
|---|---|---|
| Twin Tag ID / marca de tiempo | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

Lo que discrimina realmente depende de la variante:

- En un **[TigerTag+](../products/tigertag-plus.md)**, `ID Product` es un id real
 del catálogo. La misma marca de tiempo **y** el mismo id de producto bastan para
 afirmar que es una pareja con casi total certeza.
- En un **TigerTag estándar**, `ID Product` es la constante `0xFFFFFFFF` en todos
 los chips existentes, así que no aporta ninguna discriminación. Ese trabajo lo
 hacen la marca, el material, los tres colores y los dos aspectos, junto con la
 marca de tiempo.

Dos consecuencias que conviene decir claramente:

- **Escribir los chips en dos pasadas separadas no produce una pareja.** Reciben
 dos marcas de tiempo distintas, así que nada los vincula y el ecosistema cuenta
 dos bobinas. Por eso la aplicación del teléfono escribe ambos en una única sesión
 *Dual NFC*, y por eso el [TigerPOD](../products/tigerpod.md) tiene dos lectores
 enfrentados.
- **La firma es lo único que legítimamente difiere.** En un TigerTag+ firma
 `SHA-256(uid ‖ id_tigertag ‖ id_product)`, y cada chip tiene su propio UID, así
 que los dos chips de una pareja llevan dos firmas *distintas*, por construcción.
 Firmas idénticas significarían una copia, no un gemelo.

Los desplazamientos de arriba se citan de la
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
canónica (§2.9), que sigue siendo la especificación.

### El soporte del refill, en la práctica

Dos detalles que sorprenden:

- **Pegarlo es opcional.** El adhesivo 3M está para sujetar el soporte mientras
 manipulas y guardas el refill. Una vez montado el refill en la masterspool, el
 soporte queda **encajado entre la masterspool y el núcleo de cartón** y no se
 puede mover: el pegamento ya no tiene nada que hacer.
- **Vuelve a salir y es reutilizable.** Cuando se acaba el refill, recupera el
 soporte con sus dos chips, bórralos desde
 [Tiger NFC Connect](../products/tigertag-connect.md) o
 [Tiger Studio](../products/tiger-studio.md) y úsalo de nuevo, en otra bobina o
 para cualquier otro proyecto NDEF. El filamento vendido con un TigerTag Refill te
 deja el soporte, no un residuo
 ([segunda vida](../philosophy/second-life.md)).

Dónde conseguir uno: véase [comprar los chips](../products/tigertag.md).

## Codificado de fábrica, o en blanco en tu mano

El mismo chip te llega de dos maneras, y la diferencia importa más que cualquier
otra cosa de esta página:

| | De dónde viene | Qué contiene |
|---|---|---|
| **Precodificado** | integrado en la línea de producción, dentro de filamento de una marca socia | la identidad completa de la bobina, lista para leer |
| **En blanco** | comprado por separado: con la marca TigerTag, o cualquier chip NTAG de cualquier sitio | nada todavía; lo escribes una vez, en aproximadamente un minuto |

Los chips que se venden por separado se entregan **en blanco**, con logotipo o sin
él. No es una limitación: un chip sin escribir es lo que hace posible la
[segunda vida](../philosophy/second-life.md), y es la razón por la que el
protocolo nunca depende de comprar nada.

## Carga útil

La carga útil de 144 bytes codifica la
[identidad universal](./universal-filament-identity.md) de la bobina (marca,
material, aspecto/color, tipo, diámetro, ajustes de impresión) como ids resueltos
contra la base de datos de referencia compartida.

La carga útil ocupa las páginas `0x04` a `0x27`, de 4 bytes cada una; todo
valor de varios bytes va en big-endian:

| Páginas | Bytes | Contenido |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, el tipo de chip: TigerTag, TigerTag+ o TigerTag Init |
| `0x05` | 4 | `ID Product`: un producto del catálogo en un TigerTag+, `0xFFFFFFFF` en un TigerTag |
| `0x06`–`0x07` | 8 | material, dos aspectos, tipo, diámetro y marca, como ids de la base de referencia |
| `0x08` | 4 | color 1, con alfa |
| `0x09` | 4 | cantidad de fabricación y su unidad |
| `0x0A`–`0x0B` | 8 | rangos de temperatura de boquilla y cama, temperatura y tiempo de secado |
| `0x0C` | 4 | marca de tiempo, que también es el Twin Tag ID |
| `0x0D`–`0x0E` | 8 | colores 2 y 3, índice y número de tags, un byte reservado |
| `0x0F` | 4 | TD de HueForge, dos bytes reservados |
| `0x10`–`0x16` | 28 | mensaje libre, UTF-8 |
| `0x17` | 4 | cantidad restante, actualizada por Tiger Scale, un byte reservado |
| `0x18`–`0x27` | 64 | la firma (`R` y `S`) en un TigerTag+ Certified; libre en otro caso |

Esto es un mapa, no la especificación. La tabla campo por campo del
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format)
es normativa: da el desplazamiento exacto de cada campo y enlaza cada tabla de
ids. Un parser sigue esa tabla.

## Lectura y escritura

| Herramienta | Lectura | Escritura |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (NFC móvil) | toca el chip: la bobina se abre en el teléfono | toca **Make** y vuelve a tocar para escribir; **Dual NFC** escribe los dos chips de una bobina en una sesión |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | abre la bobina automáticamente al escanear | escritura guiada, verificada por UID |
| [SDK de JS](../developers/sdks.md) (`tigertag` en npm) | decodifica la carga útil de 144 bytes | codifica una carga útil nueva |
| [SDK de Python](../developers/sdks.md) | decodifica la carga útil; `tigertag[verify]` comprueba además la firma | codifica una carga útil nueva |

Las dos aplicaciones hablan con el lector; los SDK no. Un SDK decodifica y
codifica la **carga útil**: el hardware NFC lo pones tú.

## Versiones

La carga útil lleva una versión de formato (tabla de referencia `id_version`), de
modo que los lectores puedan seguir siendo compatibles con chips más antiguos.

---

**◀ Anterior:** [Identidad universal del filamento](./universal-filament-identity.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Inventario y sincronización en la nube](./inventory-and-cloud-sync.md)

**Véase también:** [TigerTag](../products/tigertag.md), [SDK](../developers/sdks.md), [Compatibilidad](../compatibility/README.md)
