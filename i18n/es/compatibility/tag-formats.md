---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Formatos de etiqueta de bobina comparados

Hoy se usan seis formatos NFC/RFID en las bobinas de filamento. Esta página los
pone lado a lado, a 6 de noviembre de 2026, con cada cifra tomada de la propia
especificación del formato o, para Bambu Lab y Creality (sin especificación
oficial), de trabajos públicos de ingeniería inversa. Describe; no clasifica.
[OpenSpool](./openspool.md) y [OpenTag3D](./opentag3d.md) tienen sus propias
páginas.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([ingeniería inversa][bbl]) | Creality CFS ([ingeniería inversa][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bytes para un registro completo | **80** (+ 64 B de firma) | 176 (248 B en la etiqueta) | 224 | 126 (JSON) | no documentado (chip de 1 KB) | 48 |
| Colores, máx. | 3 | 6 | 4 | 1 | 2 | 1 |
| Boquilla y cama mín. / máx. | sí | sí | sí | solo boquilla | boquilla; un valor de cama | no |
| Temperatura y tiempo de secado | sí | sí | sí | no | sí | no |
| Cantidad restante en el chip | sí | sí | no | no | no | no |
| TD de HueForge | sí | sí | sí | no | no | no |
| Mensaje de texto libre | 28 B | no | no | no | no | no |
| Firma verificable sin conexión | ECDSA-P256, clave pública publicada | no | no | no | RSA-2048, clave pública no publicada | no |
| Chip reescribible | sí | sí | sí | sí | no (rechazado una vez modificado) | no |
| Catálogo de productos abierto sin conexión | **20 348 productos** | 15 874 envases | no | no | no | no |
| Correcciones del chip después de la fábrica | una API abierta y estandarizada para todas las marcas; los SDK comparan y corrigen el chip, con la firma aún válida | no | `data_url` opcional hacia una API que cada fabricante crea y aloja por su cuenta; sin formato común, SDK ni flujo de actualización | no | no | no |

## Lo que muestra la tabla

- **El registro completo más compacto.** TigerTag guarda un registro de
  impresión completo (temperaturas, secado, cantidades, colores, TD) en 80
  bytes, frente a 176 en OpenPrintTag y 224 en OpenTag3D. Los dos registros más
  pequeños llevan menos: los 48 bytes de Creality no contienen ninguna
  temperatura, los 126 bytes de OpenSpool contienen siete campos. Es también el
  único formato aquí que cabe en un NTAG213, firma incluida.
- **Completo sin conexión, gracias al catálogo.** Un id de producto TigerTag+ se
  resuelve contra el catálogo público incluido (20 348 productos con nombre,
  serie, SKU, código de barras, foto e indicador de refill), sin red y sin
  cuenta.
- **Actualizaciones previsibles.** Una marca corrige un producto una vez, en la
  API que comparten todas las marcas; cualquier lector corrige después los chips
  ya vendidos.
- **No es el que más campos lleva en el chip.** OpenPrintTag lleva más colores y
  campos que TigerTag no tiene (GTIN, longitud). Lo que distingue a TigerTag es
  la combinación: un registro completo en pocos bytes, una firma verificable sin
  conexión y un catálogo abierto de más de 20 000 productos, en un NTAG213.

## Fuentes

- OpenPrintTag: [lista de campos][opt], tamaño según el vector de prueba de referencia
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  número de productos del catálogo según el README de [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [especificación][ot3d] y su
  [mapa de memoria](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [formato de etiqueta][osp], tamaño según su ejemplo documentado.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, ingeniería inversa).
- Creality CFS: [K2-RFID][cfs] (ingeniería inversa).
- TigerTag: la [especificación](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

¿Una cifra es errónea o está desactualizada? Abre una issue: esta página se
corrige, no se defiende.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Anterior:** [OpenTag3D](./opentag3d.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Desarrolladores](../developers/README.md)

**Véase también:** [Compatibilidad](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
