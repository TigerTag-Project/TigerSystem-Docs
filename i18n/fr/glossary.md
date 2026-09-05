---
sourceHash: 7637b90d610dec99841d2b914a6b2549c1c1924e6fef1c0da1cac0454b4febf0
sourcePath: docs/glossary.md
---

# Glossaire

Tous les termes que cette documentation emploie sans les expliquer. Les
définitions sont tirées des pages indiquées à côté d'eux — chaque entrée
renvoie vers la page qui en détient l'explication complète.

> **Note :** ce glossaire est une **amorce**. Il couvre les termes qui apparaissent
> déjà dans ce dépôt ; il est volontairement incomplet, et les entrées n'y sont
> ajoutées qu'une fois que la matière correspondante existe quelque part dans la
> documentation. Un terme vous manque ? Ajoutez-le avec un lien vers la page qui le définit.

## Le vocabulaire propre à l'écosystème

| Terme | Signification |
|---|---|
| **TigerSystem** | L'écosystème ouvert dans son ensemble : le format de puce, les données de référence, les applications, le matériel et la surface cloud. Voir [Pourquoi TigerSystem existe](./vision/why-tigersystem.md). |
| **TigerTag** | Une puce NFC NTAG standard portant la charge utile TigerTag ouverte de 144 octets — l'identité d'une bobine, lisible par n'importe quoi. Voir [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Un TigerTag dont l'identité porte un **identifiant produit issu du catalogue officiel**, plus des métadonnées d'enrichissement facultatives côté cloud. La puce reste lisible à 100 % hors ligne. Le `+` signifie *identifié*, pas *certifié*. Voir [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Un TigerTag+ qui porte en plus une **signature** cryptographique, écrite par un fabricant détenteur de la certification et de ses outils de signature. La vérifier est gratuit et hors ligne ; en émettre une est précisément ce que la certification accorde. |
| **TigerData** | La même identité, sans aucune puce : les données du protocole sous forme purement numérique, sans UID, promouvable en puce réelle à tout moment. Voir [Une identité, trois états](./concepts/universal-filament-identity.md). |
| **TigerData+** | Une bobine sans puce qui porte un vrai produit du catalogue officiel — marque, couleur, matière, températures, diamètre, SKU et EAN exacts — plutôt que des valeurs saisies à la main. Le `+` signifie *identifié*, pas *certifié*. |
| **Officiel** | Fabriqué par TigerSystem lui-même — les puces dans les deux formats, ainsi que les applications et le matériel présentés dans [Produits](./products/README.md). Une indication d'origine, pas une marque qui s'accorde : TigerSystem ne se certifie pas lui-même. |
| **TigerTag Compatible** | Le niveau gratuit : tout ce qui *dialogue avec* les puces TigerTag — lecteurs, applications, imprimantes, trancheurs, outils. Aucune autorisation n'est nécessaire pour l'implémenter, pour le dire, ou pour afficher le logo dans une application, une documentation ou une fiche boutique. Cela couvre **TigerTag+** aussi : vérifier une signature est gratuit, hors ligne et sans restriction. Le seul mot que cela n'inclut jamais est *certifié*. |
| **TigerTag Certified** | Le niveau audité, ouvert à tout ce qu'un tiers construit — un appareil, une application, un filament, un inlay, un carrier — dès lors qu'il passe un audit au regard des exigences. Accordé plutôt que revendiqué, inscrit au registre des certifiés, et révocable. Il existe en deux portées, **TigerTag Certified** et **TigerTag+ Certified**. Les partenaires certifiés peuvent apposer la marque **sur le produit** et émettre des signatures TigerTag+. Voir la [documentation développeur](./developers/README.md) et les [critères de certification](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | L'application mobile (iOS/Android) — approchez pour lire, approchez pour écrire, parcourez le catalogue. Anciennement « TigerTag RFID Connect ». Voir [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | L'application de bureau open source (Windows/macOS/Linux) — inventaire, racks, capteurs et liaisons imprimantes. Voir [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | La maison web de l'écosystème, sur `tigersystem.io` — vitrine, listes d'envies, codes ami, partage de listes publiques. Voir [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | Le support de double lecteur NFC imprimable en 3D — STL gratuit. Voir [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | La balance à filament ESP32 open source qui répond à « combien en reste-t-il ? ». Voir [TigerScale](./products/tigerscale.md). |
| **TigerTag Factory / Manager** | La chaîne d'outils industrielle, de qualité production, qui programme les puces sur les lignes de production de filament, et les outils qui entretiennent la base de données filaments. Non publique. Voir la [suite Factory](./products/factory-suite.md). |
| **Carrier** | La bande qui porte les deux puces d'une bobine — une à chaque extrémité repliée, collée sur le mandrin en carton avec un adhésif industriel 3M. Utilisée sur la ligne de production, vendue séparément pour les refills, publique et imprimable chez soi. Voir [La puce TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Une bobine réutilisable sur laquelle se monte un refill sans bobine. La puce d'un refill se loge dans le mandrin en carton, pour rester avec le filament plutôt qu'avec la bobine. |
| **Twin Tag** | Les deux puces d'une même bobine, écrites ensemble par paire et maintenues identiques toute la vie de la bobine — toujours comptées comme **une seule** bobine. |
| **Base de données de référence** | Les tables d'identifiants partagées (marques, matières, aspects, types, diamètres, unités) servies depuis `cdn.tigertag.io`, pour qu'une puce encodée par un outil se lise à l'identique dans tous les autres. Voir [Identité universelle du filament](./concepts/universal-filament-identity.md). |
| **Aspect** | Le champ de la base de données de référence qui décrit la couleur et la finition d'un filament ; c'est à partir de lui qu'est peint le [nuancier matière](./developers/material-swatch.md). |
| **Nuancier matière** | La convention normative qui transforme les *données* de couleur d'une bobine en une même *image* sur toutes les surfaces — deux formes seulement, avec un moteur de rendu de référence pour contrôler une implémentation. Voir [Le nuancier matière](./developers/material-swatch.md). |
| **Fichier `.ttag`** | Le fichier d'échange portable et hors ligne qui transporte une ou plusieurs matières d'inventaire (TigerData, TigerData+, TigerTag ou TigerTag+) d'un outil à l'autre. Voir [le format `.ttag`](./developers/ttag-format.md). |
| **Seconde vie** | Réencoder une puce pour une bobine rechargée ou reconvertie, ou la convertir en NDEF simple pour tout autre usage NFC — une puce ne devrait jamais devenir un déchet électronique. Voir [Seconde vie](./philosophy/second-life.md). |
| **Pont smartphone** | Utiliser un téléphone (ou un lecteur de bureau) pour identifier une bobine destinée à une imprimante dépourvue de lecteur RFID. Voir [Le pont smartphone](./philosophy/smartphone-bridge.md). |
| **Liaison imprimante** | Tiger Studio qui dialogue avec une machine sur le réseau local — télémétrie, emplacements de filament, tâche, caméra. À distinguer de la lecture des tags propres à ce constructeur. Voir [Compatibilité](./compatibility/README.md). |
| **Refill** | Une couronne de filament vendue sans bobine, à monter sur une bobine que vous possédez déjà. |

## NFC et RFID

| Terme | Signification |
|---|---|
| **NFC** | Near-Field Communication — la radio à courte portée que tout smartphone moderne peut utiliser pour lire un TigerTag. |
| **RFID** | Radio-Frequency Identification, la famille plus large à laquelle appartient le NFC. Employé ici aussi bien pour les tags de bobine verrouillés des constructeurs que pour TigerTag. |
| **NTAG213 / 215 / 216** | La famille de puces NXP qu'utilise un TigerTag (NFC Forum Type 2). La charge utile est dimensionnée pour tenir dans la plus petite, la NTAG213 ; les puces officielles de marque sont des NTAG215, afin de laisser de la marge mémoire pour le réemploi. Voir [La puce TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — le conteneur standard dans lequel est stockée la charge utile TigerTag, ce qui explique que n'importe quel outil NFC puisse la lire, et qu'on puisse transformer la puce d'une bobine vide en objet NFC ordinaire. |
| **UID** | L'identifiant matériel unique de la puce, fixé à la fabrication et non réinscriptible. Une sauvegarde de puce y est liée, tout comme une signature TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | Les familles de puces que les constructeurs d'imprimantes utilisent pour leurs propres tags de bobine — documentées constructeur par constructeur dans la [matrice de compatibilité](./compatibility/README.md). |
| **ACR122U** | La classe de lecteurs NFC USB grand public utilisée pour lire et écrire des puces depuis un ordinateur ; un [TigerPOD](./products/tigerpod.md) est un support conçu autour de l'un d'eux. |
| **PN532 / RC522** | Des modules lecteurs NFC bon marché, généralement associés à un ESP32, pour les lecteurs DIY — l'approche retenue par [TigerScale](./products/tigerscale.md). |
| **ECDSA** | Le schéma de signature que contrôle l'extra `verify` facultatif du SDK Python — le mécanisme derrière une signature d'origine TigerTag+. Voir [SDK](./developers/sdks.md). |
| **OpenSpool** | Un standard ouvert et indépendant de tag NFC pour bobines (NFC Type 2, JSON NDEF, non verrouillé). Voir [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | La boîte à outils RFID communautaire multi-constructeurs dont dérivent les fiches de décodage par constructeur, et qui lit les TigerTags. Voir [Intégrations tierces](./developers/integrations.md). |

## Imprimantes et matériel

| Terme | Signification |
|---|---|
| **AMS** | L'Automatic Material System de Bambu Lab — le chargeur multi-bobines. Pertinent ici parce qu'il partage typiquement un seul lecteur RFID entre deux emplacements, ce qui explique qu'une bobine porte deux puces. |
| **CFS** | Le Filament System de Creality — son module multi-matières. |
| **ACE** | Le module multi-matières d'Anycubic. |
| **Canvas** | Le module multi-matières d'Elegoo. |
| **matlStation** | La station matière de FlashForge. |
| **MMU** | Multi-Material Unit — le terme générique désignant l'accessoire qui alimente une imprimante en plusieurs filaments (ERCF, MMU2, Box Turtle… dans le monde Klipper). Voir [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | Le firmware d'imprimante ouvert et son API — le WebSocket de Moonraker est le transport qu'utilise déjà la liaison Snapmaker, et le prochain candidat naturel pour les machines Klipper. Voir [Klipper](./compatibility/klipper.md). |
| **HID Scale** | Le protocole USB standard des balances (série DYMO M et compatibles), lu nativement par Tiger Studio comme alternative tierce à une TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — la quantité de lumière qu'un filament laisse passer, la valeur sur laquelle reposent HueForge et l'impression full-spectrum — et l'analyseur [AJAX-3D](https://ajax-3d.com) qui la mesure, en versions DIY (TD-1) et pré-assemblée (TD1s). La TD mesurée peut être stockée dans le protocole TigerTag lui-même. Voir [Matériel tiers](./compatibility/third-party-hardware.md). |
| **ESP32** | Le microcontrôleur grand public derrière TigerScale et la plupart des lecteurs TigerTag DIY. |

## Cloud et données

| Terme | Signification |
|---|---|
| **Firebase / Firestore** | Le simple service Google qui héberge les comptes et les inventaires — une base de données partagée que toutes les applications lisent et écrivent, avec application des règles de sécurité côté serveur. Voir [Inventaire et synchronisation cloud](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | L'adresse depuis laquelle est servie la base de données de référence partagée. |
| **Code ami / lien de liste** | Les deux façons de partager un inventaire — un ami accepté, ou un lien public en lecture seule que n'importe qui ouvre dans un navigateur, sans application ni compte. Voir [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | Le code produit du fabricant et son numéro de code-barres — ce que porte un TigerData+ pour dire exactement de quel produit du catalogue relève une bobine. |

---

**▲ [Index de la documentation](../README.md)** · **Voir aussi :** [FAQ](./faq/README.md), [La puce TigerTag](./concepts/tigertag-chip.md), [Identité universelle du filament](./concepts/universal-filament-identity.md)
