export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: ''
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true
  },

  compatibilityDate: '2024-08-08'
})