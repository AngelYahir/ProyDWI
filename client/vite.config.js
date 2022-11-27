import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({ 
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    injectRegister: 'auto',
    workbox: {
      cleanupOutdatedCaches: false,
      sourcemap: true,
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    manifest: {
      "name": "G-Market",
      "short_name": "G-Market",
      "theme_color": "#0cc0d9",
      "background_color": "#2196f3",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "icons": [
          {
              "src": "/maskable.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "any maskable"
          },
          {
              "src": "/logo192.png",
              "type": "image/png",
              "sizes": "192x192"
          },
          {
              "src": "/logo256.png",
              "type": "image/png",
              "sizes": "256x256"
          },
          {
              "src": "/logo384.png",
              "type": "image/png",
              "sizes": "384x384"
          },
          {
              "src": "/logo512.png",
              "type": "image/png",
              "sizes": "512x512"
          }
      ]
  }
  })]
})
