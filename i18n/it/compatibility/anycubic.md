---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Collegamento alla stampante — **Live** (LAN + cloud)

| Aspetto | Dettaglio |
|---|---|
| Protocollo (LAN) | MQTTS, porta 9883 (TLS 1.2), direttamente verso la stampante |
| Protocollo (cloud) | REST firmato + MQTT cloud del produttore |
| Filamento | Box multicolore ACE — supporto per singolo slot |
| Rilevamento | Sonda `/info`, porta 18910 |
| Fotocamera | Flusso FLV (porta 18088) |
| Controllo | Pannello di controllo live (assi, temperature, luce, ventola, carico/scarico) |

> **Nota:** la modalità cloud è l'unico caso in cui il collegamento alla stampante transita da un
> cloud del produttore — la modalità LAN resta interamente locale.

## RFID nativo — specifica documentata, lettura nell'app pianificata

I tag delle bobine Anycubic sono **Mifare Ultralight**, **senza autenticazione e senza
crittografia** — banalmente leggibili (e clonabili). Specifica di decodifica in sola lettura:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## Il flusso di lavoro

1. **Aggiungi la stampante** — due strade: **modalità LAN** (rilevamento locale tramite la
 sonda `/info`; le credenziali di connessione vengono importate dalla configurazione
 dello slicer del produttore) oppure **modalità cloud** tramite l'account Anycubic.
2. **Scansiona una bobina** — telefono o lettore desktop; finisce nel tuo inventario.
3. **Assegnala a uno slot ACE** — Tiger Studio associa le bobine dell'inventario
 al box multicolore ACE.
4. **Live e controllo** — telemetria, avanzamento del lavoro, flusso della fotocamera FLV e
 un **pannello di controllo**: assi, temperature, luce, ventola, carico/scarico per
 slot.

## Limitazioni

- I tag Anycubic nativi non vengono ancora letti nell'app — la specifica è documentata, e il lavoro in corso mira a convertire i dati dei tag del produttore in bobine TigerData (vedi [Compatibilità](./README.md)).

---

**◀ Precedente:** [FlashForge](./flashforge.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Snapmaker](./snapmaker.md)
