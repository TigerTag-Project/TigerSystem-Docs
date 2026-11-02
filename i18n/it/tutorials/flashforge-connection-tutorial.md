---
sourceHash: 34416628551d83bd9fa02324bae0b2fbfb63e5cebd7cce0c1f49579591fc94e9
sourcePath: docs/tutorials/flashforge-connection-tutorial.md
---

# FlashForge: tutorial di connessione

Le stampanti FlashForge si collegano solo tramite la rete locale — non esiste
un'opzione cloud. Ciò che ti serve dal touchscreen dipende da come Tiger Studio trova la
stampante:

- **Trovata dalla scansione di rete:** solo il **Printer ID** — passaggio 3.
- **Aggiunta a mano:** il **numero di serie** e l'**indirizzo IP** (passaggio 2), più il
 **Printer ID** (passaggio 3).

Per il resto dell'integrazione consulta
[Compatibilità FlashForge](../compatibility/flashforge.md).

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step1.jpg" alt="Touchscreen FlashForge — pulsante Basic Info" />
<p><strong>Passaggio 1.</strong> Nell'interfaccia principale, tocca il pulsante «Basic Info» in basso a destra dello schermo.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step2.jpg" alt="Touchscreen FlashForge — pagina Basic Info" />
<p><strong>Passaggio 2.</strong> Nella pagina Basic Info, recupera il Serial No. e l'IP Address.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step3.jpg" alt="Touchscreen FlashForge — pagina Network Mode" />
<p><strong>Passaggio 3.</strong> Seleziona l'icona a forma di ingranaggio, tocca «Network Mode», poi recupera il Printer ID.</p>
</div>

> **Un solo valore, due nomi.** La stampante lo chiama *Printer ID*; il modulo di
> Tiger Studio lo chiama **Password**. Il Printer ID è ciò che devi digitare lì.

---

**◀ Precedente:** [Compatibilità FlashForge](../compatibility/flashforge.md) · **▲ [Indice della documentazione](../../README.md)**
