---
sourceHash: fea861141f24ce7fe7b849b0c2846db637c655de73e02bf1bb24ed1793731aba
sourcePath: docs/compatibility/anycubic.md
---

# <img src="../assets/brands/anycubic.svg" width="26" alt="" /> Anycubic

## Liaison imprimante — **En direct** (LAN + cloud)

| Aspect | Détail |
|---|---|
| Protocole (LAN) | MQTTS, port 9883 (TLS 1.2), directement vers l'imprimante |
| Protocole (cloud) | REST signé + MQTT du cloud constructeur |
| Filament | Boîtier multicouleur ACE — prise en charge par emplacement |
| Découverte | Sonde `/info`, port 18910 |
| Caméra | Flux FLV (port 18088) |
| Contrôle | Panneau de contrôle en direct (axes, températures, lumière, ventilateur, chargement/déchargement) |

> **Note :** le mode cloud est le seul cas où une liaison imprimante transite par
> un cloud constructeur — le mode LAN reste entièrement local.

## RFID natif — spécification documentée, lecture dans l'application prévue

Les tags de bobine Anycubic sont des **Mifare Ultralight** **sans
authentification ni chiffrement** — lisibles (et clonables) sans difficulté.
Spécification de décodage en lecture seule :
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## Le déroulé

1. **Ajoutez l'imprimante** — deux voies : le **mode LAN** (découverte locale
 via la sonde `/info` ; les identifiants de connexion sont importés depuis la
 configuration du trancheur constructeur) ou le **mode cloud** via le compte
 Anycubic.
2. **Scannez une bobine** — lecteur du téléphone ou du bureau ; elle arrive dans
 votre inventaire.
3. **Affectez-la à un emplacement ACE** — Tiger Studio associe les bobines de
 l'inventaire au boîtier multicouleur ACE.
4. **Suivi et contrôle** — télémétrie, progression du travail, flux caméra FLV,
 et un **panneau de contrôle** : axes, températures, lumière, ventilateur,
 chargement/déchargement par emplacement.

## Limites

- Les tags Anycubic natifs ne sont pas encore lus dans l'application — la spécification est documentée, et les travaux en cours visent à convertir les données des tags constructeur en bobines TigerData (voir [Compatibilité](./README.md)).

---

**◀ Précédent :** [FlashForge](./flashforge.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Snapmaker](./snapmaker.md)
