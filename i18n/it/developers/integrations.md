---
sourceHash: 6f9124180c40a232c7aab51fda782a891af83baafbcf03c27d697b0ccfcff594
sourcePath: docs/developers/integrations.md
---

# Costruito su TigerTag — integrazioni di terze parti

Il senso di un protocollo aperto sta in ciò che *gli altri* costruiscono con esso. Sta
cominciando a succedere — progetti che hanno integrato TigerTag in autonomia:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— il toolkit RFID multi-produttore per bobine della community. Legge i formati di tag
di molti produttori — e **TigerTag è uno di questi**: il payload aperto ne ha fatto
un'aggiunta immediata.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— un firmware indipendente della community, GPL-3.0, per lo Snapmaker U1 (SSH,
streaming della fotocamera, metriche… e tanto RFID). **Con esso, lo Snapmaker U1
legge i TigerTag in modo nativo — diventando la prima stampante a leggere TigerTag sulla
macchina stessa.** Esattamente il futuro a cui punta la partita collettiva, arrivato
in anticipo grazie alla community.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — una piattaforma di inventario
dei filamenti (web, iOS/Android, Home Assistant, post-elaborazione di OrcaSlicer,
installabile in autonomia). La sua identificazione delle bobine si basa su TigerTag: *«Contrassegna le tue
bobine con chip NFC (TigerTag) e gestisci il tuo inventario con un semplice
gesto.»* (Originale inglese, da citare: *"Mark your spools with NFC chips (TigerTags) and manage your inventory with a simple gesture."*) Un prodotto di terze parti, con una propria visione — che gira sul protocollo
aperto, esattamente come previsto.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — un'app desktop AGPL-3.0
(Python, Windows) che gestisce una libreria locale di file per la stampa 3D: anteprime,
ricerca semantica, passaggio allo slicer, coda di stampa. Il lato filamento legge l'
**inventario TigerTag**: accedi, oppure lascia che recuperi una sessione esistente di Tiger Studio,
e le tue bobine TigerTag compaiono nel suo magazzino — in **sola lettura**, non
scrive mai nel tuo inventario. Da lì filtra la libreria in base a ciò che le tue
bobine possono effettivamente stampare e ti avvisa prima che una stampa resti a corto.

---

Stai costruendo qualcosa su TigerTag? Scrivici su
[Discord](https://discord.gg/3Qv5TSqnJH) o tramite l'
[organizzazione GitHub](https://github.com/TigerTag-Project) — e ricorda che
[TigerTag Certified](../../TRADEMARK.md) esiste per le integrazioni verificate.

---

**▲ [Indice della documentazione](../../README.md)** · **Vedi anche:** [Panoramica per sviluppatori](./README.md), [Cosa puoi costruire?](./README.md), [Compatibilità](../compatibility/README.md)
