import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 8001,
    proxy: {
      // '/api': {
      //   target: 'http://192.168.1.101/oa',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     console.log(path.replace(/^\/dev-api/, ''))
      //     return path.replace(/^\/dev-api/, '')
      //   }
      // }
    },
    watch: { ignored: ['**/dist/**'] }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueJsx(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
