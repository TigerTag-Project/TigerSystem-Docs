---
sourceHash: af4b7e262a3473ee00f78614c8bc21819b9ee5fb231767ee2ea890f58a06b2dd
sourcePath: docs/guides/twin-tag-pair.md
---

# Quando i due chip di una bobina risultano come due bobine

Hai applicato a una bobina un chip su ciascuna faccia, e il tuo inventario mostra ora
**due** voci invece di una. Ogni chip funziona; ognuno apre la propria bobina. Il
peso che correggi su uno non compare mai sull'altro.

Nulla è rotto. Quasi certamente i due chip non sono mai stati una coppia.

## Il test che chiarisce la questione

Due chip sono una coppia perché portano lo **stesso Twin Tag ID** — un valore
scritto al momento della scrittura, condiviso solo dai chip scritti nella stessa
sessione. Leggi entrambi i chip e confronta quel valore: è l'intera diagnosi.
Tiger Studio lo mostra; lo mostra anche qualsiasi lettore che decodifichi il payload.

La regola completa, compreso ciò che altro deve coincidere e perché il solo timestamp non è
una prova, si trova in
[il chip TigerTag](../concepts/tigertag-chip.md).

## Valori diversi: non sono mai stati una coppia

È la causa ordinaria, e ha una sola origine: **i due chip sono stati
scritti in due passaggi separati**. Un secondo passaggio avviene un secondo dopo o un giorno
dopo, quindi imprime un Twin Tag ID diverso, e da quel momento nulla lega i due chip.
Ogni strumento a valle ha ragione di contare due bobine.

Non c'è riparazione se non riscrivendo. Una coppia si crea al momento della scrittura o
non si crea affatto.

## Riscriverli come un'unica coppia

Cancella entrambi i chip, poi scrivili insieme in un'unica sessione:

| | Come viene scritta la coppia | Ideale per |
|---|---|---|
| **Telefono** — [Tiger NFC Connect](../products/tiger-nfc-connect.md) | *Dual NFC*: un solo modulo, poi chip 1/2 e 2/2 nella stessa sessione | una bobina, nessun hardware |
| **Desktop, due lettori** — [TigerPOD](../products/tigerpod.md) | entrambi i chip insieme, in un solo passaggio | uno scaffale, un lotto |
| **Desktop, un lettore** | impossibile in un solo passaggio — è così che si è creato il problema | — |

La procedura da telefono, compresa la regola per cui il chip che hai scansionato per primo è
quello che l'app si aspetta come 1/2, si trova in
[la tua prima bobina smart](../tutorials/first-smart-spool.md).

Il caso del lettore singolo è il motivo per cui il [TigerPOD](../products/tigerpod.md)
ha due lettori uno di fronte all'altro: un passaggio, un timestamp, una coppia.

## Stesso valore, ma sempre due voci

Più raro, e da segnalare. Il Twin Tag ID è necessario ma non sufficiente —
i due chip devono anche descrivere la stessa bobina, campo per campo: marca,
materiale, i tre colori, entrambi gli aspetti. Confronta poi quelli.

Se ogni campo coincide e il tuo inventario divide comunque la bobina in due, si
tratta di un bug e non di un errore di scrittura. Segnalalo su
[Discord](https://discord.gg/3Qv5TSqnJH) con le letture di entrambi i chip.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Il chip TigerTag](../concepts/tigertag-chip.md), [La tua prima bobina smart](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
