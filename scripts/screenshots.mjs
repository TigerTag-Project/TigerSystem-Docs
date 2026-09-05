#!/usr/bin/env node
/**
 * Visual QA — render a fixed set of pages in both themes and both form factors.
 *
 * Not part of the build, and deliberately not a project dependency: Playwright
 * would add a browser download to every install, including the deploy. Run it
 * from a checkout that has it:
 *
 *   pnpm add -D playwright && pnpm exec playwright install chromium
 *   pnpm build && pnpm preview &          # or: pnpm dev
 *   node scripts/screenshots.mjs [baseUrl] [outDir]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:4321';
const OUT = process.argv[3] ?? '.screenshots';

/** The pages worth looking at every time something visual changes. */
const PAGES = [
  ['home', '/'],
  ['products-index', '/products/'],
  ['compatibility-index', '/compatibility/'],
  ['ttag-format', '/developers/ttag-format/'],
  ['architecture-overview', '/architecture/overview/'],
  ['fr-tigertag', '/fr/products/tigertag/'],
];

const VIEWPORTS = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
];

const THEMES = ['dark', 'light'];

const browser = await chromium.launch();
await fs.mkdir(OUT, { recursive: true });

for (const [viewportName, viewport] of VIEWPORTS) {
  for (const theme of THEMES) {
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: 2,
      colorScheme: theme,
      isMobile: viewportName === 'mobile',
      hasTouch: viewportName === 'mobile',
    });
    // Starlight persists the reader's theme choice in localStorage.
    await context.addInitScript(
      (value) => window.localStorage.setItem('starlight-theme', value),
      theme,
    );

    const page = await context.newPage();
    for (const [name, route] of PAGES) {
      await page.goto(new URL(route, BASE).href, { waitUntil: 'networkidle' });
      // Mermaid draws client-side; give it the frame it needs.
      await page
        .waitForFunction(
          () =>
            document.querySelectorAll('pre.mermaid').length === 0 ||
            document.querySelectorAll('pre.mermaid[data-processed="true"]').length > 0,
          { timeout: 8000 },
        )
        .catch(() => console.warn(`  mermaid did not settle on ${route}`));
      const file = path.join(OUT, `${name}--${viewportName}--${theme}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(file);
    }
    await context.close();
  }
}

await browser.close();
