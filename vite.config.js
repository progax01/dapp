import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  nodePolyfills()],
  base: '/dapp/', // Replace with your actual repository name
  build: {
    publicDir: 'src/assets/', // By default, the public directory
  },
})
