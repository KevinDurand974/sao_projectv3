import {
	defineConfig,
	presetAttributify,
	presetTagify,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [presetUno({ dark: "media" }), presetAttributify(), presetTagify()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	shortcuts: [[/^size-(.*)$/, ([, size]) => `w-${size} h-${size}`]],
	theme: {
		colors: {
			base: "rgb(251 251 251)",
			accent: "rgb(235 166 1)",
			textbase: "rgb(201 201 201)",
			textaccent: "rgb(251 251 251)",
		},
		fontFamily: {
			sao: "sao",
		},
	},
});
