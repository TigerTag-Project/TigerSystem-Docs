---
sourceHash: 41cc4260975408514f69a1b2d61294c1a71723db05cddb913c0f599e1dade5b0
sourcePath: docs/vision/why-tigersystem.md
---

# Pourquoi TigerSystem existe

## Le problème

La bobine de filament est l'objet le plus manipulé de l'impression 3D — et le
moins intelligent. Une fois l'étiquette partie, une bobine ne peut plus vous dire :

- de quel matériau et de quelle couleur elle est,
- comment il faut l'imprimer,
- combien il reste de filament,
- où elle se range sur votre étagère,
- à qui elle appartient.

Les fabricants d'imprimantes ont commencé à y remédier avec des étiquettes RFID
— **mais chacun n'y remédie qu'à l'intérieur de ses propres murs.** Une
étiquette Bambu Lab ne signifie rien pour une imprimante Creality ; une
étiquette Anycubic ne signifie rien pour personne d'autre. Les données
appartiennent à l'écosystème du fabricant, pas à la personne qui a acheté le
filament.

## La réponse

**TigerSystem** est un écosystème ouvert bâti autour d'une seule idée :

> **L'identité de la bobine appartient à son propriétaire — pas à une marque d'imprimante.**

**Nous avons rendu les bobines de filament intelligentes.** Elles savent ce
qu'elles sont — et elles peuvent le dire à tout le monde, sans la moindre
friction. L'ambition : **devenir aux matériaux de l'impression 3D ce que le
code-barres est devenu au rayon.**

Chaque bobine porte une puce NFC [TigerTag](../products/tigertag.md) qui
contient son profil complet — marque, matériau, couleur, diamètre, paramètres
d'impression. N'importe quel lecteur compatible — un smartphone, un lecteur de
bureau, une imprimante — peut la lire.
Une base de données en ligne unique et partagée ([du Firebase standard](../concepts/inventory-and-cloud-sync.md))
garde le compte du propriétaire, son inventaire, son historique et ses partages
synchronisés sur tous ses appareils.

## Ce que « centré sur l'utilisateur » veut dire concrètement

| Écosystème centré sur l'imprimante | TigerSystem |
|---|---|
| Étiquette lisible uniquement par les imprimantes d'une seule marque | Étiquette lisible par n'importe quel appareil NFC |
| Format de données secret ou chiffré | Format ouvert et documenté |
| L'inventaire vit dans l'application du fournisseur | L'inventaire vit dans **votre** compte |
| Ne fonctionne qu'avec le filament du fournisseur | Fonctionne avec **n'importe quelle** marque de filament |
| Meurt avec le cloud du fournisseur | SDK ouverts, spécification ouverte, reconstructible soi-même |

## L'histoire derrière le bac à sable

Tout a commencé en **2023, juste après Formnext**. Bambu Lab avait ouvert l'ère
des étiquettes de bobine propriétaires ; cette année-là, Creality et Anycubic
ont suivi, chacun lançant des imprimantes équipées de lecteurs RFID/NFC — et
chacun avec sa propre puce verrouillée et propriétaire. Nous avons décidé que
l'industrie ne pouvait pas se figer ainsi : il fallait qu'existe un format
**open source, neutre, multiplateforme et centré sur l'utilisateur**. Et il ne
pouvait pas s'agir d'un manifeste — il fallait une **alternative viable et plus
capable** que ce que proposent les fabricants d'imprimantes, remise aux
fabricants de filament tiers pour que leurs bobines en fassent *plus* que les
bobines propriétaires, et que leurs parts de marché ne s'érodent pas face au
filament captif.

Alors nous nous sommes mis au travail — et nous sommes partis en Chine. Nous
avons présenté le projet à des fabricants d'imprimantes — Bambu Lab (au
Dr Tao, son PDG), Elegoo, Creality, Anycubic, et Biqu / BigTreeTech (en
rencontrant également son PDG) — ainsi qu'à des fabricants de filament et des
fournisseurs d'équipement (eSun, R3D, Landu, Sunlu, Jamg He), après l'avoir
déjà présenté à Rosa3D en Europe. L'accueil a été chaleureux. Nous avons conçu
un protocole **plus optimisé et plus polyvalent** que les protocoles
propriétaires — centré sur l'utilisateur, multimarque, multiplateforme. Nous
avons étudié les flux de travail des usines de filament pour comprendre comment
programmer des puces NFC à l'échelle industrielle, et nous avons sourcé la
production des puces — étiquettes sur mesure, supports sur mesure, très gros
volumes — à un coût assez bas pour un objectif non négociable :
**ajouter la technologie sans ajouter un centime au prix de la bobine pour
l'utilisateur final.**

Dès **septembre 2024**, les puces étaient produites en masse et les usines
approvisionnées — tout l'écosystème côté usine est venu en premier. À ce
moment-là, il n'existait **aucune application mobile ni aucune application de
bureau** ; elles sont venues ensuite. Le mobile d'abord, parce qu'il n'oblige à
rien acheter : le lecteur est déjà dans la poche de tout le monde.

Ce choix vient d'une question que nous n'avons cessé de poser en Chine :
*« Où sont les lecteurs RFID ? »* Tout le monde répondait : *« Dans les
Bambu Lab. »* Et nous répondions : faux. Chez Bambu Lab, les lecteurs sont
**dans l'AMS, pas dans l'imprimante** — une bobine tierce ne peut tout
simplement pas être détectée par la machine. **Les lecteurs RFID sont dans vos
poches.** Dans chaque téléphone, prêts à servir — sans même que vous le sachiez.

