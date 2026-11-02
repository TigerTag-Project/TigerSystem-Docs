---
sourceHash: a12992e7b500e2dde8a21443c09a157093fbf40e589c4ad4dc960c7acde2ce6f
sourcePath: docs/compatibility/README.md
---

# Compatibilidad

Cómo funciona TigerSystem con cada ecosistema de impresoras. Dos ejes independientes:

- **Enlace con la impresora**: Tiger Studio habla con la máquina por la LAN
 (telemetría, ranuras de filamento, trabajo, cámara). **Hoy hay seis marcas en vivo.**
- **RFID nativo**: lectura de las etiquetas de bobina propias de cada fabricante.
 Documentado por fabricante. La decodificación directa en la aplicación **todavía
 no está integrada** (el modelo de interoperabilidad adecuado sigue siendo una
 cuestión abierta); el trabajo actual busca **convertir los datos de etiquetas de
 fabricante en bobinas digitales TigerData**, para poder escanear y gestionar en
 el ecosistema el filamento de otras marcas. Mientras tanto, el propio chip
 TigerTag ya funciona con todas las impresoras mediante el
 [puente con el smartphone](../philosophy/smartphone-bridge.md).

## Matriz

| Ecosistema | Enlace con la impresora (Tiger Studio) | Formato de etiqueta nativo | Bloqueo de etiqueta nativo | Estado de lectura RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **En vivo**: MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, claves derivadas del UID | Especificación documentada |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **En vivo**: WebSocket + CFS | Mifare Classic 1K | Clave de sector AES-128-ECB | Especificación documentada |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **En vivo**: MQTT + Canvas | Mifare Ultralight | Solo bytes mágicos | Especificación documentada |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **En vivo**: HTTP + IFS | — (las máquinas no tienen lector RFID) | — | TigerTag le añade NFC, sin coste |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **En vivo**: MQTTS LAN + nube, ACE | Mifare Ultralight | Ninguno | Especificación documentada |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **En vivo**: WebSocket Moonraker + 4 ranuras | Mifare Classic 1K | HKDF + firma RSA-2048 | Especificación documentada |
| [Klipper](./klipper.md) | Todavía no (hay trabajo previo) | n/d | n/d | n/d |
| [OpenSpool](./openspool.md) | n/d (estándar de etiqueta, no una impresora) | NFC Tipo 2, JSON NDEF | Ninguno: estándar abierto | Especificación documentada |
| Qidi | No integrada | Mifare Classic 1K | Clave por defecto | [Especificación documentada](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Nota:** las fichas RFID por fabricante (especificaciones de decodificación de
> solo lectura, derivadas del proyecto [OpenRFID](https://github.com/suchmememanyskill/OpenRFID))
> se mantienen en el repositorio de Tiger Studio, en
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — aquí se enlazan, no se duplican.

## Más allá de las impresoras

La compatibilidad no se limita a las impresoras: consulta la lista creciente de
**[hardware de terceros compatible](./third-party-hardware.md)** (lectores NFC,
analizadores de filamento, básculas USB) y el
**[software construido sobre TigerTag](../developers/integrations.md)**.

## La respuesta universal

Sea cual sea la impresora: pega un chip [TigerTag](../products/tigertag.md) en la
bobina y todo el ecosistema funciona: identificación, inventario, peso, uso
compartido y datos de filamento enviados a cualquiera de las seis marcas integradas.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Bambu Lab](./bambu-lab.md)
