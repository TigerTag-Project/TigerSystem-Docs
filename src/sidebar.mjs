/**
 * The curated navigation.
 *
 * Hand-ordered on purpose: a documentation site is the difference between a
 * reading order and a file listing. `pnpm check:docs` fails if a page in
 * `docs/` is missing from this tree, or if an entry here points nowhere.
 *
 * Leaf entries use `slug`, so their label is the page's own title and the
 * French sidebar picks up the French title automatically. Only the group
 * headings — which exist in the navigation, not in the content — are
 * translated here.
 */

const group = (label, fr, items) => ({ label, translations: { fr }, items });

export const sidebar = [
  group('Start here', 'Commencer ici', [
    { label: 'Home', translations: { fr: 'Accueil' }, link: '/' },
    { slug: 'vision/why-tigersystem' },
    { slug: 'tutorials/first-smart-spool' },
    { slug: 'faq' },
  ]),

  group('Products', 'Produits', [
    { slug: 'products', label: 'All products', translations: { fr: 'Tous les produits' } },
    { slug: 'products/tigertag' },
    { slug: 'products/tigertag-plus' },
    { slug: 'products/tigertag-connect' },
    { slug: 'products/tiger-studio' },
    { slug: 'products/tigerhub' },
    { slug: 'products/tigerpod' },
    { slug: 'products/tigerscale' },
    { slug: 'products/factory-suite' },
  ]),

  group('Printer compatibility', 'Compatibilité imprimantes', [
    { slug: 'compatibility', label: 'Overview & matrix', translations: { fr: 'Vue d’ensemble et matrice' } },
    { slug: 'compatibility/bambu-lab' },
    { slug: 'compatibility/creality' },
    { slug: 'compatibility/elegoo' },
    { slug: 'compatibility/anycubic' },
    { slug: 'compatibility/flashforge' },
    { slug: 'compatibility/snapmaker' },
    { slug: 'compatibility/klipper' },
    { slug: 'compatibility/openspool' },
    { slug: 'compatibility/third-party-hardware' },
  ]),

  group('Concepts', 'Concepts', [
    { slug: 'concepts/tigertag-chip' },
    { slug: 'concepts/universal-filament-identity' },
    { slug: 'concepts/inventory-and-cloud-sync' },
  ]),

  group('Architecture', 'Architecture', [
    { slug: 'architecture/overview' },
    { slug: 'architecture/data-flow' },
  ]),

  group('Developers', 'Développeurs', [
    { slug: 'developers', label: 'Developer overview', translations: { fr: 'Vue d’ensemble développeur' } },
    { slug: 'developers/sdks' },
    { slug: 'developers/ttag-format' },
    { slug: 'developers/material-swatch' },
    { slug: 'developers/cloud-api' },
    { slug: 'developers/integrations' },
    { slug: 'developers/repositories' },
  ]),

  group('Guides & tutorials', 'Guides et tutoriels', [
    { slug: 'tutorials' },
    { slug: 'tutorials/first-smart-spool' },
    { slug: 'guides' },
    { slug: 'guides/twin-tag-pair' },
  ]),

  group('Philosophy & vision', 'Philosophie et vision', [
    { slug: 'vision/why-tigersystem' },
    { slug: 'philosophy/user-centric-ecosystem' },
    { slug: 'philosophy/open-ecosystem' },
    { slug: 'philosophy/smartphone-bridge' },
    { slug: 'philosophy/second-life' },
    { slug: 'vision/for-filament-manufacturers' },
    { slug: 'vision/team' },
  ]),

  group('Reference', 'Référence', [
    { slug: 'faq' },
    { slug: 'glossary' },
    { slug: 'certified-partners' },
    { slug: 'support' },
    { slug: 'hall-of-fame' },
    { slug: 'roadmap' },
    { slug: 'press' },
    { slug: 'press/headlines' },
  ]),
];

export default sidebar;
