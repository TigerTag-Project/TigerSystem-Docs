---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Impresoras de etiquetas Bluetooth

Imprime la etiqueta TigerQR de una bobina directamente desde el móvil en una
pequeña impresora térmica de etiquetas Bluetooth: sin ordenador, sin PDF, sin
aplicación de impresora de por medio.

> **Estado a 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) imprime en estas impresoras a partir de su **próxima
> actualización**. En [Tiger Studio](../products/tiger-studio.md) se están
> integrando las mismas impresoras, **aún sin publicar**. Hasta entonces,
> cualquier impresora funciona con su propia aplicación a partir del PDF, PNG o
> SVG de la etiqueta
> ([etiquetas impresas](../developers/spool-ids-and-qr-links.md)).

## Cómo funciona

- Tiger NFC Connect envía la etiqueta TigerQR de la **bobina** o del
  **filamento** a la impresora por Bluetooth.
- **Cada impresora recuerda su propio formato de etiqueta**, el del rollo que
  lleva.
- Cada impresión deja un **pequeño margen de seguridad**, para que un rollo
  ligeramente desplazado reciba igualmente la etiqueta entera.
- Los rollos de 12 mm imprimen la etiqueta **Slim** de 40 × 12 mm; los rollos
  de 50 mm de ancho admiten etiquetas más grandes (probada la de 50 × 30 mm).

> **Consejo:** una impresora se conecta a **un solo dispositivo a la vez**.
> Cierra la aplicación del fabricante de la impresora antes de imprimir desde
> Tiger NFC Connect.

## Nuestra elección

Las impresoras Niimbot son muy, muy buenas. La **D110** es la de mejor
relación calidad-precio, muy buena para lo que cuesta; la **B1** y la
**B1 Pro** son las que conviene elegir con más presupuesto, para etiquetas más
grandes. La Marklife **P15** funciona, pero es más voluminosa y su calidad de
impresión parece algo inferior.

Las cuatro se han probado sobre papel.

| Impresora | Rollos | Etiqueta probada | Nuestra opinión | Comprar |
|---|---|---|---|---|
| **Niimbot D110** (y D110-M) | 12 mm | 40 × 12 mm | **Mejor relación calidad-precio**: muy buena para lo que cuesta | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | hasta 50 mm de ancho | 50 × 30 mm | Etiquetas más grandes, con más presupuesto | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm de ancho | 50 × 30 mm | 300 dpi, la impresión más nítida | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (vendida como «Pristar P15» en Amazon) | 12 mm | 40 × 12 mm | Funciona, pero más voluminosa, impresión algo inferior | [Amazon](https://link.amazon/B0iRdI1G6) |

> Los enlaces de esta tabla son **enlaces de afiliado de Amazon** (amazon.fr):
> como Afiliado de Amazon, TigerTag obtiene ingresos por las compras adscritas
> que cumplen los requisitos aplicables, **sin coste adicional para ti**. Ayuda
> a financiar el protocolo abierto. Comprar la misma impresora en cualquier
> otro sitio funciona exactamente igual de bien.

Sin precios aquí: cambian demasiado a menudo.

## También compatibles, aún sin probar sobre papel

El código de la aplicación también controla estos modelos; todavía no se han
probado sobre papel:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Hardware de terceros compatible](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Ids de bobina y enlaces QR](../developers/spool-ids-and-qr-links.md)
