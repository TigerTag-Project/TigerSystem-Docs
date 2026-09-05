---
sourceHash: e06d887e6bc2f9aa8b9d93a89accadfc3384db4aaa31fb306ad3e4a4a67291c3
sourcePath: docs/products/tigerpod.md
---

# TigerPOD

## Objectif

**Le premier « lecteur CD » pour bobines de filament intelligentes.** TigerPOD
pose un scanner de bobines sur votre bureau — et c'est vous qui l'imprimez.
Un support imprimable en 3D, gratuit et open source, qui accueille deux lecteurs
NFC USB : posez une bobine, elle se présente dans Tiger Studio ; posez une puce
vierge, encodez-la. Aussi naturel que d'approcher un téléphone, mais mains
libres sur le bureau.

Pourquoi **deux** lecteurs ? Parce que chaque bobine porte
[**deux puces**, sur les faces opposées](../concepts/tigertag-chip.md) — le POD
atteint les deux en une seule passe : encoder les deux, vérifier les deux, ou
réparer l'une à partir de l'autre, sans repositionner la bobine.

## Où cela se situe

```mermaid
flowchart LR
  TAG["Spool / blank chip"] -- "placed on" --> POD["TigerPOD<br/>2× USB NFC readers"]
  POD -- "USB" --> ST["Tiger Studio"]
  ST -- "spool auto-opens · guided writes" --> YOU["You"]
```

## De quoi il est fait

Le STL, c'est la coque ; voici les pièces qui vont dedans. Rien n'est exclusif —
n'importe quel lecteur de la classe ACR122U et n'importe quel séparateur USB-C
conviennent — mais c'est la combinaison autour de laquelle la coque est dessinée :

| Pièce | Quantité | Ce que c'est |
|---|---|---|
| **TigerTag Player** | **2** | Le lecteur NFC USB — un appareil de la classe ACR122U. Un par face, pour atteindre les deux puces de la bobine en un seul passage. |
| **TigerTag Spliter** | 1 | USB-C vers 2× USB-A, pour que les deux lecteurs rejoignent l'ordinateur sur un seul port et puissent être programmés en parallèle. |
| **La coque imprimée** | 1 | Standard ou **Mini**, selon la place que vous voulez lui donner sur le bureau. |

> **Note :** les lecteurs et le séparateur sont vendus séparément ; la coque est
> un téléchargement gratuit. En assembler un soi-même ou en acheter un
> pré-assemblé donne exactement le même appareil.

## Caractéristiques

- Coque imprimable en 3D — **STL gratuit sur
 [MakerWorld](https://makerworld.com/en/models/1289152)**, en taille
 **Standard** et **Mini**.
- Accueille deux lecteurs USB de la classe ACR122U (stations de lecture et
 d'écriture).
- Prêt à l'emploi avec [Tiger Studio](./tiger-studio.md) : scanner une puce
 ouvre automatiquement la bobine correspondante ; le flux guidé de mise à jour
 des puces s'en sert pour des écritures vérifiées par UID.
- Sous licence **CC BY 4.0** — remixez et adaptez librement.

## Interactions

| Avec | Comment |
|---|---|
| Puces TigerTag | Lecture / encodage / vérification |
| Tiger Studio | Identification instantanée de la bobine, promotion et mise à jour de la puce |

## En images

<img src="../assets/tigerpod-grey.png" width="420" alt="Un TigerPOD gris portant une bobine de filament rouge" />

<img src="../assets/tigerpod-banner.png" width="100%" alt="Gamme de TigerPOD dans les couleurs de l'arc-en-ciel" />
<img src="../assets/tigerpod-in-studio.jpg" width="100%" alt="TigerPOD connecté à Tiger Studio" />

## Liens

- Dépôt : [TigerPOD](https://github.com/TigerTag-Project/TigerPOD)
- STL : [modèle MakerWorld 1289152](https://makerworld.com/en/models/1289152)

---

**◀ Précédent :** [TigerHub](./tigerhub.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [TigerScale](./tigerscale.md)

**Voir aussi :** [Le flux Seconde vie](../philosophy/second-life.md)
