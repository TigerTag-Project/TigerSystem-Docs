---
sourceHash: a05c4e52f6cae3704b4e16e2b3d1b6d55653145391a9bdd6f31630c6821c91ab
sourcePath: docs/compatibility/third-party-hardware.md
---

# Hardware de terceros compatible

El ecosistema se lleva bien con el hardware que no ha fabricado. Esta página es la
**lista creciente** de dispositivos de terceros que se conectan de una u otra
manera; seguirá ampliándose a medida que avance el desarrollo y que más
fabricantes conecten sus equipos.

| Dispositivo | Fabricante | Qué hace | Funciona con |
|---|---|---|---|
| Lector NFC **ACR122U** | ACS | Lector/escritor NFC USB: escaneas un chip y la bobina se abre sola; escrituras guiadas y verificadas por UID. Dos de ellos alimentan un [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analizador de filamento **TD-1** | [AJAX-3D](https://ajax-3d.com) | Montaje DIY: mide la **Transmission Distance** del filamento (el valor de impresión HueForge / Full Spectrum) + color (RGB, 1–3 ranuras, orientativo) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Analizador de filamento **TD1s** | [AJAX-3D](https://ajax-3d.com) | La misma familia de dispositivos, premontado y listo para usar | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Básculas USB **DYMO serie M** (M5, M10, M25…) | DYMO | Dispositivos USB estándar «HID Scale»: peso en vivo en el perfil de la bobina ([detalles del protocolo](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Cualquier báscula USB compatible con HID Scale** | cualquiera | El mismo protocolo estándar que la serie M de DYMO (página de uso HID `0x8D`): la marca no importa | [Tiger Studio](../products/tiger-studio.md) |
| **Cualquier chip NTAG213/215/216 en blanco** | cualquiera | El propio consumible: se compra en cualquier sitio y funciona igual ([¿qué chip?](../../docs/faq/README.md)) | Todo |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="El lector NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="El analizador de filamento TD1s de AJAX-3D" /> | <img src="../assets/dymo-usb-scale.png" alt="Una báscula USB HID DYMO de la serie M" /> | <img src="../assets/ntag-chip.png" alt="Un chip NFC NTAG al descubierto: se ve la bobina de la antena" /> |

*El lector ACR122U (dos de ellos viven dentro de cada
[TigerPOD](../products/tigerpod.md)) · el TD1s de AJAX-3D · una báscula USB DYMO
de la serie M · el propio chip, con la antena al descubierto.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="El TD1s integrado en Tiger Studio: el color medido y el TD pasan al perfil de la bobina" />

*El TD1s trabajando dentro de Tiger Studio.*

Los valores medidos no se quedan en el dispositivo: un TD o un peso llega al perfil
de la bobina y puede vivir **en el propio protocolo TigerTag**, en el chip o en un
archivo `.ttag`.

## Lectores creados por otras personas

Algunos fabricantes construyen sus propios lectores que hablan TigerTag
directamente, sin ninguno de nuestros programas de por medio. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) es un proyecto alemán de código
abierto que publica lectores de bobinas basados en ESP32: fuentes en GitHub,
carcasas imprimibles, archivos de PCB y firmware, todo gratuito. Dos de sus
dispositivos declaran compatibilidad con TigerTag:

| Dispositivo | Qué es | Qué hace con TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Una unidad con batería y pantalla táctil de 5″ y 800×480: ESP32-S3 y un lector RC522, que guarda más de 2000 etiquetas en local | **Lee, clona y escribe** TigerTag, junto con etiquetas de Bambu Lab, Spoolease, OpenSpool y OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Un lector de cuatro ranuras que se monta sobre un AMS de Bambu Lab: ESP32 con 4× RC522, pantallas OLED y TFT, LED direccionables. Muestra los datos de las ranuras del AMS en vivo y **envía los datos de la etiqueta a la impresora / BMCU** | Lee las mismas cinco familias de etiquetas, una por ranura |

Hay dos cosas que conviene precisar.

**Son compatibles, no certificados.** Un tercero puede decir *«compatible con
TigerTag»* libremente y sin pedir permiso a nadie: eso es exactamente lo que son, y
es el sentido de un formato abierto. No están *certificados*: la certificación es
una auditoría que concede TigerSystem, y ninguno de los dos dispositivos ha pasado
por una. La diferencia se explica en
[la política de marca](../../TRADEMARK.md).

**Clonar un chip no es un agujero del formato.** Un TigerTag estándar no lleva
autenticación y nunca se bloquea contra escritura, así que copiarlo es lo esperado:
es la misma propiedad que te permite reescribir tus propios chips. Lo que una copia
no puede llevar es una firma [TigerTag+](../products/tigertag-plus.md) válida: una
etiqueta clonada no supera la verificación en el propio teléfono del cliente, sin
conexión.

Que existan dispositivos así sin nosotros es la medida del formato: no se nos pidió
nada, no hizo falta ninguna clave, no se firmó ningún acuerdo.

## Tu hardware aquí

¿Estás construyendo o conectando un dispositivo? El protocolo es abierto, los
[SDK](../developers/sdks.md) están listos y **TigerTag Certified** existe para las
integraciones verificadas. Cuéntanoslo en el
[Discord](https://discord.gg/3Qv5TSqnJH) o en
[tigertag@tigertag.io](mailto:tigertag@tigertag.io): esta lista está hecha para
crecer.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Compatibilidad](./README.md), [Integraciones de terceros (software)](../developers/integrations.md), [Productos](../products/README.md)
