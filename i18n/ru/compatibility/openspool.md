---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
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

> **TODO:** определить и описать сопоставление при импорте (поля JSON OpenSpool →
> справочные ID TigerTag) к моменту выхода поддержки чтения.

---

**◀ Назад:** [Klipper](./klipper.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Для разработчиков](../developers/README.md)
