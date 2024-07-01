import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // 开发时 解决这些commonjs包转成esm包
    include: [
      "@jiaminghi/c-render",
      "@jiaminghi/c-render/lib/plugin/util",
      "@jiaminghi/charts/lib/util/index",
      "@jiaminghi/charts/lib/util",
      "@jiaminghi/charts/lib/extend/index",
      "@jiaminghi/charts",
      "@jiaminghi/color",
    ],
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
