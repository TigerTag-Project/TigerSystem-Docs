---
title: L'identité ouverte du filament
description: L'identité NFC ouverte du filament pour l'impression 3D — ce qu'est TigerTag, ce qui tourne dessus, et comment construire le vôtre.
template: splash
editUrl: false
banner:
  content: Cette page a été <strong>traduite automatiquement</strong> depuis l’anglais. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BFR%5D+accueil">Signalez une erreur</a>.
hero:
  title: TigerSystem
  tagline: Votre filament, enfin intelligent — et enfin le vôtre. Une petite puce NFC ouverte, et une bobine peut enfin se présenter elle-même.
  image:
    html: |
      <img src="/assets/hero-tigersystem-ecosystem.png" alt="Tiger Studio sur un ordinateur, un lecteur TigerPOD tenant une bobine taguée, et l'application mobile" width="720" height="480" />
  actions:
    - text: Votre première bobine intelligente
      link: /fr/tutorials/first-smart-spool/
      icon: right-arrow
    - text: Pourquoi TigerSystem existe
      link: /fr/vision/why-tigersystem/
      variant: minimal
    - text: Parcourir les produits
      link: /fr/products/
      variant: minimal
---

## TigerSystem en 30 secondes

Toutes les étagères d'impression 3D cachent le même mystère : vingt bobines, la
moitié sans étiquette, aucune capable de dire ce qu'elle est, ce qu'il en
reste, ni comment elle aime être imprimée.

**TigerSystem règle cela avec une petite puce.** Collez une puce NFC
[TigerTag](/fr/products/tigertag/) sur une bobine et la bobine se présente
elle-même — à votre téléphone, à votre ordinateur, à votre imprimante :
*« Je suis du PLA noir mat de la marque X, 1,75 mm, imprimez-moi à 210 °C, et
il me reste 640 g. »*

Les fabricants d'imprimantes taguent eux aussi leurs bobines — mais de façon
**verrouillée**, dans des formats secrets, et seulement pour leurs propres
machines. TigerSystem renverse la logique : la puce est **ouverte et lisible
par tout le monde**, les données appartiennent à **votre** compte, et chaque
brique — applications, cloud, balance, lecteur, la spécification de la puce
elle-même — est publiée pour que chacun puisse l'utiliser ou construire
dessus. C'est un format, pas un jardin clos.

Plus de **2,5 millions de puces** ont été produites et sortent d'usine dans le
filament de marques comme Rosa3D, eSun, Sunlu et R3D, ce qui fait de TigerTag
le protocole RFID tiers le plus déployé au monde.

<div class="ts-cardgrid">
<a class="ts-card" href="/fr/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Prêt à essayer</span><span class="ts-card__text">Rendez une bobine intelligente en cinq minutes — une puce NTAG vierge, votre téléphone, l'application gratuite. Sans compte, entièrement hors ligne.</span></span></a>
<a class="ts-card" href="/fr/products/"><span class="ts-card__body"><span class="ts-card__title">Utilisateur</span><span class="ts-card__text">Ce que chaque produit fait concrètement pour vous — puces, applications, balance, support de lecteur.</span></span></a>
<a class="ts-card" href="/fr/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Propriétaire d'imprimante</span><span class="ts-card__text">Est-ce que ça marche avec votre machine ? Six marques sont opérationnelles, et la puce fonctionne avec toutes les autres.</span></span></a>
<a class="ts-card" href="/fr/developers/"><span class="ts-card__body"><span class="ts-card__title">Développeur</span><span class="ts-card__text">Lisez et écrivez les puces depuis JavaScript ou Python, ou branchez l'identité sur votre propre logiciel.</span></span></a>
<a class="ts-card" href="/fr/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Fabricant de filament</span><span class="ts-card__text">Intégration en usine en quelques jours, environ une seconde par puce, à l'échelle de la production.</span></span></a>
<a class="ts-card" href="/fr/faq/"><span class="ts-card__body"><span class="ts-card__title">Simplement curieux</span><span class="ts-card__text">Les questions que tout le monde pose, avec leurs réponses — puces, cloud, imprimantes, confidentialité, tout y est.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Un vrai établi TigerSystem — Tiger Studio Manager, une TigerScale, un capteur de couleur TD1s, un lecteur ACR122U et un TigerPOD" />
<figcaption>Pas une maquette : le bac à sable sur un vrai établi — Studio, TigerScale, TD1s et TigerPOD au travail ensemble.</figcaption>
</figure>

## Où vit la vérité

Ce wiki est généré depuis le
[dépôt TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs),
qui est la **source de vérité** de l'écosystème. Chaque page porte un lien
« Modifier la page » qui mène droit au fichier Markdown correspondant : les
corrections voyagent en pull requests, et lorsqu'une autre surface contredit le
dépôt, c'est le dépôt qui a raison.

Les pages anglaises sont l'original ; **le français en est dérivé**, traduit
automatiquement puis relu. Si une page vous paraît fautive, le bandeau en haut
de page ouvre une issue pré-remplie.

Les assistants IA devraient commencer par [llms.txt](/llms.txt), l'explication
canonique condensée. Pour tous les autres, le [glossaire](/fr/glossary/) est un
bon point de départ dès qu'un terme fait obstacle.
