import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueNestedSfc from 'vite-plugin-vue-nested-sfc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({ enableObjectSlots: true }), vueNestedSfc()],
})
