---
sourceHash: 330b407d27d694c4ba885a1b36d46f3b1470147007651a81ecce2d19fc5f827b
sourcePath: docs/faq/README.md
---

# FAQ

## Generale

**Che cos'è TigerSystem?**
Un ecosistema aperto per la stampa 3D costruito attorno a un'unica idea: l'identità
di una bobina di filamento appartiene al suo proprietario, non a una marca di stampanti. Vedi
[Perché esiste TigerSystem](../vision/why-tigersystem.md).

**Devo comprare qualcosa per iniziare?**
No, nemmeno un chip. Le app sono gratuite, qualsiasi smartphone NFC fa da lettore e
una bobina **TigerData** porta l'identità completa senza incollare nulla su nulla.
I chip sono la comodità, mai il prerequisito:
[inizia a costo zero](../guides/start-for-free.md).

**È legato a una marca di filamento o di stampanti?**
No: la neutralità è una regola di progetto. Qualsiasi filamento, qualsiasi stampante, nessun elenco di partner.

**Queste app SONO il prodotto?**
No: il lato **rivolto all'utente** è volutamente una **sandbox**. Ogni app e
dispositivo che creiamo per gli utenti finali (Tiger Studio, Tiger NFC Connect, TigerScale,
TigerPOD e i progetti a venire) è una **prova di concetto** funzionante: il suo unico
scopo è mostrare il potenziale di un protocollo open source, standard, agnostico e
multipiattaforma, e ispirare altri a immaginare le funzioni di
domani. Usale, forkale, oppure costruisci le tue. Il **lato di fabbrica**,
invece, è di livello produttivo: una catena di strumenti industriale
programma i chip alla velocità di linea nelle fabbriche partner — quella parte non è
un esperimento. Vedi [Una sandbox, di proposito](../vision/why-tigersystem.md).

**Perché costruite voi stessi tutti questi dimostratori?**
Perché nessun altro l'ha fatto. Sono stati prodotti oltre 2,5 milioni di chip TigerTag
che escono nelle bobine di filamento, e avevamo ipotizzato che la community
avrebbe inventato da sola degli usi per un'identità NFC aperta — non è successo. Costruire i
dimostratori non è mai stato l'obiettivo iniziale; è diventato necessario per mostrare ciò che
il protocollo rende possibile. La storia completa:
[La storia dietro la sandbox](../vision/why-tigersystem.md).

## TigerTag (chip)

**Che chip è un TigerTag?**
Un chip NFC NTAG standard che porta un payload aperto da 144 byte: marca, materiale,
colore, diametro, impostazioni di stampa. Nessuna chiave, nessuna cifratura sui dati.
Vedi [Il chip TigerTag](../concepts/tigertag-chip.md).

**Posso riscrivere un chip?**
Sì: i chip sono riscrivibili, ed è il senso del
[flusso di lavoro Seconda vita](../philosophy/second-life.md): ricarica o riutilizza una
bobina e ricodifica il suo chip.

**Che cos'è TigerTag+?**
Un TigerTag che sa esattamente *di quale prodotto* si tratta. Invece di valori digitati
da qualcuno, porta un **ID di prodotto del catalogo ufficiale**: marca, colore,
materiale, temperature, diametro, SKU, EAN — più metadati di arricchimento facoltativi
che possono migliorare dopo la scrittura del chip. Il chip resta **100 % offline**:
tutto ciò che serve per stampare è ancora su di esso. Il `+` significa *identificato*, non
*certificato*.

**E TigerTag+ Certified?**
Un TigerTag+ che porta anche una **firma** crittografica, scritta da un
produttore che detiene la certificazione e i relativi strumenti di firma. Chiunque può
**verificare** una firma — gratuitamente, offline, sul proprio telefono — ma solo un
produttore certificato può **emetterne** una, quindi un tag clonato non supera il controllo. Vedi
[TigerTag+](../products/tigertag-plus.md).

**Posso salvare in backup un chip nel mio account?**
Sì, ed è una funzione separata dal `+`. Tiger Studio può salvare l'esatto contenuto di un chip,
associato al suo UID fisico, e riprogrammarlo in seguito — utile
se un chip viene riscritto o danneggiato, e valido **solo sul chip originale**.
Avere un backup non rende un chip un TigerTag+.

