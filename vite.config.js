import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import glob from "fast-glob";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('**/*.html', { ignore: ['node_modules/**'] }).map(file => {
          // Get the file name without extension to use as the entry point name
          const name = file.slice(0, file.lastIndexOf('.'));
          // Resolve the full path
          return [name, resolve(process.cwd(), file)];
        })
      ),
    },
  }
})
// vite.config.js

