---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Filosofía del ecosistema abierto

## Todo es abierto

Cada capa de TigerSystem está publicada: hardware, firmware, SDK, aplicaciones, documentación:

| Capa | Proyecto | Licencia |
|---|---|---|
| Aplicación de escritorio | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK de JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK de Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Hardware y firmware de la báscula (V3, actual) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Hardware y firmware de la báscula (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Soporte lector (STL + documentación) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Guía del formato del chip | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentación de integración con la nube | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Esta documentación | TigerSystem-Docs | CC BY 4.0 |

## Un entorno de pruebas, no un jardín amurallado

Todo **el ecosistema de cara al usuario** es deliberadamente **un laboratorio, no
el destino**.
Cada producto —[Tiger Studio](../products/tiger-studio.md), la aplicación móvil,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md)—
es una demostración funcional de lo que hace posible una tecnología abierta y
documentada cuando una bobina puede identificarse a sí misma: telemetría de
impresoras en vivo de seis marcas, asignación física de racks, sensores,
inventarios compartidos. Parte de ello madurará, parte existe para demostrar algo,
y todo es legible, bifurcable y libre de copiar. Cada producto, actual y futuro, es
una **prueba de concepto** de un **protocolo de código abierto, estándar, agnóstico
y multiplataforma**: su único cometido es mostrar el potencial, para que cualquiera
pueda tomar nuestro trabajo de integración como inspiración e imaginar las
funciones del mañana.

## Construye lo tuyo

TigerTag es un **protocolo** abierto, no una plataforma a la que tengas que unirte:

1. Lee el formato del chip ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Elige un [SDK](../developers/sdks.md).
3. Conéctate a la [nube](../developers/account-api.md), o no: los chips funcionan sin conexión.
4. Lanza el software, el hardware o el negocio que realmente quieras.

Tu aplicación puede ser algo totalmente distinto, y seguirá hablando con los mismos
chips. Un teléfono NFC, un lector USB ACR122U o un ESP32 casero con un módulo
PN532/RC522, al estilo TigerScale, es todo el hardware necesario: conecta la
identidad de la bobina a un ERP, una herramienta interna de stock, un flujo de
seguimiento, un sistema de préstamo de un fablab, un proyecto de I+D privado o
público: lo que sea.

---

**◀ Anterior:** [Ecosistema centrado en el usuario](./user-centric-ecosystem.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Puente smartphone](./smartphone-bridge.md)

**Véase también:** [Visión general para desarrolladores](../developers/README.md), [Productos](../products/README.md)
