---
sourceHash: bc1109bce033235ce112674dbf1775284562458c70d4ec2f6514e1bf5a144bd5
sourcePath: docs/guides/twin-tag-pair.md
---

# Cuando los dos chips de una bobina se leen como dos bobinas

Etiquetaste una bobina con un chip en cada cara, y ahora tu inventario muestra
**dos** entradas en lugar de una. Cada chip funciona; cada uno abre su propia
bobina. El peso que corriges en uno nunca aparece en el otro.

No hay nada roto. Casi seguro que los dos chips nunca fueron una pareja.

## La prueba que lo resuelve

Dos chips son una pareja porque llevan el **mismo Twin Tag ID**, un valor escrito
en el momento de la escritura y compartido solo por los chips escritos en la misma
sesión. Lee ambos chips y compara ese valor: es todo el diagnóstico.
Tiger Studio lo muestra; también cualquier lector que decodifique la carga útil.

La regla completa, incluido qué más tiene que coincidir y por qué la marca de
tiempo por sí sola no es una prueba, está en
[el chip TigerTag](../concepts/tigertag-chip.md).

## Valores distintos: nunca fueron una pareja

Es la causa habitual y tiene un único origen: **los dos chips se escribieron en
dos pasadas separadas**. Una segunda pasada ocurre un segundo después o un día
después, así que graba un Twin Tag ID distinto, y desde ese momento nada une a los
dos chips. Todas las herramientas posteriores hacen bien en contar dos bobinas.

No hay reparación posible salvo reescribir. Una pareja se crea en el momento de
escribir o no se crea.

## Reescribirlos como una sola pareja

Borra ambos chips y escríbelos juntos en una única sesión:

| | Cómo se escribe la pareja | Ideal para |
|---|---|---|
| **Teléfono** — [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC*: un formulario, luego el chip 1/2 y el 2/2 en la misma sesión | una bobina, sin hardware |
| **Escritorio, dos lectores** — [TigerPOD](../products/tigerpod.md) | ambos chips a la vez, en una pasada | una estantería, un lote |
| **Escritorio, un lector** | imposible en una sola pasada: así es como se creó el problema | — |

El procedimiento con el teléfono, incluida la regla de que el chip que escaneaste
primero es el que la app espera como 1/2, está en
[tu primera bobina inteligente](../tutorials/first-smart-spool.md).

El caso del lector único es la razón por la que el [TigerPOD](../products/tigerpod.md)
lleva dos lectores enfrentados: una pasada, una marca de tiempo, una pareja.

## Mismo valor, pero dos entradas

Es más raro y conviene informar de ello. El Twin Tag ID es necesario pero no
suficiente: los dos chips deben además describir la misma bobina, campo por campo:
marca, material, los tres colores, ambos aspectos. Compara esos a continuación.

Si todos los campos coinciden y tu inventario sigue dividiendo la bobina en dos,
se trata de un error y no de una mala escritura. Indícalo en
[Discord](https://discord.gg/3Qv5TSqnJH) con la lectura de ambos chips.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [El chip TigerTag](../concepts/tigertag-chip.md), [Tu primera bobina inteligente](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
