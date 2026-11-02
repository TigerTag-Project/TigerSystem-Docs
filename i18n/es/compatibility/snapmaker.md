---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Enlace con la impresora — **En vivo**

| Aspecto | Detalle |
|---|---|
| Protocolo | WebSocket de Moonraker (JSON-RPC), puerto 7125 + extensiones propietarias |
| Descubrimiento | Escaneo HTTP |
| Filamento | 4 ranuras — edición del filamento por ranura (modelo de color RRGGBBAA) |
| Control | Panel de control en vivo (ejes, temperaturas, luz, ventilador, velocidad, carga/descarga) |
| Telemetría | Temperaturas, progreso del trabajo |

## RFID nativo — especificación documentada, lectura en la app prevista

Las etiquetas de bobina de Snapmaker son **Mifare Classic 1K** con **claves por
sector derivadas con HKDF** y una **firma RSA-2048 PKCS#1 v1.5 + SHA-256**, el
formato más bloqueado documentado hasta ahora. Especificación de decodificación de
solo lectura:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## El flujo de trabajo

1. **Añade la impresora** — escaneo HTTP en la LAN o Añadir por IP; Tiger Studio
 habla Moonraker (JSON-RPC sobre WebSocket).
2. **Escanea una bobina** — con el teléfono o un lector de escritorio; pasa a tu inventario.
3. **Asígnala a una ranura** — edición del filamento por ranura (el modelo de color
 RRGGBBAA de Snapmaker se gestiona de forma transparente).
4. **En vivo y control** — telemetría, progreso del trabajo y un **panel de control**:
 ejes, temperaturas, luz, ventilador, modo de velocidad, carga/descarga por ranura.

## Limitaciones

- Las etiquetas nativas de Snapmaker aún no se leen en la app: la especificación está documentada, y el trabajo actual apunta a convertir los datos de las etiquetas del fabricante en bobinas TigerData (véase [Compatibilidad](./README.md)).

## La primera impresora que lee TigerTag de forma nativa

El
[firmware extendido para Snapmaker U1](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
de la comunidad (independiente, GPL-3.0) añade SSH, transmisión de cámara y métricas, y con ello
**la Snapmaker U1 lee TigerTag de forma nativa, en la propia máquina**. Eso hace de
la U1 la primera impresora en la que una bobina TigerTag se reconoce sin ninguna
aplicación de por medio: el futuro al que apunta la
[jugada colectiva](../vision/for-filament-manufacturers.md), llegado antes de
tiempo gracias a la comunidad. Véanse las
[integraciones de terceros](../developers/integrations.md).

---

**◀ Anterior:** [Anycubic](./anycubic.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Klipper](./klipper.md)
