import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        svgoConfig: {
          plugins: [
            { name: 'removeStyleElement' },
            { name: 'removeAttrs', params: { attrs: ['class'] } },
          ],
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [".ngrok-free.app"],
  },
})
