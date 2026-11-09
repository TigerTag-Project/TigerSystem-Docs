---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# El formato de archivo `.ttag`

El **archivo de intercambio de inventario `.ttag`** es una instantánea portátil y
sin conexión de uno o más materiales del inventario. Es la unidad para **respaldar**
tus filamentos, **llevarlos** en una memoria USB y **compartirlos**: entre cuentas,
entre herramientas o como colecciones listas de marcas/gamas.

Introducido en **Tiger Studio Manager v2.14.0** (exportación + importación). El
formato es estable y común a todas las aplicaciones: las herramientas de terceros,
un futuro playground web que genere archivos `.ttag` y las colecciones de
filamentos preparadas se construyen todos sobre esta especificación.

## Estructura del archivo

Un archivo `.ttag` es un único documento **JSON en UTF-8**:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Campo | Significado |
|---|---|
| `format` / `kind` | Siempre `"tigertag"` / `"ttag"`: el par de identificación que se comprueba al importar |
| `version` | Versión del formato; actualmente `1` |
| `exportedAt` | Hora de exportación, **cadena ISO 8601** (p. ej., `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | uid del propietario que exporta: **una pista de UX para elegir el modo de importación, SOLO eso, nunca un límite de seguridad** |
| `records[]` | Documentos de inventario, transportados **literalmente** |
| `rfidBackups` | *Opcional.* Indexado por UID de chip; presente solo para bobinas TigerTag+ (certificadas): el volcado de fábrica firmado que sirve para restaurar el chip |

**Los `records[]` son los documentos de inventario de Firestore, literalmente**:
exactamente `users/{uid}/inventory/{spoolId}` tal como se documenta en el
[modelo de datos canónico](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(úsalo como diccionario de campos). Tres matices:

- **Los campos son dispersos**: un campo solo se escribe cuando está presente en el
 documento: `twin_tag_uid` solo en gemelos, `rfidBackup: true` solo en TigerTag+,
 `id_product` solo cuando se conoce, y así sucesivamente.
- **Los campos de URL están controlados por el atacante**: `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` y `url_img*` se sanean al
 importar: se descarta cualquier esquema que no sea http(s).
- **La ubicación en el rack viaja pero no se aplica**: `rack`, `rack_id`, `level`,
 `position` pueden aparecer en el archivo pero carecen de significado al importar
 (una bobina importada no hereda el rack de quien exporta).

### Campos obligatorios y opcionales

A **nivel de archivo**:

| Campo | Estado |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Obligatorio**: si falta o no coincide, el archivo se rechaza |
| `records[]`, no vacío | **Obligatorio**: un archivo vacío se rechaza |
| `exportedAt`, `exportedBy` | Informativos (`exportedBy` es solo una pista de UX) |
| `rfidBackups` | Opcional: presente solo cuando se incluyen bobinas TigerTag+ |

A **nivel de registro**:

| Categoría | Campos |
|---|---|
| **Obligatorio** | `uid` (`TigerData_<id>` o UID del chip) · **`id_brand`** |
| Identidad básica (presente en todo registro bien formado) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag`: se resuelven contra la base de datos de referencia compartida |
| Capacidad | Normalizada a partir de `measure` + `id_unit`: **`measure_gr` en gramos para sólidos** (p. ej., `measure: 1` + kg → `measure_gr: 1000`) y **`measure_ml` en mililitros para líquidos** (resinas). Los generadores pueden proporcionar `measure` + `id_unit`; el valor normalizado es el canónico almacenado |
| Opcionales habituales | campos de color (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, cadenas para mostrar (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Condicionales | `twin_tag_uid` (solo gemelos: recíproco dentro del archivo) · `tag_index` / `tag_count` (solo registros respaldados por chip: chip *i* de *n* leído del byte +39 del chip, protocolo TigerTag v2.2; un nibble cada uno, `0` = desconocido; nunca en un registro sin chip) · `rfidBackup: true` **más** una entrada `rfidBackups` correspondiente (solo TigerTag+) · `id_product` (solo productos de catálogo conocidos) |
| Transportados pero ignorados al importar | `rack`, `rack_id`, `level`, `position` |

Para cualquier caso límite no cubierto aquí, el **importador de Tiger Studio es la
implementación de referencia**: los generadores de terceros deberían apuntar a
registros que un Studio de serie acepte.

Reglas incorporadas al formato:

- **Dos convenciones de marca de tiempo, por diseño.** El `exportedAt` de la raíz
 es una **cadena ISO 8601**. Las marcas de tiempo *dentro* de `records[]`
 (`updatedAt`, y las variantes heredadas `updated_at` / `last_update`) son
 **números en milisegundos epoch**: el serializador convierte los Timestamps de
 Firestore para que el archivo se serialice limpiamente. No «corrijas» una para
 que coincida con la otra: los archivos que circulan ya tienen esta forma.
- **Los gemelos son atómicos.** Un material con gemelo siempre exporta **ambos**
 lados: un material → dos registros, vinculados por `twin_tag_uid`. Nunca se
 produce medio gemelo.
- **Disciplina de ids.** Solo pueden aparecer ids `TigerData_<id>` sin chip; un id
 heredado `CLOUD_<id>` se rechaza al exportar.

### Contenedores (`container_id`, `container_weight`)

`container_id` indica la bobina vacía en la que está el filamento.
`container_weight` es el peso de esa bobina vacía, en gramos: la tara que una
báscula resta para que el inventario muestre el filamento neto.

Los ids son cadenas de una lista fija que se distribuye con Tiger Studio,
[`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Cada entrada lleva la marca a la que pertenece (`brandId`, el mismo número que
`id_brand`) y un peso de catálogo. La mayoría son la bobina propia de una
marca — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — y tres son genéricas, para una marca cuya
bobina aún no está en la lista:

| `container_id` | Cómo aparece en Tiger Studio | Peso de catálogo |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` no resta nada. Es correcto para una recarga pesada sin
ninguna bobina, y erróneo en cualquier otro caso: una bobina que lo lleva
muestra su peso bruto, unos 200 g más que el filamento que queda.

`container_weight` es una **instantánea** tomada al elegir el contenedor, no una
consulta. Un registro conserva su valor cuando la lista cambia, y una cuenta
puede corregir el peso de un contenedor para sus propias bobinas (guardado en
`users/{uid}/containerOverrides/{id}`; la lista compartida nunca se modifica).

Un generador que conoce la bobina vacía escribe los dos campos. Uno que no la
conoce los omite en lugar de adivinar: Tiger Studio pone entonces el contenedor
propio de la marca, o pregunta cuando hay varios o ninguno.
## Tipo de medio

El tipo de medio canónico es **`application/vnd.tigertag.ttag+json`**: importa
cuando un `.ttag` se **sirve por http(s)** (el `Content-Type` que debería enviar un
playground web, una CDN o un host de colecciones de marcas).
`application/json` también se acepta. Un archivo en disco no lleva MIME: se
identifica por su extensión `.ttag` y, de forma autoritativa, por su contenido:
los importadores **validan por contenido** (`format`/`kind`/`version`), nunca solo
por la cabecera MIME o la extensión del archivo.

## Disponibilidad

La exportación y la importación se incluyen en **Tiger Studio v2.14.0+**. El
formato está diseñado para ser portátil; otras superficies podrán adoptarlo con el
tiempo: hoy, Studio es la implementación de referencia.

## Qué puede transportar un `.ttag`

Los tres [niveles de bobina](../concepts/universal-filament-identity.md) se
exportan e importan:

| Nivel | En el archivo |
|---|---|
| **TigerData** (totalmente digital, sin chip) | El propio registro |
| **TigerTag** (un chip escrito) | El propio registro |
| **TigerTag+** (chip certificado) | El registro **más** su volcado de fábrica firmado en `rfidBackups` |

## Exportación

- **Una sola bobina**: desde la caja de herramientas de detalle de la bobina → un
 archivo llamado `brand-material-color.ttag`.
- **Selección múltiple**: selecciona varias bobinas, botón **Exportar** de la barra
 de herramientas → un archivo llamado `tigertag-selection-<date>.ttag`.
- La exportación está disponible **solo para el inventario propio del usuario**.

## Importación: validar → previsualizar → aceptar

El importador acepta **varios archivos `.ttag` a la vez**: explorar, pegar un
enlace http(s) o arrastrar y soltar en cualquier parte de la ventana.

1. **Validar.** Cada archivo debe llevar el par `format`/`kind` y
 `version ≤ 1`. Un archivo que no sea `.ttag`, una versión más reciente o un
 archivo vacío se rechaza. Cada **registro** debe llevar entonces la carga útil
 completa del chip: véase *Campos obligatorios* más abajo.
2. **Sanear.** El contenido del archivo es una entrada no fiable: los campos de URL
 que no sean http(s) se descartan; los valores de color, peso y TD se limitan a
 rangos válidos.
3. **Previsualizar.** Cada material se muestra en una tabla de vista previa con una
 **casilla de inclusión** por material.
4. **Aceptar** en uno de dos modos, preseleccionado a partir de `exportedBy` y
 cambiable libremente:

|| **Restaurar** | **Importar** |
|---|---|---|
| Intención | La misma cuenta / una restauración genuina | Adoptar materiales de otra persona |
| Ids de registro | Se conservan: escritos **literalmente** con los ids originales | Ids **nuevos**: cada registro se convierte en una bobina `TigerData_` nueva sin chip, propiedad de quien importa |
| Estado del chip | Se conserva: se restaura cada copia de seguridad de `rfidList` | Se descarta (la copia no tiene chip): se elimina `id_tigertag`, `rfidBackup:false`, las copias de seguridad se descartan (un volcado firmado está ligado a un chip que quien importa no tiene) |
| Producto | Se conserva | **Se conserva** cuando `id_product` es un id real del catálogo (ni `0` ni `0xFFFFFFFF`), así que un TigerData+ sigue siendo un TigerData+ y un TigerTag+ llega como el TigerData+ del mismo producto; cualquier otro valor se pone a `0xFFFFFFFF` (sin establecer). Antes de Tiger Studio v2.51.1 siempre quedaba sin establecer, así que un TigerData+ llegaba como un simple TigerData |
| Peso | Tal como se registró | Restablecido a la capacidad completa |
| Gemelos | Tal como se registró | `twin_tag_uid` reasignado mediante los ids nuevos |

### Campos obligatorios: un registro debe poder crear un chip

Un `.ttag` existe para **crear chips TigerTag / TigerTag+**. Un registro que no
puede producir uno no es un registro parcial, es un registro inutilizable; por eso,
desde Tiger Studio **2.15.0**, el importador lo rechaza de plano en lugar de
importar una bobina que parece correcta y es silenciosamente errónea.

Un registro solo se acepta si lleva **`uid` más estos 24 campos numéricos**, cada
uno presente y finito (`null` y `""` **no** cuentan como presentes; cuidado,
`Number(null)` es `0`):

| Grupo | Campos |
|---|---|
| Ids de identidad | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Cantidad | `measure` |
| Color | `color_r`, `color_g`, `color_b`, `color_a` |
| Carga útil por tipo | `data1` … `data7` |
| Sello | `timestamp` |

Más **`id_tigertag`, pero solo si el registro tiene un chip.** Ese campo nombra la
versión del chip en `id_version.json`, donde exactamente cuatro valores son
válidos: `0` RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init,
`3155151767` TigerTag+. Un registro sin chip (`uid` que empieza por `TigerData_` o
el heredado `CLOUD_`) no tiene chip y por tanto no tiene versión, así que **no debe
llevar el campo en absoluto**; se escribe por primera vez cuando se programa un
chip real. No inventes nunca un valor para él, y no resuelvas nunca uno sin
comprobar que el registro tiene un chip.

Todo lo demás de un registro (nombres, imágenes, precio, notas, posición en el
rack) es **enriquecimiento**: bueno para llevarlo, nunca obligatorio.

**Un material es atómico.** Una pareja de gemelos solo pasa si lo hacen *ambos*
registros; un gemelo medio válido se rechaza entero, porque importar un lado de una
pareja crearía una bobina cuya pareja no se podrá escribir jamás.

**Los rechazos se cuentan y se muestran, nunca en silencio.** La vista previa
informa de cuántos materiales se rechazaron, de modo que una mala exportación sea
visible en lugar de perder discretamente la mitad de su contenido. Quienes escriban
archivos `.ttag` deberían validar contra esta lista antes de entregar un archivo a
los usuarios.

## Ejemplo completo

Una exportación de selección múltiple fiel y anonimizada: un TigerData, una pareja
de gemelos (`twin_tag_uid` recíproco), un TigerTag+ cuyo contenido de chip tiene
copia de seguridad:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Lectura del ejemplo: el primer registro no tiene chip (un id `TigerData_`); los dos
siguientes son una pareja de gemelos: mismo material, `twin_tag_uid` recíproco,
siempre exportados juntos; el último es un TigerTag+ (`rfidBackup: true`) cuyo
volcado de fábrica firmado está en `rfidBackups` bajo el UID de su chip.

## Modelo de seguridad / confianza

Un archivo `.ttag` es una **entrada no fiable**. Cada registro se sanea al importar
(véase arriba). `exportedBy` solo preselecciona el modo en la interfaz: el límite
real de autorización son las **reglas de seguridad de Firestore**. No trates nunca
el contenido del archivo como autoritativo para la identidad o la propiedad.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Identidad universal del filamento](../concepts/universal-filament-identity.md), [Inventario y sincronización en la nube](../concepts/inventory-and-cloud-sync.md), [Resumen para desarrolladores](./README.md)
