---
sourceHash: 60aaccb3d6dc57846560b5ff5e1ddb3f3bc4e3b846a57362b7a456b5ec005b53
sourcePath: docs/philosophy/open-ecosystem.md
---

# Philosophie de l'écosystème ouvert

## Tout est ouvert

Chaque couche de TigerSystem est publiée — matériel, firmware, SDK,
applications, documentation :

| Couche | Projet | Licence |
|---|---|---|
| Application de bureau | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Matériel + firmware de la balance (V3, actuelle) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Matériel + firmware de la balance (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Support de lecteur (STL + docs) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Guide du format de puce | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentation d'intégration cloud | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Cette documentation | TigerSystem-Docs | CC BY 4.0 |

## Un bac à sable, pas un jardin clos

L'**ensemble de l'écosystème visible par l'utilisateur** est délibérément **un
laboratoire, pas la destination**.
Chaque produit — [Tiger Studio](../products/tiger-studio.md), l'application
mobile, [TigerScale](../products/tigerscale.md),
[TigerPOD](../products/tigerpod.md) — est une démonstration fonctionnelle de ce
qu'une technologie ouverte et documentée rend possible dès lors qu'une bobine
peut s'identifier elle-même : télémétrie d'imprimante en direct sur six
marques, cartographie physique des racks, capteurs, inventaires partagés.
Certaines briques mûriront, d'autres n'existent que pour prouver un point, et
toutes sont lisibles, forkables et libres de copie. Chaque produit — actuel
comme futur — est une **preuve de concept** d'un **protocole open source,
standard, agnostique et multiplateforme** : son seul rôle est de montrer le
potentiel, pour que chacun puisse s'inspirer de notre travail d'intégration et
imaginer les fonctionnalités de demain.

## Construisez le vôtre

TigerTag est un **protocole** ouvert, pas une plateforme que vous seriez obligé
de rejoindre :

1. Lisez le format de la puce ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Prenez un [SDK](../developers/sdks.md).
3. Connectez-vous au [cloud](../developers/cloud-api.md) — ou pas ; les puces fonctionnent hors ligne.
4. Publiez le logiciel, le matériel ou l'activité que vous voulez vraiment.

Votre application peut être tout autre chose — elle parlera quand même aux
mêmes puces. Un téléphone NFC, un lecteur USB ACR122U — ou un ESP32 fait maison
avec un module PN532/RC522, à la manière de TigerScale — voilà tout le matériel
nécessaire : branchez l'identité des bobines sur un ERP, un outil de stock
interne, un flux de traçabilité, un système de prêt de fablab, un projet de
R&D privé ou public — tout ce que vous voulez.

---

**◀ Précédent :** [Écosystème centré sur l'utilisateur](./user-centric-ecosystem.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Passerelle smartphone](./smartphone-bridge.md)

**Voir aussi :** [Vue d'ensemble développeurs](../developers/README.md), [Produits](../products/README.md)
