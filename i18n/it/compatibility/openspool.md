---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Che cos'è

**OpenSpool** è uno standard di tag aperto, nato dalla community: i dati del filamento come **JSON NDEF**
su tag NFC Type 2 — nessuna autenticazione, nessuna crittografia, completamente aperto. Nello spirito è
un parente stretto di TigerTag.

## TigerTag e OpenSpool a confronto

| Aspetto | TigerTag | OpenSpool |
|---|---|---|
| Supporto | NTAG, payload NDEF da 144 byte | NFC Type 2, JSON NDEF |
| Modello dei dati | ID compatti risolti rispetto a un database di riferimento condiviso | JSON autodescrittivo |
| Cloud | Account facoltativo, inventario, condivisione ([account TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Nessuno (standard solo tag) |
| Autenticità | Facoltativa — un [TigerTag+](../products/tigertag-plus.md) firmato da un produttore certificato è un **TigerTag+ Certified**, verificabile offline | Nessuna |
| Apertura | Specifica aperta + SDK | Specifica aperta |

## Migrare un chip da TigerTag a OpenSpool

I chip TigerTag **non sono mai bloccati in scrittura** — TigerTag è solo il protocollo
di base con cui le bobine vengono fornite. Se preferisci OpenSpool (o qualsiasi formato
personalizzato), sei libero di riscrivere i dati di un chip di fabbrica in quel formato.

## Interoperabilità — specifica documentata, conversione in TigerData in arrivo

Una scheda di decodifica in sola lettura dei tag OpenSpool è mantenuta in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
nell'ambito della lettura RFID multi-produttore pianificata in Tiger Studio.

### Corrispondenza di importazione: OpenSpool → TigerData

Questa è la corrispondenza che applicherà il lettore OpenSpool di Tiger Studio.
Leggere un tag OpenSpool crea un **TigerData**: un record senza chip, con un
nuovo `TigerData_<id>`. Il chip OpenSpool non è un chip TigerTag, e un tag
OpenSpool non indica alcun prodotto del catalogo, quindi il record non è mai un
TigerData+. Scritto più tardi su un chip TigerTag, diventa un TigerTag, come
qualsiasi TigerData.

Un tag è OpenSpool solo se il suo JSON contiene `"protocol": "openspool"`. I
suoi campi vengono quindi risolti con le [tabelle di riferimento](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Regola |
|---|---|---|
| `brand` | `id_brand` | cercata per nome in `id_brand.json`, senza distinguere maiuscole; assente o sconosciuta → `Generic` (65535) |
| `type`, `subtype` | `id_material` | cercato in `id_material.json`, senza distinguere maiuscole, in quest'ordine: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), poi `type` da solo. `NYLON` si legge `PA` (59328). Un tipo assente o sconosciuto viene chiesto |
| `subtype`, se il materiale non l'ha usato | `id_aspect1` | l'aspetto con quel nome in `id_aspect.json` (`Matte` si legge `Matt`, 247), altrimenti `Basic` (104); un sottotipo che non corrisponde a nulla resta nel `message` del record |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | copiati; OpenSpool porta un solo colore |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; assente → 1,75, il valore predefinito di OpenSpool; qualsiasi altro valore viene chiesto |
| `weight` | `measure`, `id_measure_unit` | in grammi, unità `g` (21); assente → 1000, il valore predefinito di OpenSpool. La bobina parte piena: `weight_available` = `weight` |
| `min_temp`, `max_temp` | ugello min. e max. (`data2`, `data3`) | copiati; se entrambi valgono `0` (assenti), i valori consigliati del materiale. `max_temp` sotto `min_temp`: il tag viene rifiutato, come in OpenRFID |
| — | temperatura e durata di essiccazione, piatto min. e max. (`data4`–`data7`) | i valori `recommended` del materiale in `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: nessun prodotto del catalogo |
| — | `timestamp` | l'ora dell'importazione |

Due regole differiscono di proposito dal lettore di OpenRFID:

- **I valori di piatto e di essiccazione vengono dal database di riferimento
 TigerTag**, non dalla tabella a cinque righe di OpenRFID (PLA, PETG, ABS, TPU,
 NYLON, e zero per ogni altro tipo). Sono quelli che Tiger Studio compila quando
 si sceglie lo stesso materiale a mano, ed esistono per tutti i 113 materiali.
- **Il materiale non viene mai indovinato.** OpenRFID legge un tipo assente come
 PLA. Un materiale sbagliato dà temperature sbagliate, quindi l'importazione lo
 chiede.

---

**◀ Precedente:** [Klipper](./klipper.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Sviluppatori](../developers/README.md)
