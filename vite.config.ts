import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'
import { viteMockServe } from 'vite-plugin-mock'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServe({
    mockPath: "./src/mock",
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@mock': resolve(__dirname, 'src/mock'),
      '@assets': resolve(__dirname, 'src/assets'),
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  server: {
    // hmr: {
    //   protocol: 'ws',
    //   host: '127.0.0.2'
    // },
    // proxy: {
    //   '/mockApi': {
    //     target: 'http://mymock.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/mockApi/, ''),
    //     configure: (proxy) => {
    //       proxy.on('proxyReq', (proxyReq, req) => {
    //         console.log(`[Proxy] Original URL: ${req.url}`);
    //         console.log(`[Proxy] Target Path: ${proxyReq.path}`);
    //         console.log(`[Proxy] Full Target URL: ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`);
    //       });
    //       proxy.on('proxyRes', (proxyRes, req, res) => {
    //         // proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    //       })
    //     }
    //   }
    // }
  }
})
