---
sourceHash: 753177831a2577ac01ace40f8f49b6cf943aaf385d6b6c4107fcbd9d8660d0f2
sourcePath: docs/tutorials/first-smart-spool.md
---

# La tua prima bobina intelligente in 2 minuti

Rendi intelligente qualsiasi bobina di filamento — **gratis, a casa**, con cose che
hai già o che puoi procurarti per pochi centesimi.

## Cosa ti serve

- **Qualsiasi smartphone NFC** (è il lettore — ce l'hai già in tasca)
- **Un chip NTAG vuoto** — NTAG213, 215 o 216, **rotondo da 25 mm** consigliato
 (pochi centesimi su Amazon, AliExpress o in negozio; non serve nulla di ufficiale)
- **Tiger NFC Connect**, l'app gratuita —
 [scaricala per iOS e Android](https://tigersystem.io/download)

> Hai già comprato filamento di Rosa3D, eSun, Sunlu, R3D…? La tua bobina potrebbe
> **portare già dei chip TigerTag** — salta il modulo e tocca semplicemente «Scan».

## Passaggi

**Tocchi il chip due volte:** una per iniziare, una per scrivere.

1. **Installa Tiger NFC Connect** e aprilo.
2. **Tocca «Scan»** e tieni il telefono contro il chip vuoto. L'app lo legge,
 vede che è vuoto e si offre di creare un filamento per esso.
3. **Descrivi il tuo filamento** — scegli il materiale, il colore, l'aspetto, il
 peso e così via. Le scelte vengono dal catalogo condiviso, così la tua
 bobina sarà capita in modo identico da ogni app compatibile. È un modulo
 rapido; niente da digitare a memoria.
4. **Tocca «Make», poi tieni di nuovo il telefono contro il chip.** Quel secondo
 tocco è la scrittura. Un secondo dopo i dati sono **sul chip stesso** — la tua
 bobina ora sa che cos'è.
5. **Incolla il chip sulla bobina.**

<img src="../assets/nfc-scan.gif" width="420" alt="Il tocco NFC, animato — il telefono incontra il chip, bobina identificata" />

*L'intero gesto, in movimento.*

### Due chip su una bobina — «Dual NFC»

Le bobine di fabbrica portano **due chip, su lati opposti**, così che un chip sia
sempre rivolto verso il lettore ([perché due?](../concepts/tigertag-chip.md)). Puoi
fare lo stesso, in una sola sessione:

1. Scansiona il primo chip vuoto e compila il modulo come sopra.
2. Prima di scrivere, **tocca il pulsante «Dual NFC»**.
3. **Tocca «Make»** come al solito — ma ora l'app chiede i chip uno dopo
 l'altro: **Make 1/2**, poi **Make 2/2**. Entrambi i chip finiscono per portare la stessa
 identità.

> **Parti sempre dal chip che hai scansionato.** Il chip che ha aperto la
> creazione è quello che l'app si aspetta come 1/2; l'altro chip segue come 2/2.

Ecco fatto. Riscansiona la bobina quando vuoi, con il lettore più vicino: un
tocco di **qualsiasi telefono NFC**, oppure appoggiala su un lettore collegato a
[Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)) — la bobina si presenta da sola in entrambi
i casi. Tutto quanto sopra funziona **al 100 % offline** — niente account, niente cloud, nessun
costo.

## Facoltativo: aggiungerla al tuo inventario

Vuoi la bobina nel tuo inventario sincronizzato (visibile su desktop, condivisibile con
gli amici)? Dillo semplicemente nell'app quando te lo chiede — è una scelta esplicita,
mai automatica.

## E dopo?

- Metti la bobina su una [TigerScale](../products/tigerscale.md) e guarda il suo
 peso aggiornarsi in tempo reale.
- Apri [Tiger Studio](../products/tiger-studio.md) sul computer e vedi
 la stessa bobina lì.
- Hai ricaricato o riutilizzato la bobina? Ricodifica il chip —
 [Second Life](../philosophy/second-life.md).

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Tiger NFC Connect](../products/tigertag-connect.md), [Il chip TigerTag](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
