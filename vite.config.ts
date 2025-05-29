import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import {resolve} from 'node:path'

// https://vite.dev/config/
// export default defineConfig({
//   envDir: './src/env/',
//   plugins: [react()],
//   /* build: {
//     rollupOptions: {
//       input: {
//         main: resolve()
//       }
//     },
//     cssCodeSplit: false
//   } */
//   /* css: {
//     modules: {
//       localsConvention: 'camelCase'
//     }
//   } */
// })

export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
  const env = loadEnv(mode, `${process.cwd()}/src/env`)
  // console.log('当前 APP_TITLE：', env.VITE_APP_TITLE);
  const envDir = './src/env';
  if(command === 'serve') {
    return {
      // dev specific config
      envDir,
      plugins: [react()],
      define: {
        __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE),
        __APP_TITLE2__: JSON.stringify("http://"),
      }
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      // dev specific config
      envDir,
      plugins: [react()],
      define: {
        __APP_TITLE__: JSON.stringify(env.APP_TITLE),
      }
    }
  }
})