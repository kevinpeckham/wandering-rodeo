import { defineConfig } from "unocss";
import { presetWind } from "unocss";
import { presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetWind(),
		presetWebFonts({
			provider: "fontshare",
			fonts: {
				sans: "Zodiak",
			},
		}),
	],
});
