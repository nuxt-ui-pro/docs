<script setup lang="ts">
const { data: page } = await useAsyncData(() => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: 'Nuxt UI Pro - Docs template',
  title: page.value.title,
  ogTitle: 'Nuxt UI Pro - Docs template',
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

    <ULandingSection v-for="(section, index) of page.sections" :key="index" v-bind="section">
      <UPageGrid>
        <ULandingCard v-for="(item, index2) of section.items" :key="index2" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </UPage>
</template>
