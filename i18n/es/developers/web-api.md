---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# La Web API

## Para qué sirve

Un TigerTag lleva todo lo que necesita una impresora, **en el chip, sin conexión**.
La Web API existe para lo que un chip no puede contener y lo que cambia después de
escribirlo: las fichas técnicas, los documentos de seguridad, la foto, el vídeo,
las correcciones del fabricante.

Es **un único endpoint HTTP, para todos los filamentos, de todas las marcas**: sin
clave, sin cuenta, sin registro, sin acuerdos de tarifa que negociar. Entra un id de
producto y sale el producto.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

El parámetro `lang` selecciona el idioma de los campos de texto.

## Qué devuelve

Cuatro productos reales, de cuatro marcas distintas, a través de esa única dirección:

| `product_id` | Producto | Documentos devueltos |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · consejos · vídeo |
| `30` | R3D PLA High Speed | alimentario · MSDS · REACH · RoHS · TDS · vídeo |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · vídeo |
| `50` | eSun PLA+ | alimentario · MSDS · REACH · RoHS · TDS · consejos · vídeo |

Cada respuesta lleva la identidad (marca, serie, nombre, SKU, EAN, color), el perfil
de impresión completo (boquilla, cama, secador, ventilador, diámetro, peso, shore,
distancia de transmisión), la foto del producto y el bloque `links` de arriba:
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Por qué mantiene actualizado un TigerTag+

Un [TigerTag+](../products/tigertag-plus.md) guarda un **id de producto del
catálogo**, no una dirección. El id nunca caduca ni se mueve, así que un fabricante
puede corregir una temperatura o adjuntar una ficha técnica seis meses después de
enviar las bobinas, y todos los lectores ven el valor nuevo en la siguiente lectura,
sin reescribir nada en el chip y sin que el chip haya dependido nunca de la red para
imprimir.

Por eso también importa un único endpoint: una sola dirección sirve a todas las
marcas, así que un lector la implementa una vez y funciona con filamento que nunca
ha visto.

## También sin conexión: el catálogo entero es un archivo

Nada de lo anterior requiere que el endpoint esté accesible, ni siquiera que exista.

La referencia completa se publica como un único archivo,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json):
**todos los ids de todos los filamentos de la base de datos**, actualizado a lo
largo del día, de unos 12 MB, sin clave y sin cuenta. Cualquiera puede descargarlo,
replicarlo, incluirlo en una aplicación, ponerlo en un NAS de taller o llevarlo en
una memoria USB.

Un lector que tenga esa copia resuelve un id de TigerTag+ **sin ninguna red**. Eso
es lo que hace al id más seguro que una dirección: una dirección necesita que su
servidor responda, una referencia compartida solo necesita haberse copiado una vez,
y puede copiarse en cualquier lugar del planeta, por cualquiera, en cualquier
momento.

La Web API sigue siendo la vía más fresca, y la que lleva las fichas técnicas y la
foto. El archivo es el suelo que hay debajo.

## Lo que nunca hace

La Web API **no puede hacer que un chip funcione**, porque un chip ya funciona sin
ella. Lee un TigerTag en modo avión y obtienes marca, material, color, diámetro,
peso y temperaturas: toda la impresión. La Web API añade papeles e imágenes
alrededor, y correcciones por encima.

---

**◀ Anterior:** [API de cuenta e integración de terceros](./account-api.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Mapa de repositorios](./repositories.md)

**Véase también:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
