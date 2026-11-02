---
sourceHash: 9b2a6c672e2d601fbe11882999e431d8483267caef4c132191c45643eedd78bb
sourcePath: docs/products/tiger-studio.md
---

# Tiger Studio (настольное приложение)

## Назначение

**Tiger Studio — центр управления вашим филаментом.** Каждая катушка, каждый
стеллаж, каждый принтер на одном экране — отсканируйте чип, и катушка откроется,
обновите вес, и он синхронизируется везде, взгляните на принтер и увидите, что
он делает прямо сейчас. Открытый исходный код, Windows / macOS / Linux.

<img src="../assets/hero-ecosystem.png" width="820" alt="Tiger Studio на настольном ПК рядом с мобильным приложением и считывателем TigerPOD — экосистема работает вместе" />

*Tiger Studio на столе, приложение в кармане, считыватель рядом — один и тот же
инвентарь, где бы вы к нему ни обратились.*

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigersystem.io/download">Скачать Tiger Studio — бесплатно</a>
</div>

<div class="ts-cta ts-cta--quiet">
<a href="https://github.com/TigerTag-Project/TigerTag-Studio-Manager"><img src="../assets/icons/github.svg" alt="" /> Исходный код</a>
</div>

Это намеренно **лаборатория, а не конечная цель** — демонстрация того,
что делает возможным открытый протокол: читаемая, доступная для форка и свободно копируемая
([философия](../philosophy/open-ecosystem.md)).

## Где он находится

```mermaid
flowchart LR
  RD["TigerPOD / ACR122U"] --> ST["Tiger Studio"]
  TD["TD1S"] --> ST
  ST <--> CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  SCALE["TigerScale"] --> CLOUD
  ST -- "filament to slots" --> PRN["6 printer brands"]
  PRN -- "telemetry · cameras" --> ST
```

## Функции (основные)

- **Инвентарь** — синхронизация Firestore в реальном времени, табличный/плиточный вид, панель
 сведений, отслеживание веса, калибровка контейнеров, цифровые катушки (TigerData) с
 атомарным переводом в чип.
- **Принтеры** — живые интеграции для **6 брендов** (телеметрия, филамент по
 слотам, ход задания, камеры, а для некоторых брендов — полные панели управления). См.
 [совместимость](../compatibility/README.md).
- **Стеллажи** — перетаскиваемое сопоставление физического хранилища.
- **Друзья и обмен** — коды обнаружения, инвентари друзей только для чтения.
- **Устройства** — собственные: [TigerPOD](./tigerpod.md) и
 [TigerScale](./tigerscale.md); сторонние: NFC-считыватель ACR122U,
 анализаторы **AJAX-3D TD-1 и TD1s** (TD + цвет прямо в профиль катушки)
 и **USB HID-весы** (DYMO серии M и любые совместимые) —
 полный список: [совместимое стороннее оборудование](../compatibility/third-party-hardware.md).
- **11 локалей** — EN · FR · DE · ES · IT · NL · PL · PT-BR · PT-PT · RU · 中文.

Полный, всегда актуальный каталог находится в
[FEATURES.md](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/FEATURES.md) репозитория приложения.

## Архитектура

Electron + чистый JS, без сборщика. Связь с принтерами использует **нативный
LAN-протокол** каждого производителя напрямую (MQTT / WebSocket / HTTP) — заметки по протоколам
каждого бренда ведутся в репозитории приложения (`renderer/printers/<brand>/PROTOCOL.md`).

## В картинках

<img src="../assets/tiger-studio-inventory.jpg" width="100%" alt="Tiger Studio — вид инвентаря" />
<img src="../assets/tiger-studio-printers.jpg" width="100%" alt="Tiger Studio — вид парка принтеров с активными заданиями" />
<img src="../assets/tiger-studio-rack.jpg" width="480" alt="Tiger Studio — физический стеллаж с филаментом, сопоставленный в приложении" />

## Ссылки

- Репозиторий и загрузки: [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) (MIT)
- Полный каталог функций: [FEATURES.md](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/FEATURES.md)

---

**◀ Назад:** [Tiger NFC Connect](./tigertag-connect.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [TigerHub](./tigerhub.md)

**См. также:** [Совместимость](../compatibility/README.md), [Архитектура](../architecture/overview.md)
