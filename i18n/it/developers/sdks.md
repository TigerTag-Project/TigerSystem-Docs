---
sourceHash: 442ad60629425e6204e63477c4fca050cf440f131defb1307e50fea7c1944670
sourcePath: docs/developers/sdks.md
---

# SDK

Due SDK ufficiali gestiscono tutte le operazioni sui chip TigerTag — lettura del
payload NTAG da 144 byte, verifica del formato TigerTag e codifica dei nuovi dati del chip.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Pubblicato su npm come **`tigertag`**.
- Usato internamente da Tiger Studio; utilizzabile in modo indipendente per costruire strumenti
 personalizzati compatibili con TigerTag.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Pubblicato su PyPI come **`tigertag`** — per script, strumenti e automazione.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Leggere e scrivere un chip

I due SDK funzionano allo stesso modo. Per leggere, passa l'UID del chip e le
sue pagine da `0x04`, come le restituisce il tuo SDK NFC. Per scrivere, crea un
tag dai suoi campi e scrivi gli 80 byte che restituisce nelle pagine
`0x04`–`0x17`. Gli id vengono dalle [tabelle di riferimento](../concepts/universal-filament-identity.md);
l'esempio è una bobina da 1 kg di PLA rosso Rosa3D, da 1,75 mm.

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

Entrambi gli esempi funzionano così con `tigertag` 1.2.1 (npm) e 1.4.0
(PyPI). Il resto dell'API (dettagli della firma, sincronizzazione cloud dei
TigerTag+, modifica di un chip, la CLI) è nel README di ciascun SDK, che fa
fede: [JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## Cosa ti offrono gli SDK

| Funzione | Descrizione |
|---|---|
| Parse | Decodifica il dump di un chip nell'identità del filamento (marca, materiale, colore…) |
| Verify | Controlla che il payload sia in un formato TigerTag valido |
| Encode | Costruisce un nuovo payload da 144 byte da scrivere su un chip |

I dati di riferimento (tabelle ID → nome) provengono dal database condiviso — vedi
[Identità universale del filamento](../concepts/universal-filament-identity.md).

---

**◀ Precedente:** [Mappa dei repository](./repositories.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [API dell'account](./account-api.md)
