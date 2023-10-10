<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false,
})
</script>

<template>
  <UHeader title="My Docs">
    <template #right>
      <UButton to="https://ui.nuxt.com/pro" icon="i-heroicons-book-open" target="_blank" color="gray" variant="ghost" />
      <UColorModeButton />
    </template>
  </UHeader>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UFooter />
  <ClientOnly>
    <LazyUDocsSearch ref="search" :files="files" :navigation="navigation" />
  </ClientOnly>
</template>
