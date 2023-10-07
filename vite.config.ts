import react from "@vitejs/plugin-react-swc";
import Unimport from "unimport/unplugin";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		UnoCSS(),
		react(),
		Unimport.vite({
			presets: ["react"],
			dts: true,
			imports: [
				{ from: "framer-motion", name: "motion" },
				{ from: "zustand", name: "create" },
				{ from: "zustand/middleware", name: "combine" },
			],
			dirs: ["./src/stores/*", "./src/utils/*"],
		}),
	],
});
