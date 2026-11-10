---
title: "开放的耗材身份"
description: "面向 3D 打印耗材的开放 NFC 身份——TigerTag 是什么、基于它运行着什么，以及如何用它搭建你自己的方案。"
template: splash
editUrl: false
banner:
  content: 本页由英文<strong>自动翻译</strong>而成。<a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BZH%5D+%E9%A6%96%E9%A1%B5">报告错误</a>。
hero:
  title: "TigerSystem"
  tagline: "你的耗材，终于变聪明了——也终于属于你了。一枚小小的开放 NFC 芯片，线轴终于可以自我介绍。"
  image:
    html: |
      <div class="ts-hero-devices" role="img" aria-label="桌面上的 Tiger Studio、托着贴有标签线轴的 TigerPOD 读卡器，以及手机应用">
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
    - text: "你的第一卷智能线轴"
      link: /zh/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "为什么会有 TigerSystem"
      link: /zh/vision/why-tigersystem/
      variant: minimal
    - text: "浏览产品"
      link: /zh/products/
      variant: minimal
---

## 30 秒了解 TigerSystem

每一个 3D 打印耗材架上都藏着同一个谜团：二十卷线轴，一半没有标签，没有一卷能告诉你它是什么、还剩多少，或者该怎么打印。

**TigerSystem 用一枚小小的芯片解决了这个问题。** 把一枚 [TigerTag](/zh/products/tigertag/) NFC 芯片贴在线轴上，线轴就会自我介绍——对你的手机、你的电脑、你的打印机：*“我是 X 品牌的哑光黑 PLA，1.75 mm，请用 210 °C 打印我，我还剩 640 g。”*

打印机厂商也会给自己的线轴贴标签——但是**加了锁**，用的是保密格式，只能配合他们自己的机器使用。TigerSystem 把这一点反了过来：芯片是**开放的，任何东西都能读取**，数据属于**你**的账号，而每一个组成部分——应用、云、秤、读卡器、芯片规范本身——都已公开，任何人都可以使用或在其基础上构建。这是一种格式，而不是围起来的花园。

已经生产了超过 **250 万枚芯片**，由 Rosa3D、eSun、Sunlu 和 R3D 等品牌在工厂直接装进耗材出货，这使 TigerTag 成为全球部署最广泛的第三方 RFID 协议。

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="带有 TigerTag NFC-RFID 的 Rosa3D 耗材盒" />
<img src="/assets/box-esun-cutout.png" alt="带有 TigerTag NFC-RFID 的 eSun 耗材盒" />
<img src="/assets/box-sunlu-cutout.png" alt="带有 TigerTag NFC-RFID 的 Sunlu 耗材盒" />
</div>

<p class="ts-boxes__caption"><em>不是样机：真实的盒子摆在真实的货架上，出厂时里面就带着 TigerTag。</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/zh/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">想动手试试</span><span class="ts-card__text">两分钟让一卷线轴变智能——一枚空白 NTAG 芯片、你的手机、免费应用。无需账号，完全离线。</span></span></a>
<a class="ts-card" href="/zh/products/"><span class="ts-card__body"><span class="ts-card__title">用户</span><span class="ts-card__text">每款产品究竟能为你做什么——芯片、应用、秤、读卡器支架。</span></span></a>
<a class="ts-card" href="/zh/compatibility/"><span class="ts-card__body"><span class="ts-card__title">打印机用户</span><span class="ts-card__text">能和你的机器配合使用吗？六个品牌已经上线，其他所有品牌也都能使用这枚芯片。</span></span></a>
<a class="ts-card" href="/zh/developers/"><span class="ts-card__body"><span class="ts-card__title">开发者</span><span class="ts-card__text">用 JavaScript 或 Python 读写芯片，或者把这套身份接入你自己的软件。</span></span></a>
<a class="ts-card" href="/zh/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">耗材制造商</span><span class="ts-card__text">几天即可完成工厂集成，每枚芯片约一秒，满足量产规模。</span></span></a>
<a class="ts-card" href="/zh/faq/"><span class="ts-card__body"><span class="ts-card__title">只是好奇</span><span class="ts-card__text">大家都会问的问题，都有解答——芯片、云、打印机、隐私，应有尽有。</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="一张真实的 TigerSystem 工作台——Tiger Studio Manager、TigerScale、TD1S 颜色传感器、ACR122U 读卡器和 TigerPOD" />
<figcaption>不是样机：真实工作台上的沙盒——Studio、TigerScale、TD1s 和 TigerPOD 协同工作。</figcaption>
</figure>

## 事实以哪里为准

本 wiki 由 [TigerSystem-Docs 仓库](https://github.com/TigerTag-Project/TigerSystem-Docs)渲染而成，该仓库是整个生态的**事实来源**。如果其他地方与仓库不一致，以仓库为准。

**而且这个仓库属于每一个人。** 你不需要许可、邀请，也不需要和项目有任何关系，就可以更正它：

- 发现错误、不清楚或缺失的内容，只想说一声？→ [提交 issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- 知道应该怎么写？→ 每个页面都有一个**“编辑此页”**链接，直接带你到背后的 Markdown。修改它，发起 pull request，就完成了——GitHub 会为你处理 fork，用手机也可以操作。

错别字、更好的措辞、缺失的步骤、让你走错路的页面：一切都欢迎，而正是这些小小的更正在不断积累。
内容采用 [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE) 许可；一屏就能读完的规则见 [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md)。

商标政策只涉及*商标*——实体芯片上的徽标。它与本文档无关，本文档对所有人开放。

AI 助手应从 [llms.txt](/llms.txt) 开始，那是精简的权威说明。其他人如果被某个术语绊住，可以从[术语表](/zh/glossary/)开始。
