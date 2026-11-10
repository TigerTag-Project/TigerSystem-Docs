---
title: "L'identità aperta del filamento"
description: "L'identità NFC aperta per il filamento da stampa 3D: cos'è TigerTag, cosa ci gira sopra e come costruire la tua soluzione."
template: splash
editUrl: false
banner:
  content: Questa pagina è stata <strong>tradotta automaticamente</strong> dall’inglese. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BIT%5D+home">Segnala un errore</a>.
hero:
  title: "TigerSystem"
  tagline: "Il tuo filamento, finalmente intelligente, e finalmente tuo. Un piccolo chip NFC aperto, e una bobina può finalmente presentarsi da sola."
  image:
    html: |
      <div class="ts-hero-devices" role="img" aria-label="Tiger Studio su un computer, un lettore TigerPOD con una bobina taggata e l'app mobile">
        <div class="ts-hd-item ts-hd-floats ts-hd-imac"><img class="ts-hd-float" src="/assets/hero/imac-studio.webp" alt="" width="1253" height="995" /></div>
        <div class="ts-hd-item ts-hd-pod">
          <img class="ts-hd-face" src="/assets/hero/tigerpod-mini.webp" alt="" width="450" height="665" />
          <img class="ts-hd-face ts-hd-face-scale" src="/assets/hero/tigerscale.webp" alt="" width="420" height="611" />
          <img class="ts-hd-face ts-hd-face-spool" src="/assets/hero/tigerspool.webp" alt="" width="420" height="511" />
        </div>
        <div class="ts-hd-item ts-hd-floats ts-hd-touch"><img class="ts-hd-float" src="/assets/hero/tigertouch-tour.webp" alt="" width="1000" height="733" /></div>
        <div class="ts-hd-item ts-hd-floats ts-hd-phone"><img class="ts-hd-float" src="/assets/hero/iphone-connect.webp" alt="" width="704" height="1427" /></div>
      </div>
  actions:
    - text: "La tua prima bobina intelligente"
      link: /it/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Perché esiste TigerSystem"
      link: /it/vision/why-tigersystem/
      variant: minimal
    - text: "Scopri i prodotti"
      link: /it/products/
      variant: minimal
---

## TigerSystem in 30 secondi

Ogni scaffale di stampa 3D nasconde lo stesso mistero: venti bobine, metà senza
etichetta, e nessuna in grado di dire cos'è, quanto ne resta o come le piace
essere stampata.

**TigerSystem risolve il problema con un piccolo chip.** Attacca un chip NFC
[TigerTag](/it/products/tigertag/) su una bobina e la bobina si presenta da
sola: al tuo telefono, al tuo computer, alla tua stampante: *«Sono PLA nero
opaco della marca X, 1,75 mm, stampami a 210 °C, e me ne restano 640 g.»*

Anche i produttori di stampanti taggano le loro bobine, ma in modo
**bloccato**, con formati segreti che funzionano solo con le loro macchine.
TigerSystem rovescia la logica: il chip è **aperto e leggibile da qualsiasi
cosa**, i dati appartengono al **tuo** account, e ogni componente (app, cloud,
bilancia, lettore, la specifica stessa del chip) è pubblicato perché chiunque
possa usarlo o costruirci sopra. È un formato, non un giardino recintato.

Sono stati prodotti oltre **2,5 milioni di chip**, che escono dalla fabbrica
nel filamento di marchi come Rosa3D, eSun, Sunlu e R3D: questo fa di TigerTag
il protocollo RFID di terze parti più diffuso al mondo.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Scatola di filamento Rosa3D con TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="Scatola di filamento eSun con TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Scatola di filamento Sunlu con TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>Non è un mock-up: scatole vere su scaffali veri, spedite con TigerTag all'interno.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/it/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Pronto a provare</span><span class="ts-card__text">Rendi intelligente una bobina in due minuti: un chip NTAG vuoto, il tuo telefono, l'app gratuita. Nessun account, completamente offline.</span></span></a>
<a class="ts-card" href="/it/products/"><span class="ts-card__body"><span class="ts-card__title">Un utente</span><span class="ts-card__text">Cosa fa davvero ogni prodotto per te: chip, app, la bilancia, il supporto per i lettori.</span></span></a>
<a class="ts-card" href="/it/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Un possessore di stampante</span><span class="ts-card__text">Funziona con la tua macchina? Sei marchi sono già operativi, e il chip funziona con tutti gli altri.</span></span></a>
<a class="ts-card" href="/it/developers/"><span class="ts-card__body"><span class="ts-card__title">Uno sviluppatore</span><span class="ts-card__text">Leggi e scrivi chip da JavaScript o Python, oppure integra l'identità nel tuo software.</span></span></a>
<a class="ts-card" href="/it/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Un produttore di filamento</span><span class="ts-card__text">Integrazione in fabbrica in pochi giorni, circa un secondo per chip, a scala di produzione.</span></span></a>
<a class="ts-card" href="/it/faq/"><span class="ts-card__body"><span class="ts-card__title">Solo curioso</span><span class="ts-card__text">Le domande che si fanno tutti, con le risposte: chip, cloud, stampanti, privacy e molto altro.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Un vero banco di lavoro TigerSystem: Tiger Studio Manager, TigerScale, un sensore di colore TD1S, un lettore ACR122U e un TigerPOD" />
<figcaption>Non è un mockup: la sandbox su un vero banco di lavoro, con Studio, TigerScale, TD1s e TigerPOD che lavorano insieme.</figcaption>
</figure>

## Dove risiede la verità

Questa wiki è generata a partire dal
[repository TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs), che è la **fonte di
verità** dell'ecosistema. Dove un'altra superficie è in disaccordo con il
repository, vale il repository.

**E il repository è di tutti.** Non ti serve il permesso, un invito o un
legame con il progetto per correggerlo:

- Qualcosa è sbagliato, poco chiaro o manca, e preferisci limitarti a
  segnalarlo? → [apri una issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Sai cosa dovrebbe dire? → ogni pagina ha un link **«Modifica pagina»** che ti
  porta direttamente al Markdown che c'è dietro. Cambialo, apri una pull
  request e hai finito: GitHub si occupa del fork per te, e funziona anche da
  telefono.

Refusi, formulazioni migliori, un passaggio mancante, una pagina che ti ha fatto
prendere la strada sbagliata: tutto è benvenuto, e sono le piccole correzioni
quelle che si sommano.
Il contenuto è sotto licenza [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
vedi [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md) per le regole della casa, che
stanno in una schermata.

La politica sul marchio riguarda il *marchio*, il logo su un chip fisico. Non
ha nulla a che vedere con questa documentazione, aperta a chiunque.

Gli assistenti IA dovrebbero partire da [llms.txt](/llms.txt), la spiegazione
canonica condensata. Tutti gli altri possono iniziare dal
[glossario](/it/glossary/) se un termine li blocca.
