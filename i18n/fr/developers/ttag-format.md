---
sourceHash: 087d1aab4c52325f1acfa066df4feadc030b9ef1f7c6df6d20e99557542517da
sourcePath: docs/developers/ttag-format.md
---

# Le format de fichier `.ttag`

Le **fichier d'échange d'inventaire `.ttag`** est un instantané portable et
hors ligne d'un ou plusieurs matériaux de l'inventaire. C'est l'unité de base
pour **sauvegarder** vos filaments, les **emporter** sur une clé USB et les
**partager** — entre comptes, entre outils, ou sous forme de collections de
marques ou de gammes prêtes à l'emploi.

Introduit dans **Tiger Studio Manager v2.14.0** (export + import). Le format
est stable et commun à toutes les applications : les outils tiers, un futur
bac à sable web qui générera des fichiers `.ttag` et les collections de
filaments préparées reposent tous sur cette spécification.

## Structure du fichier

Un fichier `.ttag` est un unique document **JSON UTF-8** :

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Champ | Signification |
|---|---|
| `format` / `kind` | Toujours `"tigertag"` / `"ttag"` — la paire d'identification vérifiée à l'import |
| `version` | Version du format ; actuellement `1` |
| `exportedAt` | Date de l'export, **chaîne ISO 8601** (par ex. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | uid du propriétaire exportateur — **une aide à l'interface pour choisir le mode d'import UNIQUEMENT, jamais une frontière de sécurité** |
| `records[]` | Documents d'inventaire, repris **tels quels** |
| `rfidBackups` | *Facultatif.* Indexé par UID de puce ; présent uniquement pour les bobines TigerTag+ (certifiées) — le dump d'usine signé qui sert à restaurer la puce |

