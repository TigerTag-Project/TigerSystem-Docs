---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Formati di tag per bobine a confronto

Oggi sulle bobine di filamento si usano sei formati NFC/RFID. Questa pagina li
mette fianco a fianco, al 6 novembre 2026, con ogni dato preso dalla specifica
del formato stesso o, per Bambu Lab e Creality (nessuna specifica ufficiale), da
lavori pubblici di reverse engineering. Descrive; non stila classifiche.
[OpenSpool](./openspool.md) e [OpenTag3D](./opentag3d.md) hanno le proprie
pagine.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([reverse engineering][bbl]) | Creality CFS ([reverse engineering][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Byte per un record completo | **80** (+ 64 B di firma) | 176 (248 B sul tag) | 224 | 126 (JSON) | non documentato (chip da 1 KB) | 48 |
| Colori, max | 3 | 6 | 4 | 1 | 2 | 1 |
| Ugello e piano di stampa min / max | sì | sì | sì | solo ugello | ugello; un valore per il piano | no |
| Temperatura e durata di essiccazione | sì | sì | sì | no | sì | no |
| Quantità residua sul chip | sì | sì | no | no | no | no |
| TD di HueForge | sì | sì | sì | no | no | no |
| Messaggio di testo libero | 28 B | no | no | no | no | no |
| Firma verificabile offline | ECDSA-P256, chiave pubblica pubblicata | no | no | no | RSA-2048, chiave pubblica non pubblicata | no |
| Chip riscrivibile | sì | sì | sì | sì | no (rifiutato una volta modificato) | no |
| Catalogo prodotti aperto offline | **20.348 prodotti** | 15.874 confezioni | no | no | no | no |
| Correzioni del chip dopo la fabbrica | un'API aperta e standardizzata per ogni marca; gli SDK confrontano e correggono il chip, firma sempre valida | no | `data_url` facoltativo verso un'API che ogni produttore crea e ospita da sé; nessun formato comune, SDK o flusso di aggiornamento | no | no | no |

## Cosa mostra la tabella

- **Il record completo più compatto.** TigerTag memorizza un record di stampa
  completo — temperature, essiccazione, quantità, colori, TD — in 80 byte,
  contro i 176 di OpenPrintTag e i 224 di OpenTag3D. I due record più piccoli
  contengono meno: i 48 byte di Creality non includono alcuna temperatura, i
  126 byte di OpenSpool contengono sette campi. È anche l'unico formato qui che
  entra in un NTAG213, firma compresa.
- **Completo offline, grazie al catalogo.** Un id prodotto TigerTag+ si risolve
  sul catalogo pubblico incluso — 20.348 prodotti con nome, serie, SKU, codice a
  barre, foto e indicatore di refill — senza rete e senza account.
- **Aggiornamenti prevedibili.** Una marca corregge un prodotto una volta sola,
  sull'API condivisa da tutte le marche; qualsiasi lettore corregge poi i chip
  già venduti.
- **Non il maggior numero di campi sul chip.** OpenPrintTag porta più colori e
  campi che TigerTag non ha (GTIN, lunghezza). Ciò che distingue TigerTag è la
  combinazione: un record completo in pochi byte, una firma verificabile offline
  e un catalogo aperto di oltre 20.000 prodotti, su un NTAG213.

## Fonti

- OpenPrintTag: [elenco dei campi][opt], dimensione dal vettore di test di riferimento
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  numero del catalogo dal README di [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [specifica][ot3d] e la sua
  [mappa di memoria](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [formato del tag][osp], dimensione dal suo esempio documentato.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, reverse engineering).
- Creality CFS: [K2-RFID][cfs] (reverse engineering).
- TigerTag: la [specifica](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Un dato è sbagliato o non aggiornato? Apri una issue: questa pagina si corregge,
non si difende.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Precedente:** [OpenTag3D](./opentag3d.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Sviluppatori](../developers/README.md)

**Vedi anche:** [Compatibilità](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
