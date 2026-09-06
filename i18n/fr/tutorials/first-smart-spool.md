---
sourceHash: 5ce83667345f3682bb55b7ce2166291343335f200cf8ee676349ec58427b734c
sourcePath: docs/tutorials/first-smart-spool.md
---

# Votre première bobine intelligente en 5 minutes

Rendez n'importe quelle bobine de filament intelligente — **gratuitement, chez
vous**, avec ce que vous possédez déjà ou que vous trouverez pour quelques
centimes.

## Ce qu'il vous faut

- **N'importe quel smartphone NFC** (c'est lui le lecteur — il est déjà dans
 votre poche)
- **Une puce NTAG vierge** — NTAG213, 215 ou 216, **ronde de 25 mm**
 recommandée (quelques centimes sur Amazon, AliExpress ou en boutique ; rien
 d'officiel n'est nécessaire)
- **Tiger NFC Connect**, l'application gratuite —
 [téléchargement iOS et Android](https://tigersystem.io/download)

> Vous avez déjà acheté du filament chez Rosa3D, eSun, Sunlu, R3D… ? Votre
> bobine porte peut-être **déjà des puces TigerTag** — sautez le formulaire et
> appuyez simplement sur « Scan ».

## Les étapes

**Vous approchez la puce deux fois :** une fois pour démarrer, une fois pour
écrire.

1. **Installez Tiger NFC Connect** et ouvrez l'application.
2. **Appuyez sur « Scan »** et approchez le téléphone de votre puce vierge.
 L'application la lit, constate qu'elle est vide, et vous propose de créer
 son filament.
3. **Décrivez votre filament** — choisissez la matière, la couleur, l'aspect,
 le poids, etc. Les choix proviennent du catalogue partagé : votre bobine
 sera donc comprise à l'identique par toutes les applications compatibles.
 C'est un formulaire rapide ; rien à taper de mémoire.
4. **Appuyez sur « Make », puis approchez à nouveau le téléphone de la
 puce.** Ce deuxième contact, c'est l'écriture. Une seconde plus tard, les
 données sont **sur la puce elle-même** — votre bobine sait désormais ce
 qu'elle est.
5. **Collez la puce sur la bobine.**

<img src="../assets/nfc-scan.gif" width="420" alt="Le geste NFC, animé — le téléphone rencontre la puce, la bobine est identifiée" />

*Tout le geste, en mouvement.*

### Deux puces sur une bobine — « Dual NFC »

Les bobines d'usine portent **deux puces, sur les faces opposées**, pour
qu'une puce soit toujours face au lecteur
([pourquoi deux ?](../concepts/tigertag-chip.md)). Vous pouvez faire pareil,
en une seule session :

1. Scannez la première puce vierge et remplissez le formulaire comme ci-dessus.
2. Avant d'écrire, **appuyez sur le bouton « Dual NFC »**.
3. **Appuyez sur « Make »** comme d'habitude — mais l'application vous demande
 maintenant les puces l'une après l'autre : **Make 1/2**, puis **Make 2/2**.
 Les deux puces portent au final la même identité.

> **Commencez toujours par la puce que vous avez scannée.** Celle qui a ouvert
> la création est celle que l'application attend en 1/2 ; l'autre puce suit en
> 2/2.

C'est tout. Rescannez la bobine quand vous voulez, avec le lecteur le plus
proche : un simple contact avec **n'importe quel téléphone NFC**, ou posez-la
sur un lecteur relié à
[Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)) — dans les deux cas, la bobine se
présente d'elle-même. Tout ce qui précède fonctionne **100 % hors ligne** —
sans compte, sans cloud, sans frais.

## Facultatif : l'ajouter à votre inventaire

Vous voulez retrouver la bobine dans votre inventaire synchronisé (visible sur
ordinateur, partageable avec des amis) ? Dites-le simplement dans
l'application quand elle vous le demande — c'est un choix explicite, jamais
automatique.

## Et ensuite ?

- Posez la bobine sur une [TigerScale](../products/tigerscale.md) et regardez
 son poids se mettre à jour en direct.
- Ouvrez [Tiger Studio](../products/tiger-studio.md) sur votre ordinateur et
 retrouvez-y la même bobine.
- Bobine rechargée ou réutilisée ? Réencodez la puce —
 [Seconde vie](../philosophy/second-life.md).

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Tiger NFC Connect](../products/tigertag-connect.md), [La puce TigerTag](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
