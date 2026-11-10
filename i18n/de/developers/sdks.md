---
sourceHash: 78a273b10943b107e10bbd727392279a149ca7f949239abddcefb18b682ba5db
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

## Einen Chip lesen und schreiben

Beide SDKs funktionieren gleich. Zum Lesen übergeben Sie die UID des Chips
und seine Seiten ab `0x04`, so wie Ihr NFC-SDK sie liefert. Zum Schreiben bauen
Sie ein Tag aus seinen Feldern und schreiben die zurückgegebenen 80 Bytes in die
Seiten `0x04`–`0x17`. Die IDs stammen aus den
[Referenztabellen](../concepts/universal-filament-identity.md); das Beispiel ist eine 1-kg-Spule rotes Rosa3D-PLA,
1,75 mm.

### JavaScript

```js
const { TigerTag } = require('tigertag');

// Read
const tag = TigerTag.fromPages(uid, payload);
console.log(tag.pretty());
console.log(String(tag.verify()));   // VALID / NOT SIGNED / INVALID

// Write
const spool = TigerTag.create({
  uid,
  idType: 142,          // Filament
  idMaterial: 38219,    // PLA
  idBrand: 19961,       // Rosa3D
  idAspect1: 104,       // Basic
  idDiameter: 56,       // 1.75 mm
  color1R: 255, color1G: 0, color1B: 0, color1A: 255,
  measure: 1000, idUnit: 21,   // 1000 g
  nozzleTempMin: 195, nozzleTempMax: 230,
});
const bytes = spool.toBytes();   // 80 bytes
```

### Python

```python
from tigertag import TigerTag

# Read
tag = TigerTag.from_pages(uid, payload)
print(tag.pretty())
print(tag.verify())                # VALID / NOT SIGNED / INVALID

# Write
spool = TigerTag.create(
    uid=uid,
    id_type=142,          # Filament
    id_material=38219,    # PLA
    id_brand=19961,       # Rosa3D
    id_aspect_1=104,      # Basic
    id_diameter=56,       # 1.75 mm
    color1_r=255, color1_g=0, color1_b=0, color1_a=255,
    measure=1000, id_unit=21,    # 1000 g
    nozzle_temp_min=195, nozzle_temp_max=230,
)
data = spool.to_bytes()            # 80 bytes
```

Um zu prüfen, was Ihr Code schreibt, fügen Sie das Hex von `toBytes()` oder
`to_bytes()` in den [Playground](https://tigersystem.io/playground) ein: Er dekodiert den Chip Feld für
Feld, im Browser.

Beide Beispiele laufen so mit `tigertag` 1.2.1 (npm) und 1.4.0 (PyPI). Der
Rest der API (Signaturdetails, Cloud-Sync für TigerTag+, Chip-Patches, CLI)
steht im README des jeweiligen SDKs, das maßgeblich ist:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

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
