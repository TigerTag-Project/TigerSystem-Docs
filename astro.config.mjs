// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

import { REPO_URL, SITE_URL } from './scripts/lib/docs-config.mjs';
import { sidebar } from './src/sidebar.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },

  integrations: [
    starlight({
      title: 'TigerSystem',
      description:
        'The open NFC identity for 3D-printing filament — the TigerTag protocol, the apps built on it, and how to build your own.',
      favicon: '/assets/logos/tigersystem-app-icon-rounded.svg',

      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/TigerTag-Project' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/3Qv5TSqnJH' },
      ],

      sidebar,

      customCss: ['./src/styles/tigersystem.css'],

      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },

      editLink: { baseUrl: `${REPO_URL}/edit/main/` },
      lastUpdated: true,

      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${SITE_URL}/assets/hero-tigersystem-ecosystem.png` },
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
