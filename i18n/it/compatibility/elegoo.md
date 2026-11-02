---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Collegamento alla stampante — **Live**

| Aspetto | Dettaglio |
|---|---|
| Protocollo | MQTT, porta 1883 |
| Rilevamento | Broadcast UDP, porta 52700 |
| Filamento | 4 slot (Canvas) |
| Controllo | Pannello di controllo live: home/spostamento, temperature, luce, ventola, modalità di velocità, carico/scarico |
| Telemetria | Temperature, avanzamento del lavoro |

## RFID nativo — specifica documentata, lettura nell'app pianificata

I tag delle bobine Elegoo sono **Mifare Ultralight** protetti solo da **magic bytes**
(`EE EE EE EE`) — nessuna vera autenticazione. Specifica di decodifica in sola lettura:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## Il flusso di lavoro

1. **Aggiungi la stampante** — rilevamento automatico in LAN (broadcast UDP) o aggiunta tramite
 IP. Richiede di attivare una sola volta la **modalità LAN Only** sul touchscreen della stampante —
 [passo passo](#passare-alla-modalità-lan).
2. **Scansiona una bobina** — telefono o lettore desktop; finisce nel tuo inventario.
3. **Assegnala a uno slot** — Tiger Studio associa le bobine dell'inventario ai quattro
 slot Canvas.
4. **Live e controllo** — oltre a telemetria e avanzamento del lavoro, Elegoo ottiene un
 **pannello di controllo completo**: home/spostamento degli assi, impostazione dei target di ugello e piano,
 accensione della luce, controllo della ventola, scelta della modalità di velocità, carico/scarico del
 filamento per slot.

## Passare alla modalità LAN

Il collegamento diretto di Tiger Studio richiede che la **modalità LAN Only** sia attivata sulla stampante stessa — una configurazione una tantum,
direttamente sullo schermo.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bonus: scrivere tag in formato Elegoo

L'editor integrato nell'app può **riscrivere un chip nel formato che le stampanti
Elegoo si aspettano** — così un chip TigerTag può persino diventare un tag Elegoo nativo, se
è ciò che serve al tuo flusso di lavoro. Il tuo chip, la tua scelta.

## Leggere TigerTag sulla macchina stessa — in preparazione

È **in preparazione** un firmware personalizzato che permetterebbe a una stampante Elegoo di leggere i
TigerTag **direttamente**, sulla macchina, secondo lo stesso principio dello
[Snapmaker U1](./snapmaker.md).

Non è ancora disponibile e non c'è una data. Finché non arriva, una Elegoo legge il
filamento identificato da TigerTag come descrive il flusso di lavoro qui sopra — tramite il
telefono, Tiger Studio o un [TigerSpool](../products/tigerspool.md) accanto alla
macchina, senza modificare nulla sulla stampante.

## Limitazioni

- I tag Elegoo nativi non vengono ancora letti nell'app — la specifica è documentata, e il lavoro in corso mira a convertire i dati dei tag del produttore in bobine TigerData (vedi [Compatibilità](./README.md)).

---

**◀ Precedente:** [Creality](./creality.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [FlashForge](./flashforge.md)
