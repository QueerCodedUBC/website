import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // site: "https://queercoded.ca/",
  site: process.env.URL,
  integrations: [vue(), mdx()],
});
