import { defineConfig, mergeConfig } from "vite";
import baseConfig from "./vite.config.js";

export default mergeConfig(baseConfig, defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      "localhost",
      ".replit.dev", 
      ".repl.co",
      "4b93499f-53d7-458f-b554-96cc207e2920-00-sf0y15svy19f.kirk.replit.dev"
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));