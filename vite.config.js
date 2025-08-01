import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'https://react-web-jobs.onrender.com/jobs',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
