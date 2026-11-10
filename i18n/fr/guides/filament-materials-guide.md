---
sourceHash: 523ed86c04218e9fd4b3d044087a4f64103df5017b6ae258c84443a2243fcac2
sourcePath: docs/guides/filament-materials-guide.md
---

# Guide des matériaux filament

Une référence pratique pour 21 matériaux : particularité, solidité, résistance chimique, résistance à la chaleur, aux chocs et aux UV, températures, séchage et densité, recommandations et exemples d'usage.

**Les noms et les chiffres viennent du protocole.** Chaque fiche nomme le
matériau exactement comme une TigerTag l'encode, avec son identifiant dans la
base de référence partagée — [`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), servie aussi par
l'[API TigerTag](https://api.tigertag.io/api:tigertag/material/get/all). Les températures buse et plateau, le séchage et la
densité sont ceux de cette base : c'est ce que Tiger Studio remplit quand vous
choisissez le matériau d'une bobine. La TigerTag d'une bobine porte les valeurs
exactes de son fabricant, et ce sont elles qui priment. Les finitions comme mat
ou métal ne sont pas des matériaux dans TigerTag mais des **aspects**, ajoutés
au matériau de base — voir
[l'identité universelle du filament](../concepts/universal-filament-identity.md).

**Étiquettes de résistance chimique :** <span class="ts-tag ts-tag--ok">OK</span> tient bien · <span class="ts-tag ts-tag--warn">MOYEN</span> fragilise ou varie · <span class="ts-tag ts-tag--danger">KO</span> dissout ou dégrade.

## Grand public

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Grand public</span>

| | |
|---|---|
| Matériau TigerTag | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Particularité | Standard, facile, biodégradable en compost industriel. |
| Solidité /10 | 6 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> IPA (aucun effet réel), huiles, eau froide<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise si exposition prolongée, ne dissout pas<br/><span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés |
| Résist. chaleur | ~50–60 °C |
| Résist. chocs | Moyenne |
| Résist. UV | Mauvaise |
| Temp. buse | 190–240 °C |
| Temp. plateau | 45–55 °C |
| Séchage | 50 °C · 8 h |
| Densité | 1,24 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Ventilo 100% · Vitesse élevée possible |
| Exemples | Prototypes, figurines, décoration |

</div>

### PLA Soie/Bois

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Grand public</span>

| | |
|---|---|
| Matériau TigerTag | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Particularité | Une finition cosmétique du PLA — aspect soyeux ou légère teinte bois, à ne pas confondre avec le composite Bois bien plus chargé plus loin. |
| Solidité /10 | 5 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> IPA (aucun effet réel), huiles, eau froide<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise si exposition prolongée, ne dissout pas ; les additifs soie/bois absorbent l'humidité un peu plus vite que le PLA nature<br/><span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés |
| Résist. chaleur | ~50–60 °C |
| Résist. chocs | Faible |
| Résist. UV | Mauvaise |
| Temp. buse | 190–240 °C |
| Temp. plateau | 45–55 °C |
| Séchage | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Densité | PLA Silk 1,24 g/cm³<br/>PLA+ Silk 1,24 g/cm³<br/>PLA Wood 1,28 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Buse 0,6 mm si particules · Vitesse lente · Adhérence plateau très forte (verre ou PEI) — laisser refroidir complètement avant de décoller |
| Exemples | Vases, décoration, pièces artistiques |

</div>

### PLA Mat

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Grand public</span>

| | |
|---|---|
| Matériau TigerTag | `PLA` · id 38219<br/>+ aspect `Matt` · id 247 |
| Particularité | Finition mate/sablée (charges minérales) qui cache bien les lignes de couche. |
| Solidité /10 | 5 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> IPA (aucun effet réel), huiles, eau froide<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise si exposition prolongée, ne dissout pas<br/><span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés |
| Résist. chaleur | ~50–55 °C |
| Résist. chocs | Faible à moyenne |
| Résist. UV | Mauvaise |
| Temp. buse | 190–240 °C |
| Temp. plateau | 45–55 °C |
| Séchage | 50 °C · 8 h |
| Densité | 1,24 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Vitesse modérée (plus cassant aux détails fins) · Idéal pièces déco sans reflets |
| Exemples | Figurines, maquettes, pièces d'expo |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Grand public</span>

| | |
|---|---|
| Matériau TigerTag | `PETG` · id 38256 |
| Particularité | Le « couteau suisse » : solide, souple, bonne tenue chimique et UV. |
| Solidité /10 | 8 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> eau, alcools, acides dilués, sels<br/><span class="ts-tag ts-tag--danger">KO</span> solvants chlorés, cétones concentrées |
| Résist. chaleur | ~70–80 °C |
| Résist. chocs | Bonne |
| Résist. UV | Bonne |
| Temp. buse | 220–270 °C |
| Temp. plateau | 70–75 °C |
| Séchage | 70 °C · 8 h |
| Densité | 1,27 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Ventilo 20–50% · Adhérence plateau très forte (verre ou PEI) — laisser refroidir complètement avant de décoller · Vitesse modérée |
| Exemples | Pièces mécaniques, boîtes étanches, clips |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Grand public</span>

| | |
|---|---|
| Matériau TigerTag | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Particularité | Même PETG, mais formulé basse viscosité pour fondre assez vite à 300+ mm/s. |
| Solidité /10 | 8 (identique au PETG) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> eau, alcools, acides dilués, sels<br/><span class="ts-tag ts-tag--danger">KO</span> solvants chlorés, cétones concentrées |
| Résist. chaleur | ~70–80 °C |
| Résist. chocs | Bonne |
| Résist. UV | Bonne |
| Temp. buse | 220–270 °C |
| Temp. plateau | 70–75 °C |
| Séchage | 70 °C · 8 h |
| Densité | 1,27 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Utile seulement sur hotend « high-flow » / imprimante limitée par le débit · Sans intérêt sur une imprimante lente ou Bowden classique |
| Exemples | Mêmes usages que le PETG, sur imprimante rapide (CoreXY type Bambu Lab, Creality K1…) |

</div>

## Technique / fonctionnel

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `TPU` · id 43518<br/>la dureté Shore ne fait pas partie de l'id |
| Particularité | Très souple, absorbe les chocs, mais s'écrase et se déforme facilement. |
| Solidité /10 | 3 (très souple) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> huiles, graisses, carburants<br/><span class="ts-tag ts-tag--warn">VARIABLE</span> selon la formulation face aux solvants |
| Résist. chaleur | ~55–60 °C |
| Résist. chocs | Excellente (absorption) |
| Résist. UV | Bonne |
| Temp. buse | 200–250 °C |
| Temp. plateau | 35–40 °C |
| Séchage | 75 °C · 8 h |
| Densité | 1,21 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Extrudeur direct-drive indispensable · Vitesse 15–25 mm/s, rétraction minimale |
| Exemples | Semelles, poignées souples, joints |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `TPU` · id 43518<br/>la dureté Shore ne fait pas partie de l'id |
| Particularité | Le TPU le plus courant : bon compromis souplesse / facilité d'impression. |
| Solidité /10 | 5 (flexible) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> huiles, graisses, carburants<br/><span class="ts-tag ts-tag--warn">VARIABLE</span> selon la formulation face aux solvants |
| Résist. chaleur | ~60 °C |
| Résist. chocs | Excellente |
| Résist. UV | Bonne |
| Temp. buse | 200–250 °C |
| Temp. plateau | 35–40 °C |
| Séchage | 75 °C · 8 h |
| Densité | 1,21 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Direct-drive conseillé (Bowden bien réglé possible) · Vitesse 30–45 mm/s — le plus tolérant des TPU |
| Exemples | Pneus RC, coques téléphone, gaines de câbles |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `TPU` · id 43518<br/>la dureté Shore ne fait pas partie de l'id |
| Particularité | Presque un plastique dur : flexion légère, très résistant à la fatigue. |
| Solidité /10 | 7 (rigide pour un TPU) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> huiles, graisses, carburants<br/><span class="ts-tag ts-tag--warn">VARIABLE</span> selon la formulation face aux solvants |
| Résist. chaleur | ~65–70 °C |
| Résist. chocs | Excellente (encaisse sans casser) |
| Résist. UV | Bonne |
| Temp. buse | 200–250 °C |
| Temp. plateau | 35–40 °C |
| Séchage | 75 °C · 8 h |
| Densité | 1,21 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | S'imprime presque comme un PETG · Bowden généralement OK |
| Exemples | Roues, charnières souples, pièces anti-vibration |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `ABS` · id 20562 |
| Particularité | Historique, résistant à la chaleur. Dégage des fumées (COV) à l'impression. |
| Solidité /10 | 8 |
| Résistance chimique | <span class="ts-tag ts-tag--danger">KO</span> acétone — la dissout (base du lissage vapeur), esters<br/><span class="ts-tag ts-tag--ok">OK</span> huiles, bases diluées |
| Résist. chaleur | ~95–100 °C |
| Résist. chocs | Bonne |
| Résist. UV | Mauvaise |
| Temp. buse | 240–280 °C |
| Temp. plateau | 85–90 °C |
| Séchage | 80 °C · 8 h |
| Densité | 1,04 g/cm³ |
| Caisson | Obligatoire |
| Recommandations | Ventilo coupé · Filtration air (COV) |
| Exemples | Pièces auto intérieures, coques, carters |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `ASA` · id 12844 |
| Particularité | Comme l'ABS mais pensé pour l'extérieur (UV, intempéries). |
| Solidité /10 | 8 (identique à l'ABS) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> pluie, sels, alcools<br/><span class="ts-tag ts-tag--danger">KO</span> acétone, acides forts |
| Résist. chaleur | ~95–100 °C |
| Résist. chocs | Excellente |
| Résist. UV | Excellente |
| Temp. buse | 240–280 °C |
| Temp. plateau | 95–100 °C |
| Séchage | 80 °C · 8 h |
| Densité | 1,05 g/cm³ |
| Caisson | Recommandé |
| Recommandations | Séchage du filament · Ventilo faible |
| Exemples | Pièces extérieures, boîtiers de jardin |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Particularité | Le roi de la friction et de la fatigue. Très hygroscopique. |
| Solidité /10 | 10 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> acétone, alcools, hydrocarbures (essence), bases<br/><span class="ts-tag ts-tag--danger">KO</span> acides (vinaigre, HCl) ; gonfle à l'eau |
| Résist. chaleur | ~110–115 °C |
| Résist. chocs | Excellente |
| Résist. UV | Moyenne |
| Temp. buse | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Temp. plateau | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Séchage | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Densité | PA 1,52 g/cm³<br/>PA6 1,52 g/cm³<br/>PA11 —<br/>PA12 1,52 g/cm³ |
| Caisson | Obligatoire |
| Recommandations | Séchage impératif avant/pendant · Colle Magigoo / PVA |
| Exemples | Engrenages, pièces de frottement |

</div>

### PC (Polycarbonate)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `PC` · id 30458 |
| Particularité | Rigidité et résistance thermique/choc extrêmes. |
| Solidité /10 | 10 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> acides dilués, alcools, graisses<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise / craquèle<br/><span class="ts-tag ts-tag--danger">KO</span> bases fortes (ammoniaque), eau chaude (hydrolyse) |
| Résist. chaleur | ~115–130 °C |
| Résist. chocs | Excellente (vitres pare-balles) |
| Résist. UV | Moyenne (jaunit, reste solide) |
| Temp. buse | 260–290 °C |
| Temp. plateau | 110–115 °C |
| Séchage | 85 °C · 8 h |
| Densité | 1,3 g/cm³ |
| Caisson | Obligatoire |
| Recommandations | Séchage impératif · Colle Magigoo PC |
| Exemples | Pièces moteur, pièces structurelles, moules |

</div>

### PP (Polypropylène)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technique</span>

| | |
|---|---|
| Matériau TigerTag | `PP` · id 30884 |
| Particularité | Très léger, quasi inerte chimiquement — mais n'adhère (presque) à rien. |
| Solidité /10 | 6 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> quasi tous acides/bases dilués, solvants courants, huiles, carburants |
| Résist. chaleur | ~100 °C |
| Résist. chocs | Excellente (flexion répétée) |
| Résist. UV | Mauvaise |
| Temp. buse | 220–250 °C |
| Temp. plateau | 55–60 °C |
| Séchage | 60 °C · 4 h |
| Densité | 0,9 g/cm³ |
| Caisson | Recommandé |
| Recommandations | Scotch PP obligatoire (rien d'autre n'accroche) · Brim large (retrait ~2%) |
| Exemples | Charnières vivantes, flacons, pièces alimentaires |

</div>

## Composites (chargés)

### Carbone (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| Matériau TigerTag | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Particularité | Fibres de carbone hachées (10–25%) dans une base PLA, PETG ou Nylon : plus rigide, moins de retrait, fini mat. |
| Solidité /10 | 8 (rigide, cassant) |
| Résistance chimique | <strong>PLA-CF :</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, huiles, eau froide · <span class="ts-tag ts-tag--warn">MOYEN</span> acétone · <span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés<br/><strong>PETG-CF :</strong> <span class="ts-tag ts-tag--ok">OK</span> eau, alcools, acides dilués, sels · <span class="ts-tag ts-tag--danger">KO</span> solvants chlorés, cétones concentrées<br/><strong>PA-CF :</strong> <span class="ts-tag ts-tag--ok">OK</span> acétone, alcools, hydrocarbures, bases · <span class="ts-tag ts-tag--danger">KO</span> acides ; gonfle à l'eau |
| Résist. chaleur | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Résist. chocs | Faible (cassant malgré la rigidité) |
| Résist. UV | Mauvaise à bonne (selon base) |
| Temp. buse | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Temp. plateau | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Séchage | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Densité | PLA-CF 1,24 g/cm³<br/>PETG-CF 1,27 g/cm³<br/>PA-CF 1,52 g/cm³ |
| Caisson | PLA-CF/PETG-CF pas nécessaire<br/>PA-CF obligatoire |
| Recommandations | 0,6 mm conseillé (0,4 mm mini) · PA-CF : hotend tout métal + séchage impératif, en plus exigeant que PLA-CF/PETG-CF |
| Exemples | Drones, supports rigides, gabarits peu sollicités aux chocs |

</div>

### Verre (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| Matériau TigerTag | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>pas encore d'entrée PLA-GF |
| Particularité | Fibres de verre hachées (10–30%) dans une base PLA, PETG ou Nylon : plus rigide que la base nue et plus tolérante aux chocs que l'équivalent en fibre de carbone — mais non conductrice, donc ne bloque pas les ondes radio comme le CF. |
| Solidité /10 | 7 (rigide, plus tolérante aux chocs que le CF) |
| Résistance chimique | <strong>PLA-GF :</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, huiles, eau froide · <span class="ts-tag ts-tag--warn">MOYEN</span> acétone · <span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés<br/><strong>PETG-GF :</strong> <span class="ts-tag ts-tag--ok">OK</span> eau, alcools, acides dilués, sels · <span class="ts-tag ts-tag--danger">KO</span> solvants chlorés, cétones concentrées<br/><strong>PA-GF :</strong> <span class="ts-tag ts-tag--ok">OK</span> acétone, alcools, hydrocarbures, bases · <span class="ts-tag ts-tag--danger">KO</span> acides ; gonfle à l'eau |
| Résist. chaleur | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Résist. chocs | Moyenne (plus tolérante que le CF à charge de fibre égale) |
| Résist. UV | Mauvaise à bonne (selon base) |
| Temp. buse | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Temp. plateau | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Séchage | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Densité | PETG-GF —<br/>PA-GF 1,52 g/cm³ |
| Caisson | PLA-GF/PETG-GF pas nécessaire<br/>PA-GF obligatoire |
| Recommandations | 0,6 mm conseillé (0,4 mm mini) · PA-GF : hotend tout métal + séchage impératif, en plus exigeant que PLA-GF/PETG-GF |
| Exemples | Boîtiers transparents aux ondes radio (antennes, matériel radio), gabarits d'outillage, pièces tolérantes aux chocs |

</div>

### Métal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| Matériau TigerTag | `PLA` · id 38219<br/>+ aspect `Metal` · id 226 |
| Particularité | 5–60% de poudre métallique (bronze, cuivre, inox…) dans une base PLA : aspect et poids du métal, se polit. |
| Solidité /10 | 5 (base fragile) |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> IPA (aucun effet réel), huiles, eau froide<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise si exposition prolongée, ne dissout pas ; la poudre de cuivre/bronze peut s'oxyder et patiner à l'air libre<br/><span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés |
| Résist. chaleur | ~50–60 °C |
| Résist. chocs | Faible (cassant, très dense donc lourd) |
| Résist. UV | Mauvaise |
| Temp. buse | 190–240 °C |
| Temp. plateau | 45–55 °C |
| Séchage | 50 °C · 8 h |
| Densité | 1,24 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Poncer (220 → 1000 grain) puis polir |
| Exemples | Figurines/bustes « métal », objets déco pesants, trophées |

</div>

### Bois

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| Matériau TigerTag | `PLA Wood` · id 48001 |
| Particularité | Particules de bois dans une base PLA : se ponce, se teinte, s'huile comme du vrai bois. |
| Solidité /10 | 4 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> IPA (aucun effet réel), huiles, eau froide<br/><span class="ts-tag ts-tag--warn">MOYEN</span> acétone — fragilise si exposition prolongée, ne dissout pas ; absorbe l'humidité comme du vrai bois (gonfle, peut moisir)<br/><span class="ts-tag ts-tag--danger">KO</span> acides/bases concentrés |
| Résist. chaleur | ~50–55 °C |
| Résist. chocs | Faible |
| Résist. UV | Mauvaise (grise comme du bois extérieur) |
| Temp. buse | 190–240 °C |
| Temp. plateau | 45–55 °C |
| Séchage | 60 °C · 8 h |
| Densité | 1,28 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Ne jamais laisser chauffer à l'arrêt (carbonise et bouche la buse) |
| Exemples | Décoration, maquettes, objets d'art, cadres |

</div>

## Supports

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| Matériau TigerTag | `PVA` · id 9483 |
| Particularité | Support soluble à l'eau, compatible PLA. |
| Solidité /10 | 4 |
| Résistance chimique | <span class="ts-tag ts-tag--danger">KO</span> eau — soluble instantanément<br/><span class="ts-tag ts-tag--ok">OK</span> huiles (parfois) |
| Résist. chaleur | ~60–70 °C |
| Résist. chocs | Mauvaise |
| Résist. UV | Mauvaise |
| Temp. buse | 190–240 °C |
| Temp. plateau | 30–60 °C |
| Séchage | 85 °C · 12 h |
| Densité | 1,23 g/cm³ |
| Caisson | Pas nécessaire |
| Recommandations | Garder au sec (très hygroscopique) · Utiliser en double extrusion |
| Exemples | Supports pour géométries complexes (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| Matériau TigerTag | `HIPS` · id 26029 |
| Particularité | Support soluble au limonène, compatible ABS. Utilisable seul aussi. |
| Solidité /10 | 6 |
| Résistance chimique | <span class="ts-tag ts-tag--danger">KO</span> limonène — soluble (c'est son usage)<br/><span class="ts-tag ts-tag--ok">OK</span> bases, alcools |
| Résist. chaleur | ~95–100 °C |
| Résist. chocs | Bonne |
| Résist. UV | Mauvaise (jaunit, devient cassant) |
| Temp. buse | 220–270 °C |
| Temp. plateau | 90–95 °C |
| Séchage | 80 °C · 6 h |
| Densité | 1,03 g/cm³ |
| Caisson | Obligatoire |
| Recommandations | Ventilo coupé · Dissolution au limonène |
| Exemples | Supports pour impressions ABS, prototypes légers |

</div>

## Haute performance

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Haute performance</span>

| | |
|---|---|
| Matériau TigerTag | `PEEK` · id 29815 |
| Particularité | Le sommet des thermoplastiques imprimables : tenue mécanique/thermique extrême. |
| Solidité /10 | 10 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> quasi tous solvants, acides dilués, stérilisation autoclave<br/><span class="ts-tag ts-tag--danger">KO</span> acide sulfurique concentré |
| Résist. chaleur | ~250–260 °C |
| Résist. chocs | Bonne |
| Résist. UV | Moyenne |
| Temp. buse | 390–410 °C |
| Temp. plateau | 130–145 °C |
| Séchage | 120 °C · 6 h |
| Densité | 1,32 g/cm³ |
| Caisson | Obligatoire, chauffé &gt;100 °C |
| Recommandations | Séchage impératif |
| Exemples | Implants médicaux, pièces aérospatiales |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Haute performance</span>

| | |
|---|---|
| Matériau TigerTag | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Particularité | Résine aéronautique ignifuge, très stable dimensionnellement. |
| Solidité /10 | 9 |
| Résistance chimique | <span class="ts-tag ts-tag--ok">OK</span> carburants, huiles, la plupart des solvants<br/><span class="ts-tag ts-tag--danger">KO</span> solvants chlorés, bases fortes |
| Résist. chaleur | ~170–200 °C |
| Résist. chocs | Bonne |
| Résist. UV | Moyenne |
| Temp. buse | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Temp. plateau | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Séchage | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Densité | PEI-1010 1,27 g/cm³<br/>PEI-9085 — |
| Caisson | Obligatoire, chauffé |
| Recommandations | Plateau verre borosilicaté · Très hygroscopique : séchage impératif |
| Exemples | Intérieurs avion (norme feu/fumée), gabarits industriels |

</div>

Solidité, résistances et recommandations : repères généraux, variables selon la marque et le lot. Températures, séchage et densité : valeurs par défaut de la base de référence.

---

**▲ [Index de la documentation](../../README.md)**
