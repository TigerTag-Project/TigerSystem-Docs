---
sourceHash: f283703d11787d5928096fe85013ad132ac596d2e2898ee65ac2adbfbb60d0ef
sourcePath: docs/developers/integrations.md
---

# Gebouwd op TigerTag — integraties van derden

Het hele punt van een open protocol is wat *anderen* ermee bouwen. Het
begint te gebeuren — projecten die TigerTag op eigen initiatief hebben geïntegreerd:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— de multi-fabrikant-toolkit van de community voor spoel-RFID. Hij leest de tagformaten van
veel fabrikanten — en **TigerTag is er een van**: dankzij de open payload was het een
eenvoudige toevoeging.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— een onafhankelijke community-firmware (GPL-3.0) voor de Snapmaker U1 (SSH,
camerastreaming, metrics… en RFID-lekkers). **Daarmee
leest de Snapmaker U1 TigerTags native — en is hij de eerste printer die TigerTag leest op
de machine zelf.** Precies de toekomst waar het collectieve spel naartoe werkt, vroegtijdig
aangebroken dankzij de community.

## COSMOS — firmware voor de Elegoo Centauri Carbon (OpenCentauri)

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)**
— een onafhankelijke communityfirmware onder GPL-3.0 voor de Elegoo Centauri
Carbon (mainline Linux gebouwd met Yocto, Klipper / Kalico). De Canvas-RFID-module
stuurt de **NFC-lezer die in de Canvas is ingebouwd** aan, de meerkleurenunit van
de printer, en decodeert de chips met OpenRFID: **de Centauri Carbon leest
TigerTags met zijn eigen lezer**, zonder extra hardware.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — een platform voor
filamentinventaris (web, iOS/Android, Home Assistant, OrcaSlicer-nabewerking,
zelf te hosten). De spoelherkenning is gebouwd op TigerTag: *“Mark your
spools with NFC chips (TigerTags) and manage your inventory with a simple
gesture.”* (“Markeer je spoelen met NFC-chips (TigerTags) en beheer je inventaris met één eenvoudig
gebaar.”) Een product van derden, met een eigen visie — dat draait op het open
protocol, precies zoals bedoeld.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — een AGPL-3.0-desktopapp
(Python, Windows) die een lokale bibliotheek van 3D-printbestanden beheert: voorbeelden,
semantisch zoeken, overdracht aan de slicer, printwachtrij. De filamentkant leest de
**TigerTag-inventaris**: meld je aan, of laat hem een bestaande Tiger Studio-sessie
oppikken, en je TigerTag-spoelen verschijnen in zijn voorraad — **alleen-lezen**, hij schrijft nooit
in je inventaris. Van daaruit filtert hij de bibliotheek tot wat je
spoelen echt kunnen printen en waarschuwt hij voordat een print tekortschiet.

---

Bouw je iets op TigerTag? Laat het ons weten op de
[Discord](https://discord.gg/3Qv5TSqnJH) of via de
[GitHub-organisatie](https://github.com/TigerTag-Project) — en vergeet niet dat
[TigerTag Certified](../../TRADEMARK.md) bestaat voor geverifieerde integraties.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Overzicht voor ontwikkelaars](./README.md), [Wat kun je bouwen?](./README.md), [Compatibiliteit](../compatibility/README.md)
