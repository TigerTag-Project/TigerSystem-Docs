---
sourceHash: da850b391a45673fa46971a3e53c25a5aca86c957e7faa3146b2987def2c88c2
sourcePath: docs/compatibility/flashforge.md
---

# <img src="../assets/brands/flashforge.svg" width="26" alt="" /> FlashForge

## Liaison imprimante — **En direct**

| Aspect | Détail |
|---|---|
| Protocole | Interrogation HTTP (port 8898) + M-codes TCP (port 8899) |
| Découverte | Multicast UDP (225.0.0.9:19000) |
| Filament | Prise en charge de la station matière (matlStation) |
| Caméra | Flux MJPEG |
| Télémétrie | Températures, avancement de la tâche |

## RFID native — aucune : les machines n'ont pas de lecteur

Les imprimantes FlashForge sont livrées **sans aucun lecteur RFID**. Cela en fait la
démonstration la plus nette de l'avantage TigerSystem : **nous avons donné aux machines
FlashForge la capacité de travailler avec du filament identifié en NFC — en utilisant le
lecteur NFC déjà présent dans le smartphone de l'utilisateur.** Une capacité toute neuve,
ajoutée à l'imprimante de quelqu'un d'autre, **totalement gratuite, sans le moindre coût
pour l'utilisateur et sans aucune modification de la machine.**

## Le déroulé

1. **Ajoutez l'imprimante** — découverte automatique sur le réseau local (multicast UDP)
 ou ajout par IP.
2. **Scannez une bobine** — avec votre téléphone (ou un lecteur de bureau) ; elle arrive
 dans votre inventaire.
3. **Affectez-la à un emplacement de la station matière** — **un scan, un clic** depuis
 l'écran d'affectation de Tiger Studio. L'imprimante finit par connaître son filament
 aussi précisément qu'une machine à RFID intégrée, sans que FlashForge ait changé quoi
 que ce soit.
4. **En direct** — températures, avancement de la tâche et flux de la caméra MJPEG dans
 la vue des imprimantes.

---

**◀ Précédent :** [Elegoo](./elegoo.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Anycubic](./anycubic.md)
