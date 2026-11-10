---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
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

### Correspondencia de importación: OpenSpool → TigerData

Esta es la correspondencia que aplicará el lector OpenSpool de Tiger Studio.
Leer un tag OpenSpool crea un **TigerData**: un registro sin chip, con un nuevo
`TigerData_<id>`. El chip OpenSpool no es un chip TigerTag, y un tag OpenSpool
no nombra ningún producto del catálogo, así que el registro nunca es un
TigerData+. Escrito más tarde en un chip TigerTag, se convierte en un TigerTag,
como cualquier TigerData.

Un tag solo es OpenSpool si su JSON lleva `"protocol": "openspool"`. Sus
campos se resuelven entonces con las [tablas de referencia](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Regla |
|---|---|---|
| `brand` | `id_brand` | buscada por nombre en `id_brand.json`, sin distinguir mayúsculas; ausente o desconocida → `Generic` (65535) |
| `type`, `subtype` | `id_material` | buscado en `id_material.json`, sin distinguir mayúsculas, en este orden: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`) y luego `type` solo. `NYLON` se lee como `PA` (59328). Un tipo ausente o desconocido se pregunta |
| `subtype`, si el material no lo usó | `id_aspect1` | el aspecto con ese nombre en `id_aspect.json` (`Matte` se lee como `Matt`, 247); si no, `Basic` (104); un subtipo que no coincide con nada se guarda en el `message` del registro |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | copiados; OpenSpool lleva un solo color |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; ausente → 1,75, el valor por defecto de OpenSpool; cualquier otro valor se pregunta |
| `weight` | `measure`, `id_measure_unit` | en gramos, unidad `g` (21); ausente → 1000, el valor por defecto de OpenSpool. La bobina empieza llena: `weight_available` = `weight` |
| `min_temp`, `max_temp` | boquilla mín. y máx. (`data2`, `data3`) | copiados; si ambos valen `0` (ausentes), los valores recomendados del material. `max_temp` por debajo de `min_temp`: el tag se rechaza, como en OpenRFID |
| — | temperatura y tiempo de secado, cama mín. y máx. (`data4`–`data7`) | los valores `recommended` del material en `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: ningún producto del catálogo |
| — | `timestamp` | la hora de la importación |

Dos reglas difieren a propósito del lector de OpenRFID:

- **Los valores de cama y secado vienen de la base de referencia de TigerTag**,
 no de la tabla de cinco filas de OpenRFID (PLA, PETG, ABS, TPU, NYLON, y cero
 para cualquier otro tipo). Son los que Tiger Studio rellena cuando se elige el
 mismo material a mano, y existen para los 113 materiales.
- **El material nunca se adivina.** OpenRFID lee un tipo ausente como PLA. Un
 material equivocado da temperaturas equivocadas, así que la importación
 pregunta.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Desarrolladores](../developers/README.md)
