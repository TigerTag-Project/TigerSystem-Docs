---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
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

> **TODO:** decidere e documentare la mappatura di importazione (campi JSON di OpenSpool →
> ID di riferimento TigerTag) quando arriverà il supporto alla lettura.

---

**◀ Precedente:** [Klipper](./klipper.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Sviluppatori](../developers/README.md)
