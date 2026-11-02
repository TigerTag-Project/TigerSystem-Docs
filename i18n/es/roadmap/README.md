---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Hoja de ruta

## Dirección del ecosistema

Intenciones generales, sin fechas (los detalles viven en cada producto):

- **RFID multimarca → TigerData** — recuperar los datos de las etiquetas de los
 fabricantes (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
 y convertirlos en bobinas digitales TigerData, para que el filamento de otras
 marcas pueda escanearse y gestionarse en el ecosistema; las especificaciones de
 solo lectura ya están documentadas ([compatibilidad](../compatibility/README.md)).
 La decodificación directa en la aplicación no se integra deliberadamente hasta
 que el modelo de interoperabilidad esté resuelto.
- **Más integraciones de impresoras** — Klipper/Moonraker como el siguiente
 transporte natural ([página de Klipper](../compatibility/klipper.md)).
- **Un mapa de distribuidores** *(previsto)* — los distribuidores oficiales crecen
 más allá de [Atome3D](https://atome3d.com); un mapa mostrará dónde comprar chips
 TigerTag localmente.
- ~~El archivo portátil `.ttag`~~ — **entregado** en Tiger Studio v2.14.0:
 [el formato `.ttag`](../developers/ttag-format.md) (exportación + importación, los
 tres niveles de bobina).
- **TigerTag para resinas** — extender el protocolo a los envases de resina de las
 impresoras 3D de resina, llevando la misma identidad abierta a toda una segunda
 familia de máquinas.
- **Crecimiento de TigerHub** — el sitio del ecosistema en
 [tigersystem.io](https://tigersystem.io): funciones de sandbox social más ricas
 (listas de deseos, amigos, compartir).
- **Documentación** — rellenar los marcadores TODO de este repositorio (tutoriales,
 guías, incorporación de fabricantes, resumen de la carga útil RFID).
- **Idiomas de la documentación** — la wiki en
 [wiki.tigersystem.io](https://wiki.tigersystem.io) sale primero en **inglés y
 francés**: el inglés es la fuente de verdad, el francés se deriva de él y se
 revisa. Cuando ambos estén completos y las páginas hayan dejado de moverse,
 seguirán los demás idiomas de [tigersystem.io](https://tigersystem.io):
 **alemán, español, italiano, polaco, chino y portugués en sus variantes
 brasileña y europea**, que el ecosistema trata como dos idiomas distintos, para que
 la documentación esté al nivel del resto del ecosistema. Añadirlos antes
 significaría mantener nueve copias de páginas que aún se están escribiendo.
- **Más allá de los idiomas actuales** — la lista no se limita a lo que
 [tigersystem.io](https://tigersystem.io) sirve hoy. **Japonés, coreano y ruso**
 son los mejores candidatos después: los tres tienen comunidades de makers activas,
 y los tres son lugares donde la documentación técnica solo en inglés es una
 verdadera barrera y no una simple molestia. El ruso, además, llega mucho más allá
 de Rusia. Ten en cuenta que puede merecer la pena documentar un idioma incluso
 donde la tienda no puede enviar: el protocolo es abierto, sirve cualquier chip NTAG
 en blanco y nada en el ecosistema exige comprar nada.

 Qué idiomas se añaden realmente debe decidirse a partir del tráfico de la propia
 wiki cuando lo tenga, no por conjetura. Tampoco tiene por qué ser todo o nada por
 idioma: las secciones de cara al usuario (tutoriales, preguntas frecuentes,
 productos, compatibilidad) merecen una traducción mucho antes que
 [`developers/`](../developers/README.md), cuyos lectores ya trabajan en inglés.

## Hojas de ruta detalladas

| Producto | Dónde |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) en el repositorio de la aplicación, agrupado por dominio, con notas de tamaño y riesgo |
| Otros productos | > **TODO:** publicar hojas de ruta públicas a medida que se abran los repositorios |

> **Nota:** esta página expone una dirección, no compromisos ni fechas.

---

**◀ Anterior:** [Preguntas frecuentes](../faq/README.md) · **▲ [Índice de la documentación](../../README.md)**

**Véase también:** [Productos](../products/README.md), [Compatibilidad](../compatibility/README.md)
