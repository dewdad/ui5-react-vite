/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import vitePluginImp from 'vite-plugin-imp'
// import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // Unocss(),

    react(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        { 'usehooks-ts': ['useCounter', 'useDarkMode'] },
      ],
      dts: true,
    }),
    vitePluginImp(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
  server: {
    https: false,
    proxy: {
      /**
       * When we use proxy API requests, we can get data from an external website that throws an error by default (if we don't use a proxy)
       * https://localhost:3000/api/**  ->  https://jsonplaceholder.typicode.com/**
       *
       * @example
       * 	https://localhost:3000/api/todos/1  ->  https://jsonplaceholder.typicode.com/todos/1
       **/
      '/api/': {
        target: 'http://services.odata.org/V4/TripPinService/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api-bauth/': {
        target: 'http://127.0.0.1:4004/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-bauth/, ''),
        configure: (proxy, options) => {
          // proxy will be an instance of (https://www.npmjs.com/package/http-proxy)
          const username = 'user@users.com';
          const password = 'bestpwd123';
          options.auth = `${username}:${password}`;
        }
      },
      '/v1/': { // for the json-server todo mock server triggered by npm:start:mock-server
        target: 'http://localhost:3001/v1/',
        changeOrigin: true,
      }
    },
  },
})
