---
sourceHash: bbc5e9975e29d36151f72d68e741b2688c5f2a46503d71f8f73aae13a8b74ce6
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Qué es

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** es un estándar abierto
de etiquetas para bobinas de filamento impulsado por la comunidad: una carga útil
NDEF dimensionada para caber en un NTAG215, sin cifrado, con especificación
publicada y lista abierta de adheridos. Como TigerTag, existe porque la industria
se llenaba de un formato propietario por marca de impresora, y deja claro que una
etiqueta debe funcionar **totalmente sin conexión**. En espíritu es un primo
cercano.

Ambos estándares definen además una capa en línea, y ambos la llaman **Web API**,
que es justo donde los dos diseños divergen, a propósito y en sentidos opuestos.

## Dos diseños, lado a lado

| Aspecto | TigerTag | OpenTag3D |
|---|---|---|
| Qué guarda el chip para llegar a la capa en línea | un **id de producto del catálogo** | una **«Online Data URL»**: la propia dirección |
| Quién responde | **un solo endpoint, todas las marcas** | un endpoint por etiqueta, alojado por quien la escribió |
| Función de la capa en línea | el **canal de actualización**: las correcciones llegan a bobinas ya enviadas | **complementaria por diseño**: la especificación afirma que «will NEVER be relied upon for printer functionality» |
| Documentos normativos | TDS · MSDS · RoHS · REACH · EN71 · contacto alimentario, por producto | no figuran en el esquema: la Web API lleva fotos, precio, enlaces del producto, estado de control de calidad y notas |
| Copia de los datos de la etiqueta en línea | sí, el perfil completo | sí, `tag_data`: **opcional**, como todos los campos salvo la versión |
| Prueba de origen | opcional: un [TigerTag+ Certified](../products/tigertag-plus.md) se firma y se verifica sin conexión | ninguna, deliberadamente: la especificación rechaza el cifrado por «unsuitable for an open source standard» |

## Qué se deriva de un id frente a una dirección

Ninguno de los dos enfoques es casual, y cada uno compra algo distinto.

Guardar la **dirección** mantiene la etiqueta autosuficiente: quien la escribe
decide dónde viven sus datos y no responde ante nadie. El coste es que la dirección
queda escrita en el chip, dentro del presupuesto de bytes de la carga útil, y un
chip no puede redirigirse una vez está en manos de un cliente: si ese servidor
cambia de sitio o deja de responder, lo que se rompe es el enlace.

Guardar un **id** parece poner un endpoint compartido en el camino, y lo haría si
la referencia fuera nuestra para retenerla. No lo es: todo el catálogo se publica
como un único archivo,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json),
con todos los ids de todos los filamentos de la base de datos, actualizado a lo
largo del día y libre para que cualquiera lo copie. Un lector puede tener su
propio espejo y resolver ids sin ninguna red.

Así que el id compra lo que la dirección no puede. El chip nunca guarda una
ubicación, por lo que sigue siendo válido pase lo que pase con cualquier servidor;
un lector implementa un solo endpoint y funciona con filamento que nunca ha visto;
un fabricante corrige datos seis meses después de que las bobinas salieran de
fábrica; y la propia resolución puede ser totalmente sin conexión, sobre una copia
que cualquiera puede conservar.

La [firma](../products/tigertag-plus-certified.md) es la otra consecuencia. Como
un TigerTag+ Certified firma el UID del propio chip, los datos pueden mejorar en
línea mientras la bobina sigue demostrando de dónde viene, sin conexión y en el
propio teléfono del cliente.

## Interoperabilidad

Los chips TigerTag **nunca se bloquean contra escritura**. Si prefieres OpenTag3D,
o cualquier otro formato, eres libre de reescribir en él un chip de fábrica. Es la
misma postura que mantenemos con [OpenSpool](./openspool.md), y por la misma
razón: la bobina pertenece a quien la compró.

---

**◀ Anterior:** [OpenSpool](./openspool.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Formatos de etiqueta de bobina comparados](./tag-formats.md)

**Véase también:** [La Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
