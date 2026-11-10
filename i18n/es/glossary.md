---
sourceHash: 27444f945a927973e57cd59c875c9dad41b748d476f0ff4d72224db2aac71368
sourcePath: docs/glossary.md
---

# Glosario

Todos los términos que esta documentación usa sin explicarlos. Las definiciones se
extraen de las páginas enlazadas junto a ellos: cada entrada apunta a la página que
cuenta la historia completa.

> **Nota:** este glosario es una **semilla**. Cubre los términos que ya aparecen en
> este repositorio; es deliberadamente incompleto, y las entradas solo se añaden
> cuando existe en algún lugar de la documentación el contenido que las respalda.
> ¿Echas en falta un término? Añádelo con un enlace a la página que lo define.

## El vocabulario propio del ecosistema

| Término | Significado |
|---|---|
| **TigerSystem** | Todo el ecosistema abierto: el formato del chip, los datos de referencia, las aplicaciones, el hardware y la superficie de la nube. Véase [Por qué existe TigerSystem](./vision/why-tigersystem.md). |
| **TigerTag** | Un chip NFC NTAG estándar que lleva la carga útil abierta de 144 bytes de TigerTag: la identidad de una bobina, legible por cualquier cosa. Véase [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Un TigerTag cuya identidad lleva un **ID de producto del catálogo oficial**, además de datos de enriquecimiento opcionales servidos por los metadatos de la Web API. El chip sigue siendo legible 100 % sin conexión. El `+` significa *identificado*, no *certificado*. Véase [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Un TigerTag+ que además lleva una **firma** criptográfica, escrita por un fabricante que posee la certificación y sus herramientas de firma. Verificarla es gratis y sin conexión; emitirla es lo que concede la certificación. |
| **TigerData** | La misma identidad sin ningún chip: los datos del protocolo en forma puramente digital, sin UID, promocionable a un chip real en cualquier momento. Véase [Una identidad, cuatro estados](./concepts/universal-filament-identity.md). |
| **TigerData+** | Una bobina sin chip que lleva un producto real del catálogo oficial (marca, color, material, temperaturas, diámetro, SKU y EAN exactos) en lugar de valores tecleados a mano. El `+` significa *identificado*, no *certificado*. |
| **Oficial** | Hecho por el propio TigerSystem: los chips en ambos formatos, y las aplicaciones y el hardware de [Productos](./products/README.md). Una declaración de origen, no una marca que se conceda: TigerSystem no se certifica a sí mismo. |
| **TigerTag Compatible** | El nivel libre: todo lo que *habla con* chips TigerTag (lectores, aplicaciones, impresoras, slicers, herramientas). No hace falta permiso para implementarlo, para decirlo ni para mostrar el logotipo en una aplicación, documentación o ficha de tienda. Cubre también **TigerTag+**: verificar una firma es gratis, sin conexión y sin restricciones. La única palabra que nunca incluye es *certificado*. |
| **TigerTag Certified** | El nivel auditado, abierto a todo lo que construya un tercero (un dispositivo, una aplicación, filamento, un inlay, un soporte) una vez supera una auditoría frente a los requisitos. Se concede en lugar de reclamarse, figura en el registro de certificados y puede retirarse. Tiene dos ámbitos, **TigerTag Certified** y **TigerTag+ Certified**. Los socios certificados pueden aplicar la marca **en el producto** y emitir firmas TigerTag+. Véanse la [documentación para desarrolladores](./developers/README.md) y los [criterios de certificación](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | La aplicación móvil (iOS/Android): toca para leer, toca para escribir, explora el catálogo. Antes «TigerTag RFID Connect». Véase [Tiger NFC Connect](./products/tiger-nfc-connect.md). |
| **Tiger Studio** | La aplicación de escritorio de código abierto (Windows/macOS/Linux): inventario, racks, sensores y enlaces con las impresoras. Véase [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | La casa web del ecosistema en `tigersystem.io`: escaparate, listas de deseos, códigos de amigo, uso compartido de listas públicas. Véase [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | El soporte lector NFC doble imprimible en 3D: STL gratuito. Véase [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | La báscula de filamento ESP32 de código abierto que responde a «¿cuánto queda?». Véase [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | La caja junto a la impresora que escribe la identidad de una bobina en una ranura de la impresora al contacto: sin aplicación, sin teclado, de cualquier marca. Véase [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | La cadena de herramientas industrial, de nivel de producción, que programa chips en las líneas de producción de filamento, y las herramientas que curan la base de datos de filamentos. No es pública. Véase [Suite de fábrica](./products/factory-suite.md). |
| **Soporte (carrier)** | La tira que lleva los dos chips de una bobina: uno en cada extremo plegado, pegada al núcleo de cartón con adhesivo industrial 3M. Se usa en la línea de fábrica, se vende por separado para los refills y es pública e imprimible en casa. Véase [El chip TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Un carrete reutilizable sobre el que se monta un refill sin carrete. El chip de un refill va dentro del núcleo de cartón, así que se queda con el filamento y no con el carrete. |
| **Twin Tag** | Los dos chips de una bobina, escritos juntos como pareja y mantenidos idénticos durante toda la vida de la bobina; siempre se cuentan como **una** bobina. |
| **Base de datos de referencia** | Las tablas de ID compartidas (marcas, materiales, aspectos, tipos, diámetros, unidades) servidas desde `cdn.tigertag.io`, para que un chip codificado con una herramienta se lea igual en todas las demás. Véase [Identidad universal del filamento](./concepts/universal-filament-identity.md). |
| **Aspecto** | El campo de la base de datos de referencia que describe el color y el acabado de un filamento; la [muestra de material](./developers/material-swatch.md) se pinta a partir de él. |
| **Muestra de material** | La convención normativa para convertir los *datos* de color de una bobina en la misma *imagen* en todas las superficies: tres formas (un corte suave a 135° para 2-3 colores duros, un camembert para 4 o más, una rampa a 135° para colores suaves), con un renderizador de referencia con el que comprobar una implementación. Véase [La muestra de material](./developers/material-swatch.md). |
| **Archivo `.ttag`** | El archivo de intercambio portátil y sin conexión que transporta uno o más materiales del inventario (TigerData, TigerData+, TigerTag o TigerTag+) entre herramientas. Véase [el formato `.ttag`](./developers/ttag-format.md). |
| **Segunda vida** | Recodificar un chip para una bobina rellenada o reutilizada, o convertirlo a NDEF simple para cualquier otro uso NFC: un chip nunca debería convertirse en residuo electrónico. Véase [Segunda vida](./philosophy/second-life.md). |
| **Puente con el smartphone** | Usar un teléfono (o un lector de escritorio) para identificar una bobina para una impresora que no tiene lector RFID propio. Véase [El puente con el smartphone](./philosophy/smartphone-bridge.md). |
| **Enlace con la impresora** | Tiger Studio hablando con una máquina por la LAN: telemetría, ranuras de filamento, trabajo, cámara. Distinto de leer las etiquetas propias de ese fabricante. Véase [Compatibilidad](./compatibility/README.md). |
| **Refill** | Una bobina de filamento vendida sin carrete, para montarla en una bobina que ya tienes. |

## NFC y RFID

| Término | Significado |
|---|---|
| **NFC** | Near-Field Communication: la radio de corto alcance que todo smartphone moderno puede usar para leer un TigerTag. |
| **RFID** | Radio-Frequency Identification, la familia más amplia a la que pertenece el NFC. Se usa aquí tanto para las etiquetas de bobina bloqueadas de los fabricantes como para TigerTag. |
| **NTAG213 / 215 / 216** | La familia de chips NXP que usa un TigerTag (NFC Forum Tipo 2). La carga útil está dimensionada para caber en el más pequeño, el NTAG213; los chips oficiales con marca son NTAG215 para dejar margen de memoria para la reutilización. Véase [El chip TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format: el contenedor estándar en el que se guarda la carga útil de TigerTag, y por eso cualquier herramienta NFC puede leerla y el chip de una bobina vacía puede convertirse en un objeto NFC simple. |
| **UID** | El identificador de hardware único del chip, fijado en fabricación y no reescribible. Una copia de seguridad de chip está ligada a él, y también una firma TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | Las familias de chips que los fabricantes de impresoras usan para sus propias etiquetas de bobina, documentadas por fabricante en la [matriz de compatibilidad](./compatibility/README.md). |
| **ACR122U** | La clase de lector NFC USB común que se usa para leer y escribir chips desde un ordenador; un [TigerPOD](./products/tigerpod.md) es un soporte construido alrededor de uno. |
| **PN532 / RC522** | Módulos lectores NFC baratos, normalmente emparejados con un ESP32, para lectores DIY: el enfoque que usa [TigerScale](./products/tigerscale.md). |
| **ECDSA** | El esquema de firma que comprueba el extra opcional `verify` del SDK de Python: el mecanismo detrás de una firma de origen TigerTag+. Véase [SDK](./developers/sdks.md). |
| **OpenSpool** | Un estándar abierto e independiente de etiquetas NFC para bobinas (NFC Tipo 2, JSON NDEF, sin bloquear). Véase [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | La herramienta RFID multifabricante de la comunidad de la que derivan las fichas de decodificación por fabricante, y que lee TigerTags. Véanse las [integraciones de terceros](./developers/integrations.md). |

## Impresoras y hardware

| Término | Significado |
|---|---|
| **AMS** | El Automatic Material System de Bambu Lab: el alimentador multibobina. Relevante aquí porque normalmente comparte un lector RFID entre dos ranuras, y por eso una bobina lleva dos chips. |
| **CFS** | El Filament System de Creality: su unidad multimaterial. |
| **ACE** | La unidad multimaterial de Anycubic. |
| **Canvas** | La unidad multimaterial de Elegoo. |
| **IFS** | El sistema multifilamento de FlashForge; el campo en su protocolo sigue siendo `matlStation`. |
| **MMU** | Multi-Material Unit: el término genérico del complemento que alimenta varios filamentos a una impresora (ERCF, MMU2, Box Turtle… en el mundo Klipper). Véase [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | El firmware de impresora abierto y su API: el WebSocket de Moonraker es el transporte que ya usa el enlace de Snapmaker, y el siguiente natural para las máquinas Klipper. Véase [Klipper](./compatibility/klipper.md). |
| **HID Scale** | El protocolo USB estándar para básculas de pesaje (serie M de DYMO y compatibles), leído de forma nativa por Tiger Studio como alternativa de terceros a una TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance**: cuánta luz deja pasar un filamento, el valor en el que se apoyan HueForge y la impresión de espectro completo, y el analizador de [AJAX-3D](https://ajax-3d.com) que lo mide, en variantes DIY (TD-1) y premontada (TD1s). El TD medido puede guardarse en el propio protocolo TigerTag. Véase [Hardware de terceros](./compatibility/third-party-hardware.md). |
| **ESP32** | El microcontrolador común detrás de TigerScale y de la mayoría de los lectores TigerTag DIY. |

## Nube y datos

| Término | Significado |
|---|---|
| **Firebase / Firestore** | El servicio de Google, sin más, que aloja cuentas e inventarios: una base de datos compartida que todas las aplicaciones leen y escriben, con la aplicación de reglas en las reglas de seguridad del servidor. Véase [Inventario y sincronización en la nube](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Desde donde se sirve la base de datos de referencia compartida. |
| **Código de amigo / enlace de lista** | Las dos maneras de compartir un inventario: un amigo aceptado, o un enlace público de solo lectura que cualquiera abre en un navegador, sin aplicación y sin cuenta. Véase [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | El código de producto del fabricante y el número de su código de barras: lo que lleva un TigerData+ para decir exactamente qué producto del catálogo es una bobina. |

---

**▲ [Índice de la documentación](../README.md)** · **Véase también:** [Preguntas frecuentes](./faq/README.md), [El chip TigerTag](./concepts/tigertag-chip.md), [Identidad universal del filamento](./concepts/universal-filament-identity.md)
