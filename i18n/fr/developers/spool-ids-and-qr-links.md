---
sourceHash: 73e5da519e66c5bddb6dbe07376acc5dcebd66390c3030e7eacaa5936907230f
sourcePath: docs/developers/spool-ids-and-qr-links.md
---

# Identifiants de bobine et liens QR

> **Ratifié le 2026-11-05 — pas encore implémenté.** Les applications
> s'appuient sur ce contrat. Les points encore ouverts sont listés à la fin ;
> en trancher un ne change que ce qu'il nomme. Les sections marquées
> **Proposé** ne sont pas encore ratifiées : ne vous appuyez pas dessus avant.

Les règles que suit chaque application TigerSystem :

1. comment une **bobine sans puce** (TigerData / TigerData+) reçoit son
   identifiant ;
2. comment une bobine **garde son lien** quand elle reçoit une puce ;
3. comment l'identifiant d'une bobine est écrit dans le **QR code** d'une
   étiquette imprimée, puis relu ;
4. comment une application **appelle une bobine avec des valeurs** (un poids,
   une note) par un lien ;
5. **(proposé)** comment un **produit** a son propre lien ;
6. **(proposé)** comment un lien répond en **JSON** ou en **fichier `.ttag`**.

## 1. Identifiants de bobine

Une bobine est un document de l'inventaire du compte,
`users/{uid}/inventory/{spoolId}`. L'identifiant du document **est**
l'identifiant de la bobine : un compte ne peut pas contenir deux bobines avec
le même identifiant.

| Bobine | Identifiant | Exemple |
|---|---|---|
| Avec puce (TigerTag / TigerTag+) | l'UID NFC de la puce, en hexadécimal majuscule, 14 caractères (l'UID de 7 octets d'une NTAG) | `04AB12CD3E4F80` |
| Sans puce, créée à partir de maintenant | `TigerData_` + l'heure en **millisecondes** (13 chiffres) + un nombre au hasard **0000–9999** (toujours 4 chiffres) | `TigerData_17623456789014213` |
| Sans puce, créée avant ce contrat | `TigerData_` + 10 chiffres au hasard | `TigerData_4480517985` |
| Sans puce, ancien préfixe | `CLOUD_` + 10 chiffres au hasard | `CLOUD_4480517985` |
| Ancien décimal (ancienne application Android) | l'UID écrit en décimal, en cours de migration vers l'hexadécimal | `1234567890123456` |

Ce contrat ne **réécrit jamais** un identifiant déjà créé. Les lecteurs ne
testent que le préfixe (`TigerData_` / `CLOUD_` → sans puce) ; aucun ne dépend
du nombre de chiffres. L'identifiant n'est qu'un identifiant : n'en déduisez
jamais une date de création. Un UID de 4 octets (une puce propriétaire liée à
une bobine) n'est jamais le nom d'un document d'inventaire : il n'apparaît
donc jamais dans un lien.

### Créer un identifiant sans puce

Chaque application qui crée des bobines sans puce (Tiger Studio aujourd'hui,
l'application mobile plus tard) crée l'identifiant de la même façon :

1. **Composer** `TigerData_<Date.now()><quatre chiffres au hasard>`.
2. **Vérification locale** — si l'identifiant est déjà dans l'inventaire que
   tient l'application (la copie de l'écoute en direct, cache hors ligne
   compris) ou dans son `uidMigrationMap`, en composer un autre. Cela
   fonctionne hors ligne.
3. **Écrire**
   - **en ligne :** dans une transaction qui lit d'abord le document et
     échoue s'il existe ; en cas d'échec, revenir à l'étape 1 ;
   - **hors ligne :** une écriture simple, mise en attente par Firestore
     jusqu'au retour du réseau. Les étapes 1 et 2 sont alors la seule
     protection.

Un simple `set()` sur un identifiant qui existe déjà **écrase** la bobine qui
s'y trouve, sans prévenir. C'est ce qu'empêche l'étape 3.

Les quatre chiffres au hasard rendent aussi un nouvel identifiant sans puce
pratiquement unique **sur tous les comptes** (environ une collision tous les
600 ans à un million de bobines sans puce par an) : un serveur pourra donc plus
tard résoudre un lien pour quelqu'un d'autre que le propriétaire, sans changer
aucune étiquette imprimée.

## 2. Garder le lien quand une bobine reçoit une puce

Programmer une puce sur une bobine sans puce déplace la bobine vers l'UID de la
puce. En **un seul lot d'écritures** :

