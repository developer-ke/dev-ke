
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],

  // Local development uses /; GitHub Pages uses /dev-ke/
  base: command === 'serve' ? '/' : '/dev-ke/',

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    sourcemap: true
  }
}))
