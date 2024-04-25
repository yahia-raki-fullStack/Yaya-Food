import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: "./index.html",
      output: {
        // ... other output options
      },
    },
    copy: [
      {
        src: "src/BgImg", // Source directory for your images (assuming it's inside src)
        dest: "dist", // Destination directory within the build output (copy directly to dist)
      },
    ],
  },
});
