import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {resolve} from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  envDir: './src/env/',
  plugins: [react()],
  /* build: {
    rollupOptions: {
      input: {
        main: resolve()
      }
    },
    cssCodeSplit: false
  } */
  /* css: {
    modules: {
      localsConvention: 'camelCase'
    }
  } */
})