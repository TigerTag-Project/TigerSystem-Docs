---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory e TigerTag Manager (suite per la fabbrica)

## Scopo

Il **lato industriale** di TigerSystem — gli strumenti che le fabbriche di filamento usano per
inserire TigerTag nei propri prodotti. A differenza della sandbox rivolta agli utenti, **questo è
software di produzione**: è ciò che ha messo più di 2,5 milioni di chip
sul campo.

Due strumenti coprono le due metà del lavoro:

- **TigerTag Manager** — gestisce il **database dei filamenti** del marchio: prodotti,
 materiali, colori, parametri.
- **TigerTag Factory** — **scrive in blocco i dati su ogni bobina prodotta**,
 alla velocità della linea: **circa 1 secondo per chip** — migliaia di bobine al giorno,
 con un clic.

## Il supporto — due chip, stacca e incolla

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="Il supporto TigerTag nudo — due antenne NFC indipendenti, una a ciascuna estremità" /> | <img src="../assets/carrier-branded.png" alt="Il supporto TigerTag così come viene spedito, con i due chip personalizzati" /> |

*I due chip NFC indipendenti sono ben visibili — uno per estremità. Le estremità
si ripiegano sul nucleo di cartone così che la bobina si legga da entrambi i lati; la parte centrale
è fissata con adesivo industriale 3M (468MP / 200MP). L'operatore stacca e
incolla — nient'altro cambia sulla linea. Il design del supporto è pubblico e
stampabile a casa.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="Il supporto applicato a un refill di filamento" />

## Prova di origine

I chip scritti sulla linea di produzione portano la **firma di fabbrica** — l'autenticazione
che **prova l'origine del prodotto**. È lo strato dietro i ripristini dello stato di fabbrica di
[TigerTag+](./tigertag-plus.md) e l'ancora di fiducia per i
marchi: un chip firmato proviene dimostrabilmente dalla vera fabbrica.

## Disponibilità

**Non pubblica.** Questi strumenti sono riservati ai produttori terzi che
implementano la tecnologia RFID/NFC TigerTag nei propri prodotti. Una linea di produzione
di filamento può essere operativa con TigerTag in **appena
5 giorni** — vedi
[Per i produttori di filamento](../vision/for-filament-manufacturers.md) e
contattaci tramite l'[organizzazione GitHub](https://github.com/TigerTag-Project).

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Per i produttori di filamento](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Prodotti](./README.md)
