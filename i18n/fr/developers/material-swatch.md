---
sourceHash: 841c78efba4f139834abf5833c5d38d1717451cc07f82d9e8110390471c78415
sourcePath: docs/developers/material-swatch.md
---

# La pastille de matière — la convention officielle

La couleur d'une matière est stockée sous forme de données, pas d'image. La
**pastille** est le dessin de ces données : la forme colorée qui représente la
matière dans une liste, sur une carte, dans un emplacement de rack, à côté de
son nom. Cette page est la **convention officielle TigerSystem** pour la
produire, afin que la même matière affiche la même pastille partout — dans
Tiger Studio, dans l'application mobile, sur le web, dans votre propre
intégration.

**« Matière », et non « bobine », est un choix délibéré.** Un TigerTag
identifie une bobine de filament, mais aussi un accessoire, une pièce détachée,
une résine — et les types de produits que le protocole n'a pas encore. La
convention est écrite pour `id_type` en général : rien de ce qui suit ne lit le
type de produit, si bien qu'une pastille se produit de la même façon quelle que
soit la matière.

Elle est normative. Un filament bicolore qui affiche une séparation verticale
dans une application et un dégradé de gauche à droite dans une autre est un bug
dans celle qui s'est écartée de cette page — ce n'est pas une affaire de goût.
Si vous ne pouvez pas reproduire une règle à l'identique (une plateforme sans
dégradé conique, par exemple), implémentez l'équivalent le plus proche décrit
dans [Plateformes non-CSS](#plateformes-non-css) et dites-le ; n'inventez pas une
autre image.

- **Version de la convention :** 1.0
- **Moteur de rendu de référence :** [`material-swatch-playground.html`](./material-swatch-playground.html) —
 ouvrez-le dans n'importe quel navigateur, sans serveur ni dépendance. Tous les
 cas, toutes les formes de boîte, des sélecteurs de couleur en direct, et le CSS
 exact qu'il produit.

---

## Deux formes, et deux seulement

| Forme | Quand | Géométrie |
|---|---|---|
| **Camembert** (part de tarte) | Toute matière à bords francs — bicolore, tricolore, toute liste de N couleurs | N secteurs coniques égaux, la première couleur commençant à **midi**, balayage **dans le sens horaire** |
| **Dégradé** | Rainbow, et le type `gradient` déclaré par le catalogue | Un dégradé linéaire lisse à **135°** — orienté vers le bas à droite, la première couleur se trouvant donc en haut à gauche |

Dit simplement : **tout est un camembert sauf un dégradé**, et il existe
exactement un seul angle de dégradé dans tout le système.

**Le bicolore est la séparation verticale garantie — et ce n'est pas un cas
particulier.** Deux secteurs égaux placent leur frontière sur l'axe vertical :
une matière bicolore affiche donc une arête verticale droite sur *n'importe
quelle* boîte — pastille ronde, tuile carrée, vignette large, barre
partiellement remplie. Vous l'obtenez gratuitement en implémentant le
camembert ; vous n'avez pas besoin d'un chemin de code séparé, et vous ne devez
pas en introduire un qui le dessine en miroir.

Pourquoi un camembert plutôt que des bandes diagonales : les frontières de
secteurs sont angulaires, mesurées depuis le centre de la boîte, donc l'image
reste reconnaissable quel que soit le rapport d'aspect de la boîte. Pourquoi
135° pour les dégradés : un dégradé n'a aucune arête franche à placer, l'angle
est donc libre — un balayage diagonal se lit comme un dégradé au lieu de
ressembler à un bicolore mal rendu.

---

## D'où viennent les données

Deux couches alimentent le rendu, et ce ne sont pas la même chose.

### La puce — trois couleurs au maximum

Un TigerTag porte **trois emplacements de couleur et un aspect**. Rien
d'autre : il n'y a pas de type de dégradé sur la puce, et il n'y en a jamais eu.

| Champ | Type | Signification |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Emplacement 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Emplacement 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Emplacement 3 |
| `color_a` | `int 0-255` | Alpha — **ignoré pour le rendu** ; ne mélangez jamais une couleur de matière |
| `id_aspect1` / `id_aspect2` | `int` | L'un ou l'autre emplacement peut porter l'aspect de coloration |

Trois identifiants d'aspect changent la forme (leur table de référence porte
également un `color_count` faisant autorité) :

| id | label | `color_count` | Forme |
|---|---|---|---|
| `252` | Bicolor | 2 | Camembert, 2 secteurs → **séparation verticale** |
| `24` | Tricolor | 3 | Camembert, 3 secteurs |
| `145` | Rainbow | 3 | Dégradé, 135° |

