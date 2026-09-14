---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Faire apparaître le port COM pour flasher la TigerScale V3

La TigerScale V3 utilise une puce **ESP32-S3**. Pour flasher le firmware, votre ordinateur doit voir la carte comme un **port COM / port série**.

Sur la plupart des ordinateurs récents, ce port apparaît **tout seul** dès que vous branchez la carte.
Si aucun port n'apparaît dans l'outil de flashage, il manque un petit pilote : suivez la section correspondant à votre système ci-dessous.

> **Avant de commencer**
> - Utilisez un vrai **câble USB de données** (certains câbles ne font que recharger, sans transmettre de données).

## macOS — rien à installer

Aucun pilote nécessaire.
Branchez la carte, ouvrez l'outil de flashage, et la carte apparaît directement dans la liste. Sélectionnez-la et lancez le flashage.

Si elle n'apparaît pas : changez de câble USB et réessayez.

## Windows — installer le pilote (si aucun port COM n'apparaît)

Si l'outil de flashage n'affiche aucun port, c'est que le pilote USB Espressif manque. Voici comment
l'installer, étape par étape :

1. **Téléchargez l'outil** — cliquez sur ce lien, il télécharge `idf-env.exe` directement
 depuis le serveur d'Espressif (par défaut, il atterrit dans votre dossier
 **Téléchargements**) :
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Ouvrez PowerShell en administrateur** — cliquez sur le menu **Démarrer**, tapez
 `powershell`, faites un clic droit sur **Windows PowerShell** et choisissez **Exécuter en
 tant qu'administrateur**.
3. **Copiez cette ligne unique, collez-la dans PowerShell, puis appuyez sur Entrée :**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Vous avez enregistré le fichier ailleurs que dans Téléchargements ? Remplacez uniquement
 > `$env:USERPROFILE\Downloads` par ce dossier — par exemple
 > `C:\Users\votrenom\Desktop`. Le reste de la ligne ne change pas.

4. Attendez que ça se termine (quelques secondes).
5. **Débranchez puis rebranchez la carte.**
6. Rouvrez l'outil de flashage : le port (ex. `USB JTAG/serial debug unit (COM3)`) devrait maintenant apparaître.

> Télécharger l'outil vous-même, plutôt que de coller une commande en une ligne qui
> récupère et exécute un exécutable avec des droits d'administrateur, permet de voir
> ce que vous allez exécuter et d'où ça vient. C'est un clic de plus.

✓ Sélectionnez ce port et lancez le flashage.

## Linux — donner l'accès au port série

Le port apparaît généralement tout seul (`/dev/ttyACM0`), mais votre utilisateur a besoin de la permission d'y accéder.

1. Ouvrez un **terminal**.
2. Ajoutez-vous au groupe qui gère les ports série :

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Déconnectez-vous puis reconnectez-vous** (ou redémarrez) pour que ce soit pris en compte.
4. Rebranchez la carte et rouvrez l'outil de flashage.

> Astuce : si vous utilisez l'outil de flashage **dans un navigateur** (Web Serial), utilisez **Google Chrome** ou **Microsoft Edge** ; Firefox ne prend pas en charge cette fonctionnalité.

## Toujours pas de solution

- **Changez de câble USB** (problème n°1 : un câble « recharge uniquement »).
- Essayez **un autre port USB** de l'ordinateur (de préférence un port direct, pas un hub).
- Sur Windows, ouvrez le **Gestionnaire de périphériques** : si vous voyez un appareil avec un point d'exclamation jaune, le pilote manque → refaites la section Windows ci-dessus.
- Pour forcer le mode flashage : maintenez le bouton **BOOT**, appuyez une fois sur **RESET**, puis relâchez **BOOT**, et réessayez.

---

**◀ Précédent :** [TigerScale](../products/tigerscale.md) · **▲ [Index de la documentation](../../README.md)**
