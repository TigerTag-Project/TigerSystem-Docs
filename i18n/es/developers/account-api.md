---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# API de cuenta e integración de terceros

## El contrato

Las aplicaciones de terceros se conectan al backend de TigerSystem (Firebase a
secas) con el **patrón estándar de Firebase**:

1. Obtén la configuración pública del SDK:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Autentica la **propia cuenta TigerTag del usuario** (que la configuración sea
 pública es intencionado: la seguridad se aplica en el servidor mediante las reglas de Firestore).
4. Lee y escribe los datos de ese usuario dentro de la superficie documentada.

## Documentación de referencia

El contrato de integración completo está en
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Documento | Contenido |
|---|---|
| `docs/01-firebase-config.md` | Configuración del proyecto y conexión |
| `docs/02-authentication.md` | Flujos de autenticación |
| `docs/03-data-model.md` | Colecciones y campos de Firestore (la referencia del modelo de datos) |
| `docs/04-friend-system.md` | Códigos de descubrimiento, solicitudes, inventarios compartidos |
| `docs/05-rate-limiting.md` | Límites de uso razonable |
| `examples/` | CLI de Python, ESP32/Arduino, Home Assistant, puente con Spoolman |

## Reglas de seguridad: qué esperar

- `users/{uid}/**` es solo del propietario por defecto.
- Las escrituras entre usuarios exigen siempre una **relación previa** (por
 ejemplo, una amistad aceptada): no hay rutas de escritura abiertas.
- Algunas colecciones tienen **campos en lista blanca**: se rechazan las
 escrituras que incluyan campos no listados.
- Los campos solo para administradores (roles, indicadores de depuración) nunca
 los puede escribir el cliente.

## Endpoints HTTP

`cdn.tigertag.io` está en el **mismo proyecto de Firebase** que las cuentas: aloja
la base de datos de referencia compartida, las imágenes de las bobinas (incluidas
las fotos de producto de TigerTag+) y los endpoints HTTP ligados a la base de
datos de TigerSystem.

| Endpoint | Finalidad |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Comprobación de estado |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Enviar el peso de una bobina por UID del chip (lo usan los dispositivos tipo báscula) |

> **TODO:** catálogo completo de la API HTTP (modelo de autenticación, formato de
> errores): se documentará en el repositorio de integración y se resumirá aquí.

---

**◀ Anterior:** [SDK](./sdks.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [Preguntas frecuentes](../faq/README.md)

**Véase también:** [Inventario y sincronización en la nube](../concepts/inventory-and-cloud-sync.md), [Arquitectura](../architecture/overview.md)
