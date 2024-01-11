// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    }
  },
  app: {
    pageTransition: { name: "rotate", mode: "out-in" },
    layoutTransition: { name: "rotate", mode: "in-out" }
  },
  css: ['~/assets/scss/main.scss']
})
