---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Collegamento alla stampante — **Live**

| Aspetto | Dettaglio |
|---|---|
| Protocollo | WebSocket, porta 9999 (basato su heartbeat) |
| Filamento | Supporto multi-bobina CFS (boxsInfo) |
| Fotocamera | Video WebRTC (porta 8000) |
| Telemetria | Temperature, avanzamento del lavoro, anteprima di stampa |

## RFID nativo — specifica documentata, lettura nell'app pianificata

I tag delle bobine Creality sono **Mifare Classic 1K** con una **chiave AES-128-ECB
per il settore 1** e un payload facoltativamente cifrato. Specifica di decodifica in sola lettura:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## Il flusso di lavoro

1. **Aggiungi la stampante** — rilevamento in LAN o aggiunta tramite IP; Tiger Studio si connette
 al WebSocket della stampante e mantiene attivo il collegamento.
2. **Scansiona una bobina** — telefono o lettore desktop; finisce nel tuo inventario.
3. **Assegnala a uno slot CFS** — Tiger Studio associa le bobine dell'inventario
 ai box CFS, così le informazioni sul filamento lato macchina corrispondono alla realtà.
4. **Live** — temperature, avanzamento del lavoro, anteprima di stampa, orario di «fine» e
 flusso della **fotocamera WebRTC** nella vista delle stampanti.

## Limitazioni

- I tag Creality nativi non vengono ancora letti nell'app — la specifica è documentata, e il lavoro in corso mira a convertire i dati dei tag del produttore in bobine TigerData (vedi [Compatibilità](./README.md)).

---

**◀ Precedente:** [Bambu Lab](./bambu-lab.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Elegoo](./elegoo.md)
