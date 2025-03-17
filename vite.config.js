import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/portfolio-website/",
  build: {
    outDir: 'dist', // Ensure correct output directory
    assetsDir: 'assets', // Ensure assets go into a subdirectory
    emptyOutDir: true, // Clears old files before building
  }
})
