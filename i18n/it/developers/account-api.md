---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# API dell'account e integrazione di terze parti

## Il contratto

Le app di terze parti si collegano al backend di TigerSystem — semplice Firebase — con
il **pattern standard di Firebase**:

1. Recupera la configurazione pubblica dell'SDK:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Autentica l'**account TigerTag dell'utente stesso** (il fatto che la configurazione sia pubblica è
 voluto — la sicurezza è garantita lato server dalle regole di Firestore).
4. Leggi/scrivi i dati di quell'utente entro la superficie documentata.

## Documentazione di riferimento

Il contratto di integrazione completo si trova in
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Documento | Contenuto |
|---|---|
| `docs/01-firebase-config.md` | Configurazione del progetto e connessione |
| `docs/02-authentication.md` | Flussi di autenticazione |
| `docs/03-data-model.md` | Collezioni e campi di Firestore (il riferimento del modello di dati) |
| `docs/04-friend-system.md` | Codici di scoperta, richieste, inventari condivisi |
| `docs/05-rate-limiting.md` | Limiti di uso equo |
| `examples/` | CLI Python, ESP32/Arduino, Home Assistant, bridge Spoolman |

## Regole di sicurezza — cosa aspettarsi

- `users/{uid}/**` è riservato per impostazione predefinita al solo proprietario.
- Le scritture tra utenti diversi richiedono sempre una **relazione preliminare** (ad es. un'amicizia
 accettata) — non esistono percorsi di scrittura aperti.
- Alcune collezioni sono con **elenco di campi consentiti**: le scritture che contengono campi
 non in elenco vengono rifiutate.
- I campi riservati agli amministratori (ruoli, flag di debug) non sono mai scrivibili dal client.

## Endpoint HTTP

`cdn.tigertag.io` si trova nello **stesso progetto Firebase** degli account: ospita
il database di riferimento condiviso, le immagini delle bobine (comprese le foto prodotto
di TigerTag+) e gli endpoint HTTP legati al database di TigerSystem.

| Endpoint | Scopo |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Controllo dello stato di salute |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Invia il peso di una bobina tramite l'UID del chip (usato dai dispositivi di tipo bilancia) |

> **TODO:** catalogo completo dell'API HTTP (modello di autenticazione, forma degli errori) — da
> documentare nel repository di integrazione e riassumere qui.

---

**◀ Precedente:** [SDK](./sdks.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [FAQ](../faq/README.md)

**Vedi anche:** [Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md), [Architettura](../architecture/overview.md)
