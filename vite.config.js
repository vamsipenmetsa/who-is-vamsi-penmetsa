import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/who-is-vamsi-penmetsa/',  // Updated for GitHub Pages repository name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        links: resolve(__dirname, 'links/index.html'),
      },
    },
  },
  server: {
    open: true
  }
})