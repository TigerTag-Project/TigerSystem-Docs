---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Сравнение форматов тегов катушек

Сегодня на катушках филамента используются шесть форматов NFC/RFID. Эта страница
ставит их рядом по состоянию на 6 ноября 2026 года; каждая цифра взята из
собственной спецификации формата, а для Bambu Lab и Creality (официальной
спецификации нет) — из публичных работ по обратной разработке. Страница
описывает, а не ранжирует. У [OpenSpool](./openspool.md) и
[OpenTag3D](./opentag3d.md) есть собственные страницы.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([обратная разработка][bbl]) | Creality CFS ([обратная разработка][cfs]) |
|---|---|---|---|---|---|---|
| Чип | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 Б) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Байт на одну полную запись | **80** (+ 64 Б подписи) | 176 (248 Б на теге) | 224 | 126 (JSON) | не документировано (чип 1 КБ) | 48 |
| Цветов, макс. | 3 | 6 | 4 | 1 | 2 | 1 |
| Сопло и стол мин. / макс. | да | да | да | только сопло | сопло; одно значение стола | нет |
| Температура и время сушки | да | да | да | нет | да | нет |
| Остаток на чипе | да | да | нет | нет | нет | нет |
| HueForge TD | да | да | да | нет | нет | нет |
| Свободное текстовое сообщение | 28 Б | нет | нет | нет | нет | нет |
| Подпись, проверяемая офлайн | ECDSA-P256, открытый ключ опубликован | нет | нет | нет | RSA-2048, открытый ключ не опубликован | нет |
| Перезаписываемый чип | да | да | да | да | нет (отклоняется после изменения) | нет |
| Открытый офлайн-каталог продуктов | **20 348 продуктов** | 15 874 упаковки | нет | нет | нет | нет |
| Исправления чипа после завода | один открытый стандартизированный API для всех брендов; SDK сравнивают и исправляют чип, подпись остаётся действительной | нет | необязательный `data_url` к API, который каждый производитель сам создаёт и размещает; нет общего формата, SDK и процесса обновления | нет | нет | нет |

## Что показывает таблица

- **Самая компактная полная запись.** TigerTag хранит полную запись для печати —
  температуры, сушку, количества, цвета, TD — в 80 байтах против 176 у
  OpenPrintTag и 224 у OpenTag3D. Две записи поменьше несут меньше: в 48 байтах
  Creality нет ни одной температуры, 126 байт OpenSpool вмещают семь полей. Это
  также единственный формат здесь, который помещается в NTAG213 вместе с
  подписью.
- **Полнота офлайн благодаря каталогу.** ID продукта TigerTag+ разрешается по
  встроенному публичному каталогу — 20 348 продуктов с названием, серией, SKU,
  штрихкодом, фото и признаком рефила — без сети и без аккаунта.
- **Предсказуемые обновления.** Бренд исправляет продукт один раз, в API, общем
  для всех брендов; затем любой считыватель исправляет уже проданные чипы.
- **Не больше всего полей на чипе.** OpenPrintTag несёт больше цветов и поля,
  которых нет у TigerTag (GTIN, длина). TigerTag выделяет сочетание: полная
  запись в немногих байтах, подпись, проверяемая офлайн, и открытый каталог из
  более чем 20 000 продуктов — на NTAG213.

## Источники

- OpenPrintTag: [список полей][opt], размер по эталонному тестовому вектору
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  число позиций каталога по README [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [спецификация][ot3d] и её
  [карта памяти](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [формат тега][osp], размер по документированному примеру.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, обратная разработка).
- Creality CFS: [K2-RFID][cfs] (обратная разработка).
- TigerTag: [спецификация](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Цифра неверна или устарела? Откройте issue: эту страницу исправляют, а не
защищают.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Назад:** [OpenTag3D](./opentag3d.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Для разработчиков](../developers/README.md)

**См. также:** [Совместимость](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
