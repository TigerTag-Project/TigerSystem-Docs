---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# Account-API en integratie door derden

## Het contract

Apps van derden verbinden met de TigerSystem-backend — gewoon Firebase — volgens het
**standaard Firebase-patroon**:

1. Haal de openbare SDK-configuratie op:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Authenticeer het **eigen TigerTag-account van de gebruiker** (dat de configuratie openbaar is,
 is bewust zo — de beveiliging wordt aan serverzijde afgedwongen door Firestore-regels).
4. Lees/schrijf de data van die gebruiker binnen het gedocumenteerde bereik.

## Canonieke documentatie

Het volledige integratiecontract staat in
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Document | Inhoud |
|---|---|
| `docs/01-firebase-config.md` | Projectconfiguratie en verbinding |
| `docs/02-authentication.md` | Authenticatiestromen |
| `docs/03-data-model.md` | Firestore-collecties en -velden (de referentie van het datamodel) |
| `docs/04-friend-system.md` | Ontdekkingscodes, verzoeken, gedeelde inventarissen |
| `docs/05-rate-limiting.md` | Limieten voor redelijk gebruik |
| `examples/` | Python-CLI, ESP32/Arduino, Home Assistant, Spoolman-brug |

## Beveiligingsregels — wat je kunt verwachten

- `users/{uid}/**` is standaard alleen voor de eigenaar toegankelijk.
- Schrijfacties tussen gebruikers vereisen altijd een **bestaande relatie** (bijv. een geaccepteerde
 vriendschap) — er zijn geen open schrijfpaden.
- Sommige collecties hebben een **whitelist van velden**: schrijfacties met niet-vermelde velden
 worden geweigerd.
- Velden alleen voor beheerders (rollen, debugvlaggen) zijn nooit door de client te schrijven.

## HTTP-endpoints

`cdn.tigertag.io` draait in **hetzelfde Firebase-project** als de accounts: het
host de gedeelde referentiedatabase, de spoelafbeeldingen (inclusief de
productfoto's van TigerTag+) en de HTTP-endpoints die bij de TigerSystem-database horen.

| Endpoint | Doel |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Gezondheidscontrole |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Het gewicht van een spoel doorgeven via de chip-UID (gebruikt door apparaten van het weegschaaltype) |

> **TODO:** volledige catalogus van de HTTP-API (authenticatiemodel, foutvormen) — wordt
> gedocumenteerd in de integratierepository en hier samengevat.

---

**◀ Vorige:** [SDK's](./sdks.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [FAQ](../faq/README.md)

**Zie ook:** [Inventaris en cloudsynchronisatie](../concepts/inventory-and-cloud-sync.md), [Architectuur](../architecture/overview.md)
