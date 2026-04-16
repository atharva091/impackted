import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.stl'],
  css: {
    transformer: 'postcss',
    minify: 'esbuild', // Use esbuild for minification as it's more stable with Tailwind
  }
})
