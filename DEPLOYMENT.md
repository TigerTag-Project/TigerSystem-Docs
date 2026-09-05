# Deploying the documentation site

The site is static, built from this repository, and hosted on Vercel at
`wiki.tigersystem.io`. Nothing below has been executed — this branch prepares
the deployment, it does not perform it.

> `tigersystem.io` itself is TigerHub, the ecosystem's web home. The wiki lives
> on the `wiki.` subdomain so the two never collide.

## 1. Create the Vercel project

The team is **Tiger-Project (Pro)**, which already hosts `tiger-tag-hub`
(tigersystem.io) and `tiger-tag-manager`. The wiki is a third project on it, so
there is no plan question to settle.

> **Before anything else — import from the right Vercel account.**
>
> Vercel builds the importable repository list from the GitHub identity linked
> to *your Vercel login*, not from whichever GitHub account the browser happens
> to be signed into. Those are two different things here:
>
> | | |
> |---|---|
> | `TigerSystem-Docs` is owned by | the GitHub **user** account `TigerTag-Project` |
> | `benoit@atome3d.com`'s Vercel login is linked to | the GitHub account **Atome3D** |
> | The Vercel GitHub App on `TigerTag-Project` | installed, access to **all repositories** |
>
> So on `vercel.com/new` the scope selector offers Atome3D only, searching for
> `TigerSystem` returns nothing, and **Add GitHub Scope → TigerTag-Project
> appears to do nothing**: it confirms an installation that already exists for
> the *browser's* GitHub user, then Vercel looks the repository up under
> Atome3D and still cannot see it. It is not a bug and retrying will not help.
>
> **Import from the team Owner account instead** — `tigertagdb-6014`
> (tigertagdb@gmail.com). That is the account the two existing projects,
> `tiger-tag-hub` and `tiger-tag-manager`, were created from, and both are
> connected to `TigerTag-Project` repositories. Sign in to Vercel as that
> account, import into the same **Tiger-Project** team, and the rest of this
> runbook applies unchanged.
>
> The alternative — relinking `benoit@atome3d.com`'s GitHub sign-in from
> Atome3D to TigerTag-Project, under Account → Authentication — also works, but
> it changes the identity that account signs in with and can disturb its other
> projects. Not worth it for one import.
>
> **Do not** paste the repository URL into the "enter a Git repository URL" box
> at the top of the page as a workaround. That is the *clone* flow: it creates a
> **new private copy** of the repository under Atome3D and deploys that. It
> would split the source of truth in two, which is the one thing this whole
> setup exists to prevent.
>
> Worth separating from today's task: the ecosystem's source of truth lives in a
> **personal GitHub user account**, not an Organization. Moving it to an org
> would retire this whole class of access problem, along with the transfer and
> bus-factor questions that come with a personal account.

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

   The framework is detected from `package.json`, which only exists on
   `feat/docs-site` — importing while `main` is still the old tree shows
   **Other**, so set the preset to **Astro** by hand. Leave the build, output
   and install commands empty; the Astro defaults (`pnpm build` → `dist`) are
   correct, and pnpm is picked up from `pnpm-lock.yaml`.

3. **`main` has no site until `feat/docs-site` is merged.** A production build
   of `main` fails with "no package.json" — expected, not a misconfiguration.

   > **Current state of the project:** branch tracking is temporarily set to
   > **`feat/docs-site`** (Settings → Environments → Production → Branch
   > Tracking) so the site is visible before the merge.
   >
   > **After merging, set it back to `main`.** Leaving it on a feature branch
   > means production follows a branch that will eventually be deleted.

   Note that Vercel only builds a branch it has seen a push on *since the
   project existed*. A branch pushed beforehand shows "No deployments found" —
   the fix is one new commit on it, not a settings change.

## 2. Point the domain — done

`wiki.tigersystem.io` is live on the project, with a Let's Encrypt certificate
issued automatically once the record resolved.

The DNS zone for `tigersystem.io` is hosted at **OVH** (nameservers
`dns200.anycast.me` / `ns200.anycast.me`). One record was added, and nothing
else in the zone was touched — the apex, `www`, `ftp`, MX, SPF and the Google
verification TXT are all as they were:

```
wiki   IN CNAME   5608b18e15dc6bb6.vercel-dns-016.com.
```

That target is the per-project name Vercel now generates; the legacy
`cname.vercel-dns.com` still works but is no longer what the dashboard hands
out. If the domain is ever re-added, read the value from Vercel again rather
than copying the one above.

The apex and `www` belong to TigerHub and were deliberately left alone.

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

`vercel.json` catches the URL shapes people might paste from GitHub, so a
hand-converted link lands on the right page instead of a 404:

| From | To |
|---|---|
| `/docs/products/tigertag.md` | `/products/tigertag/` |
| `/products/tigertag.md` | `/products/tigertag/` |
| `/products/README.md` | `/products/` |

These were verified on the first deployment. Note that Vercel applies its
`trailingSlash` normalisation *before* the redirect rules, so a rule written as
`/docs/:path*` never matches `/docs/faq/` — hence `/docs/:path(.*)`, where the
capture swallows the trailing slash too.

To re-check them after any change to `vercel.json`, replacing the host:

```bash
curl -sI https://<preview>/docs/products/tigertag.md | grep -i '^location'
curl -sI https://<preview>/products/tigertag.md      | grep -i '^location'
curl -sI https://<preview>/products/README.md        | grep -i '^location'
```

Each should end at `/products/tigertag/` or `/products/`, in at most two hops.
If a pattern does not match, the fix is in `vercel.json` — these are the only
rules there, and the site works without them.

If the GitHub `blob` URLs turn out to be what people actually share, add a
rewrite for `/blob/main/docs/:path*` in the same file.

## 6. Multilingual signals

Already correct in the build, whatever the URL shape — worth knowing so nobody
tries to "fix" it later:

- every page carries `hreflang` alternates for `en` and `fr`, plus `x-default`
  pointing at the English page;
- every page carries a self-referencing `canonical`;
- `sitemap-index.xml` lists both locales with their alternates.

English is served from the root (`/products/tigertag/`) and French from `/fr/`.
This is a neutral choice for ranking — Google treats a root default and an
`/en/` prefix identically — so it comes down to taste: the root has no redirect
hop on the most-linked URLs, an `/en/` prefix matches what `tigersystem.io`
does. Switching is `defaultLocale` in `astro.config.mjs` plus a redirect from
`/`; it is not worth doing for SEO reasons alone, and it is definitely not worth
migrating a live site for.

## What CI already guarantees

`.github/workflows/docs.yml` runs on every pull request:

- `pnpm check:docs` — every internal link resolves, every page in `docs/` is
  reachable from the curated navigation, and no navigation entry points at a
  page that no longer exists. **Fails the build.**
- `pnpm build` — including `starlight-links-validator` over the rendered HTML.
- `pnpm translate:check` — lists French pages whose English source has moved on.
  **Reports only, never fails.**
