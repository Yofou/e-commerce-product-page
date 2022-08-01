/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
	colors: {
		orange: {
			300: "#FFEEE2",
			600: "#FF7E1B"
		},
		grey: {
			300: "#F6F8FD",
			600: "#B6BCC8",
			900: "#69707D",
			1200: "#1D2026",
		},
		red: "#FF6961"
	},
	fontFamily: {
		kumbh: ["Kumbh Sans", "sans-serif"]
	},
	boxShadow: {
		'cart-shadow': "0px 20px 50px -20px rgba(29, 32, 38, 0.503143)"	
	}
  },
  plugins: [],
}
