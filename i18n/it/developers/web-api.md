---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# La Web API

## A cosa serve

Un TigerTag porta tutto ciò che serve a una stampante, **sul chip, offline**. La
Web API esiste per ciò che un chip non può contenere e che cambia dopo la scrittura:
le schede tecniche, i documenti di sicurezza, la foto, il video, le correzioni
del produttore.

È **un solo endpoint HTTP, per ogni filamento, di ogni marca**: nessuna chiave, nessun
account, nessuna registrazione, nessun accordo di limiti da negoziare. Entra un id di prodotto,
torna il prodotto.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

Il parametro `lang` seleziona la lingua dei campi di testo.

## Cosa restituisce

Quattro prodotti reali, di quattro marche diverse, attraverso quell'unico indirizzo:

| `product_id` | Prodotto | Documenti restituiti |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · consigli · video |
| `30` | R3D PLA High Speed | alimentare · MSDS · REACH · RoHS · TDS · video |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · video |
| `50` | eSun PLA+ | alimentare · MSDS · REACH · RoHS · TDS · consigli · video |

Ogni risposta contiene l'identità (marca, serie, nome, SKU, EAN, colore), il
profilo di stampa completo (ugello, piano, essiccatore, ventola, diametro, peso, shore,
distanza di trasmissione), la foto del prodotto e il blocco `links` indicato sopra:
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Perché mantiene aggiornato un TigerTag+

Un [TigerTag+](../products/tigertag-plus.md) memorizza un **id di prodotto del catalogo**,
non un indirizzo. L'id non scade e non si sposta mai, quindi un produttore può
correggere una temperatura o allegare una scheda tecnica sei mesi dopo la spedizione delle bobine,
e ogni lettore vede il nuovo valore alla lettura successiva, senza
riscrivere nulla sul chip e senza che il chip abbia mai dipeso
dalla rete per stampare.

È anche per questo che un unico endpoint conta: un solo indirizzo serve ogni marca, quindi
un lettore lo implementa una volta e funziona per filamento che non ha mai visto.

## Anche offline — l'intero catalogo è un file

Nulla di quanto sopra richiede che l'endpoint sia raggiungibile, o anche solo che esista.

Il riferimento completo è pubblicato come un unico file,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **ogni id di ogni filamento del database**,
aggiornato durante la giornata, circa 12 MB, nessuna chiave e nessun account. Chiunque può
scaricarlo, replicarlo, includerlo in un'app, metterlo su un NAS da officina o
portarlo su una chiavetta USB.

Un lettore che possiede quella copia risolve l'id di un TigerTag+ **senza alcuna rete**.
È ciò che rende l'id più sicuro di un indirizzo: un indirizzo ha bisogno che il suo host
risponda, un riferimento condiviso ha solo bisogno di essere stato copiato una volta — e può essere
copiato ovunque sul pianeta, da chiunque, in qualsiasi momento.

La Web API resta il percorso più fresco, e quello che porta le schede tecniche e
la foto. Il file è il pavimento sotto di essa.

## Cosa non fa mai

La Web API **non può far funzionare un chip**, perché un chip funziona già senza
di essa. Leggi un TigerTag in modalità aereo e ottieni marca, materiale, colore,
diametro, peso e temperature: l'intera stampa. La Web API aggiunge carta e
immagini attorno a questo, e correzioni sopra di esso.

---

**◀ Precedente:** [API dell'account e integrazione di terze parti](./account-api.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Mappa dei repository](./repositories.md)

**Vedi anche:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
