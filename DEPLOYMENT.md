# Deploying the documentation site

The site is static, built from this repository, and hosted on Vercel at
`wiki.tigersystem.io`. Nothing below has been executed — this branch prepares
the deployment, it does not perform it.

> `tigersystem.io` itself is TigerHub, the ecosystem's web home. The wiki lives
> on the `wiki.` subdomain so the two never collide.

## 1. Create the Vercel project

1. Vercel → **Add New… → Project** → import `TigerTag-Project/TigerSystem-Docs`.
2. Vercel detects Astro. Confirm the settings; nothing needs overriding:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Install command | `pnpm install` |
   | Build command | `pnpm build` |
   | Output directory | `dist` |
   | Node version | 22.x |

   `pnpm build` runs `scripts/sync-docs.mjs` first (a `prebuild` hook), which
   generates `src/content/docs/` and `public/` from `docs/` and `i18n/`. Both
   are gitignored, so a clean clone is the only supported build input.

3. Deploy the branch once to check it, then set **Production Branch** to `main`.

## 2. Point the domain

In the Vercel project → **Settings → Domains**, add `wiki.tigersystem.io`, then
create the record Vercel shows at the DNS provider for `tigersystem.io`:

```
wiki   CNAME   cname.vercel-dns.com.
```

Vercel issues the certificate once the record resolves. Leave the apex and `www`
alone — they belong to TigerHub.

## 3. Environment variables

Set in **Settings → Environment Variables**, Production and Preview:

| Variable | Needed for | Notes |
|---|---|---|
| `PUBLIC_GISCUS_CATEGORY_ID` | Comments | Until it is set, the comment section simply does not render. See below. |
| `PUBLIC_GISCUS_CATEGORY` | Comments | Optional, defaults to `Docs`. |

`ANTHROPIC_API_KEY` is **not** a deploy variable — translations are generated
locally and committed. Do not add it to Vercel.

## 4. Turn on comments (Giscus)

Discussions are currently **disabled** on the repository, so this step cannot be
completed from the code alone:

1. Repository **Settings → General → Features** → tick **Discussions**.
2. Create a Discussions category for the wiki — giscus recommends an
   announcement-only one — named `Docs` (or set `PUBLIC_GISCUS_CATEGORY` to
   whatever you name it).
3. Install the [giscus GitHub app](https://github.com/apps/giscus) on the
   repository.
4. Open [giscus.app](https://giscus.app), enter `TigerTag-Project/TigerSystem-Docs`,
   pick the category, and copy the **`data-category-id`** it generates.
5. Put that value in `PUBLIC_GISCUS_CATEGORY_ID` and redeploy.

The repository id (`R_kgDOTdiZjQ`) is already the default in
`src/components/Footer.astro`; only the category id is unknown until the
category exists.

## 5. Redirects already configured

`vercel.json` handles the URL shapes that circulate today, so links people
already have keep working:

| From | To |
|---|---|
| `/docs/products/tigertag.md` | `/products/tigertag/` |
| `/products/tigertag.md` | `/products/tigertag/` |
| `/products/README.md` | `/products/` |

If the GitHub `blob` URLs turn out to be what people actually share, add a
rewrite for `/blob/main/docs/:path*` in the same file.

## What CI already guarantees

`.github/workflows/docs.yml` runs on every pull request:

- `pnpm check:docs` — every internal link resolves, every page in `docs/` is
  reachable from the curated navigation, and no navigation entry points at a
  page that no longer exists. **Fails the build.**
- `pnpm build` — including `starlight-links-validator` over the rendered HTML.
- `pnpm translate:check` — lists French pages whose English source has moved on.
  **Reports only, never fails.**
