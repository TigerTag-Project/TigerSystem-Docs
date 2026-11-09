---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Enlace con la impresora — **En vivo**

| Aspecto | Detalle |
|---|---|
| Protocolo | MQTT, puerto 1883 |
| Descubrimiento | Difusión UDP, puerto 52700 |
| Filamento | 4 ranuras (Canvas) |
| Control | Panel de control en vivo: origen/desplazamiento, temperaturas, luz, ventilador, modo de velocidad, carga/descarga |
| Telemetría | Temperaturas, progreso del trabajo |

## RFID nativo — especificación documentada, lectura en la app prevista

Las etiquetas de bobina de Elegoo son **Mifare Ultralight** protegidas solo por
**bytes mágicos** (`EE EE EE EE`), sin autenticación real. Especificación de
decodificación de solo lectura:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## El flujo de trabajo

1. **Añade la impresora** — descubrimiento automático en la LAN (difusión UDP) o
 Añadir por IP. Requiere activar una vez el **modo LAN Only** en la pantalla
 táctil de la impresora:
 [paso a paso](#cambiar-al-modo-lan).
2. **Escanea una bobina** — con el teléfono o un lector de escritorio; pasa a tu inventario.
3. **Asígnala a una ranura** — Tiger Studio asigna las bobinas del inventario a las
 cuatro ranuras Canvas.
4. **En vivo y control** — además de la telemetría y el progreso del trabajo, Elegoo
 recibe un **panel de control completo**: origen/desplazamiento de los ejes,
 objetivos de boquilla y cama, encender la luz, manejar el ventilador, elegir el
 modo de velocidad y cargar/descargar filamento por ranura.

## Cambiar al modo LAN

El enlace directo de Tiger Studio necesita el **modo LAN Only** activado en la propia impresora:
una configuración única, en pantalla.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Extra: escribir etiquetas en formato Elegoo

El editor integrado de la app puede **reescribir un chip en el formato que esperan
las impresoras Elegoo**, de modo que un chip TigerTag puede incluso convertirse en
una etiqueta nativa de Elegoo si tu flujo de trabajo lo necesita. Tu chip, tu elección.

## Leer TigerTag en la propia máquina — en preparación

Hay un firmware personalizado **en preparación** que permitiría a una impresora
Elegoo leer TigerTag **directamente**, en la máquina, con el mismo principio que la
[Snapmaker U1](./snapmaker.md).

Aún no está disponible y no hay fecha. Hasta que llegue, una Elegoo lee el
filamento identificado con TigerTag como describe el flujo de trabajo anterior:
mediante el teléfono, Tiger Studio o un [TigerSpool](../products/tigerspool.md)
junto a la máquina, sin cambiar nada en la impresora.

## Limitaciones

- Las etiquetas nativas de Elegoo aún no se leen en la app: la especificación está documentada, y el trabajo actual apunta a convertir los datos de las etiquetas del fabricante en bobinas TigerData (véase [Compatibilidad](./README.md)).

---

**◀ Anterior:** [Creality](./creality.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [FlashForge](./flashforge.md)
