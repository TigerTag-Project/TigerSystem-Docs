---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Enlace con la impresora — **En vivo**

| Aspecto | Detalle |
|---|---|
| Protocolo | WebSocket, puerto 9999 (basado en latido) |
| Filamento | Compatibilidad multibobina CFS (boxsInfo) |
| Cámara | Vídeo WebRTC (puerto 8000) |
| Telemetría | Temperaturas, progreso del trabajo, vista previa de impresión |

## RFID nativo — especificación documentada, lectura en la app prevista

Las etiquetas de bobina de Creality son **Mifare Classic 1K** con una **clave
AES-128-ECB para el sector 1** y cifrado opcional de la carga útil. Especificación
de decodificación de solo lectura:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## El flujo de trabajo

1. **Añade la impresora** — descubrimiento en la LAN o Añadir por IP; Tiger Studio
 se conecta al WebSocket de la impresora y mantiene el enlace activo.
2. **Escanea una bobina** — con el teléfono o un lector de escritorio; pasa a tu inventario.
3. **Asígnala a una ranura CFS** — Tiger Studio asigna las bobinas del inventario a
 las cajas CFS para que la información de filamento del lado de la máquina
 coincida con la realidad.
4. **En vivo** — temperaturas, progreso del trabajo, vista previa de impresión,
 hora de finalización («Ends at») y la transmisión de la **cámara WebRTC** en la
 vista de impresoras.

## Limitaciones

- Las etiquetas nativas de Creality aún no se leen en la app: la especificación está documentada, y el trabajo actual apunta a convertir los datos de las etiquetas del fabricante en bobinas TigerData (véase [Compatibilidad](./README.md)).

---

**◀ Anterior:** [Bambu Lab](./bambu-lab.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Elegoo](./elegoo.md)
