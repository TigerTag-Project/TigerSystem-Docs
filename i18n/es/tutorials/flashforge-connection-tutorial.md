---
sourceHash: 34416628551d83bd9fa02324bae0b2fbfb63e5cebd7cce0c1f49579591fc94e9
sourcePath: docs/tutorials/flashforge-connection-tutorial.md
---

# FlashForge: tutorial de conexión

Las impresoras FlashForge se conectan solo a través de tu red local: no hay
opción de nube. Lo que necesitas de la pantalla táctil depende de cómo encuentre
Tiger Studio la impresora:

- **Encontrada por el escaneo de red:** solo el **Printer ID** — paso 3.
- **Añadida a mano:** el **número de serie** y la **dirección IP** (paso 2), más el
 **Printer ID** (paso 3).

Consulta la [compatibilidad con FlashForge](../compatibility/flashforge.md) para
el resto de la integración.

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step1.jpg" alt="Pantalla táctil de FlashForge — botón Basic Info" />
<p><strong>Paso 1.</strong> En la interfaz principal, toca el botón «Basic Info» en la parte inferior derecha de la pantalla.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step2.jpg" alt="Pantalla táctil de FlashForge — página Basic Info" />
<p><strong>Paso 2.</strong> En la página Basic Info, anota el Serial No. y la IP Address.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step3.jpg" alt="Pantalla táctil de FlashForge — página Network Mode" />
<p><strong>Paso 3.</strong> Selecciona el icono de engranaje, toca «Network Mode» y anota el Printer ID.</p>
</div>

> **Un valor, dos nombres.** La impresora lo llama *Printer ID*; el formulario de
> Tiger Studio lo llama **Password**. El Printer ID es lo que debes escribir ahí.

---

**◀ Anterior:** [Compatibilidad con FlashForge](../compatibility/flashforge.md) · **▲ [Índice de la documentación](../../README.md)**
