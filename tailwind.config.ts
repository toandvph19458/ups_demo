const animate = require("tailwindcss-animate");
const textshadow = require("tailwindcss-textshadow");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	safelist: ["light"],
	prefix: "",
	theme: {
		// container: {
		// 	center: true,
		// 	padding: {
		// 		DEFAULT: "0rem",
		// 		// sm: "2rem",
		// 		// lg: "4rem",
		// 		// xl: "5rem",
		// 		// "2xl": "6rem",
		// 	},
		// 	screens: {
		// 		sm: "650px",
		// 		md: "900px",
		// 		lg: "1080px",
		// 		xl: "1200px",
		// 		"2xl": "1600px",
		// 	},
		// },
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
			"3xl": "1760px",
		},
		fontFamily: {
			BG: ["Bricolage Grotesque", "sans-serif"],
			HG: ["Hanken Grotesk", "sans-serif"],
		},
		extend: {
			textShadow: {
				custom: "6px 6px 0px #071A11",
			},
			colors: {
				black: "#15171E",
				"green-ups": "#02E56A",
				"spring-green": "#00E254",
				"aqua-mint": "#00E2B9",
				"lime-frost": "#CAFF8D",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
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
				"collapsible-down": {
					from: { height: 0 },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				"collapsible-up": {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-in-out",
				"collapsible-up": "collapsible-up 0.2s ease-in-out",
			},
		},
	},
	plugins: [animate, textshadow],
};
