import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import rehypeSlug from 'rehype-slug';
import astroI18next from 'astro-i18next';
import alpinejs from '@astrojs/alpinejs';
import AstroPWA from '@vite-pwa/astro';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ll1025.cn',
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    astroI18next(),
    alpinejs(),
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.ico'],
      registerType: 'autoUpdate',
      manifest: {
        name: '以后的路一起走',
        short_name: '以后的路一起走',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['*.js'],
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\/404$/],
        suppressWarnings: true,
      },
    }),
    icon(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
  experimental: {
    contentCollectionCache: true,
  },
});
