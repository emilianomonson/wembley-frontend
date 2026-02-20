/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19', // Fondo principal ultra oscuro
          card: '#131A2A', // Fondo para las tarjetas
          cyan: '#00E5FF', // El celeste de tu logo
          magenta: '#B534FF', // El violeta de tu logo
        }
      },
      boxShadow: {
        'brand-cyan': '0 0 15px -3px rgba(0, 229, 255, 0.3)',
        'brand-magenta': '0 0 15px -3px rgba(181, 52, 255, 0.3)',
      }
    },
  },
  plugins: [],
}