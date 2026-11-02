---
sourceHash: 2685d64b4f1e988e9dd0b2d7d0911e187af40c64f176864d372e6398a4a1def8
sourcePath: docs/architecture/data-flow.md
---

# Поток данных

## От касания до печати

Полный путь одной катушки через систему:

```mermaid
sequenceDiagram
  actor User
  participant Chip as TigerTag chip
  participant App as Connect / Studio
  participant Cloud as Firebase
  participant Printer as Printer (LAN)

  User->>Chip: NFC tap (phone) or place on reader (desktop)
  Chip-->>App: 144-byte identity payload
  App->>Cloud: upsert spool in users/{uid} inventory
  Cloud-->>App: real-time snapshot to every signed-in device
  User->>App: assign spool to a printer slot
  App->>Printer: native protocol (MQTT / WebSocket / HTTP)
  Printer-->>App: live telemetry (temps, job, filament slots, camera)
```

## Где живёт каждый вид данных

| Данные | Где живут | Примечания |
|---|---|---|
| Идентичность катушки | Чип + облачный инвентарь пользователя | Чип авторитетен для офлайн-использования |
| Справочная база данных (бренды, материалы…) | `cdn.tigertag.io` (тот же проект Firebase) | Поставляется с приложениями, обновляется из CDN |
| Изображения катушек (включая фотографии продуктов TigerTag+) | `cdn.tigertag.io` (тот же проект Firebase) | Раздаются всем приложениям |
| Инвентарь, стеллажи, друзья, настройки | Firestore `users/{uid}/…` | По умолчанию только для владельца, обеспечивается правилами |
| Публичные коды обнаружения | Firestore `publicKeys/{code}` | Поиск друга за O(1) |
| Учётные данные и телеметрия принтеров | **Только локально** (настольное приложение) | Трафик LAN никогда не проходит через облако |
| Живой вес (TigerScale) | Устройство → Firestore | Отображается вживую во всех клиентах |

## Где находится ваш слайсер

TigerSystem **не заменяет ваш слайсер** — она дополняет картину вокруг
него:

```mermaid
flowchart LR
  YOU["You"] -- "3D model" --> SLICER["Your slicer"]
  SLICER -- "sliced job" --> PRN["Printer"]
  TAG["TigerTag chip"] -- "scan" --> ST["Tiger Studio"]
  ST -- "which filament is in which slot" --> PRN
  PRN -- "progress · temps · 'ends at' · camera" --> ST
```

- Вы нарезаете и запускаете задания точно как раньше, в любом слайсере.
- Tiger Studio сообщает принтеру, **какой филамент в каком слоте**
 (AMS / CFS / Canvas / ACE / IFS), чтобы информация на стороне машины
 соответствовала реальности.
- Что бы ни запустило печать, задание отображается вживую в Tiger Studio —
 ход, температуры, время окончания, камера.
- Чип хранит рекомендуемые параметры печати филамента; **автоматического импорта
 профилей слайсера сегодня нет** — вы переносите их в профиль слайсера самостоятельно.

## Две плоскости, намеренно разделённые

- **Облачная плоскость** — идентичность, инвентарь, обмен. Интернет, Firebase,
 обеспечивается правилами.
- **Плоскость LAN** — управление принтерами и камеры. Только локальная сеть, нативные
 протоколы производителей, нулевая зависимость от облака (настольное приложение продолжает работать
 с принтерами и в офлайне).

> **Примечание:** исключение — **облачный режим** Anycubic, где связь с принтером
> идёт через облачный MQTT производителя — см.
> [Совместимость с Anycubic](../compatibility/anycubic.md).

---

**◀ Назад:** [Обзор архитектуры](./overview.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Продукты](../products/README.md)

**См. также:** [Инвентарь и облачная синхронизация](../concepts/inventory-and-cloud-sync.md), [Совместимость](../compatibility/README.md)
