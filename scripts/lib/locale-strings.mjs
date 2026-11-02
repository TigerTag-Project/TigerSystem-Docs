/**
 * The words the *site* says — not the words the pages say.
 *
 * A page is translated by `scripts/translate.mjs` (or by hand, or in a session)
 * and lives in `i18n/<locale>/`. These strings are the small remainder that the
 * pages cannot carry: the banner on a machine-translated page, the report-issue
 * button, the comment box heading, the footer vocabulary a translator must use
 * so that two hundred pages say "See also" the same way.
 *
 * One table, read by the sync script, the Astro components and the translator.
 * Placeholders are `{page}`, `{path}`, `{report}` and `{propose}`.
 *
 * Register, per language, for anything written to the reader: German "du" (as Tiger Studio itself),
 * French "vous", Russian "вы", Spanish / Italian / Dutch / Polish "tú / tu / je /
 * ty" or an impersonal form, Portuguese "você" or an impersonal form, Chinese "你".
 */

/**
 * @typedef {object} LocaleStrings
 * @property {string} banner     Notice on a machine-translated page (HTML).
 * @property {string} issuePage  Label for the page path in a pre-filled issue.
 * @property {string} issueSource Label for the English source path.
 * @property {string} issueProblem Label introducing the error found.
 * @property {string} comments   Heading above the comment box.
 * @property {string} commentsIntro One line under that heading.
 * @property {string} report     Label of the "Report issue" button.
 * @property {string} reportTitle Title of the issue it opens, with `{page}`.
 * @property {string} reportBody Body of that issue, with `{page}`.
 * @property {string} theme      Accessible name of the light/dark switch.
 * @property {string} giscus     Language code Giscus understands.
 * @property {{related:string, previous:string, docIndex:string, next:string}} footer
 *   The page footer vocabulary, used by every translated page.
 * @property {{note:string, warning:string, inShort:string}} callouts
 *   Labels of the `> **Note:**` style callouts, colon included.
 * @property {string} hofWho     First column of the Hall of Fame table.
 */

