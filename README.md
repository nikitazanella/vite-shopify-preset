# Vite Shopify preset

A simple Vite.js preset to compile assets for standard Shopify themes.

![Tux, the Linux mascot](https://raw.githubusercontent.com/nikitazanella/vite-shopify-preset/main/vite-shopify-preset.png)

## Usage

Create a /src folder in the root of your Shopify theme.
Create a /js folder in the /src folder and add your js files (es6)
Create a /scss folder in the /scss folder and add your scss files.

```js
// vite.config.js
import viteShopifyPreset from "@nikitazanella/vite-shopify-preset";

export default {
  plugins: [viteShopifyPreset()],
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

Currently support only vanilla js and scss. Additional/optional config coming soon.

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
