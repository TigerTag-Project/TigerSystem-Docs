---
sourceHash: 69fadb6f1709482970523a7f91db7d0d293bb19eef68b0faab1fe4d63f04db93
sourcePath: docs/tutorials/send-a-request.md
---

# Cómo enviar una solicitud

Tiger Studio Manager te permite enviar al equipo un problema, una idea, una
corrección del catálogo o una pregunta sin salir de la aplicación. Es gratis, **no
necesita cuenta de GitHub**, se envía **sin tu nombre ni tu email** y se convierte
en una **issue pública en GitHub** que el equipo puede leer y responder.

Las pantallas de abajo son de Tiger Studio Manager v2.41.0.

## Abre el formulario

Tienes que haber **iniciado sesión** en Tiger Studio Manager. En la barra lateral,
haz clic en **Mejoras y sugerencias** (1): el botón ✨ cerca del final; si la barra
lateral está contraída, es el icono ✨.

<img src="../assets/send-a-request/01-open-form.jpg" width="300" alt="La barra lateral de Tiger Studio Manager con el botón Mejoras y sugerencias resaltado" />

El formulario se abre como una **tarjeta lateral**: la aplicación sigue siendo
utilizable detrás. Ciérrala, ve a otra pantalla, ábrela de nuevo: **tu borrador se
conserva** hasta que lo envíes.

## Elige un tipo

