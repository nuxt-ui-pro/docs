<script setup lang="ts">
useServerSeoMeta({
  ogSiteName: 'Nuxt UI Pro - Docs template',
  twitterCard: 'summary_large_image',
  ogImage: '/social-card.png',
  twitterImage: '/social-card.png'
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false,
})
</script>

<template>
  <UHeader>
    <template #right>
      <UButton
        aria-label="Nuxt UI Pro"
        to="https://ui.nuxt.com/pro"
        icon="i-simple-icons-nuxtdotjs"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UButton
        aria-label="Docs template on GitHub"
        to="https://github.com/nuxt-ui-pro/docs"
        icon="i-simple-icons-github"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UButton
        aria-label="Nuxt on X"
        to="https://x.com/nuxt_js"
        icon="i-simple-icons-x"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UColorModeButton />
    </template>
  </UHeader>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UFooter>
    <template #right>
      <UButton
        aria-label="Nuxt UI Pro"
        to="https://ui.nuxt.com/pro"
        icon="i-simple-icons-nuxtdotjs"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UButton
        aria-label="Nuxt UI Pro Docs on GitHub"
        to="https://github.com/nuxt-ui-pro/docs"
        icon="i-simple-icons-github"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UButton
        aria-label="Nuxt on X"
        to="https://x.com/nuxt_js"
        icon="i-simple-icons-x"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UColorModeButton />
    </template>
  </UFooter>
  <ClientOnly>
    <LazyUDocsSearch ref="search" :files="files" :navigation="navigation" />
  </ClientOnly>
</template>
