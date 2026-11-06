---
sourceHash: f283703d11787d5928096fe85013ad132ac596d2e2898ee65ac2adbfbb60d0ef
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

## COSMOS — firmware pour Elegoo Centauri Carbon (OpenCentauri)

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)**
— un firmware communautaire indépendant, sous GPL-3.0, pour l'Elegoo Centauri
Carbon (Linux mainline construit avec Yocto, Klipper / Kalico). Son module RFID
pour le Canvas pilote **le lecteur NFC intégré au Canvas**, le module
multicouleur de l'imprimante, et décode les puces avec OpenRFID : **la Centauri
Carbon lit les TigerTag avec son propre lecteur**, sans matériel supplémentaire.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — une plateforme
d'inventaire de filament (web, iOS/Android, Home Assistant, post-traitement
OrcaSlicer, auto-hébergeable). Son identification des bobines repose sur
TigerTag : *« Marquez vos bobines avec des puces NFC (TigerTags) et gérez votre
inventaire d'un simple geste. »* Un produit tiers, avec sa propre vision — qui
tourne sur le protocole ouvert, exactement comme prévu.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — une application de bureau sous
AGPL-3.0 (Python, Windows) qui gère une bibliothèque locale de fichiers
d'impression 3D : aperçus, recherche sémantique, envoi au slicer, file
d'impression. Côté filament, elle lit l'**inventaire TigerTag** : connectez-vous,
ou laissez-la reprendre une session Tiger Studio existante, et vos bobines
TigerTag apparaissent dans son stock — **en lecture seule**, elle n'écrit jamais
dans votre inventaire. Elle filtre alors la bibliothèque sur ce que vos bobines
peuvent vraiment imprimer et prévient avant qu'une impression ne manque de
filament.

---

Vous construisez quelque chose sur TigerTag ? Dites-le-nous sur le
[Discord](https://discord.gg/3Qv5TSqnJH) ou via l'
[organisation GitHub](https://github.com/TigerTag-Project) — et n'oubliez pas
que [TigerTag Certified](../../TRADEMARK.md) existe pour les intégrations
vérifiées.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Vue d'ensemble pour les développeurs](./README.md), [Que pouvez-vous construire ?](./README.md), [Compatibilité](../compatibility/README.md)
