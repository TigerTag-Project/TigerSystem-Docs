---
sourceHash: 52c625d47f630ed8187a415d4e2480f3b5b2612184ad602a942c94567ce6bbaf
sourcePath: docs/architecture/overview.md
---

# Panoramica dell'architettura

## Lo stack, dall'alto in basso

```mermaid
flowchart TB
  TAG["TigerTag chip<br/>(open NDEF payload on the spool)"]
  CONNECT["Tiger NFC Connect<br/>(mobile — NFC scan & encode)"]
  CLOUD["Firebase<br/>(accounts + Firestore + cdn.tigertag.io)"]
  STUDIO["Tiger Studio<br/>(desktop — inventory, devices, printers)"]
  PRINTERS["Printer integrations<br/>(Bambu Lab · Creality · Elegoo · FlashForge · Snapmaker · Anycubic)"]
  THIRD["Third-party apps & APIs<br/>(SDKs, Home Assistant, Spoolman, ESP32…)"]
  WEB["TigerHub<br/>(tigersystem.io — ecosystem site, wishlists, sharing)"]

  TAG --> CONNECT
  TAG --> STUDIO
  CONNECT <--> CLOUD
  STUDIO <--> CLOUD
  STUDIO --> PRINTERS
  CLOUD --> WEB
  CLOUD <--> THIRD
```

## Livelli

| Livello | Ruolo | Documentazione di riferimento |
|---|---|---|
| **Chip TigerTag** | Identità portatile e aperta della bobina fisica | [Formato del chip](../concepts/tigertag-chip.md) |
| **Tiger NFC Connect** | Il ponte smartphone: scansione, codifica, consultazione | [Pagina del prodotto](../products/tiger-nfc-connect.md) |
| **Firebase** | Un unico database condiviso: account, inventario, sincronizzazione; il punto di interoperabilità della sandbox | [Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md) |
| **TigerHub** | La casa web dell'ecosistema: vetrina, liste dei desideri, amici, condivisione | [Pagina del prodotto](../products/tigerhub.md) |
| **Tiger Studio** | Banco di lavoro desktop: inventario, rack, sensori, stampanti | [Pagina del prodotto](../products/tiger-studio.md) |
| **Integrazioni con le stampanti** | Collegamenti LAN in tempo reale con sei marche di stampanti | [Compatibilità](../compatibility/README.md) |
| **API di terze parti** | SDK + superficie Firestore documentata per chiunque | [Sviluppatori](../developers/README.md) |

## La mappa completa: ogni elemento e le sue connessioni

Accessori, app, cloud, stampanti, slicer e integrazioni di terze parti, in
un'unica immagine:

```mermaid
flowchart TB
  subgraph SP["The spool"]
    TAG["TigerTag chip"]
  end
  subgraph ACC["Accessories"]
    POD["TigerPOD<br/>dual reader stand"]
    ACR["ACR122U<br/>USB NFC reader"]
    SCALE["TigerScale"]
    TD1S["TD1S color sensor"]
  end
  subgraph APPS["Apps"]
    CO["Tiger NFC Connect"]
    ST["Tiger Studio"]
    WEB["TigerHub<br/>tigersystem.io"]
  end
  CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  subgraph PRT["Printing"]
    SLICER["Your slicer<br/>(OrcaSlicer, vendor slicers…)"]
    PRN["Printers<br/>Anycubic · Bambu Lab · Creality<br/>Elegoo · FlashForge · Snapmaker"]
  end
  THIRD["Third-party<br/>Home Assistant · Spoolman · ESP32 · your app"]

  TAG -- "NFC tap" --> CO
  TAG -- "scan" --> POD --> ST
  TAG -- "scan" --> ACR --> ST
  TD1S -- "measured color" --> ST
  SCALE -- "live weight" --> CLOUD
  CO <--> CLOUD
  ST <--> CLOUD
  CLOUD -- "public share links" --> WEB
  CLOUD <--> THIRD
  ST -- "filament data to slots" --> PRN
  PRN -- "live telemetry, job, camera" --> ST
  SLICER -- "print job" --> PRN
```

Leggila da sinistra a destra: il **chip** identifica la bobina; gli **accessori**
catturano la realtà (scansioni, peso, colore); le **app** e il **cloud** mantengono tutto
sincronizzato; la **stampante** riceve i dati del filamento e riferisce in tempo reale.
Il tuo **slicer mantiene il suo compito**: TigerSystem non esegue lo slicing, fa in modo che
tutti (tu, la macchina, le app) sappiano esattamente quale filamento si trova dove.

## Principi di progettazione

1. **Il chip è autosufficiente.** Una bobina si identifica da sola senza cloud, senza
 account, senza rete: il payload è completo e aperto.
2. **Il cloud appartiene all'utente, non al sistema.** Tutto lo stato risiede sotto l'account
 dell'utente; sono le regole di sicurezza lato server, non il codice client, a far rispettare
 l'accesso.
3. **Ogni livello è opzionale.** L'uso solo con telefono, solo desktop, solo chip o solo
 API funziona sempre; i componenti aggiungono valore ma non si bloccano mai a vicenda.
4. **Le integrazioni parlano il protocollo nativo della stampante.** Nessuna modifica al firmware, nessun
 giro tramite il cloud: Tiger Studio comunica via MQTT/WebSocket/HTTP direttamente sulla LAN
 (vedi [flusso dei dati](./data-flow.md)).

---

**◀ Precedente:** [Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Flusso dei dati](./data-flow.md)

**Vedi anche:** [Prodotti](../products/README.md), [Sviluppatori](../developers/README.md)
