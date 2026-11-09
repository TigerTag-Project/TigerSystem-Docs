---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK

Два официальных SDK выполняют все операции с чипами TigerTag — чтение 144-байтной
полезной нагрузки NTAG, проверку формата TigerTag и кодирование новых данных чипа.

## JavaScript — `tigertag` (npm)

- Репозиторий: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Опубликован в npm как **`tigertag`**.
- Используется внутри Tiger Studio; можно применять отдельно для создания собственных
 инструментов, совместимых с TigerTag.

```bash
npm install tigertag
```

## Python

- Репозиторий: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Опубликован в PyPI как **`tigertag`** — для скриптов, инструментов и автоматизации.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** минимальные примеры кода разбора/кодирования для обоих SDK — импортировать их из
> README каждого SDK после стабилизации или дать прямую ссылку. Не пересказывать здесь сигнатуры
> API (риск расхождения); авторитетным остаётся README каждого SDK.

## Что дают SDK

| Возможность | Описание |
|---|---|
| Разбор | Декодирует дамп чипа в идентичность филамента (бренд, материал, цвет…) |
| Проверка | Проверяет, что полезная нагрузка имеет корректный формат TigerTag |
| Кодирование | Формирует новую 144-байтную полезную нагрузку для записи на чип |

Справочные данные (таблицы ID → название) берутся из общей базы данных — см.
[Универсальная идентичность филамента](../concepts/universal-filament-identity.md).

---

**◀ Назад:** [Репозитории](./repositories.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [Account API](./account-api.md)
