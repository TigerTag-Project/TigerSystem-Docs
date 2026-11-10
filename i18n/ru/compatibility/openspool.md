---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Что это

**OpenSpool** — открытый стандарт меток сообщества: данные о филаменте в виде **NDEF JSON**
на метках NFC Type 2 — без аутентификации, без криптографии, полностью открытый. По духу это
близкий родственник TigerTag.

## TigerTag и OpenSpool

| Аспект | TigerTag | OpenSpool |
|---|---|---|
| Носитель | NTAG, 144-байтная нагрузка NDEF | NFC Type 2, NDEF JSON |
| Модель данных | Компактные ID, разрешаемые по общей справочной БД | Самоописывающийся JSON |
| Облако | Необязательные аккаунт, инвентарь, обмен ([аккаунт TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Нет (стандарт только для метки) |
| Подлинность | Необязательна — [TigerTag+](../products/tigertag-plus.md), подписанный сертифицированным производителем, является **TigerTag+ Certified** и проверяется офлайн | Нет |
| Открытость | Открытая спецификация + SDK | Открытая спецификация |

## Перенос чипа с TigerTag на OpenSpool

Чипы TigerTag **никогда не блокируются от записи** — TigerTag лишь базовый протокол,
с которым поставляются катушки. Если вы предпочитаете OpenSpool (или любой
собственный формат), вы вправе переписать данные заводского чипа в него.

## Совместимость — спецификация описана, преобразование в TigerData в работе

Таблица декодирования меток OpenSpool (только чтение) ведётся в
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md)
в рамках планируемого чтения RFID разных производителей в Tiger Studio.

### Сопоставление при импорте: OpenSpool → TigerData

Это сопоставление будет применять считыватель OpenSpool в Tiger Studio.
Чтение тега OpenSpool создаёт **TigerData** — запись без чипа с новым
`TigerData_<id>`. Чип OpenSpool не является чипом TigerTag, а тег OpenSpool не
указывает продукт из каталога, поэтому запись никогда не бывает TigerData+.
Записанная позже на чип TigerTag, она становится TigerTag, как любая TigerData.

Тег считается OpenSpool, только если его JSON содержит
`"protocol": "openspool"`. Затем его поля сопоставляются по
[справочным таблицам](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Правило |
|---|---|---|
| `brand` | `id_brand` | ищется по имени в `id_brand.json` без учёта регистра; нет или неизвестен → `Generic` (65535) |
| `type`, `subtype` | `id_material` | ищется в `id_material.json` без учёта регистра в таком порядке: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), затем только `type`. `NYLON` читается как `PA` (59328). Отсутствующий или неизвестный тип запрашивается у пользователя |
| `subtype`, если материал его не использовал | `id_aspect1` | аспект с этим именем в `id_aspect.json` (`Matte` читается как `Matt`, 247), иначе `Basic` (104); подтип без совпадений сохраняется в поле `message` записи |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | копируются; OpenSpool несёт один цвет |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; нет → 1,75, значение OpenSpool по умолчанию; любое другое значение запрашивается |
| `weight` | `measure`, `id_measure_unit` | в граммах, единица `g` (21); нет → 1000, значение OpenSpool по умолчанию. Катушка начинает полной: `weight_available` = `weight` |
| `min_temp`, `max_temp` | сопло мин. и макс. (`data2`, `data3`) | копируются; если оба равны `0` (нет), рекомендуемые значения материала. `max_temp` ниже `min_temp`: тег отклоняется, как в OpenRFID |
| — | температура и время сушки, стол мин. и макс. (`data4`–`data7`) | значения `recommended` материала в `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: нет продукта из каталога |
| — | `timestamp` | время импорта |

Два правила намеренно отличаются от считывателя OpenRFID:

- **Значения стола и сушки берутся из справочной базы TigerTag**, а не из
 таблицы OpenRFID из пяти строк (PLA, PETG, ABS, TPU, NYLON и ноль для любого
 другого типа). Это те значения, которые Tiger Studio подставляет, когда тот же
 материал выбирают вручную, и они есть для всех 113 материалов.
- **Материал никогда не угадывается.** OpenRFID читает отсутствующий тип как
 PLA. Неверный материал даёт неверные температуры, поэтому импорт спрашивает.

---

**◀ Назад:** [Klipper](./klipper.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Для разработчиков](../developers/README.md)
