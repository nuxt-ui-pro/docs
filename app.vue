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
    <span v-if="$route.path === '/'" class="gradient" />

    <AppHeader />

    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.gradient {
  position: fixed;
  top: 25vh;
  width: 100%;
  height: 30vh;
  background: radial-gradient(50% 50% at 50% 50%, #00DC82 0%, rgba(0, 220, 130, 0) 100%);
  filter: blur(180px);
  opacity: 0.6;
  z-index: -1;
}
</style>
