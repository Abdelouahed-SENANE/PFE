import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": "/src/assets",
            "@helpers": "/src/helpers",
            "@ui": "/src/components/ui",
            "@components": "/src/components",
            "@config": "/src/config",
        },
    },
});
