// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: '@nuxt/ui-pro',
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image'
  ],
  ui: {
    icons: ['ph', 'simple-icons']
  },
  nitro: {
    prerender: {
      routes: [
        '/api/search.json'
      ]
    }
  }
})