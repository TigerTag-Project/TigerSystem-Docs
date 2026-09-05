---
sourceHash: 274da6cee971d3d7120b9fed86cbaa0621521489c87f10c92bad42c247cac0be
sourcePath: docs/compatibility/creality.md
---

# <img src="../assets/brands/creality.svg" width="26" alt="" /> Creality

## Liaison imprimante — **En direct**

| Aspect | Détail |
|---|---|
| Protocole | WebSocket, port 9999 (basé sur un battement de cœur) |
| Filament | Prise en charge multi-bobines CFS (boxsInfo) |
| Caméra | Vidéo WebRTC (port 8000) |
| Télémétrie | Températures, avancement du travail, aperçu d'impression |

## RFID natif — spécification documentée, lecture dans l'application prévue

Les étiquettes de bobine Creality sont des **Mifare Classic 1K** avec une **clé
AES-128-ECB pour le secteur 1** et un chiffrement optionnel de la charge utile.
Spécification de décodage en lecture seule :
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## Le déroulé

1. **Ajoutez l'imprimante** — découverte sur le LAN ou ajout par IP ; Tiger
 Studio se connecte via le WebSocket de l'imprimante et maintient la liaison.
2. **Scannez une bobine** — téléphone ou lecteur de bureau ; elle arrive dans
 votre inventaire.
3. **Affectez-la à un emplacement CFS** — Tiger Studio associe les bobines de
 l'inventaire aux boîtes CFS pour que les informations filament côté machine
 correspondent à la réalité.
4. **En direct** — températures, avancement du travail, aperçu d'impression,
 heure de fin (« Ends at ») et le flux de la **caméra WebRTC** dans la vue
 imprimantes.

## Limites

- Les étiquettes Creality natives ne sont pas encore lues dans l'application — la spécification est documentée, et le travail en cours vise à convertir les données des étiquettes constructeur en bobines TigerData (voir [Compatibilité](./README.md)).

---

**◀ Précédent :** [Bambu Lab](./bambu-lab.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Elegoo](./elegoo.md)
