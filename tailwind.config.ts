import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
	],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Figtree", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.blue,
			},
		},
	},

	plugins: [flowbitePlugin],
} as Config;