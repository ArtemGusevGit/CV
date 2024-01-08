import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RandomCV/',
  plugins: [
    vue(),
    svgLoader(),
  ],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "@/assets/styles/vars.scss"; @import "@/assets/styles/breakpoints.scss";` ,
        },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
