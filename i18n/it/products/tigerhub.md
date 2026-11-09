---
sourceHash: 33ae3de925ff8dddc78c78974284f46ec7b73c212c3199a7cd4a98f7f08a2e3c
sourcePath: docs/products/tigerhub.md
---

# TigerHub

## Scopo

**TigerHub è la casa dell'ecosistema sul web** — il sito su
**[tigersystem.io](https://tigersystem.io)**. Presenta la sandbox di TigerSystem
e ciò che il protocollo aperto TigerTag rende possibile, e ospita il
**lato social** della sandbox: condividere una lista dei desideri, invitare qualcuno a diventare
amico, pubblicare una lista in sola lettura che chiunque può aprire in un browser.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — la casa web di TigerSystem, con l'app mobile che scansiona davanti a Tiger Studio" />

## Dove si colloca

```mermaid
flowchart TB
  ST["Tiger Studio"] & CO["Connect"] <--> FB[("Your TigerSystem account<br/>(Firebase — one shared database)")]
  FB -- "published lists · invites" --> HUB["TigerHub<br/>tigersystem.io"]
  HUB --> VIS["Anyone with the link<br/>plain browser, no account"]
```

## Funzionalità — tutte attive oggi

- **Vetrina dell'ecosistema** — la home racconta l'intera storia: come funziona,
 le sei marche di stampanti, i componenti e i tre livelli (TigerData —
 monitoraggio solo software · TigerTag — il chip offline · TigerTag+ — autenticità
 verificata).
- **Il tuo account sul web** (`/account`) — accedi al tuo account TigerSystem
  da un browser.
- **Liste dei desideri** — pubbliche e solo per gli amici, entrambe attive.
- **Codici amico e inviti** — aggiungetevi come amici dal web.
- **Link pubblici alle liste** — condividi una lista in sola lettura come
 `https://tigersystem.io/wishlist/<token>`; chi la visualizza non ha bisogno di un'app né di un
 account.
- **Catalogo dei materiali e database di riferimento** (`/materials`, `/database`) —
 sfoglia il catalogo condiviso su cui si basano tutte le app.
- **Stampanti e funzionalità** (`/printers`, `/features`) — cosa funziona con cosa.
- **Modelli 3D** (`/models`) — modelli stampabili (TigerPOD e simili).
- **Per produttori, sviluppatori e stampa** (`/manufacturers`, `/developers`,
 `/press`) — la storia B2B, indicazioni per l'integrazione, risorse multimediali.
- **Goodies** (`/goodies`) — il cappellino e il polo ufficiali. Comprarne uno è uno
 dei modi per [sostenere il progetto](../support.md).

## Un link pubblico a una lista, in pratica

Un link pubblico a una lista è `https://tigersystem.io/wishlist/<token>`. Tre
cose da sapere prima di incollarne uno da qualche parte:

- **Il token è l'intera chiave.** Chiunque abbia il link apre la lista —
  nessun account, nessuna app, niente da dimostrare. Trattalo come una password
  che hai scelto di condividere: va bene per un post su un forum o per un
  amico, non per una lista che ti darebbe fastidio veder copiata oltre.
- **È rendere pubblica una lista a creare il link.** Nell'app, impostare una
  lista come *pubblica* genera il suo token e pubblica una copia della lista;
  rimetterla privata elimina quella copia e il token. Rendila di nuovo pubblica
  e riceve un token **nuovo**, quindi un link distribuito in precedenza non
  torna in vita. TigerHub mostra solo ciò che l'app pubblica.
- **Sola lettura, e dice chi l'ha condivisa.** Chi la visualizza vede quella
  sola lista — i suoi elementi, e l'occasione o il messaggio se ne hai
  impostato uno — mai il tuo inventario o le tue altre liste. La pagina mostra
  però il tuo **nome visualizzato**, i tuoi **link social** e un pulsante
  *aggiungi come amico* che porta il tuo **codice di scoperta**.

Un link è uno dei due modi di condividere; l'altro è un amico:

| | Link pubblico alla lista | Amico |
|---|---|---|
| Chi la vede | chiunque abbia il link | una persona che hai accettato |
| Serve un account | no | sì |
| Come | rendere pubblica una lista | scambiarsi i codici di scoperta |
| Annullare | rendere privata la lista | rimuovere l'amico |

La parte sugli amici è riassunta qui solo per affiancarla al link; le regole di
richiesta e rimozione, e la loro applicazione lato server, appartengono a
[Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md).

## TigerHub non è il database

Gli account utente e i dati dietro tutte le app vivono su **Firebase semplice**
(Auth + Firestore) — un'infrastruttura volutamente senza marchio: **un solo database
condiviso, in un solo posto**, così Tiger Studio, Tiger NFC Connect, TigerScale
e l'account TigerSystem interoperano tutti sugli stessi dati. TigerHub è la
**superficie web** costruita sopra di esso. Vedi
[Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md).

## Interazioni

| Con | Come |
|---|---|
| Tiger Studio / Connect | Rendono una lista pubblica o privata — il che crea o elimina il suo link — e inviano inviti ad amici |
| Firebase (database dell'account) | Fonte dei dati pubblicati |
| Visitatori | Browser semplice, nessun account necessario |

---

**◀ Precedente:** [Tiger Studio](./tiger-studio.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [TigerPOD](./tigerpod.md)

**Vedi anche:** [Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md), [Architettura](../architecture/overview.md)
