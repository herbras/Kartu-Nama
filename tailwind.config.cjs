/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [ {
			mytheme: {
			  primary: "white",
			  secondary: "#f6d860",
			  accent: "#37cdbe",
			  neutral: "#3d4451",
			  lime: "#ffffff",
			  "lime-focus": "#ffffff",
			  "base-100": "#ffffff",
			},
		  },"light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],	  },
}
