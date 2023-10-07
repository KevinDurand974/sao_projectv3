import {
	defineConfig,
	presetUno,
	presetAttributify,
	presetTagify,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [presetUno({ dark: "media" }), presetAttributify(), presetTagify()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