1. écrire la bobine sous l'UID de la puce (et l'UID jumeau, pour une paire
   jumelle) ;
2. supprimer le document `TigerData_…` ;
3. écrire la redirection `users/{uid}/uidMigrationMap/{ancien identifiant}` →
   `{ hex_uid, migrated_at }`.

Le lot fait que les trois se produisent ensemble ou pas du tout. La
redirection vit dans `uidMigrationMap` (la collection qui fait déjà
correspondre les anciens identifiants décimaux à l'hexadécimal), jamais sous
forme de document vide dans l'inventaire : tout ce qui lit l'inventaire compte
un document comme une bobine.

## 3. Liens QR

Une étiquette de bobine imprimée porte un QR code contenant un lien vers la
bobine, **et rien d'autre** (ni poids, ni note — une valeur imprimée devient
fausse) :

```
HTTPS://QR.TIGERTAG.IO/<id>
```

Rien n'est imprimé en clair à côté du code : ni identifiant, ni lien. Le QR
code est le chemin vers la bobine.

`<id>` est l'identifiant de la bobine **sans son préfixe** :

| Bobine | Lien |
|---|---|
| Avec puce | `HTTPS://QR.TIGERTAG.IO/04AB12CD3E4F80` |
| Sans puce (nouvelle) | `HTTPS://QR.TIGERTAG.IO/17623456789014213` |
| Sans puce (avant ce contrat) | `HTTPS://QR.TIGERTAG.IO/4480517985` |
| `CLOUD_` | **pas de lien QR** — l'étiquette est imprimée sans QR code |
| Ancien décimal | **pas de lien QR** — migrer d'abord la bobine vers l'hexadécimal |

### Encodage

- Tout le lien est en **majuscules**. Seuls les chiffres, les lettres
  majuscules et ` $%*+-./:` tiennent dans le mode **alphanumérique** du QR
  code, qui garde le code petit ; une seule minuscule ou un `_` le fait passer
  en mode octet. Le schéma et le nom de domaine ne tiennent pas compte de la
  casse, et les UID sont déjà en hexadécimal majuscule.
- Segments, avec le mode donné explicitement (les générateurs utilisent le mode
  octet par défaut) :
  - identifiant sans puce (que des chiffres) : `HTTPS://QR.TIGERTAG.IO/` en
    mode **alphanumérique**, puis les chiffres en mode **numérique** ;
  - UID : tout le lien en **un seul segment alphanumérique** (l'en-tête d'un
    second segment coûterait une taille).
- Correction d'erreur **M** (15 %) : les étiquettes se rayent et se plient.
- Résultat : **25 × 25 modules** pour toute bobine. Dessinez chaque module sur
  un nombre entier de points d'impression, avec la marge standard de 4 modules.

### Relire un lien

Les lecteurs extraient l'identifiant du lien **hors ligne** : une application
qui scanne une étiquette n'a jamais besoin du site. Ils lisent le chemin sans
tenir compte de la casse, ignorent un `/` final, et le résolvent par sa forme :

