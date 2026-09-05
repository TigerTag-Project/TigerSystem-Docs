---
sourceHash: ea35317b756fc5ec1dbf0d68be2abe2fc4ebd7aff53a8920da9f344f95f4d387
sourcePath: docs/developers/integrations.md
---

# Construit sur TigerTag — les intégrations tierces

Tout l'intérêt d'un protocole ouvert, c'est ce que les *autres* en font. Cela
commence à arriver — voici des projets qui ont intégré TigerTag d'eux-mêmes :

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— la boîte à outils communautaire multiconstructeur pour la RFID des bobines.
Elle lit les formats de tag de nombreux constructeurs — et **TigerTag en fait
partie** : la charge utile ouverte en a fait un ajout sans détour.

## Firmware étendu Snapmaker U1 (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— un firmware communautaire indépendant, sous GPL-3.0, pour la Snapmaker U1
(SSH, diffusion caméra, métriques… et de la RFID comme il faut). **Avec lui, la
Snapmaker U1 lit les TigerTag nativement — ce qui en fait la première imprimante
à lire TigerTag sur la machine elle-même.** Exactement l'avenir que vise le jeu
collectif, arrivé en avance grâce à la communauté.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — une plateforme
d'inventaire de filament (web, iOS/Android, Home Assistant, post-traitement
OrcaSlicer, auto-hébergeable). Son identification des bobines repose sur
TigerTag : *« Marquez vos bobines avec des puces NFC (TigerTags) et gérez votre
inventaire d'un simple geste. »* Un produit tiers, avec sa propre vision — qui
tourne sur le protocole ouvert, exactement comme prévu.

---

Vous construisez quelque chose sur TigerTag ? Dites-le-nous sur le
[Discord](https://discord.gg/3Qv5TSqnJH) ou via l'
[organisation GitHub](https://github.com/TigerTag-Project) — et n'oubliez pas
que [TigerTag Certified](../../TRADEMARK.md) existe pour les intégrations
vérifiées.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Vue d'ensemble pour les développeurs](./README.md), [Que pouvez-vous construire ?](./README.md), [Compatibilité](../compatibility/README.md)
