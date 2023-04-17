import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import compressor from "astro-compressor";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), partytown(), compressor()],
  output: "server",
  adapter: vercel()
});