**Les `records[]` sont les documents d'inventaire Firestore, tels quels** —
exactement `users/{uid}/inventory/{spoolId}` tels que décrits dans le
[modèle de données canonique](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(à utiliser comme dictionnaire de champs). Trois nuances :

- **Les champs sont épars** — un champ n'est écrit que s'il est présent sur le
  document : `twin_tag_uid` seulement sur les jumeaux, `rfidBackup: true`
  seulement sur les TigerTag+, `id_product` seulement s'il est connu, etc.
- **Les champs d'URL sont sous contrôle d'un attaquant potentiel** — `LinkTDS`,
  `LinkMSDS`, `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` et `url_img*`
  sont assainis à l'import : tout schéma autre que http(s) est supprimé.
- **L'emplacement en rack voyage mais ne s'applique pas** — `rack`, `rack_id`,
  `level`, `position` peuvent figurer dans le fichier mais n'ont aucun sens à
  l'import (une bobine importée n'hérite pas du rack de l'exportateur).

### Champs obligatoires et facultatifs

Au **niveau du fichier** :

| Champ | Statut |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Obligatoire** — absent ou incohérent = fichier rejeté |
| `records[]`, non vide | **Obligatoire** — un fichier vide est rejeté |
| `exportedAt`, `exportedBy` | Informatif (`exportedBy` n'est qu'une aide à l'interface) |
| `rfidBackups` | Facultatif — présent uniquement lorsque des bobines TigerTag+ sont incluses |

Au **niveau de l'enregistrement** :

| Catégorie | Champs |
|---|---|
| **Obligatoires** | `uid` (`TigerData_<id>` ou UID de puce) · **`id_brand`** |
| Identité de base (présente sur tout enregistrement bien formé) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — résolus contre la base de référence partagée |
| Capacité | Normalisée à partir de `measure` + `id_unit` : **`measure_gr` en grammes pour les solides** (par ex. `measure: 1` + kg → `measure_gr: 1000`) et **`measure_ml` en millilitres pour les liquides** (résines). Les générateurs peuvent fournir `measure` + `id_unit` ; c'est la valeur normalisée qui fait foi une fois stockée |
| Facultatifs courants | champs de couleur (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, chaînes d'affichage (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Conditionnels | `twin_tag_uid` (jumeaux uniquement — réciproque à l'intérieur du fichier) · `rfidBackup: true` **plus** une entrée `rfidBackups` correspondante (TigerTag+ uniquement) · `id_product` (produits connus du catalogue uniquement) |
| Transportés mais ignorés à l'import | `rack`, `rack_id`, `level`, `position` |

Pour tout cas limite non traité ici, **l'importateur de Tiger Studio fait office
d'implémentation de référence** — les générateurs tiers doivent viser des
enregistrements qu'un Studio d'origine accepte.

Règles inscrites dans le format :

- **Deux conventions d'horodatage, et c'est voulu.** L'`exportedAt` racine est
  une **chaîne ISO 8601**. Les horodatages *à l'intérieur* de `records[]`
  (`updatedAt`, ainsi que les variantes héritées `updated_at` / `last_update`)
  sont des **nombres en millisecondes epoch** — les Timestamps Firestore sont
  convertis par le sérialiseur pour que le fichier se sérialise proprement. Ne
  « corrigez » pas l'un pour l'aligner sur l'autre : des fichiers en
  circulation portent déjà cette forme.
- **Les jumeaux sont atomiques.** Un matériau jumelé exporte toujours **les
  deux** faces — un matériau → deux enregistrements, reliés par
  `twin_tag_uid`. Un demi-jumeau n'est jamais produit.
- **Discipline des identifiants.** Seuls les identifiants sans puce
  `TigerData_<id>` peuvent apparaître ; un identifiant hérité `CLOUD_<id>` est
  refusé au moment de l'export.

## Type de média

Le type de média canonique est **`application/vnd.tigertag.ttag+json`** — il
compte là où un `.ttag` est **servi en http(s)** (le `Content-Type` qu'un bac à
sable web, un CDN ou l'hébergeur d'une collection de marque doit envoyer).
`application/json` est également accepté. Un fichier sur disque ne porte aucun
type MIME — il est identifié par son extension `.ttag` et, de façon décisive,
par son contenu : les importateurs **valident par le contenu**
(`format`/`kind`/`version`), jamais par l'en-tête MIME ni par la seule
extension de fichier.

## Disponibilité

L'export et l'import sont livrés dans **Tiger Studio v2.14.0+**. Le format est
conçu pour être portable ; d'autres surfaces pourront l'adopter avec le temps —
aujourd'hui, Studio en est l'implémentation de référence.

## Ce qu'un `.ttag` peut transporter

Les trois [niveaux de bobine](../concepts/universal-filament-identity.md)
s'exportent et s'importent :

| Niveau | Dans le fichier |
|---|---|
| **TigerData** (entièrement numérique, sans puce) | L'enregistrement lui-même |
| **TigerTag** (une puce écrite) | L'enregistrement lui-même |
| **TigerTag+** (puce certifiée) | L'enregistrement **plus** son dump d'usine signé dans `rfidBackups` |

## Export

- **Bobine seule** — depuis la boîte à outils de la fiche de la bobine → un
  fichier nommé `brand-material-color.ttag`.
- **Sélection multiple** — sélectionnez plusieurs bobines, bouton **Export** de
  la barre d'outils → un fichier nommé `tigertag-selection-<date>.ttag`.
- L'export n'est disponible que pour **l'inventaire de l'utilisateur lui-même**.

## Import — valider → prévisualiser → accepter

L'importateur accepte **plusieurs fichiers `.ttag` à la fois** : parcourez vos
fichiers, collez un lien http(s) ou faites un glisser-déposer n'importe où sur
la fenêtre.

1. **Valider.** Chaque fichier doit porter la paire `format`/`kind` et
   `version ≤ 1`. Un fichier qui n'est pas un `.ttag`, une version plus
   récente ou un fichier vide sont rejetés. Chaque **enregistrement** doit
   ensuite porter la charge utile complète de la puce — voir
   *Champs obligatoires* ci-dessous.
2. **Assainir.** Le contenu du fichier est une entrée non fiable : les champs
   d'URL non http(s) sont supprimés ; les valeurs de couleur, de poids et de TD
   sont ramenées dans leurs plages valides.
3. **Prévisualiser.** Chaque matériau apparaît dans un tableau de
   prévisualisation, avec une **case à cocher d'inclusion** par matériau.
4. **Accepter** selon l'un des deux modes — présuggéré d'après `exportedBy`,
   librement interchangeable :

|| **Restauration** | **Import** |
|---|---|---|
| Intention | Même compte / une véritable restauration | Adoption des matériaux de quelqu'un d'autre |
| Identifiants d'enregistrement | Conservés — écrits **tels quels** sous les identifiants d'origine | **Nouveaux** identifiants — chaque enregistrement devient une bobine `TigerData_` neuve et sans puce, appartenant à celui qui importe |
| Statut TigerTag+ | Conservé — chaque sauvegarde `rfidList` est restaurée | Perdu — la copie est sans puce, donc `id_product` est **vidé**, et c'est cela qui fait qu'elle n'est pas un TigerTag+ ; `id_tigertag` retiré et `rfidBackup:false` découlent de l'absence de puce ; les sauvegardes sont écartées (un dump signé est lié à une puce que celui qui importe ne possède pas) |
| Poids | Tel qu'enregistré | Remis à la capacité pleine |
| Jumeaux | Tels qu'enregistrés | `twin_tag_uid` réaffecté aux nouveaux identifiants |

### Champs obligatoires — un enregistrement doit pouvoir produire une puce

Un `.ttag` existe pour **créer des puces TigerTag / TigerTag+**. Un
enregistrement incapable d'en produire une n'est pas un enregistrement partiel,
c'est un enregistrement inutilisable — aussi, depuis Tiger Studio **2.15.0**,
l'importateur le refuse purement et simplement plutôt que d'importer une bobine
qui semble correcte et qui est silencieusement fausse.

Un enregistrement n'est accepté que s'il porte **`uid` plus ces 24 champs
numériques**, chacun présent et fini (`null` et `""` ne comptent **pas** comme
présents — attention, `Number(null)` vaut `0`) :

| Groupe | Champs |
|---|---|
| Identifiants d'identité | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Quantité | `measure` |
| Couleur | `color_r`, `color_g`, `color_b`, `color_a` |
| Charge utile propre au type | `data1` … `data7` |
| Horodatage | `timestamp` |

Auxquels s'ajoute **`id_tigertag`, mais seulement si l'enregistrement possède
une puce.** Ce champ désigne la version de la puce dans `id_version.json`, où
exactement quatre valeurs sont légales — `0` RFID Empty, `1542820452` TigerTag,
`1816240865` TigerTag Init, `3155151767` TigerTag+. Un enregistrement sans puce
(`uid` commençant par `TigerData_` ou par l'ancien `CLOUD_`) n'a pas de puce et
donc pas de version : il **ne doit pas porter le champ du tout** ; celui-ci est
écrit pour la première fois lorsqu'une vraie puce est programmée. N'inventez
jamais de valeur pour lui, et n'en résolvez jamais une sans avoir vérifié que
l'enregistrement possède une puce.

Tout le reste dans un enregistrement — noms, images, prix, notes, position en
rack — relève de l'**enrichissement** : agréable à transporter, jamais
obligatoire.

**Un matériau est atomique.** Une paire de jumeaux ne passe que si *ses deux*
enregistrements passent ; un jumeau à moitié valide est refusé en entier, car
importer une seule face d'une paire créerait une bobine dont la partenaire ne
pourra jamais être écrite.

**Les refus sont comptés et affichés, jamais silencieux.** La prévisualisation
indique combien de matériaux ont été écartés, de sorte qu'un mauvais export se
voit au lieu de perdre discrètement la moitié de son contenu. Les auteurs de
fichiers `.ttag` devraient valider par rapport à cette liste avant de livrer un
fichier à des utilisateurs.

## Exemple complet

Un export multi-sélection fidèle et anonymisé — un TigerData, une paire de
jumeaux (`twin_tag_uid` réciproque), un TigerTag+ dont le contenu de puce est sauvegardé :

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": 3, "container_weight": 215,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": 3, "container_weight": 215,
   "twin_tag_uid": "04F6E5D4C3B2A1",
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": 3, "container_weight": 215,
   "twin_tag_uid": "04A1B2C3D4E5F6",
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": 3, "container_weight": 215, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Lecture de l'exemple : le premier enregistrement est sans puce (un identifiant
`TigerData_`) ; les deux suivants forment une paire de jumeaux — même matériau,
`twin_tag_uid` réciproque, toujours exportés ensemble ; le dernier est un
TigerTag+ (`rfidBackup: true`) dont le dump d'usine signé se trouve dans
`rfidBackups`, sous l'UID de sa puce.

## Modèle de sécurité et de confiance

Un fichier `.ttag` est une **entrée non fiable**. Chaque enregistrement est
assaini à l'import (voir plus haut). `exportedBy` ne fait que présélectionner le
mode dans l'interface — la véritable frontière d'autorisation, ce sont les
**Firestore Security Rules**. Ne considérez jamais le contenu d'un fichier comme
faisant autorité en matière d'identité ou de propriété.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Identité universelle du filament](../concepts/universal-filament-identity.md), [Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md), [Vue d'ensemble pour les développeurs](./README.md)
