import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// vite.config.js
export default defineConfig({
  base: '/techsolllc.net/',
  publicDir: 'public',
  plugins: [react()],
});