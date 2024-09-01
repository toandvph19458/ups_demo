import { defineNuxtConfig } from "nuxt/config";
import { config } from "./lib/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: { lang: "vi" },
			link: [{ rel: "icon", type: "image/x-icon", href: "/logo/logo-cap-dark.png" }],
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "robots", content: "noindex, noarchive, nofollow" },
			],
		},
	},

	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},

	modules: [
		"@hypernym/nuxt-gsap",
		"nuxt-security",
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"@pinia/nuxt",
		"@nuxt/image",
		"nuxt-swiper",
	],

	vite: {
		define: {
			"process.env.NUXT_APP_PORT": JSON.stringify(process.env.NUXT_APP_PORT),
			"process.env.NUXT_APP_API_URL": JSON.stringify(process.env.NUXT_APP_API_URL),
			"process.env.NUXT_APP_IMAGE_URL": JSON.stringify(process.env.NUXT_APP_IMAGE_URL),
		},
	},

	build: {
		transpile: ["gsap"],
	},

	devServer: {
		port: Number(config.NUXT_APP_PORT) || 3000,
	},

	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},

	colorMode: {
		classSuffix: "",
		preference: "light",
	},

	image: {
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			"2xl": 1536,
		},
	},

	compatibilityDate: "2024-08-13",

	tailwindcss: {
		viewer: false,
	},

	gsap: {
		composables: true,
		provide: false,

		extraPlugins: {
			scrollTrigger: true,
			scrollTo: true,
		},
	},

	security: {
		headers: {
			crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
		},
	},
});
