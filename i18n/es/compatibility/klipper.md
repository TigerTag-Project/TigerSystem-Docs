---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Enlace con la impresora — **En vivo (beta)**, desde Tiger Studio 2.41

Tiger Studio se conecta a **cualquier impresora que ejecute Klipper con Moonraker**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon y el resto: 161 máquinas figuran en el
flujo de alta con su imagen. La integración es una **beta**.

| Aspecto | Detalle |
|---|---|
| Protocolo | API HTTP de Moonraker, consultada cada 2 s; puerto 7125 por defecto, se puede configurar otro puerto |
| Descubrimiento | Escaneo de la LAN, o alta manual con su dirección y una clave de API de Moonraker opcional |
| Ranuras de filamento | Las puertas de **Happy Hare** y los carriles de **AFC**, leídos y editados con los propios comandos de la máquina (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); un extrusor simple se muestra, pero no guarda datos de filamento |
| Trabajo | Trabajo en curso con miniatura y capas; pausar, reanudar, cancelar |
| Control | Desplazamiento de ejes, homing, ventilador de pieza, velocidad, luces; temperaturas ajustadas con un clic |
| Telemetría | Extrusores, cama, cámara y cada `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Cámara | Flujo MJPEG o instantáneas |

Las máquinas cuyos fabricantes instalan un firmware cerrado sobre Klipper
conservan su propio enlace: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) y
[Anycubic](./anycubic.md) se alcanzan mediante sus propios conectores, no este.
Una máquina accesible por ambas vías (una Creality K1, por ejemplo) ofrece la
elección al darla de alta.

## RFID nativo — n/d

Klipper es un firmware de impresora, no un formato de etiqueta de bobina. La
identidad de la bobina viene de su TigerTag, leído con un teléfono o un lector de
escritorio.

## El flujo de trabajo

1. **Añade la impresora**: encontrada por el escaneo de la LAN, o dada de alta a mano.
2. **Escanea una bobina**: con tu teléfono (o un lector de escritorio); llega a tu
 inventario.
3. **Asígnala a una puerta o a un carril**: Tiger Studio la escribe con el propio
 comando de Happy Hare o AFC de la máquina, así que no hay que instalar nada en
 la impresora.
4. **En vivo**: trabajo, temperaturas y cámara en la vista de impresoras.

Un [TigerSpool](../products/tigerspool.md) también puede asignar una ranura de
Klipper, pero esa vía es **experimental**: escrita contra el controlador de Tiger
Studio y una simulación de Moonraker, todavía no probada en una impresora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [OpenSpool](./openspool.md)
