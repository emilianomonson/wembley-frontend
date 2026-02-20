import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // ¡ESTA ES LA LÍNEA MÁGICA QUE ENCIENDE EL SSR!
  output: 'server',

  integrations: [tailwind()],
  adapter: vercel(),
});