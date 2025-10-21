import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist", // 👈 ensures build output goes here (Vercel expects this)
  },
  base: "./", // 👈 crucial for correct JS paths after deployment
});
