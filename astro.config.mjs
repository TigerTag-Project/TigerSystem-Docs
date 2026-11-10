// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  REPO_URL,
  SITE_URL,
} from './scripts/lib/docs-config.mjs';
import { sidebar } from './src/sidebar.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },

  // `cloud-api` became `account-api`: it documents the user's ACCOUNT — auth,
  // inventory, friends — and sits next to the product `web-api`, where two
  // pages both called an API needed their titles to say which is which. The old
  // address keeps working: it was linked from the FAQ, the philosophy pages and
  // anywhere outside this repo we cannot edit.
  redirects: {
    '/developers/cloud-api': '/developers/account-api/',
    ...Object.fromEntries(
      LOCALES.filter((code) => code !== DEFAULT_LOCALE).map((code) => [
        `/${code}/developers/cloud-api`,
        `/${code}/developers/account-api/`,
      ]),
    ),
    // The mobile app is Tiger NFC Connect; its page kept the old file name until #13.
    '/products/tigertag-connect': '/products/tiger-nfc-connect/',
    ...Object.fromEntries(
      LOCALES.filter((code) => code !== DEFAULT_LOCALE).map((code) => [
        `/${code}/products/tigertag-connect`,
        `/${code}/products/tiger-nfc-connect/`,
      ]),
    ),
  },

  integrations: [
    starlight({
      title: 'TigerSystem',
      description:
        'The open NFC identity for 3D-printing filament — the TigerTag protocol, the apps built on it, and how to build your own.',
      // The same icon set tigersystem.io serves, so the wiki shows the mark
      // people already have in their tab bar. Copied from that site rather
      // than re-exported, to keep the two identical.
      favicon: '/favicon.ico',

      defaultLocale: 'root',
      // English at the root, then one entry per translated language — the
      // eleven Tiger Studio speaks, listed once in docs-config.
      locales: Object.fromEntries(
        LOCALES.map((code) => [
          code === DEFAULT_LOCALE ? 'root' : code,
          { label: LOCALE_META[code].label, lang: LOCALE_META[code].lang },
        ]),
      ),

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/TigerTag-Project' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/3Qv5TSqnJH' },
      ],

      sidebar,

      customCss: ['./src/styles/tigersystem.css'],

      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },

      editLink: { baseUrl: `${REPO_URL}/edit/main/` },
      lastUpdated: true,

      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${SITE_URL}/assets/hero-tigersystem-ecosystem.png` },
        },
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/icon.png', type: 'image/png', sizes: '512x512' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', href: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
        },
      ],

      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
          // A page with no translation yet is still served in that locale:
          // Starlight falls back to the English content and labels it as such.
          errorOnFallbackPages: false,
          // Files served straight out of public/ (assets, press archives, the
          // swatch playground) are not pages; sync-docs --check validates them.
          exclude: ['/assets/**', '/press/*.zip', '/developers/*.html', '/llms.txt'],
        }),
      ],
    }),
  ],
});