Hay seis tipos, uno por cada clase de solicitud, y cada uno tiene su propio
formulario con su propio texto. Elige el que encaje (1–6). La pestaña **Enviar
comentario** (7) es donde estás; **Mis solicitudes** (8) guarda el registro de todo
lo que enviaste: consulta [Sigue tu solicitud](#sigue-tu-solicitud).

<img src="../assets/send-a-request/02-pick-a-type.jpg" width="460" alt="Los seis tipos de solicitud y las pestañas Enviar comentario y Mis solicitudes" />

| Tipo | Úsalo para | Ejemplo |
|---|---|---|
| **Informar de un problema** | Un bug, un error, algo que no funciona | La vista de la cámara se congela tras una reconexión |
| **Proponer una idea** | Una función nueva para todo Tiger System | Avísame cuando una bobina esté casi vacía |
| **Sugerir una mejora** | Algo que existe pero podría ser más práctico | Déjame ocultar los accesos directos que nunca uso |
| **Corregir una ficha de producto** | Un filamento con un valor erróneo o ausente en el catálogo | El código de barras no coincide con la caja |
| **Proponer una marca** | Una marca que falta en el catálogo | Example Filaments — examplefilaments.com |
| **Hacer una pregunta** | Una cifra, una pantalla o una función que te desconcierta | ¿Qué incluye el peso que aparece en una tarjeta de bobina? |

*Corregir una ficha de producto* y *Proponer una marca* tratan de los **datos del
catálogo** (los valores de un filamento, una marca que falta). *Hacer una pregunta*
sirve para pedir ayuda o una explicación. Todo lo que tenga que ver con la propia
aplicación va en *Informar de un problema*, *Proponer una idea* o *Sugerir una
mejora*.

## Escribe tu solicitud

El formulario es el mismo para la mayoría de los tipos: un título, una descripción,
las imágenes, la comprobación; luego, enviar. Así es para **Informar de un problema**:

<img src="../assets/send-a-request/03-report-form.jpg" width="460" alt="El formulario Informar de un problema con un título y una descripción rellenados" />

1. **Título del problema**: una línea.
2. **Barra de formato**: negrita, *cursiva*, una lista, un enlace y emoji.
3. **Descripción**: qué hiciste, qué esperabas, qué pasó en su lugar.

Un buen informe, en tres líneas:

> **Título:** La vista de la cámara se congela cuando la impresora se reconecta
> **Descripción:** 1. Abro la vista de la cámara con una impresora en línea. 2. Desconecto el
> cable de red de la impresora y lo vuelvo a conectar. 3. La imagen sigue congelada hasta que
> reinicio la aplicación. Esperado: que vuelva por sí sola.

### Los otros cinco tipos

Los tres tipos de la aplicación (*Informar de un problema*, *Proponer una idea*,
*Sugerir una mejora*) comparten la misma disposición; solo cambian las etiquetas y
el nombre del botón de envío (**Enviar mi reporte**, **Enviar mi idea**, **Enviar mi
sugerencia**).

**Proponer una idea**: una línea para la idea, luego **cómo funcionaría** y **qué
cambiaría para ti**. Es para todo Tiger System: cuanto más descabellada, mejor.

<img src="../assets/send-a-request/06-type-idea.jpg" width="460" alt="El formulario Proponer una idea" />

**Sugerir una mejora**: una línea para **qué mejorar**, luego **qué estorba hoy** y
**cómo te gustaría que funcionara**. Una imagen de la pantalla en cuestión lo deja
claro.

<img src="../assets/send-a-request/07-type-improvement.jpg" width="460" alt="El formulario Sugerir una mejora" />

**Corregir una ficha de producto**: busca el material (marca, nombre, color o código
de barras) y elígelo (1; 2 elige otro), luego di **qué está mal** (3) y **dónde
encontraste el valor correcto**: caja, etiqueta, web del fabricante.

<img src="../assets/send-a-request/08-type-product-sheet.jpg" width="460" alt="El formulario Corregir una ficha de producto con un material elegido" />

**Proponer una marca**: el **nombre** y el **sitio web** son obligatorios: el equipo
comprueba el sitio antes de añadir la marca. La descripción es opcional: país,
materiales, dónde comprar.

<img src="../assets/send-a-request/09-type-brand.jpg" width="460" alt="El formulario Proponer una marca" />

**Hacer una pregunta**: una línea para la pregunta, luego **dónde lo viste** y qué
no cuadra. Las imágenes también ayudan aquí.

<img src="../assets/send-a-request/10-type-question.jpg" width="460" alt="El formulario Hacer una pregunta" />

## Añade imágenes y archivos

Una imagen muestra el problema mejor que una descripción. Arrastra archivos al
formulario, **explora** para buscarlos, **pega** una captura de pantalla o haz clic
en **Capturar la ventana actual** (2 en la imagen siguiente). La tarjeta se oculta
un momento para que la imagen muestre la aplicación y no el formulario; así puedes
cerrar la tarjeta, ir a otra pantalla y capturarla.

Lo que puedes adjuntar:

- **Hasta 5 archivos** en total.
- **Imágenes**: PNG, JPG, WEBP.
- **PDF**: hasta 5 MB (una hoja de datos, una factura, una etiqueta).
- **JSON**: hasta 2 MB, y tiene que ser un archivo JSON válido (una exportación, el
  estado de una impresora…).
- Haz clic en la ✕ de una miniatura para quitarla.

### Dibuja sobre una imagen

Haz clic en una imagen para abrir el editor. Elige una herramienta y dibuja: un
**recuadro** alrededor de la cosa, **pasos numerados** en el orden en que ocurren
las cosas, una **flecha**… Cada marca sigue siendo editable hasta que haces clic en
**Listo** (arriba a la derecha); **Cancelar** descarta los cambios.

<img src="../assets/send-a-request/05-drawing-tools.jpg" width="700" alt="La barra de herramientas del editor de imágenes: herramientas, colores, tamaños, deshacer y rehacer" />

1. **Mover** (V)
2. **Lápiz** (P)
3. **Goma** (E)
4. **Flecha** (A)
5. **Línea** (L)
6. **Recuadro** (R)
7. **Círculo** (O)
8. **Rotulador** (H)
9. **Texto** (T)
10. **Paso numerado** (N)
11. **Difuminar** (B)
12. **Colores**
13. **Tamaños**: S, M, L, XL
14. **Deshacer, rehacer, duplicar, eliminar**

La letra que aparece en cada herramienta es su atajo de teclado. Deja el puntero
sobre una herramienta para ver su pista; arrastra un objeto para moverlo, usa sus
esquinas para cambiar su tamaño, **Supr** lo elimina.

:::caution[Oculta todo lo privado]
La solicitud es pública. Usa la herramienta **Difuminar** para cubrir un nombre, un
email, una dirección o una IP que aparezcan en tu imagen **antes** de enviarla.
:::

## Comprueba y envía

<img src="../assets/send-a-request/04-check-and-send.jpg" width="460" alt="La parte inferior del formulario: archivos adjuntos, información automática, la casilla de confirmación y el botón de envío" />

1. **Archivos adjuntos**: imágenes o archivos (opcional).
2. **Capturar la ventana actual.**
3. **Información automática**: ábrela para ver exactamente qué viaja con tu
   solicitud.
4. **Casilla de confirmación**: tu solicitud es **pública**, así que no pongas nada
   privado en ella (email, dirección, contraseña, dirección IP…). Marca la casilla.
5. **Enviar**: el nombre del botón depende del tipo: **Enviar mi reporte**, **Enviar
   mi idea**, **Enviar mi sugerencia**…

Qué contiene **Información automática**:

- Versión de la aplicación, página actual, sistema operativo y tamaño de la ventana.
- **Marcas** de impresoras; nunca nombres, direcciones ni códigos.
- Tu insignia TigerSquad y tu XP.
- Si la aplicación registró errores, una casilla te permite **adjuntarlos también**.

## Después de enviar

Mientras se envía, corre una breve lista de progreso: preparando el mensaje,
añadiendo la información del sistema, enviando, finalizando. Si falla, te quedas en
el formulario con tu borrador: inténtalo de nuevo.

<img src="../assets/send-a-request/11-sending.jpg" width="400" alt="La pantalla de envío con su lista de progreso" />

Después recibes una confirmación: tu solicitud ya existe como una issue pública.
Guarda el **número de seguimiento** (1): es el número de la issue en GitHub. **Ver
mis solicitudes** (2) abre el seguimiento; **Enviar otro comentario** (3) empieza un
formulario nuevo.

<img src="../assets/send-a-request/12-thanks.jpg" width="400" alt="La pantalla ¡Gracias por tu comentario! con el número de seguimiento" />

## Sigue tu solicitud

La pestaña **Mis solicitudes** enumera todo lo que enviaste, con su progreso; el
número de la pestaña cuenta las que siguen abiertas.

<img src="../assets/send-a-request/13-my-requests.jpg" width="460" alt="La pestaña Mis solicitudes con solicitudes en distintos estados" />

1. **Estado**
2. **Verlo en GitHub**
3. **Cerrar esta solicitud**
4. **Confirmar**

| Estado | Significado |
|---|---|
| **Enviada** | recibida, nadie la ha mirado todavía |
| **En curso** | alguien está trabajando en ella |
| **Hecha** | corregida o entregada |
| **Descartada** | el equipo no lo hará |
| **Cerrada por ti** | la cerraste tú mismo |

Solo se pueden cerrar las solicitudes **Enviada** y **En curso**: haz clic en la ✕ y
confirma con **¿Cerrarla?**.

**Se te avisa.** Cuando una solicitud cambia de estado o recibe una respuesta del
equipo, aparece una notificación en la campana. Se comprueba al iniciar la
aplicación y cuando se abre la pestaña **Mis solicitudes**.

## Si algo sale mal

- *«No se ha enviado»*: inténtalo de nuevo en un momento, tu borrador sigue ahí.
- *«Inicia sesión primero»*: la solicitud necesita tu cuenta de Tiger.
- *«Son muchos reportes para un día»*: es un límite diario; inténtalo de nuevo mañana.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Tiger Studio](../products/tiger-studio.md), [Preguntas frecuentes](../faq/README.md), [Tutoriales](./README.md)
