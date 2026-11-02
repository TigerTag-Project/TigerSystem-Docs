---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Collegamento alla stampante — non ancora, ma le basi ci sono

Le stampanti Klipper generiche (tramite l'API **Moonraker**) **non sono oggi
un'integrazione ufficiale**. Tuttavia il collegamento Snapmaker di Tiger Studio
parla già WebSocket/JSON-RPC di Moonraker — la base naturale per
un'integrazione Klipper indipendente dal produttore.

| Aspetto | Stato |
|---|---|
| Trasporto Moonraker | Esistente (usato dall'integrazione Snapmaker) |
| Supporto Klipper generico | Pianificato / da definire |
| Mappatura degli slot del filamento | Dipende dalla configurazione MMU della macchina — da definire |

> **TODO:** definire l'obiettivo: quale superficie di Moonraker è abbastanza
> generica (oggetti stampante, coda dei lavori, webcam) e come mappare MMU/slot
> del filamento nell'ecosistema Klipper (ERCF, MMU2, Box Turtle…).

## Usare TigerTag con Klipper oggi

Tutto tranne il collegamento live alla stampante funziona già: chip TigerTag,
inventario, monitoraggio del peso, rack e condivisione non dipendono dalla stampante.

---

**◀ Precedente:** [Snapmaker](./snapmaker.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [OpenSpool](./openspool.md)
