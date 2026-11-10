---
sourceHash: ba348b03d60cc85812ec315cd808baee450bfd9e1eeef61fe74efb8f74550ab1
sourcePath: docs/concepts/tigertag-chip.md
---

# Il chip TigerTag (formato RFID/NFC)

## Livello fisico

| Proprietà | Valore |
|---|---|
| Famiglia di chip | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Formato consigliato | **Adesivo rotondo da 25 mm** (altre forme funzionano) |
| Payload | Payload NDEF da 144 byte, dimensionato per stare nel piccolo NTAG213; i chip più grandi lasciano spazio inutilizzato |
| Chip ufficiali con marchio | Prodotti come **NTAG215**: la memoria extra massimizza il riutilizzo a fine vita (oggetti NDEF standard) così il chip non diventa mai rifiuto elettronico |
| Autenticazione | Nessuna — leggibile liberamente |
| Blocco in scrittura | **Nessuno** — i chip escono sbloccati; l'utente può riscriverli, compresa la migrazione a un altro protocollo |
| Area riservata | **64 byte** alla fine del payload — pagine `0x18`–`0x27`, che lasciano 80 byte di dati. Su un TigerTag standard sono **liberi per funzioni aggiuntive della community**; su un [TigerTag+](../products/tigertag-plus.md) contengono la **firma di origine**, 32 byte di `R` e 32 di `S` (struttura a livello di byte: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chip per bobina | **Due**, posti su lati opposti |
| Leggibile da | Qualsiasi smartphone NFC, lettori USB di classe ACR122U, [TigerPOD](../products/tigerpod.md) |

È l'opposto deliberato dei tag dei produttori (Mifare Classic con
chiavi derivate, settori AES, firme RSA — vedi
[compatibilità](../compatibility/README.md)): un chip TigerTag non nasconde nulla.

Pensa al chip come a un **archivio a freddo di lungo periodo** dell'identità della bobina: i
dati vivono sul chip stesso, offline, per anni — nessun server, nessun account,
nulla di necessario per tenerli in vita. Il livello online (database di riferimento,
sincronizzazione cloud) *aggiunge* soltanto freschezza in più.

## Perché ogni bobina porta DUE chip

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Una bobina di ricambio di filamento con il suo chip TigerTag rotondo" />

Due chip, su lati opposti della bobina: sembra ridondante, è in realtà il
dettaglio più intelligente del formato:

- **Le stampanti condividono i lettori.** Una macchina ha di solito **un lettore RFID per
 due slot di bobina**, montato **tra i due** — oppure sul lato della
 stampante, dove legge la faccia sinistra o destra a seconda dello slot in cui si trova
 la bobina. Un AMS di Bambu Lab ha 2 lettori per 4 slot; su una Snapmaker
 la bobina sta su un lato o sull'altro della stampante. Con un chip su ogni lato,
 **qualunque sia lo slot, un chip è sempre rivolto al lettore** — e non devi mai
 caricare la bobina in un verso particolare.
- **Niente caccia al chip quando scansioni a mano.** Su un
 [TigerPOD](../products/tigerpod.md) o con il telefono, non devi mai
 capire quale faccia porta il chip: in qualunque verso prendi la bobina,
 uno è già dal lato giusto per ciò che stai facendo.
- **Scansione sul posto.** Una bobina montata su un AMS Lite, sul lato di una Elegoo
 Centauri Carbon o di una FlashForge può essere scansionata senza estrarla.
- **Libertà per gli integratori.** Il costruttore di un essiccatore di filamento mette il lettore dove
 gli fa comodo — a sinistra o a destra per un essiccatore a bobina singola, tra le due bobine per un
 doppio — e funziona sempre.
- **Ridondanza.** Se un chip smette di rispondere, l'altro identifica comunque la
 bobina — e serve a riparare quello rotto.
- **Raccolto doppio.** A fine vita, ogni chilo di filamento stampato
 ti lascia **due chip NTAG riutilizzabili** per progetti fai da te
 ([zero rifiuti elettronici](../philosophy/second-life.md)).

Alcuni dettagli di implementazione:

