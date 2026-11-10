---
sourceHash: f787ab835cd6a0761d139df621b1c9918dda678a3790454304c18585b1f54cf9
sourcePath: docs/products/README.md
---

# Productos

El ecosistema TigerSystem, una página por producto.

**Estos son los productos oficiales**, diseñados y publicados por TigerSystem.
«Oficial» significa aquí *lo hicimos nosotros*, no *lo necesitas*: todos son de
código abierto y se pueden bifurcar, y sus nombres (Tiger Studio, TigerHub,
TigerScale, TigerPOD, Tiger NFC Connect) deliberadamente **no se reclaman como
marcas registradas**. Solo la marca **TigerTag** en sí está reservada, y solo para
el chip.

Cualquiera puede construir y vender una alternativa: un lector, una aplicación, una
báscula, todo un sistema de inventario. Consulta el [hardware de terceros](../compatibility/third-party-hardware.md)
y el [software construido sobre TigerTag](../developers/integrations.md) para ver lo
que ya existe. Un producto de terceros es **TigerTag Compatible** con solo
funcionar; pasa a ser **TigerTag Certified** únicamente cuando TigerSystem se lo
concede ([política de marca](../../TRADEMARK.md)).

> **Nota:** todos los productos **de cara al usuario** de abajo, y todos los
> futuros, son **pruebas de concepto** funcionales. Su único objetivo es mostrar el
> potencial de un protocolo de código abierto, estándar, agnóstico y multiplataforma,
> e inspirar lo que otros construirán con él. (La cadena de herramientas de
> programación de chips del lado de la fábrica es otra historia: de nivel
> industrial, en producción.) Consulta
> [Un sandbox, a propósito](../vision/why-tigersystem.md).

| Producto | Qué es | Tipo |
|---|---|---|
| <img src="../assets/icons/tigerdata.svg" width="18" alt="" /> [TigerData](../concepts/universal-filament-identity.md) | El chip virtual: la identidad en forma digital, sin chip, actualizable en cualquier momento | Concepto |
| <img src="../assets/icons/tigertag.svg" width="18" alt="" /> [TigerTag](./tigertag.md) | Chip RFID/NFC abierto + estándar de identidad de la bobina | Hardware + especificación |
| <img src="../assets/icons/tigertag-plus.svg" width="18" alt="" /> [TigerTag+](./tigertag-plus.md) | Un TigerTag que lleva un ID de producto del catálogo y un enriquecimiento opcional, siempre 100 % sin conexión; firmado, es TigerTag+ Certified | Hardware + especificación |
| <img src="../assets/icons/connect.svg" width="18" alt="" /> [Tiger NFC Connect](./tiger-nfc-connect.md) | Aplicación móvil (iOS/Android): escanear, codificar, explorar | Aplicación |
| <img src="../assets/icons/studio.svg" width="18" alt="" /> [Tiger Studio](./tiger-studio.md) | Aplicación de escritorio: inventario, racks, sensores, impresoras | Aplicación |
| <img src="../assets/icons/tigerhub.svg" width="18" alt="" /> [TigerHub](./tigerhub.md) | La casa web del ecosistema: escaparate, listas de deseos, amigos y compartir en `tigersystem.io` | Web |
| <img src="../assets/icons/tigerpod.svg" width="18" alt="" /> [TigerPOD](./tigerpod.md) | Soporte lector NFC doble imprimible en 3D | Hardware |
| <img src="../assets/icons/tigerscale.svg" width="18" alt="" /> [TigerScale](./tigerscale.md) | Báscula de filamento ESP32 de código abierto | Hardware |
| <img src="../assets/icons/tigerspool.svg" width="18" alt="" /> [TigerSpool](./tigerspool.md) | Caja ESP32 de código abierto junto a la impresora: toca una bobina, elige una ranura, cualquier marca | Hardware |
| <img src="../assets/icons/tigertouch.svg" width="18" alt="" /> [Tiger Touch](./tigertouch.md) | Firmware de código abierto para la pantalla BIGTREETECH Panda Touch / K-Touch: todas las marcas de impresora, en directo, en una sola pantalla | Firmware |
| <img src="../assets/icons/factory.svg" width="18" alt="" /> [TigerTag Factory y Manager](./factory-suite.md) | Herramientas industriales de programación de chips y de base de datos de filamentos para fábricas: **no es público**, de nivel de producción | Industrial |

```mermaid
flowchart LR
  TT[TigerTag / TigerTag+] --> CO[Tiger NFC Connect]
  TT --> POD[TigerPOD] --> ST[Tiger Studio]
  SC[TigerScale] --> FB[("Your TigerSystem account — Firebase")]
  TT --> SPL[TigerSpool] --> PRN["Your printer's slot"]
  FB --> SPL
  CO <--> FB
  ST <--> FB
  FB --> HUB["TigerHub — tigersystem.io"]
```

---

**◀ Anterior:** [Flujo de datos](../architecture/data-flow.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [TigerTag](./tigertag.md)
