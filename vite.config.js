import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

<<<<<<< HEAD
export default defineConfig({
=======
// https://vite.dev/config/
export default defineConfig({
  // 🔧 Variáveis de ambiente (para rodar build sem erro)
>>>>>>> 23e8dc8858d0b3c016d9a4980ed3885ec0585984
  define: {
    'process.env.VITE_API_URL': JSON.stringify(
      process.env.VITE_API_URL || 'http://localhost:5175'
    ),
  },

<<<<<<< HEAD
=======
  // 🧩 Plugins
>>>>>>> 23e8dc8858d0b3c016d9a4980ed3885ec0585984
  plugins: [
    react(),
    tailwindcss()
  ],

<<<<<<< HEAD
  // 🚀 Base correta para AWS Amplify (RAIZ DO DOMÍNIO)
  base: '/',

=======
  // 📦 Caminho correto para o GitHub Pages
  // ⚠️ TEM que ser exatamente o nome do repositório:
  // https://metiieus.github.io/Ecoar/
  base: process.env.NODE_ENV === 'production' ? '/Ecoar/' : '/',

  // 🧭 Alias
>>>>>>> 23e8dc8858d0b3c016d9a4980ed3885ec0585984
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

<<<<<<< HEAD
=======
  // 🌐 Dev server
>>>>>>> 23e8dc8858d0b3c016d9a4980ed3885ec0585984
  server: {
    allowedHosts: ['*'],
    proxy: {
      '/api': {
        target: 'https://tb8calt97j.execute-api.sa-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/dev'),
      },
    },
  },

<<<<<<< HEAD
=======
  // ⚙️ Build
>>>>>>> 23e8dc8858d0b3c016d9a4980ed3885ec0585984
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
