---
sourceHash: 14ef670faa1b8f4c915fb09a0664c6c58e82521e5a45f5c45b311261bab7edcf
sourcePath: docs/products/README.md
---

# Produits

L'écosystème TigerSystem, une page par produit.

**Voici les produits officiels** — conçus et publiés par TigerSystem.
« Officiel » signifie ici *c'est nous qui l'avons fait*, pas *il vous le faut* :
chacun est open source et forkable, et leurs noms (Tiger Studio, TigerHub,
TigerScale, TigerPOD, Tiger NFC Connect) ne sont **délibérément pas revendiqués
comme marques**. Seule la marque **TigerTag** est réservée, et uniquement pour
la puce.

N'importe qui peut construire et vendre une alternative — un lecteur, une
application, une balance, un système d'inventaire complet. Voir
[matériel tiers](../compatibility/third-party-hardware.md) et
[logiciels bâtis sur TigerTag](../developers/integrations.md) pour ce qui
existe déjà. Un produit tiers est **TigerTag Compatible** du simple fait qu'il
fonctionne ; il ne devient **TigerTag Certified** que si TigerSystem le lui
accorde ([politique de marque](../../TRADEMARK.md)).

> **Note :** chaque produit **destiné aux utilisateurs** ci-dessous — et tous
> ceux à venir — est une **preuve de concept** fonctionnelle. Leur seul but est
> de montrer le potentiel d'un protocole open source, standard, agnostique et
> multiplateforme, et d'inspirer ce que d'autres construiront avec. (La chaîne
> d'outils de programmation des puces côté usine, c'est une autre histoire :
> qualité industrielle, en production.) Voir
> [Un bac à sable, délibérément](../vision/why-tigersystem.md).

| Produit | Ce que c'est | Type |
|---|---|---|
| <img src="../assets/icons/tigerdata.svg" width="18" alt="" /> [TigerData](../concepts/universal-filament-identity.md) | La puce virtuelle — l'identité sous forme numérique, sans puce, évolutive à tout moment | Concept |
| <img src="../assets/icons/tigertag.svg" width="18" alt="" /> [TigerTag](./tigertag.md) | Puce RFID/NFC ouverte + standard d'identité de bobine | Matériel + spécification |
| <img src="../assets/icons/tigertag-plus.svg" width="18" alt="" /> [TigerTag+](./tigertag-plus.md) | Un TigerTag sauvegardé dans votre compte — restauration de l'état d'usine sur la puce d'origine | Matériel + service |
| <img src="../assets/icons/connect.svg" width="18" alt="" /> [Tiger NFC Connect](./tigertag-connect.md) | Application mobile (iOS/Android) — scanner, encoder, parcourir | Application |
| <img src="../assets/icons/studio.svg" width="18" alt="" /> [Tiger Studio](./tiger-studio.md) | Application de bureau — inventaire, racks, capteurs, imprimantes | Application |
| <img src="../assets/icons/tigerhub.svg" width="18" alt="" /> [TigerHub](./tigerhub.md) | La maison web de l'écosystème — vitrine, listes d'envies, amis et partage sur `tigersystem.io` | Web |
| <img src="../assets/icons/tigerpod.svg" width="18" alt="" /> [TigerPOD](./tigerpod.md) | Support de lecteur NFC double, imprimable en 3D | Matériel |
| <img src="../assets/icons/tigerscale.svg" width="18" alt="" /> [TigerScale](./tigerscale.md) | Balance à filament open source à base d'ESP32 | Matériel |
| <img src="../assets/icons/factory.svg" width="18" alt="" /> [TigerTag Factory & Manager](./factory-suite.md) | Outils industriels de programmation de puces et de base de données filaments pour les usines — **non publics**, de qualité production | Industriel |

```mermaid
flowchart LR
  TT[TigerTag / TigerTag+] --> CO[Tiger NFC Connect]
  TT --> POD[TigerPOD] --> ST[Tiger Studio]
  SC[TigerScale] --> FB[("Your TigerSystem account — Firebase")]
  CO <--> FB
  ST <--> FB
  FB --> HUB["TigerHub — tigersystem.io"]
```

---

**◀ Précédent :** [Flux de données](../architecture/data-flow.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [TigerTag](./tigertag.md)
