---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Философия открытой экосистемы

## Открыто всё

Каждый слой TigerSystem опубликован — оборудование, прошивки, SDK, приложения, документация:

| Слой | Проект | Лицензия |
|---|---|---|
| Настольное приложение | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK для JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK для Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Оборудование и прошивка весов (V3, актуальная) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Оборудование и прошивка весов (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Подставка для считывателей (STL + документация) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Руководство по формату чипа | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Документация по облачной интеграции | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Эта документация | TigerSystem-Docs | CC BY 4.0 |

## Песочница, а не закрытый сад

**Вся пользовательская экосистема** намеренно задумана как **лаборатория, а не
конечная цель**.
Каждый продукт — [Tiger Studio](../products/tiger-studio.md), мобильное приложение,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) —
это рабочая демонстрация того, что делают возможным открытые, документированные технологии,
когда катушка умеет себя опознавать: живая телеметрия принтеров шести брендов,
физическое сопоставление со стеллажом, датчики, общие инвентари. Что-то из этого повзрослеет,
что-то существует, чтобы доказать идею, и всё это можно читать, форкать и
свободно копировать. Каждый продукт — нынешний и будущий — это **доказательство концепции**
**открытого, стандартного, независимого от производителей, кросс-платформенного протокола**: его единственная
задача — показать потенциал, чтобы любой мог взять нашу интеграционную работу как
источник вдохновения и представить функции завтрашнего дня.

## Создайте своё

TigerTag — это открытый **протокол**, а не платформа, к которой нужно присоединяться:

1. Прочитайте формат чипа ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Возьмите [SDK](../developers/sdks.md).
3. Подключитесь к [облаку](../developers/account-api.md) — или нет; чипы работают офлайн.
4. Выпускайте то программное обеспечение, оборудование или бизнес, которое вам действительно нужно.

Ваше приложение может быть чем-то совершенно другим — оно всё равно будет говорить на языке тех же чипов.
Телефон с NFC, USB-считыватель ACR122U — или самодельный ESP32 с модулем PN532/RC522
в стиле TigerScale — вот всё необходимое оборудование: подключите идентичность катушки
к ERP, внутреннему складскому инструменту, процессу отслеживания, системе выдачи
в фаблабе, частному или публичному исследовательскому проекту — к чему угодно.

---

**◀ Назад:** [Экосистема, ориентированная на пользователя](./user-centric-ecosystem.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Смартфон-мост](./smartphone-bridge.md)

**См. также:** [Обзор для разработчиков](../developers/README.md), [Продукты](../products/README.md)
