---
sourceHash: 5c7088ba93ee695bd1eb05ed7d0b784bebbd805ea4a6c6110737b8f81fe57177
sourcePath: docs/products/tigertag-plus.md
---

# TigerTag+

## Objectif

**Le `+` veut dire identifié.** Un TigerTag+ est un TigerTag dont l'identité
porte un **identifiant produit issu du catalogue officiel** — non pas des
valeurs saisies par quelqu'un, mais le produit exact : marque, couleur,
matériau, températures, diamètre, SKU, EAN, directement à la source. En plus de
cela, il peut porter des **métadonnées d'enrichissement optionnelles**,
servies par l'API Web et améliorables après l'écriture de la puce.

La puce elle-même reste **100 % hors ligne**. Tout ce qu'il faut pour imprimer
s'y trouve, exactement comme sur un TigerTag standard — l'identifiant de
catalogue ajoute la possibilité de consulter des données plus riches et plus
fraîches *quand il se trouve que vous êtes en ligne*, et n'enlève rien quand
vous ne l'êtes pas. Un TigerTag+ lu en mode avion se comporte comme n'importe
quel autre TigerTag.

Et *« en ligne »* n'est pas non plus une exigence. La référence entière est
publiée en un seul fichier — tous les identifiants de tous les filaments de la
base, libres de copie et de mise en miroir — de sorte qu'un lecteur qui le
détient résout un identifiant catalogue sans aucun réseau. Voir
[l'API Web](../developers/web-api.md).

C'est le même `+` que dans [TigerData+](../concepts/universal-filament-identity.md) :
dans les deux cas, il veut dire *cette identité est un vrai produit du
catalogue*, et dans aucun des deux il ne veut dire *certifié*.

> **Note de nommage :** anciennement vendu sous le nom de **« TigerTag Pro »** —
> le nom est désormais **TigerTag+**.

## Ce que le `+` ajoute

| | TigerTag | TigerTag+ |
|---|---|---|
| Données d'impression, **sur la puce** | ✅ | ✅ |
| Fonctionne entièrement hors ligne | ✅ | ✅ |
| Identifiant produit du catalogue, **sur la puce** | — | ✅ |
| Métadonnées d'enrichissement, **via l'API Web, optionnel** | — | ✅ |
| Qui peut en produire un | tout le monde | tout le monde |

Les métadonnées d'enrichissement sont la seule ligne qui ne vit **pas** sur la
puce. Elles sont consultées dans le catalogue quand il se trouve que vous êtes
en ligne, et elles peuvent s'améliorer après l'écriture de la puce — ce qui est
précisément pourquoi elles ne peuvent jamais être quelque chose dont la puce a
besoin. Tout ce dont l'imprimante a besoin est sur la puce, et c'est ce qui
garde chaque palier 100 % hors ligne.

## La variante signée

Un TigerTag+ qui porte en plus une signature cryptographique est un
**[TigerTag+ Certified](./tigertag-plus-certified.md)** — le palier capable de
prouver l'origine d'une bobine, et le seul réservé aux fabricants certifiés.
Vérifier une signature reste gratuit et hors ligne pour tout le monde.

## Où cela se situe

```mermaid
flowchart LR
  CAT[("Official catalogue")] -- "product id + metadata" --> TTP["TigerTag+"]
  TTP -- "signed by a certified manufacturer" --> CERT["TigerTag+ Certified"]
  CERT -- "verify offline, public key" --> ANY["Any reader, any phone"]
  TTP -- "read offline" --> ANY
```

## Sauvegarder une puce — une fonctionnalité distincte

Tiger Studio peut **sauvegarder le contenu exact d'une puce** dans votre
compte, indexé sur son UID physique, et plus tard la reprogrammer dans cet
état. C'est utile et sans rapport avec le `+` : cela s'applique à toute puce
que vous pouvez scanner, et avoir une sauvegarde ne fait pas d'une puce un
TigerTag+.

- **Restauration de l'état d'usine** : si une puce est réécrite ou corrompue
 par accident, remettez-la exactement dans l'état où elle était — signature
 comprise, si elle en avait une.
- **La même puce uniquement** : la restauration n'est valable que sur la puce
 d'origine, car la sauvegarde est liée à son UID. Une protection pour *cette*
 puce, jamais un moyen de cloner.
- **Preuve de possession** : un scan qui correspond à la sauvegarde montre que
 la puce d'origine est physiquement entre vos mains.

> **Note :** créer une sauvegarde nécessite actuellement **Tiger Studio + un
> lecteur USB (TigerPOD / ACR122U)** ; la prise en charge mobile est prévue.

## Interactions

| Avec | Comment |
|---|---|
| Tiger Studio + TigerPOD/ACR122U | Lit et vérifie les signatures ; crée et restaure les sauvegardes de puces |
| Tiger NFC Connect | Lit et vérifie ; prise en charge de la sauvegarde à venir |
| SDK | `tigertag[verify]` vérifie une signature hors ligne, en Python ou en JS |
| Firebase (base de données des comptes) | Contient le catalogue, les métadonnées d'enrichissement et les sauvegardes de puces par compte |

## Liens

- Puces officielles : **[tigertag.io](https://tigertag.io)** (boutique)

---

**◀ Précédent :** [TigerTag](./tigertag.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [TigerTag+ Certified](./tigertag-plus-certified.md)

**Voir aussi :** [Identité universelle du filament](../concepts/universal-filament-identity.md), [La puce TigerTag](../concepts/tigertag-chip.md), [Documentation développeur](../developers/README.md)
