---
sourceHash: 47248e2bcfb90f6f4c5088019068176f0bb0cf081f3b4484fb0dcab65b87212f
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Liaison imprimante — **En direct**

| Aspect | Détail |
|---|---|
| Protocole | Interrogation HTTP (port 8898) + M-codes TCP (port 8899) |
| Découverte | Multicast UDP (225.0.0.9:19000) |
| Filament | IFS — le système multi-filament de FlashForge |
| Caméra | Flux MJPEG |
| Télémétrie | Températures, avancement de la tâche |

## RFID native — aucune : les machines n'ont pas de lecteur

Les imprimantes FlashForge sont livrées **sans aucun lecteur RFID**, et sans format RFID
qui leur soit propre. Cela en fait la
démonstration la plus nette de l'avantage TigerSystem : **nous avons donné aux machines
FlashForge la capacité de travailler avec du filament identifié en NFC — en utilisant le
lecteur NFC déjà présent dans le smartphone de l'utilisateur.** Une capacité toute neuve,
ajoutée à l'imprimante de quelqu'un d'autre, **totalement gratuite, sans le moindre coût
pour l'utilisateur et sans aucune modification de la machine.**

## FlashForge × TigerSystem — le firmware officiel

Les ingénieurs de FlashForge ont développé, pour les **Creator 5** et **Creator 5 Pro**,
un firmware qui fait tourner **le Cloud FlashForge et le LAN en même temps**.

C'est plus important qu'il n'y paraît. Le firmware d'origine oblige à choisir : Cloud
activé, plus aucun outil local n'atteint l'imprimante. Ce choix était la seule chose
qui séparait un possesseur de FlashForge de cet écosystème — et il n'existe plus. C'est
un **firmware FlashForge officiel**, ni un fork communautaire ni un correctif —
développé avec TigerTag, pour cette intégration, et publié ici avec leur
accord.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Télécharger — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Télécharger — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Sources et guide d'installation</a>
</div>

S'installe depuis une clé USB. Gratuit pour tout le monde, avec ou sans matériel TigerTag.

### La connecter, une fois flashée

Activez le **mode LAN** dans les réglages de l'imprimante — c'est tout ce que le
firmware rend possible. Tiger Studio la trouve ensuite par **découverte
automatique**, ou vous l'ajoutez à la main avec son **adresse IP**. Plus aucun
choix à faire entre le Cloud et les outils locaux : les deux fonctionnent en
même temps.

| | Firmware d'origine | Avec ce firmware |
|---|:---:|:---:|
| Cloud FlashForge — appli, accès à distance | ✅ | ✅ |
| Accès LAN — outils locaux sur votre réseau | ✅ | ✅ |
| **Les deux en même temps** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect et TigerSpool **avec le Cloud activé** | ❌ | ✅ |

### On ne renonce à rien

Le possesseur conserve toutes les fonctions du Cloud FlashForge, et gagne l'écosystème
entier par-dessus : un **gestionnaire de filaments et d'imprimantes** libre et gratuit
sur le bureau, un **téléphone qui lit et écrit les bobines**, et
**[TigerSpool](../products/tigerspool.md)** — un boîtier lecteur open source posé à côté
des machines, qui en dessert **jusqu'à 24 en même temps**, un seul boîtier pour toute
l'étagère.

Ainsi une imprimante sans lecteur et sans format propre lit désormais la puce de
n'importe quelle marque de filament qui utilise TigerTag — et celle des bobines que les
makers étiquettent eux-mêmes chez eux, sur du filament livré sans puce.

Qu'un fabricant d'imprimantes ouvre sa machine à un écosystème qui ne lui appartient pas
est une décision rare. Chaque maker qui en possède une en bénéficie.

## Le déroulé

1. **Ajoutez l'imprimante** — trouvée par le scan réseau (multicast UDP), où il
 ne faut que son Printer ID, ou ajoutée à la main avec son adresse IP, son
 numéro de série et son Printer ID.
2. **Scannez une bobine** — avec votre téléphone (ou un lecteur de bureau) ; elle arrive
 dans votre inventaire.
3. **Affectez-la à un emplacement IFS** — **un scan, un clic** depuis
 l'écran d'affectation de Tiger Studio. L'imprimante finit par connaître son filament
 aussi précisément qu'une machine à RFID intégrée, sur n'importe quel modèle FlashForge,
 sans changement matériel et sans rien ajouter à la machine.
4. **En direct** — températures, avancement de la tâche et flux de la caméra MJPEG dans
 la vue des imprimantes.

## Ajouter l'imprimante

Tiger Studio a besoin de trois éléments pour dialoguer avec une FlashForge : son
**adresse IP**, son **numéro de série** et un **mot de passe** — que l'imprimante
elle-même appelle le **Printer ID**. Une seule valeur, deux noms : ce que l'écran
tactile affiche comme Printer ID est ce qu'on saisit dans le champ mot de passe
de Tiger Studio.

Le nombre de valeurs à saisir dépend de la façon dont l'imprimante est trouvée :

| Comment | Ce que vous saisissez |
|---|---|
| **Scan réseau** — Tiger Studio trouve l'imprimante sur votre réseau local | le **Printer ID** seulement ; le scan fournit l'IP et le numéro de série |
| **À la main** — le scan ne l'a pas trouvée | **adresse IP + numéro de série + Printer ID** |

Il n'existe pas de voie cloud, c'est donc toujours l'un de ces deux cas.
Choisissez votre modèle pour voir où se trouve chaque valeur sur l'écran tactile.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Précédent :** [Elegoo](./elegoo.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Anycubic](./anycubic.md)
