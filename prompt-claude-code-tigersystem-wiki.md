# Prompt Claude Code — Site de documentation TigerSystem

> À exécuter avec Claude Code lancé à la racine d'un clone de
> `git@github.com:TigerTag-Project/TigerSystem-Docs.git`, sur une branche
> `feat/docs-site`.

---

## Contexte

Ce dépôt est la **source de vérité** de l'écosystème TigerSystem (protocole NFC/RFID
ouvert d'identification de matériaux pour l'impression 3D). Il contient déjà ~45
fichiers Markdown dans `docs/` et ~39 Mo d'assets, organisés par thème :
`architecture/`, `compatibility/`, `concepts/`, `developers/`, `faq/`, `guides/`,
`philosophy/`, `press/`, `products/`, `roadmap/`, `tutorials/`, `vision/`, `assets/`.

Le contenu existe. **Il manque uniquement un moteur de rendu.** Ta mission est de
transformer ce dépôt en site de documentation public, déployé sur Vercel, servi sur
`tigersystem.io`, sans jamais dégrader le dépôt en tant que source de vérité.

La référence visuelle et éditoriale est `wiki.bambulab.com` (Wiki.js 2) : sidebar
gauche curée à la main par gamme produit, table des matières par page, pages
d'aiguillage visuelles avec cartes produit, glossaire de première classe, bandeau
« traduit par IA » sur les locales secondaires. **On vise ce niveau de lisibilité,
pas ce stack.**

---

## Contraintes non négociables

1. **`docs/` ne bouge pas.** Aucun fichier n'est déplacé, renommé ou modifié dans son
   arborescence. Les chemins doivent rester valides pour :
   - la lecture directe sur GitHub,
   - les liens relatifs du `README.md`,
   - `llms.txt`, qui référence ces chemins pour les assistants IA.
   Si tu penses avoir besoin de déplacer `docs/`, tu te trompes — trouve une autre voie.
2. **Une seule source de vérité.** Le site *dérive* de `docs/`, il ne le duplique pas
   dans le dépôt. Toute copie générée est gitignorée.
3. **Anglais = langue source.** Le contenu de `docs/` est et reste en anglais. Le
   français est une traduction dérivée.
4. **Contribution par Pull Request.** Pas de CMS, pas de base de données, pas de
   backend. Le site est 100 % statique.
5. **Aucun secret dans le dépôt.** Clé d'API de traduction en variable
   d'environnement uniquement.

---

## Stack imposé

| Couche | Choix | Justification |
|---|---|---|
| Générateur | **Astro + Starlight** (dernière version stable) | Léger, rendu par défaut proche de la cible, i18n natif |
| Recherche | **Pagefind** (inclus dans Starlight) | Gratuit, offline, indexe au build — pas d'Algolia |
| Commentaires | **Giscus** (GitHub Discussions) | Zéro serveur ; les contributeurs ont déjà un compte GitHub |
| Diagrammes | Mermaid via `rehype-mermaid` ou équivalent | `docs/architecture/` en aura besoin |
| Hébergement | **Vercel**, domaine `tigersystem.io` | |
| Gestionnaire | **pnpm** | |

Si tu découvres qu'un de ces choix est bloquant, **arrête-toi et explique le blocage**
avant de substituer quoi que ce soit.

---

## Architecture cible

```
TigerSystem-Docs/
├── docs/                      # INTOUCHABLE — source de vérité, EN
├── i18n/
│   └── fr/                    # traductions FR, COMMITÉES et relisibles
│       └── <miroir de docs/>
├── src/
│   ├── content/
│   │   └── docs/              # GITIGNORÉ — généré par sync:docs
│   │       ├── en/            # ← copie de docs/
│   │       └── fr/            # ← copie de i18n/fr/
│   ├── components/            # overrides Starlight
│   └── styles/
│       └── tigersystem.css    # design tokens de la marque
├── scripts/
│   ├── sync-docs.mjs
│   └── translate.mjs
├── public/
├── astro.config.mjs
├── package.json
└── vercel.json                # si nécessaire
```

### Script `sync-docs.mjs`

Exécuté par un hook `prebuild` **et** `predev`.

- Copie `docs/**` → `src/content/docs/en/`, et `i18n/fr/**` → `src/content/docs/fr/`.
- Copie déterministe : nettoie la destination avant, pas de merge incrémental.
- Réécrit les liens relatifs inter-documents (`](../products/tigertag.md)` →
  `](/products/tigertag/`) et les chemins d'assets (`docs/assets/…` → `/assets/…`),
  en tenant compte du fait que les fichiers `README.md` d'un dossier deviennent
  l'index de ce dossier.
- Injecte le frontmatter Starlight (`title`, `description`) quand il est absent : le
  titre se déduit du premier `# H1` du fichier, qui est alors retiré du corps pour
  éviter le doublon avec le titre de page rendu par Starlight.
- **Ne modifie jamais les fichiers sources.** Toute transformation se fait sur la copie.
- `src/content/docs/` est ajouté au `.gitignore`.

Écris ce script avec soin : c'est la pièce centrale, et un bug ici casse
silencieusement des dizaines de liens. Prévois un mode `--check` qui échoue si un lien
interne pointe vers une page inexistante, et branche-le en CI.

### Navigation

**Curée à la main dans `astro.config.mjs`, pas auto-générée depuis l'arborescence.**
C'est ce qui distingue une documentation d'un dump de fichiers. Ordre proposé, à
ajuster après lecture du contenu réel :

1. **Start here** — accueil, ce qu'est TigerSystem en 30 s, premier spool intelligent
2. **Products** — TigerTag, TigerTag+, Tiger Studio, Tiger NFC Connect, TigerHub,
   TigerPOD, TigerScale, Factory Suite
