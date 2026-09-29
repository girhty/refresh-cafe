import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/refresh-cafe/',
  output: 'static',
  integrations: [tailwind()],
});