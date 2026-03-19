import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://kauacavalcante.vercel.app',
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()]
});
