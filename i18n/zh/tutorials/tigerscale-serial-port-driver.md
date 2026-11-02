---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# 让 COM 端口出现，以便烧录 TigerScale V3

TigerScale V3 使用 **ESP32-S3** 芯片。要烧录固件，你的电脑需要把这块板子识别为一个 **COM 端口 / 串口**。

在大多数较新的电脑上，插上板子时这个端口会**自动出现**。
如果烧录工具里没有出现任何端口，说明缺少一个小驱动：请按下面对应你系统的部分操作。

> **开始之前**
> - 请使用真正的 **USB 数据线**（有些线只能充电，不能传输数据）。

## macOS——无需安装任何东西

不需要驱动。
插上板子，打开烧录工具，板子会直接出现在列表中。选中它并开始烧录。

如果没有出现：换一根 USB 线再试。

## Windows——安装驱动（如果没有出现 COM 端口）

如果烧录工具里没有显示端口，说明缺少 Espressif USB 驱动。下面是逐步安装的方法：

1. **下载工具**——点击这个链接，它会直接从 Espressif 自己的服务器下载 `idf-env.exe`
 （默认保存在你的**下载**文件夹）：
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **以管理员身份打开 PowerShell**——点击**开始**菜单，输入
 `powershell`，右键点击 **Windows PowerShell**，选择**以管理员身份运行**。
3. **复制下面这一行，粘贴到 PowerShell 中，然后按回车：**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > 文件保存在了下载文件夹之外的地方？只需把
 > `$env:USERPROFILE\Downloads` 替换成那个文件夹——例如
 > `C:\Users\yourname\Desktop`。这一行的其余部分保持不变。

4. 等待完成（几秒钟）。
5. **拔下板子再重新插上。**
6. 重新打开烧录工具：端口（例如 `USB JTAG/serial debug unit (COM3)`）现在应该出现了。

> 自己下载工具，而不是粘贴一条会获取并以管理员权限运行可执行文件的单行命令，
> 意味着你能看到自己将要运行的是什么、它来自哪里。这只多了一次点击。

✓ 选中这个端口并开始烧录。

## Linux——授予串口访问权限

端口通常会自动出现（`/dev/ttyACM0`），但你的用户需要获得访问它的权限。

1. 打开**终端**。
2. 把自己加入管理串口的用户组：

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **注销并重新登录**（或重启）使其生效。
4. 重新插上板子，再次打开烧录工具。

> 提示：如果你在**浏览器中**使用烧录工具（Web Serial），请使用 **Google Chrome** 或 **Microsoft Edge**；Firefox 不支持此功能。

## 仍然不行

- **换一根 USB 线**（头号问题：“只能充电”的线）。
- 试试电脑上的**另一个 USB 端口**（最好是直连端口，而不是集线器）。
- 在 Windows 上，打开**设备管理器**：如果看到带黄色感叹号的设备，说明缺少驱动 → 重做上面的 Windows 部分。
- 强制进入烧录模式：按住 **BOOT** 按钮，按一下 **RESET**，然后松开 **BOOT**，再试一次。

---

**◀ 上一页：** [TigerScale](../products/tigerscale.md) · **▲ [文档索引](../../README.md)**