/** @type {Record<string, LocaleStrings>} */
export const STRINGS = {
  en: {
    banner: '',
    issuePage: 'Page',
    issueSource: 'Source',
    issueProblem: 'Problem found',
    comments: 'Questions & feedback',
    commentsIntro:
      'Comments live in the repository’s GitHub Discussions — a GitHub account is all you need.',
    report: 'Report issue',
    reportTitle: 'Issue on {page}',
    reportBody: 'Page: {page}\n\nWhat is wrong:\n',
    theme: 'Light or dark theme',
    giscus: 'en',
    footer: { related: 'Related', previous: 'Previous', docIndex: 'Documentation index', next: 'Next' },
    callouts: { note: 'Note:', warning: 'Warning:', inShort: 'In short:' },
    hofWho: 'Who',
  },

  fr: {
    banner:
      'Cette page a été <strong>traduite automatiquement</strong> depuis l’anglais. ' +
      '<a href="{report}">Signalez une erreur</a> ou <a href="{propose}">proposez une correction</a>.',
    issuePage: 'Page',
    issueSource: 'Source',
    issueProblem: 'Erreur constatée',
    comments: 'Questions & retours',
    commentsIntro:
      'Les commentaires vivent dans les Discussions GitHub du dépôt — un compte GitHub suffit.',
    report: 'Signaler un problème',
    reportTitle: 'Problème sur {page}',
    reportBody: 'Page : {page}\n\nCe qui ne va pas :\n',
    theme: 'Thème clair ou sombre',
    giscus: 'fr',
    footer: {
      related: 'Voir aussi',
      previous: 'Précédent',
      docIndex: 'Index de la documentation',
      next: 'Suivant',
    },
    callouts: { note: 'Note :', warning: 'Avertissement :', inShort: 'En bref :' },
    hofWho: 'Qui',
  },

  de: {
    banner:
      'Diese Seite wurde <strong>automatisch aus dem Englischen übersetzt</strong>. ' +
      '<a href="{report}">Fehler melden</a> oder <a href="{propose}">eine Korrektur vorschlagen</a>.',
    issuePage: 'Seite',
    issueSource: 'Quelle',
    issueProblem: 'Gefundener Fehler',
    comments: 'Fragen & Feedback',
    commentsIntro:
      'Kommentare laufen über die GitHub Discussions des Repositorys – ein GitHub-Konto genügt.',
    report: 'Problem melden',
    reportTitle: 'Problem auf {page}',
    reportBody: 'Seite: {page}\n\nWas nicht stimmt:\n',
    theme: 'Helles oder dunkles Design',
    giscus: 'de',
    footer: {
      related: 'Siehe auch',
      previous: 'Zurück',
      docIndex: 'Dokumentationsindex',
      next: 'Weiter',
    },
    callouts: { note: 'Hinweis:', warning: 'Warnung:', inShort: 'Kurz gesagt:' },
    hofWho: 'Wer',
  },

  es: {
    banner:
      'Esta página se ha <strong>traducido automáticamente</strong> del inglés. ' +
      '<a href="{report}">Informa de un error</a> o <a href="{propose}">propón una corrección</a>.',
    issuePage: 'Página',
    issueSource: 'Fuente',
    issueProblem: 'Error encontrado',
    comments: 'Preguntas y comentarios',
    commentsIntro:
      'Los comentarios viven en las Discussions de GitHub del repositorio: basta con una cuenta de GitHub.',
    report: 'Informar de un problema',
    reportTitle: 'Problema en {page}',
    reportBody: 'Página: {page}\n\nQué está mal:\n',
    theme: 'Tema claro u oscuro',
    giscus: 'es',
    footer: {
      related: 'Véase también',
      previous: 'Anterior',
      docIndex: 'Índice de la documentación',
      next: 'Siguiente',
    },
    callouts: { note: 'Nota:', warning: 'Advertencia:', inShort: 'En resumen:' },
    hofWho: 'Quién',
  },

  it: {
    banner:
      'Questa pagina è stata <strong>tradotta automaticamente</strong> dall’inglese. ' +
      '<a href="{report}">Segnala un errore</a> o <a href="{propose}">proponi una correzione</a>.',
    issuePage: 'Pagina',
    issueSource: 'Fonte',
    issueProblem: 'Errore riscontrato',
    comments: 'Domande e feedback',
    commentsIntro:
      'I commenti vivono nelle Discussions GitHub del repository: basta un account GitHub.',
    report: 'Segnala un problema',
    reportTitle: 'Problema in {page}',
    reportBody: 'Pagina: {page}\n\nCosa non va:\n',
    theme: 'Tema chiaro o scuro',
    giscus: 'it',
    footer: {
      related: 'Vedi anche',
      previous: 'Precedente',
      docIndex: 'Indice della documentazione',
      next: 'Successivo',
    },
    callouts: { note: 'Nota:', warning: 'Avvertenza:', inShort: 'In breve:' },
    hofWho: 'Chi',
  },

  nl: {
    banner:
      'Deze pagina is <strong>automatisch vertaald</strong> uit het Engels. ' +
      '<a href="{report}">Meld een fout</a> of <a href="{propose}">stel een correctie voor</a>.',
    issuePage: 'Pagina',
    issueSource: 'Bron',
    issueProblem: 'Gevonden fout',
    comments: 'Vragen & feedback',
    commentsIntro:
      'Reacties staan in de GitHub Discussions van de repository: een GitHub-account is genoeg.',
    report: 'Probleem melden',
    reportTitle: 'Probleem op {page}',
    reportBody: 'Pagina: {page}\n\nWat er niet klopt:\n',
    theme: 'Licht of donker thema',
    giscus: 'nl',
    footer: {
      related: 'Zie ook',
      previous: 'Vorige',
      docIndex: 'Documentatie-index',
      next: 'Volgende',
    },
    callouts: { note: 'Let op:', warning: 'Waarschuwing:', inShort: 'Kort gezegd:' },
    hofWho: 'Wie',
  },

  pl: {
    banner:
      'Ta strona została <strong>automatycznie przetłumaczona</strong> z angielskiego. ' +
      '<a href="{report}">Zgłoś błąd</a> lub <a href="{propose}">zaproponuj poprawkę</a>.',
    issuePage: 'Strona',
    issueSource: 'Źródło',
    issueProblem: 'Znaleziony błąd',
    comments: 'Pytania i opinie',
    commentsIntro:
      'Komentarze działają w GitHub Discussions repozytorium — wystarczy konto GitHub.',
    report: 'Zgłoś problem',
    reportTitle: 'Problem na stronie {page}',
    reportBody: 'Strona: {page}\n\nCo jest nie tak:\n',
    theme: 'Jasny lub ciemny motyw',
    giscus: 'pl',
    footer: {
      related: 'Zobacz też',
      previous: 'Poprzednia',
      docIndex: 'Spis dokumentacji',
      next: 'Następna',
    },
    callouts: { note: 'Uwaga:', warning: 'Ostrzeżenie:', inShort: 'W skrócie:' },
    hofWho: 'Kto',
  },

  pt: {
    banner:
      'Esta página foi <strong>traduzida automaticamente</strong> do inglês. ' +
      '<a href="{report}">Informe um erro</a> ou <a href="{propose}">proponha uma correção</a>.',
    issuePage: 'Página',
    issueSource: 'Fonte',
    issueProblem: 'Erro encontrado',
    comments: 'Perguntas e comentários',
    commentsIntro:
      'Os comentários ficam nas Discussions do GitHub do repositório — basta uma conta do GitHub.',
    report: 'Informar um problema',
    reportTitle: 'Problema em {page}',
    reportBody: 'Página: {page}\n\nO que está errado:\n',
    theme: 'Tema claro ou escuro',
    giscus: 'pt',
    footer: {
      related: 'Veja também',
      previous: 'Anterior',
      docIndex: 'Índice da documentação',
      next: 'Próxima',
    },
    callouts: { note: 'Nota:', warning: 'Aviso:', inShort: 'Em resumo:' },
    hofWho: 'Quem',
  },

  'pt-pt': {
    banner:
      'Esta página foi <strong>traduzida automaticamente</strong> do inglês. ' +
      '<a href="{report}">Comunique um erro</a> ou <a href="{propose}">proponha uma correção</a>.',
    issuePage: 'Página',
    issueSource: 'Fonte',
    issueProblem: 'Erro encontrado',
    comments: 'Perguntas e comentários',
    commentsIntro:
      'Os comentários ficam nas Discussions do GitHub do repositório — basta uma conta do GitHub.',
    report: 'Comunicar um problema',
    reportTitle: 'Problema em {page}',
    reportBody: 'Página: {page}\n\nO que está errado:\n',
    theme: 'Tema claro ou escuro',
    giscus: 'pt',
    footer: {
      related: 'Ver também',
      previous: 'Anterior',
      docIndex: 'Índice da documentação',
      next: 'Seguinte',
    },
    callouts: { note: 'Nota:', warning: 'Aviso:', inShort: 'Em resumo:' },
    hofWho: 'Quem',
  },

  ru: {
    banner:
      'Эта страница <strong>переведена автоматически</strong> с английского. ' +
      '<a href="{report}">Сообщите об ошибке</a> или <a href="{propose}">предложите исправление</a>.',
    issuePage: 'Страница',
    issueSource: 'Источник',
    issueProblem: 'Найденная ошибка',
    comments: 'Вопросы и отзывы',
    commentsIntro:
      'Комментарии находятся в GitHub Discussions репозитория — достаточно аккаунта GitHub.',
    report: 'Сообщить о проблеме',
    reportTitle: 'Проблема на странице {page}',
    reportBody: 'Страница: {page}\n\nЧто не так:\n',
    theme: 'Светлая или тёмная тема',
    giscus: 'ru',
    footer: {
      related: 'См. также',
      previous: 'Назад',
      docIndex: 'Оглавление документации',
      next: 'Далее',
    },
    callouts: { note: 'Примечание:', warning: 'Предупреждение:', inShort: 'Коротко:' },
    hofWho: 'Кто',
  },

  zh: {
    banner:
      '本页由英文<strong>自动翻译</strong>而成。' +
      '<a href="{report}">报告错误</a>或<a href="{propose}">提出修改建议</a>。',
    issuePage: '页面',
    issueSource: '来源',
    issueProblem: '发现的错误',
    comments: '问题与反馈',
    commentsIntro: '评论位于仓库的 GitHub Discussions 中——只需一个 GitHub 账号。',
    report: '报告问题',
    reportTitle: '{page} 页面的问题',
    reportBody: '页面：{page}\n\n哪里不对：\n',
    theme: '浅色或深色主题',
    giscus: 'zh-CN',
    footer: { related: '另见', previous: '上一页', docIndex: '文档索引', next: '下一页' },
    callouts: { note: '说明：', warning: '警告：', inShort: '简言之：' },
    hofWho: '谁',
  },
};

/** The strings for a locale, falling back to English for anything unknown. */
/**
 * Astro reports the BCP-47 tag of a locale (`pt-BR`, `zh-CN`), not the name of
 * its folder (`pt`, `zh`). Map either spelling back to the folder name.
 */
const LOCALE_ALIASES = { 'pt-br': 'pt', 'pt-pt': 'pt-pt', 'zh-cn': 'zh' };

export function localeCode(locale) {
  const key = String(locale ?? 'en').toLowerCase();
  return LOCALE_ALIASES[key] ?? (key in STRINGS ? key : key.split('-')[0]);
}

export function stringsFor(locale) {
  return STRINGS[localeCode(locale)] ?? STRINGS.en;
}

/** Fill `{name}` placeholders. */
export function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
}
