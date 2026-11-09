/**
 * The curated navigation.
 *
 * Hand-ordered on purpose: a documentation site is the difference between a
 * reading order and a file listing. `pnpm check:docs` fails if a page in
 * `docs/` is missing from this tree, or if an entry here points nowhere.
 *
 * Leaf entries use `slug`, so their label is the page's own title and the
 * translated sidebars pick up each language's own title automatically. Only the
 * group headings — which exist in the navigation, not in the content — and a
 * few custom labels are translated, in `sidebar-labels.mjs`.
 */

import { LABELS } from './sidebar-labels.mjs';

const group = (label, translations, items) => ({ label, translations, items });

export const sidebar = [
  group('Start here', LABELS.startHere, [
    { label: 'Home', translations: LABELS.home, link: '/' },
    { slug: 'vision/why-tigersystem' },
    { slug: 'guides/start-for-free' },
    { slug: 'tutorials/first-smart-spool' },
    { slug: 'faq' },
  ]),

  group('Products', LABELS.products, [
    { slug: 'products', label: 'All products', translations: LABELS.allProducts },
    { slug: 'products/tigertag' },
    { slug: 'products/tigertag-plus' },
    { slug: 'products/tigertag-plus-certified' },
    { slug: 'products/tigertag-connect' },
    { slug: 'products/tiger-studio' },
    { slug: 'products/tigerhub' },
    { slug: 'products/tigerpod' },
    { slug: 'products/tigerscale' },
    { slug: 'products/tigerspool' },
    { slug: 'products/tigertouch' },
    { slug: 'products/factory-suite' },
  ]),

  group('Printer compatibility', LABELS.printerCompatibility, [
    { slug: 'compatibility', label: 'Overview & matrix', translations: LABELS.overviewMatrix },
    { slug: 'compatibility/bambu-lab' },
    { slug: 'compatibility/creality' },
    { slug: 'compatibility/elegoo' },
    { slug: 'compatibility/anycubic' },
    { slug: 'compatibility/flashforge' },
    { slug: 'compatibility/snapmaker' },
    { slug: 'compatibility/klipper' },
    { slug: 'compatibility/openspool' },
    { slug: 'compatibility/opentag3d' },
    { slug: 'compatibility/tag-formats', label: 'Spool tag formats compared', translations: { fr: 'Formats de puce comparés' } },
    { slug: 'compatibility/third-party-hardware' },
  ]),

  group('Concepts', LABELS.concepts, [
    { slug: 'concepts/tigertag-chip' },
    { slug: 'concepts/universal-filament-identity' },
    { slug: 'concepts/inventory-and-cloud-sync' },
  ]),

  group('Architecture', LABELS.architecture, [
    { slug: 'architecture/overview' },
    { slug: 'architecture/data-flow' },
  ]),

  group('Developers', LABELS.developers, [
    { slug: 'developers', label: 'Developer overview', translations: LABELS.developerOverview },
    { slug: 'developers/sdks' },
    { slug: 'developers/ttag-format' },
    { slug: 'developers/material-swatch' },
    { slug: 'developers/spool-ids-and-qr-links' },
    { slug: 'developers/account-api' },
    { slug: 'developers/web-api' },
    { slug: 'developers/integrations' },
    { slug: 'developers/repositories' },
  ]),

  group('Guides & tutorials', LABELS.guidesTutorials, [
    { slug: 'tutorials' },
    { slug: 'guides' },
    { slug: 'tutorials/first-smart-spool' },
    { slug: 'tutorials/send-a-request' },
    { slug: 'guides/twin-tag-pair' },
    { slug: 'tutorials/tigerscale-serial-port-driver', label: 'TigerScale: fixing a missing COM port', translations: LABELS.tigerscaleComPort },
    { slug: 'guides/connect-an-ai-assistant' },
    { slug: 'guides/filament-materials-guide' },
    { slug: 'tutorials/bambu-lab-a1-series', label: 'Bambu Lab A1 series: LAN mode', translations: LABELS.bambuA1 },
    { slug: 'tutorials/bambu-lab-p1-series', label: 'Bambu Lab P1 series: LAN mode', translations: LABELS.bambuP1 },
    { slug: 'tutorials/bambu-lab-x1-h2-p2-series', label: 'Bambu Lab X1/X1E/H2/P2: LAN mode', translations: LABELS.bambuX1 },
    { slug: 'tutorials/elegoo-cc2-lan-mode', label: 'Elegoo CC2: LAN mode', translations: LABELS.elegooCc2 },
    { slug: 'tutorials/flashforge-connection-tutorial', label: 'FlashForge: connection tutorial', translations: LABELS.flashforge },
  ]),

  group('Philosophy & vision', LABELS.philosophyVision, [
    { slug: 'vision/why-tigersystem' },
    { slug: 'philosophy/user-centric-ecosystem' },
    { slug: 'philosophy/open-ecosystem' },
    { slug: 'philosophy/smartphone-bridge' },
    { slug: 'philosophy/second-life' },
    { slug: 'vision/for-filament-manufacturers' },
    { slug: 'vision/team' },
  ]),

  group('Reference', LABELS.reference, [
    { slug: 'glossary' },
    { slug: 'certified-partners' },
    { slug: 'support' },
    { slug: 'tigersquad' },
    { slug: 'hall-of-fame' },
    { slug: 'roadmap' },
    { slug: 'press' },
    { slug: 'press/headlines' },
  ]),
];

export default sidebar;
