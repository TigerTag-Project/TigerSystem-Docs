---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# La filosofia dell'ecosistema aperto

## Tutto è aperto

Ogni livello di TigerSystem è pubblicato — hardware, firmware, SDK, app, documentazione:

| Livello | Progetto | Licenza |
|---|---|---|
| App desktop | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Hardware + firmware della bilancia (V3, attuale) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Hardware + firmware della bilancia (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Supporto per il lettore (STL + documentazione) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Guida al formato del chip | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentazione sull'integrazione cloud | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Questa documentazione | TigerSystem-Docs | CC BY 4.0 |

## Una sandbox, non un giardino recintato

L'**intero ecosistema rivolto all'utente** è volutamente **un laboratorio, non la
destinazione**.
Ogni prodotto — [Tiger Studio](../products/tiger-studio.md), l'app mobile,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) —
è una dimostrazione funzionante di ciò che una tecnologia aperta e documentata rende possibile
quando una bobina può identificarsi da sola: telemetria in tempo reale delle stampanti di sei marche,
mappatura fisica del rack, sensori, inventari condivisi. Una parte maturerà,
un'altra esiste per dimostrare una tesi, e tutto è leggibile, forkabile e
liberamente copiabile. Ogni prodotto — attuale e futuro — è una **proof of concept**
di un **protocollo open source, standard, agnostico e multipiattaforma**: il suo unico
compito è mostrare il potenziale, così che chiunque possa prendere il nostro lavoro di integrazione come
ispirazione e immaginare le funzionalità di domani.

## Costruisci il tuo

TigerTag è un **protocollo** aperto, non una piattaforma a cui devi iscriverti:

1. Leggi il formato del chip ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Scegli un [SDK](../developers/sdks.md).
3. Collegati al [cloud](../developers/account-api.md) — oppure no; i chip funzionano offline.
4. Realizza il software, l'hardware o l'attività che vuoi davvero.

La tua app può essere tutt'altra cosa — parlerà comunque con gli stessi chip.
Uno smartphone NFC, un lettore USB ACR122U — o un ESP32 fai-da-te con un modulo PN532/RC522,
alla maniera di TigerScale — è tutto l'hardware che serve: integra l'identità
della bobina in un ERP, in uno strumento interno di magazzino, in un flusso di tracciamento, in un sistema
di prestito di un fablab, in un progetto di R&S privato o pubblico — qualsiasi cosa.

---

**◀ Precedente:** [Ecosistema incentrato sull'utente](./user-centric-ecosystem.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Concetto di Smartphone Bridge](./smartphone-bridge.md)

**Vedi anche:** [Panoramica per sviluppatori](../developers/README.md), [Prodotti](../products/README.md)
