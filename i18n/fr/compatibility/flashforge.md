---
sourceHash: 7e1e09221474393b579f61e7cbbe031c66bc291ce96ceed4e841fbe387bb24aa
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

## Se connecter par adresse IP

FlashForge n'a pas d'option cloud, et la découverte automatique sur le réseau local ne trouve pas
toujours chaque imprimante. Dans ce cas, ajoutez-la par IP — il faudra relever son numéro de série,
son adresse IP et son Printer ID sur l'écran tactile au préalable. Choisissez votre modèle ci-dessous
pour la marche à suivre exacte.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Précédent :** [Elegoo](./elegoo.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Anycubic](./anycubic.md)
