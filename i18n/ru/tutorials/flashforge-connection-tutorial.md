---
sourceHash: 34416628551d83bd9fa02324bae0b2fbfb63e5cebd7cce0c1f49579591fc94e9
sourcePath: docs/tutorials/flashforge-connection-tutorial.md
---

# FlashForge: руководство по подключению

Принтеры FlashForge подключаются только через вашу локальную сеть — облачного
варианта нет. Что понадобится с сенсорного экрана, зависит от того, как Tiger Studio находит
принтер:

- **Найден при сканировании сети:** только **Printer ID** — шаг 3.
- **Добавлен вручную:** **серийный номер** и **IP-адрес** (шаг 2), а также
 **Printer ID** (шаг 3).

Об остальной части интеграции читайте в разделе [Совместимость с FlashForge](../compatibility/flashforge.md).

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step1.jpg" alt="Сенсорный экран FlashForge — кнопка Basic Info" />
<p><strong>Шаг 1.</strong> На главном экране нажмите кнопку «Basic Info» в правом нижнем углу.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step2.jpg" alt="Сенсорный экран FlashForge — страница Basic Info" />
<p><strong>Шаг 2.</strong> На странице Basic Info найдите Serial No. и IP Address.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step3.jpg" alt="Сенсорный экран FlashForge — страница Network Mode" />
<p><strong>Шаг 3.</strong> Выберите значок шестерёнки, нажмите «Network Mode», затем найдите Printer ID.</p>
</div>

> **Одно значение, два названия.** Принтер называет его *Printer ID*, а в форме
> Tiger Studio оно называется **Password**. Именно Printer ID нужно ввести туда.

---

**◀ Назад:** [Совместимость с FlashForge](../compatibility/flashforge.md) · **▲ [Оглавление документации](../../README.md)**
