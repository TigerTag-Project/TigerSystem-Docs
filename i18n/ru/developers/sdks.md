---
sourceHash: a907d2b3c8f6691d3cf0622da7203cc0fd523fec84b2e43dbda88c857ae0a5d8
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

## Чтение и запись чипа

Оба SDK работают одинаково. Для чтения передайте UID чипа и его страницы,
начиная с `0x04`, в том виде, в каком их возвращает ваш NFC SDK. Для записи
соберите тег из его полей и запишите возвращённые 80 байт на страницы
`0x04`–`0x17`. ID берутся из [справочных таблиц](../concepts/universal-filament-identity.md); в примере —
катушка 1 кг красного PLA Rosa3D, 1,75 мм.

### JavaScript

```js
const { TigerTag } = require('tigertag');

// Read
const tag = TigerTag.fromPages(uid, payload);
console.log(tag.pretty());
console.log(String(tag.verify()));   // VALID / NOT SIGNED / INVALID

// Write
const spool = TigerTag.create({
  uid,
  idType: 142,          // Filament
  idMaterial: 38219,    // PLA
  idBrand: 19961,       // Rosa3D
  idAspect1: 104,       // Basic
  idDiameter: 56,       // 1.75 mm
  color1R: 255, color1G: 0, color1B: 0, color1A: 255,
  measure: 1000, idUnit: 21,   // 1000 g
  nozzleTempMin: 195, nozzleTempMax: 230,
});
const bytes = spool.toBytes();   // 80 bytes
```

### Python

```python
from tigertag import TigerTag

# Read
tag = TigerTag.from_pages(uid, payload)
print(tag.pretty())
print(tag.verify())                # VALID / NOT SIGNED / INVALID

# Write
spool = TigerTag.create(
    uid=uid,
    id_type=142,          # Filament
    id_material=38219,    # PLA
    id_brand=19961,       # Rosa3D
    id_aspect_1=104,      # Basic
    id_diameter=56,       # 1.75 mm
    color1_r=255, color1_g=0, color1_b=0, color1_a=255,
    measure=1000, id_unit=21,    # 1000 g
    nozzle_temp_min=195, nozzle_temp_max=230,
)
data = spool.to_bytes()            # 80 bytes
```

Чтобы проверить, что записывает ваш код, вставьте hex из `toBytes()` или
`to_bytes()` в [playground](https://tigersystem.io/playground-tigertag): он декодирует чип поле за полем, прямо в
браузере.

Оба примера работают как есть с `tigertag` 1.2.1 (npm) и 1.4.0 (PyPI).
Остальная часть API (подробности подписи, облачная синхронизация TigerTag+,
изменение чипа, CLI) описана в README каждого SDK, который является
каноническим: [JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

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
