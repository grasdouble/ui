import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteCompression from "vite-plugin-compression";

// Détectez le mode de production à partir des variables d'environnement
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression({
      verbose: true,
      disable: !isProduction,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "gzip",
    }),
    viteCompression({
      verbose: true,
      disable: !isProduction,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.tsx",
      formats: ["es"],
      name: "GradoubleUiDesignSystem",
      fileName: (format) => `gradouble-ui-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Adaptez ou supprimez manualChunks selon vos besoins
        manualChunks: !isProduction
          ? undefined
          : (id) => {
              if (id.includes("src/") && id.endsWith(".tsx")) {
                const paths = id.split("/");
                const idx = paths.indexOf("src");
                const relevantPath = paths.slice(idx + 1, -1).join("/"); // +1 to exclude 'src'
                const name = paths.pop()?.replace(/\.tsx$/, "");
                return `${relevantPath}/${name}`;
              }
            },
      },
    },
    // Activez la minification en production
    minify: isProduction ? "terser" : false,
    declaration: true,
    // Ajustez ou désactivez l'inline des assets selon le mode
    assetsInlineLimit: isProduction ? 4096 : 0,
  },
});
