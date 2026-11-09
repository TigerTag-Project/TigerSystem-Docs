---
sourceHash: 41cc4260975408514f69a1b2d61294c1a71723db05cddb913c0f599e1dade5b0
sourcePath: docs/vision/why-tigersystem.md
---

# Por qué existe TigerSystem

## El problema

Una bobina de filamento es el objeto más manipulado de la impresión 3D, y el menos
inteligente. Una vez que la etiqueta desaparece, una bobina no puede decirte:

- de qué material y color es,
- cómo debe imprimirse,
- cuánto filamento queda,
- dónde está en tu estantería,
- a quién pertenece.

Los fabricantes de impresoras han empezado a resolver esto con etiquetas RFID, **pero
cada uno lo resuelve solo dentro de sus propios muros.** Una etiqueta de Bambu Lab no
significa nada para una impresora Creality; una etiqueta de Anycubic no significa nada
para nadie más. Los datos pertenecen al ecosistema del fabricante, no a la persona que
compró el filamento.

## La respuesta

**TigerSystem** es un ecosistema abierto construido en torno a una idea:

> **La identidad de la bobina pertenece a su dueño, no a una marca de impresora.**

**Hicimos inteligentes las bobinas de filamento.** Saben lo que son y pueden decírselo
a todo el mundo, sin fricción. La ambición: **ser para los materiales de impresión 3D
lo que el código de barras llegó a ser para el estante.**

Cada bobina lleva un chip NFC [TigerTag](../products/tigertag.md) con su perfil
completo: marca, material, color, diámetro, ajustes de impresión. Cualquier lector
compatible (un smartphone, un lector de escritorio, una impresora) puede leerlo.
Una única base de datos compartida en línea ([Firebase a secas](../concepts/inventory-and-cloud-sync.md))
mantiene sincronizados la cuenta del propietario, el inventario, el historial y el
uso compartido en todos los dispositivos.

## Qué significa «centrado en el usuario» en la práctica

| Ecosistema centrado en la impresora | TigerSystem |
|---|---|
| Etiqueta legible solo por las impresoras de una marca | Etiqueta legible por cualquier dispositivo NFC |
| Formato de datos secreto o cifrado | Formato abierto y documentado |
| El inventario vive en la aplicación del fabricante | El inventario vive en **tu** cuenta |
| Solo funciona con el filamento del fabricante | Funciona con **cualquier** marca de filamento |
| Muere con la nube del fabricante | SDK abiertos, especificación abierta, se puede construir uno mismo |

## La historia detrás del sandbox

Empezó en **2023, justo después de Formnext**. Bambu Lab había abierto la era de las
etiquetas de bobina propietarias; ese año Creality y Anycubic la siguieron,
lanzando cada una impresoras con lectores RFID/NFC, y cada una con su propio chip
propietario y bloqueado. Decidimos que así no podía asentarse la industria: tenía que
existir un formato **de código abierto, neutral, multiplataforma y centrado en el
usuario**. Y no podía ser un manifiesto: tenía que ser una **alternativa viable y más
capaz** que lo que ofrecen los fabricantes de impresoras, entregada a los fabricantes
de filamento de terceros para que sus bobinas pudieran hacer *más* que las
propietarias, y para que su cuota de mercado no se erosionara frente al filamento
cautivo.

Así que nos pusimos manos a la obra, y viajamos a China. Presentamos el proyecto a
fabricantes de impresoras (Bambu Lab, al Dr. Tao, su CEO; Elegoo, Creality, Anycubic
y Biqu / BigTreeTech, reuniéndonos también con su CEO) y a fabricantes de filamento y
proveedores de equipos (eSun, R3D, Landu, Sunlu, Jamg He), tras haberlo presentado ya
a Rosa3D en Europa. La acogida fue cálida. Diseñamos un protocolo **más optimizado y
más versátil** que los propietarios: centrado en el usuario, multimarca,
multiplataforma. Estudiamos los flujos de trabajo de las fábricas de filamento para
entender cómo programar chips NFC a escala industrial, y buscamos la producción de
chips (etiquetas a medida, soportes a medida, volúmenes enormes) a un coste lo
bastante bajo para un objetivo innegociable: **añadir la tecnología sin añadir un solo
céntimo al precio de la bobina para el usuario final.**

En **septiembre de 2024**, los chips estaban en producción en serie y se abastecía a
las fábricas: primero vino todo el ecosistema del lado de la fábrica. En ese momento
**no había ninguna aplicación móvil ni de escritorio**; vinieron después. Primero la
móvil, porque no obliga a comprar nada: el lector ya está en el bolsillo de todo el
mundo.

Esa elección vino de una pregunta que no dejábamos de hacer en China: *«¿Dónde están
los lectores RFID?»* Todos respondían: *«En las Bambu Lab.»* Y decíamos: falso. En
Bambu Lab los lectores están **en el AMS, no en la impresora**: la máquina no puede
detectar en absoluto una bobina de terceros. **Los lectores RFID están en vuestros
bolsillos.** En todos los teléfonos, listos para usar, sin que ni siquiera lo sepáis.

