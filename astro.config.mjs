import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vercel()],
  output: 'server',
  adapter: vercel(),
});