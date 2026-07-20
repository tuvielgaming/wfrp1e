import { defineConfig } from "vite";


export default defineConfig({

    build: {

        outDir: "dist",

        emptyOutDir: true,

        sourcemap: true,

        rollupOptions: {

            input: "src/wfrp1e.ts",

            output: {

                entryFileNames:
                    "wfrp1e.js"

            }

        }

    }

});