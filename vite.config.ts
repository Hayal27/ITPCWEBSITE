import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    open: true, // optional: auto opens browser on dev start
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // safer than '/src'
    },
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    sourcemap: false,
  },
});
