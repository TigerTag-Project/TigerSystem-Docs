---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## De quoi il s'agit

**OpenSpool** est un standard de tag ouvert issu de la communauté : les données
du filament sous forme de **JSON NDEF** sur des tags NFC de type 2 — sans
authentification, sans cryptographie, entièrement ouvert. Par l'esprit, c'est
un proche cousin de TigerTag.

## TigerTag face à OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Support | NTAG, charge utile NDEF de 144 octets | NFC de type 2, JSON NDEF |
| Modèle de données | Identifiants compacts résolus dans une base de référence partagée | JSON autodescriptif |
| Cloud | Compte, inventaire et partage optionnels ([compte TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Aucun (standard limité au tag) |
| Authenticité | Optionnelle — un [TigerTag+](../products/tigertag-plus.md) signé par un fabricant certifié est un **TigerTag+ Certified**, vérifiable hors ligne | Aucune |
| Ouverture | Spécification ouverte + SDK | Spécification ouverte |

## Migrer une puce de TigerTag vers OpenSpool

Les puces TigerTag ne sont **jamais verrouillées en écriture** — TigerTag n'est
que le protocole de base avec lequel les bobines sont livrées. Si vous
préférez OpenSpool (ou tout autre format personnalisé), vous êtes libre de
réécrire les données d'une puce d'usine dans ce format.

## Interopérabilité — spécification documentée, conversion TigerData en cours

Une fiche de décodage en lecture seule pour les tags OpenSpool est maintenue
dans
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
dans le cadre de la lecture RFID multi-fournisseurs prévue dans Tiger Studio.

### Correspondance d'import : OpenSpool → TigerData

C'est la correspondance que le lecteur OpenSpool de Tiger Studio appliquera.
Lire un tag OpenSpool crée un **TigerData** : un enregistrement sans puce, avec
un nouveau `TigerData_<id>`. La puce OpenSpool n'est pas une puce TigerTag, et
un tag OpenSpool ne désigne aucun produit du catalogue : l'enregistrement n'est
donc jamais un TigerData+. Écrit plus tard sur une puce TigerTag, il devient un
TigerTag, comme tout TigerData.

Un tag n'est OpenSpool que si son JSON porte `"protocol": "openspool"`. Ses
champs sont alors résolus avec les [tables de référence](../concepts/universal-filament-identity.md) :

| OpenSpool | TigerData | Règle |
|---|---|---|
| `brand` | `id_brand` | cherchée par son nom dans `id_brand.json`, sans tenir compte de la casse ; absente ou inconnue → `Generic` (65535) |
| `type`, `subtype` | `id_material` | cherchée dans `id_material.json`, sans tenir compte de la casse, dans cet ordre : `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), puis `type` seul. `NYLON` se lit `PA` (59328). Un type absent ou inconnu est demandé |
| `subtype`, si la matière ne l'a pas utilisé | `id_aspect1` | l'aspect de ce nom dans `id_aspect.json` (`Matte` se lit `Matt`, 247), sinon `Basic` (104) ; un sous-type qui ne correspond à rien est gardé dans le `message` de l'enregistrement |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | recopiées ; OpenSpool ne porte qu'une couleur |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221 ; absent → 1,75, la valeur par défaut d'OpenSpool ; toute autre valeur est demandée |
| `weight` | `measure`, `id_measure_unit` | en grammes, unité `g` (21) ; absent → 1000, la valeur par défaut d'OpenSpool. La bobine part pleine : `weight_available` = `weight` |
| `min_temp`, `max_temp` | buse min et max (`data2`, `data3`) | recopiées ; quand les deux valent `0` (absentes), les valeurs recommandées de la matière. `max_temp` inférieure à `min_temp` : le tag est refusé, comme dans OpenRFID |
| — | température et durée de séchage, plateau min et max (`data4`–`data7`) | les valeurs `recommended` de la matière dans `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF` : aucun produit du catalogue |
| — | `timestamp` | l'heure de l'import |

Deux règles diffèrent volontairement du lecteur d'OpenRFID :

- **Les valeurs de plateau et de séchage viennent de la base de référence
 TigerTag**, et non du tableau à cinq lignes d'OpenRFID (PLA, PETG, ABS, TPU,
 NYLON, et zéro pour tout autre type). Ce sont celles que Tiger Studio remplit
 quand on choisit la même matière à la main, et elles existent pour les 113
 matières.
- **La matière n'est jamais devinée.** OpenRFID lit un type absent comme du
 PLA. Une mauvaise matière donne de mauvaises températures : l'import demande
 donc plutôt.

---

**◀ Précédent :** [Klipper](./klipper.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Développeurs](../developers/README.md)
