---
sourceHash: 41cc4260975408514f69a1b2d61294c1a71723db05cddb913c0f599e1dade5b0
sourcePath: docs/vision/why-tigersystem.md
---

# Perché esiste TigerSystem

## Il problema

Una bobina di filamento è l'oggetto più maneggiato della stampa 3D — e il meno
intelligente. Una volta persa l'etichetta, una bobina non sa dirti:

- di che materiale e colore è,
- come va stampata,
- quanto filamento è rimasto,
- dove si trova sul tuo scaffale,
- a chi appartiene.

I produttori di stampanti hanno iniziato a risolvere il problema con tag RFID — **ma ognuno lo
risolve solo dentro le proprie mura.** Un tag Bambu Lab non significa nulla per una
stampante Creality; un tag Anycubic non significa nulla per nessun altro. I dati
appartengono all'ecosistema del produttore, non alla persona che ha comprato il
filamento.

## La risposta

**TigerSystem** è un ecosistema aperto costruito attorno a un'idea:

> **L'identità della bobina appartiene al suo proprietario — non a una marca di stampanti.**

**Abbiamo reso intelligenti le bobine di filamento.** Sanno che cosa sono — e
possono dirlo a tutti, senza alcun attrito. L'ambizione: **diventare per i materiali
della stampa 3D ciò che il codice a barre è diventato per lo scaffale.**

Ogni bobina porta un chip NFC [TigerTag](../products/tigertag.md) con il suo
profilo completo — marca, materiale, colore, diametro, impostazioni di stampa. Qualsiasi lettore
compatibile — uno smartphone, un lettore da scrivania, una stampante — può leggerlo.
Un unico database online condiviso ([semplice Firebase](../concepts/inventory-and-cloud-sync.md))
mantiene sincronizzati account, inventario, cronologia e condivisione del proprietario su ogni
dispositivo.

## Cosa significa «incentrato sull'utente» in pratica

| Ecosistema incentrato sulla stampante | TigerSystem |
|---|---|
| Tag leggibile solo dalle stampanti di una marca | Tag leggibile da qualsiasi dispositivo NFC |
| Formato dei dati segreto o cifrato | Formato aperto e documentato |
| L'inventario vive nell'app del produttore | L'inventario vive nel **tuo** account |
| Funziona solo con il filamento del produttore | Funziona con **qualsiasi** marca di filamento |
| Muore con il cloud del produttore | SDK aperti, specifica aperta, costruibile in proprio |

## La storia dietro la sandbox

Tutto è iniziato nel **2023, subito dopo Formnext**. Bambu Lab aveva aperto l'era dei
tag proprietari per le bobine; quell'anno Creality e Anycubic l'hanno seguita, ciascuna
lanciando stampanti con lettori RFID/NFC — e ciascuna con il proprio chip
proprietario e bloccato. Abbiamo deciso che non poteva essere così che il settore si assestava: doveva
esistere un formato **open source, neutrale, multipiattaforma e
incentrato sull'utente**. E non poteva essere un manifesto — doveva essere un'
**alternativa praticabile e più capace** a ciò che offrono i produttori di stampanti,
consegnata ai produttori di filamento terzi perché le loro bobine potessero fare *di più* di
quelle proprietarie, e la loro quota di mercato non si erodesse di fronte al
filamento vincolato.

Così ci siamo messi al lavoro — e siamo andati in Cina. Abbiamo presentato il progetto ai produttori
di stampanti — Bambu Lab (al Dr. Tao, il suo CEO), Elegoo, Creality, Anycubic,
e Biqu / BigTreeTech (incontrando anche il suo CEO) — e ai
produttori di filamento e ai fornitori di attrezzature (eSun, R3D, Landu, Sunlu, Jamg He),
dopo averlo già presentato a Rosa3D in Europa. L'accoglienza è stata calorosa.
Abbiamo progettato un protocollo **più ottimizzato e più versatile** di
quelli proprietari — incentrato sull'utente, multimarca, multipiattaforma. Abbiamo studiato i
flussi di lavoro delle fabbriche di filamento per capire come programmare i chip NFC su scala
industriale, e abbiamo reperito la produzione dei chip — etichette personalizzate, supporti
personalizzati, volumi enormi — a un costo abbastanza basso per un obiettivo non negoziabile:
**aggiungere la tecnologia senza aggiungere un centesimo al prezzo della bobina per
l'utente finale.**

A **settembre 2024** i chip erano in produzione di massa e le fabbriche
venivano rifornite — l'intero ecosistema lato fabbrica è venuto per primo. A quel punto
non c'era **nessuna app mobile e nessuna app desktop**; sono arrivate
dopo. Prima il mobile, perché non richiede di comprare nulla: il lettore è
già nella tasca di tutti.

