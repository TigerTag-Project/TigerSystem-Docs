---
sourceHash: 523ed86c04218e9fd4b3d044087a4f64103df5017b6ae258c84443a2243fcac2
sourcePath: docs/guides/filament-materials-guide.md
---

# 耗材材料指南

21 种材料的实用参考：概述、强度、耐化学性、耐热/耐冲击/耐紫外线、温度、干燥与密度、使用建议和典型示例。

**名称与数字均来自协议。** 每张卡片都按 TigerTag 编码的方式准确写出材料名称，并给出它在共享参考数据库中的 id——
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json)，同样由 [TigerTag API](https://api.tigertag.io/api:tigertag/material/get/all) 提供。
喷嘴、热床、干燥的数值以及密度均取自该数据库本身：它们就是你为线轴选择材料时 Tiger Studio 自动填入的值。线轴的
TigerTag 携带其制造商的确切数值，并以这些数值为准。
哑光或金属等表面效果在 TigerTag 中不是材料，而是**外观**，叠加在基础材料之上——见
[通用耗材身份](../concepts/universal-filament-identity.md)。

**耐化学性标签：** <span class="ts-tag ts-tag--ok">良好</span> 耐受良好 · <span class="ts-tag ts-tag--warn">一般</span> 会减弱或因情况而异 · <span class="ts-tag ts-tag--danger">较差</span> 溶解或降解。

## 日常

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">日常</span>

| | |
|---|---|
| TigerTag 材料 | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| 概述 | 标准、易打印，可工业堆肥。 |
| 强度 /10 | 6 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> IPA（几乎不受影响）、油类、冷水<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——长时间接触会减弱，但不会溶解<br/><span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱 |
| 耐热性 | ~50–60 °C |
| 耐冲击性 | 中等 |
| 耐紫外线 | 差 |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 45–55 °C |
| 干燥 | 50 °C · 8 小时 |
| 密度 | 1.24 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 风扇 100% · 可高速打印 |
| 示例 | 原型、手办、装饰 |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">日常</span>

| | |
|---|---|
| TigerTag 材料 | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| 概述 | 一种装饰性的 PLA 表面效果——丝绸般的光泽，或淡淡的木色粉末感，不要与下文填充量大得多的木质复合材料混淆。 |
| 强度 /10 | 5 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> IPA（几乎不受影响）、油类、冷水<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——长时间接触会减弱，但不会溶解；丝绸/木色添加剂吸湿比普通 PLA 稍快<br/><span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱 |
| 耐热性 | ~50–60 °C |
| 耐冲击性 | 低 |
| 耐紫外线 | 差 |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 45–55 °C |
| 干燥 | PLA Silk 50 °C · 8 小时<br/>PLA+ Silk 50 °C · 8 小时<br/>PLA Wood 60 °C · 8 小时 |
| 密度 | PLA Silk 1.24 g/cm³<br/>PLA+ Silk 1.24 g/cm³<br/>PLA Wood 1.28 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 如含有颗粒，使用 0.6 mm 喷嘴 · 低速 · 床面附着力要强（玻璃或 PEI）——完全冷却后再取下 |
| 示例 | 花瓶、装饰、艺术品 |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">日常</span>

| | |
|---|---|
| TigerTag 材料 | `PLA` · id 38219<br/>+ 外观 `Matt` · id 247 |
| 概述 | 哑光/磨砂质感（矿物填料），能很好地隐藏层纹。 |
| 强度 /10 | 5 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> IPA（几乎不受影响）、油类、冷水<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——长时间接触会减弱，但不会溶解<br/><span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱 |
| 耐热性 | ~50–55 °C |
| 耐冲击性 | 低到中等 |
| 耐紫外线 | 差 |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 45–55 °C |
| 干燥 | 50 °C · 8 小时 |
| 密度 | 1.24 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 中等速度（精细细节处更脆） · 适合不要光泽的装饰件 |
| 示例 | 手办、模型、展示件 |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">日常</span>

| | |
|---|---|
| TigerTag 材料 | `PETG` · id 38256 |
| 概述 | “瑞士军刀”：坚固、有韧性，耐化学性和耐紫外线都好。 |
| 强度 /10 | 8 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 水、醇类、稀酸、盐类<br/><span class="ts-tag ts-tag--danger">较差</span> 氯化溶剂、浓酮类 |
| 耐热性 | ~70–80 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 好 |
| 喷嘴温度 | 220–270 °C |
| 热床温度 | 70–75 °C |
| 干燥 | 70 °C · 8 小时 |
| 密度 | 1.27 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 风扇 20–50% · 床面附着力要强（玻璃或 PEI）——完全冷却后再取下 · 中等速度 |
| 示例 | 机械零件、防水盒、卡扣 |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">日常</span>

| | |
|---|---|
| TigerTag 材料 | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| 概述 | 同样是 PETG，但配方粘度更低，在 300+ mm/s 下也能足够快地熔化。 |
| 强度 /10 | 8（与 PETG 相同） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 水、醇类、稀酸、盐类<br/><span class="ts-tag ts-tag--danger">较差</span> 氯化溶剂、浓酮类 |
| 耐热性 | ~70–80 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 好 |
| 喷嘴温度 | 220–270 °C |
| 热床温度 | 70–75 °C |
| 干燥 | 70 °C · 8 小时 |
| 密度 | 1.27 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 仅在“高流量”热端或受流量限制的打印机上有用 · 在慢速或传统 Bowden 打印机上没有好处 |
| 示例 | 与 PETG 用途相同，用于快速打印机（如 Bambu Lab、Creality K1 等 CoreXY） |

</div>

## 技术 / 功能性

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `TPU` · id 43518<br/>邵氏硬度不属于 id 的一部分 |
| 概述 | 非常柔软，能吸收冲击，但容易被压扁变形。 |
| 强度 /10 | 3（非常柔软） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 油类、润滑脂、燃料<br/><span class="ts-tag ts-tag--warn">视配方而异</span> 对溶剂的耐受性取决于配方 |
| 耐热性 | ~55–60 °C |
| 耐冲击性 | 极好（吸收冲击） |
| 耐紫外线 | 好 |
| 喷嘴温度 | 200–250 °C |
| 热床温度 | 35–40 °C |
| 干燥 | 75 °C · 8 小时 |
| 密度 | 1.21 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 必须使用直驱挤出机 · 速度 15–25 mm/s，回抽尽量少 |
| 示例 | 鞋底、软握把、垫圈 |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `TPU` · id 43518<br/>邵氏硬度不属于 id 的一部分 |
| 概述 | 最常见的 TPU：柔韧性与可打印性之间的良好平衡。 |
| 强度 /10 | 5（柔韧） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 油类、润滑脂、燃料<br/><span class="ts-tag ts-tag--warn">视配方而异</span> 对溶剂的耐受性取决于配方 |
| 耐热性 | ~60 °C |
| 耐冲击性 | 极好 |
| 耐紫外线 | 好 |
| 喷嘴温度 | 200–250 °C |
| 热床温度 | 35–40 °C |
| 干燥 | 75 °C · 8 小时 |
| 密度 | 1.21 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 推荐直驱（调校良好的 Bowden 也可以） · 速度 30–45 mm/s——最宽容的 TPU |
| 示例 | 遥控车轮胎、手机壳、电缆护套 |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `TPU` · id 43518<br/>邵氏硬度不属于 id 的一部分 |
| 概述 | 几乎是硬质塑料：略有弹性，非常耐疲劳。 |
| 强度 /10 | 7（作为 TPU 来说偏硬） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 油类、润滑脂、燃料<br/><span class="ts-tag ts-tag--warn">视配方而异</span> 对溶剂的耐受性取决于配方 |
| 耐热性 | ~65–70 °C |
| 耐冲击性 | 极好（受冲击不会断裂） |
| 耐紫外线 | 好 |
| 喷嘴温度 | 200–250 °C |
| 热床温度 | 35–40 °C |
| 干燥 | 75 °C · 8 小时 |
| 密度 | 1.21 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 打印起来几乎像 PETG · Bowden 通常也可以 |
| 示例 | 车轮、柔性铰链、减振件 |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `ABS` · id 20562 |
| 概述 | 历史悠久、耐热。打印时会释放烟气（VOC）。 |
| 强度 /10 | 8 |
| 耐化学性 | <span class="ts-tag ts-tag--danger">较差</span> 丙酮——会溶解它（蒸汽抛光的原理）、酯类<br/><span class="ts-tag ts-tag--ok">良好</span> 油类、稀碱 |
| 耐热性 | ~95–100 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 差 |
| 喷嘴温度 | 240–280 °C |
| 热床温度 | 85–90 °C |
| 干燥 | 80 °C · 8 小时 |
| 密度 | 1.04 g/cm³ |
| 封闭腔体 | 必需 |
| 建议 | 关闭风扇 · 空气过滤（VOC） |
| 示例 | 汽车内饰件、外壳、机壳 |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `ASA` · id 12844 |
| 概述 | 类似 ABS，但为户外（紫外线、气候）而生。 |
| 强度 /10 | 8（与 ABS 相同） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 雨水、盐、醇类<br/><span class="ts-tag ts-tag--danger">较差</span> 丙酮、强酸 |
| 耐热性 | ~95–100 °C |
| 耐冲击性 | 极好 |
| 耐紫外线 | 极好 |
| 喷嘴温度 | 240–280 °C |
| 热床温度 | 95–100 °C |
| 干燥 | 80 °C · 8 小时 |
| 密度 | 1.05 g/cm³ |
| 封闭腔体 | 推荐 |
| 建议 | 先干燥耗材 · 风扇调低 |
| 示例 | 户外零件、花园外壳 |

</div>

### PA（尼龙）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| 概述 | 耐摩擦与耐疲劳之王。吸湿性很强。 |
| 强度 /10 | 10 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 丙酮、醇类、烃类（汽油）、碱<br/><span class="ts-tag ts-tag--danger">较差</span> 酸（醋、盐酸）；遇水膨胀 |
| 耐热性 | ~110–115 °C |
| 耐冲击性 | 极好 |
| 耐紫外线 | 一般 |
| 喷嘴温度 | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| 热床温度 | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| 干燥 | PA 85 °C · 12 小时<br/>PA6 85 °C · 12 小时<br/>PA11 80 °C · 12 小时<br/>PA12 85 °C · 12 小时 |
| 密度 | PA 1.52 g/cm³<br/>PA6 1.52 g/cm³<br/>PA11 —<br/>PA12 1.52 g/cm³ |
| 封闭腔体 | 必需 |
| 建议 | 打印前/打印中必须干燥 · Magigoo/PVA 胶 |
| 示例 | 齿轮、耐磨/摩擦件 |

</div>

### PC（聚碳酸酯）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `PC` · id 30458 |
| 概述 | 极高的刚性，耐热、耐冲击。 |
| 强度 /10 | 10 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 稀酸、醇类、润滑脂<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——会减弱/产生银纹<br/><span class="ts-tag ts-tag--danger">较差</span> 强碱（氨水）、热水（水解） |
| 耐热性 | ~115–130 °C |
| 耐冲击性 | 极好（防弹玻璃） |
| 耐紫外线 | 一般（会发黄，但依然坚固） |
| 喷嘴温度 | 260–290 °C |
| 热床温度 | 110–115 °C |
| 干燥 | 85 °C · 8 小时 |
| 密度 | 1.3 g/cm³ |
| 封闭腔体 | 必需 |
| 建议 | 必须干燥 · Magigoo PC 胶 |
| 示例 | 发动机零件、结构件、模具 |

</div>

### PP（聚丙烯）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">技术</span>

| | |
|---|---|
| TigerTag 材料 | `PP` · id 30884 |
| 概述 | 非常轻，几乎化学惰性——但（几乎）没有东西能粘在它上面。 |
| 强度 /10 | 6 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 几乎所有稀酸/稀碱、常见溶剂、油类、燃料 |
| 耐热性 | ~100 °C |
| 耐冲击性 | 极好（反复弯折） |
| 耐紫外线 | 差 |
| 喷嘴温度 | 220–250 °C |
| 热床温度 | 55–60 °C |
| 干燥 | 60 °C · 4 小时 |
| 密度 | 0.9 g/cm³ |
| 封闭腔体 | 推荐 |
| 建议 | 必须使用 PP 胶带（别的都粘不住） · 宽裙边（约 2% 收缩） |
| 示例 | 活动铰链、瓶子、接触食品的零件 |

</div>

## 复合材料（填充型）

### 碳纤维（CF）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">复合材料</span>

| | |
|---|---|
| TigerTag 材料 | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| 概述 | 在 PLA、PETG 或尼龙基材中加入短切碳纤维（10–25%）：更硬、收缩更少、表面哑光。 |
| 强度 /10 | 8（硬而脆） |
| 耐化学性 | <strong>PLA-CF：</strong> <span class="ts-tag ts-tag--ok">良好</span> IPA、油类、冷水 · <span class="ts-tag ts-tag--warn">一般</span> 丙酮 · <span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱<br/><strong>PETG-CF：</strong> <span class="ts-tag ts-tag--ok">良好</span> 水、醇类、稀酸、盐类 · <span class="ts-tag ts-tag--danger">较差</span> 氯化溶剂、浓酮类<br/><strong>PA-CF：</strong> <span class="ts-tag ts-tag--ok">良好</span> 丙酮、醇类、烃类、碱 · <span class="ts-tag ts-tag--danger">较差</span> 酸；遇水膨胀 |
| 耐热性 | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| 耐冲击性 | 低（虽然硬，但很脆） |
| 耐紫外线 | 差到好（取决于基材） |
| 喷嘴温度 | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| 热床温度 | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| 干燥 | PLA-CF 60 °C · 8 小时<br/>PETG-CF 70 °C · 8 小时<br/>PA-CF 85 °C · 12 小时 |
| 密度 | PLA-CF 1.24 g/cm³<br/>PETG-CF 1.27 g/cm³<br/>PA-CF 1.52 g/cm³ |
| 封闭腔体 | PLA-CF/PETG-CF 不需要<br/>PA-CF 必需 |
| 建议 | 推荐 0.6 mm（最小 0.4 mm） · PA-CF：必须使用全金属热端并干燥，比 PLA-CF/PETG-CF 要求更高 |
| 示例 | 无人机、刚性治具、低冲击夹具 |

</div>

### 玻璃纤维（GF）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">复合材料</span>

| | |
|---|---|
| TigerTag 材料 | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>暂无 PLA-GF 条目 |
| 概述 | 在 PLA、PETG 或尼龙基材中加入短切玻璃纤维（10–30%）：比未填充的基材更硬，也比同等的 CF 型号更坚韧（不那么脆）——但不导电，因此不会像 CF 那样屏蔽无线电信号。 |
| 强度 /10 | 7（硬，比 CF 更耐冲击） |
| 耐化学性 | <strong>PLA-GF：</strong> <span class="ts-tag ts-tag--ok">良好</span> IPA、油类、冷水 · <span class="ts-tag ts-tag--warn">一般</span> 丙酮 · <span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱<br/><strong>PETG-GF：</strong> <span class="ts-tag ts-tag--ok">良好</span> 水、醇类、稀酸、盐类 · <span class="ts-tag ts-tag--danger">较差</span> 氯化溶剂、浓酮类<br/><strong>PA-GF：</strong> <span class="ts-tag ts-tag--ok">良好</span> 丙酮、醇类、烃类、碱 · <span class="ts-tag ts-tag--danger">较差</span> 酸；遇水膨胀 |
| 耐热性 | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| 耐冲击性 | 中等（纤维含量相同时比 CF 更坚韧） |
| 耐紫外线 | 差到好（取决于基材） |
| 喷嘴温度 | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| 热床温度 | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| 干燥 | PETG-GF 70 °C · 8 小时<br/>PA-GF 85 °C · 12 小时 |
| 密度 | PETG-GF —<br/>PA-GF 1.52 g/cm³ |
| 封闭腔体 | PLA-GF/PETG-GF 不需要<br/>PA-GF 必需 |
| 建议 | 推荐 0.6 mm（最小 0.4 mm） · PA-GF：必须使用全金属热端并干燥，比 PLA-GF/PETG-GF 要求更高 |
| 示例 | 射频透明外壳（天线、无线电设备）、工具治具、耐冲击支架 |

</div>

### 金属

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">复合材料</span>

| | |
|---|---|
| TigerTag 材料 | `PLA` · id 38219<br/>+ 外观 `Metal` · id 226 |
| 概述 | 在 PLA 基材中加入 5–60% 的金属粉末（青铜、铜、不锈钢等）：金属外观和重量，可抛光。 |
| 强度 /10 | 5（基材脆弱） |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> IPA（几乎不受影响）、油类、冷水<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——长时间接触会减弱，但不会溶解；铜/青铜粉末在空气中可能氧化并生成铜绿<br/><span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱 |
| 耐热性 | ~50–60 °C |
| 耐冲击性 | 低（脆，密度很大所以很重） |
| 耐紫外线 | 差 |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 45–55 °C |
| 干燥 | 50 °C · 8 小时 |
| 密度 | 1.24 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 打磨（220 → 1000 目）后抛光 |
| 示例 | “金属”手办/半身像、沉甸甸的装饰物、奖杯 |

</div>

### 木质

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">复合材料</span>

| | |
|---|---|
| TigerTag 材料 | `PLA Wood` · id 48001 |
| 概述 | 在 PLA 基材中加入木屑颗粒：像真正的木头一样可以打磨、染色和上油。 |
| 强度 /10 | 4 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> IPA（几乎不受影响）、油类、冷水<br/><span class="ts-tag ts-tag--warn">一般</span> 丙酮——长时间接触会减弱，但不会溶解；像真正的木头一样吸湿（会膨胀，可能发霉）<br/><span class="ts-tag ts-tag--danger">较差</span> 浓酸/浓碱 |
| 耐热性 | ~50–55 °C |
| 耐冲击性 | 低 |
| 耐紫外线 | 差（像户外的木头一样发灰） |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 45–55 °C |
| 干燥 | 60 °C · 8 小时 |
| 密度 | 1.28 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 绝不要让它在高温下闲置（会碳化并堵塞喷嘴） |
| 示例 | 装饰、模型、艺术品、相框 |

</div>

## 支撑材料

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">支撑</span>

| | |
|---|---|
| TigerTag 材料 | `PVA` · id 9483 |
| 概述 | 水溶性支撑材料，与 PLA 兼容。 |
| 强度 /10 | 4 |
| 耐化学性 | <span class="ts-tag ts-tag--danger">较差</span> 水——立即溶解<br/><span class="ts-tag ts-tag--ok">良好</span> 油类（有时） |
| 耐热性 | ~60–70 °C |
| 耐冲击性 | 差 |
| 耐紫外线 | 差 |
| 喷嘴温度 | 190–240 °C |
| 热床温度 | 30–60 °C |
| 干燥 | 85 °C · 12 小时 |
| 密度 | 1.23 g/cm³ |
| 封闭腔体 | 不需要 |
| 建议 | 保持干燥（吸湿性很强） · 用于双挤出 |
| 示例 | 复杂几何结构的支撑（PLA） |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">支撑</span>

| | |
|---|---|
| TigerTag 材料 | `HIPS` · id 26029 |
| 概述 | 可溶于柠檬烯的支撑材料，与 ABS 兼容。也可以单独使用。 |
| 强度 /10 | 6 |
| 耐化学性 | <span class="ts-tag ts-tag--danger">较差</span> 柠檬烯——可溶（这正是它的用途）<br/><span class="ts-tag ts-tag--ok">良好</span> 碱、醇类 |
| 耐热性 | ~95–100 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 差（会发黄、变脆） |
| 喷嘴温度 | 220–270 °C |
| 热床温度 | 90–95 °C |
| 干燥 | 80 °C · 6 小时 |
| 密度 | 1.03 g/cm³ |
| 封闭腔体 | 必需 |
| 建议 | 关闭风扇 · 在柠檬烯中溶解 |
| 示例 | ABS 打印件的支撑、轻量原型 |

</div>

## 高性能

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">高性能</span>

| | |
|---|---|
| TigerTag 材料 | `PEEK` · id 29815 |
| 概述 | 可打印热塑性塑料的顶点：极端的机械/热性能。 |
| 强度 /10 | 10 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 几乎所有溶剂、稀酸、高压灭菌消毒<br/><span class="ts-tag ts-tag--danger">较差</span> 浓硫酸 |
| 耐热性 | ~250–260 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 一般 |
| 喷嘴温度 | 390–410 °C |
| 热床温度 | 130–145 °C |
| 干燥 | 120 °C · 6 小时 |
| 密度 | 1.32 g/cm³ |
| 封闭腔体 | 必需，加热至 >100 °C |
| 建议 | 必须干燥 |
| 示例 | 医疗植入物、航空航天零件 |

</div>

### PEI（Ultem）

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">高性能</span>

| | |
|---|---|
| TigerTag 材料 | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| 概述 | 防火等级的航空航天树脂，尺寸非常稳定。 |
| 强度 /10 | 9 |
| 耐化学性 | <span class="ts-tag ts-tag--ok">良好</span> 燃料、油类、大多数溶剂<br/><span class="ts-tag ts-tag--danger">较差</span> 氯化溶剂、强碱 |
| 耐热性 | ~170–200 °C |
| 耐冲击性 | 好 |
| 耐紫外线 | 一般 |
| 喷嘴温度 | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| 热床温度 | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| 干燥 | PEI-1010 130 °C · 12 小时<br/>PEI-9085 150 °C · 12 小时 |
| 密度 | PEI-1010 1.27 g/cm³<br/>PEI-9085 — |
| 封闭腔体 | 必需，加热 |
| 建议 | 硼硅玻璃床 · 吸湿性很强：必须干燥 |
| 示例 | 飞机内饰（防火/烟雾等级）、工业治具 |

</div>

强度、耐受性评级和建议均为一般性指导，会因品牌和批次而异。温度、干燥和密度是参考数据库的默认值。

---

**▲ [文档索引](../../README.md)**
