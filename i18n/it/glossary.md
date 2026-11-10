---
sourceHash: b28699b1ffe29a8197a36d00c7662d7a3930211c20f3d4e28aab3ac33abd11e8
sourcePath: docs/glossary.md
---

# Glossario

Ogni termine che questa documentazione usa senza spiegarlo. Le definizioni sono
tratte dalle pagine collegate accanto a ciascuna — ogni voce rimanda alla pagina che
ne racconta la storia completa.

> **Nota:** questo glossario è un **seme**. Copre i termini che compaiono già
> nel repository; è volutamente incompleto, e le voci vengono aggiunte solo quando
> esiste da qualche parte nella documentazione la sostanza per scriverle.
> Manca un termine? Aggiungilo con un link alla pagina che lo definisce.

## Il vocabolario proprio dell'ecosistema

| Termine | Significato |
|---|---|
| **TigerSystem** | L'intero ecosistema aperto: il formato del chip, i dati di riferimento, le app, l'hardware e la superficie cloud. Vedi [Perché esiste TigerSystem](./vision/why-tigersystem.md). |
| **TigerTag** | Un chip NFC NTAG standard che porta il payload aperto TigerTag di 144 byte — l'identità di una bobina, leggibile da qualsiasi cosa. Vedi [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Un TigerTag la cui identità porta un **ID prodotto del catalogo ufficiale**, più dati di arricchimento facoltativi forniti dai metadati della Web API. Il chip resta leggibile al 100% offline. Il `+` significa *identificato*, non *certificato*. Vedi [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Un TigerTag+ che porta anche una **firma** crittografica, scritta da un produttore che detiene la certificazione e i relativi strumenti di firma. Verificarne una è gratuito e offline; emetterne una è ciò che la certificazione concede. |
| **TigerData** | La stessa identità senza alcun chip: i dati del protocollo in forma puramente digitale, senza UID, promuovibile a chip reale in qualsiasi momento. Vedi [Una sola identità, quattro stati](./concepts/universal-filament-identity.md). |
| **TigerData+** | Una bobina senza chip che porta un vero prodotto del catalogo ufficiale — marca, colore, materiale, temperature, diametro, SKU ed EAN esatti — invece di valori digitati a mano. Il `+` significa *identificato*, non *certificato*. |
| **Official** | Realizzato da TigerSystem stesso — i chip in entrambi i formati, e le app e l'hardware in [Prodotti](./products/README.md). Un'indicazione di provenienza, non un marchio che si concede: TigerSystem non certifica se stesso. |
| **TigerTag Compatible** | Il livello gratuito: tutto ciò che *dialoga con* i chip TigerTag — lettori, app, stampanti, slicer, strumenti. Non serve alcun permesso per implementarlo, per dichiararlo o per mostrare il logo in un'app, in una documentazione o in una scheda di negozio. Copre anche **TigerTag+**: verificare una firma è gratuito, offline e senza restrizioni. L'unica parola che non include mai è *certificato*. |
| **TigerTag Certified** | Il livello sottoposto ad audit, aperto a tutto ciò che una terza parte realizza — un dispositivo, un'applicazione, un filamento, un inlay, un carrier — una volta superato un audit rispetto ai requisiti. Concesso e non rivendicato, elencato nel registro dei certificati e revocabile. Esiste in due ambiti, **TigerTag Certified** e **TigerTag+ Certified**. I partner certificati possono applicare il marchio **sul prodotto** ed emettere firme TigerTag+. Vedi la [documentazione per sviluppatori](./developers/README.md) e i [criteri di certificazione](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | L'app mobile (iOS/Android) — tocca per leggere, tocca per scrivere, sfoglia il catalogo. In precedenza «TigerTag RFID Connect». Vedi [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | L'app desktop open source (Windows/macOS/Linux) — inventario, rack, sensori e collegamenti alle stampanti. Vedi [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | La casa web dell'ecosistema su `tigersystem.io` — vetrina, liste dei desideri, codici amico, condivisione pubblica delle liste. Vedi [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | Il supporto stampabile in 3D con doppio lettore NFC — STL gratuito. Vedi [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | La bilancia per filamento open source basata su ESP32 che risponde a «quanto ne resta?». Vedi [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | La scatola accanto alla stampante che scrive l'identità di una bobina in uno slot della stampante al semplice contatto — senza app, senza tastiera, di qualsiasi marca. Vedi [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | La toolchain industriale, di livello produttivo, che programma i chip sulle linee di produzione del filamento, e gli strumenti che curano il database dei filamenti. Non pubblica. Vedi [Suite Factory](./products/factory-suite.md). |
| **Carrier** | La striscia che porta i due chip di una bobina — uno a ciascuna estremità ripiegata, incollato all'anima di cartone con adesivo industriale 3M. Usata sulla linea di fabbrica, venduta a parte per i refill, pubblica e stampabile a casa. Vedi [Il chip TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Una bobina riutilizzabile su cui si monta un refill senza bobina. Il chip di un refill va dentro l'anima di cartone, quindi resta con il filamento e non con la bobina. |
| **Twin Tag** | I due chip di una stessa bobina, scritti insieme come coppia e mantenuti identici per tutta la vita della bobina — contati sempre come **una** bobina. |
| **Reference database** | Le tabelle di ID condivise (marche, materiali, aspetti, tipi, diametri, unità) servite da `cdn.tigertag.io`, così che un chip codificato da uno strumento si legga in modo identico in ogni altro. Vedi [Identità universale del filamento](./concepts/universal-filament-identity.md). |
| **Aspect** | Il campo del database di riferimento che descrive colore e finitura di un filamento; la [campionatura del materiale](./developers/material-swatch.md) viene disegnata a partire da esso. |
| **Material swatch** | La convenzione normativa per trasformare i *dati* di colore di una bobina nella stessa *immagine* su ogni superficie — tre forme (una divisione morbida a 135° per 2-3 colori netti, un camembert per 4+, una rampa a 135° per i colori sfumati), con un renderer di riferimento con cui verificare un'implementazione. Vedi [La campionatura del materiale](./developers/material-swatch.md). |
| **File `.ttag`** | Il file di interscambio portatile e offline che trasporta uno o più materiali di inventario (TigerData, TigerData+, TigerTag o TigerTag+) tra gli strumenti. Vedi [il formato `.ttag`](./developers/ttag-format.md). |
| **Second life** | Ricodificare un chip per una bobina ricaricata o riutilizzata, o convertirlo in semplice NDEF per qualsiasi altro uso NFC — un chip non dovrebbe mai diventare un rifiuto elettronico. Vedi [Second Life](./philosophy/second-life.md). |
| **Smartphone bridge** | Usare un telefono (o un lettore desktop) per identificare una bobina per una stampante che non ha un lettore RFID proprio. Vedi [Lo Smartphone Bridge](./philosophy/smartphone-bridge.md). |
| **Printer link** | Tiger Studio che dialoga con una macchina via LAN — telemetria, slot del filamento, lavoro, telecamera. Distinto dalla lettura dei tag propri del produttore. Vedi [Compatibilità](./compatibility/README.md). |
| **Refill** | Una matassa di filamento venduta senza bobina, da montare su una bobina che già possiedi. |

## NFC e RFID

| Termine | Significato |
|---|---|
| **NFC** | Near-Field Communication — la radio a corto raggio che ogni smartphone moderno può usare per leggere un TigerTag. |
| **RFID** | Radio-Frequency Identification, la famiglia più ampia a cui appartiene l'NFC. Qui indica sia i tag bloccati delle bobine dei produttori sia il TigerTag. |
| **NTAG213 / 215 / 216** | La famiglia di chip NXP usata da un TigerTag (NFC Forum Type 2). Il payload è dimensionato per stare nel più piccolo, l'NTAG213; i chip ufficiali di marca sono NTAG215 per lasciare margine di memoria al riutilizzo. Vedi [Il chip TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — il contenitore standard in cui è memorizzato il payload TigerTag, ed è per questo che qualsiasi strumento NFC può leggerlo, e che il chip di una bobina vuota può diventare un semplice oggetto NFC. |
| **UID** | L'identificatore hardware univoco del chip, fissato in produzione e non riscrivibile. Il backup di un chip vi è legato, così come la firma di un TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | Le famiglie di chip che i produttori di stampanti usano per i propri tag delle bobine — documentate per produttore nella [matrice di compatibilità](./compatibility/README.md). |
| **ACR122U** | La classe di lettori NFC USB di largo consumo usata per leggere e scrivere i chip da un computer; un [TigerPOD](./products/tigerpod.md) è un supporto costruito attorno a uno di essi. |
| **PN532 / RC522** | Moduli lettori NFC economici, tipicamente abbinati a un ESP32, per lettori fai-da-te — l'approccio usato da [TigerScale](./products/tigerscale.md). |
| **ECDSA** | Lo schema di firma verificato dall'extra facoltativo `verify` dell'SDK Python — il meccanismo dietro la firma di origine di un TigerTag+. Vedi [SDK](./developers/sdks.md). |
| **OpenSpool** | Uno standard di tag NFC aperto e indipendente per le bobine (NFC Type 2, JSON NDEF, sbloccato). Vedi [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | Il toolkit RFID multi-produttore della community da cui derivano le schede di decodifica per produttore, e che legge i TigerTag. Vedi [Integrazioni di terze parti](./developers/integrations.md). |

## Stampanti e hardware

| Termine | Significato |
|---|---|
| **AMS** | L'Automatic Material System di Bambu Lab — l'alimentatore multi-bobina. Rilevante qui perché di solito condivide un solo lettore RFID tra due slot, ed è per questo che una bobina porta due chip. |
| **CFS** | Il Filament System di Creality — la sua unità multimateriale. |
| **ACE** | L'unità multimateriale di Anycubic. |
| **Canvas** | L'unità multimateriale di Elegoo. |
| **IFS** | Il sistema multifilamento di FlashForge — il campo nel suo protocollo si chiama ancora `matlStation`. |
| **MMU** | Multi-Material Unit — il termine generico per il componente aggiuntivo che alimenta più filamenti a una sola stampante (ERCF, MMU2, Box Turtle… nel mondo Klipper). Vedi [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | Il firmware aperto per stampanti e la sua API — il WebSocket di Moonraker è il trasporto che il collegamento di Snapmaker usa già, e il prossimo naturale per le macchine Klipper. Vedi [Klipper](./compatibility/klipper.md). |
| **HID Scale** | Il protocollo USB standard per le bilance (serie DYMO M e compatibili), letto nativamente da Tiger Studio come alternativa di terze parti a una TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — quanta luce lascia passare un filamento, il valore su cui si basano HueForge e la stampa a spettro completo — e l'analizzatore [AJAX-3D](https://ajax-3d.com) che lo misura, nelle varianti fai-da-te (TD-1) e preassemblata (TD1s). Il TD misurato può essere memorizzato nel protocollo TigerTag stesso. Vedi [Hardware di terze parti](./compatibility/third-party-hardware.md). |
| **ESP32** | Il microcontrollore di largo consumo dietro TigerScale e la maggior parte dei lettori TigerTag fai-da-te. |

## Cloud e dati

| Termine | Significato |
|---|---|
| **Firebase / Firestore** | Il semplice servizio Google che ospita account e inventari — un unico database condiviso che tutte le app leggono e scrivono, con i controlli applicati nelle regole di sicurezza lato server. Vedi [Inventario e sincronizzazione cloud](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Il luogo da cui viene servito il database di riferimento condiviso. |
| **Codice amico / link di lista** | I due modi per condividere un inventario — un amico accettato, o un link pubblico in sola lettura che chiunque apre in un browser, senza app e senza account. Vedi [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | Il codice prodotto del produttore e il numero del suo codice a barre — ciò che un TigerData+ porta per dire esattamente a quale prodotto del catalogo corrisponde una bobina. |

---

**▲ [Indice della documentazione](../README.md)** · **Vedi anche:** [FAQ](./faq/README.md), [Il chip TigerTag](./concepts/tigertag-chip.md), [Identità universale del filamento](./concepts/universal-filament-identity.md)
