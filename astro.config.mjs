import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import compressor from "astro-compressor";

import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), partytown(), compressor()],
  output: "server",
  adapter: vercel(),
  server: {
    headers: {
      'Expires': new Date(Date.now() + 31536000 * 1000).toUTCString(),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
});