Tout autre aspect (`Silk`, `Matt`, `Glitter`, …) a un `color_count` ≤ 1 et
n'affecte pas la forme. **Faites la correspondance sur l'id, pas sur le
libellé** — les libellés sont des chaînes d'affichage et peuvent être traduits.

> **Ne comptez jamais les emplacements pour deviner le nombre de couleurs.** Un
> document de puce porte toujours les trois emplacements : les composantes
> absentes sont stockées à `0`, si bien que les emplacements 2 et 3 se lisent
> comme du noir pur sur une matière monochrome. **Le nombre de couleurs vient
> de l'aspect, jamais des emplacements.**

### Le catalogue — une description plus riche, uniquement dans le cloud

Un produit du catalogue officiel peut décrire sa couleur plus précisément
qu'une puce ne le peut. Ces deux champs existent **uniquement** dans les
données cloud/produit — ils ne sont jamais écrits sur une puce :

| Champ | Type | Signification |
|---|---|---|
| `online_color_list` | `string[]` | Couleurs ordonnées, `RRGGBB` ou `RRGGBBAA`, `#` facultatif. L'ordre a du sens : l'index 0 est le premier secteur / le premier arrêt. |
| `online_color_type` | `string` | Instruction de rendu : `mono`, `multi`, `gradient`, `conic_gradient`. Toute autre valeur, ou son absence, est traitée comme `multi`. |

Lorsque les deux couches sont présentes, **le catalogue l'emporte** — c'est la
description la plus précise du même produit.

---

## L'échelle de décision

Évaluez **dans cet ordre, la première correspondance l'emporte**. L'ordre
encode une priorité : le catalogue prime sur la puce, un type de couleur
explicite prime sur une supposition, et l'aspect ne parle que lorsqu'il n'y a
pas de liste de couleurs en ligne.

