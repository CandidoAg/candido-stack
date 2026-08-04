import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    react(),
    icon(),
  ],
  vite: {
    plugins: [tailwind()],
  },
});