**Dove compro i chip?**
Due risposte ugualmente valide. I chip ufficiali con marchio TigerTag sono su
**[tigertag.io](https://tigertag.io)** e presso i distributori ufficiali
(attualmente [Atome3D](https://atome3d.com), altri se ne aggiungeranno presto): acquistarli
aiuta a sostenere la R&S. Ma **qualsiasi chip NTAG economico e vuoto** di Amazon,
AliExpress o del negozio sotto casa funziona allo stesso modo, ed è voluto:
nulla è bloccato, il protocollo è il punto.

**I chip che compro arrivano con dei dati?**
No: **i chip venduti da soli arrivano vuoti**, che portino il logo
TigerTag o meno. L'identità del filamento la scrivi tu, in
[Tiger NFC Connect](../products/tigertag-connect.md) o
[Tiger Studio](../products/tiger-studio.md); la prima volta ci vuole circa un minuto.
I chip che arrivano **già codificati** sono quelli integrati
in fabbrica, dentro il filamento delle marche partner. Comprare un chip e
comprare filamento taggato sono due cose diverse.

**Quale forma devo comprare: adesivo o supporto per ricambi?**
Due formati, per due situazioni. L'**adesivo singolo** si applica a qualsiasi
bobina che già possiedi. La **versione per ricambi** è pensata per i
[ricambi](../philosophy/second-life.md) senza rocchetto: si incolla dentro l'**anima di
cartone** prima di montare il ricambio su una masterspool riutilizzabile, così il chip
viaggia con il filamento anziché con il rocchetto — lo stesso posto in cui
lo mette la fabbrica.

**Quale chip vuoto devo comprare esattamente?**
**NTAG213, 215 o 216 — rotondo, 25 mm** è la raccomandazione. Il protocollo è
volutamente ottimizzato per stare nel piccolo NTAG213 (144 byte); 215/216 funzionano
allo stesso modo con spazio inutilizzato in più. Funzionano anche altre forme, ma il 25 mm
rotondo è il formato attorno a cui sono progettati i lettori e i supporti dell'ecosistema.

**Quali marche di filamento escono con TigerTag dalla fabbrica?**
Sono stati prodotti oltre 2,5 milioni di chip, il che rende TigerTag **il protocollo RFID di terze parti
più diffuso al mondo**; la maggior parte è integrata in
fabbrica da marche di filamento terze — Rosa3D, eSun, Sunlu, Landu,
Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — e altre in fase di
integrazione.

**Come si mette un chip su una bobina?**
Si incolla — e ce ne sono **due per bobina, su lati opposti**. È voluto:
le stampanti spesso condividono un lettore RFID tra due slot, quindi un chip
deve essere rivolto al lettore da qualsiasi lato sia la bobina; puoi scansionare a mano
senza girare la bobina; puoi scansionarla senza estrarla dal
suo slot; e se un chip si guasta l'altro risponde ancora. Bonus: ogni bobina vuota
ti dà due chip riutilizzabili.
Vedi [perché due chip](../concepts/tigertag-chip.md).

**Mi serve internet per leggere un chip?**
No. Il payload del chip è completo e autosufficiente: telefono in modalità aereo,
desktop offline — la bobina si presenta comunque da sola.

**Preferirei usare un altro protocollo NFC (OpenSpool, il mio…): sono legato a
TigerTag?**
No. I chip **non sono mai bloccati in scrittura**: TigerTag è solo il protocollo di base
con cui le bobine escono dalla fabbrica. Sei libero di riscrivere il chip e
migrare i suoi dati a qualsiasi altro protocollo NFC/RFID, personalizzato o esistente.

**Che fine fa il chip quando la bobina è vuota?**
Ha una seconda vita, mai una discarica. Ricodificalo per la bobina successiva, oppure
convertilo in NDEF standard e trasformalo in qualsiasi cosa NFC: un portachiavi, un
biglietto da visita, un oggetto connesso. I chip ufficiali con marchio sono passati a
**NTAG215** proprio per lasciare margine di memoria a quel riutilizzo: il chip di una bobina
non deve mai diventare rifiuto elettronico. Vedi
[Seconda vita](../philosophy/second-life.md).

**Il chip sopravvive a una camera riscaldata o a un essiccatore di filamento?**
Nell'uso normale non sono stati segnalati guasti di chip sul campo, anche
da utenti che usano essiccatori di filamento. Due cose giocano a favore del chip: non
lo leggi mai a caldo (le scansioni avvengono a temperatura ambiente, non
durante la stampa dentro una camera), ed è hardware NTAG standard: per le
temperature nominali formali, consulta le schede tecniche NXP di NTAG213/215/216.

**Che cos'è un file `.ttag`?**
Un'istantanea portatile e offline di una o più delle tue bobine: l'unità per
il backup, per portare i filamenti su una chiavetta USB e per condividerli. Esporta una
bobina o un'intera selezione da Tiger Studio; importa con un'anteprima completa e
la scelta tra *Ripristina* (stesso account) e *Importa* (adotta come bobine
nuove). Specifica completa: [il formato `.ttag`](../developers/ttag-format.md).

**Posso usare TigerSystem senza alcun chip?**
Sì: è **TigerData**, gli stessi dati del protocollo in forma puramente digitale, senza
chip e senza UID. L'identità vive nel tuo inventario (o ovunque sia digitale) e
si comporta come qualsiasi altra bobina. Scrivila in un chip NFC più tardi, in modo atomico,
quando sei pronto, e diventa un TigerTag, con un UID fisico finalmente
associato. Vedi
[Un'identità, tre stati](../concepts/universal-filament-identity.md).

## Tiger Studio (desktop)

**Quali piattaforme?**
Windows, macOS e Linux (Electron). Download nella
[pagina delle release](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Mi serve un lettore NFC?**
No: l'app funziona in autonomia. Un lettore ACR122U (o un supporto
[TigerPOD](../products/tigerpod.md)) aggiunge l'identificazione istantanea delle bobine
e la codifica dei chip.

**Quali stampanti può controllare?**
Sei marche attive: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker —
vedi la [matrice di compatibilità](../compatibility/README.md).

## Slicer e flusso di stampa

**Devo cambiare slicer?**
No. Tieni OrcaSlicer, lo slicer del tuo produttore, quello che preferisci: TigerSystem
non esegue lo slicing e non vuole farlo. Esegui lo slicing e avvii i lavori esattamente come
prima. Vedi [dove si colloca lo slicer](../architecture/data-flow.md).

**Allora che cosa aggiunge TigerSystem alla stampa?**
Due cose. Primo, le informazioni sul filamento lato macchina corrispondono alla realtà: Tiger
Studio invia i dati di ciascuna bobina agli slot della stampante (AMS, CFS, Canvas, ACE,
IFS). Secondo, il monitoraggio in tempo reale: qualunque cosa abbia avviato la stampa, il
lavoro compare in Tiger Studio con avanzamento, temperature, un'ora di fine
«termina alle» dell'orologio e la telecamera — su tutta la tua flotta, con tutte le marche mescolate.

**Il chip può configurare automaticamente il profilo del mio slicer?**
Non oggi. Il chip porta le impostazioni consigliate del filamento
(temperature…); le riporti tu nel profilo del tuo slicer.

**Ho stampanti di tre marche diverse. Problema?**
Al contrario: è il punto. Una sola tabella delle stampanti per tutta la flotta, con
filtri per marca / stato / tag, qualunque sia la combinazione delle sei marche supportate.

## TigerHub (la casa web dell'ecosistema)

**Che cos'è TigerHub?**
La piattaforma web su [tigersystem.io](https://tigersystem.io). Presenta
l'ecosistema TigerSystem — la vetrina di ciò che il protocollo aperto rende possibile —
e ospita il lato sociale della sandbox, tutto attivo oggi: il tuo account sul
web, liste dei desideri (pubbliche e riservate agli amici), codici amico e inviti,
condivisione pubblica di elenchi, più il catalogo dei materiali, il navigatore del database di riferimento,
modelli 3D e altro. Vedi [TigerHub](../products/tigerhub.md).

**Posso mostrare la mia collezione a qualcuno senza un'app?**
Sì: TigerHub fornisce link a elenchi in sola lettura; chiunque abbia il link li vede in un
normale browser, senza app e senza account.

**TigerHub è il database dietro le app?**
No. Gli account e i dati risiedono in **Firebase** semplice — un solo database condiviso, in
un solo posto, così tutti gli elementi della sandbox interoperano. TigerHub è la
superficie web costruita sopra di esso.

## Tiger NFC Connect (mobile)

**Che cosa fa l'app mobile?**
Scansione NFC e programmazione dei chip in movimento, consultazione del catalogo e sincronizzazione
completa dell'inventario con lo stesso account dell'app desktop.

**Dove la scarico?**
È pubblicata su **App Store** e **Google Play** come **Tiger NFC
Connect** (in precedenza «TigerTag RFID Connect»), con beta pubbliche su entrambe le
piattaforme. Tutti i link:
[tigersystem.io/download](https://tigersystem.io/download).

## TigerScale e sensori

**Che cos'è TigerScale?**
Una bilancia ESP32 open source per bobine di filamento. Ci appoggi una bobina e il suo peso
in tempo reale confluisce direttamente nel tuo inventario — visibile all'istante su desktop,
mobile e nelle viste condivise. Vedi [TigerScale](../products/tigerscale.md).

**Un momento: il chip sa già tutto, perché una bilancia?**
Il chip sa che cosa il filamento **è**; solo una bilancia sa quanto ne **resta**.
Sono le due metà di un inventario davvero utile: l'identità dal
chip, la quantità in tempo reale dalla bilancia.

**Mi serve una TigerScale per tracciare il peso?**
No. Puoi impostare o regolare il peso di una bobina manualmente nelle app in qualsiasi momento:
la bilancia lo rende solo automatico, in tempo reale e senza sforzo. Tiger Studio legge anche
i dispositivi USB standard **«HID Scale»** — la serie DYMO M (M5, M10,
M25…) e qualsiasi bilancia conforme — come opzione di terze parti
([dettagli](../products/tigerscale.md)).

**Posso costruirne una da solo?**
Sì: è il punto. Il progetto hardware e il firmware sono completamente aperti (MIT) nel
[repository Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**E il peso della bobina vuota?**
La calibrazione dei contenitori di Tiger Studio ti permette di misurare una volta il vero peso a vuoto
di un contenitore; viene poi applicato a ogni bobina di quel contenitore, così il numero
che vedi è filamento netto, non rocchetto di plastica.

**Che cos'è il TD-1 / TD1s?**
Un analizzatore di filamento di terze parti di **[AJAX-3D](https://ajax-3d.com)**, in due
varianti che funzionano entrambe con l'ecosistema: **TD-1** (la versione fai da te: costruiscila
tu) e **TD1s** (preassemblata, pronta all'uso). Il suo
compito principale è misurare la **Transmission Distance** del filamento («TD» — quanta
luce lascia passare il materiale), il valore di cui chi stampa con HueForge / Full Spectrum
non può fare a meno; legge anche il **colore** (RGB, 1–3
slot) — un po' meno preciso, ma una buona indicazione. Tiger Studio
lo integra in modo nativo via USB, e **Tiger NFC Connect lo supporta via
USB-C** su mobile. Il TD misurato può essere **memorizzato nel protocollo TigerTag
stesso** — sul chip NFC, o nel formato di file `.ttag`. Un accessorio di terze parti
e l'ecosistema aperto che lavorano insieme, come previsto.

## Cloud e inventario

**Dove è memorizzato il mio inventario?**
Nel tuo account TigerSystem — Firebase semplice (Firestore), un solo database
condiviso usato da tutte le app. Ogni dispositivo su cui accedi
vede gli stessi dati in tempo reale. Vedi
[Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md).

**Funziona offline?**
I chip sono completamente leggibili offline; le app mantengono una cache locale. I collegamenti alle stampanti sono
locali sulla LAN e non richiedono affatto internet (eccetto la modalità cloud di Anycubic).

**Non voglio ALCUN cloud. Posso comunque usare TigerTag?**
Sì, al 100 %. Il payload del chip è completo e autosufficiente: leggilo,
scrivilo e gestisci un inventario interamente locale senza cloud, senza account, senza
server — gli [SDK JS e Python](../developers/sdks.md) esistono proprio per
renderlo facile nei tuoi progetti o in quelli fai da te. Persino **TigerTag+ si autentica
in locale, senza connessione a internet**. Il livello cloud è una comodità
opzionale (sincronizzazione multi-dispositivo, condivisione), mai un requisito — proponiamo una
visione dell'utente TigerTag, e ogni altra visione è accettata e
incoraggiata.

**Non so nulla di NFC o RFID: è per me?**
Soprattutto per te. L'intera esperienza è pensata prima di tutto per chi inizia: tocca una
bobina con il telefono, si presenta da sola, fatto. Nessun gergo richiesto: i
livelli tecnici esistono per chi vuole scavare, non come prerequisito.

**Altre persone possono vedere le mie bobine?**
Solo se lo scegli tu: amici accettati, un interruttore pubblico o un link di condivisione di TigerHub.
Tutto è privato per impostazione predefinita e applicato lato server.

**Che succede se un giorno il cloud TigerTag chiude?**
La risposta di progetto a questo timore è l'apertura: il formato del chip è pubblico, i chip
si leggono completamente offline per sempre, gli SDK e l'app desktop sono open source, e
la superficie cloud è documentata. Le tue bobine non possono essere «brickate» da un server —
è proprio questa la differenza con il silo di un produttore.

## RFID e compatibilità

**Tiger Studio può leggere i tag nativi di Bambu/Creality/…?**
Non ancora: il modo giusto di gestire l'interoperabilità è ancora una questione aperta.
Le specifiche di decodifica in sola lettura sono documentate per sette formati di produttori, e il
lavoro in corso punta a **convertire i dati dei tag dei produttori in bobine digitali
TigerData**, così il filamento di altre marche può essere scansionato e gestito nell'
ecosistema. Vedi la [compatibilità](../compatibility/README.md).

**Perché i tag dei produttori sono bloccati e TigerTag no?**
I tag bloccati servono al vendor lock-in. La risposta di TigerTag è un formato leggibile
liberamente — vedi [Incentrato sull'utente vs incentrato sulla stampante](../philosophy/user-centric-ecosystem.md).

**E le stampanti a resina?**
In arrivo: TigerTag viene esteso alle **resine** — la stessa identità aperta sui
contenitori di resina per le stampanti 3D a resina.

**TigerTag funziona con una stampante senza lettore RFID?**
Sì: è il [ponte smartphone](../philosophy/smartphone-bridge.md): il tuo
telefono (o un lettore desktop) identifica la bobina e il sistema invia i dati
alla stampante.

## Risoluzione dei problemi

**Il mio chip non si scansiona con il telefono.**
Controlla che l'NFC sia attivo e trova il punto ideale dell'antenna del tuo telefono; i tag si leggono meglio
appoggiati in piano. Se il chip si legge in un'app ma non in un'altra, aggiorna l'app.

**La mia stampante non compare in Tiger Studio.**
Assicurati che la stampante sia sulla stessa LAN, in modalità LAN dove serve, poi prova
«Aggiungi tramite IP»: i metodi di rilevamento variano a seconda della marca.

> Casi reali benvenuti: segnala il tuo sul
> [Discord ufficiale](https://discord.gg/3Qv5TSqnJH) o nelle issue di GitHub; questa
> sezione cresce da essi.

## Sviluppatori

**Qualcuno ha davvero costruito qualcosa su TigerTag?**
Sì, e indipendentemente da noi:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (toolkit RFID
multi-produttore della community) legge i TigerTag;
[Spooly Tracker](https://spoolytracker.com/) (piattaforma di inventario, web +
mobile) identifica le bobine con i TigerTag; e il
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
rende la U1 **la prima stampante che legge nativamente i TigerTag**, e
[COSMOS](https://github.com/OpenCentauri/cosmos) fa lo stesso sulla Elegoo Centauri Carbon, con
il lettore NFC integrato nel suo Canvas. Vedi
[le integrazioni di terze parti](../developers/integrations.md).

**Posso costruire una mia app su TigerTag?**
Sì, senza permesso: specifica aperta del chip, [SDK](../developers/sdks.md) (JS e
Python) e una [superficie dell'account documentata](../developers/account-api.md) con
esempi funzionanti per ESP32 / Home Assistant / Spoolman.

**Posso collegare TigerTag al mio ERP o al software di magazzino interno?**
Sì: è esattamente il tipo di uso che il protocollo aperto invita a fare. Una scansione (telefono
NFC o lettore USB ACR122U) ti dà l'identità della bobina; ciò che ne fai
— gestione delle scorte, tracciamento dei lavori, tracciabilità, riordino, R&S — spetta a te. Vedi [Cosa puoi costruire?](../developers/README.md)

**Di quale hardware ho bisogno per leggere i chip nel mio progetto?**
Qualsiasi smartphone NFC, un lettore USB di classe ACR122U su un computer — oppure vai sul
fai da te: un semplice ESP32 con un modulo lettore PN532 o RC522 basta (è così che lo fa
[TigerScale](../products/tigerscale.md)). Hardware comune, economico, nessuna
attrezzatura proprietaria.

**La configurazione Firebase pubblica è una falla di sicurezza?**
No: è lo schema standard di Firebase. Tutta l'applicazione delle regole è lato server nelle
regole di sicurezza; un client può toccare solo i dati del proprio utente.

## Produttori

**Siamo una marca di filamento: come spediamo bobine taggate TigerTag?**
In fretta: una linea di produzione può essere operativa con TigerTag in **appena
5 giorni**, a costo molto basso, con ogni chip scritto in **circa
1 secondo** — dimostrato da oltre 2,5 milioni di chip già spediti da
Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree e Smart3DPT. E ogni marca che si unisce rafforza le ragioni collettive
perché i produttori di stampanti leggano TigerTag in modo nativo. Leggi
[Per i produttori di filamento](../vision/for-filament-manufacturers.md), poi
scrivi a **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**Il mio prodotto può diventare «TigerTag Certified»?**
Dipende da quale lato di una linea si trova — e la maggior parte dei prodotti sta dal
lato gratuito.

Se il tuo prodotto **dialoga con** i chip TigerTag — un lettore, un'app, una stampante, uno
slicer, un essiccatore, uno strumento — è **TigerTag Compatible**. Quel livello è gratuito,
autodichiarato e non richiede audit né permessi: costruiscilo, dì *«compatibile
con TigerTag»* (o *«con TigerTag+»* se verifichi le firme) e mostra il
logo nella tua interfaccia, nella tua documentazione e nella tua scheda di negozio. La maggior parte dei
prodotti di terze parti rientra qui, e nulla del protocollo viene
negato.

**TigerTag Certified** è l'altro livello, ed è aperto a **qualsiasi cosa costruisca una terza
parte** — un dispositivo, un'applicazione, filamento, un inlay, un supporto — che
**superi un audit** rispetto ai requisiti. Si ottiene, non si rivendica:
autorizzazione scritta, inserimento nel registro dei certificati e diritto di
apporre il marchio **sul prodotto, sul chip e sulla confezione**. Esiste in due
ambiti, **TigerTag Certified** e **TigerTag+ Certified**, il secondo riferito ai
prodotti la cui gestione dei tag firmati è stata verificata.

La differenza tra i livelli non è ciò che il tuo prodotto *è* — è se
qualcuno l'ha verificato. Compatible dice *«funziona»*, sulla tua parola. Certified dice
*«lo abbiamo testato»*, sulla nostra, e può essere revocato. Criteri completi:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Contattaci tramite l'
[organizzazione GitHub](https://github.com/TigerTag-Project).

**Siamo un produttore di stampanti: il nostro firmware può leggere TigerTag?**
Sì: i lettori NTAG/NDEF sono hardware comune, la specifica del payload è pubblica
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)),
e aggiungere la lettura di TigerTag a un firmware richiede **meno di 3 giorni**.

## Community

**Dove faccio domande o chiedo aiuto?**
Il **[Discord](https://discord.gg/3Qv5TSqnJH)** ufficiale: domande, aiuto,
feedback, show-and-tell. Per bug e problemi tecnici funzionano anche le issue GitHub
di ogni repository.

**Come contribuisco?**
Documentazione: [CONTRIBUTING.md](../../CONTRIBUTING.md) qui. Codice: la guida propria di ogni
repository — vedi la [mappa dei repository](../developers/repositories.md).

**È tutto gratuito: come sostengo il progetto?**
Compra i chip ufficiali o il kit TigerPOD quando dovevi comprare comunque; indossa
il [cappellino o la polo](https://tigersystem.io/goodies); correggi una pagina, traducine
una, costruisci qualcosa di compatibile; e chiedi alla tua marca di filamento perché le sue bobine
non sono taggate: quest'ultima cosa ha fatto più di tutte le altre. L'elenco completo,
compreso ciò che puoi tranquillamente ignorare, è in
[Sostieni il progetto](../support.md).

**Posso forkare tutto e costruire qualcos'altro?**
Sì. Licenze MIT/CC, volutamente forkabili — rispetta solo la
[policy sul marchio](../../TRADEMARK.md).

---

**◀ Precedente:** [API dell'account](../developers/account-api.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Roadmap](../roadmap/README.md)
