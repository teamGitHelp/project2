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
				dmSans: ['DM Sans', 'sans-serif'], 
        		inter: ['Inter', 'serif'],
			},
			colors: {
				primary: colors.blue,
				pink: '#E7C2D4',
				darkblue: '#252861',
				muted: '#686868',
				backdrop: '#E2E2E2',
				back: 'rgba(239, 239, 239, 0.3)',

				lightgreen: 'rgba(163, 218, 194, 0.2)',
				green: '#A3DAC2',
				darkgreen: '#7CAB96',

				blue: '#92BDF6',
				lightblue: 'rgba(146, 189, 246, 0.2)',

				lightpink: 'rgba(231, 194, 212, 0.3)'
			},
		},
	},

	plugins: [flowbitePlugin],
} as Config;