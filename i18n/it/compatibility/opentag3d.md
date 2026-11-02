---
sourceHash: a2788a5364e611177c9b1b011d762345b26e5a8fd204e75a6b2b8beed634955c
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Che cos'è

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** è uno standard di
tag aperto, guidato dalla community, per le bobine di filamento: un payload NDEF dimensionato
per stare in un NTAG215, senza cifratura, specifica pubblicata, elenco di sostenitori aperto. Come
TigerTag, esiste perché il settore si stava riempiendo di un formato proprietario
per ogni marca di stampanti, ed è esplicito nel dire che un tag deve funzionare **interamente
offline**. Nello spirito è un cugino stretto.

Entrambi gli standard definiscono anche un livello online, ed entrambi lo chiamano **Web API**,
ed è qui che i due progetti divergono, di proposito e in direzioni opposte.

## Due progetti a confronto

| Aspetto | TigerTag | OpenTag3D |
|---|---|---|
| Cosa memorizza il chip per raggiungere il livello online | un **id di prodotto del catalogo** | un **«Online Data URL»** — l'indirizzo stesso |
| Chi risponde | **un solo endpoint, tutte le marche** | un endpoint per tag, ospitato da chi l'ha scritto |
| Ruolo del livello online | il **canale di aggiornamento**: le correzioni raggiungono bobine già spedite | **supplementare per progetto** — la specifica afferma che «will NEVER be relied upon for printer functionality» |
| Documenti normativi | TDS · MSDS · RoHS · REACH · EN71 · contatto alimentare, per prodotto | non previsti nello schema — la Web API contiene foto, prezzo, link al prodotto, stato QA, note |
| Copia dei dati del tag online | sì, il profilo completo | sì, `tag_data` — **facoltativo**, come ogni campo tranne la versione |
| Prova dell'origine | facoltativa — un [TigerTag+ Certified](../products/tigertag-plus.md) è firmato e verificato offline | nessuna, deliberatamente: la specifica rifiuta la cifratura perché «unsuitable for an open source standard» |

## Cosa comporta un id rispetto a un indirizzo

Nessuno dei due approcci è casuale, e ciascuno dà qualcosa.

Memorizzare l'**indirizzo** mantiene il tag autosufficiente: chi lo scrive
decide dove risiedono i suoi dati e non risponde a nessuno. Il costo è che
l'indirizzo è scritto nel chip, entro il budget di byte del payload, e un chip
non può essere ripuntato una volta nelle mani di un cliente: se quell'host si sposta o
smette di rispondere, a rompersi è il link.

Memorizzare un **id** sembra mettere un endpoint condiviso nel percorso, e lo
farebbe se il riferimento fosse nostro da trattenere. Non lo è: l'intero catalogo
è pubblicato come un unico file, [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json), con ogni id di ogni
filamento del database, aggiornato durante la giornata e libero per chiunque di
copiarlo. Un lettore può tenere una propria copia speculare e risolvere gli id senza alcuna rete.

Quindi l'id offre ciò che l'indirizzo non può. Il chip non contiene mai una posizione, così
resta valido qualunque cosa accada a un qualsiasi host; un lettore implementa un solo endpoint e
funziona per filamento che non ha mai visto; un produttore corregge i dati sei
mesi dopo che le bobine hanno lasciato la fabbrica; e la risoluzione stessa può essere
completamente offline, su una copia che chiunque può conservare.

La [firma](../products/tigertag-plus-certified.md) è l'altra
conseguenza. Poiché un TigerTag+ Certified firma l'UID stesso del chip, i dati
possono migliorare online mentre la bobina continua a dimostrare da dove viene: offline,
sul telefono del cliente.

## Interoperabilità

I chip TigerTag non sono **mai bloccati in scrittura**. Se preferisci OpenTag3D, o qualsiasi
altro formato, sei libero di riscrivere un chip di fabbrica in quel formato. È la stessa
posizione che manteniamo per [OpenSpool](./openspool.md), e per lo stesso motivo: la
bobina appartiene a chi l'ha acquistata.

---

**◀ Precedente:** [OpenSpool](./openspool.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Sviluppatori](../developers/README.md)

**Vedi anche:** [La Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
