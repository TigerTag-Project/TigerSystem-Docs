---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Qué es

**OpenSpool** es un estándar comunitario abierto de etiquetas: datos de filamento
en **NDEF JSON** sobre etiquetas NFC Tipo 2, sin autenticación, sin criptografía,
totalmente abierto. En espíritu es un primo cercano de TigerTag.

## TigerTag frente a OpenSpool

| Aspecto | TigerTag | OpenSpool |
|---|---|---|
| Soporte | NTAG, carga útil NDEF de 144 bytes | NFC Tipo 2, NDEF JSON |
| Modelo de datos | ID compactos resueltos contra una base de datos de referencia compartida | JSON autodescriptivo |
| Nube | Cuenta opcional, inventario, uso compartido ([cuenta TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Ninguna (estándar solo de etiqueta) |
| Autenticidad | Opcional: un [TigerTag+](../products/tigertag-plus.md) firmado por un fabricante certificado es un **TigerTag+ Certified**, verificable sin conexión | Ninguna |
| Apertura | Especificación abierta + SDK | Especificación abierta |

## Migrar un chip de TigerTag a OpenSpool

Los chips TigerTag **nunca están bloqueados contra escritura**: TigerTag es solo
el protocolo base con el que se entregan las bobinas. Si prefieres OpenSpool (o
cualquier formato propio), puedes reescribir libremente los datos de un chip de
fábrica en ese formato.

## Interoperabilidad — especificación documentada, conversión a TigerData en marcha

Una hoja de decodificación de solo lectura para las etiquetas OpenSpool se mantiene en
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
como parte de la lectura RFID multifabricante prevista en Tiger Studio.

> **TODO:** decidir y documentar la asignación de importación (campos JSON de
> OpenSpool → ID de referencia de TigerTag) cuando llegue la compatibilidad de lectura.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Desarrolladores](../developers/README.md)
