// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://arijit-kumar-pandab.github.io',
  base: '/yaml-portfolio',
  vite: {
    ssr: {
      external: ['js-yaml'],
    },
  },
});
