import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "./static-app",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./static-app/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: "../dist-static",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["wouter"],
          animation: ["framer-motion"]
        },
      },
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});