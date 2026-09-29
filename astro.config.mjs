import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/refresh-cafe/',
  site: 'https://refresh-cafe.example',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })]
});