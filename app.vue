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

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

provide('navigation', navigation)
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
