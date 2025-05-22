import { createConfigForNuxt } from "@nuxt/eslint-config/flat"

export default createConfigForNuxt({
	features: {
		stylistic: {
			semi: false,
			indent: "tab",
			quotes: "double",
		},
	},
})
