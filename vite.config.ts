import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueNestedSfc from 'vite-plugin-vue-nested-sfc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueNestedSfc()],
})
