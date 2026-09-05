---
sourceHash: 8fb2a106b269ff558a5c6a603c9d15dfec6e4b792dc26c4ff3c3a68a6625575a
sourcePath: docs/compatibility/snapmaker.md
---

# <img src="../assets/brands/snapmaker.svg" width="26" alt="" /> Snapmaker

## Liaison imprimante — **En direct**

| Aspect | Détail |
|---|---|
| Protocole | WebSocket Moonraker (JSON-RPC), port 7125 + extensions propriétaires |
| Découverte | Scan HTTP |
| Filament | Édition du filament par emplacement (modèle de couleur RRGGBBAA) |
| Contrôle | Panneau de contrôle en direct (axes, températures, lumière, ventilateur, vitesse, chargement/déchargement) |
| Télémétrie | Températures, progression du travail |

## RFID natif — spécification documentée, lecture dans l'application prévue

Les tags de bobine Snapmaker sont des **Mifare Classic 1K** avec des **clés par
secteur dérivées via HKDF** et une **signature RSA-2048 PKCS#1 v1.5 + SHA-256**
— le format le plus fortement verrouillé documenté à ce jour. Spécification de
décodage en lecture seule :
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## Le déroulé

1. **Ajoutez l'imprimante** — scan HTTP sur le LAN ou ajout par IP ; Tiger
 Studio parle Moonraker (JSON-RPC sur WebSocket).
2. **Scannez une bobine** — lecteur du téléphone ou du bureau ; elle arrive dans
 votre inventaire.
3. **Affectez-la à un emplacement** — édition du filament par emplacement (le
 modèle de couleur RRGGBBAA de Snapmaker est géré de façon transparente).
4. **Suivi et contrôle** — télémétrie, progression du travail, et un **panneau
 de contrôle** : axes, températures, lumière, ventilateur, mode de vitesse,
 chargement/déchargement par emplacement.

## Limites

- Les tags Snapmaker natifs ne sont pas encore lus dans l'application — la spécification est documentée, et les travaux en cours visent à convertir les données des tags constructeur en bobines TigerData (voir [Compatibilité](./README.md)).

## La première imprimante à lire TigerTag nativement

Le
[firmware étendu Snapmaker U1](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
de la communauté (indépendant, GPL-3.0) ajoute le SSH, la diffusion caméra, des
métriques — et avec eux, **la Snapmaker U1 lit les TigerTag nativement, sur la
machine elle-même**. Cela fait de la U1 la première imprimante où une bobine
TigerTag est reconnue sans aucune application intermédiaire — l'avenir que vise
le [jeu collectif](../vision/for-filament-manufacturers.md), arrivé en avance
grâce à la communauté. Voir les
[intégrations tierces](../developers/integrations.md).

---

**◀ Précédent :** [Anycubic](./anycubic.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Klipper](./klipper.md)
