---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Collegamento alla stampante — **Live**

| Aspetto | Dettaglio |
|---|---|
| Protocollo | WebSocket Moonraker (JSON-RPC), porta 7125 + estensioni proprietarie |
| Rilevamento | Scansione HTTP |
| Filamento | 4 slot — modifica del filamento per singolo slot (modello di colore RRGGBBAA) |
| Controllo | Pannello di controllo live (assi, temperature, luce, ventola, velocità, carico/scarico) |
| Telemetria | Temperature, avanzamento del lavoro |

## RFID nativo — specifica documentata, lettura nell'app pianificata

I tag delle bobine Snapmaker sono **Mifare Classic 1K** con **chiavi per settore
derivate tramite HKDF** e una **firma RSA-2048 PKCS#1 v1.5 + SHA-256** — il formato
più blindato documentato finora. Specifica di decodifica in sola lettura:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## Il flusso di lavoro

1. **Aggiungi la stampante** — scansione HTTP sulla LAN o aggiunta tramite IP; Tiger Studio
 parla Moonraker (JSON-RPC su WebSocket).
2. **Scansiona una bobina** — telefono o lettore desktop; finisce nel tuo inventario.
3. **Assegnala a uno slot** — modifica del filamento per singolo slot (il modello di colore
 RRGGBBAA di Snapmaker è gestito in modo trasparente).
4. **Live e controllo** — telemetria, avanzamento del lavoro e un **pannello di controllo**:
 assi, temperature, luce, ventola, modalità di velocità, carico/scarico per slot.

## Limitazioni

- I tag Snapmaker nativi non vengono ancora letti nell'app — la specifica è documentata, e il lavoro in corso mira a convertire i dati dei tag del produttore in bobine TigerData (vedi [Compatibilità](./README.md)).

## La prima stampante a leggere TigerTag in modo nativo

Il
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
della community (indipendente, GPL-3.0) aggiunge SSH, streaming della fotocamera, metriche — e con essi
**lo Snapmaker U1 legge i TigerTag in modo nativo, sulla macchina stessa**. Questo
rende l'U1 la prima stampante in cui una bobina TigerTag viene riconosciuta senza
alcuna app di mezzo — il futuro a cui punta la
[partita collettiva](../vision/for-filament-manufacturers.md), arrivato in
anticipo grazie alla community. Vedi
[le integrazioni di terze parti](../developers/integrations.md).

---

**◀ Precedente:** [Anycubic](./anycubic.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Klipper](./klipper.md)