Soit `LIST` = `online_color_list` après [normalisation](#normalisation), `TYPE` =
`online_color_type`, `SLOTS` = les emplacements non nuls de la puce.

| # | Condition | Résultat |
|---|---|---|
| 1 | `LIST ≥ 2` et `TYPE == "conic_gradient"` | Balayage conique lisse, se refermant sur la première couleur |
| 2 | `LIST ≥ 2` et `TYPE == "gradient"` | Dégradé — **même sur deux couleurs** ; le catalogue a demandé un dégradé, il ne devient donc pas une séparation bicolore |
| 3 | `LIST ≥ 2` | **Camembert** de `LIST.length` secteurs |
| 4 | `LIST == 1` | Couleur unie — **prime sur la couleur de la puce** |
| 5 | aspect **Rainbow** *et* **Tricolor** | Dégradé, 3 arrêts |
| 6 | aspect **Rainbow** *et* **Bicolor** | Dégradé, 2 arrêts |
| 7 | aspect **Rainbow** | Dégradé sur `SLOTS` ; 1 emplacement → uni ; 0 emplacement → les 6 couleurs par défaut |
| 8 | aspect **Tricolor** | **Camembert**, 3 secteurs sur `SLOTS` (emplacement 3 manquant → répéter l'emplacement 1) |
| 9 | aspect **Bicolor** | **Camembert**, 2 secteurs → **séparation verticale** |
| 10 | sinon | Emplacement 1 uni ; rien du tout → `#1c2030` |

Valeurs par défaut lorsqu'un aspect ne porte aucune couleur utilisable :

| Cas | Valeurs par défaut |
|---|---|
| Rainbow, aucune couleur | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (+ emplacement 1 répété) |
| Bicolor | `#cccccc #ffffff` |
| Rien | `#1c2030` |

---

## Normalisation

Appliquée à chaque entrée de `online_color_list` avant l'évaluation de
l'échelle :

1. Supprimez les espaces autour, retirez le `#` initial.
2. Si 8 caractères (`RRGGBBAA`), **gardez les 6 premiers** — l'alpha est
 abandonné, jamais mélangé.
3. N'acceptez que `^[0-9a-fA-F]{6}$`. **Tout le reste est retiré de la liste**,
 et non remplacé par une valeur par défaut — une entrée malformée ne doit jamais
 devenir noire en silence.
4. Rajoutez le `#` en sortie.

Le retrait a lieu *avant* l'exécution de l'échelle : `["ff0000", "oops"]` est
donc une liste à **une seule couleur** (règle 4), et non un camembert à deux
secteurs.

Les emplacements de la puce se convertissent en `#` + deux chiffres
hexadécimaux par composante, uniquement lorsque les trois composantes sont des
nombres.

---

## Les expressions exactes

Avec `c1…cN` les couleurs normalisées et `step = 360 / N` :

```css
/* Camembert — rules 3, 8, 9 */
conic-gradient(c1 0deg <step>deg, c2 <step>deg <2·step>deg, …)

/* Bicolor is that same expression with N = 2 — the guaranteed vertical split */
conic-gradient(#e02424 0deg 180deg, #2463e0 180deg 360deg)

/* Ramp — rules 2, 5, 6, 7. One angle for every ramp in the system. */
linear-gradient(135deg, c1, c2, …)

/* Catalogue-declared conic gradient — rule 1 (first colour repeated to close) */
conic-gradient(from 0deg, c1, c2, …, c1)

/* Mono — rules 4, 10 */
# RRGGBB
```

### Vecteurs de test

Toute implémentation doit les reproduire exactement.

| Entrée | Attendu |
|---|---|
| `{online_color_list:["FF5722"]}` | `#FF5722` |
| `{online_color_list:["000000FF"]}` | `#000000` |
| `{online_color_list:["e02424","2463e0"]}` | `conic-gradient(#e02424 0deg 180deg, #2463e0 180deg 360deg)` |
| `{online_color_list:["e02424","2463e0","22a06b"]}` | `conic-gradient(#e02424 0deg 120deg, #2463e0 120deg 240deg, #22a06b 240deg 360deg)` |
| `{online_color_list:["e02424","2463e0"],online_color_type:"gradient"}` | `linear-gradient(135deg, #e02424, #2463e0)` |
| `{color_r:224,color_g:36,color_b:36,color_r2:36,color_g2:99,color_b2:224,id_aspect2:252}` | `conic-gradient(#e02424 0deg 180deg, #2463e0 180deg 360deg)` |
| `{id_aspect1:145}` | `linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00cc00, #0000ff, #8b00ff)` |
| `{}` | `#1c2030` |

---

## Le filigrane TigerTag

Toute surface qui peint une couleur de matière **sans** photo de produit porte
le logo TigerTag par-dessus, en filigrane.

| Règle | Valeur |
|---|---|
| Position | Coin supérieur droit de la tuile |
| Opacité | **1** — toujours, sur toutes les surfaces |
| Taille | Un **pourcentage** de la tuile, jamais une taille fixe en pixels, pour qu'il s'adapte à la surface |
| Variante | **Fond sombre → le logo BLANC plein. Fond clair → le logo NOIR avec contour.** |

Les deux fichiers de logo ne sont **pas des variantes teintables l'une de
l'autre** — chacun est livré avec son propre remplissage intégré, et la règle
porte sur le *fichier* à utiliser. N'appliquez jamais un filtre CSS, une
couleur de masque ou une opacité pour faire passer l'un pour l'autre : le
dessin avec contour est un autre dessin, pas l'inverse du blanc.

**Choisir la variante** — prenez la luminance relative de la **première
couleur** de l'expression produite :

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Si vous extrayez cette couleur en cherchant le premier `#` hexadécimal d'une
chaîne CSS, cherchez d'abord **8 chiffres**, puis 6, puis 4, puis 3. Sinon un
`#RRGGBBAA` correspond sur ses six premiers chiffres, échoue sur la limite de
mot qui suit, et toute la correspondance est perdue — ce qui se lit comme
« clair » et pose un logo noir sur une bobine noire. Retirez l'alpha et
développez la notation abrégée avant le calcul.

---

## Plateformes non-CSS

Flutter, SwiftUI, Android ou tout moteur de rendu sur canvas implémentent les
deux mêmes formes. Les angles se mesurent toujours à la manière du CSS : **0°
pointe vers le haut, les angles augmentent dans le sens horaire.**

- **Camembert** — un dégradé balayé centré sur la tuile, démarrant à midi, dans
 le sens horaire, avec des arrêts francs à chaque `k · 360/N` degrés. Flutter :
 `SweepGradient` avec `transform: GradientRotation(-pi/2)`. Ne l'approximez pas
 par des parts dessinées comme des tracés, sauf si la tuile est carrée — les
 frontières des secteurs doivent suivre la boîte.
- **Dégradé** — un dégradé linéaire du coin **supérieur gauche** au coin
 **inférieur droit**. Flutter : `Alignment.topLeft → Alignment.bottomRight`.
- **Arrêts francs** — répétez chaque couleur aux deux extrémités de sa bande
 (`c1@0, c1@0.5, c2@0.5, c2@1`) : c'est ainsi qu'une plateforme dépourvue de la
 syntaxe à deux positions du CSS obtient une arête au lieu d'un fondu.

---

## Faire évoluer la convention

Cette page fait foi. Un changement ici est un changement sur toutes les
surfaces TigerSystem : modifiez-la d'abord, incrémentez la version de la
convention, puis réalignez les implémentations et vérifiez-les avec le moteur
de rendu de référence.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [La puce TigerTag](../concepts/tigertag-chip.md), [Le format `.ttag`](./ttag-format.md), [Vue d'ensemble développeurs](./README.md)
