---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Enlace con la impresora — **En vivo**

Tiger Studio se conecta a una impresora Bambu Lab de dos maneras:

| Aspecto | Detalle |
|---|---|
| LAN | MQTTS (TLS) directo a la impresora, puerto 8883. Requiere activar una sola vez el **modo solo LAN** y el **modo desarrollador** de la impresora: [paso a paso por modelo](#cambiar-al-modo-lan). |
| Nube | Inicia sesión una vez con tu cuenta de Bambu Lab (correo + código de un solo uso): todas las impresoras de la cuenta se encuentran automáticamente, con el código de acceso LAN incluido. Para esta parte no hace falta ningún ajuste en la impresora. |
| Filamento | Compatibilidad con AMS: hasta 16 ranuras, edición del filamento por ranura |
| Detección | LAN: SSDP + sondeo TLS, además de añadir por IP. Nube: automática, a partir de la cuenta. |
| Cámara | Flujo JPEG (TCP 6000) / RTSP: la misma imagen en ambos casos; requiere activar **LAN Mode Liveview** en la impresora |
| Telemetría | Temperaturas, progreso del trabajo, vista previa de impresión |

> **Las conexiones en la nube son de solo lectura hoy**, con una excepción. Obtienes telemetría en vivo
> (temperaturas, progreso, cámara) y la **luz** de la impresora, que sí se enciende y apaga por la nube.
> Todo lo demás que actúa sobre la máquina (pausar, reanudar, detener) necesita la vía LAN.

## RFID nativo — especificación documentada, lectura en la app prevista

Las etiquetas de bobina de Bambu son **Mifare Classic 1K** con **claves derivadas
del UID mediante HKDF-SHA256**, bloqueadas criptográficamente para servir al
ecosistema del fabricante. Se mantiene una especificación de decodificación de
solo lectura en
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## El flujo de trabajo

1. **Añade la impresora**, ya sea **en la LAN** (detección SSDP, o añadir por IP,
 emparejada con el código de acceso LAN de la impresora) o **desde la nube**
 (inicia sesión con tu cuenta de Bambu Lab: todas las impresoras de la cuenta se
 encuentran automáticamente). La vía LAN requiere activar antes, una sola vez, el
 modo solo LAN y el modo desarrollador de la impresora:
 [paso a paso por modelo](#cambiar-al-modo-lan).
2. **Escanea una bobina**, con el teléfono o un lector de escritorio; la bobina
 llega a tu inventario.
3. **Asígnala a una ranura del AMS**: Tiger Studio envía el perfil de filamento
 (material, color) a la ranura por MQTTS; la información del lado de la máquina
 ya coincide con la realidad, en hasta 16 ranuras del AMS.
4. **En vivo**: temperaturas, progreso del trabajo, vista previa de impresión,
 hora de finalización **«Termina a las»** y la imagen de la cámara, directamente
 en la vista de impresoras.

## Cambiar al modo LAN

La vía LAN requiere activar el **modo solo LAN** y el **modo desarrollador** en la propia impresora: una
configuración única, en pantalla. Elige tu modelo a continuación para ver los pasos exactos.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Limitaciones

- Las etiquetas nativas de Bambu todavía no se leen en la aplicación: la especificación está documentada y el trabajo actual busca convertir los datos de etiquetas de fabricante en bobinas TigerData (véase [Compatibilidad](./README.md)).
- La imagen de la cámara requiere LAN Mode Liveview activado en la impresora, sea cual sea la vía de conexión.

---

**◀ Anterior:** [Compatibilidad](./README.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Creality](./creality.md)
