---
sourceHash: f787ab835cd6a0761d139df621b1c9918dda678a3790454304c18585b1f54cf9
sourcePath: docs/products/README.md
---

# Продукты

Экосистема TigerSystem: по странице на каждый продукт.

**Это официальные продукты** — разработанные и опубликованные TigerSystem.
«Официальные» здесь значит *мы это сделали*, а не *вам это нужно*: все они
с открытым исходным кодом и доступны для форка, а их названия (Tiger Studio, TigerHub, TigerScale,
TigerPOD, Tiger NFC Connect) намеренно **не заявлены как товарные знаки**.
Зарезервирован только сам знак **TigerTag**, и только для чипа.

Любой может создать и продавать альтернативу — считыватель, приложение, весы, целую
систему учёта. Что уже существует, см. в разделах [стороннее оборудование](../compatibility/third-party-hardware.md)
и [программное обеспечение на основе TigerTag](../developers/integrations.md). Сторонний продукт
**совместим с TigerTag** просто тем, что работает; **TigerTag Certified** он становится только
тогда, когда TigerSystem это подтверждает
([политика в отношении товарного знака](../../TRADEMARK.md)).

> **Примечание:** каждый **пользовательский** продукт ниже — и каждый будущий — это
> рабочее **доказательство концепции**. Их единственная цель — показать потенциал
> открытого, стандартного, независимого от производителей, кросс-платформенного протокола и вдохновить
> на то, что другие построят на его основе. (Заводской инструментарий программирования чипов
> — совсем другое дело: промышленного уровня, в производстве.) См.
> [Песочница, намеренно](../vision/why-tigersystem.md).

| Продукт | Что это | Тип |
|---|---|---|
| <img src="../assets/icons/tigerdata.svg" width="18" alt="" /> [TigerData](../concepts/universal-filament-identity.md) | Виртуальный чип — идентичность в цифровом виде, чип не нужен, можно перевести в чип в любой момент | Концепция |
| <img src="../assets/icons/tigertag.svg" width="18" alt="" /> [TigerTag](./tigertag.md) | Открытый чип RFID/NFC + стандарт идентичности катушки | Оборудование + спецификация |
| <img src="../assets/icons/tigertag-plus.svg" width="18" alt="" /> [TigerTag+](./tigertag-plus.md) | TigerTag с идентификатором продукта из каталога и необязательным обогащением — по-прежнему 100 % офлайн; будучи подписанным, это TigerTag+ Certified | Оборудование + спецификация |
| <img src="../assets/icons/connect.svg" width="18" alt="" /> [Tiger NFC Connect](./tiger-nfc-connect.md) | Мобильное приложение (iOS/Android) — сканирование, кодирование, просмотр | Приложение |
| <img src="../assets/icons/studio.svg" width="18" alt="" /> [Tiger Studio](./tiger-studio.md) | Настольное приложение — инвентарь, стеллажи, датчики, принтеры | Приложение |
| <img src="../assets/icons/tigerhub.svg" width="18" alt="" /> [TigerHub](./tigerhub.md) | Веб-дом экосистемы — витрина, списки желаний, друзья и обмен на `tigersystem.io` | Веб |
| <img src="../assets/icons/tigerpod.svg" width="18" alt="" /> [TigerPOD](./tigerpod.md) | Печатаемая на 3D-принтере подставка с двумя NFC-считывателями | Оборудование |
| <img src="../assets/icons/tigerscale.svg" width="18" alt="" /> [TigerScale](./tigerscale.md) | Весы для филамента на ESP32 с открытым исходным кодом | Оборудование |
| <img src="../assets/icons/tigerspool.svg" width="18" alt="" /> [TigerSpool](./tigerspool.md) | Коробка на ESP32 с открытым исходным кодом рядом с принтером — коснитесь катушкой, выберите слот, любой бренд | Оборудование |
| <img src="../assets/icons/tigertouch.svg" width="18" alt="" /> [Tiger Touch](./tigertouch.md) | Прошивка с открытым исходным кодом для экрана BIGTREETECH Panda Touch / K-Touch — принтеры любого бренда, вживую, на одном экране | Прошивка |
| <img src="../assets/icons/factory.svg" width="18" alt="" /> [TigerTag Factory & Manager](./factory-suite.md) | Промышленные инструменты программирования чипов и базы данных филамента для заводов — **не для широкой публики**, производственного уровня | Промышленный |

```mermaid
flowchart LR
  TT[TigerTag / TigerTag+] --> CO[Tiger NFC Connect]
  TT --> POD[TigerPOD] --> ST[Tiger Studio]
  SC[TigerScale] --> FB[("Your TigerSystem account — Firebase")]
  TT --> SPL[TigerSpool] --> PRN["Your printer's slot"]
  FB --> SPL
  CO <--> FB
  ST <--> FB
  FB --> HUB["TigerHub — tigersystem.io"]
```

---

**◀ Назад:** [Поток данных](../architecture/data-flow.md) · **▲ [Оглавление документации](../../README.md)** · **Далее ▶** [TigerTag](./tigertag.md)
