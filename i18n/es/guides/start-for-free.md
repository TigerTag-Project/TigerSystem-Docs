---
sourceHash: 8c5b4fcdbce004114a8e1e147e96abbd0014bb63b773145542ff69b29456ce98
sourcePath: docs/guides/start-for-free.md
---

# Empieza por 0 $

No tienes que comprar nada. Ni un chip, ni un lector, ni una báscula, ni un Pod.
Un teléfono que ya tienes más software gratuito es el ecosistema completo:
inventario, identificación, telemetría de la impresora, todo.

Esta página existe porque casi nadie se lo cree a la primera, y el motivo merece
nombrarse.

## Por qué todo el mundo sobrestima el coste

Las partes de TigerSystem que se *ven* son las físicas: un chip, un TigerPOD, una
TigerScale, una bobina. Salen bien en las fotos, se quedan sobre un escritorio,
tienen un precio. Así que se convierten en «el sistema» en la cabeza de la gente,
y la pregunta que sigue es siempre *¿cuánto cuesta?*

Pero esos objetos son **demostradores**: un
[entorno de pruebas, a propósito](../vision/why-tigersystem.md), pensado para
mostrar lo que el protocolo hace posible. El sistema en sí es el protocolo, la
identidad, el inventario y las aplicaciones: invisible, ingrávido y gratuito. Lo
que se ve es la parte más pequeña, y la única con precio.

## Lo que ya tienes sustituye a lo que parece obligatorio

| Lo que parece obligatorio | Lo que ya tienes | Lo que comprarlo aporta en realidad |
|---|---|---|
| Un chip NFC | nada en absoluto: una bobina **TigerData** | la bobina se identifica sola al dejarla |
| Un lector NFC | tu teléfono | leer sin tener que coger el teléfono |
| Una TigerScale | tu báscula de cocina | el peso sin teclearlo |
| Un TigerPOD | — | escribir los dos chips de una bobina de una sola vez |

La columna de la derecha es el quid de la cuestión: cada compra **automatiza un
gesto**. Ninguna desbloquea una capacidad. No hay ninguna función detrás de un
muro de pago, porque no hay muro de pago.

## Ningún chip: TigerData

El protocolo tiene un estado totalmente digital. Una bobina **TigerData** lleva la
misma identidad que una con chip (marca, material, color, diámetro, temperaturas,
gramos restantes) sin chip, sin UID, sin nada pegado a nada. Todo tu inventario
puede vivir ahí.

Una bobina digital se puede [promover a un chip real](../concepts/universal-filament-identity.md)
en cualquier momento, y no se pierde nada en el cambio. El chip es la comodidad,
nunca el requisito previo.

## El lector es tu teléfono

Todo smartphone reciente lleva un lector NFC. **[Tiger NFC Connect](../products/tigertag-connect.md)**
es gratuita en iOS y Android, y **[Tiger Studio](../products/tiger-studio.md)** es
gratuito y de código abierto (MIT) en Windows, macOS y Linux. Entre las dos lees
chips, escribes chips y gestionas el inventario, sin un solo lector dedicado sobre
el escritorio.

## El peso, a mano

Pon la bobina en la báscula de cocina que ya tienes y escribe el peso **total**,
carrete incluido. Tiger Studio resta el peso del propio carrete de cartón o de
plástico y se queda solo con el filamento que realmente queda: nada que calcular,
y sin tarar con una bobina vacía antes de pesar una usada.

La **[TigerScale](../products/tigerscale.md)** elimina el teclear: dejas la
bobina, pesa, identifica y sincroniza por sí sola. Automatiza el gesto; nunca fue
ella quien lo hizo posible.

## Tus impresoras, sin comprar nada

Conectar una impresora tampoco cuesta nada. Tiger Studio y la aplicación móvil
hablan con las impresoras a través de tu propia red o de la nube del fabricante, y
lo que permite cada vía (telemetría, cámara, progreso del trabajo y lo que hace
falta para devolver órdenes a la máquina) está documentado por marca en
[compatibilidad](../compatibility/README.md).

## Si algún día quieres más

Entonces todo sigue siendo abierto. El [TigerPOD](../products/tigerpod.md) es un
STL gratuito que imprimes tú mismo; la [TigerScale](../products/tigerscale.md) es
MIT: carcasa impresa, firmware flasheado desde el navegador, piezas comunes de
cualquier proveedor. Constrúyelos, modifícalos, véndelos. No se nos compra nada por
obligación.

Y si prefieres ayudar de todos modos, [apoyar el proyecto](../support.md) enumera
las formas, incluidas las que no cuestan nada.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Una identidad, tres estados](../concepts/universal-filament-identity.md), [Tiger NFC Connect](../products/tigertag-connect.md), [Apoya el proyecto](../support.md)
