import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import IconResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		AutoImport({
			imports: [
				"react",
				{
					zustand: ["create"],
					"zustand/middleware": ["combine"],
					"framer-motion": ["motion"],
					clsx: ["clsx"],
				},
			],
			dirs: ["./src/stores", "./src/utils", "./src/components"],
			dts: "auto-imports.d.ts",
			resolvers: [IconResolver({ prefix: "icon", extension: "jsx" })],
		}),
		UnoCSS(),
		react(),
		Icons({ compiler: "jsx", jsx: "react", autoInstall: true }),
	],
});
