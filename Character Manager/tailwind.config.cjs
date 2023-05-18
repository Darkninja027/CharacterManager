/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
	addUtilities({
		".my-rotate-y-180": {
			transform: "rotateY(180deg)",
		},
		".preserve-3d": {
			transformStyle: "preserve-3d",
		},
		".perspective": {
			perspective: "1000px",
		},
		".backface-hidden": {
			backfaceVisibility: "hidden",
		},
	});
});
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			dropShadow: {
				menu: "-4px 0px 4px rgba(0, 0, 0, 0.1)"
			},
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
				},
				dnd: {
					primary: {
						100: "#890A0A",
						200: "#710F0F",
						300: "#581313",
						400: "#331414",
						500: "#160E0E",
					},
					secondary: {
						100: "#F7F7F8",
						200: "#DCDCE0",
						300: "#B4B4BB",
						400: "#77777E",
						500: "#3D3D3E",
					},
					background: {
						100: "#E5E3E8",
						200: "#CECBD2",
						300: "#AAA5B1",
						400: "#726E77",
						500: "#383739",
					},
					accent: {
						100: "#443D48",
						200: "#3C373F",
						300: "#312E33",
						400: "#222022",
						500: "#0F0F10",
					},
					text: "#050605"

				},
				common: "#F5F5F5",
				uncommon: "#40CC2E",
				rare: "#137BE0",
				veryrare: "#9333D4",
				legendary: "#D27516"
			}
		},
	},
	plugins: [
		Myclass,
	],
}
