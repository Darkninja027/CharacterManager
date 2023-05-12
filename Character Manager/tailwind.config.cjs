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
					brown: {
						100: "#C6C1C0",
						200: "#B8AAA8",
						300: "#998A87",
						400: "#74615D",
						500: "#56423E",
						600: "#4A332E",
						700: "#412823",
						800: "#361E1A",
						900: "#2C1712",
					},
					red: {
						100: "#EBBDBD",
						200: "#F0A7A7",
						300: "#E37272",
						400: "#D64747",
						500: "#D42323",
						600: "#B61010",
						700: "#890A0A",
						800: "#750A0A",
						900: "#2F0303",
					},
					orange: {
						100: "#FCD6CA",
						200: "#F4B5A1",
						300: "#E7805F",
						400: "#DE5D34",
						500: "#CF3F17",
						600: "#B9360D",
						700: "#9C2A07",
						800: "#771F03",
						900: "#4D1301",
					},
					green: {
						100: "#CCDFC0",
						200: "#A6CB91",
						300: "#80BC5E",
						400: "#61AB37",
						500: "#2E7E00",
						600: "#276B00",
						700: "#205402",
						800: "#1A4402",
						900: "#112F00",
					},
					lime: {
						100: "#DFF7C0",
						200: "#C0E58F",
						300: "#A5D863",
						400: "#8DD037",
						500: "#6AB30C",
						600: "#559307",
						700: "#437403",
						800: "#335803",
						900: "#294504",
					},
				}
			}
		},
	},
	plugins: [
		Myclass,
	],
}