- I due chip sono **completamente indipendenti: ciascuno ha il proprio UID**; non c'è
 un'antenna condivisa. Vengono **scritti insieme come coppia (Twin Tag)** e mantenuti
 identici per tutta la vita della bobina, fino ai grammi rimasti — e sempre
 contati come **una** bobina.
- Sulle bobine di fabbrica i chip viaggiano su un **supporto**: una striscia le cui due estremità
 si ripiegano sull'anima di cartone (un chip per estremità), fissate con
 **adesivo industriale 3M (468MP / 200MP)** — l'operatore stacca e incolla, nient'altro
 cambia sulla linea. Il disegno del supporto è **pubblico e stampabile
 a casa**, e la stessa forma è venduta separatamente per i
 [ricambi](../philosophy/second-life.md), così il chip viaggia con il
 filamento invece che con il rocchetto.

<img src="../assets/carrier-bare.png" width="440" alt="Il supporto TigerTag nudo: due antenne NFC indipendenti, una a ciascuna estremità" />

*Il supporto, nudo: le due antenne indipendenti sono ben visibili — una
per ogni estremità ripiegata, ciascuna con il proprio UID.*

### Come sono associati i due chip

Nulla di centrale registra la coppia. Viene **dedotta da ciò che i due chip
contengono**, e il campo che la rende deliberata anziché casuale è il
**timestamp**.

I 4 byte alla pagina `0x0C` (offset `+32`) hanno una doppia funzione: secondi
dal 2000-01-01 GMT, *e* il **Twin Tag ID**. Due chip scritti nella stessa
sessione ricevono esattamente lo stesso valore: quel secondo condiviso è la chiave di accoppiamento.

La risoluzione è di un secondo, quindi il timestamp da solo non è una prova: due bobine
taggate nello stesso secondo lo avrebbero identico. Ciò che conferma la coppia è
che anche l'**identità descrittiva coincide**: i due chip descrivono una sola
bobina, quindi ogni campo che descrive quella bobina deve essere identico su entrambi:

| Campo | Pagina | Offset |
|---|---|---|
| Twin Tag ID / timestamp | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

Ciò che discrimina davvero dipende dalla variante:

- Su un **[TigerTag+](../products/tigertag-plus.md)**, `ID Product` è un vero
 id di catalogo. Stesso timestamp **e** stesso id di prodotto bastano per dichiarare
 una coppia con quasi certezza.
- Su un **TigerTag standard**, `ID Product` è la costante `0xFFFFFFFF` su
 ogni chip esistente, quindi non discrimina affatto. A farlo sono invece la marca,
 il materiale, i tre colori e i due aspetti, insieme al timestamp.

Due conseguenze da dire chiaramente:

- **Scrivere i chip in due passaggi separati non produce una coppia.** Ricevono
 due timestamp diversi, quindi nulla li lega e l'ecosistema
 conta due bobine. Per questo l'app per telefono scrive entrambi in un'unica
 sessione *Dual NFC*, e per questo il [TigerPOD](../products/tigerpod.md) ha due
 lettori uno di fronte all'altro.
- **La firma è l'unica cosa che legittimamente differisce.** Su un TigerTag+
 firma `SHA-256(uid ‖ id_tigertag ‖ id_product)`, e ogni chip ha il proprio
 UID: quindi i due chip di una coppia portano due firme *diverse*, per
 costruzione. Firme identiche indicherebbero una copia, non un gemello.

Gli offset qui sopra sono citati dalla
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
canonica (§2.9), che resta la specifica.

### Il supporto per ricambi, in pratica

Due dettagli che sorprendono:

- **Incollarlo è facoltativo.** L'adesivo 3M serve a tenere il supporto
 mentre maneggi e conservi il ricambio. Una volta montato il ricambio
 sulla masterspool, il supporto resta **incastrato tra la masterspool e
 l'anima di cartone** e non può muoversi: la colla non ha più nulla da fare.
- **Ne esce e si può riutilizzare.** Quando il ricambio è finito,
 recupera il supporto con i suoi due chip, cancellali da
 [Tiger NFC Connect](../products/tigertag-connect.md) o
 [Tiger Studio](../products/tiger-studio.md) e riutilizzalo — su un'altra
 bobina, o per qualsiasi altro progetto NDEF. Il filamento venduto con un Refill TigerTag
 ti lascia il supporto, non un rifiuto
 ([seconda vita](../philosophy/second-life.md)).

