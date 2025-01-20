import { defineConfig } from "vite";

export default defineConfig({
  base: '/', // Use '/' for root deployment
  build: {
    outDir: 'dist',
  },
});