| Chemin | Identifiant de bobine |
|---|---|
| 17 chiffres | `TigerData_<17 chiffres>` |
| 10 chiffres | `TigerData_<10 chiffres>` |
| 14 caractères hexadécimaux | l'UID, en majuscules |
| 13 caractères hexadécimaux commençant par `4` | un UID NTAG tronqué : `0` + les 13 caractères ([règle de réparation](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `P/` + 8 caractères hexadécimaux | **(proposé)** un produit — [section 5](#5-liens-produit-proposé) |

Une fin en `.JSON` ou `.TTAG` demande la réponse pour les outils — **(proposé)**, [section 6](#6-réponses-json-et-ttag-proposé).

Les applications **écrivent** la forme courte ci-dessus, mais les lecteurs
**acceptent aussi la forme longue** : le préfixe `TigerData` dans n'importe
quelle casse, suivi de `_` ou `-`, puis les 17 ou 10 chiffres —
`TigerData_17623456789014213`, `TigerData-17623456789014213`,
`TIGERDATA-17623456789014213`, `tigerdata_4480517985` mènent tous à la même
bobine. Un lien tapé ou partagé à la main continue de fonctionner. Le préfixe
`CLOUD` n'est accepté sous aucune forme.

Un UID peut ne contenir que des chiffres, mais il fait 14 caractères, jamais 17
ni 10 : la longueur tranche toujours. Aucun ancien identifiant décimal n'arrive
à un lecteur, puisqu'aucun n'est jamais imprimé. Toute **autre forme** est une
étiquette d'une version plus récente : le lecteur le dit (« mettez
l'application à jour ») au lieu d'échouer. Chaque autre type de chose a son
propre dossier, une lettre et un `/` (`P/` pour un produit, plus tard `R/` pour
un rack) : il ne peut jamais entrer en conflit avec les liens de bobine déjà
imprimés.

### Retrouver la bobine

1. Chercher l'identifiant **dans l'inventaire de la personne connectée**.
2. Absent → le chercher dans son `uidMigrationMap` et suivre la redirection.
3. Une paire jumelle a une seule étiquette, avec l'UID principal ; l'un ou
   l'autre UID ouvre la bobine.
4. Une bobine supprimée (`deleted: true`) s'ouvre comme « supprimée », pas
   comme une erreur.

5. **(proposé)** Toute autre personne (non connectée, ou pas autorisée à lire
   la bobine) reçoit le **produit** de la bobine, jamais la bobine : le serveur
   retrouve la bobine par son identifiant sur tous les comptes (un index sur
   l'identifiant de bobine), lit son `id_product` et répond avec la page
   produit de la [section 5](#5-liens-produit-proposé). Pas de produit, pas de
   correspondance, ou le même identifiant dans deux comptes avec deux produits
   différents → aucun produit n'est montré. La recherche ne tourne que pour ces
   scans : son coût suit ces scans, pas le nombre de comptes.

**Confidentialité :** connaître un identifiant ne montre jamais une bobine. Une
bobine n'est montrée qu'à quelqu'un que les règles Firestore autorisent déjà à
la lire (le propriétaire, un ami accepté, un inventaire public). Les
identifiants contiennent une heure et peuvent se deviner ; cela ne doit jamais
compter. Le produit d'une bobine n'est pas privé : il est imprimé sur
l'étiquette, et une puce TigerTag+ le porte en clair pour tout téléphone NFC.
Le poids, la note, le rack et le propriétaire ne sortent jamais.

## 4. Appeler une bobine avec des valeurs

Une application peut construire un lien qui ouvre une bobine **et propose des
valeurs**, avec des paramètres classiques (ces liens ne sont jamais imprimés :
la lisibilité l'emporte sur la taille du QR code) :

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Paramètres

| Paramètre | Valeur | Limite |
|---|---|---|
| `weight` | poids net de filament, en grammes | nombre entier, de 0 à la capacité de la bobine |
| `note` | la note de la bobine (le champ `message`) | texte brut, 28 octets UTF-8 au plus (l'emplacement de la puce) |

Les noms ne tiennent pas compte de la casse. Un paramètre inconnu est ignoré,
jamais une erreur. Une valeur hors limite est refusée. Les nouveaux paramètres
sont ajoutés à ce tableau, jamais inventés par une seule application.

### Qui peut les appliquer

| Situation | Ce qui se passe |
|---|---|
| Non connecté | Valeurs **refusées**. Le lien propose de se connecter, puis ouvre la bobine sans elles. |
| Connecté, pas le propriétaire (bobine d'un ami comprise) | Valeurs **refusées**. La bobine s'ouvre si les règles le permettent. |
| Connecté, le propriétaire | La bobine s'ouvre avec les valeurs **pré-remplies**, et **un geste** les enregistre (« Mettre à jour : 640 g »). |

Un lien n'écrit jamais tout seul : n'importe qui peut en fabriquer un et
l'envoyer, et être connecté ne prouve pas que la personne voulait l'appliquer.
Une application qui doit écrire sans confirmation (une balance qui met le poids
à jour en continu, une intégration) n'utilise pas de lien : elle écrit par le
compte de l'utilisateur, sous les règles Firestore
([guide d'intégration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Liens produit (proposé)

Un produit — un filament du catalogue, quel que soit le propriétaire d'une
bobine de ce filament — a son propre lien, pour un emballage, un rayon de
magasin, un showroom ou un catalogue imprimé :

```
HTTPS://QR.TIGERTAG.IO/P/<id_product>
```

- `<id_product>` est écrit en **hexadécimal, toujours sur 8 caractères**, en
  majuscules, complété par des zéros : les 4 octets tels qu'ils sont sur la
  puce, pour qu'un firmware ou un lecteur NFC construise le lien sans
  conversion. Exemple : le produit `2855882328` →
  `HTTPS://QR.TIGERTAG.IO/P/AA394E58`, **25 × 25** modules.
- La forme décimale reste là où les gens voient le numéro — le catalogue
  (`tigersystem.io/<lang>/catalog/2855882328`), le texte imprimé sous un QR
  code, un code-barres Code 128 — et n'entre jamais dans un lien
  `qr.tigertag.io`.
- `P/00000000` et `P/FFFFFFFF` signifient « pas de produit » : jamais
  imprimés, réponse `404`.
- Une étiquette de bobine ne répète jamais son produit : le lien de la bobine y
  mène déjà ([section 3](#retrouver-la-bobine)).

### La page de scan

`P/…` ouvre une page faite pour un téléphone juste après un scan, pas la page
du catalogue :

1. la photo et la pastille de couleur, en grand ; marque, matière, nom de la
   couleur ;
2. les réglages d'impression en grandes tuiles : buse, plateau, séchage
   (température et durée), densité, diamètre ;
3. les documents (TDS, MSDS, RoHS, contact alimentaire) et la vidéo ;
4. où l'acheter ;
5. non connecté → « Créer mon inventaire » ; connecté → « Ajouter à mon
   inventaire » (une TigerData+) et « Ajouter aux favoris » ;
6. « Voir dans le catalogue », vers la page complète.

## 6. Réponses JSON et .TTAG (proposé)

Un lien qui finit par `.JSON` (dans n'importe quelle casse) — ou envoyé avec
`Accept: application/json` — répond en JSON au lieu d'une page. Un lien qui
finit par `.TTAG` répond avec le même enregistrement sous forme de
[fichier `.ttag`](./ttag-format.md) à télécharger
(`Content-Disposition: attachment`). Ce sont des adresses pour les outils,
jamais imprimées.

| Lien | Non connecté | Connecté (`Authorization: Bearer <jeton d'identité Firebase>`) |
|---|---|---|
| `…/P/AA394E58.JSON` | la fiche produit | pareil |
| `…/04AB12CD3E4F80.JSON` | `401` — aucune donnée de bobine | la bobine, si les règles autorisent le compte à la lire |
| `…/P/AA394E58.TTAG` | le produit en fichier `.ttag` | pareil |
| `…/04AB12CD3E4F80.TTAG` | `401` | la bobine en fichier `.ttag` |

- **Bobine :** un [fichier `.ttag`](./ttag-format.md) contenant ce seul
  enregistrement, le document d'inventaire tel que Firestore le stocke. Il
  contient `id_product` ; un outil qui veut le produit appelle ensuite
  `…/P/<id_product>.JSON`.
- **Produit :** la fiche du catalogue telle que l'API produit la renvoie, dans
  la langue de `?lang=` (anglais par défaut). Mise en cache sur le serveur et
  autorisée depuis n'importe quel site.
- Une réponse de bobine n'est jamais mise en cache : elle dépend de qui
  demande.
- Ouvert dans Tiger Studio, le `.ttag` d'une bobine s'importe en mode
  **Restaurer** (la bobine telle qu'elle était, puce et sauvegarde comprises) ;
  celui d'un produit en mode **Importer**, comme une nouvelle TigerData+ avec un
  identifiant neuf.
- Une requête JSON ou `.TTAG` n'écrit jamais : les valeurs de lien
  (`?weight=`, `?note=`) y sont ignorées.

## Points ouverts

- **Schéma en majuscules.** `HTTPS://` en majuscules est reconnu comme un lien
  par l'appareil photo de l'iPhone (testé le 2026-11-05, liens avec et sans
  puce). Reste à tester : Google Lens, l'appareil photo Samsung et une
  application de scan basique. Si l'un échoue, le lien passe en minuscules
  (`https://qr.tigertag.io/` en mode octet + l'identifiant), ce qui coûte une
  taille (29 × 29).
- **Liens d'application.** iOS (`apple-app-site-association`) et Android
  (filtres d'intention) comparent les chemins en tenant compte de la casse par
  défaut : l'application mobile doit déclarer une correspondance insensible à
  la casse (iOS) et toutes les formes (Android).
- **Domaine.** `qr.tigertag.io` est imprimé pour toujours : renouveler
  `tigertag.io` sur une longue durée.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Identité universelle du filament](../concepts/universal-filament-identity.md), [Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md), [Vue d'ensemble pour les développeurs](./README.md)
