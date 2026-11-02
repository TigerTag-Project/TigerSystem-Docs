---
sourceHash: d588bae17f96b64547bcb21f7dcdda48bb127a18afb1bd80fef89579c926a651
sourcePath: docs/philosophy/smartphone-bridge.md
---

# El concepto del puente smartphone

## La idea clave

> En China nos preguntábamos sin parar: *«¿Dónde están los lectores RFID?»* Todos
> respondían: *«En las Bambu Lab.»* Falso: los lectores de Bambu están en el AMS, no
> en la impresora; la máquina no puede detectar en absoluto una bobina de terceros.
> **Los lectores RFID están en tus bolsillos**: en cada teléfono, listos para usar,
> sin que ni siquiera lo sepas.

Todo smartphone moderno incluye un lector NFC. Eso significa que **todo usuario de
impresión 3D ya posee hardware TigerTag**: sin lector propietario, sin actualizar
la impresora, sin necesidad de comprar nada para empezar.

```mermaid
flowchart LR
  TAG[TigerTag chip on spool] -- NFC tap --> PHONE[Smartphone + Tiger NFC Connect]
  PHONE -- sync --> CLOUD[("Your TigerSystem account (Firebase)")]
  CLOUD --> STUDIO[Tiger Studio — desktop]
  STUDIO --> PRINTER[Connected printer]
  CLOUD --> WEB["tigersystem.io — public sharing"]
```

El teléfono hace de **puente** entre la bobina física y el inventario digital:

1. **Tocar** — el perfil del chip (marca, material, color, ajustes) se lee con un solo gesto.
2. **Sincronizar** — la bobina aparece al instante en el inventario en la nube del usuario.
3. **En todas partes** — la aplicación de escritorio, la web y las impresoras conectadas ya conocen la bobina.

## RFID nativo frente al puente

Algunas impresoras leen etiquetas de forma nativa (en su propio formato
propietario); la mayoría no lee nada. El puente hace irrelevantes las
capacidades de la impresora:

| Vía | Requiere | Funciona con |
|---|---|---|
| **RFID nativo** | Una impresora que lea la etiqueta bloqueada de ese fabricante | Una sola marca |
| **Puente smartphone** | Cualquier teléfono NFC | **Todas las impresoras**, de cualquier marca, incluso máquinas totalmente sin conexión |

Con el puente, los datos del filamento llegan a la impresora a través de las
[integraciones de impresoras de Tiger Studio](../compatibility/README.md) (seis
marcas en vivo hoy): la bobina se identifica ante el *sistema*, y el sistema habla
con la máquina.

La prueba con un ejemplo: **las impresoras FlashForge no tienen ningún lector RFID**
y, gracias al puente, ahora funcionan igualmente con filamento identificado por NFC.
Una capacidad totalmente nueva, añadida a máquinas de otros, **totalmente gratis
para el usuario** ([el caso FlashForge](../compatibility/flashforge.md)).

---

**◀ Anterior:** [Ecosistema abierto](./open-ecosystem.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Flujo Second Life](./second-life.md)

**Véase también:** [Tiger NFC Connect](../products/tigertag-connect.md), [Visión general de la arquitectura](../architecture/overview.md)
