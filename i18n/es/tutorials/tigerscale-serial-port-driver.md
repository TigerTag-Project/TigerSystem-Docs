---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Hacer que aparezca el puerto COM para flashear la TigerScale V3

La TigerScale V3 usa un chip **ESP32-S3**. Para flashear el firmware, tu ordenador necesita ver la placa como un **puerto COM / puerto serie**.

En la mayoría de los ordenadores recientes este puerto aparece **por sí solo** al conectar la placa.
Si no aparece ningún puerto en el flasheador, falta un pequeño controlador: sigue la sección de tu sistema más abajo.

> **Antes de empezar**
> - Usa un auténtico **cable USB de datos** (algunos cables solo cargan y no transportan datos).

## macOS — no hay nada que instalar

No hace falta ningún controlador.
Conecta la placa, abre el flasheador y la placa aparece directamente en la lista. Selecciónala y empieza el flasheo.

Si no aparece: cambia el cable USB y vuelve a intentarlo.

## Windows — instala el controlador (si no aparece ningún puerto COM)

Si el flasheador no muestra ningún puerto, falta el controlador USB de Espressif. Así
se instala, paso a paso:

1. **Descarga la herramienta**: haz clic en este enlace, descarga `idf-env.exe`
 directamente desde el propio servidor de Espressif (por defecto cae en tu carpeta
 **Descargas**):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Abre PowerShell como administrador**: haz clic en el menú **Inicio**, escribe
 `powershell`, haz clic derecho en **Windows PowerShell** y elige **Ejecutar como
 administrador**.
3. **Copia esta única línea, pégala en PowerShell y pulsa Intro:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > ¿Guardaste el archivo en otro sitio que no sea Descargas? Sustituye solo
 > `$env:USERPROFILE\Downloads` por esa carpeta, por ejemplo
 > `C:\Users\tunombre\Desktop`. El resto de la línea sigue igual.

4. Espera a que termine (unos segundos).
5. **Desconecta la placa y vuelve a conectarla.**
6. Vuelve a abrir el flasheador: el puerto (p. ej. `USB JTAG/serial debug unit (COM3)`) debería aparecer ahora.

> Descargar tú mismo la herramienta, en lugar de pegar un comando de una línea que
> descarga y ejecuta un ejecutable con derechos de administrador, te permite ver
> qué vas a ejecutar y de dónde viene. Es un clic más.

✓ Selecciona este puerto y empieza el flasheo.

## Linux — da acceso al puerto serie

El puerto suele aparecer por sí solo (`/dev/ttyACM0`), pero tu usuario necesita permiso para acceder a él.

1. Abre un **terminal**.
2. Añádete al grupo que gestiona los puertos serie:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Cierra sesión y vuelve a iniciarla** (o reinicia) para que surta efecto.
4. Vuelve a conectar la placa y reabre el flasheador.

> Consejo: si usas el flasheador **en un navegador** (Web Serial), usa **Google Chrome** o **Microsoft Edge**; Firefox no admite esta función.

## Sigue sin funcionar

- **Cambia el cable USB** (problema n.º 1: un cable «solo carga»).
- Prueba **otro puerto USB** del ordenador (preferiblemente uno directo, no un concentrador).
- En Windows, abre el **Administrador de dispositivos**: si ves un dispositivo con una exclamación amarilla, falta el controlador → repite la sección de Windows de arriba.
- Para forzar el modo de flasheo: mantén pulsado el botón **BOOT**, pulsa **RESET** una vez y suelta **BOOT**; luego vuelve a intentarlo.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice de la documentación](../../README.md)**
