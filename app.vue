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

provide('page', page)
</script>

<template>
  <div>
    <Header />

    <UMain>
      <ULandingHero v-if="page?.hero" v-bind="page.hero" class="hidden lg:block">
        <template #title>
          <MDC :value="page.hero.title" :tag="false" />
        </template>

        <MDC v-if="page.hero.code" :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert max-w-none" />
      </ULandingHero>

      <UContainer>
        <UPage>
          <template #left>
            <UAside>
              <UNavigationTree :links="mapContentNavigation(navigation)" />
            </UAside>
          </template>

          <NuxtPage />
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />

      <UNotifications />
    </ClientOnly>
  </div>
</template>
