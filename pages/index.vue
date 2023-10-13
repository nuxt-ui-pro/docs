<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const page = inject<Ref<ParsedContent>>('page')

useSeoMeta({
  titleTemplate: '%s - Nuxt UI Pro - Docs template',
  title: page.value.title,
  ogTitle: `${page.value.title} - Nuxt UI Pro - Docs template`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <UPage>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #title>
        <MDC :value="page.hero.title" :tag="false" />
      </template>

      <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert max-w-none" />
    </ULandingHero>
  </UPage>
</template>