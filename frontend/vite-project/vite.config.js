import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/games": "http://localhost:5080/",
      "/about": "http://localhost:5080/",
    },
  },
})