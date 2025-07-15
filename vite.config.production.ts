import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "./client",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: "../dist/public",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          radix: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          lucide: ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
  },
});