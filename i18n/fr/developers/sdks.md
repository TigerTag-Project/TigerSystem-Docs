---
sourceHash: dddf1ecd9b808ebb22194ce95cda637ee38d411bfb7bce96c50491b0fa74d229
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

> **TODO :** exemples de code minimaux de lecture/encodage pour les deux SDK —
> à importer depuis le README de chaque SDK une fois stabilisés, ou à lier
> directement. Ne pas reproduire ici les signatures d'API (risque de
> divergence) ; le README de chaque SDK fait foi.

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

**◀ Précédent :** [Dépôts](./repositories.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [API cloud](./cloud-api.md)
