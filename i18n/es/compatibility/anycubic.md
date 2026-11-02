---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Enlace con la impresora — **En vivo** (LAN + nube)

| Aspecto | Detalle |
|---|---|
| Protocolo (LAN) | MQTTS, puerto 9883 (TLS 1.2), directo a la impresora |
| Protocolo (nube) | REST firmado + MQTT de la nube del fabricante |
| Filamento | Caja multicolor ACE — compatibilidad por ranura |
| Descubrimiento | Sondeo `/info`, puerto 18910 |
| Cámara | Transmisión FLV (puerto 18088) |
| Control | Panel de control en vivo (ejes, temperaturas, luz, ventilador, carga/descarga) |

> **Nota:** el modo nube es el único caso en que el enlace con la impresora pasa
> por la nube de un fabricante; el modo LAN sigue siendo totalmente local.

## RFID nativo — especificación documentada, lectura en la app prevista

Las etiquetas de bobina de Anycubic son **Mifare Ultralight** **sin autenticación
ni criptografía**: se leen (y se clonan) trivialmente. Especificación de
decodificación de solo lectura:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## El flujo de trabajo

1. **Añade la impresora** — dos vías: **modo LAN** (descubrimiento local mediante
 el sondeo `/info`; las credenciales de conexión se importan de la configuración
 del slicer del fabricante) o **modo nube** a través de la cuenta de Anycubic.
2. **Escanea una bobina** — con el teléfono o un lector de escritorio; pasa a tu inventario.
3. **Asígnala a una ranura ACE** — Tiger Studio asigna las bobinas del inventario
 a la caja multicolor ACE.
4. **En vivo y control** — telemetría, progreso del trabajo, la transmisión FLV de
 la cámara y un **panel de control**: ejes, temperaturas, luz, ventilador,
 carga/descarga por ranura.

## Limitaciones

- Las etiquetas nativas de Anycubic aún no se leen en la app: la especificación está documentada, y el trabajo actual apunta a convertir los datos de las etiquetas del fabricante en bobinas TigerData (véase [Compatibilidad](./README.md)).

---

**◀ Anterior:** [FlashForge](./flashforge.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Snapmaker](./snapmaker.md)
