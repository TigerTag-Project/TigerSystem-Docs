---
sourceHash: 34416628551d83bd9fa02324bae0b2fbfb63e5cebd7cce0c1f49579591fc94e9
sourcePath: docs/tutorials/flashforge-connection-tutorial.md
---

# FlashForge : tutoriel de connexion

Les imprimantes FlashForge se connectent uniquement sur votre réseau local — il
n'y a pas d'option cloud. Ce qu'il faut relever sur l'écran tactile dépend de la
façon dont Tiger Studio trouve l'imprimante :

- **Trouvée par le scan réseau :** le **Printer ID** seulement — étape 3.
- **Ajoutée à la main :** le **numéro de série** et l'**adresse IP** (étape 2),
 plus le **Printer ID** (étape 3).

Voir [Compatibilité FlashForge](../compatibility/flashforge.md) pour le reste de
l'intégration.

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step1.jpg" alt="Écran tactile FlashForge — bouton Basic Info" />
<p><strong>Étape 1.</strong> Sur l'interface principale, touchez le bouton « Basic Info » en bas à droite de l'écran.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step2.jpg" alt="Écran tactile FlashForge — page Basic Info" />
<p><strong>Étape 2.</strong> Sur la page Basic Info, relevez le numéro de série et l'adresse IP.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step3.jpg" alt="Écran tactile FlashForge — page Network Mode" />
<p><strong>Étape 3.</strong> Touchez l'icône en forme d'engrenage, appuyez sur « Network Mode », puis relevez le Printer ID.</p>
</div>

> **Une valeur, deux noms.** L'imprimante l'appelle *Printer ID* ; le formulaire
> de Tiger Studio l'appelle **mot de passe**. C'est le Printer ID que vous y
> saisissez.

---

**◀ Précédent :** [Compatibilité FlashForge](../compatibility/flashforge.md) · **▲ [Index de la documentation](../../README.md)**
