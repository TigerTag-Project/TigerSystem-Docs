---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# Карта репозиториев

Все публичные репозитории находятся в организации GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Репозиторий | Что это | Лицензия |
|---|---|---|
| **TigerSystem-Docs** (этот репозиторий) | Документация экосистемы — каноническая точка входа | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Настольное приложение Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK для JavaScript — пакет npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK для Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Каноническая спецификация формата чипа | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Контракт облачной интеграции + рабочие примеры | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (актуальная) — ESP32-S3, сенсорный экран, два PN532, аккумулятор | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (предыдущее поколение — другое оборудование) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Подставка с двумя считывателями для 3D-печати | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Сканер катушек у принтера — ESP32-S3 + PN532, сенсорный экран, для всех брендов | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | Прошивка для экрана BIGTREETECH Panda Touch / K-Touch — все бренды принтеров на одном дисплее | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Официальная прошивка FlashForge для Creator 5 / 5 Pro — Cloud и LAN одновременно, созданная FlashForge совместно с TigerTag | см. репозиторий |

## Какой репозиторий каноничен для чего

Чтобы избежать расхождений в документации, у каждого факта ровно **один** дом:

| Тема | Каноническое расположение |
|---|---|
| Обзор экосистемы, философия, страницы продуктов, FAQ | **Этот репозиторий** |
| Формат обменного файла `.ttag` | **Этот репозиторий** ([спецификация](./ttag-format.md)) |
| Побайтовый формат чипа | TigerTag-RFID-Guide |
| Модель данных Firestore и сценарии аутентификации | TigerTag_Firebase_Integration (`docs/`) |
| Протоколы LAN принтеров (по брендам) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Таблицы декодирования RFID производителей | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Каталог функций приложения и журнал изменений | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Примечание:** репозитории мобильного приложения (Tiger NFC Connect), TigerHub и бэкенда
> в настоящее время не являются публичными.

---

**◀ Назад:** [Обзор для разработчиков](./README.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [SDK](./sdks.md)
