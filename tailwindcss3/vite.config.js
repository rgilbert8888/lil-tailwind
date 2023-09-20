import { defineConfig } from "vite";
export default defineConfig({
  root: "src",
  publicDir: "public",
  base: "",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    open: true,
  },
});
