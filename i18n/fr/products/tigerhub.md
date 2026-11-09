---
sourceHash: d45e89c2c7d78d29cde40e360b79944fe16e2d6691bd0411d0ea79299082efde
sourcePath: docs/products/tigerhub.md
---

# TigerHub

## Objectif

**TigerHub est la maison de l'écosystème sur le web** — le site
**[tigersystem.io](https://tigersystem.io)**. Il présente le bac à sable
TigerSystem et ce que le protocole ouvert TigerTag rend possible, et il héberge
le **volet social** du bac à sable : partager une liste de souhaits, inviter
quelqu'un à devenir ami, publier une liste en lecture seule que n'importe qui
peut ouvrir dans un navigateur.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — la maison web de TigerSystem, avec l'application mobile en train de scanner devant Tiger Studio" />

## Où cela se situe

```mermaid
flowchart TB
  ST["Tiger Studio"] & CO["Connect"] <--> FB[("Your TigerSystem account<br/>(Firebase — one shared database)")]
  FB -- "published lists · invites" --> HUB["TigerHub<br/>tigersystem.io"]
  HUB --> VIS["Anyone with the link<br/>plain browser, no account"]
```

## Fonctionnalités — toutes en service aujourd'hui

- **Vitrine de l'écosystème** — la page d'accueil raconte toute l'histoire :
 comment cela fonctionne, les six marques d'imprimantes, les composants et les
 trois niveaux (TigerData — suivi purement logiciel · TigerTag — la puce hors
 ligne · TigerTag+ — authenticité vérifiée).
- **Votre compte sur le web** (`/account`) — connectez-vous à votre compte
 TigerSystem depuis un navigateur.
- **Listes de souhaits** — publiques ou réservées aux amis, les deux déployées.
- **Codes d'ami et invitations** — ajoutez-vous mutuellement comme amis depuis
 le web.
- **Liens de listes publiques** — partagez un inventaire ou une liste de
 souhaits en lecture seule sous la forme
 `https://tigersystem.io/list/<token>` ; le visiteur n'a besoin ni
 d'application ni de compte.
- **Catalogue de matières et base de référence** (`/materials`, `/database`) —
 parcourez le catalogue partagé auquel toutes les applications se réfèrent.
- **Imprimantes et fonctionnalités** (`/printers`, `/features`) — ce qui
 fonctionne avec quoi.
- **Modèles 3D** (`/models`) — des modèles imprimables (TigerPOD et compagnie).
- **Pour les fabricants, les développeurs et la presse** (`/manufacturers`,
 `/developers`, `/press`) — le discours B2B, les points d'entrée pour
 l'intégration, les ressources média.
- **Goodies** (`/goodies`) — la casquette et le polo officiels. En acheter est
 l'une des façons de [soutenir le projet](../support.md).

## Un lien de liste publique, en pratique

Un lien de liste publique a la forme `https://tigersystem.io/list/<token>`.
Trois choses à savoir avant d'en coller un quelque part :

- **Le token est toute la clé.** Quiconque détient le lien ouvre la liste —
  sans compte, sans application, sans rien à prouver. Traitez-le comme un mot
  de passe que vous avez choisi de partager : parfait pour un forum ou un ami,
  pas pour une liste que vous n'aimeriez pas voir recopiée plus loin.
- **Il se crée et se retire depuis les applications, pas depuis le site.**
  Tiger Studio et Tiger NFC Connect génèrent et révoquent les liens de partage
  (voir *Interactions* ci-dessous) ; TigerHub ne fait qu'afficher ce qu'elles
  publient. Révoquer, c'est ainsi qu'on retire une liste ; la republier ensuite
  produit un **nouveau** token, si bien qu'un lien distribué auparavant n'en
  est pas ressuscité.
- **En lecture seule, et cette liste seulement.** Le visiteur voit la liste
  que vous avez publiée et rien d'autre de votre compte. Les listes de souhaits
  se partagent de la même façon.

Un lien est l'une des deux façons de partager ; l'autre, c'est un ami :

| | Lien de liste publique | Ami |
|---|---|---|
| Qui la voit | quiconque a le lien | une personne que vous avez acceptée |
| Compte nécessaire | non | oui |
| Comment | générer un lien dans les applications | échanger des codes de découverte |
| Annuler | révoquer le lien | retirer l'ami |

La moitié « ami » n'est résumée ici que pour tenir à côté du lien ; les règles
de demande et de retrait, et leur application côté serveur, appartiennent à
[Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md).

## TigerHub n'est pas la base de données

Les comptes utilisateurs et les données derrière toutes les applications vivent
dans **Firebase, tout simplement** (Auth + Firestore) — une infrastructure
délibérément sans marque : **une seule base de données partagée, en un seul
endroit**, pour que Tiger Studio, Tiger NFC Connect, TigerScale et le compte
TigerSystem interopèrent tous sur les mêmes données. TigerHub est la **surface
web** bâtie par-dessus. Voir
[Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md).

## Interactions

| Avec | Comment |
|---|---|
| Tiger Studio / Connect | Générer et révoquer des liens de partage, envoyer des invitations d'ami |
| Firebase (base de données des comptes) | Source des données publiées |
| Visiteurs | Simple navigateur, aucun compte nécessaire |

---

**◀ Précédent :** [Tiger Studio](./tiger-studio.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [TigerPOD](./tigerpod.md)

**Voir aussi :** [Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md), [Architecture](../architecture/overview.md)
