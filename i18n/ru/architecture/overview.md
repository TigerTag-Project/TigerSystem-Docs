---
sourceHash: 52c625d47f630ed8187a415d4e2480f3b5b2612184ad602a942c94567ce6bbaf
sourcePath: docs/architecture/overview.md
---

# Обзор архитектуры

## Стек сверху вниз

```mermaid
flowchart TB
  TAG["TigerTag chip<br/>(open NDEF payload on the spool)"]
  CONNECT["Tiger NFC Connect<br/>(mobile — NFC scan & encode)"]
  CLOUD["Firebase<br/>(accounts + Firestore + cdn.tigertag.io)"]
  STUDIO["Tiger Studio<br/>(desktop — inventory, devices, printers)"]
  PRINTERS["Printer integrations<br/>(Bambu Lab · Creality · Elegoo · FlashForge · Snapmaker · Anycubic)"]
  THIRD["Third-party apps & APIs<br/>(SDKs, Home Assistant, Spoolman, ESP32…)"]
  WEB["TigerHub<br/>(tigersystem.io — ecosystem site, wishlists, sharing)"]

  TAG --> CONNECT
  TAG --> STUDIO
  CONNECT <--> CLOUD
  STUDIO <--> CLOUD
  STUDIO --> PRINTERS
  CLOUD --> WEB
  CLOUD <--> THIRD
```

## Слои

| Слой | Роль | Канонические документы |
|---|---|---|
| **Чип TigerTag** | Переносимая открытая идентичность физической катушки | [Формат чипа](../concepts/tigertag-chip.md) |
| **Tiger NFC Connect** | Смартфон-мост: сканирование, кодирование, просмотр | [Страница продукта](../products/tiger-nfc-connect.md) |
| **Firebase** | Единая общая база данных — аккаунты, инвентарь, синхронизация; точка взаимодействия песочницы | [Инвентарь и облачная синхронизация](../concepts/inventory-and-cloud-sync.md) |
| **TigerHub** | Веб-дом экосистемы: витрина, списки желаний, друзья, обмен | [Страница продукта](../products/tigerhub.md) |
| **Tiger Studio** | Настольный верстак: инвентарь, стеллажи, датчики, принтеры | [Страница продукта](../products/tiger-studio.md) |
| **Интеграции принтеров** | Живые связи по LAN с принтерами шести брендов | [Совместимость](../compatibility/README.md) |
| **Сторонние API** | SDK + документированная поверхность Firestore для всех желающих | [Для разработчиков](../developers/README.md) |

## Полная карта — каждый элемент и его связи

Аксессуары, приложения, облако, принтеры, слайсеры и интеграции сторонних разработчиков на
одной схеме:

```mermaid
flowchart TB
  subgraph SP["The spool"]
    TAG["TigerTag chip"]
  end
  subgraph ACC["Accessories"]
    POD["TigerPOD<br/>dual reader stand"]
    ACR["ACR122U<br/>USB NFC reader"]
    SCALE["TigerScale"]
    TD1S["TD1S color sensor"]
  end
  subgraph APPS["Apps"]
    CO["Tiger NFC Connect"]
    ST["Tiger Studio"]
    WEB["TigerHub<br/>tigersystem.io"]
  end
  CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  subgraph PRT["Printing"]
    SLICER["Your slicer<br/>(OrcaSlicer, vendor slicers…)"]
    PRN["Printers<br/>Anycubic · Bambu Lab · Creality<br/>Elegoo · FlashForge · Snapmaker"]
  end
  THIRD["Third-party<br/>Home Assistant · Spoolman · ESP32 · your app"]

  TAG -- "NFC tap" --> CO
  TAG -- "scan" --> POD --> ST
  TAG -- "scan" --> ACR --> ST
  TD1S -- "measured color" --> ST
  SCALE -- "live weight" --> CLOUD
  CO <--> CLOUD
  ST <--> CLOUD
  CLOUD -- "public share links" --> WEB
  CLOUD <--> THIRD
  ST -- "filament data to slots" --> PRN
  PRN -- "live telemetry, job, camera" --> ST
  SLICER -- "print job" --> PRN
```

Читайте слева направо: **чип** опознаёт катушку; **аксессуары**
фиксируют реальность (сканирование, вес, цвет); **приложения** и **облако** поддерживают
синхронизацию всего этого; **принтер** получает данные о филаменте и отчитывается в реальном времени.
Ваш **слайсер остаётся при своём деле** — TigerSystem не нарезает модели, она следит за тем, чтобы
все (вы, машина, приложения) точно знали, какой филамент где находится.

## Принципы проектирования

1. **Чип самодостаточен.** Катушка опознаёт себя без облака, без
 аккаунта, без сети — нагрузка полна и открыта.
2. **Облако принадлежит пользователю, а не системе.** Всё состояние хранится в аккаунте
 пользователя; доступ обеспечивают правила безопасности на стороне сервера, а не
 клиентский код.
3. **Каждый слой необязателен.** Работает использование только с телефоном, только с настольным ПК, только с чипом
 или только через API; компоненты добавляют ценность, но никогда не блокируют друг друга.
4. **Интеграции говорят на родном протоколе принтера.** Никаких модификаций прошивки, никаких
 обходов через облако: Tiger Studio общается по MQTT/WebSocket/HTTP напрямую по LAN
 (см. [поток данных](./data-flow.md)).

---

**◀ Назад:** [Инвентарь и облачная синхронизация](../concepts/inventory-and-cloud-sync.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Поток данных](./data-flow.md)

**См. также:** [Продукты](../products/README.md), [Для разработчиков](../developers/README.md)
