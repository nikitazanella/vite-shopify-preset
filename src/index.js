import path from "path";
import fs from "fs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const getFiles = (dir, exts) =>
  fs
    .readdirSync(dir)
    .filter((file) => exts.some((ext) => file.endsWith(ext)))
    .reduce((files, file) => {
      files[path.parse(file).name] = path.resolve(dir, file);
      return files;
    }, {});

export default function viteShopifyPreset(config) {
  const javascriptPath = config?.javascriptPath || "src/js";
  const stylesPath = config?.stylesPath || "src/styles";
  const styleExtensions = [".scss", ".css", ".less", ".sass"];
  const useTailwind = config?.useTailwind || false;

  return {
    name: "vite-shopify-preset",
    config() {
      const jsFiles = getFiles(path.resolve(process.cwd(), javascriptPath), [
        ".js",
      ]);
      const styleFiles = getFiles(
        path.resolve(process.cwd(), stylesPath),
        styleExtensions
      );

      const postcssPlugins = useTailwind
        ? [tailwindcss, autoprefixer]
        : [autoprefixer];

      return {
        css: {
          postcss: {
            plugins: postcssPlugins,
          },
        },
        build: {
          rollupOptions: {
            input: {
              ...jsFiles,
              ...styleFiles,
            },
            output: {
              entryFileNames: "[name].js",
              assetFileNames: "[name].css",
              dir: path.resolve(process.cwd(), "assets"),
            },
          },
          outDir: "assets",
          assetsDir: "",
          emptyOutDir: false,
        },
      };
    },
  };
}