Dove procurarsene uno: vedi [l'acquisto dei chip](../products/tigertag.md).

## Codificato in fabbrica, o vuoto nelle tue mani

Lo stesso chip ti arriva in due modi, e la differenza conta più di
qualsiasi altra cosa in questa pagina:

| | Da dove viene | Cosa contiene |
|---|---|---|
| **Pre-codificato** | integrato sulla linea di produzione, dentro filamento di una marca partner | l'identità completa della bobina, pronta da leggere |
| **Vuoto** | acquistato a parte — con marchio TigerTag, o qualsiasi chip NTAG di qualsiasi provenienza | ancora nulla; lo scrivi una volta, in circa un minuto |

I chip venduti separatamente escono **vuoti**, con o senza logo. Non è
un limite: un chip non scritto è ciò che rende possibile la
[seconda vita](../philosophy/second-life.md), ed è il motivo per cui il
protocollo non dipende mai dall'acquisto di qualcosa.

## Payload

Il payload da 144 byte codifica l'[identità universale](./universal-filament-identity.md)
della bobina — marca, materiale, aspetto/colore, tipo, diametro, impostazioni di stampa — come ID risolti sul
database di riferimento condiviso.

Il payload occupa le pagine da `0x04` a `0x27`, di 4 byte ciascuna; ogni
valore su più byte è in big-endian:

| Pagine | Byte | Contenuto |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, il tipo di chip: TigerTag, TigerTag+ o TigerTag Init |
| `0x05` | 4 | `ID Product`: un prodotto del catalogo su un TigerTag+, `0xFFFFFFFF` su un TigerTag |
| `0x06`–`0x07` | 8 | materiale, due aspetti, tipo, diametro e marca, come id del database di riferimento |
| `0x08` | 4 | colore 1, con alfa |
| `0x09` | 4 | quantità alla produzione e relativa unità |
| `0x0A`–`0x0B` | 8 | intervalli di temperatura di ugello e piatto, temperatura e durata di essiccazione |
| `0x0C` | 4 | timestamp, che è anche il Twin Tag ID |
| `0x0D`–`0x0E` | 8 | colori 2 e 3, indice e numero di tag, un byte riservato |
| `0x0F` | 4 | TD HueForge, due byte riservati |
| `0x10`–`0x16` | 28 | messaggio libero, UTF-8 |
| `0x17` | 4 | quantità rimanente, aggiornata da Tiger Scale, un byte riservato |
| `0x18`–`0x27` | 64 | la firma (`R` e `S`) su un TigerTag+ Certified; altrimenti libere |

Questa è una mappa, non la specifica. Fa fede la tabella campo per campo del
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format):
indica l'offset esatto di ogni campo e rimanda a ogni tabella di id. Un parser
segue quella tabella.

## Lettura e scrittura

| Strumento | Lettura | Scrittura |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (NFC mobile) | tocca il chip: la bobina si apre sul telefono | tocca **Make** e tocca di nuovo per scrivere; **Dual NFC** scrive i due chip di una bobina in un'unica sessione |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | apre automaticamente la bobina alla scansione | scrittura guidata con verifica dell'UID |
| [SDK JS](../developers/sdks.md) (`tigertag` su npm) | decodifica il payload da 144 byte | codifica un nuovo payload |
| [SDK Python](../developers/sdks.md) | decodifica il payload; `tigertag[verify]` verifica anche la firma | codifica un nuovo payload |

Le due app comunicano con il lettore; gli SDK no. Un SDK decodifica e codifica
il **payload**: l'hardware NFC lo porti tu.

## Versioni

Il payload contiene una versione del formato (tabella di riferimento `id_version`), così i lettori
possono restare compatibili con i chip più vecchi.

---

**◀ Precedente:** [Identità universale del filamento](./universal-filament-identity.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Inventario e sincronizzazione cloud](./inventory-and-cloud-sync.md)

**Vedi anche:** [TigerTag](../products/tigertag.md), [SDK](../developers/sdks.md), [Compatibilità](../compatibility/README.md)
