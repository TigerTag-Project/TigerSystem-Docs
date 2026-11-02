---
sourceHash: 6f9124180c40a232c7aab51fda782a891af83baafbcf03c27d697b0ccfcff594
sourcePath: docs/developers/integrations.md
---

# Construido sobre TigerTag — integraciones de terceros

El sentido de un protocolo abierto es lo que *otros* construyen con él. Ya está
empezando a ocurrir: proyectos que han integrado TigerTag por su cuenta.

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— el kit de herramientas RFID de bobinas multifabricante de la comunidad. Lee los
formatos de etiqueta de muchos fabricantes, y **TigerTag es uno de ellos**: la
carga útil abierta hizo que añadirlo fuera sencillo.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— un firmware comunitario independiente, GPL-3.0, para la Snapmaker U1 (SSH,
transmisión de cámara, métricas… y ventajas RFID). **Con él, la Snapmaker U1 lee
TigerTag de forma nativa, y se convierte en la primera impresora que lee TigerTag
en la propia máquina.** Exactamente el futuro al que apunta la jugada colectiva,
llegado antes de tiempo gracias a la comunidad.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — una plataforma de inventario
de filamento (web, iOS/Android, Home Assistant, posprocesado de OrcaSlicer,
autoalojable). Su identificación de bobinas se basa en TigerTag: *«Marca tus
bobinas con chips NFC (TigerTags) y gestiona tu inventario con un simple gesto»*
(original en inglés: *"Mark your spools with NFC chips (TigerTags) and manage your
inventory with a simple gesture."*). Un producto de terceros, con su propia
visión, que funciona sobre el protocolo abierto, justo como se pretendía.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — una aplicación de escritorio
AGPL-3.0 (Python, Windows) que gestiona una biblioteca local de archivos de
impresión 3D: vistas previas, búsqueda semántica, traspaso al slicer, cola de
impresión. Su lado de filamento lee el **inventario TigerTag**: inicia sesión, o
deja que recoja una sesión existente de Tiger Studio, y tus bobinas TigerTag
aparecen en su stock, en **solo lectura**: nunca escribe en tu inventario. A
partir de ahí filtra la biblioteca a lo que tus bobinas pueden imprimir de verdad
y avisa antes de que una impresión se quede corta.

---

¿Estás construyendo algo sobre TigerTag? Cuéntanoslo en
[Discord](https://discord.gg/3Qv5TSqnJH) o a través de la
[organización de GitHub](https://github.com/TigerTag-Project), y recuerda que
[TigerTag Certified](../../TRADEMARK.md) existe para las integraciones verificadas.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Visión general para desarrolladores](./README.md), [¿Qué puedes construir?](./README.md), [Compatibilidad](../compatibility/README.md)
