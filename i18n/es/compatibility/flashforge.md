---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Enlace con la impresora — **En vivo**

| Aspecto | Detalle |
|---|---|
| Protocolo | Sondeo HTTP (puerto 8898) + códigos M por TCP (puerto 8899) |
| Detección | Multidifusión UDP (225.0.0.9:19000) |
| Filamento | IFS: el sistema multifilamento de FlashForge |
| Cámara | Flujo MJPEG |
| Telemetría | Temperaturas, progreso del trabajo |

## RFID nativo — ninguno: las máquinas no tienen lector

Las impresoras FlashForge se entregan **sin ningún lector RFID** y sin un formato
RFID propio. Eso la convierte en la demostración más clara de la ventaja de
TigerSystem: **hemos dado a las máquinas FlashForge la capacidad de trabajar con
filamento identificado por NFC, usando el lector NFC que ya lleva el smartphone
del usuario.** Una capacidad completamente nueva, añadida a la impresora de otro,
**totalmente gratis, sin coste para el usuario y sin modificar la máquina.**

## FlashForge × TigerSystem — el firmware oficial

El propio equipo de ingeniería de FlashForge creó un firmware para la **Creator 5**
y la **Creator 5 Pro** que ejecuta **FlashForge Cloud y la LAN a la vez**.

Eso importa más de lo que parece. El firmware de serie obliga a elegir: si activas
Cloud, las herramientas locales ya no llegan a la impresora. Esa elección era lo
único que separaba a un propietario de FlashForge de este ecosistema, y ahora ha
desaparecido. Es un **firmware oficial de FlashForge**, no una bifurcación de la
comunidad ni un parche, creado con TigerTag para esta integración y publicado aquí
con su acuerdo.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Descargar — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Descargar — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Código fuente y guía de instalación</a>
</div>

Se instala desde una unidad USB. Gratis para todo el mundo, con o sin hardware TigerTag.

### Conectarla, una vez flasheada

Activa el **modo LAN** en los ajustes de la impresora: ese es todo el cambio que
habilita el firmware. Tiger Studio la encuentra entonces mediante la **detección
automática**, o la añades a mano con su **dirección IP**. Ya no hay que elegir
entre Cloud y las herramientas locales: ambos están activos a la vez.

| | Firmware de serie | Con este firmware |
|---|:---:|:---:|
| FlashForge Cloud: aplicación, acceso remoto | ✅ | ✅ |
| Acceso LAN: herramientas locales en tu red | ✅ | ✅ |
| **Ambos a la vez** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect y TigerSpool **con Cloud activado** | ❌ | ✅ |

### No se renuncia a nada

El propietario conserva todas las funciones de FlashForge Cloud y gana además todo
el ecosistema: un **gestor de filamento e impresoras** gratuito y de código abierto
en el escritorio, un **teléfono que lee y escribe bobinas** y
**[TigerSpool](../products/tigerspool.md)**, una caja lectora de código abierto que
se coloca junto a las máquinas y mantiene en su lista **hasta 24 impresoras**, diez
de ellas conectadas a la vez: una sola caja para toda la estantería.

Así, una impresora sin lector y sin formato propio lee ahora el chip de cualquier
marca de filamento que use TigerTag, y también el de las bobinas que los
aficionados etiquetan por su cuenta en casa, sobre filamento que nunca salió de
fábrica con un chip.

Que el fabricante de una impresora abra su máquina a un ecosistema que no es suyo
es una decisión poco común. Todos los usuarios que tienen una se benefician de ella.

## El flujo de trabajo

1. **Añade la impresora**: se encuentra con el escaneo de red (multidifusión UDP),
 donde solo necesita su Printer ID, o se añade a mano con su dirección IP,
 número de serie y Printer ID.
2. **Escanea una bobina**, con el teléfono (o un lector de escritorio); llega a
 tu inventario.
3. **Asígnala a una ranura del IFS**: **un escaneo, un clic** desde la asignación
 de Tiger Studio. La impresora acaba conociendo su filamento con tanta precisión
 como una máquina con RFID integrado, en cualquier modelo FlashForge, sin
 cambios de hardware y sin añadir nada a la máquina.
4. **En vivo**: temperaturas, progreso del trabajo y el flujo de cámara MJPEG en
 la vista de impresoras.

## Añadir la impresora

Tiger Studio necesita tres cosas para hablar con una FlashForge: su **dirección
IP**, su **número de serie** y una **contraseña**, que la propia impresora llama
**Printer ID**. Un solo valor con dos nombres: lo que la pantalla táctil muestra
como Printer ID es lo que va en el campo de contraseña de Tiger Studio.

Cuántos de los tres tienes que escribir depende de cómo se encuentre la impresora:

| Cómo | Qué introduces |
|---|---|
| **Escaneo de red**: Tiger Studio encuentra la impresora en tu red local | solo el **Printer ID**; el escaneo aporta la IP y el número de serie |
| **A mano**: el escaneo no la encontró | **dirección IP + número de serie + Printer ID** |

No hay vía por la nube, así que siempre es una de estas dos. Elige tu modelo para
ver dónde está cada valor en la pantalla táctil.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Anterior:** [Elegoo](./elegoo.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Anycubic](./anycubic.md)
