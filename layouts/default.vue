<script setup>
const route = useRoute()

const { data: navigation } = useNuxtData('navigation')

const { data: page, refresh: refreshPage } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne())

watch(() => route.path, refreshPage)
</script>

<template>
  <UMain>
    <UContainer>
      <ULandingHero v-if="page?.hero" v-bind="page.hero">
        <template #title>
          <span v-html="page.hero.title" />
        </template>
      </ULandingHero>

      <UPage>
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
          </UAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
