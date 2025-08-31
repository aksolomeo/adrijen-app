import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import path from "path";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	pluginVue.configs["flat/essential"],
	vueTsConfigs.recommended,

	{
		name: "app/files-to-lint",
		files: ["**/*.{ts,mts,tsx,vue}"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: path.resolve("C:/Users/DigitalGuest/adrijen-app"),
			},
		},
		rules: {
			"vue/multi-word-component-names": "off",
		},
	},

	globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
	skipFormatting
);
