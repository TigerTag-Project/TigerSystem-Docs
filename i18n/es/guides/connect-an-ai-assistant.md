---
sourceHash: ce7797639f045c9154227cdd8686b647e174f7ddf43143ca72b59c143690f412
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Conecta un asistente de IA a tu cuenta

Pregúntale a Claude o a ChatGPT «¿cuánto PETG me queda?» y obtén la respuesta de
tu propio inventario. El conector TigerSystem.io permite que un asistente de IA
lea tu cuenta de TigerSystem y, si lo permites, haga cambios en ella. Es la misma idea que el servidor local
de Tiger Studio, pero alojado: funciona desde la web, desde un teléfono y sin que
Studio esté en marcha.

**La dirección del conector:**

```
https://mcp.tigersystem.io/mcp
```

Habla MCP (Model Context Protocol), el estándar abierto que usan los asistentes
para llegar a herramientas externas. Cualquier asistente que admita servidores MCP
remotos con OAuth puede usarlo.

**Para miembros de la TigerSquad.** El conector, lectura incluida, es una ventaja
de la [TigerSquad](../tigersquad.md), y unirse es gratis. Fuera de la TigerSquad, el
asistente responde que es una ventaja TigerSquad; el acceso vuelve en cuanto te
unes.

## Qué puede leer el asistente

- tus bobinas: marca, material, colores, peso restante, temperaturas y dónde se
  guarda cada una;
- tus racks, tus listas de deseos y tu historial de existencias;
- tus impresoras y tus TigerScale, **nunca sus códigos de acceso ni sus contraseñas**;
- lo que tus amigos comparten contigo (sus bobinas, racks y listas de deseos).

Solo lee, salvo que le des lectura y escritura (ver más abajo). Lee como
tú, bajo las mismas reglas de acceso que las aplicaciones, así que nunca puede ver
otra cuenta. Las credenciales (códigos de acceso de las impresoras, inicios de
sesión en la nube, tu clave privada, tu correo electrónico) no se devuelven jamás,
pida lo que pida.

## Solo lectura, o lectura y escritura

Cuando conectas un asistente, la página de tigersystem.io pide su acceso:
**Solo lectura** (por defecto) o **Lectura y escritura**. Para cambiarlo
después: **tigersystem.io → tu cuenta → Datos → Asistentes conectados**, o en
Tiger Studio, **Gestionar accesos**. Tras pasar a lectura y escritura, actualiza
o vuelve a conectar el conector en el asistente para que vea sus nuevas
herramientas.

Con lectura y escritura, el asistente puede:

- cambiar el peso, la nota, el TD y las etiquetas de una bobina, y guardarla en un rack;
- cambiar el precio, el enlace de compra, el stock mínimo, el SKU / EAN y los enlaces de un producto;
- añadir bobinas desde el catálogo;
- crear un rack, y cambiar el nombre de uno;
- listar los cambios que hizo, y deshacer cualquiera de ellos.

Nunca borra nada: una bobina acabada pasa a 0 g. Cada cambio se guarda 30 días
en un historial y se puede deshacer. La nota y el TD también se escriben en el
chip, así que la bobina pide después reescribir su chip.

Límites: 20 bobinas por petición; por día (UTC), 100 bobinas nuevas, 5 racks
nuevos y 500 cambios en total, contando juntos el asistente de Tiger Studio y los
asistentes en línea, incluidos los cambios deshechos.

## Claude (web, escritorio, móvil)

1. **Ajustes → Conectores → Añadir conector personalizado.**
2. Llámalo `TigerSystem.io`, pega la dirección de arriba, deja vacíos los campos
   avanzados de OAuth y añádelo.
3. Haz clic en **Conectar**. Llegas a tigersystem.io: inicia sesión, comprueba que
   la página dice que las respuestas van a claude.ai y haz clic en **Permitir**.
4. En una conversación, activa el conector TigerSystem.io desde el menú de
   herramientas y haz tu pregunta.

## ChatGPT

Los conectores personalizados necesitan el **modo desarrollador** (un plan de
pago; en los planes Business, lo activa un administrador).

1. **Ajustes → Apps y conectores → Ajustes avanzados → Modo desarrollador**
   activado.
2. **Crea** un conector: nombre `TigerSystem.io`, la dirección de arriba,
   autenticación **OAuth**, sin ID de cliente ni secreto.
3. Inicia sesión en tigersystem.io y haz clic en **Permitir**.
4. En un chat nuevo, activa el conector y pregunta.

## Grok

Los conectores personalizados necesitan un **plan de pago de Grok**.

1. Abre **grok.com/connectors → New Connector → Custom**.
2. Llámalo `TigerSystem.io` y pega la dirección de arriba.
3. Inicia sesión en tigersystem.io y haz clic en **Permitir**.
4. En una conversación, activa el conector TigerSystem.io y pregunta.

## Le Chat (Mistral)

Los conectores personalizados los añade un **administrador**; en una cuenta
personal, ese eres tú.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Llámalo `TigerSystem.io` y pega la dirección de arriba; Le Chat detecta por sí
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
