---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Stampanti di etichette Bluetooth

Stampa l'etichetta TigerQR di una bobina direttamente dal telefono su una
piccola stampante termica di etichette Bluetooth: niente computer, niente PDF,
nessuna app della stampante in mezzo.

> **Stato al 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) stampa su queste stampanti a partire dal suo **prossimo
> aggiornamento**. In [Tiger Studio](../products/tiger-studio.md) le stesse
> stampanti sono in fase di integrazione, **non ancora rilasciate**. Fino ad
> allora, qualsiasi stampante funziona con la propria app a partire dal PDF,
> PNG o SVG dell'etichetta
> ([etichette stampate](../developers/spool-ids-and-qr-links.md)).

## Come funziona

- Tiger NFC Connect invia l'etichetta TigerQR della **bobina** o del
  **filamento** alla stampante via Bluetooth.
- **Ogni stampante ricorda il proprio formato di etichetta**, quello del rotolo
  caricato.
- Ogni stampa mantiene un **piccolo margine di sicurezza**, così anche un
  rotolo leggermente disallineato riceve l'etichetta intera.
- I rotoli da 12 mm stampano l'etichetta **Slim** da 40 × 12 mm; i rotoli larghi
  50 mm accettano etichette più grandi (testata la 50 × 30 mm).

> **Consiglio:** una stampante si collega a **un solo dispositivo alla volta**.
> Chiudete l'app del produttore della stampante prima di stampare da
> Tiger NFC Connect.

## La nostra scelta

Le stampanti Niimbot sono davvero molto buone. La **D110** è la più
conveniente, molto buona per il suo prezzo; la **B1** e la **B1 Pro** sono
quelle da scegliere con più budget, per etichette più grandi. La Marklife
**P15** funziona, ma è più ingombrante e la sua qualità di stampa sembra un po'
inferiore.

Tutte e quattro sono state testate su carta.

| Stampante | Rotoli | Etichetta testata | Il nostro parere | Acquista |
|---|---|---|---|---|
| **Niimbot D110** (e D110-M) | 12 mm | 40 × 12 mm | **La più conveniente**: molto buona per il suo prezzo | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | fino a 50 mm di larghezza | 50 × 30 mm | Etichette più grandi, con più budget | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm di larghezza | 50 × 30 mm | 300 dpi, la stampa più nitida | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (venduta come «Pristar P15» su Amazon) | 12 mm | 40 × 12 mm | Funziona, ma più ingombrante, stampa un po' inferiore | [Amazon](https://link.amazon/B0iRdI1G6) |

> I link di questa tabella sono **link di affiliazione Amazon** (amazon.fr): in
> qualità di Affiliato Amazon, TigerTag riceve un guadagno dagli acquisti
> idonei, **senza costi aggiuntivi per te**. Aiuta a finanziare il protocollo
> aperto. Comprare la stessa stampante altrove funziona esattamente allo stesso
> modo.

Niente prezzi qui: cambiano troppo spesso.

## Supportate anche, non ancora testate su carta

Il codice dell'app gestisce anche questi modelli; non sono ancora stati testati
su carta:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Hardware di terze parti compatibile](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Id delle bobine e link QR](../developers/spool-ids-and-qr-links.md)
