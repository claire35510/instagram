import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    dedupe: ['svelte'] // Évite les conflits entre différentes versions de Svelte
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020', // Pour supporter les modules modernes
    }
  }
});