---
sourceHash: cb19118f5e46d0c5e473f54203faefcd68e0d63d44df65395c86a415d8cfa58d
sourcePath: docs/products/tigerhub.md
---

# TigerHub

## Propósito

**TigerHub es la casa del ecosistema en la web**: el sitio
**[tigersystem.io](https://tigersystem.io)**. Presenta el entorno de pruebas de
TigerSystem y lo que hace posible el protocolo abierto TigerTag, y aloja el
**lado social** de ese entorno: compartir una lista de deseos, invitar a alguien a
ser amigo, publicar una lista de solo lectura que cualquiera pueda abrir en un navegador.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — la página web de TigerSystem, con la aplicación móvil escaneando delante de Tiger Studio" />

## Dónde encaja

```mermaid
flowchart TB
  ST["Tiger Studio"] & CO["Connect"] <--> FB[("Your TigerSystem account<br/>(Firebase — one shared database)")]
  FB -- "published lists · invites" --> HUB["TigerHub<br/>tigersystem.io"]
  HUB --> VIS["Anyone with the link<br/>plain browser, no account"]
```

## Funciones — todas disponibles hoy

- **Escaparate del ecosistema** — la página de inicio cuenta toda la historia: cómo
 funciona, las seis marcas de impresoras, los componentes y los tres niveles
 (TigerData — seguimiento solo por software · TigerTag — el chip sin conexión ·
 TigerTag+ — autenticidad verificada).
- **Tu cuenta en la web** (`/account`) — inicia sesión en tu cuenta de TigerSystem
 desde un navegador.
- **Listas de deseos** — públicas y solo para amigos, ambas desplegadas.
- **Códigos de amigo e invitaciones** — añadíos como amigos desde la web.
- **Enlaces de lista pública** — comparte un inventario o una lista de deseos de solo
 lectura como `https://tigersystem.io/list/<token>`; quien la vea no necesita
 aplicación ni cuenta.
- **Catálogo de materiales y base de datos de referencia** (`/materials`, `/database`) —
 explora el catálogo compartido con el que se resuelven todas las aplicaciones.
- **Impresoras y funciones** (`/printers`, `/features`) — qué funciona con qué.
- **Modelos 3D** (`/models`) — modelos imprimibles (TigerPOD y compañía).
- **Para fabricantes, desarrolladores y prensa** (`/manufacturers`, `/developers`,
 `/press`) — la historia B2B, indicaciones de integración, recursos de medios.
- **Merchandising** (`/goodies`) — la gorra y el polo oficiales. Comprar uno es una de
 las formas de [apoyar el proyecto](../support.md).

## TigerHub no es la base de datos

Las cuentas de usuario y los datos de todas las aplicaciones residen en **Firebase
a secas** (Auth + Firestore), una infraestructura deliberadamente sin marca:
**una única base de datos compartida, en un único lugar**, para que Tiger Studio,
Tiger NFC Connect, TigerScale y la cuenta de TigerSystem interoperen sobre los
mismos datos. TigerHub es la **superficie web** construida encima. Véase
[Inventario y sincronización en la nube](../concepts/inventory-and-cloud-sync.md).

## Interacciones

| Con | Cómo |
|---|---|
| Tiger Studio / Connect | Generar y revocar enlaces para compartir, enviar invitaciones de amistad |
| Firebase (base de datos de cuentas) | Origen de los datos publicados |
| Visitantes | Navegador normal, sin necesidad de cuenta |

---

**◀ Anterior:** [Tiger Studio](./tiger-studio.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [TigerPOD](./tigerpod.md)

**Véase también:** [Inventario y sincronización en la nube](../concepts/inventory-and-cloud-sync.md), [Arquitectura](../architecture/overview.md)
