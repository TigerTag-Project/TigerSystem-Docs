---
sourceHash: a581b7504900fdbaa60b5f02b81447a4b0e07c77d262b6236434620b7378d87a
sourcePath: docs/compatibility/README.md
---

# Совместимость

Как TigerSystem работает с каждой экосистемой принтеров. Две независимые оси:

- **Связь с принтером** — Tiger Studio общается с машиной по LAN
 (телеметрия, слоты филамента, задание, камера). **Сегодня работают шесть брендов, Prusa — в бете, и любой принтер на Klipper или OctoPrint подключается в бете: около 380 моделей.**
- **Нативный RFID** — чтение собственных меток катушек производителя. Описано по
 каждому производителю. Прямое декодирование в приложении **пока не интегрировано**
 (правильная модель взаимодействия остаётся открытым вопросом); текущая работа направлена на
 **преобразование данных меток производителей в цифровые катушки TigerData**, чтобы филамент
 других брендов можно было сканировать и вести в экосистеме. Тем временем
 сам чип TigerTag уже работает с любым принтером через
 [смартфон-мост](../philosophy/smartphone-bridge.md).

## Матрица

| Экосистема | Связь с принтером (Tiger Studio) | Нативный формат метки | Блокировка нативной метки | Статус чтения RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Live** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, ключи из UID | Спецификация описана |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Live** — WebSocket + CFS | Mifare Classic 1K | Ключ сектора AES-128-ECB | Спецификация описана |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Live** — MQTT + Canvas; Centauri Carbon 1 через SDCP — в бете | Mifare Ultralight | Только магические байты | Спецификация описана |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Live** — HTTP + IFS | — (в машинах нет RFID-считывателя) | — | TigerTag добавляет NFC, без затрат |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Live** — MQTTS LAN + облако, ACE | Mifare Ultralight | Нет | Спецификация описана |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Live** — Moonraker WebSocket + 4 слота | Mifare Classic 1K | HKDF + подпись RSA-2048 | Спецификация описана |
| Prusa | **Бета** — PrusaLink HTTP + MMU | OpenPrintTag (NFC) | Нет — открытый формат | Сравнение — в [Сравнение форматов тегов катушек](./tag-formats.md) |
| [Klipper](./klipper.md) | **Live (бета)** — Moonraker + Happy Hare / AFC | н/п | н/п | н/п |
| OctoPrint (Marlin) | **Live (бета)** — OctoPrint REST | н/п | н/п | н/п |
| [OpenSpool](./openspool.md) | н/п (стандарт меток, не принтер) | NFC Type 2, NDEF JSON | Нет — открытый стандарт | Спецификация описана |
| Qidi | Не интегрирован | Mifare Classic 1K | Ключ по умолчанию | [Спецификация описана](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Примечание:** таблицы RFID по производителям (спецификации декодирования только для чтения,
> составленные на основе проекта [OpenRFID](https://github.com/suchmememanyskill/OpenRFID))
> ведутся в репозитории Tiger Studio в
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — здесь на них даны ссылки, они не дублируются.

## Форматы тегов бок о бок

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab и Creality CFS — цифра за
цифрой и с источниками: **[Сравнение форматов тегов катушек](./tag-formats.md)**.

## Не только принтеры

Совместимость касается не только принтеров: см. растущий список
**[совместимого стороннего оборудования](./third-party-hardware.md)** — NFC-считыватели,
анализаторы филамента, USB-весы — и
**[программное обеспечение, построенное на TigerTag](../developers/integrations.md)**.

Этикетки катушек печатаются прямо с телефона на
**[Bluetooth-принтерах этикеток](./label-printers.md)**.

## Универсальный ответ

Какой бы ни был принтер: наклейте чип [TigerTag](../products/tigertag.md) на
катушку, и вся экосистема работает — идентификация, инвентарь, вес,
обмен и передача данных о филаменте на каждый интегрированный принтер.

---

**◀ Назад:** [TigerScale](../products/tigerscale.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Bambu Lab](./bambu-lab.md)
