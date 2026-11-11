---
sourceHash: a907d2b3c8f6691d3cf0622da7203cc0fd523fec84b2e43dbda88c857ae0a5d8
sourcePath: docs/developers/sdks.md
---

# SDK

Deux SDK officiels prennent en charge toutes les opérations sur les puces
TigerTag — lecture de la charge utile NTAG de 144 octets, vérification du
format TigerTag et encodage de nouvelles données de puce.

## JavaScript — `tigertag` (npm)

- Dépôt : [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publié sur npm sous le nom **`tigertag`**.
- Utilisé en interne par Tiger Studio ; utilisable indépendamment pour
 construire des outils compatibles TigerTag sur mesure.

```bash
npm install tigertag
```

## Python

- Dépôt : [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publié sur PyPI sous le nom **`tigertag`** — pour les scripts, l'outillage
 et l'automatisation.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Lire et écrire une puce

Les deux SDK fonctionnent de la même façon. Pour lire, passez l'UID de la
puce et ses pages à partir de `0x04`, tels que votre SDK NFC les renvoie. Pour
écrire, construisez un tag à partir de ses champs et écrivez les 80 octets
qu'il renvoie dans les pages `0x04`–`0x17`. Les identifiants viennent des
[tables de référence](../concepts/universal-filament-identity.md) ; l'exemple est une bobine de 1 kg de PLA rouge
Rosa3D, en 1,75 mm.

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

Pour vérifier ce que votre code écrit, collez l'hexadécimal de `toBytes()` ou
`to_bytes()` dans le [playground](https://tigersystem.io/playground-tigertag) : il décode la puce champ par champ,
dans le navigateur.

Les deux exemples tournent tels quels avec `tigertag` 1.2.1 (npm) et 1.4.0
(PyPI). Le reste de l'API (détail de la signature, synchronisation cloud des
TigerTag+, modification d'une puce, CLI) est dans le README de chaque SDK, qui
fait foi : [JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## Ce que les SDK vous apportent

| Fonction | Description |
|---|---|
| Lecture | Décoder un vidage de puce en identité de filament (marque, matière, couleur…) |
| Vérification | Contrôler que la charge utile est un format TigerTag valide |
| Encodage | Construire une nouvelle charge utile de 144 octets à écrire sur une puce |

Les données de référence (tables identifiant → nom) proviennent de la base de
données partagée — voir
[Identité universelle du filament](../concepts/universal-filament-identity.md).

---

**◀ Précédent :** [Dépôts](./repositories.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [API compte](./account-api.md)
