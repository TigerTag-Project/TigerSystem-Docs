---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Liaison avec l'imprimante — **En direct (bêta)**, depuis Tiger Studio 2.41

Tiger Studio se connecte à **toute imprimante sous Klipper avec Moonraker** :
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon et les autres — 161 machines
figurent dans le parcours d'ajout avec leur photo. L'intégration est en
**bêta**.

| Aspect | Détail |
|---|---|
| Protocole | API HTTP de Moonraker, interrogée toutes les 2 s ; port 7125 par défaut, un autre port peut être indiqué |
| Découverte | Scan du réseau local, ou ajout à la main avec son adresse et une clé d'API Moonraker facultative |
| Emplacements de filament | Portes **Happy Hare** et voies **AFC**, lues et modifiées par les commandes de la machine elle-même (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`) ; une extrudeuse simple est affichée mais ne garde aucune donnée de filament |
| Impression | Travail en direct avec vignette et couches ; pause, reprise, annulation |
| Contrôle | Déplacements, mise à l'origine, ventilateur de pièce, vitesse, éclairage ; températures réglées d'un clic |
| Télémétrie | Extrudeuses, plateau, caisson et chaque `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Caméra | Flux MJPEG ou instantanés |

Les machines dont le fabricant livre un firmware fermé par-dessus Klipper
gardent leur propre liaison : [Snapmaker](./snapmaker.md),
[FlashForge](./flashforge.md) et [Anycubic](./anycubic.md) passent par leurs
propres connecteurs, pas par celui-ci. Une machine joignable des deux façons —
une Creality K1, par exemple — propose le choix au moment de l'ajout.

## RFID native — sans objet

Klipper est un firmware d'imprimante, pas un format d'étiquette de bobine.
L'identité de la bobine vient de sa TigerTag, lue avec un téléphone ou un
lecteur de bureau.

## Le déroulé

1. **Ajoutez l'imprimante** — trouvée par le scan réseau, ou ajoutée à la main.
2. **Scannez une bobine** — avec votre téléphone (ou un lecteur de bureau) ;
 elle arrive dans votre inventaire.
3. **Affectez-la à une porte ou à une voie** — Tiger Studio l'écrit avec la
 commande Happy Hare ou AFC de la machine, donc rien n'est à installer sur
 l'imprimante.
4. **En direct** — travail, températures et caméra dans la vue des
 imprimantes.

Un [TigerSpool](../products/tigerspool.md) peut aussi affecter un emplacement
Klipper, mais cette voie est **expérimentale** : écrite d'après le pilote de
Tiger Studio et une maquette de Moonraker, pas encore essayée sur une
imprimante.

---

**◀ Précédent :** [Snapmaker](./snapmaker.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [OpenSpool](./openspool.md)
