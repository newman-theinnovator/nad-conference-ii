
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  publicDir: 'public',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['@tsparticles/react', '@tsparticles/all']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-maps': ['@react-google-maps/api'],
          'vendor-aos': ['aos'],
          'vendor-particles': ['@tsparticles/react', '@tsparticles/all']
        }
      }
    }
  }
});