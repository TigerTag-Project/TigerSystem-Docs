/**
 * The recurring words of this documentation, in each language.
 *
 * A glossary page that leaves every term in English cannot be looked up, and
 * the same word rendered three ways across sixty pages reads as three concepts.
 * So the words that carry the ecosystem — spool, chip, slot, inventory — are
 * fixed here once, per language, and every translation is held to them: the
 * translator reads this table in its prompt, and a person correcting a page can
 * check it against the same list.
 *
 * Where the app of the same name already has a word, this table uses the app's
 * (the `renderer/locales` files of Tiger Studio): the wiki and the screen it
 * describes should call a printer's slot the same thing.
 *
 * Proper nouns and technical identifiers are not here — they are never
 * translated (see the prompt in `translate.mjs`).
 *
 * One row per concept, one column per language, in this order:
 * fr, de, es, it, nl, pl, pt, pt-pt, ru, zh.
 */

const ORDER = ['fr', 'de', 'es', 'it', 'nl', 'pl', 'pt', 'pt-pt', 'ru', 'zh'];

const row = (...terms) => {
  if (terms.length !== ORDER.length) {
    throw new Error(`glossary row needs ${ORDER.length} terms, got ${terms.length}: ${terms[0]}`);
  }
  return Object.fromEntries(ORDER.map((code, index) => [code, terms[index]]));
};

export const GLOSSARY = {
  spool: row('bobine', 'Spule', 'bobina', 'bobina', 'spoel', 'szpula', 'bobina', 'bobina', 'катушка', '线轴'),
  chip: row('puce', 'Chip', 'chip', 'chip', 'chip', 'chip', 'chip', 'chip', 'чип', '芯片'),
  'tag (a vendor’s own RFID tag)': row('tag', 'Tag', 'etiqueta', 'tag', 'tag', 'tag', 'etiqueta', 'etiqueta', 'тег', '标签'),
  printer: row('imprimante', 'Drucker', 'impresora', 'stampante', 'printer', 'drukarka', 'impressora', 'impressora', 'принтер', '打印机'),
  filament: row('filament', 'Filament', 'filamento', 'filamento', 'filament', 'filament', 'filamento', 'filamento', 'филамент', '耗材'),
  material: row('matière', 'Material', 'material', 'materiale', 'materiaal', 'materiał', 'material', 'material', 'материал', '材料'),
  brand: row('marque', 'Marke', 'marca', 'marca', 'merk', 'marka', 'marca', 'marca', 'бренд', '品牌'),
  inventory: row('inventaire', 'Bestand', 'inventario', 'inventario', 'inventaris', 'magazyn', 'inventário', 'inventário', 'инвентарь', '库存'),
  'slot (on a printer)': row('emplacement', 'Slot', 'ranura', 'slot', 'slot', 'slot', 'slot', 'slot', 'слот', '槽位'),
  account: row('compte', 'Konto', 'cuenta', 'account', 'account', 'konto', 'conta', 'conta', 'аккаунт', '账号'),
  catalogue: row('catalogue', 'Katalog', 'catálogo', 'catalogo', 'catalogus', 'katalog', 'catálogo', 'catálogo', 'каталог', '产品库'),
  colour: row('couleur', 'Farbe', 'color', 'colore', 'kleur', 'kolor', 'cor', 'cor', 'цвет', '颜色'),
  scale: row('balance', 'Waage', 'báscula', 'bilancia', 'weegschaal', 'waga', 'balança', 'balança', 'весы', '秤'),
  'reader (NFC)': row('lecteur', 'Lesegerät', 'lector', 'lettore', 'lezer', 'czytnik', 'leitor', 'leitor', 'считыватель', '读卡器'),
  settings: row('paramètres', 'Einstellungen', 'ajustes', 'impostazioni', 'instellingen', 'ustawienia', 'configurações', 'definições', 'настройки', '设置'),
  cloud: row('cloud', 'Cloud', 'nube', 'cloud', 'cloud', 'chmura', 'nuvem', 'nuvem', 'облако', '云'),
  'LAN mode': row('mode LAN', 'LAN-Modus', 'modo LAN', 'modalità LAN', 'LAN-modus', 'tryb LAN', 'modo LAN', 'modo LAN', 'режим LAN', '局域网模式'),
  refill: row('refill', 'Refill', 'refill', 'refill', 'refill', 'refill', 'refil', 'refil', 'рефил', '补充装'),
  rack: row('rack', 'Rack', 'rack', 'rack', 'rack', 'regał', 'rack', 'rack', 'стеллаж', '货架'),
  nozzle: row('buse', 'Düse', 'boquilla', 'ugello', 'nozzle', 'dysza', 'bico', 'bocal', 'сопло', '喷嘴'),
  'print bed': row('plateau', 'Druckbett', 'cama', 'piano di stampa', 'bed', 'łoże', 'mesa', 'mesa', 'стол', '热床'),
  chamber: row('caisson', 'Kammer', 'cámara', 'camera', 'kamer', 'komora', 'câmara', 'câmara', 'камера', '腔体'),
  slicer: row('trancheur', 'Slicer', 'slicer', 'slicer', 'slicer', 'slicer', 'fatiador', 'slicer', 'слайсер', '切片软件'),
  firmware: row('firmware', 'Firmware', 'firmware', 'firmware', 'firmware', 'firmware', 'firmware', 'firmware', 'прошивка', '固件'),
  'friend (user)': row('ami', 'Freund', 'amigo', 'amico', 'vriend', 'znajomy', 'amigo', 'amigo', 'друг', '好友'),
  wishlist: row('liste d’envies', 'Wunschliste', 'lista de deseos', 'lista dei desideri', 'verlanglijst', 'lista życzeń', 'lista de desejos', 'lista de desejos', 'список желаний', '心愿单'),
  'reference database': row('base de données de référence', 'Referenzdatenbank', 'base de datos de referencia', 'database di riferimento', 'referentiedatabase', 'baza referencyjna', 'banco de dados de referência', 'base de dados de referência', 'справочная база данных', '参考数据库'),
  'second life': row('seconde vie', 'zweites Leben', 'segunda vida', 'seconda vita', 'tweede leven', 'drugie życie', 'segunda vida', 'segunda vida', 'вторая жизнь', '第二次生命'),
  sandbox: row('bac à sable', 'Sandbox', 'entorno de pruebas', 'sandbox', 'zandbak', 'piaskownica', 'ambiente de testes', 'ambiente de testes', 'песочница', '沙盒'),
  'open source': row('open source', 'Open Source', 'código abierto', 'open source', 'open source', 'open source', 'código aberto', 'código aberto', 'открытый исходный код', '开源'),
};

/** The glossary rendered for a prompt or a reviewer, for one language. */
export function glossaryFor(locale) {
  return Object.entries(GLOSSARY)
    .map(([english, terms]) => `${english} = ${terms[locale]}`)
    .join('\n');
}
