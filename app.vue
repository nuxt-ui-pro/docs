<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useSeoMeta({
  ogSiteName: 'Nuxt UI Pro - Docs template',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})
const { data: page } = await useAsyncData(() => queryContent(route.path).findOne(), { watch: [() => route.path] })

provide('navigation', navigation)
provide('page', page)
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />

      <UNotifications />
    </ClientOnly>
  </div>
</template>
