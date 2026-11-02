---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDKs

Zwei offizielle SDKs übernehmen alle Operationen auf TigerTag-Chips – das Lesen der
144-Byte-NTAG-Nutzdaten, das Prüfen des TigerTag-Formats und das Codieren neuer
Chip-Daten.

## JavaScript – `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Auf npm als **`tigertag`** veröffentlicht.
- Wird intern von Tiger Studio genutzt; unabhängig davon einsetzbar, um eigene
 TigerTag-kompatible Tools zu bauen.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Auf PyPI als **`tigertag`** veröffentlicht – für Skripte, Tooling und Automatisierung.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** minimale Code-Beispiele zum Parsen/Codieren für beide SDKs – aus der
> README jedes SDKs übernehmen, sobald sie stabil sind, oder direkt verlinken.
> API-Signaturen hier nicht wiedergeben (Driftgefahr); die README jedes SDKs ist
> maßgeblich.

## Was dir die SDKs geben

| Fähigkeit | Beschreibung |
|---|---|
| Parsen | Einen Chip-Dump in die Filament-Identität dekodieren (Marke, Material, Farbe …) |
| Prüfen | Kontrollieren, dass die Nutzdaten ein gültiges TigerTag-Format sind |
| Codieren | Neue 144-Byte-Nutzdaten zum Schreiben auf einen Chip erzeugen |

Die Referenzdaten (ID → Namen-Tabellen) stammen aus der gemeinsamen Datenbank –
siehe [Universelle Filament-Identität](../concepts/universal-filament-identity.md).

---

**◀ Zurück:** [Repositories](./repositories.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Account-API](./account-api.md)
