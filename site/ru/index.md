---
title: "Открытая идентичность филамента"
description: "Открытая NFC-идентичность для филамента для 3D-печати — что такое TigerTag, что на нём работает и как построить на нём своё решение."
template: splash
editUrl: false
banner:
  content: Эта страница <strong>переведена автоматически</strong> с английского. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BRU%5D+%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F">Сообщите об ошибке</a>.
hero:
  title: "TigerSystem"
  tagline: "Ваш филамент наконец-то умный — и наконец-то ваш. Один маленький открытый NFC-чип, и катушка может наконец представиться сама."
  image:
    html: |
      <div class="ts-hero-devices" role="img" aria-label="Tiger Studio на компьютере, считыватель TigerPOD с катушкой, помеченной тегом, и мобильное приложение">
        <div class="ts-hd-item ts-hd-floats ts-hd-imac"><img class="ts-hd-float" src="/assets/hero/imac-studio.webp" alt="" width="1253" height="995" /></div>
        <div class="ts-hd-item ts-hd-pod">
          <img class="ts-hd-face" src="/assets/hero/tigerpod-mini.webp" alt="" width="450" height="665" />
          <img class="ts-hd-face ts-hd-face-scale" src="/assets/hero/tigerscale.webp" alt="" width="420" height="611" />
          <img class="ts-hd-face ts-hd-face-spool" src="/assets/hero/tigerspool.webp" alt="" width="420" height="511" />
        </div>
        <div class="ts-hd-item ts-hd-floats ts-hd-touch"><img class="ts-hd-float" src="/assets/hero/tigertouch-tour.webp" alt="" width="1000" height="733" /></div>
        <div class="ts-hd-item ts-hd-floats ts-hd-phone"><img class="ts-hd-float" src="/assets/hero/iphone-connect.webp" alt="" width="704" height="1427" /></div>
      </div>
  actions:
    - text: "Ваша первая умная катушка"
      link: /ru/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Зачем нужна TigerSystem"
      link: /ru/vision/why-tigersystem/
      variant: minimal
    - text: "Посмотреть продукты"
      link: /ru/products/
      variant: minimal
---

## TigerSystem за 30 секунд

На каждой полке для 3D-печати скрыта одна и та же загадка: двадцать катушек,
половина без этикеток, и ни одна не может сказать, что она такое, сколько в ней
осталось и как её нужно печатать.

**TigerSystem решает это одним маленьким чипом.** Приклейте NFC-чип
[TigerTag](/ru/products/tigertag/) на катушку, и катушка представится сама — вашему
телефону, вашему компьютеру, вашему принтеру: *«Я матовый чёрный PLA бренда X,
1,75 мм, печатайте меня при 210 °C, и меня осталось 640 г».*

Производители принтеров тоже маркируют свои катушки — но **закрыто**, в
секретных форматах, которые работают только с их собственными машинами.
TigerSystem переворачивает это: чип **открыт и читается чем угодно**, данные
принадлежат **вашему** аккаунту, а каждая часть — приложения, облако, весы,
считыватель, сама спецификация чипа — опубликована, чтобы любой мог ею
пользоваться или строить на её основе. Это формат, а не огороженный сад.

Уже произведено более **2,5 миллиона чипов**, которые поставляются с завода в
филаменте таких брендов, как Rosa3D, eSun, Sunlu и R3D, что делает TigerTag
самым распространённым в мире сторонним RFID-протоколом.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Коробка с филаментом Rosa3D с TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="Коробка с филаментом eSun с TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Коробка с филаментом Sunlu с TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>Не макет: настоящие коробки на настоящих полках, которые поставляются с TigerTag внутри.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/ru/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Готовы попробовать</span><span class="ts-card__text">Сделайте катушку умной за две минуты — чистый NTAG-чип, ваш телефон, бесплатное приложение. Без аккаунта, полностью офлайн.</span></span></a>
<a class="ts-card" href="/ru/products/"><span class="ts-card__body"><span class="ts-card__title">Пользователь</span><span class="ts-card__text">Что на самом деле делает для вас каждый продукт — чипы, приложения, весы, подставка для считывателей.</span></span></a>
<a class="ts-card" href="/ru/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Владелец принтера</span><span class="ts-card__text">Работает ли это с вашей машиной? Шесть брендов уже поддерживаются, а чип работает со всеми остальными.</span></span></a>
<a class="ts-card" href="/ru/developers/"><span class="ts-card__body"><span class="ts-card__title">Разработчик</span><span class="ts-card__text">Читайте и записывайте чипы из JavaScript или Python либо подключите идентичность к своему программному обеспечению.</span></span></a>
<a class="ts-card" href="/ru/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Производитель филамента</span><span class="ts-card__text">Интеграция на заводе за несколько дней, около секунды на чип, в масштабе производства.</span></span></a>
<a class="ts-card" href="/ru/faq/"><span class="ts-card__body"><span class="ts-card__title">Просто любопытно</span><span class="ts-card__text">Вопросы, которые задают все, с ответами — чипы, облако, принтеры, конфиденциальность и многое другое.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Настоящий стенд TigerSystem — Tiger Studio Manager, TigerScale, датчик цвета TD1S, считыватель ACR122U и TigerPOD" />
<figcaption>Не макет: песочница на настоящем стенде — Studio, TigerScale, TD1s и TigerPOD работают вместе.</figcaption>
</figure>

## Где находится истина

Эта вики собирается из
[репозитория TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs), который является **источником
истины** экосистемы. Если какой-то другой ресурс расходится с репозиторием,
прав репозиторий.

**И репозиторий принадлежит всем.** Вам не нужны ни разрешение, ни приглашение,
ни какая-либо связь с проектом, чтобы его исправить:

- Что-то неверно, непонятно или отсутствует, и вы хотите просто сообщить об
  этом? → [откройте issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Знаете, что там должно быть написано? → у каждой страницы есть ссылка
  **«Редактировать страницу»**, которая ведёт прямо к стоящему за ней
  Markdown. Измените его, откройте pull request, и всё — GitHub сам сделает
  форк, и это работает даже с телефона.

Опечатки, более удачные формулировки, пропущенный шаг, страница, из-за которой
вы свернули не туда: всё это приветствуется, а накапливаются как раз небольшие
исправления.
Содержимое распространяется по лицензии [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
правила, умещающиеся на одном экране, изложены в [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md).

Политика в отношении товарного знака касается *знака* — логотипа на физическом
чипе. К этой документации, открытой для всех, она не имеет никакого отношения.

ИИ-ассистентам стоит начинать с [llms.txt](/llms.txt) — сжатого канонического
объяснения. Всем остальным можно начать с
[глоссария](/ru/glossary/), если какой-то термин мешает.
