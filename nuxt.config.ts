// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  nitro: {
    prerender: {
      routes: [
        '/api/search.json'
      ]
    }
  }
})