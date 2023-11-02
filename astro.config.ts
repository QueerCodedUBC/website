import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // site: "https://queercoded.ca/",
  site: "https://QueerCodedUBC.github.io",
  integrations: [vue(), mdx()],
});
