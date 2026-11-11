---
sourceHash: ce7797639f045c9154227cdd8686b647e174f7ddf43143ca72b59c143690f412
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Connecter un assistant IA à votre compte

Demandez à Claude ou à ChatGPT « combien de PETG il me reste ? » et obtenez la
réponse depuis votre propre inventaire. Le connecteur TigerSystem.io permet à un
assistant IA de lire votre compte TigerSystem et, si vous l'autorisez, d'y faire des modifications. C'est la même idée que le
serveur local de Tiger Studio, mais hébergée : ça marche depuis le web, depuis
un téléphone, et sans que Studio soit ouvert.

**L'adresse du connecteur :**

```
https://mcp.tigersystem.io/mcp
```

Il parle MCP (Model Context Protocol), le standard ouvert que les assistants
utilisent pour accéder à des outils externes. Tout assistant qui gère les
serveurs MCP distants avec OAuth peut l'utiliser.

**Réservé aux membres de la TigerSquad.** Le connecteur, lecture comprise, est
un avantage [TigerSquad](../tigersquad.md), et l'adhésion est gratuite. Hors TigerSquad,
l'assistant répond que c'est un avantage TigerSquad ; l'accès revient dès que
vous la rejoignez.

## Ce que l'assistant peut lire

- vos bobines : marque, matière, couleurs, poids restant, températures, et où
  chacune est rangée ;
- vos racks, vos listes d'envies et l'historique de votre stock ;
- vos imprimantes et vos TigerScales — **jamais leurs codes d'accès ni mots de passe** ;
- ce que vos amis partagent avec vous (leurs bobines, racks et listes d'envies).

Il ne fait que lire, sauf si vous lui donnez la lecture et l'écriture (voir plus bas). Il lit en
votre nom, avec les mêmes règles d'accès que les apps, donc il ne voit jamais
un autre compte. Les identifiants — codes d'accès des imprimantes, connexions
cloud, votre clé privée, votre e-mail — ne sont jamais renvoyés, quoi qu'il
demande.

## Lecture seule, ou lecture et écriture

Quand vous connectez un assistant, la page de tigersystem.io demande son accès :
**Lecture seule** (par défaut) ou **Lecture et écriture**. Pour le changer
ensuite : **tigersystem.io → votre compte → Données → Assistants connectés**, ou
dans Tiger Studio, **Gérer les accès**. Après un passage en lecture et écriture,
actualisez ou reconnectez le connecteur dans l'assistant pour qu'il voie ses
nouveaux outils.

En lecture et écriture, l'assistant peut :

- changer le poids, la note, le TD et les tags d'une bobine, et la ranger dans un rack ;
- modifier le prix, le lien d'achat, le stock minimum, le SKU / EAN et les liens d'un produit ;
- ajouter des bobines depuis le catalogue ;
- créer un rack, et en renommer un ;
- lister les modifications qu'il a faites, et annuler n'importe laquelle.

Il ne supprime jamais rien : une bobine finie passe à 0 g. Chaque modification
est gardée 30 jours dans un historique et peut être annulée. La note et le TD
sont aussi écrits sur la puce : la bobine demande alors de réécrire sa puce.

Limites : 20 bobines par demande ; par jour (UTC), 100 nouvelles bobines,
5 nouveaux racks et 500 modifications en tout, l'assistant de Tiger Studio et les
assistants en ligne comptés ensemble, modifications annulées comprises.

## Claude (web, bureau, mobile)

1. **Réglages → Connecteurs → Ajouter un connecteur personnalisé.**
2. Nommez-le `TigerSystem.io`, collez l'adresse ci-dessus, laissez vides les champs
   OAuth avancés, et ajoutez-le.
3. Cliquez **Connecter**. Vous arrivez sur tigersystem.io : connectez-vous,
   vérifiez que la page indique que les réponses partent vers claude.ai, et
   cliquez **Autoriser**.
4. Dans une conversation, activez le connecteur TigerSystem.io depuis le menu des
   outils et posez votre question.

## ChatGPT

Les connecteurs personnalisés demandent le **mode développeur** (offre payante ;
sur les offres Business, c'est un administrateur qui l'active).

1. **Réglages → Apps et connecteurs → Paramètres avancés → Mode développeur**
   activé.
2. **Créez** un connecteur : nom `TigerSystem.io`, l'adresse ci-dessus,
   authentification **OAuth**, sans identifiant ni secret client.
3. Connectez-vous sur tigersystem.io et cliquez **Autoriser**.
4. Dans une nouvelle conversation, activez le connecteur et posez votre
   question.

## Grok

Les connecteurs personnalisés demandent une **offre Grok payante**.

1. Ouvrez **grok.com/connectors → New Connector → Custom**.
2. Nommez-le `TigerSystem.io` et collez l'adresse ci-dessus.
3. Connectez-vous sur tigersystem.io et cliquez **Autoriser**.
4. Dans une conversation, activez le connecteur TigerSystem.io et posez votre
   question.

## Le Chat (Mistral)

Les connecteurs personnalisés sont ajoutés par un **administrateur** — sur un
compte personnel, c'est vous.

1. **Connecteurs → Ajouter un connecteur → Connecteur MCP personnalisé.**
2. Nommez-le `TigerSystem.io` et collez l'adresse ci-dessus ; Le Chat détecte
   seul la méthode de connexion (OAuth).
3. Connectez-vous sur tigersystem.io et cliquez **Autoriser**.
4. Dans une conversation, activez le connecteur et posez votre question.

Les noms des menus changent souvent dans ces apps ; les étapes restent les
mêmes.

## Codex, Cursor et les autres apps de bureau

Ajoutez un serveur MCP distant de type **Streamable HTTP** (« diffusion HTTP »)
avec l'adresse ci-dessus et sans jeton. L'app ouvre votre navigateur pour la
connexion ; après **Autoriser**, le navigateur arrive sur une adresse
`127.0.0.1` — c'est l'app de votre ordinateur qui récupère la connexion. Une
page vide ou « impossible de se connecter » à cet endroit est normale : fermez
l'onglet.

## Couper l'accès d'un assistant

**tigersystem.io → votre compte → Données → Assistants connectés.** Chaque
assistant autorisé y figure, avec sa date de connexion et sa dernière
utilisation. **Couper l'accès** l'arrête immédiatement.

## Bon à savoir

- L'assistant peut répondre avec des données vieilles de deux minutes au plus :
  les lectures récentes sont gardées brièvement pour rester rapide et léger.
- L'état en direct des imprimantes (en ligne, en impression) n'est pas
  disponible depuis le cloud — seul Tiger Studio, sur le réseau de votre
  imprimante, le voit.
- Les notes, noms de couleurs et textes de listes sont vos mots (ou ceux d'un
  ami) ; l'assistant a pour consigne de les rapporter, jamais de les suivre
  comme des instructions.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Tiger Studio](../products/tiger-studio.md), [Guides](./README.md)
