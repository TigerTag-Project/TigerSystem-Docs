---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK

Dos SDK oficiales se encargan de todas las operaciones con chips TigerTag: leer la
carga útil NTAG de 144 bytes, verificar el formato TigerTag y codificar nuevos
datos de chip.

## JavaScript — `tigertag` (npm)

- Repositorio: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado en npm como **`tigertag`**.
- Lo usa internamente Tiger Studio; se puede usar de forma independiente para
 crear herramientas propias compatibles con TigerTag.

```bash
npm install tigertag
```

## Python

- Repositorio: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado en PyPI como **`tigertag`**, para scripts, herramientas y automatización.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** ejemplos mínimos de código de análisis/codificación para ambos SDK:
> importarlos del README de cada SDK una vez estabilizado, o enlazar directamente.
> No repetir aquí las firmas de la API (riesgo de desfase); el README de cada SDK es la referencia.

## Qué te dan los SDK

| Capacidad | Descripción |
|---|---|
| Analizar | Decodificar un volcado de chip en la identidad del filamento (marca, material, color…) |
| Verificar | Comprobar que la carga útil tiene un formato TigerTag válido |
| Codificar | Construir una nueva carga útil de 144 bytes para escribirla en un chip |

Los datos de referencia (tablas ID → nombre) proceden de la base de datos
compartida; véase [Identidad universal del filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositorios](./repositories.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [API de cuenta](./account-api.md)
