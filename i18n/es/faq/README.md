---
sourceHash: 330b407d27d694c4ba885a1b36d46f3b1470147007651a81ecce2d19fc5f827b
sourcePath: docs/faq/README.md
---

# Preguntas frecuentes

## General

**¿Qué es TigerSystem?**
Un ecosistema abierto para la impresión 3D construido en torno a una idea: la
identidad de una bobina de filamento pertenece a su propietario, no a una marca de
impresoras. Véase [Por qué existe TigerSystem](../vision/why-tigersystem.md).

**¿Necesito comprar algo para empezar?**
No, ni siquiera un chip. Las aplicaciones son gratuitas, cualquier smartphone NFC
hace de lector, y una bobina **TigerData** lleva la identidad completa sin pegar
nada en ningún sitio. Los chips son la comodidad, nunca el requisito previo:
[empieza por 0 $](../guides/start-for-free.md).

**¿Está ligado a una marca de filamento o de impresoras?**
No: la neutralidad es una regla de diseño. Cualquier filamento, cualquier
impresora, sin lista de socios.

**¿Son estas aplicaciones EL producto?**
No: el lado **de cara al usuario** es deliberadamente un **entorno de pruebas**.
Cada aplicación y dispositivo que creamos para usuarios finales (Tiger Studio,
Tiger NFC Connect, TigerScale, TigerPOD y los proyectos por venir) es una **prueba
de concepto** funcional: su único objetivo es mostrar el potencial de un protocolo
de código abierto, estándar, agnóstico y multiplataforma, e inspirar a otros a
imaginar las funciones del mañana. Úsalas, haz forks o construye las tuyas. El
**lado de fábrica**, en cambio, es de nivel de producción: una cadena de
herramientas industrial programa los chips a velocidad de línea en las fábricas
socias, y esa parte no es ningún experimento. Véase
[Un entorno de pruebas, a propósito](../vision/why-tigersystem.md).

**¿Por qué construís vosotros mismos todos estos demostradores?**
Porque nadie más lo hizo. Se han producido más de 2,5 millones de chips TigerTag y
se entregan en bobinas de filamento, y dimos por hecho que la comunidad inventaría
por su cuenta usos para una identidad NFC abierta; no ocurrió. Construir los
demostradores nunca fue el objetivo inicial; se volvió necesario para mostrar lo que
el protocolo hace posible. La historia completa:
[La historia detrás del entorno de pruebas](../vision/why-tigersystem.md).

## TigerTag (chips)

**¿Qué chip es un TigerTag?**
Un chip NFC NTAG estándar que lleva una carga útil abierta de 144 bytes: marca,
material, color, diámetro, ajustes de impresión. Sin claves, sin cifrado de los
datos. Véase [El chip TigerTag](../concepts/tigertag-chip.md).

**¿Puedo reescribir un chip?**
Sí: los chips son reescribibles, que es justo el sentido del
[flujo de trabajo de segunda vida](../philosophy/second-life.md): rellenar o
reutilizar una bobina y recodificar su chip.

**¿Qué es TigerTag+?**
Un TigerTag que sabe exactamente *qué producto* es. En lugar de valores que alguien
tecleó, lleva un **ID de producto del catálogo oficial** (marca, color, material,
temperaturas, diámetro, SKU, EAN) más metadatos de enriquecimiento opcionales que
pueden mejorar después de escribir el chip. El chip sigue siendo **100 % sin
conexión**: todo lo necesario para imprimir sigue estando en él. El `+` significa
*identificado*, no *certificado*.

**¿Y TigerTag+ Certified?**
Un TigerTag+ que además lleva una **firma** criptográfica, escrita por un fabricante
que posee la certificación y sus herramientas de firma. Cualquiera puede
**verificar** una firma (gratis, sin conexión, en su propio teléfono), pero solo un
fabricante certificado puede **emitir** una, de modo que una etiqueta clonada no
supera la comprobación. Véase [TigerTag+](../products/tigertag-plus.md).

**¿Puedo respaldar un chip en mi cuenta?**
Sí, y es una función distinta del `+`. Tiger Studio puede guardar el contenido
exacto de un chip, asociado a su UID físico, y reprogramarlo más tarde: útil si un
chip se reescribe o se corrompe, y válido **solo en el chip original**. Tener una
copia de seguridad no convierte un chip en un TigerTag+.

