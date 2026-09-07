---
sourceHash: 64b34d2f406da778544e6820ff66230f1ac8a92eedaa2d5a5a70337ce0a025e8
sourcePath: docs/concepts/tigertag-chip.md
---

# La puce TigerTag (format RFID/NFC)

## Couche physique

| Propriété | Valeur |
|---|---|
| Famille de puce | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Format recommandé | **autocollant rond de 25 mm** (d'autres formes fonctionnent) |
| Charge utile | charge utile NDEF de 144 octets — dimensionnée pour tenir dans la petite NTAG213 ; les puces plus grandes laissent de l'espace inutilisé |
| Puces officielles siglées | Produites en **NTAG215** — la mémoire supplémentaire maximise la réutilisation en fin de vie (objets NDEF standard), pour que la puce ne devienne jamais un déchet électronique |
| Authentification | Aucune — lisible ouvertement |
| Verrouillage en écriture | **Aucun** — les puces sont livrées déverrouillées ; l'utilisateur peut les réécrire, y compris pour migrer vers un tout autre protocole |
| Zone réservée | **64 octets** en fin de charge utile — pages `0x18`–`0x27`, laissant 80 octets de données. Sur un TigerTag standard, ils sont **libres pour les fonctions additionnelles de la communauté** ; sur un [TigerTag+](../products/tigertag-plus.md), ils portent la **signature d'origine**, 32 octets de `R` et 32 de `S` (disposition au niveau octet : [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Puces par bobine | **Deux**, placées sur les faces opposées |
| Lisible par | N'importe quel smartphone NFC, les lecteurs USB de classe ACR122U, [TigerPOD](../products/tigerpod.md) |

C'est délibérément l'inverse des tags constructeurs (Mifare Classic à clés
dérivées, secteurs AES, signatures RSA — voir
[compatibilité](../compatibility/README.md)) : une puce TigerTag ne cache rien.

Voyez la puce comme un **stockage à froid de longue durée** pour l'identité de
la bobine : les données vivent sur la puce elle-même, hors ligne, pendant des
années — sans serveur, sans compte, sans rien qui doive être entretenu. La
couche en ligne (base de données de référence, synchronisation cloud) ne fait
jamais qu'*ajouter* de la fraîcheur par-dessus.

## Pourquoi chaque bobine porte DEUX puces

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Une couronne de recharge de filament portant sa puce TigerTag ronde" />

Deux puces, sur les faces opposées de la bobine — cela paraît redondant, c'est
en réalité le détail le plus astucieux du format :

- **Les imprimantes partagent leurs lecteurs.** Une machine a en général **un
 lecteur RFID pour deux emplacements de bobine**, placé **entre les deux** —
 ou bien sur le flanc de l'imprimante, où il lit la face gauche ou la face
 droite selon l'emplacement occupé par votre bobine. Un AMS Bambu Lab a
 2 lecteurs pour 4 emplacements ; sur une Snapmaker, la bobine se place d'un
 côté ou de l'autre de l'imprimante. Avec une puce de chaque côté, **quel que
 soit l'emplacement, une puce fait toujours face au lecteur** — et vous
 n'avez jamais à charger la bobine dans un sens particulier.
- **Rien à chercher lors d'une lecture à la main.** Sur un
 [TigerPOD](../products/tigerpod.md) ou avec votre téléphone, vous n'avez
 jamais à deviner de quel côté est la puce : quel que soit le sens dans
 lequel vous saisissez la bobine, il y en a déjà une du bon côté pour ce que
 vous faites.
- **Lecture en place.** Une bobine montée sur un AMS Lite, sur le flanc d'une
 Elegoo Centauri Carbon ou d'une FlashForge se lit sans la démonter.
- **Liberté pour les intégrateurs.** Un fabricant de sécheur à filament place
 simplement le lecteur là où cela tombe bien — à gauche ou à droite pour un
 sécheur mono-bobine, entre les deux bobines pour un modèle double — et cela
 fonctionne à tous les coups.
- **Redondance.** Si une puce cesse de répondre, l'autre identifie toujours la
 bobine — et sert à réparer celle qui est hors service.
- **Récolte doublée.** En fin de vie, chaque kilo de filament imprimé vous
 laisse **deux puces NTAG réutilisables** pour vos projets DIY
 ([zéro déchet électronique](../philosophy/second-life.md)).

Quelques détails de mise en œuvre :

- Les deux puces sont **totalement indépendantes — chacune a son propre UID** ;
 il n'y a pas d'antenne partagée. Elles sont **écrites ensemble, en paire
 (Twin Tag)** et maintenues identiques pendant toute la vie de la bobine,
 jusqu'aux grammes restants — et toujours comptées comme **une seule** bobine.
- Sur les bobines d'usine, les puces sont portées par un **support** : une
 bande dont les deux extrémités se replient sur le mandrin en carton (une
 puce par extrémité), maintenue par un **adhésif 3M industriel
 (468MP / 200MP)** — l'opérateur décolle et colle, rien d'autre ne change sur
 la ligne. Le dessin du support est **public et imprimable chez soi**, et la
 même forme est vendue seule pour les
 [recharges](../philosophy/second-life.md), de sorte que la puce voyage avec
 le filament plutôt qu'avec la bobine.

<img src="../assets/carrier-bare.png" width="440" alt="Le support TigerTag nu — deux antennes NFC indépendantes, une à chaque extrémité" />

*Le support, nu : les deux antennes indépendantes sont bien visibles — une par
extrémité repliée, chacune avec son propre UID.*

### Comment les deux puces sont liées

Rien de central n'enregistre la paire. Elle se **déduit de ce que portent les
deux puces**, et le champ qui rend le lien délibéré plutôt que fortuit est
l'**horodatage**.

Les 4 octets de la page `0x0C` (offset `+32`) ont un double rôle : les
secondes écoulées depuis le 01/01/2000 GMT, *et* le **Twin Tag ID**. Deux
puces écrites dans la même session reçoivent exactement la même valeur — cette
seconde partagée est la clé d'appariement.

La résolution est d'une seconde : l'horodatage seul ne prouve donc rien, deux
bobines taguées dans la même seconde le porteraient aussi. Ce qui confirme la
paire, c'est que l'**identité descriptive concorde également** — les deux
puces décrivent une seule bobine, donc chaque champ qui décrit cette bobine
doit être identique sur les deux :

| Champ | Page | Offset |
|---|---|---|
| Twin Tag ID / horodatage | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

Ce qui discrimine réellement dépend de la variante :

- Sur un **[TigerTag+](../products/tigertag-plus.md)**, `ID Product` est un
 véritable identifiant catalogue. Même horodatage **et** même identifiant
 produit suffisent à conclure à une paire avec une quasi-certitude.
- Sur un **TigerTag standard**, `ID Product` vaut la constante `0xFFFFFFFF`
 sur toutes les puces existantes : il ne discrimine rien du tout. Ce sont la
 marque, la matière, les trois couleurs et les deux aspects qui font ce
 travail — avec l'horodatage.

Deux conséquences qui méritent d'être dites franchement :

- **Écrire les puces en deux passes séparées ne produit pas une paire.** Elles
 reçoivent deux horodatages différents : rien ne les lie et l'écosystème
 compte deux bobines. C'est pour cela que l'application téléphone écrit les
 deux dans une seule session *Dual NFC*, et pour cela que le
 [TigerPOD](../products/tigerpod.md) tient deux lecteurs face à face.
- **La signature est la seule chose qui diffère légitimement.** Sur un
 TigerTag+, elle signe `SHA-256(uid ‖ id_tigertag ‖ id_product)`, et chaque
 puce a son propre UID — les deux puces d'une paire portent donc deux
 signatures *différentes*, par construction. Des signatures identiques
 signaleraient une copie, pas une jumelle.

Les offsets ci-dessus sont cités depuis le
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
canonique (§2.9), qui reste la spécification.

### Le support refill, en pratique

Deux détails qui surprennent :

- **Le collage est facultatif.** L'adhésif 3M est là pour tenir le support
 pendant que vous manipulez et stockez la recharge. Une fois la recharge
 montée sur la masterspool, le support est **coincé entre la masterspool et
 le noyau en carton** et ne peut plus bouger — la colle n'a plus rien à
 faire.
- **Il ressort, et il se réutilise.** Quand la recharge est terminée,
 récupérez le support avec ses deux puces, effacez-les depuis
 [Tiger NFC Connect](../products/tigertag-connect.md) ou
 [Tiger Studio](../products/tiger-studio.md), et resservez-vous-en — sur une
 autre bobine, ou pour tout autre projet NDEF. Un filament vendu avec un
 TigerTag Refill vous laisse le support, pas un déchet
 ([seconde vie](../philosophy/second-life.md)).

Où s'en procurer : voir [acheter les puces](../products/tigertag.md).

## Encodée à l'usine, ou vierge entre vos mains

La même puce vous parvient de deux façons, et la différence compte plus que
tout le reste de cette page :

| | D'où elle vient | Ce qu'elle contient |
|---|---|---|
| **Pré-encodée** | intégrée sur la ligne de production, dans du filament d'une marque partenaire | l'identité complète de la bobine, prête à lire |
| **Vierge** | achetée seule — siglée TigerTag, ou n'importe quelle puce NTAG de n'importe quelle provenance | rien encore ; vous l'écrivez une fois, en une minute environ |

Les puces vendues séparément sont livrées **vierges**, logo ou pas. Ce n'est
pas une limitation : une puce non écrite est ce qui rend possible la
[seconde vie](../philosophy/second-life.md), et c'est pourquoi le protocole ne
dépend jamais d'un achat.

## Charge utile

La charge utile de 144 octets encode l'[identité universelle](./universal-filament-identity.md)
de la bobine — marque, matière, aspect/couleur, type, diamètre, réglages
d'impression — sous forme d'identifiants résolus dans la base de données de
référence partagée.

> **TODO :** disposition des champs au niveau octet. La spécification canonique
> se trouve dans [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) ;
> cette page devra la résumer (décalages, versionnage, tables d'identifiants)
> une fois qu'elle y sera figée. **Ne jamais documenter ici des décalages de mémoire.**

## Lecture et écriture

| Outil | Lecture | Écriture |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (NFC mobile) | approchez la puce — la bobine s'ouvre sur le téléphone | appuyez sur **Make** puis approchez à nouveau ; **Dual NFC** écrit les deux puces d'une bobine en une session |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | ouvre automatiquement la bobine au scan | écriture guidée, avec vérification de l'UID |
| [SDK JS](../developers/sdks.md) (`tigertag` sur npm) | décode la charge utile de 144 octets | encode une nouvelle charge utile |
| [SDK Python](../developers/sdks.md) | décode la charge utile ; `tigertag[verify]` vérifie aussi la signature | encode une nouvelle charge utile |

Les deux applications parlent au lecteur ; les SDK, non. Un SDK décode et
encode la **charge utile** — le matériel NFC, c'est vous qui l'apportez.

## Versionnage

La charge utile porte une version de format (table de référence `id_version`),
pour que les lecteurs restent compatibles avec les puces plus anciennes.

---

**◀ Précédent :** [Identité universelle du filament](./universal-filament-identity.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Inventaire et synchronisation cloud](./inventory-and-cloud-sync.md)

**Voir aussi :** [TigerTag](../products/tigertag.md), [SDK](../developers/sdks.md), [Compatibilité](../compatibility/README.md)
