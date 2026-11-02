---
sourceHash: 6f9124180c40a232c7aab51fda782a891af83baafbcf03c27d697b0ccfcff594
sourcePath: docs/developers/integrations.md
---

# Построено на TigerTag — интеграции сторонних разработчиков

Смысл открытого протокола — в том, что с ним создают *другие*. Это уже
происходит: есть проекты, которые самостоятельно интегрировали TigerTag.

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— мультивендорный набор инструментов сообщества для RFID катушек. Он читает форматы меток
многих производителей — и **TigerTag среди них**: открытая нагрузка сделала добавление
простым делом.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— независимая прошивка сообщества для Snapmaker U1 под лицензией GPL-3.0 (SSH,
потоковая передача с камеры, метрики… и приятные возможности RFID). **С ней Snapmaker U1
нативно читает TigerTag — это первый принтер, читающий TigerTag на самой
машине.** Именно то будущее, к которому стремится коллективная игра, наступило
раньше срока благодаря сообществу.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — платформа учёта филамента
(веб, iOS/Android, Home Assistant, постобработка OrcaSlicer, возможность
самостоятельного размещения). Идентификация катушек в ней построена на TigerTag:
*«Отмечайте катушки NFC-чипами (TigerTags) и управляйте инвентарём одним простым
жестом»* (*"Mark your spools with NFC chips (TigerTags) and manage your inventory with a simple gesture."*). Сторонний
продукт со своим видением — работающий на открытом протоколе, именно так, как и задумано.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — настольное приложение под AGPL-3.0
(Python, Windows) для управления локальной библиотекой файлов для 3D-печати: предпросмотр,
семантический поиск, передача в слайсер, очередь печати. Его часть, связанная с филаментом, читает
**инвентарь TigerTag**: войдите в аккаунт или позвольте ему подхватить существующую сессию
Tiger Studio, и ваши катушки TigerTag появятся в его запасах — **только для чтения**, в ваш
инвентарь оно ничего не записывает. Далее оно отфильтровывает библиотеку до того, что ваши
катушки действительно могут напечатать, и предупреждает, если филамента не хватит до конца печати.

---

Создаёте что-то на основе TigerTag? Расскажите нам в
[Discord](https://discord.gg/3Qv5TSqnJH) или через
[организацию на GitHub](https://github.com/TigerTag-Project) — и помните, что
[TigerTag Certified](../../TRADEMARK.md) существует для проверенных интеграций.

---

**▲ [Оглавление документации](../../README.md)** · **См. также:** [Обзор для разработчиков](./README.md), [Что можно создать?](./README.md), [Совместимость](../compatibility/README.md)