**¿Dónde compro chips?**
Dos respuestas igual de válidas. Los chips oficiales con la marca TigerTag están en
**[tigertag.io](https://tigertag.io)** y en distribuidores oficiales (actualmente
[Atome3D](https://atome3d.com), con más que se sumarán pronto): comprarlos ayuda a
financiar la I+D. Pero **cualquier chip NTAG en blanco y barato** de Amazon,
AliExpress o tu tienda local funciona igual, y eso es deliberado: nada está
bloqueado, el protocolo es lo importante.

**¿Los chips que compro llegan con datos?**
No: los **chips que se venden por separado se entregan en blanco**, lleven o no el
logotipo de TigerTag. La identidad del filamento la escribes tú, en
[Tiger NFC Connect](../products/tigertag-connect.md) o en
[Tiger Studio](../products/tiger-studio.md); la primera vez lleva aproximadamente un
minuto. Los chips que llegan **ya codificados** son los integrados en fábrica,
dentro de filamento de las marcas socias. Comprar un chip y comprar filamento
etiquetado son dos cosas distintas.

**¿Qué formato debo comprar: pegatina o soporte para refill?**
Dos formatos para dos situaciones. La **pegatina individual** va en cualquier
bobina que ya tengas. La **versión para refill** está pensada para los
[refills](../philosophy/second-life.md) sin carrete: se pega dentro del **núcleo de
cartón** antes de montar el refill en una masterspool reutilizable, de modo que el
chip viaja con el filamento y no con el carrete, el mismo lugar donde lo pone la
fábrica.

**¿Qué chip en blanco debo comprar exactamente?**
**NTAG213, 215 o 216, redondo, de 25 mm** es la recomendación. El protocolo está
optimizado deliberadamente para caber en el pequeño NTAG213 (144 bytes); el 215/216
funcionan igual y dejan espacio sin usar. Otras formas también sirven, pero el
redondo de 25 mm es el formato en torno al cual están diseñados los lectores y
soportes del ecosistema.

**¿Qué marcas de filamento envían TigerTag de fábrica?**
Se han producido más de 2,5 millones de chips, lo que convierte a TigerTag en **el
protocolo RFID de terceros más desplegado del mundo**; la mayoría los integran en
fábrica marcas de filamento de terceros (Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D,
Filforme, Lotactree, Smart3DPT, Nanovia), y otras se están integrando.

**¿Cómo llega un chip a una bobina?**
Se pega, y hay **dos por bobina, en lados opuestos**. Es deliberado: las impresoras
suelen compartir un lector RFID entre dos ranuras, así que un chip debe quedar de
cara al lector sea cual sea el lado en que se coloque la bobina; puedes escanear a
mano sin dar la vuelta a la bobina; puedes escanearla sin sacarla de su ranura; y
si un chip falla, el otro sigue respondiendo. Extra: cada bobina vacía te deja dos
chips reutilizables.
Véase [por qué dos chips](../concepts/tigertag-chip.md).

**¿Necesito internet para leer un chip?**
No. La carga útil del chip es completa y autosuficiente: teléfono en modo avión,
escritorio sin conexión; la bobina se presenta igualmente.

**Prefiero otro protocolo NFC (OpenSpool, el mío…): ¿estoy atado a
TigerTag?**
No. Los chips **nunca se bloquean contra escritura**: TigerTag es solo el protocolo
base con el que las bobinas salen de fábrica. Eres libre de reescribir el chip y
migrar sus datos a cualquier otro protocolo NFC/RFID, a medida o existente.

**¿Qué pasa con el chip cuando la bobina se vacía?**
Tiene una segunda vida, nunca un vertedero. Recodifícalo para la siguiente bobina, o
conviértelo a NDEF estándar y haz con él cualquier cosa NFC: un llavero, una tarjeta
de visita, un objeto conectado. Los chips oficiales con marca pasaron a **NTAG215**
precisamente para dejar margen de memoria a esa reutilización: el chip de una
bobina nunca debería convertirse en residuo electrónico. Véase
[Segunda vida](../philosophy/second-life.md).

**¿Sobrevivirá el chip a una cámara calefactada o a un secador de filamento?**
En uso normal no se ha comunicado ningún fallo de chips desde el campo, ni siquiera
de usuarios que utilizan secadores de filamento. Dos cosas juegan a favor del chip:
nunca lo lees caliente en realidad (los escaneos ocurren a temperatura ambiente, no
en plena impresión dentro de una cámara), y es hardware NTAG estándar: para las
especificaciones formales de temperatura, consulta las hojas de datos de NXP de los
NTAG213/215/216.

**¿Qué es un archivo `.ttag`?**
Una instantánea portátil y sin conexión de una o más de tus bobinas: la unidad para
respaldar, llevar en una memoria USB y compartir tus filamentos. Exporta una bobina
o una selección completa desde Tiger Studio; importa con una vista previa completa y
a elegir entre *Restaurar* (misma cuenta) e *Importar* (adoptar como bobinas
nuevas). Especificación completa: [el formato `.ttag`](../developers/ttag-format.md).

**¿Puedo usar TigerSystem sin ningún chip?**
Sí: eso es **TigerData**, los mismos datos del protocolo en forma puramente
digital, sin chip, sin UID. La identidad vive en tu inventario (o en cualquier lugar
digital) y se comporta como cualquier otra bobina. Escríbela más tarde en un chip
NFC, de forma atómica, cuando estés listo, y se convierte en un TigerTag, con un UID
físico por fin asociado. Véase
[Una identidad, tres estados](../concepts/universal-filament-identity.md).

## Tiger Studio (escritorio)

**¿Qué plataformas?**
Windows, macOS y Linux (Electron). Descargas en la
[página de versiones](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**¿Necesito un lector NFC?**
No: la aplicación funciona por sí sola. Un lector ACR122U (o un soporte
[TigerPOD](../products/tigerpod.md)) añade identificación instantánea de bobinas y
codificación de chips.

**¿Qué impresoras puede controlar?**
Seis marcas en vivo: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker;
véase la [matriz de compatibilidad](../compatibility/README.md).

## Slicers y el flujo de impresión

**¿Tengo que cambiar de slicer?**
No. Conserva OrcaSlicer, el slicer de tu fabricante, el que prefieras:
TigerSystem no lamina y no quiere hacerlo. Lamina y lanza los trabajos exactamente
como antes. Véase [dónde encaja el slicer](../architecture/data-flow.md).

**Entonces, ¿qué añade TigerSystem a la impresión?**
Dos cosas. Primero, la información de filamento del lado de la máquina coincide con
la realidad: Tiger Studio envía los datos de cada bobina a las ranuras de la
impresora (AMS, CFS, Canvas, ACE, IFS). Segundo, la supervisión en vivo: sea lo que
sea lo que haya iniciado la impresión, el trabajo aparece en Tiger Studio con
progreso, temperaturas, una hora de finalización y la cámara, en toda tu flota, con
todas las marcas mezcladas.

**¿Puede el chip configurar automáticamente el perfil de mi slicer?**
Hoy no. El chip lleva los ajustes recomendados del filamento (temperaturas…); los
reproduces tú mismo en el perfil de tu slicer.

**Tengo impresoras de tres marcas distintas. ¿Problema?**
Al contrario: ese es el sentido. Una sola tabla de impresoras para toda la flota,
con filtros por marca / estado / etiqueta, sea cual sea la mezcla de las seis
marcas compatibles.

## TigerHub (la casa web del ecosistema)

**¿Qué es TigerHub?**
La plataforma web de [tigersystem.io](https://tigersystem.io). Presenta el
ecosistema TigerSystem (el escaparate de lo que hace posible el protocolo abierto) y
aloja la parte social del entorno de pruebas, todo ya en vivo: tu cuenta en la web,
listas de deseos (públicas y solo para amigos), códigos de amigo e invitaciones,
uso compartido de listas públicas, además del catálogo de materiales, el explorador
de la base de datos de referencia, modelos 3D y más. Véase
[TigerHub](../products/tigerhub.md).

**¿Puedo mostrar mi colección a alguien sin aplicación?**
Sí: TigerHub sirve enlaces de listas de solo lectura; cualquiera con el enlace los
ve en un navegador normal, sin aplicación y sin cuenta.

**¿Es TigerHub la base de datos que hay detrás de las aplicaciones?**
No. Las cuentas y los datos viven en **Firebase** sin más: una base de datos
compartida, en un solo lugar, para que todos los elementos del entorno de pruebas
interoperen. TigerHub es la superficie web construida encima.

## Tiger NFC Connect (móvil)

**¿Qué hace la aplicación móvil?**
Escaneo NFC y programación de chips sobre la marcha, exploración del catálogo y
sincronización completa del inventario con la misma cuenta que la aplicación de
escritorio.

**¿Dónde la descargo?**
Está publicada en **App Store** y **Google Play** como **Tiger NFC Connect**
(antes «TigerTag RFID Connect»), con betas públicas en ambas plataformas. Todos los
enlaces: [tigersystem.io/download](https://tigersystem.io/download).

## TigerScale y sensores

**¿Qué es TigerScale?**
Una báscula ESP32 de código abierto para bobinas de filamento. Pon una bobina encima
y su peso en vivo fluye directamente a tu inventario, visible al instante en
escritorio, móvil y vistas compartidas. Véase [TigerScale](../products/tigerscale.md).

**Espera: el chip ya lo sabe todo, ¿para qué una báscula?**
El chip sabe lo que el filamento **es**; solo una báscula sabe cuánto **queda**. Son
las dos mitades de un inventario realmente útil: la identidad, del chip; la cantidad
en vivo, de la báscula.

**¿Necesito una TigerScale para controlar el peso?**
No. Puedes fijar o ajustar el peso de una bobina manualmente en las aplicaciones en
cualquier momento: la báscula solo lo vuelve automático, en vivo y sin esfuerzo.
Tiger Studio también lee dispositivos **USB «HID Scale»** estándar (la serie M de
DYMO (M5, M10, M25…) y cualquier báscula compatible) como opción de terceros
([detalles](../products/tigerscale.md)).

**¿Puedo construir una yo mismo?**
Sí, ese es el sentido. El diseño del hardware y el firmware son totalmente abiertos
(MIT) en el [repositorio Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**¿Y el peso de la bobina vacía?**
La calibración de envases de Tiger Studio te permite medir una vez el peso real
vacío de un envase; luego se aplica a todas las bobinas de ese envase, de modo que
el número que ves es filamento neto, no el carrete de plástico.

**¿Qué es el TD-1 / TD1s?**
Un analizador de filamento de terceros de **[AJAX-3D](https://ajax-3d.com)**, en dos
variantes que funcionan ambas con el ecosistema: **TD-1** (la versión DIY, la
montas tú) y **TD1s** (premontado, listo para usar). Su función principal es medir
la **Transmission Distance** del filamento («TD», cuánta luz deja pasar el
material), el valor del que no pueden prescindir los usuarios de impresión HueForge
/ Full Spectrum; también lee el **color** (RGB, 1–3 ranuras), algo menos preciso
pero una buena indicación. Tiger Studio lo integra de forma nativa por USB, y
**Tiger NFC Connect lo admite por USB-C** en el móvil. El TD medido puede
**guardarse en el propio protocolo TigerTag**, en el chip NFC o en el formato de
archivo `.ttag`. Un accesorio de terceros y el ecosistema abierto trabajando juntos,
como se pretende.

## Nube e inventario

**¿Dónde se guarda mi inventario?**
En tu propia cuenta TigerSystem: Firebase (Firestore) sin más, una base de datos
compartida que usan todas las aplicaciones. Cada dispositivo en el que inicias
sesión ve los mismos datos en tiempo real. Véase
[Inventario y sincronización en la nube](../concepts/inventory-and-cloud-sync.md).

**¿Funciona sin conexión?**
Los chips se leen por completo sin conexión; las aplicaciones mantienen una caché
local. Los enlaces con las impresoras son locales de la LAN y no necesitan internet
en absoluto (salvo el modo nube de Anycubic).

**No quiero NINGUNA nube. ¿Puedo seguir usando TigerTag?**
Sí, al 100 %. La carga útil del chip es completa y autosuficiente: léela, escríbela
y gestiona un inventario totalmente local sin nube, sin cuenta, sin servidor; los
[SDK de JS y Python](../developers/sdks.md) existen precisamente para facilitarlo en
tus proyectos propios o DIY. Incluso **TigerTag+ se autentica localmente, sin
conexión a internet**. La capa de nube es una comodidad opcional (sincronización
multidispositivo, uso compartido), nunca un requisito: proponemos una visión del
usuario de TigerTag, y toda otra visión es aceptada y alentada.

**No sé nada de NFC ni de RFID: ¿es para mí?**
Especialmente para ti. Toda la experiencia está pensada para novatos primero: toca
una bobina con el teléfono, se presenta sola, listo. No hace falta jerga: las capas
técnicas existen para quien quiera profundizar, no como requisito previo.

**¿Pueden otras personas ver mis bobinas?**
Solo si tú lo eliges: amigos aceptados, un interruptor público o un enlace
compartido de TigerHub. Todo es privado por defecto y se aplica en el servidor.

**¿Qué pasa si la nube de TigerTag se apaga algún día?**
La respuesta de diseño a ese miedo es la apertura: el formato del chip es público,
los chips se leen por completo sin conexión para siempre, los SDK y la aplicación de
escritorio son de código abierto y la superficie de la nube está documentada. Tus
bobinas no pueden quedar «inutilizadas» por un servidor: esa es justo la diferencia
con el silo de un fabricante.

## RFID y compatibilidad

**¿Puede Tiger Studio leer las etiquetas nativas de Bambu/Creality/…?**
Todavía no: la forma correcta de abordar la interoperabilidad sigue siendo una
cuestión abierta. Hay especificaciones de decodificación de solo lectura
documentadas para siete formatos de fabricante, y el trabajo en curso busca
**convertir los datos de etiquetas de fabricante en bobinas digitales TigerData**,
para poder escanear y gestionar en el ecosistema el filamento de otras marcas. Véase
la [compatibilidad](../compatibility/README.md).

**¿Por qué las etiquetas de los fabricantes están bloqueadas y TigerTag no?**
Las etiquetas bloqueadas sirven al cautiverio del fabricante. La respuesta de
TigerTag es un formato legible abiertamente; véase
[Centrado en el usuario frente a centrado en la impresora](../philosophy/user-centric-ecosystem.md).

**¿Y las impresoras de resina?**
Próximamente: TigerTag se está ampliando a las **resinas**, la misma identidad
abierta en los envases de resina para impresoras 3D de resina.

**¿Funciona TigerTag con una impresora sin lector RFID?**
Sí: ese es el [puente con el smartphone](../philosophy/smartphone-bridge.md): tu
teléfono (o un lector de escritorio) identifica la bobina y el sistema envía los
datos a la impresora.

## Resolución de problemas

**Mi chip no se escanea en el teléfono.**
Comprueba que el NFC está activado y busca el punto óptimo de la antena de tu
teléfono; las etiquetas se leen mejor planas contra ella. Si el chip se lee en una
aplicación pero no en otra, actualiza la aplicación.

**Mi impresora no aparece en Tiger Studio.**
Asegúrate de que la impresora está en la misma LAN, en modo LAN donde corresponda, y
prueba «Añadir por IP»: los métodos de detección varían según la marca.

> Los casos reales son bienvenidos: comunica el tuyo en el
> [Discord oficial](https://discord.gg/3Qv5TSqnJH) o en los issues de GitHub; esta
> sección crece a partir de ellos.

## Desarrolladores

**¿Ha construido alguien realmente sobre TigerTag?**
Sí, e independientemente de nosotros:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (herramienta RFID
multifabricante de la comunidad) lee TigerTags;
[Spooly Tracker](https://spoolytracker.com/) (plataforma de inventario, web +
móvil) identifica bobinas con TigerTags; y el
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
convierte a la U1 en **la primera impresora que lee TigerTags de forma nativa**, y
[COSMOS](https://github.com/OpenCentauri/cosmos) hace lo mismo en la Elegoo Centauri Carbon, con
el lector NFC integrado en su Canvas. Véanse las [integraciones de terceros](../developers/integrations.md).

**¿Puedo construir mi propia aplicación sobre TigerTag?**
Sí, sin permiso: especificación abierta del chip, [SDK](../developers/sdks.md) (JS y
Python) y una [superficie de cuenta documentada](../developers/account-api.md) con
ejemplos funcionales de ESP32 / Home Assistant / Spoolman.

**¿Puedo conectar TigerTag a mi ERP o a mi software interno de existencias?**
Sí: es exactamente el tipo de uso que invita el protocolo abierto. Un escaneo
(teléfono NFC o lector USB ACR122U) te da la identidad de la bobina; lo que hagas
con ella (gestión de existencias, seguimiento de trabajos, trazabilidad, reposición,
I+D) es cosa tuya. Véase [¿Qué puedes construir?](../developers/README.md)

**¿Qué hardware necesito para leer chips en mi propio proyecto?**
Cualquier smartphone NFC, un lector USB de tipo ACR122U en un ordenador, o ve a lo
DIY completo: un simple ESP32 con un módulo lector PN532 o RC522 basta (así lo hace
[TigerScale](../products/tigerscale.md)). Común, barato, sin equipo propietario.

**¿Es un agujero de seguridad que la configuración de Firebase sea pública?**
No: es el patrón estándar de Firebase. Toda la aplicación de reglas es del lado del
servidor, en las reglas de seguridad; un cliente solo puede tocar los datos de su
propio usuario.

## Fabricantes

**Somos una marca de filamento: ¿cómo enviamos bobinas etiquetadas con TigerTag?**
Rápido: una línea de producción puede estar funcionando con TigerTag en **tan solo
5 días**, a muy bajo coste, con cada chip escrito en **aproximadamente 1 segundo**,
demostrado con más de 2,5 millones de chips ya enviados por Rosa3D, eSun, Sunlu,
Landu, Jamg He, R3D, Filforme, Lotactree y Smart3DPT. Y cada marca que se une refuerza el argumento colectivo para
que los fabricantes de impresoras lean TigerTag de forma nativa. Lee
[Para fabricantes de filamento](../vision/for-filament-manufacturers.md) y luego
escribe a **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**¿Puede mi producto convertirse en «TigerTag Certified»?**
Depende de a qué lado de una línea se sitúe, y la mayoría de los productos están en
el lado libre.

Si tu producto **habla con** chips TigerTag (un lector, una aplicación, una
impresora, un slicer, un secador, una herramienta), es **TigerTag Compatible**. Ese
nivel es gratuito, autodeclarado y no necesita auditoría ni permiso: constrúyelo,
di *«compatible con TigerTag»* (o *«con TigerTag+»* si verificas firmas) y muestra
el logotipo en tu interfaz, tu documentación y la ficha de tu tienda. La mayoría de
los productos de terceros pertenecen aquí, y no se les retiene nada del protocolo.

**TigerTag Certified** es el otro nivel, y está abierto a **cualquier cosa que
construya un tercero** (un dispositivo, una aplicación, filamento, un inlay, un
soporte) que **supere una auditoría** frente a los requisitos. Se concede, no se
reclama: autorización escrita, una entrada en el registro de certificados y el
derecho a poner la marca **en el producto, el chip y el embalaje**. Tiene dos
ámbitos, **TigerTag Certified** y **TigerTag+ Certified**, el segundo para productos
cuyo tratamiento de etiquetas firmadas ha sido verificado.

La diferencia entre los niveles no es lo que *es* tu producto, sino si alguien lo
comprobó. Compatible dice *«funciona»*, bajo tu palabra. Certified dice *«lo hemos
probado»*, bajo la nuestra, y puede retirarse. Criterios completos:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Ponte en contacto a través de la
[organización de GitHub](https://github.com/TigerTag-Project).

**Somos fabricantes de impresoras: ¿puede nuestro firmware leer TigerTag?**
Sí: los lectores NTAG/NDEF son hardware común, la especificación de la carga útil es
pública ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide))
y añadir la lectura de TigerTag a un firmware lleva **menos de 3 días**.

## Comunidad

**¿Dónde hago preguntas o consigo ayuda?**
El **[Discord](https://discord.gg/3Qv5TSqnJH)** oficial: preguntas, ayuda,
comentarios, muestra de proyectos. Para errores y problemas técnicos, también valen
los issues de GitHub de cada repositorio.

**¿Cómo contribuyo?**
Documentación: [CONTRIBUTING.md](../../CONTRIBUTING.md) aquí. Código: la guía propia
de cada repositorio; véase el [mapa de repositorios](../developers/repositories.md).

**Todo es gratis: ¿cómo apoyo el proyecto?**
Compra los chips oficiales o el kit TigerPOD cuando ya ibas a comprar; luce la
[gorra o el polo](https://tigersystem.io/goodies); corrige una página, traduce una,
construye algo compatible; y pregunta a tu marca de filamento por qué sus bobinas no
están etiquetadas: esto último ha hecho más que todo lo demás. La lista completa,
incluido lo que puedes ignorar con tranquilidad, está en
[Apoya el proyecto](../support.md).

**¿Puedo hacer un fork de todo y construir otra cosa?**
Sí. Con licencias MIT/CC, deliberadamente bifurcable: solo respeta la
[política de marca](../../TRADEMARK.md).

---

**◀ Anterior:** [API de cuenta](../developers/account-api.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Hoja de ruta](../roadmap/README.md)
