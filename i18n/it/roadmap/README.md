---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Roadmap

## Direzione dell'ecosistema

Intenzioni di alto livello, senza date (i dettagli stanno nei singoli prodotti):

- **RFID multi-produttore → TigerData** — recuperare i dati dai tag dei produttori
  (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
  e convertirli in bobine digitali TigerData, così che il filamento di altre marche possa
  essere scansionato e gestito nell'ecosistema; le specifiche in sola lettura sono già
  documentate ([compatibilità](../compatibility/README.md)). La decodifica diretta
  nell'app non è volutamente integrata finché il modello di interoperabilità non
  sarà definito.
- **Più integrazioni di stampanti** — Klipper/Moonraker come prossimo trasporto
  naturale ([pagina Klipper](../compatibility/klipper.md)).
- **Una mappa dei distributori** *(pianificata)* — i distributori ufficiali stanno crescendo
  oltre [Atome3D](https://atome3d.com); una mappa mostrerà dove acquistare
  i chip TigerTag a livello locale.
- ~~Il file portatile `.ttag`~~ — **rilasciato** in Tiger Studio v2.14.0:
  [il formato `.ttag`](../developers/ttag-format.md) (esportazione + importazione, tutti
  e tre i livelli di bobina).
- **TigerTag per le resine** — estendere il protocollo ai contenitori di resina per
  le stampanti 3D a resina, portando la stessa identità aperta a un'intera seconda famiglia
  di macchine.
- **Crescita di TigerHub** — il sito dell'ecosistema su
  [tigersystem.io](https://tigersystem.io): funzionalità social-sandbox più ricche
  (liste dei desideri, amici, condivisione).
- **Documentazione** — riempire i segnaposto TODO in tutto questo repository (tutorial,
  guide, onboarding dei produttori, riepilogo del payload RFID).
- **Lingue della documentazione** — il wiki su
  [wiki.tigersystem.io](https://wiki.tigersystem.io) esce prima in **inglese e
  francese**: l'inglese è la fonte di verità, il francese ne deriva ed è
  rivisto. Quando entrambi saranno completi e le pagine avranno smesso di cambiare, seguiranno le
  altre lingue di [tigersystem.io](https://tigersystem.io) —
  **tedesco, spagnolo, italiano, polacco, cinese e portoghese nelle sue varianti
  brasiliana ed europea**, che l'ecosistema tratta come due lingue distinte — così che la documentazione si allinei al resto dell'ecosistema.
  Aggiungerle prima significherebbe mantenere nove copie di pagine ancora
  in corso di scrittura.
- **Oltre le lingue attuali** — l'elenco non si ferma a ciò che
  [tigersystem.io](https://tigersystem.io) serve oggi. **Giapponese, coreano e
  russo** sono i candidati più forti dopo: tutti e tre hanno community di maker attive,
  e tutti e tre sono luoghi in cui una documentazione tecnica solo in inglese è un vero ostacolo e non un lieve
  inconveniente. Il russo
  raggiunge inoltre ben oltre la Russia. Nota che può valere la pena documentare una lingua
  anche dove il negozio non può spedire — il protocollo è aperto, qualsiasi chip NTAG vergine
  funziona, e nulla nell'ecosistema richiede di comprare qualcosa.

  Quali lingue aggiungere davvero dovrebbe essere deciso in base al traffico del wiki stesso
  una volta che ce ne sarà, non a intuito. Non deve nemmeno essere
  tutto o niente per lingua: le sezioni rivolte all'utente (tutorial, FAQ,
  prodotti, compatibilità) meritano una traduzione ben prima di
  [`developers/`](../developers/README.md), i cui lettori lavorano già
  in inglese.

## Roadmap dettagliate

| Prodotto | Dove |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) nel repository dell'app — raggruppata per ambito, con note su dimensioni e rischi |
| Altri prodotti | > **TODO:** pubblicare roadmap pubbliche man mano che i repository vengono aperti |

> **Nota:** questa pagina espone una direzione, non impegni né date.

---

**◀ Precedente:** [FAQ](../faq/README.md) · **▲ [Indice della documentazione](../../README.md)**

**Vedi anche:** [Prodotti](../products/README.md), [Compatibilità](../compatibility/README.md)