3. **Printer compatibility** — page d'aiguillage + une page par marque (Bambu Lab,
   Creality, Snapmaker, FlashForge, Elegoo, Anycubic, Klipper, OpenSpool)
4. **Concepts** — puce TigerTag, identité universelle du filament, inventaire & sync
5. **Architecture** — vue d'ensemble, flux de données
6. **Developers** — format `.ttag`, SDKs, Cloud API, intégrations, material swatch, repos
7. **Guides & tutorials**
8. **Philosophy & vision**
9. **FAQ · Glossary · Roadmap · Press**

### Pages d'aiguillage visuelles

Les index de section (`products/`, `compatibility/`) doivent être des **grilles de
cartes avec visuel**, pas des listes de liens. Les assets existent déjà :
`docs/assets/icons/*.svg` (une icône par produit), `docs/assets/logos/*.svg`,
`docs/assets/brands/*.svg` (une par marque d'imprimante). Utilise les composants
`<CardGrid>` / `<LinkCard>` de Starlight, étendus si besoin pour porter une image.

### Glossaire

Il n'existe pas encore. Crée `docs/glossary.md` (en anglais, dans la source de vérité)
et amorce-le avec les termes que tu rencontres en lisant le contenu existant :
TigerTag, TigerTag+, `.ttag`, TigerData, AMS, MMU, NTAG215/216, UID, ECDSA-P256,
material swatch, second life, refill, etc. Marque-le clairement comme une amorce à
compléter — ne fabrique pas de définitions dont tu n'as pas la substance dans le dépôt.

### i18n

- `defaultLocale: 'en'`, locales `en` + `fr`.
- `scripts/translate.mjs` : traduit `docs/**.md` → `i18n/fr/**.md` via l'API Anthropic
  (`ANTHROPIC_API_KEY` en variable d'environnement, jamais commitée).
- Le script écrit dans le frontmatter de chaque fichier FR un champ
  `sourceHash: <sha256 du fichier EN source>`.
- Un mode `--check` liste les pages FR dont le `sourceHash` ne correspond plus à la
  source EN actuelle → traductions périmées visibles d'un coup d'œil. Branche-le en CI
  en warning (pas en échec).
- Le traducteur ne traduit **pas** : les blocs de code, les noms de produits, les
  identifiants techniques, les chemins de fichiers, les URLs.
- Un bandeau « Cette page a été traduite automatiquement — signalez une erreur »
  s'affiche sur toutes les pages FR, avec un lien vers l'ouverture d'une issue GitHub
  pré-remplie avec le chemin de la page.

### Identité visuelle

- Récupère les couleurs de marque depuis les SVG existants dans `docs/assets/logos/`
  et `docs/assets/icons/` — n'invente pas une palette.
- Thème clair **et** sombre, tous deux soignés.
- Logo : `docs/assets/logos/tigertag-logo.svg` / `tiger-head.svg` selon le contexte.
- Reste sobre. La référence Bambu tire sa qualité de la structure, pas des effets.

### Déploiement

- `vercel.json` si nécessaire (le préréglage Astro de Vercel suffit généralement).
- Vérifie que `pnpm build` fonctionne depuis un clone propre, sans état local.
- Configure les redirections nécessaires si d'anciennes URLs GitHub circulent déjà.
- **Ne déclenche aucun déploiement toi-même** et ne touche pas à la configuration DNS :
  prépare tout, documente la procédure, et laisse la mise en ligne à Benoit.

---

## Méthode de travail

1. **Lis d'abord.** `README.md`, `CONTRIBUTING.md`, `llms.txt`, puis parcours
   l'intégralité de `docs/`. Tu ne peux pas curer une navigation sans connaître le
   contenu. Prends le temps.
2. **Signale les problèmes de contenu que tu vois, ne les corrige pas en silence :**
   pages vides ou quasi vides, liens morts, doublons, incohérences entre `README.md`
   et `docs/`. Produis-en une liste dans `docs/_TODO-content.md` (fichier de travail,
   à supprimer avant merge) plutôt que de réécrire du contenu éditorial de ta propre
   initiative.
3. **Commits atomiques et lisibles**, en anglais, sur la branche `feat/docs-site`.
   Ne pousse pas sur `main`. N'ouvre pas de PR sans le demander.
4. **Vérifie ce que tu produis** : `pnpm build` doit passer, `sync-docs --check` doit
   passer, et tu dois inspecter le rendu (screenshots via Playwright) de l'accueil,
   d'une page d'aiguillage produit, d'une page technique dense
   (`developers/ttag-format.md`) et d'une page FR — en clair **et** en sombre, en
   desktop **et** en mobile. Corrige ce qui est laid avant de me rendre la main.
5. **Arrête-toi et demande** si : une contrainte ci-dessus devient intenable, le
   contenu source est trop incohérent pour une navigation propre, ou un choix
   éditorial (et non technique) se présente.

## Définition de « terminé »

- [ ] `pnpm install && pnpm build` réussit depuis un clone propre
- [ ] `docs/` est bit-à-bit identique à `main`, hors ajout de `glossary.md`
- [ ] Toutes les pages de `docs/` sont accessibles depuis la navigation curée
- [ ] Aucun lien interne cassé (`sync-docs --check` vert)
- [ ] Recherche Pagefind fonctionnelle sur EN et FR
- [ ] FR généré, commité dans `i18n/fr/`, avec bandeau de traduction IA
- [ ] Thème clair/sombre corrects, responsive vérifié par screenshots
- [ ] Giscus branché sur GitHub Discussions
- [ ] `CONTRIBUTING.md` mis à jour : comment ajouter une page, comment le site est
      construit, comment régénérer les traductions
- [ ] `docs/_TODO-content.md` listant les manques de contenu constatés
