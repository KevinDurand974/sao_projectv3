import {
	defineConfig,
	presetAttributify,
	presetTagify,
	presetUno,
	toEscapedSelector,
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
			btnbg: "rgb(77, 77, 77)",
		},
		fontFamily: {
			sao: "sao",
		},
	},
	rules: [
		[
			/^two-step-(.*)-(\d+%)-(\d+%)$/,
			([, name, start, end], { rawSelector, theme }) => {
				let color = "";

				if (name.includes("-")) {
					const spliting = name.split("-");
					color = theme["colors"][spliting[0]][spliting[1]];
				} else {
					const preColor = theme["colors"][name];
					color = typeof preColor === "string" ? preColor : preColor["DEFAULT"];
				}

				const selector = toEscapedSelector(rawSelector);

				return `${selector} {
					background: linear-gradient(to bottom, transparent 0%, ${color} ${start}, ${color} ${end}, transparent 100%);
				}`;
			},
		],
	],
});
