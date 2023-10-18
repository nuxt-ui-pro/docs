// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
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
  },
  // Essential for OgImage on `nuxt generate`
  // https://github.com/harlan-zw/nuxt-og-image/blob/c89fd4e29f56eeb00b12bc0d7e4bcb82ab459cae/src/module.ts#L127C16-L127C16
  site: {
    url: 'https://nuxt-ui-pro-template-docs.vercel.app'
  }
})