Quella scelta nasce da una domanda che continuavamo a fare in Cina: *«Dove sono i
lettori RFID?»* Tutti rispondevano: *«Nelle Bambu Lab.»* E noi dicevamo: falso.
In Bambu Lab i lettori sono **nell'AMS, non nella stampante** — una bobina di
terze parti non può proprio essere rilevata dalla macchina. **I lettori RFID
sono nelle vostre tasche.** In ogni telefono, pronti all'uso — senza che voi lo
sappiate nemmeno.

Onestamente: costruire tutto questo da soli non è mai stato il piano iniziale. **Sono stati
prodotti più di 2,5 milioni di chip NFC TigerTag — il che fa di TigerTag il
protocollo RFID di terze parti più diffuso al mondo** — la maggior parte
integrati in fabbrica da marchi di filamento terzi (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D — con Filforme, Nanovia e altri in corso di
integrazione), più una quota minore
acquistata da maker per taggare le bobine a casa. Pensavamo ingenuamente che la community
avrebbe immaginato gli usi da sola: un'identità NFC aperta e documentata su ogni
bobina sembrava un ovvio terreno di gioco.

Non è successo. Nonostante la portata della diffusione, nessuna community ha raccolto il
tema; nessuno ha ritenuto valesse la pena costruire integrazioni attorno al protocollo.
Speravamo che altri se ne facessero carico — non è successo. Così l'abbiamo fatto noi, anche se
non era il nostro obiettivo originale: abbiamo cominciato a **immaginare noi stessi gli usi**, per mostrare
il potenziale di un **protocollo NFC open source per l'identificazione dei materiali
incentrato sull'utente, non sulla stampante** — e per lasciare esempi funzionanti
a chi finalmente raccoglierà il filo.

E sta cominciando ad accadere:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) legge i TigerTag,
[Spooly Tracker](https://spoolytracker.com/) ha costruito su di essi la propria
identificazione delle bobine, e il
[firmware esteso della community](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
della Snapmaker U1 li legge **in modo nativo sulla stampante stessa** — vedi
[integrazioni di terze parti](../developers/integrations.md).

## Una sandbox, di proposito

Il **lato rivolto all'utente** di TigerSystem è deliberatamente una **sandbox**. Ogni
app e dispositivo che creiamo per gli utenti finali — Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD e altri progetti a venire — non ha altra ambizione che
**mostrare il potenziale**: ognuno è un **proof of concept** funzionante di ciò che un
protocollo **open source, standard, agnostico e multipiattaforma** come TigerTag
rende possibile, da uno script da fine settimana a un prodotto completo. Chiunque può ispirarsi al
nostro lavoro di integrazione e **immaginare le funzioni
di domani**. Sono esempi da copiare, non una piattaforma a cui aderire.

Il **lato fabbrica non è una sandbox.** Dietro i 2,5 milioni di chip gira
una suite di livello industriale — [TigerTag Factory &
Manager](../products/factory-suite.md): gestione del database dei filamenti e
programmazione NFC/RFID di massa alla velocità di linea, con una firma di fabbrica che prova l'origine di ogni
prodotto — usata **in produzione** dalle fabbriche di filamento partner.
La sandbox è lo showroom; la linea di produzione non è un esperimento.

## Neutrale per progetto

TigerTag non prende le parti di nessuno tra marchi di filamento, produttori di stampanti o distributori.
Non è un giardino recintato con una lista di partner — è un **formato che chiunque può leggere
e scrivere**.

Quella neutralità si estende ai chip stessi: la maggior parte degli utenti finali compra **chip
NTAG economici e senza marchio** su Amazon, AliExpress o in negozio — e va deliberatamente
bene così. Nulla li blocca; il protocollo funziona in modo identico.
I chip ufficiali con marchio TigerTag aiutano a sostenere la R&S, ma non sono
obbligatori: **il protocollo che vive nelle case e negli uffici degli utenti è la prima
ricompensa.**

Nemmeno il protocollo stesso è imposto: i chip escono **sbloccati**, così un utente
che preferisce un altro formato NFC/RFID — esistente o personalizzato — può riscrivere il
chip e migrare. TigerTag è il formato di base con cui arrivano le bobine, non un
formato a cui sei vincolato. Nulla nell'ecosistema è un prerequisito: leggi la specifica del chip,
prendi un SDK, e costruisci il software o l'attività che vuoi davvero.

## Il manifesto

> *«Fatto per i Maker. Aperto a tutti. Nato dalla community, TigerTag
> dà agli utenti dati reali e totale libertà. Open source al 100 %,
> collega i tuoi materiali, le tue stampanti e i tuoi marchi in un unico linguaggio universale
> oggi e domani. Unisciti al movimento. Collega il tuo mondo con TigerTag.»*
>
> — **Benoit Michaut**, CEO e fondatore · Visione: **Economico e riutilizzabile**

---

**▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Ecosistema incentrato sull'utente](../philosophy/user-centric-ecosystem.md) · **Le persone dietro il progetto:** [Il team](./team.md)

**Vedi anche:** [Filosofia dell'ecosistema aperto](../philosophy/open-ecosystem.md), [Identità universale del filamento](../concepts/universal-filament-identity.md)
