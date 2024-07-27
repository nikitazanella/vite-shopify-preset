# Vite Shopify preset

A simple Vite.js preset to compile assets for standard Shopify themes.

![Tux, the Linux mascot](https://raw.githubusercontent.com/nikitazanella/vite-shopify-preset/main/vite-shopify-preset.png)

## Installation

**via npm**

```shell
npm install @ --save
```

## Usage

By default, VSP (vite Shopify preset), search for files from the /src folder.
In this folder you have to create a folder for your styles and a folder for your js.

Example:

- ROOT
  |- ASSETS
  |- SECTIONS
  |- SNIPPETS
  | ...
  | SRC
  | |- JS
  | | |- index.js
  | | |- [name].js
  | | |- other
  | |- SCSS
  | | |- theme.scss
  | | |- reset.scss
  | | |- other

You can use any kind of pre-processor (scss,sass,less and of course css).

```js
// vite.config.js
import viteShopifyPreset from "@nikitazanella/vite-shopify-preset";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [viteShopifyPreset(config)],
});

// Optional configuration

const config = {
  stylesPath: "/path/to/styles", // optional
  javascriptPath: "/path/to/javascript", // optional
  useTailwind: false, // optional
};
```

npm scripts

```shell
...
	"scripts": {
		"shopify:theme": "shopify theme dev --store storename.myshopify.com",
		"watch": "vite build --watch",
		"build": "vite build"
	},
...
```

## Features

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).
