import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/assets/components'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@translations': path.resolve(__dirname, './src/assets/translations')
    }
  },
  server: {
    port: 3001,
    host: true,
    open: false,
    cors: true,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'three'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  }
})
