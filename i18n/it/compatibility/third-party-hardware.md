---
sourceHash: 289ee078055b2b2f885bf2a1198bfe20056cc92250866bfd0d4543b9e5190384
sourcePath: docs/compatibility/third-party-hardware.md
---

# Hardware di terze parti compatibile

L'ecosistema si trova bene con l'hardware che non ha realizzato. Questa pagina è l'
**elenco in crescita** dei dispositivi di terze parti che si collegano, in un modo o nell'altro:
continuerà ad ampliarsi con il proseguire dello sviluppo e con più costruttori che collegano
le loro apparecchiature.

| Dispositivo | Produttore | Cosa fa | Funziona con |
|---|---|---|---|
| Lettore NFC **ACR122U** | ACS | Lettore/scrittore NFC USB: scansioni un chip e la bobina si apre da sola; scritture guidate con verifica dell'UID. Due di questi alimentano un [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analizzatore di filamento **TD-1** | [AJAX-3D](https://ajax-3d.com) | Fai da te: misura la **Transmission Distance** del filamento (il valore usato per la stampa HueForge / Full Spectrum) + il colore (RGB, 1–3 slot, indicativo) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Analizzatore di filamento **TD1s** | [AJAX-3D](https://ajax-3d.com) | Stessa famiglia di dispositivi, già assemblato e pronto all'uso | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Bilance USB **DYMO serie M** (M5, M10, M25…) | DYMO | Dispositivi USB «HID Scale» standard: peso in tempo reale nel profilo della bobina ([dettagli del protocollo](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Qualsiasi bilancia USB conforme a HID Scale** | qualsiasi | Stesso protocollo standard della DYMO serie M (pagina d'uso HID `0x8D`): la marca non conta | [Tiger Studio](../products/tiger-studio.md) |
| **Qualsiasi chip NTAG213/215/216 vuoto** | qualsiasi | Il consumabile stesso: acquistabile ovunque, funziona allo stesso modo ([quale chip?](../../docs/faq/README.md)) | Tutto |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="Il lettore NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="L'analizzatore di filamento AJAX-3D TD1s" /> | <img src="../assets/dymo-usb-scale.png" alt="Una bilancia USB HID DYMO serie M" /> | <img src="../assets/ntag-chip.png" alt="Un chip NFC NTAG nudo, con la bobina dell'antenna visibile" /> |

*Il lettore ACR122U (due di essi si trovano dentro ogni
[TigerPOD](../products/tigerpod.md)) · l'AJAX-3D TD1s · una bilancia USB
DYMO serie M · il chip stesso, con l'antenna a vista.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="Il TD1s integrato in Tiger Studio: colore misurato e TD che confluiscono nel profilo della bobina" />

*Il TD1s al lavoro dentro Tiger Studio.*

I valori misurati non restano nel dispositivo: un TD o un peso finisce nel
profilo della bobina e può vivere **nel protocollo TigerTag stesso**, sul
chip o in un file `.ttag`.

## Lettori costruiti da altri

Alcuni appassionati costruiscono lettori propri che parlano direttamente TigerTag, senza che nessun
nostro software sia coinvolto. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) è un progetto open source
tedesco che pubblica lettori di bobine basati su ESP32: sorgenti su GitHub, custodie
stampabili, file PCB e firmware, tutto gratuito. Due dei suoi dispositivi dichiarano il
supporto a TigerTag:

| Dispositivo | Che cos'è | Cosa fa con TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Un'unità a batteria con touchscreen da 5″ 800×480, ESP32-S3 e un lettore RC522, che memorizza in locale oltre 2000 tag | **Legge, clona e scrive** TigerTag, insieme ai tag Bambu Lab, Spoolease, OpenSpool e OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Un lettore a quattro slot che si monta su un AMS di Bambu Lab: ESP32 con 4× RC522, display OLED e TFT, LED indirizzabili. Mostra i dati degli slot AMS in tempo reale e **invia i dati dei tag alla stampante / BMCU** | Legge le stesse cinque famiglie di tag, una per slot |

Due cose da precisare.

**Sono compatibili, non certificati.** Una terza parte può dire *«compatibile
con TigerTag»* liberamente e senza chiedere a nessuno: è esattamente ciò che
è, ed è tutto il senso di un formato aperto. Non è *certificato*:
la certificazione è un audit concesso da TigerSystem, e nessuno dei due dispositivi
ne ha superato uno. La differenza è spiegata nella
[policy sul marchio](../../TRADEMARK.md).

**Clonare un chip non è una falla del formato.** Un TigerTag standard non prevede
autenticazione e non è mai bloccato in scrittura, quindi copiarne uno è previsto: è
la stessa proprietà che ti permette di riscrivere i tuoi chip. Ciò che una copia non può
portare è una firma [TigerTag+](../products/tigertag-plus.md) valida: un tag clonato
non supera la verifica sul telefono del cliente, offline.

Che dispositivi come questi esistano senza di noi è la misura del formato: nessuno
ci ha chiesto nulla, non è servita alcuna chiave, non è stato firmato alcun accordo.

## Il tuo hardware qui

Costruisci o colleghi un dispositivo? Il protocollo è aperto, gli
[SDK](../developers/sdks.md) sono pronti e **TigerTag Certified** esiste
per le integrazioni verificate. Scrivici su
[Discord](https://discord.gg/3Qv5TSqnJH) o a
[tigertag@tigertag.io](mailto:tigertag@tigertag.io): questo elenco è fatto per
crescere.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Compatibilità](./README.md), [Integrazioni di terze parti (software)](../developers/integrations.md), [Prodotti](../products/README.md)
