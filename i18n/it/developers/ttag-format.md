---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# Il formato di file `.ttag`

Il **file di scambio di inventario `.ttag`** è un'istantanea portatile e offline di
uno o più materiali dell'inventario. È l'unità per il **backup** dei tuoi
filamenti, per **portarli** su una chiavetta USB e per **condividerli** — tra
account, tra strumenti, o come collezioni già pronte di marche/gamme.

Introdotto in **Tiger Studio Manager v2.14.0** (esportazione + importazione). Il formato
è stabile e valido tra le app: strumenti di terze parti, un futuro playground web che
genera file `.ttag` e collezioni di filamenti preparate si basano tutti su questa
specifica.

## Struttura del file

Un file `.ttag` è un unico documento **JSON UTF-8**:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Campo | Significato |
|---|---|
| `format` / `kind` | Sempre `"tigertag"` / `"ttag"` — la coppia di identificazione verificata all'importazione |
| `version` | Versione del formato; attualmente `1` |
| `exportedAt` | Ora di esportazione, **stringa ISO 8601** (ad es. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | uid del proprietario che esporta — **un suggerimento UX per scegliere la modalità di importazione, SOLO questo, mai un confine di sicurezza** |
| `records[]` | Documenti di inventario, trasportati **alla lettera** |
| `rfidBackups` | *Facoltativo.* Indicizzato per UID del chip; presente solo per le bobine TigerTag+ (certificate): il dump di fabbrica firmato usato per ripristinare il chip |

**I `records[]` sono i documenti di inventario Firestore, alla lettera**: esattamente
`users/{uid}/inventory/{spoolId}` come documentato nel
[modello dei dati canonico](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(usalo come dizionario dei campi). Tre sfumature:

- **I campi sono sparsi**: un campo viene scritto solo quando è presente sul documento:
 `twin_tag_uid` solo sui gemelli, `rfidBackup: true` solo su TigerTag+,
 `id_product` solo quando noto, e così via.
- **I campi URL sono controllati da un potenziale attaccante**: `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` e `url_img*` vengono
 sanificati all'importazione: qualsiasi schema diverso da http(s) viene eliminato.
- **La posizione nel rack viaggia ma non si applica**: `rack`, `rack_id`, `level`,
 `position` possono comparire nel file ma non hanno significato all'importazione (una
 bobina importata non eredita il rack di chi esporta).

### Campi obbligatori e facoltativi

A **livello di file**:

| Campo | Stato |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Obbligatorio**: se manca o non corrisponde, il file viene rifiutato |
| `records[]`, non vuoto | **Obbligatorio**: un file vuoto viene rifiutato |
| `exportedAt`, `exportedBy` | Informativi (`exportedBy` è solo un suggerimento UX) |
| `rfidBackups` | Facoltativo: presente solo quando sono incluse bobine TigerTag+ |

A **livello di record**:

| Categoria | Campi |
|---|---|
| **Obbligatori** | `uid` (`TigerData_<id>` o UID del chip) · **`id_brand`** |
| Identità di base (presenti su ogni record ben formato) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — risolti sul database di riferimento condiviso |
| Capacità | Normalizzata da `measure` + `id_unit`: **`measure_gr` in grammi per i solidi** (ad es. `measure: 1` + kg → `measure_gr: 1000`) e **`measure_ml` in millilitri per i liquidi** (resine). I generatori possono fornire `measure` + `id_unit`; il valore normalizzato è quello canonico memorizzato |
| Facoltativi comuni | campi colore (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, stringhe di visualizzazione (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Condizionali | `twin_tag_uid` (solo gemelli — reciproco all'interno del file) · `tag_index` / `tag_count` (solo record con chip — chip *i* di *n* letto dal byte +39 del chip, protocollo TigerTag v2.2; un nibble ciascuno, `0` = sconosciuto; mai su un record senza chip) · `rfidBackup: true` **più** una voce `rfidBackups` corrispondente (solo TigerTag+) · `id_product` (solo prodotti di catalogo noti) |
| Trasportati ma ignorati all'importazione | `rack`, `rack_id`, `level`, `position` |

Per qualsiasi caso limite non coperto qui, **l'importatore di Tiger Studio è l'
implementazione di riferimento**: i generatori di terze parti dovrebbero puntare a record che un
Studio standard accetta.

Regole incorporate nel formato:

- **Due convenzioni di timestamp, per scelta.** La radice `exportedAt` è una
 **stringa ISO 8601**. I timestamp *dentro* `records[]` (`updatedAt`, e le
 varianti legacy `updated_at` / `last_update`) sono **numeri in epoch-ms**:
 i Timestamp di Firestore vengono convertiti dal serializzatore perché il file
 si serializzi correttamente. Non «correggere» l'uno per farlo coincidere con l'altro: i file in circolazione
 hanno già questa forma.
- **I gemelli sono atomici.** Un materiale gemellato esporta sempre **entrambi** i lati:
 un materiale → due record, collegati da `twin_tag_uid`. Non viene mai
 prodotto un mezzo gemello.
- **Disciplina degli id.** Possono comparire solo id `TigerData_<id>` senza chip; un id
 legacy `CLOUD_<id>` viene rifiutato in fase di esportazione.

### Contenitori (`container_id`, `container_weight`)

`container_id` indica la bobina vuota su cui si trova il filamento.
`container_weight` è il peso di quella bobina vuota, in grammi: la tara che una
bilancia sottrae perché l'inventario mostri il filamento netto.

Gli id sono stringhe di un elenco fisso distribuito con Tiger Studio,
[`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Ogni voce porta il marchio a cui appartiene (`brandId`, lo stesso numero di
`id_brand`) e un peso di catalogo. La maggior parte sono la bobina propria di
un marchio — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — e tre sono generiche, per un marchio la cui
bobina non è ancora nell'elenco:

| `container_id` | Come appare in Tiger Studio | Peso di catalogo |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` non sottrae nulla. È giusto per una ricarica pesata
senza alcuna bobina, e sbagliato in ogni altro caso: una bobina che lo porta
mostra il suo peso lordo, circa 200 g in più del filamento rimasto.

`container_weight` è un'**istantanea** presa quando il contenitore è stato
scelto, non una ricerca. Un record mantiene il suo valore quando l'elenco
cambia, e un account può correggere il peso di un contenitore per le proprie
bobine (salvato in `users/{uid}/containerOverrides/{id}`; l'elenco condiviso
non viene mai modificato).

Un generatore che conosce la bobina vuota scrive entrambi i campi. Uno che non
la conosce li omette invece di indovinare: Tiger Studio imposta allora il
contenitore proprio del marchio, o chiede quando ce ne sono diversi o nessuno.
## Tipo di media

Il tipo di media canonico è **`application/vnd.tigertag.ttag+json`**: conta
quando un `.ttag` viene **servito via http(s)** (il `Content-Type` che deve inviare un playground
web, una CDN o un host di collezioni di marche).
Anche `application/json` è accettato. Un file su disco non porta alcun MIME: viene
identificato dall'estensione `.ttag` e, in modo autorevole, dal suo contenuto:
gli importatori **validano dal contenuto** (`format`/`kind`/`version`), mai solo dall'
intestazione MIME o dall'estensione del file.

## Disponibilità

Esportazione e importazione sono incluse in **Tiger Studio v2.14.0+**. Il formato è progettato
per essere portatile; altre superfici potranno adottarlo nel tempo: oggi Studio è
l'implementazione di riferimento.

## Cosa può trasportare un `.ttag`

Tutti e tre i [livelli di bobina](../concepts/universal-filament-identity.md) si esportano
e si importano:

| Livello | Nel file |
|---|---|
| **TigerData** (completamente digitale, senza chip) | Il record stesso |
| **TigerTag** (un chip scritto) | Il record stesso |
| **TigerTag+** (chip certificato) | Il record **più** il suo dump di fabbrica firmato in `rfidBackups` |

## Esportazione

- **Singola bobina**: dalla cassetta degli strumenti di dettaglio della bobina → un file chiamato
 `brand-material-color.ttag`.
- **Selezione multipla**: seleziona più bobine, pulsante **Esporta** della barra degli strumenti → un
 file chiamato `tigertag-selection-<date>.ttag`.
- L'esportazione è disponibile solo per l'**inventario dell'utente stesso**.

## Importazione — convalida → anteprima → accettazione

L'importatore accetta **più file `.ttag` contemporaneamente**: sfoglia, incolla un
link http(s) o trascina e rilascia in qualsiasi punto della finestra.

1. **Convalida.** Ogni file deve portare la coppia `format`/`kind` e
 `version ≤ 1`. Un file non `.ttag`, una versione più recente o un file vuoto vengono
 rifiutati. Ogni **record** deve poi portare il payload completo del chip — vedi
 *Campi obbligatori* più sotto.
2. **Sanificazione.** Il contenuto del file è input non attendibile: i campi URL non http(s)
 vengono eliminati; i valori di colore, peso e TD sono limitati a intervalli validi.
3. **Anteprima.** Ogni materiale è mostrato in una tabella di anteprima con una
 **casella di inclusione** per materiale.
4. **Accetta** in una di due modalità — suggerita in base a `exportedBy`, liberamente
 modificabile:

|| **Ripristina** | **Importa** |
|---|---|---|
| Intento | Stesso account / un vero ripristino | Adottare i materiali di qualcun altro |
| Id dei record | Mantenuti: scritti **alla lettera** sotto gli id originali | Id **nuovi**: ogni record diventa una nuova bobina `TigerData_` senza chip di proprietà di chi importa |
| Stato del chip | Mantenuto: ogni backup `rfidList` viene ripristinato | Eliminato — la copia è senza chip: `id_tigertag` rimosso, `rfidBackup:false`, backup scartati (un dump firmato è legato a un chip che chi importa non possiede) |
| Prodotto | Mantenuto | **Mantenuto** quando `id_product` è un vero id del catalogo (non `0`, non `0xFFFFFFFF`), così un TigerData+ resta un TigerData+ e un TigerTag+ arriva come il TigerData+ dello stesso prodotto; qualsiasi altro valore è impostato a `0xFFFFFFFF` (non impostato). Prima di Tiger Studio v2.51.1 era sempre non impostato, quindi un TigerData+ arrivava come un semplice TigerData |
| Peso | Come registrato | Reimpostato alla capacità piena |
| Gemelli | Come registrato | `twin_tag_uid` rimappato tramite i nuovi id |

### Campi obbligatori — un record deve poter produrre un chip

Un `.ttag` esiste per **creare chip TigerTag / TigerTag+**. Un record che non può
produrne uno non è un record parziale, è un record inutilizzabile — quindi, dalla versione
**2.15.0** di Tiger Studio, l'importatore lo rifiuta del tutto anziché importare una bobina
che sembra a posto ed è silenziosamente sbagliata.

Un record è accettato solo se porta **`uid` più questi 24 campi numerici**,
ciascuno presente e finito (`null` e `""` **non** contano come presenti — attenzione,
`Number(null)` è `0`):

| Gruppo | Campi |
|---|---|
| Id di identità | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Quantità | `measure` |
| Colore | `color_r`, `color_g`, `color_b`, `color_a` |
| Payload per tipo | `data1` … `data7` |
| Marca temporale | `timestamp` |

Più **`id_tigertag`, ma solo se il record ha un chip.** Quel campo indica la versione del
chip in `id_version.json`, dove sono legittimi esattamente quattro valori: `0`
RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init, `3155151767`
TigerTag+. Un record senza chip (`uid` che inizia con `TigerData_` o il legacy `CLOUD_`)
non ha chip e quindi nemmeno versione, perciò **non deve portare affatto il campo**;
viene scritto per la prima volta quando si programma un vero chip. Non inventare mai un
valore per esso, e non risolverne mai uno senza verificare che il record abbia un chip.

Tutto il resto di un record — nomi, immagini, prezzo, note, posizione nel rack — è
**arricchimento**: utile da portare, mai obbligatorio.

**Un materiale è atomico.** Una coppia di gemelli passa solo se passano *entrambi* i suoi record; un
gemello a metà valido viene rifiutato per intero, perché importare un lato di una coppia
creerebbe una bobina il cui partner non può mai essere scritto.

**I rifiuti vengono contati e mostrati, mai silenziosi.** L'anteprima riporta quanti
materiali sono stati respinti, così un'esportazione errata è visibile invece di perdere silenziosamente
metà del contenuto. Chi scrive file `.ttag` dovrebbe validarli rispetto a questo elenco
prima di consegnare un file agli utenti.

## Esempio completo

Un'esportazione a selezione multipla fedele e anonimizzata: un TigerData, una coppia di gemelli
(`twin_tag_uid` reciproco), un TigerTag+ il cui contenuto del chip è salvato in backup:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Lettura dell'esempio: il primo record è senza chip (un id `TigerData_`); i
due successivi sono una coppia di gemelli — stesso materiale, `twin_tag_uid` reciproco, sempre
esportati insieme; l'ultimo è un TigerTag+ (`rfidBackup: true`) il cui dump di
fabbrica firmato si trova in `rfidBackups` sotto l'UID del suo chip.

## Modello di sicurezza / fiducia

Un file `.ttag` è un **input non attendibile**. Ogni record viene sanificato all'importazione
(vedi sopra). `exportedBy` preseleziona soltanto la modalità nell'interfaccia: il vero
confine di autorizzazione sono le **Firestore Security Rules**. Non trattare mai il contenuto
del file come autorevole per identità o proprietà.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Identità universale del filamento](../concepts/universal-filament-identity.md), [Inventario e sincronizzazione cloud](../concepts/inventory-and-cloud-sync.md), [Panoramica per sviluppatori](./README.md)
