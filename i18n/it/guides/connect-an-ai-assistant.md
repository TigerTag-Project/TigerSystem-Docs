---
sourceHash: ce7797639f045c9154227cdd8686b647e174f7ddf43143ca72b59c143690f412
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Collega un assistente IA al tuo account

Chiedi a Claude o a ChatGPT «quanto PETG mi resta?» e ottieni la risposta dal tuo
inventario. Il connettore TigerSystem.io permette a un assistente IA di leggere il tuo
account TigerSystem e, se lo permetti, di modificarlo. È la stessa idea del server locale di Tiger
Studio, ma ospitata: funziona dal web, da un telefono e senza che Studio sia
in esecuzione.

**L'indirizzo del connettore:**

```
https://mcp.tigersystem.io/mcp
```

Parla MCP (Model Context Protocol), lo standard aperto che gli assistenti usano per
raggiungere strumenti esterni. Qualsiasi assistente che supporti server MCP remoti con OAuth
può usarlo.

**Per i membri della TigerSquad.** Il connettore, lettura compresa, è un vantaggio
della [TigerSquad](../tigersquad.md), e l'iscrizione è gratuita. Fuori dalla TigerSquad,
l'assistente risponde che è un vantaggio TigerSquad; l'accesso torna appena ti
iscrivi.

## Cosa può leggere l'assistente

- le tue bobine: marca, materiale, colori, peso residuo, temperature, dove è
  conservata ciascuna;
- i tuoi rack, le tue liste dei desideri e il tuo storico delle scorte;
- le tue stampanti e le tue TigerScale — **mai i loro codici di accesso o le password**;
- ciò che i tuoi amici condividono con te (le loro bobine, i rack e le liste dei desideri).

Legge soltanto, a meno che tu non gli dia lettura e scrittura (vedi sotto). Legge come te, con le
stesse regole di accesso delle app, quindi non può mai vedere un altro account.
Le credenziali — codici di accesso delle stampanti, login cloud, la tua chiave privata, la tua
e-mail — non vengono mai restituite, qualunque cosa chieda.

## Sola lettura, o lettura e scrittura

Quando colleghi un assistente, la pagina di tigersystem.io chiede il suo accesso:
**Solo lettura** (predefinito) o **Lettura e scrittura**. Per cambiarlo in
seguito: **tigersystem.io → il tuo account → Dati → Assistenti connessi**, oppure
in Tiger Studio, **Gestisci gli accessi**. Dopo il passaggio a lettura e
scrittura, aggiorna o ricollega il connettore nell'assistente perché veda i suoi
nuovi strumenti.

Con lettura e scrittura, l'assistente può:

- cambiare il peso, la nota, il TD e i tag di una bobina, e sistemarla in un rack;
- modificare il prezzo, il link d'acquisto, la scorta minima, lo SKU / EAN e i link di un prodotto;
- aggiungere bobine dal catalogo;
- creare un rack, e rinominarne uno;
- elencare le modifiche che ha fatto, e annullarne una qualsiasi.

Non cancella mai nulla: una bobina finita passa a 0 g. Ogni modifica resta 30
giorni in uno storico e si può annullare. La nota e il TD sono scritti anche sul
chip, quindi la bobina chiede poi di riscrivere il suo chip.

Limiti: 20 bobine per richiesta; al giorno (UTC), 100 nuove bobine, 5 nuovi rack
e 500 modifiche in tutto, contando insieme l'assistente di Tiger Studio e gli
assistenti online, modifiche annullate comprese.

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
