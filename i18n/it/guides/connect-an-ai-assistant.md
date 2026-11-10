---
sourceHash: e67e9a1f7c1b5875001868a32d82d49a6fc2fbfd789bf0823a07c43531d8eea4
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Collega un assistente IA al tuo account

Chiedi a Claude o a ChatGPT «quanto PETG mi resta?» e ottieni la risposta dal tuo
inventario. Il connettore TigerSystem.io permette a un assistente IA di **leggere** il tuo
account TigerSystem — e nient'altro. È la stessa idea del server locale di Tiger
Studio, ma ospitata: funziona dal web, da un telefono e senza che Studio sia
in esecuzione.

**L'indirizzo del connettore:**

```
https://mcp.tigersystem.io/mcp
```

Parla MCP (Model Context Protocol), lo standard aperto che gli assistenti usano per
raggiungere strumenti esterni. Qualsiasi assistente che supporti server MCP remoti con OAuth
può usarlo.

## Cosa può leggere l'assistente

- le tue bobine: marca, materiale, colori, peso residuo, temperature, dove è
  conservata ciascuna;
- i tuoi rack, le tue liste dei desideri e il tuo storico delle scorte;
- le tue stampanti e le tue TigerScale — **mai i loro codici di accesso o le password**;
- ciò che i tuoi amici condividono con te (le loro bobine, i rack e le liste dei desideri).

**Non può modificare nulla**: ogni strumento è in sola lettura. Legge come te, con le
stesse regole di accesso delle app, quindi non può mai vedere un altro account.
Le credenziali — codici di accesso delle stampanti, login cloud, la tua chiave privata, la tua
e-mail — non vengono mai restituite, qualunque cosa chieda.

## Claude (web, desktop, mobile)

1. **Impostazioni → Connettori → Aggiungi connettore personalizzato.**
2. Chiamalo `TigerSystem.io`, incolla l'indirizzo qui sopra, lascia vuoti i campi OAuth
   avanzati e aggiungilo.
3. Fai clic su **Connetti**. Arrivi su tigersystem.io: accedi, verifica che la pagina
   dica che le risposte vanno a claude.ai e fai clic su **Consenti**.
4. In una conversazione, attiva il connettore TigerSystem.io dal menu degli strumenti e
   fai la tua domanda.

## ChatGPT

I connettori personalizzati richiedono la **modalità sviluppatore** (un piano a pagamento; nei piani Business,
la abilita un amministratore).

1. Attiva **Impostazioni → App e connettori → Impostazioni avanzate → Modalità sviluppatore**.
2. **Crea** un connettore: nome `TigerSystem.io`, l'indirizzo qui sopra, autenticazione
   **OAuth**, nessun ID client né segreto.
3. Accedi su tigersystem.io e fai clic su **Consenti**.
4. In una nuova chat, abilita il connettore e fai la tua domanda.

## Grok

I connettori personalizzati richiedono un **piano Grok a pagamento**.

1. Apri **grok.com/connectors → Nuovo connettore → Personalizzato**.
2. Chiamalo `TigerSystem.io` e incolla l'indirizzo qui sopra.
3. Accedi su tigersystem.io e fai clic su **Consenti**.
4. In una conversazione, attiva il connettore TigerSystem.io e fai la tua domanda.

## Le Chat (Mistral)

I connettori personalizzati vengono aggiunti da un **amministratore** — su un account personale
sei tu.

1. **Connettori → Aggiungi connettore → Connettore MCP personalizzato.**
2. Chiamalo `TigerSystem.io` e incolla l'indirizzo qui sopra; Le Chat rileva da sé
   il metodo di accesso (OAuth).
3. Accedi su tigersystem.io e fai clic su **Consenti**.
4. In una conversazione, abilita il connettore e fai la tua domanda.

I nomi dei menu cambiano spesso in queste app; i passaggi restano gli stessi.

## Codex, Cursor e altri client desktop

Aggiungi un server MCP remoto di tipo **Streamable HTTP** con l'indirizzo qui sopra e
nessun token. L'app apre il browser per l'accesso; dopo che hai fatto clic su
**Consenti**, il browser arriva a un indirizzo `127.0.0.1` — è l'app sul tuo
computer che raccoglie l'accesso. Una pagina vuota o «impossibile connettersi» è
normale: chiudi la scheda.

## Revocare l'accesso a un assistente

**tigersystem.io → il tuo account → Dati → Assistenti connessi.** Ogni
assistente che hai autorizzato è elencato con la data di connessione e dell'ultimo utilizzo.
**Revoca l'accesso** lo interrompe subito.

## Da sapere

- L'assistente può rispondere con dati vecchi fino a due minuti: le letture recenti
  vengono conservate per breve tempo per mantenere il servizio rapido e leggero.
- Lo stato in tempo reale della stampante (online, in stampa) non è disponibile dal cloud — solo
  Tiger Studio, nella rete della tua stampante, lo vede.
- Note, nomi dei colori e testi delle liste dei desideri sono parole tue (o di un amico); all'
  assistente è detto di riportarli, mai di considerarli istruzioni.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Tiger Studio](../products/tiger-studio.md), [Guide](./README.md)
