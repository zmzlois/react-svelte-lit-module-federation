import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    template: './src/index.html',
  },
  server: {
    port: 3002,
  }
});