Con franqueza: construir todo esto nosotros mismos nunca fue el plan inicial. **Se han
producido más de 2,5 millones de chips NFC TigerTag, lo que convierte a TigerTag en el
protocolo RFID de terceros más desplegado del mundo**, la mayoría integrados en
fábrica por marcas de filamento de terceros (Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D,
con Filforme, Nanovia y más en proceso de integración), además de una parte menor
comprada por makers para etiquetar bobinas en casa. Asumimos ingenuamente que la
comunidad imaginaría los usos por su cuenta: una identidad NFC abierta y documentada
en cada bobina parecía un parque de juegos evidente.

No ocurrió. A pesar de la escala del despliegue, ninguna comunidad recogió el tema;
nadie consideró que valiera la pena construir integraciones en torno al protocolo.
Esperábamos que otros lo asumieran, y no lo hicieron. Así que lo hicimos nosotros,
aunque no fuera nuestro objetivo original: empezamos a **imaginar los usos nosotros
mismos**, para mostrar el potencial de un **protocolo NFC de código abierto para la
identificación de materiales centrado en el usuario, no en la impresora**, y para
dejar ejemplos que funcionan a quien por fin retome el hilo.

Y está empezando a ocurrir:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) lee TigerTags,
[Spooly Tracker](https://spoolytracker.com/) construyó su identificación de bobinas
sobre ellos, y el
[firmware ampliado de la comunidad](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
de la Snapmaker U1 los lee **de forma nativa en la propia impresora**; consulta las
[integraciones de terceros](../developers/integrations.md).

## Un sandbox, a propósito

El **lado de cara al usuario** de TigerSystem es deliberadamente un **sandbox**. Cada
aplicación y dispositivo que creamos para los usuarios finales (Tiger Studio, Tiger
NFC Connect, TigerScale, TigerPOD y otros proyectos por venir) no tiene otra
ambición que **mostrar el potencial**: cada uno es una **prueba de concepto**
funcional de lo que hace posible un **protocolo de código abierto, estándar, agnóstico
y multiplataforma** como TigerTag, desde un script de fin de semana hasta un producto
completo. Cualquiera puede inspirarse en nuestro trabajo de integración e **imaginar
las funciones del mañana**. Son ejemplos para copiar, no una plataforma a la que
unirse.

El **lado de la fábrica no es un sandbox.** Detrás de los 2,5 millones de chips corre
una suite de nivel industrial, [TigerTag Factory y
Manager](../products/factory-suite.md): gestión de bases de datos de filamentos y
programación masiva NFC/RFID a velocidad de línea, con una firma de fábrica que prueba
el origen de cada producto, usada **en producción** por fábricas de filamento
socias. El sandbox es el escaparate; la línea de producción no es un experimento.

## Neutral por diseño

TigerTag no toma partido entre marcas de filamento, fabricantes de impresoras ni
distribuidores. No es un jardín vallado con una lista de socios: es un **formato que
cualquiera puede leer y escribir**.

Esa neutralidad se extiende a los propios chips: la mayoría de los usuarios finales
compran **chips NTAG baratos y sin marca** en Amazon, AliExpress o en tiendas locales,
y eso está bien a propósito. Nada los bloquea; el protocolo funciona igual. Los chips
oficiales con la marca TigerTag ayudan a financiar la I+D, pero no son necesarios:
**que el protocolo viva en los hogares y oficinas de los usuarios es la primera
recompensa.**

Ni siquiera el propio protocolo se impone: los chips se entregan **desbloqueados**,
así que un usuario que prefiera otro formato NFC/RFID, existente o a medida, puede
reescribir el chip y migrar. TigerTag es el formato base con el que llegan las
bobinas, no un formato al que quedes atado. Nada en el ecosistema es un requisito
previo: lee la especificación del chip, toma un SDK y construye el software o el
negocio que de verdad quieras.

## El manifiesto

> *«Hecho para makers. Abierto a todos. Nacido de la comunidad, TigerTag
> da a los usuarios datos reales y total libertad. 100 % de código abierto,
> conecta tu material, tus impresoras y tus marcas bajo un lenguaje universal,
> hoy y mañana. Únete al movimiento. Conecta tu mundo con TigerTag.»*
>
> — **Benoit Michaut**, CEO y fundador · Visión: **Cheap & Reusable** (barato y reutilizable)

---

**▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Ecosistema centrado en el usuario](../philosophy/user-centric-ecosystem.md) · **Las personas detrás:** [El equipo](./team.md)

**Véase también:** [Filosofía del ecosistema abierto](../philosophy/open-ecosystem.md), [Identidad universal del filamento](../concepts/universal-filament-identity.md)
