/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors: {
				eerie: {
					100: "#2d3935",
					200: "#242d2b",
					300: "#1c2321",
					400: "#121715",
					500: "#090b0b"
				},
				cadet: {
					100: "#95abb2",
					200: "#89a1a9",
					300: "#7d98a1",
					400: "#718e98",
					500: "#67848e"
				},
				payne: {
					100: "#788191",
					200: "#6e7787",
					300: "#5e6572",
					400: "#5c6370",
					500: "#535965"
				},
				powder: {
					100: "#C3cbd5",
					200: "#B7c0cc",
					300: "#B7c0cc",
					400: "#A9b4c2",
					500: "#A9b4c2"
				},
				flash: {
					100: "#Eef1ef",
					200: "#E9edea",
					300: "#dde3df",
				}
			}
		},
	},
	plugins: [],
}
