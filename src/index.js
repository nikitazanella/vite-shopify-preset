import path from "path";
import fs from "fs";

const getFiles = (dir, ext) =>
	fs
		.readdirSync(dir)
		.filter((file) => file.endsWith(ext))
		.reduce((files, file) => {
			files[path.parse(file).name] = path.resolve(dir, file);
			return files;
		}, {});

export default function viteShopifyPreset(config) {
	return {
		name: "vite-shopify-preset",
		config() {
			const jsFiles = getFiles(path.resolve(process.cwd(), config.javascriptPath || "src/js"), ".js");
			const scssFiles = getFiles(path.resolve(process.cwd(), config.stylesPath || "src/scss"), ".scss");

			return {
				build: {
					rollupOptions: {
						input: {
							...jsFiles,
							...scssFiles,
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
					watch: {},
				},
			};
		},
	};
}
