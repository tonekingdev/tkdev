/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	  ],
	theme: {
	  container: {
		center: true,
		padding: "1rem",
	  },
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	  },
	  fontFamily: {
		primary: "var(--font-inter)",
		secondary: "var(--font-poppins)",
	  },
	  extend: {
		colors: {
		  primary: '#f2f2f2',
		  accent: {
			DEFAULT: '#ff0000',
			hover: '#00ff00',
		  },
		  charcoal: '#333333',
		  slate: '#f2f2f2',
		},
		fontFamily: {
		  primary: ['var(--font-inter)'],
		  secondary: ['var(--font-poppins)'],
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
  plugins: [require("tailwindcss-animate")],
}
