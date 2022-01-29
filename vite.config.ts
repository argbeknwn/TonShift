import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
/* import { VitePWA } from 'vite-plugin-pwa'; */

/* const PWAConfig = {
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  manifest: {
    name: 'Name of your app',
    short_name: 'Short name of your app',
    description: 'Description of your app',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
}; */

const helpers = [
  'react-window',
  'react-i18next',
  'react-router-dom',
  'react-query',
  'i18next',
  'axios',
  'use-resize-observer',
  'idb-keyval',
  'web-vitals',
];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            if (helpers.some(lib => id.includes(lib))) {
              return 'vendor_libs';
            }

            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [react() /* VitePWA(PWAConfig) */],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
