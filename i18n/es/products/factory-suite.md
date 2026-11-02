---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory y TigerTag Manager (suite de fábrica)

## Propósito

La **cara industrial** de TigerSystem: las herramientas que usan las fábricas de
filamento para poner TigerTag dentro de sus productos. A diferencia del entorno
de pruebas de cara al usuario, **esto es software de producción**: es lo que ha
puesto más de 2,5 millones de chips en circulación.

Dos herramientas cubren las dos mitades del trabajo:

- **TigerTag Manager** — gestiona la **base de datos de filamentos** de la marca:
 productos, materiales, colores, ajustes.
- **TigerTag Factory** — **escribe en masa los datos en cada bobina producida**,
 a velocidad de línea: **alrededor de 1 segundo por chip**, miles de bobinas al día,
 con un solo clic.

## El soporte — dos chips, despegar y pegar

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="El soporte TigerTag sin marca — dos antenas NFC independientes, una en cada extremo" /> | <img src="../assets/carrier-branded.png" alt="El soporte TigerTag tal como se entrega, con los dos chips de marca" /> |

*Los dos chips NFC independientes se ven claramente, uno en cada extremo. Los
extremos se doblan sobre el núcleo de cartón para que la bobina se lea desde
cualquier lado; la parte central se sujeta con adhesivo industrial 3M (468MP /
200MP). El operario despega y pega; nada más cambia en la línea. El diseño del
soporte es público y se puede imprimir en casa.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="El soporte colocado en una recarga de filamento" />

## Prueba de origen

Los chips escritos en la línea de producción llevan la **firma de fábrica**: la
autenticación que **prueba el origen del producto**. Es la capa que hay detrás de
las restauraciones al estado de fábrica de [TigerTag+](./tigertag-plus.md) y el
ancla de confianza para las marcas: un chip firmado salió demostrablemente de la
fábrica real.

## Disponibilidad

**No es público.** Estas herramientas están reservadas a los fabricantes
terceros que implementan la tecnología RFID/NFC de TigerTag en sus productos.
Una línea de producción de filamento puede estar funcionando con TigerTag en
**tan solo 5 días**: consulta
[Para fabricantes de filamento](../vision/for-filament-manufacturers.md) y
ponte en contacto a través de la
[organización de GitHub](https://github.com/TigerTag-Project).

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Para fabricantes de filamento](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Productos](./README.md)
