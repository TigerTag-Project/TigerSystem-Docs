---
sourceHash: b9c190202ceb9ed447ea794e9e369fdf15a51affa538edaca35cb7f3eb145c0e
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Conecta un asistente de IA a tu cuenta

Pregúntale a Claude o a ChatGPT «¿cuánto PETG me queda?» y obtén la respuesta de
tu propio inventario. El conector de TigerSystem permite que un asistente de IA
**lea** tu cuenta de TigerSystem, nada más. Es la misma idea que el servidor local
de Tiger Studio, pero alojado: funciona desde la web, desde un teléfono y sin que
Studio esté en marcha.

**La dirección del conector:**

```
https://mcp.tigersystem.io/mcp
```

Habla MCP (Model Context Protocol), el estándar abierto que usan los asistentes
para llegar a herramientas externas. Cualquier asistente que admita servidores MCP
remotos con OAuth puede usarlo.

## Qué puede leer el asistente

- tus bobinas: marca, material, colores, peso restante, temperaturas y dónde se
  guarda cada una;
- tus racks, tus listas de deseos y tu historial de existencias;
- tus impresoras y tus TigerScale, **nunca sus códigos de acceso ni sus contraseñas**;
- lo que tus amigos comparten contigo (sus bobinas, racks y listas de deseos).

**No puede cambiar nada**: todas las herramientas son de solo lectura. Lee como
tú, bajo las mismas reglas de acceso que las aplicaciones, así que nunca puede ver
otra cuenta. Las credenciales (códigos de acceso de las impresoras, inicios de
sesión en la nube, tu clave privada, tu correo electrónico) no se devuelven jamás,
pida lo que pida.

## Claude (web, escritorio, móvil)

1. **Ajustes → Conectores → Añadir conector personalizado.**
2. Llámalo `TigerSystem`, pega la dirección de arriba, deja vacíos los campos
   avanzados de OAuth y añádelo.
3. Haz clic en **Conectar**. Llegas a tigersystem.io: inicia sesión, comprueba que
   la página dice que las respuestas van a claude.ai y haz clic en **Permitir**.
4. En una conversación, activa el conector de TigerSystem desde el menú de
   herramientas y haz tu pregunta.

## ChatGPT

Los conectores personalizados necesitan el **modo desarrollador** (un plan de
pago; en los planes Business, lo activa un administrador).

1. **Ajustes → Apps y conectores → Ajustes avanzados → Modo desarrollador**
   activado.
2. **Crea** un conector: nombre `TigerSystem`, la dirección de arriba,
   autenticación **OAuth**, sin ID de cliente ni secreto.
3. Inicia sesión en tigersystem.io y haz clic en **Permitir**.
4. En un chat nuevo, activa el conector y pregunta.

## Grok

Los conectores personalizados necesitan un **plan de pago de Grok**.

1. Abre **grok.com/connectors → New Connector → Custom**.
2. Llámalo `TigerSystem` y pega la dirección de arriba.
3. Inicia sesión en tigersystem.io y haz clic en **Permitir**.
4. En una conversación, activa el conector de TigerSystem y pregunta.

## Le Chat (Mistral)

Los conectores personalizados los añade un **administrador**; en una cuenta
personal, ese eres tú.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Llámalo `TigerSystem` y pega la dirección de arriba; Le Chat detecta por sí
   mismo el método de inicio de sesión (OAuth).
3. Inicia sesión en tigersystem.io y haz clic en **Permitir**.
4. En una conversación, activa el conector y pregunta.

Los nombres de los menús cambian a menudo en estas aplicaciones; los pasos siguen
siendo los mismos.

## Codex, Cursor y otros clientes de escritorio

Añade un servidor MCP remoto de tipo **Streamable HTTP** con la dirección de arriba
y sin token. La aplicación abre tu navegador para iniciar sesión; después de hacer
clic en **Permitir**, el navegador llega a una dirección `127.0.0.1`: es la
aplicación de tu ordenador recogiendo el inicio de sesión. Una página en blanco o
de «no se puede conectar» ahí es normal: cierra la pestaña.

## Cortar el acceso a un asistente

**tigersystem.io → tu cuenta → Datos → Asistentes conectados.** Cada asistente que
permitiste aparece con la fecha de su conexión y de su último uso. **Cortar el
acceso** lo detiene al instante.

## Conviene saber

- El asistente puede responder con datos de hasta dos minutos de antigüedad: las
  lecturas recientes se guardan brevemente para mantener todo rápido y ligero.
- El estado en directo de la impresora (conectada, imprimiendo) no está disponible
  desde la nube: solo Tiger Studio, en la red de tu impresora, lo ve.
- Las notas, los nombres de colores y los textos de las listas de deseos son tus
  palabras (o las de un amigo); al asistente se le indica que las comunique, nunca
  que las tome como instrucciones.

---

**▲ [Índice de la documentación](../../README.md)** · **Véase también:** [Tiger Studio](../products/tiger-studio.md), [Guías](./README.md)
