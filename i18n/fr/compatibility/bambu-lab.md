---
sourceHash: 5d2504ca693bf2a4da2b772ca4ce24bf4b24a5760d0bcf0a7672fb10983a5456
sourcePath: docs/compatibility/bambu-lab.md
---

# <img src="../assets/brands/bambulab.svg" width="26" alt="" /> Bambu Lab

## Liaison imprimante — **En direct**

Tiger Studio se connecte à une imprimante Bambu Lab de deux façons :

| Aspect | Détail |
|---|---|
| LAN | MQTTS (TLS) directement vers l'imprimante, port 8883. Nécessite d'activer une fois **le mode LAN Only** et **le mode Développeur** sur l'imprimante — [marche à suivre par modèle](#passer-en-mode-lan). |
| Cloud | Connectez-vous une fois avec votre compte Bambu Lab (email + code à usage unique) — toutes les imprimantes du compte sont trouvées automatiquement, code d'accès LAN inclus. Aucun réglage côté imprimante n'est nécessaire pour cette partie. |
| Filament | Prise en charge de l'AMS — jusqu'à 16 emplacements, édition du filament emplacement par emplacement |
| Découverte | LAN : SSDP + sonde TLS, plus l'ajout par IP. Cloud : automatique, depuis le compte. |
| Caméra | Flux JPEG (TCP 6000) / RTSP — même flux dans les deux cas, nécessite d'activer **LAN Mode Liveview** sur l'imprimante |
| Télémétrie | Températures, avancement du travail, aperçu d'impression |

> **Les connexions cloud sont en lecture seule pour l'instant**, à une exception près. Vous avez
> la télémétrie en direct — températures, avancement, caméra — et l'**éclairage** de l'imprimante,
> qui s'allume bien depuis le cloud. Tout le reste qui agit sur la machine (pause, reprise, arrêt)
> nécessite la voie LAN.

## RFID natif — spécification documentée, lecture dans l'application prévue

Les étiquettes de bobine Bambu sont des **Mifare Classic 1K** avec des **clés
dérivées de l'UID en HKDF-SHA256** — verrouillées cryptographiquement au
service de l'écosystème du fabricant. Une spécification de décodage en lecture
seule est maintenue dans
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Le déroulement

1. **Ajouter l'imprimante** — soit **sur le réseau local** (découverte SSDP,
 ou ajout par IP, appairée avec le code d'accès LAN de l'imprimante), soit
 **depuis le cloud** (connexion avec votre compte Bambu Lab — toutes les
 imprimantes du compte sont trouvées automatiquement). La voie LAN nécessite
 d'abord d'activer une fois le mode LAN Only et le mode Développeur sur
 l'imprimante — [marche à suivre par modèle](#passer-en-mode-lan).
2. **Scanner une bobine** — téléphone ou lecteur de bureau ; la bobine arrive
 dans votre inventaire.
3. **L'affecter à un emplacement AMS** — Tiger Studio envoie le profil de
 filament (matériau, couleur) à l'emplacement via MQTTS ; les informations
 côté machine correspondent désormais à la réalité, sur les 16 emplacements
 AMS possibles.
4. **En direct** — températures, avancement du travail, aperçu d'impression,
 heure de fin réelle **« Se termine à »**, et le flux de la caméra,
 directement dans la vue des imprimantes.

## Passer en mode LAN

La voie LAN nécessite d'activer **le mode LAN Only** et **le mode Développeur** sur l'imprimante
elle-même — une configuration ponctuelle, à l'écran. Choisissez votre modèle ci-dessous pour la
marche à suivre exacte.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Limites

- Les étiquettes Bambu natives ne sont pas encore lues dans l'application — la spécification est documentée, et les travaux en cours visent à convertir les données des étiquettes du fabricant en bobines TigerData (voir [Compatibilité](./README.md)).
- Le flux caméra nécessite LAN Mode Liveview activé sur l'imprimante, quelle que soit la voie de connexion utilisée.

---

**◀ Précédent :** [Compatibilité](./README.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Creality](./creality.md)
