// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/test-utils", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui", "@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2025-05-15",
})
