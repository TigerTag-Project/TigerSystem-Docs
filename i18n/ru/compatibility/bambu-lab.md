---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Связь с принтером — **Live**

Tiger Studio подключается к принтеру Bambu Lab двумя способами:

| Аспект | Подробности |
|---|---|
| LAN | MQTTS (TLS) напрямую к принтеру, порт 8883. Нужно один раз включить на принтере **режим LAN Only** и **Developer Mode** — [пошагово для каждой модели](#переключение-в-режим-lan). |
| Облако | Один раз войдите в аккаунт Bambu Lab (e-mail + одноразовый код) — все принтеры аккаунта находятся автоматически, включая код доступа LAN. Для этой части переключатель на принтере не нужен. |
| Филамент | Поддержка AMS — до 16 слотов, редактирование филамента по слотам |
| Обнаружение | LAN: SSDP + зонд TLS, а также добавление по IP. Облако: автоматически, из аккаунта. |
| Камера | Поток JPEG (TCP 6000) / RTSP — одна и та же картинка в обоих случаях, требуется включить на принтере **LAN Mode Liveview** |
| Телеметрия | Температуры, ход задания, предпросмотр печати |

> **Облачные подключения сегодня только для чтения**, за одним исключением. Вы получаете живую телеметрию —
> температуры, ход, камеру — и **свет** принтера, который переключается через облако.
> Всё остальное, что воздействует на машину (пауза, возобновление, остановка), требует пути через LAN.

## Нативный RFID — спецификация описана, чтение в приложении запланировано

Метки катушек Bambu — это **Mifare Classic 1K** с **ключами, получаемыми из UID
через HKDF-SHA256**, — криптографически заблокированные, чтобы служить экосистеме производителя.
Спецификация декодирования (только чтение) ведётся в
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Порядок работы

1. **Добавьте принтер** — либо **по LAN** (обнаружение SSDP или добавление по IP
 вместе с кодом доступа LAN принтера), либо **из облака** (войдите
 в аккаунт Bambu Lab — все принтеры на нём находятся автоматически).
 Для пути через LAN сначала нужно один раз включить на принтере режим LAN Only и Developer Mode —
 [пошагово для каждой модели](#переключение-в-режим-lan).
2. **Отсканируйте катушку** — телефоном или настольным считывателем; катушка попадёт в ваш
 инвентарь.
3. **Назначьте её слоту AMS** — Tiger Studio отправляет профиль филамента
 (материал, цвет) в слот по MQTTS; информация на стороне машины теперь
 соответствует реальности, для до 16 слотов AMS.
4. **Live** — температуры, ход задания, предпросмотр печати, абсолютное
 время **«Ends at»** и изображение с камеры прямо в разделе принтеров.

## Переключение в режим LAN

Для пути через LAN на самом принтере должны быть включены **режим LAN Only** и **Developer Mode** — это
разовая настройка на экране. Выберите свою модель ниже, чтобы увидеть точные шаги.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Ограничения

- Нативные метки Bambu пока не читаются в приложении — спецификация описана, а текущая работа направлена на преобразование данных меток производителей в катушки TigerData (см. [Совместимость](./README.md)).
- Для изображения с камеры на принтере должен быть включён LAN Mode Liveview при любом способе подключения.

---

**◀ Назад:** [Совместимость](./README.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Creality](./creality.md)
