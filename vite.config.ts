import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            if (id.includes('react-window')) {
              return 'vendor_react-window';
            }

            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [react() /* VitePWA(PWAConfig) */],
});
