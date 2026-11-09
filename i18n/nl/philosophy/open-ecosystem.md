---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Filosofie van het open ecosysteem

## Alles is open

Elke laag van TigerSystem is gepubliceerd — hardware, firmware, SDK’s, apps, documentatie:

| Laag | Project | Licentie |
|---|---|---|
| Desktop-app | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| JS SDK (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| Python SDK | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Weegschaalhardware + firmware (V3, actueel) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Weegschaalhardware + firmware (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Lezerstandaard (STL + documentatie) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Gids voor het chipformaat | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentatie voor cloudintegratie | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Deze documentatie | TigerSystem-Docs | CC BY 4.0 |

## Een zandbak, geen ommuurde tuin

Het **hele ecosysteem aan gebruikerskant** is bewust **een laboratorium, niet de
bestemming**.
Elk product — [Tiger Studio](../products/tiger-studio.md), de mobiele app,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) —
is een werkende demonstratie van wat open, gedocumenteerde technologie mogelijk maakt
zodra een spoel zichzelf kan identificeren: live printertelemetrie over zes merken,
fysieke rackmapping, sensoren, gedeelde inventarissen. Een deel zal rijpen,
een deel bestaat om iets te bewijzen, en alles is leesbaar, forkbaar en
vrij te kopiëren. Elk product — huidig en toekomstig — is een **proof of concept**
van een **open-source, standaard, agnostisch, platformonafhankelijk protocol**: het enige
doel is het potentieel te tonen, zodat iedereen ons integratiewerk als
inspiratie kan nemen en zich de functies van morgen kan voorstellen.

## Bouw je eigen

TigerTag is een open **protocol**, geen platform waarbij je je moet aansluiten:

1. Lees het chipformaat ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Pak een [SDK](../developers/sdks.md).
3. Verbind met de [cloud](../developers/account-api.md) — of niet; chips werken offline.
4. Lever de software, de hardware of het bedrijf dat je echt wilt.

Je app kan iets heel anders zijn — hij blijft dezelfde chips spreken.
Een NFC-telefoon, een USB-lezer ACR122U — of een DIY-ESP32 met een PN532/RC522-module,
in TigerScale-stijl — is alle hardware die nodig is: sluit de identiteit van een spoel aan op een ERP, een interne voorraadtool, een trackingworkflow, een uitleensysteem van een fablab,
een privé- of openbaar R&D-project — alles.

---

**◀ Vorige:** [Gebruikersgericht ecosysteem](./user-centric-ecosystem.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Smartphonebrug](./smartphone-bridge.md)

**Zie ook:** [Overzicht voor ontwikkelaars](../developers/README.md), [Producten](../products/README.md)
