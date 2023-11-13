import { defineConfig } from 'vite'
import 'dotenv/config';
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'Frontend'),
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:`http://localhost:${process.env.PORT}`,
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
