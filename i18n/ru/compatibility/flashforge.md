---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Связь с принтером — **Live**

| Аспект | Подробности |
|---|---|
| Протокол | Опрос по HTTP (порт 8898) + M-коды по TCP (порт 8899) |
| Обнаружение | UDP-мультикаст (225.0.0.9:19000) |
| Филамент | IFS — мультифиламентная система FlashForge |
| Камера | Поток MJPEG |
| Телеметрия | Температуры, ход задания |

## Нативный RFID — нет: в машинах нет считывателя

Принтеры FlashForge поставляются **без какого-либо RFID-считывателя** и без собственного
формата RFID. Поэтому это самая наглядная демонстрация преимущества
TigerSystem: **мы дали машинам FlashForge возможность работать с
филаментом, опознанным по NFC, — используя NFC-считыватель, который уже есть в
смартфоне пользователя.** Совершенно новая возможность, добавленная чужому принтеру,
**совершенно бесплатно, без затрат для пользователя и без каких-либо изменений в машине.**

## FlashForge × TigerSystem — официальная прошивка

Собственная инженерная команда FlashForge создала прошивку для **Creator 5** и
**Creator 5 Pro**, которая работает с **FlashForge Cloud и LAN одновременно**.

Это важнее, чем кажется. Стандартная прошивка заставляет выбирать что-то одно: включите облако,
и локальные инструменты больше не смогут связаться с принтером. Именно этот выбор был единственным
препятствием между владельцем FlashForge и этой экосистемой — теперь его
нет. Это **официальная прошивка FlashForge**, а не форк сообщества и не
патч — созданная совместно с TigerTag для этой интеграции и опубликованная здесь с
их согласия.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Скачать — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Скачать — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Исходный код и руководство по установке</a>
</div>

Устанавливается с USB-накопителя. Бесплатно для всех, с оборудованием TigerTag или без него.

### Подключение после прошивки

Включите **режим LAN** в настройках принтера — это единственное изменение, которое
делает возможным прошивка. Tiger Studio затем находит принтер **автоматическим обнаружением**,
или вы добавляете его вручную по **IP-адресу**. Больше не нужно выбирать
между облаком и локальными инструментами: работают оба одновременно.

| | Стандартная прошивка | С этой прошивкой |
|---|:---:|:---:|
| FlashForge Cloud — приложение, удалённый доступ | ✅ | ✅ |
| Доступ по LAN — локальные инструменты в вашей сети | ✅ | ✅ |
| **Оба одновременно** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect и TigerSpool **при включённом облаке** | ❌ | ✅ |

### Ничего не теряется

Владелец сохраняет все функции FlashForge Cloud и получает всю экосистему
в придачу: бесплатный **менеджер филамента и принтеров** с открытым исходным кодом для настольного ПК,
**телефон, читающий и записывающий катушки**, и **[TigerSpool](../products/tigerspool.md)** —
устройство-считыватель с открытым исходным кодом, которое стоит рядом с машинами и держит в своём списке **до 24
принтеров**, десять из них подключены одновременно — одна коробка на всю
полку.

Так принтер без считывателя и без собственного формата теперь читает чип
филамента любого бренда, использующего TigerTag, — и катушек, которые мейкеры маркируют сами
дома, на филаменте, который никогда не поставлялся с чипом.

Решение производителя принтеров открыть свою машину для экосистемы, которой он не владеет, — редкость.
Выигрывает от него каждый, у кого есть такая машина.

## Порядок работы

1. **Добавьте принтер** — найденный сетевым сканированием (UDP-мультикаст), когда
 нужен только его Printer ID, или добавленный вручную по IP-адресу, серийному
 номеру и Printer ID.
2. **Отсканируйте катушку** — телефоном (или настольным считывателем); она попадёт в
 ваш инвентарь.
3. **Назначьте её слоту IFS** — **одно сканирование, один щелчок** в
 сопоставлении Tiger Studio. Принтер узнаёт свой филамент так же
 точно, как машина со встроенным RFID, на любой модели FlashForge, без
 изменений оборудования и без чего-либо, добавленного в машину.
4. **Live** — температуры, ход задания и поток с камеры MJPEG в
 разделе принтеров.

## Добавление принтера

Чтобы общаться с FlashForge, Tiger Studio нужны три вещи: его **IP-адрес**, его
**серийный номер** и **пароль** — который сам принтер называет
**Printer ID**. Одно значение, два названия: то, что сенсорный экран показывает как Printer
ID, и нужно вводить в поле пароля Tiger Studio.

Сколько из трёх значений нужно вводить, зависит от того, как найден принтер:

| Как | Что вводить |
|---|---|
| **Сетевое сканирование** — Tiger Studio находит принтер в вашей локальной сети | только **Printer ID**; IP-адрес и серийный номер подставляет сканирование |
| **Вручную** — сканирование не нашло его | **IP-адрес + серийный номер + Printer ID** |

Облачного пути нет, поэтому это всегда один из этих двух вариантов. Выберите свою модель, чтобы увидеть,
где на сенсорном экране находится каждое значение.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Назад:** [Elegoo](./elegoo.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Anycubic](./anycubic.md)
