import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://techgfx.github.io',
  translations: {
    es: '/langs/es.json'
  },
  integrations: [tailwind()]
});
