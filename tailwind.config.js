/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "1rem",
					md: "1rem",
					lg: "1rem",
					xl: "1rem",
					"2xl": "3rem",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
