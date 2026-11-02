/**
 * Navigation labels that exist in the menu rather than in a page: the group
 * headings, and the few entries whose label is not the page's own title.
 * `src/sidebar.mjs` reads them; every other entry takes its translated title
 * from the page itself.
 *
 * One row per label, one column per translated language, in the order of
 * `LOCALES`: fr, de, es, it, nl, pl, pt, pt-pt, ru, zh.
 */

import { LOCALE_META } from '../scripts/lib/docs-config.mjs';

const ORDER = ['fr', 'de', 'es', 'it', 'nl', 'pl', 'pt', 'pt-pt', 'ru', 'zh'];

const row = (...labels) => {
  if (labels.length !== ORDER.length) {
    throw new Error(`sidebar label needs ${ORDER.length} translations, got ${labels.length}: ${labels[0]}`);
  }
  // Starlight matches sidebar translations on the locale's BCP-47 `lang`
  // (pt-BR, zh-CN), not on the folder name.
  return Object.fromEntries(ORDER.map((code, index) => [LOCALE_META[code].lang, labels[index]]));
};

export const LABELS = {
  startHere: row('Commencer ici', 'Hier starten', 'Empieza aquí', 'Inizia da qui', 'Begin hier', 'Zacznij tutaj', 'Comece aqui', 'Comece aqui', 'С чего начать', '从这里开始'),
  home: row('Accueil', 'Startseite', 'Inicio', 'Home', 'Startpagina', 'Strona główna', 'Início', 'Início', 'Главная', '首页'),
  products: row('Produits', 'Produkte', 'Productos', 'Prodotti', 'Producten', 'Produkty', 'Produtos', 'Produtos', 'Продукты', '产品'),
  allProducts: row('Tous les produits', 'Alle Produkte', 'Todos los productos', 'Tutti i prodotti', 'Alle producten', 'Wszystkie produkty', 'Todos os produtos', 'Todos os produtos', 'Все продукты', '全部产品'),
  printerCompatibility: row('Compatibilité imprimantes', 'Druckerkompatibilität', 'Compatibilidad de impresoras', 'Compatibilità delle stampanti', 'Printercompatibiliteit', 'Zgodność z drukarkami', 'Compatibilidade de impressoras', 'Compatibilidade de impressoras', 'Совместимость принтеров', '打印机兼容性'),
  overviewMatrix: row('Vue d’ensemble et matrice', 'Überblick und Matrix', 'Resumen y matriz', 'Panoramica e matrice', 'Overzicht en matrix', 'Przegląd i macierz', 'Visão geral e matriz', 'Visão geral e matriz', 'Обзор и матрица', '概览与矩阵'),
  concepts: row('Concepts', 'Konzepte', 'Conceptos', 'Concetti', 'Concepten', 'Pojęcia', 'Conceitos', 'Conceitos', 'Концепции', '概念'),
  architecture: row('Architecture', 'Architektur', 'Arquitectura', 'Architettura', 'Architectuur', 'Architektura', 'Arquitetura', 'Arquitetura', 'Архитектура', '架构'),
  developers: row('Développeurs', 'Entwickler', 'Desarrolladores', 'Sviluppatori', 'Ontwikkelaars', 'Deweloperzy', 'Desenvolvedores', 'Programadores', 'Разработчики', '开发者'),
  developerOverview: row('Vue d’ensemble développeur', 'Entwickler-Überblick', 'Resumen para desarrolladores', 'Panoramica per sviluppatori', 'Overzicht voor ontwikkelaars', 'Przegląd dla deweloperów', 'Visão geral para desenvolvedores', 'Visão geral para programadores', 'Обзор для разработчиков', '开发者概览'),
  guidesTutorials: row('Guides et tutoriels', 'Anleitungen und Tutorials', 'Guías y tutoriales', 'Guide e tutorial', 'Gidsen en tutorials', 'Przewodniki i samouczki', 'Guias e tutoriais', 'Guias e tutoriais', 'Руководства и туториалы', '指南与教程'),
  philosophyVision: row('Philosophie et vision', 'Philosophie und Vision', 'Filosofía y visión', 'Filosofia e visione', 'Filosofie en visie', 'Filozofia i wizja', 'Filosofia e visão', 'Filosofia e visão', 'Философия и видение', '理念与愿景'),
  reference: row('Référence', 'Referenz', 'Referencia', 'Riferimento', 'Naslagwerk', 'Materiały referencyjne', 'Referência', 'Referência', 'Справочник', '参考'),
  tigerscaleComPort: row('TigerScale : faire apparaître le port COM', 'TigerScale: fehlenden COM-Port beheben', 'TigerScale: solucionar un puerto COM que no aparece', 'TigerScale: far comparire la porta COM', 'TigerScale: een ontbrekende COM-poort oplossen', 'TigerScale: brakujący port COM', 'TigerScale: como fazer a porta COM aparecer', 'TigerScale: como fazer aparecer a porta COM', 'TigerScale: не появляется COM-порт', 'TigerScale：解决 COM 端口不出现的问题'),
  bambuA1: row('Bambu Lab série A1 : mode LAN', 'Bambu Lab A1-Serie: LAN-Modus', 'Bambu Lab serie A1: modo LAN', 'Bambu Lab serie A1: modalità LAN', 'Bambu Lab A1-serie: LAN-modus', 'Bambu Lab seria A1: tryb LAN', 'Bambu Lab série A1: modo LAN', 'Bambu Lab série A1: modo LAN', 'Bambu Lab серия A1: режим LAN', 'Bambu Lab A1 系列：局域网模式'),
  bambuP1: row('Bambu Lab série P1 : mode LAN', 'Bambu Lab P1-Serie: LAN-Modus', 'Bambu Lab serie P1: modo LAN', 'Bambu Lab serie P1: modalità LAN', 'Bambu Lab P1-serie: LAN-modus', 'Bambu Lab seria P1: tryb LAN', 'Bambu Lab série P1: modo LAN', 'Bambu Lab série P1: modo LAN', 'Bambu Lab серия P1: режим LAN', 'Bambu Lab P1 系列：局域网模式'),
  bambuX1: row('Bambu Lab X1/X1E/H2/P2 : mode LAN', 'Bambu Lab X1/X1E/H2/P2: LAN-Modus', 'Bambu Lab X1/X1E/H2/P2: modo LAN', 'Bambu Lab X1/X1E/H2/P2: modalità LAN', 'Bambu Lab X1/X1E/H2/P2: LAN-modus', 'Bambu Lab X1/X1E/H2/P2: tryb LAN', 'Bambu Lab X1/X1E/H2/P2: modo LAN', 'Bambu Lab X1/X1E/H2/P2: modo LAN', 'Bambu Lab X1/X1E/H2/P2: режим LAN', 'Bambu Lab X1/X1E/H2/P2：局域网模式'),
  elegooCc2: row('Elegoo CC2 : mode LAN', 'Elegoo CC2: LAN-Modus', 'Elegoo CC2: modo LAN', 'Elegoo CC2: modalità LAN', 'Elegoo CC2: LAN-modus', 'Elegoo CC2: tryb LAN', 'Elegoo CC2: modo LAN', 'Elegoo CC2: modo LAN', 'Elegoo CC2: режим LAN', 'Elegoo CC2：局域网模式'),
  flashforge: row('FlashForge : tutoriel de connexion', 'FlashForge: Verbindungsanleitung', 'FlashForge: tutorial de conexión', 'FlashForge: tutorial di connessione', 'FlashForge: verbindingstutorial', 'FlashForge: samouczek połączenia', 'FlashForge: tutorial de conexão', 'FlashForge: tutorial de ligação', 'FlashForge: руководство по подключению', 'FlashForge：连接教程'),
};
