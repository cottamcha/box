import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://box-interactive.vercel.app",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
