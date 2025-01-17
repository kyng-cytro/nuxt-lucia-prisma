// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt"],
  ui: {
    icons: ["heroicons"],
  },
  runtimeConfig: {
    github: {
      clientId: "",
      clientSecret: "",
    },
  },
});
