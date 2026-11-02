---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Collegamento alla stampante — **Live**

| Aspetto | Dettaglio |
|---|---|
| Protocollo | Polling HTTP (porta 8898) + codici M TCP (porta 8899) |
| Rilevamento | UDP multicast (225.0.0.9:19000) |
| Filamento | IFS — il sistema multi-filamento di FlashForge |
| Telecamera | Flusso MJPEG |
| Telemetria | Temperature, avanzamento del lavoro |

## RFID nativo — nessuno: le macchine non hanno un lettore

Le stampanti FlashForge escono **senza alcun lettore RFID** e senza un formato RFID
proprio. Questo ne fa la dimostrazione più chiara del vantaggio di TigerSystem:
**abbiamo dato alle macchine FlashForge la capacità di lavorare con filamento
identificato via NFC, usando il lettore NFC già presente nello
smartphone dell'utente.** Una capacità del tutto nuova, aggiunta alla stampante di qualcun altro,
**completamente gratuita, a costo zero per l'utente, senza alcuna modifica alla macchina.**

## FlashForge × TigerSystem — il firmware ufficiale

Il team di ingegneri di FlashForge ha realizzato un firmware per **Creator 5** e
**Creator 5 Pro** che esegue **FlashForge Cloud e LAN contemporaneamente**.

Conta più di quanto sembri. Il firmware originale costringe a scegliere: attivi il Cloud
e gli strumenti locali non raggiungono più la stampante. Quella scelta era l'unica
cosa che separava un proprietario di FlashForge da questo ecosistema, e ora
non c'è più. È un **firmware ufficiale FlashForge**, non un fork della community e non una
patch: costruito con TigerTag, per questa integrazione, e pubblicato qui con
il loro consenso.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Scarica — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Scarica — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Sorgenti e guida all'installazione</a>
</div>

Si installa da una chiavetta USB. Gratuito per tutti, con o senza hardware TigerTag.

### Collegarne una, dopo il flash

Attiva la **modalità LAN** nelle impostazioni della stampante: è tutta la modifica che il
firmware rende disponibile. Tiger Studio la trova poi con il **rilevamento automatico**,
oppure la aggiungi a mano con il suo **indirizzo IP**. Non devi più scegliere
tra Cloud e strumenti locali: sono attivi entrambi contemporaneamente.

| | Firmware originale | Con questo firmware |
|---|:---:|:---:|
| FlashForge Cloud — app, accesso remoto | ✅ | ✅ |
| Accesso LAN — strumenti locali sulla tua rete | ✅ | ✅ |
| **Entrambi contemporaneamente** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect e TigerSpool **con il Cloud attivo** | ❌ | ✅ |

### Non si rinuncia a nulla

Il proprietario mantiene tutte le funzioni di FlashForge Cloud e ottiene l'intero ecosistema
in più: un **gestore di filamenti e stampanti** gratuito e open source sul desktop, un
**telefono che legge e scrive le bobine** e **[TigerSpool](../products/tigerspool.md)** —
un lettore open source in una scatola che sta accanto alle macchine e tiene **fino a 24
stampanti** nel suo elenco, dieci delle quali connesse contemporaneamente: una scatola per tutto lo scaffale.

Così una stampante senza lettore e senza un formato proprio ora legge il chip di
qualsiasi marca di filamento che usa TigerTag, e delle bobine che gli appassionati taggano da soli
a casa, su filamento che non è mai uscito con un chip.

Che un produttore di stampanti apra la propria macchina a un ecosistema che non gli appartiene è una decisione rara.
Ne beneficia ogni appassionato che ne possiede una.

## Il flusso di lavoro

1. **Aggiungi la stampante** — trovata dalla scansione di rete (UDP multicast), dove
 serve solo il suo Printer ID, oppure aggiunta a mano con indirizzo IP, numero
 di serie e Printer ID.
2. **Scansiona una bobina** — con il telefono (o un lettore desktop); finisce nel tuo
 inventario.
3. **Assegnala a uno slot IFS** — **una scansione, un clic** dalla mappatura di
 Tiger Studio. La stampante finisce per conoscere il suo filamento con la stessa
 precisione di una macchina con RFID integrato, su qualsiasi modello FlashForge, senza
 modifiche hardware e senza aggiungere nulla alla macchina.
4. **Live** — temperature, avanzamento del lavoro e flusso della telecamera MJPEG nella
 vista delle stampanti.

## Aggiungere la stampante

Tiger Studio ha bisogno di tre cose per comunicare con una FlashForge: il suo **indirizzo IP**, il suo
**numero di serie** e una **password**, che la stampante stessa chiama
**Printer ID**. Un solo valore, due nomi: ciò che il touchscreen mostra come Printer
ID è ciò che va nel campo password di Tiger Studio.

Quanti dei tre valori devi digitare dipende da come viene trovata la stampante:

| Come | Cosa inserire |
|---|---|
| **Scansione di rete** — Tiger Studio trova la stampante sulla tua rete locale | solo il **Printer ID**; la scansione fornisce IP e numero di serie |
| **A mano** — la scansione non l'ha trovata | **indirizzo IP + numero di serie + Printer ID** |

Non esiste un percorso cloud, quindi è sempre uno di questi due. Scegli il tuo modello per vedere
dove si trova ciascun valore sul touchscreen.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Precedente:** [Elegoo](./elegoo.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Anycubic](./anycubic.md)
