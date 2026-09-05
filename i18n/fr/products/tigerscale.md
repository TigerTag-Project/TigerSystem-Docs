---
sourceHash: b1285803ebbd496b0e46df78100d223db9c8637a0ed689e4f6f2c95b4aaaa484
sourcePath: docs/products/tigerscale.md
---

# TigerScale

## Objectif

**TigerScale répond à l'éternelle question : combien reste-t-il de filament ?**
Posez une bobine sur cette balance ESP32 open source et le poids en direct
part droit dans votre inventaire — aucune saisie manuelle, plus besoin de
secouer la bobine près de son oreille.

> **La puce sait ce que le filament *est* ; la balance sait ce qu'il en
> *reste*.** Ensemble, ils rendent l'inventaire réellement juste : l'identité
> vient de [TigerTag](./tigertag.md), la quantité en direct de TigerScale.

<img src="../assets/tigerscale-v3.png" width="420" alt="TigerScale V3 — la balance à filament connectée open source, écran tactile couleur et double lecteur NFC" />

## TigerScale V3 — la génération actuelle

[Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3), MIT.
C'est celle qu'il faut construire.

- **Elle sait quelle bobine est posée dessus** : **double lecteur NFC
 PN532**, un par face — une [bobine à deux puces](../concepts/tigertag-chip.md)
 est identifiée quel que soit le sens dans lequel vous la posez. Lire la
 puce, peser, soustraire le poids de la bobine vide, synchroniser — rien à
 taper, rien à deviner.
- **ESP32-S3** (16 Mo de flash, PSRAM), **écran tactile couleur 3,5″
 480×320** (LVGL) avec toute la configuration à l'écran : sélecteur WiFi et
 clavier, assistant de calibration, autotest matériel, mises à jour OTA.
- **Alimentée par batterie** (PMIC AXP2101, état de charge à l'écran), codec
 audio.
- Pesée de précision : HX711 + cellule de charge, filtrage médian et EMA
 adaptatif — réglé pour donner la sensation d'une balance de cuisine.
- **8 langues dans le firmware**, interface web en 9 langues.
- **Suivi du poids en direct** — les mises à jour apparaissent en temps réel
 dans Tiger Studio et Tiger NFC Connect via Firestore.
- Fonctionne avec la **calibration du poids des contenants** de Tiger Studio,
 pour que le poids net de filament reste juste selon le type de contenant.

<img src="../assets/tigerscale-at-home.jpg" width="100%" alt="Une TigerScale V3 en usage sur un établi, une bobine posée dessus" />

*Sur l'établi : on pose la bobine, elle s'identifie et se pèse.*

## Où cela se situe

```mermaid
flowchart LR
  SPOOL["Spool on the scale"] --> SCALE["TigerScale (ESP32)"]
  SCALE -- "live weight" --> CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  CLOUD --> ST["Tiger Studio"] & CO["Connect"]
```

## L'histoire jusqu'ici

Trois générations, et la forme de l'objet a changé à chaque fois :

| | Lecture | Écran | Carte | Forme |
|---|---|---|---|---|
| **V1** — jamais publiée | **un seul** PN532 | mini OLED | ESP32 | un **porte-bobine** : un support central qui traverse le milieu de la bobine |
| **V2** — [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale), MIT | 2× RC522 | OLED 0,96″ | ESP32-WROOM, alimentée en USB | une balance plate |
| **V3** — [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3), MIT | 2× PN532 | écran tactile couleur 3,5″ | ESP32-S3, batterie | une balance plate, autonome |

La V1 embarquait déjà pour l'essentiel l'électronique de la V2 — ESP32, mini
OLED, une carte HX711 avec une cellule de charge de 5 kg — mais **un seul**
lecteur, et un corps complètement différent.

> **La V3, c'est un matériel différent, pas une mise à jour de firmware.**
> Les deux ne sont pas interchangeables : une V2 déjà construite garde son
> propre dépôt et continue de fonctionner. Elle n'est simplement plus
> développée.

Les trois sont entièrement open source (MIT) et faites de composants
courants — la preuve vivante qu'un ESP32 et un module de lecture NFC (classe
PN532 / RC522) suffisent à construire un appareil qui lit les TigerTag.

## Balances tierces — USB HID (série DYMO M et compagnie)

TigerScale est la balance maison — mais Tiger Studio lit aussi les
**périphériques USB « HID Scale »** standards (page d'usage HID `0x8D`, usage
`0x20`) : à commencer par la **DYMO M5** et le reste de la série M de DYMO
(M10, M25… même protocole), et **toute HID Scale conforme**, quelle que soit
la marque. Une option tierce, pas un produit Tiger.

Protocole, validé sur du matériel réel — des *Scale Data Reports* de 6 octets
à environ 1 Hz :

| Octet | Signification |
|---|---|
| `[0]` | identifiant de rapport `0x03` |
| `[1]` | état : 1 défaut · 2 stable à zéro · 3 en mouvement · 4 stable · 5 négatif · 6 hors capacité |
| `[2]` | unité (codes HID PoS) : `0x02` gramme · `0x0B` once · `0x0C` livre |
| `[3]` | exposant signé de puissance de dix appliqué à la valeur brute |
| `[4..5]` | poids, LE16 (LSB, MSB) |

Identifiant fabricant DYMO `0x0922` ; la M5 porte le pid `0x8009`.
Particularité : la toute première trame juste après une tare annonce
l'unité `0x00`.

## Interactions

| Avec | Comment |
|---|---|
| Firebase (base de données du compte) | Écrit le poids en direct dans le compte de l'utilisateur |
| Tiger Studio / Connect | Affichent le poids en direct ; supervision de l'état |

## Liens

- **V3 (actuelle)** : [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) (MIT)
- V2, qui n’est plus développée : [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) (MIT)

---

**◀ Précédent :** [TigerPOD](./tigerpod.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Compatibilité](../compatibility/README.md)

**Voir aussi :** [Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md)
