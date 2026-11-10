---
title: "La identidad abierta del filamento"
description: "La identidad NFC abierta para filamento de impresión 3D: qué es TigerTag, qué funciona con él y cómo construir tu propia solución."
template: splash
editUrl: false
banner:
  content: Esta página se ha <strong>traducido automáticamente</strong> del inglés. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BES%5D+inicio">Informa de un error</a>.
hero:
  title: "TigerSystem"
  tagline: "Tu filamento, por fin inteligente, y por fin tuyo. Un pequeño chip NFC abierto, y una bobina por fin puede presentarse sola."
  image:
    html: |
      <div class="ts-hero-devices" role="img" aria-label="Tiger Studio en un ordenador, un lector TigerPOD con una bobina etiquetada y la aplicación móvil">
        <div class="ts-hd-item ts-hd-floats ts-hd-imac"><img class="ts-hd-float" src="/assets/hero/imac-studio.webp" alt="" width="1253" height="995" /></div>
        <div class="ts-hd-item ts-hd-pod">
          <img class="ts-hd-face" src="/assets/hero/tigerpod-mini.webp" alt="" width="450" height="665" />
          <img class="ts-hd-face ts-hd-face-scale" src="/assets/hero/tigerscale.webp" alt="" width="420" height="611" />
          <img class="ts-hd-face ts-hd-face-spool" src="/assets/hero/tigerspool.webp" alt="" width="420" height="511" />
        </div>
        <div class="ts-hd-item ts-hd-floats ts-hd-touch"><img class="ts-hd-float" src="/assets/hero/tigertouch-tour.webp" alt="" width="1000" height="733" /></div>
        <div class="ts-hd-item ts-hd-floats ts-hd-phone"><img class="ts-hd-float" src="/assets/hero/iphone-connect.webp" alt="" width="704" height="1427" /></div>
      </div>
  actions:
    - text: "Tu primera bobina inteligente"
      link: /es/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Por qué existe TigerSystem"
      link: /es/vision/why-tigersystem/
      variant: minimal
    - text: "Explorar los productos"
      link: /es/products/
      variant: minimal
---

## TigerSystem en 30 segundos

Toda estantería de impresión 3D esconde el mismo misterio: veinte bobinas, la
mitad sin etiqueta, y ninguna capaz de decir qué es, cuánto le queda ni cómo le
gusta imprimirse.

**TigerSystem lo resuelve con un pequeño chip.** Pega un chip NFC
[TigerTag](/es/products/tigertag/) en una bobina y la bobina se presenta sola:
a tu móvil, a tu ordenador, a tu impresora: *«Soy PLA negro mate de la marca X,
1,75 mm, imprímeme a 210 °C, y me quedan 640 g.»*

Los fabricantes de impresoras también etiquetan sus bobinas, pero **bloqueadas**,
en formatos secretos que solo funcionan con sus propias máquinas. TigerSystem
lo da la vuelta: el chip es **abierto y legible por cualquiera**, los datos son
de **tu** cuenta, y cada pieza (apps, nube, báscula, lector, la propia
especificación del chip) está publicada para que cualquiera la use o construya
sobre ella. Es un formato, no un jardín vallado.

Ya se han producido más de **2,5 millones de chips**, que salen de fábrica en
filamento de marcas como Rosa3D, eSun, Sunlu y R3D, lo que convierte a TigerTag
en el protocolo RFID de terceros más extendido del mundo.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Caja de filamento Rosa3D con TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="Caja de filamento eSun con TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Caja de filamento Sunlu con TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>No es una maqueta: cajas reales en estanterías reales, que se envían con TigerTag dentro.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/es/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Listo para probar</span><span class="ts-card__text">Haz inteligente una bobina en dos minutos: un chip NTAG virgen, tu móvil, la app gratuita. Sin cuenta, totalmente sin conexión.</span></span></a>
<a class="ts-card" href="/es/products/"><span class="ts-card__body"><span class="ts-card__title">Usuario</span><span class="ts-card__text">Lo que cada producto hace realmente por ti: chips, apps, la báscula, el soporte del lector.</span></span></a>
<a class="ts-card" href="/es/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Propietario de una impresora</span><span class="ts-card__text">¿Funciona con tu máquina? Seis marcas ya están operativas, y el chip funciona con todas las demás.</span></span></a>
<a class="ts-card" href="/es/developers/"><span class="ts-card__body"><span class="ts-card__title">Desarrollador</span><span class="ts-card__text">Lee y escribe chips desde JavaScript o Python, o integra la identidad en tu propio software.</span></span></a>
<a class="ts-card" href="/es/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Fabricante de filamento</span><span class="ts-card__text">Integración en fábrica en unos días, alrededor de un segundo por chip, a escala de producción.</span></span></a>
<a class="ts-card" href="/es/faq/"><span class="ts-card__body"><span class="ts-card__title">Solo curiosidad</span><span class="ts-card__text">Las preguntas que todo el mundo hace, con respuesta: chips, nube, impresoras, privacidad y mucho más.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Un banco de trabajo real de TigerSystem: Tiger Studio Manager, TigerScale, un sensor de color TD1S, un lector ACR122U y un TigerPOD" />
<figcaption>No es una maqueta: el entorno de pruebas en un banco real, con Studio, TigerScale, TD1s y TigerPOD trabajando juntos.</figcaption>
</figure>

## Dónde está la verdad

Esta wiki se genera a partir del
[repositorio TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs), que es la **fuente de
verdad** del ecosistema. Donde otra fuente discrepe del repositorio, prevalece
el repositorio.

**Y el repositorio es de todos.** No necesitas permiso, invitación ni ninguna
relación con el proyecto para corregirlo:

- ¿Algo está mal, poco claro o falta, y prefieres limitarte a decirlo? →
  [abre una issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- ¿Sabes qué debería decir? → cada página tiene un enlace **«Editar página»**
  que te lleva directamente al Markdown que hay detrás. Cámbialo, abre un pull
  request y listo: GitHub se ocupa del fork por ti, y funciona desde el móvil.

Erratas, mejores formulaciones, un paso que falta, una página que te hizo
tomar un camino equivocado: todo es bienvenido, y las pequeñas correcciones son
las que se acumulan.
El contenido está bajo [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
consulta [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md) para las reglas de la casa, que
caben en una pantalla.

La política de marca cubre la *marca*, el logotipo de un chip físico. No tiene
nada que ver con esta documentación, que está abierta a todo el mundo.

Los asistentes de IA deberían empezar por [llms.txt](/llms.txt), la explicación
canónica condensada. Todos los demás pueden empezar por el
[glosario](/es/glossary/) si algún término se interpone.
