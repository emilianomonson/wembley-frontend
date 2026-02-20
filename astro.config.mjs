import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // ¡ESTA ES LA LÍNEA MÁGICA QUE ENCIENDE EL SSR!
  integrations: [tailwind()],
});