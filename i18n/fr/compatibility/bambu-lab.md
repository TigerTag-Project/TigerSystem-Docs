---
sourceHash: b2ec3670df173ff1a8fed15d5f7a985bbf742ee0f9f0e5b9656372ee35d13ff0
sourcePath: docs/compatibility/bambu-lab.md
---

# <img src="../assets/brands/bambulab.svg" width="26" alt="" /> Bambu Lab

## Liaison imprimante — **En direct**

Tiger Studio se connecte directement via le réseau local :

| Aspect | Détail |
|---|---|
| Protocole | MQTTS (TLS), port 8883 |
| Filament | Prise en charge de l'AMS — jusqu'à 16 emplacements, édition du filament emplacement par emplacement |
| Découverte | SSDP + sonde TLS, plus l'ajout par IP |
| Caméra | Flux JPEG (TCP 6000) / RTSP |
| Télémétrie | Températures, avancement du travail, aperçu d'impression |

## RFID natif — spécification documentée, lecture dans l'application prévue

Les étiquettes de bobine Bambu sont des **Mifare Classic 1K** avec des **clés
dérivées de l'UID en HKDF-SHA256** — verrouillées cryptographiquement au
service de l'écosystème du fabricant. Une spécification de décodage en lecture
seule est maintenue dans
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Le déroulement

1. **Ajouter l'imprimante** — Tiger Studio la trouve sur le réseau local
 (découverte SSDP, ou ajout par IP) ; appairez-la avec le **code d'accès du
 mode LAN** de l'imprimante (des tutoriels pas à pas dans l'application
 couvrent le mode Dev/LAN par série : A1, P1, X1, H2).
2. **Scanner une bobine** — téléphone ou lecteur de bureau ; la bobine arrive
 dans votre inventaire.
3. **L'affecter à un emplacement AMS** — Tiger Studio envoie le profil de
 filament (matériau, couleur) à l'emplacement via MQTTS ; les informations
 côté machine correspondent désormais à la réalité, sur les 16 emplacements
 AMS possibles.
4. **En direct** — températures, avancement du travail, aperçu d'impression,
 heure de fin réelle **« Se termine à »**, et le flux de la caméra,
 directement dans la vue des imprimantes.

## Limites

- Les étiquettes Bambu natives ne sont pas encore lues dans l'application — la spécification est documentée, et les travaux en cours visent à convertir les données des étiquettes du fabricant en bobines TigerData (voir [Compatibilité](./README.md)).
- Le mode LAN est requis pour la liaison directe.

---

**◀ Précédent :** [Compatibilité](./README.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Creality](./creality.md)
