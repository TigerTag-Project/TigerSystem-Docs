---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# Account-API & Integration von Drittanbietern

## Der Vertrag

Apps von Drittanbietern verbinden sich mit dem TigerSystem-Backend – schlichtem
Firebase – nach dem **üblichen Firebase-Muster**:

1. Die öffentliche SDK-Konfiguration abrufen:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Das **eigene TigerTag-Konto des Nutzers** authentifizieren (dass die
 Konfiguration öffentlich ist, ist Absicht – die Sicherheit erzwingen serverseitig
 die Firestore-Regeln).
4. Die Daten dieses Nutzers innerhalb der dokumentierten Oberfläche lesen/schreiben.

## Maßgebliche Dokumentation

Der vollständige Integrationsvertrag liegt in
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Dokument | Inhalt |
|---|---|
| `docs/01-firebase-config.md` | Projektkonfiguration & Verbindung |
| `docs/02-authentication.md` | Authentifizierungsabläufe |
| `docs/03-data-model.md` | Firestore-Collections & -Felder (die Referenz zum Datenmodell) |
| `docs/04-friend-system.md` | Erkennungscodes, Anfragen, geteilte Bestände |
| `docs/05-rate-limiting.md` | Fair-Use-Grenzen |
| `examples/` | Python-CLI, ESP32/Arduino, Home Assistant, Spoolman-Brücke |

## Sicherheitsregeln – was dich erwartet

- `users/{uid}/**` ist standardmäßig nur für den Besitzer zugänglich.
- Nutzerübergreifende Schreibzugriffe erfordern immer eine **vorherige Beziehung**
 (z. B. eine angenommene Freundschaft) – es gibt keine offenen Schreibpfade.
- Manche Collections sind **feldweise freigegeben**: Schreibvorgänge mit nicht
 aufgeführten Feldern werden abgelehnt.
- Nur für Admins vorgesehene Felder (Rollen, Debug-Flags) sind nie vom Client
 beschreibbar.

## HTTP-Endpunkte

`cdn.tigertag.io` liegt im **selben Firebase-Projekt** wie die Konten: Es hostet
die gemeinsame Referenzdatenbank, die Spulenbilder (einschließlich der
TigerTag+-Produktfotos) und die HTTP-Endpunkte der TigerSystem-Datenbank.

| Endpunkt | Zweck |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Health-Check |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Das Gewicht einer Spule über die Chip-UID senden (von Geräten der Waagen-Klasse genutzt) |

> **TODO:** vollständiger Katalog der HTTP-API (Authentifizierungsmodell,
> Fehlerformate) – im Integrations-Repository zu dokumentieren und hier
> zusammenzufassen.

---

**◀ Zurück:** [SDKs](./sdks.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [FAQ](../faq/README.md)

**Siehe auch:** [Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md), [Architektur](../architecture/overview.md)
