---
sourceHash: 93596d78a4523e76333ac18799353fbf0935304382a1f5dbb44fbe567ec84947
sourcePath: docs/compatibility/elegoo.md
---

# <img src="../assets/brands/elegoo.svg" width="26" alt="" /> Elegoo

## Liaison imprimante — **opérationnelle**

| Aspect | Détail |
|---|---|
| Protocole | MQTT, port 1883 |
| Découverte | Diffusion UDP, port 52700 |
| Filament | 4 emplacements (Canvas / bac) |
| Contrôle | Panneau de contrôle en direct : prise d'origine et déplacement manuel, températures, lumière, ventilateur, mode de vitesse, chargement/déchargement |
| Télémétrie | Températures, avancement du travail |

## RFID natif — spécification documentée, lecture dans l'application prévue

Les tags de bobine Elegoo sont des **Mifare Ultralight** protégés uniquement
par des **octets magiques** (`EE EE EE EE`) — sans véritable authentification.
Spécification de décodage en lecture seule :
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## Le déroulé

1. **Ajoutez l'imprimante** — découverte automatique sur le réseau local
 (diffusion UDP) ou ajout par IP. Nécessite d'activer une fois **le mode
 LAN Only** sur l'écran tactile de l'imprimante —
 [marche à suivre](#passer-en-mode-lan).
2. **Scannez une bobine** — téléphone ou lecteur de bureau ; elle atterrit dans
 votre inventaire.
3. **Affectez-la à un emplacement** — Tiger Studio associe les bobines de
 l'inventaire aux quatre emplacements Canvas/bac.
4. **Suivi et contrôle** — au-delà de la télémétrie et de l'avancement du
 travail, Elegoo bénéficie d'un **panneau de contrôle complet** : prise
 d'origine et déplacement manuel des axes, consignes de buse et de plateau,
 allumage de la lumière, pilotage du ventilateur, choix du mode de vitesse,
 chargement/déchargement du filament emplacement par emplacement.

## Passer en mode LAN

Le lien direct de Tiger Studio nécessite d'activer **le mode LAN Only** sur l'imprimante
elle-même — une configuration ponctuelle, à l'écran.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bonus : écrire des tags au format Elegoo

L'éditeur intégré à l'application peut **réécrire une puce dans le format
attendu par les imprimantes Elegoo** — une puce TigerTag peut donc même devenir
un tag Elegoo natif si c'est ce dont votre organisation a besoin. Votre puce,
votre choix.

## Limites

- Les tags Elegoo natifs ne sont pas encore lus dans l'application — la spécification est documentée, et le travail en cours vise à convertir les données des tags constructeurs en bobines TigerData (voir [Compatibilité](./README.md)).

---

**◀ Précédent :** [Creality](./creality.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [FlashForge](./flashforge.md)