Honnêtement : construire tout cela nous-mêmes n'a jamais été le plan de départ.
**Plus de 2,5 millions de puces NFC TigerTag ont été produites — ce qui fait de
TigerTag le protocole RFID tiers le plus déployé au monde** — la plupart
intégrées en usine par des marques de filament tierces (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D — Filforme, Nanovia et d'autres étant en cours
d'intégration), auxquelles s'ajoute une part plus modeste
achetée par des makers pour étiqueter leurs bobines chez eux. Nous avons
naïvement supposé que la communauté imaginerait les usages d'elle-même : une
identité NFC ouverte et documentée sur chaque bobine ressemblait à un terrain
de jeu évident.

Cela ne s'est pas produit. Malgré l'ampleur du déploiement, aucune communauté
ne s'est emparée du sujet ; personne n'a jugé qu'il valait la peine de
construire des intégrations autour du protocole. Nous espérions que d'autres
s'en chargeraient — ils ne l'ont pas fait. Alors nous l'avons fait, même si ce
n'était pas notre objectif initial : nous nous sommes mis à **imaginer les
usages nous-mêmes**, pour montrer le potentiel d'un **protocole NFC open source
d'identification des matériaux centré sur l'utilisateur, et non sur
l'imprimante** — et pour laisser derrière nous des exemples fonctionnels à qui
reprendra enfin le fil.

Et cela commence à arriver :
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) lit les TigerTag,
[Spooly Tracker](https://spoolytracker.com/) a bâti son identification de
bobines dessus, et le
[firmware étendu communautaire](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
du Snapmaker U1 les lit **nativement sur l'imprimante elle-même** — voir les
[intégrations tierces](../developers/integrations.md).

## Un bac à sable, volontairement

La **partie visible par l'utilisateur** de TigerSystem est délibérément un
**bac à sable**. Chaque application et chaque appareil que nous créons pour les
utilisateurs finaux — Tiger Studio, Tiger NFC Connect, TigerScale, TigerPOD, et
d'autres projets à venir — n'a pas d'autre ambition que de **montrer le
potentiel** : chacun est une **preuve de concept** fonctionnelle de ce que rend
possible un **protocole open source, standard, agnostique et multiplateforme**
comme TigerTag, du script d'un week-end au produit complet. Chacun peut
s'inspirer de notre travail d'intégration et **imaginer les fonctionnalités de
demain**. Ce sont des exemples à copier, pas une plateforme à rejoindre.

Le **côté usine, lui, n'est pas un bac à sable.** Derrière les 2,5 millions de
puces tourne une suite de qualité industrielle — [TigerTag Factory &
Manager](../products/factory-suite.md) : gestion de base de données filaments et
programmation NFC/RFID en masse à la cadence de la ligne, avec une signature
d'usine prouvant l'origine de chaque produit — utilisée **en production** par
des usines de filament partenaires.
Le bac à sable est le showroom ; la ligne de production n'est pas une expérimentation.

## Neutre par conception

TigerTag ne prend parti ni pour les marques de filament, ni pour les fabricants
d'imprimantes, ni pour les distributeurs.
Ce n'est pas un jardin clos avec une liste de partenaires — c'est un **format
que n'importe qui peut lire et écrire**.

Cette neutralité s'étend aux puces elles-mêmes : la plupart des utilisateurs
finaux achètent des **puces NTAG bon marché et sans marque** sur Amazon,
AliExpress ou en local — et c'est délibérément très bien ainsi. Rien ne les
bloque ; le protocole fonctionne à l'identique. Les puces officielles de marque
TigerTag aident à financer la R&D, mais elles ne sont pas obligatoires :
**la première récompense, c'est que le protocole vive chez les utilisateurs, à
la maison comme au bureau.**

Le protocole lui-même n'est pas imposé non plus : les puces sont livrées
**déverrouillées**, si bien qu'un utilisateur qui préfère un autre format
NFC/RFID — existant ou sur mesure — peut réécrire la puce et migrer. TigerTag
est le format de base avec lequel les bobines arrivent, pas un format dans
lequel vous êtes enfermé. Rien dans l'écosystème n'est un prérequis : lisez la
spécification de la puce, prenez un SDK, et construisez le logiciel ou
l'activité que vous voulez vraiment.

## Le manifeste

> *« Fait pour les makers. Ouvert à tous. Né de la communauté, TigerTag donne
> aux utilisateurs de vraies données et une liberté totale. 100 % open source,
> il relie vos matériaux, vos imprimantes et vos marques sous un langage
> universel, aujourd'hui et demain. Rejoignez le mouvement. Connectez votre
> monde avec TigerTag. »*
>
> — **Benoit Michaut**, PDG et fondateur · Vision : **Bon marché et réutilisable**

---

**▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Écosystème centré sur l'utilisateur](../philosophy/user-centric-ecosystem.md) · **Les personnes derrière tout ça :** [L'équipe](./team.md)

**Voir aussi :** [Philosophie de l'écosystème ouvert](../philosophy/open-ecosystem.md), [Identité universelle du filament](../concepts/universal-filament-identity.md)
