<script setup lang="ts">
useServerSeoMeta({
  ogSiteName: 'Nuxt UI Pro - Docs template',
  twitterCard: 'summary_large_image',
  ogImage: '/social-card.png',
  twitterImage: '/social-card.png'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false,
})
</script>

<template>
  <UHeader>
    <template #logo>
      <Logo class="hidden sm:block h-5 w-auto self-center" />
      <LogoOnly class="sm:hidden h-5 w-auto self-center" />
      <span class="block leading-tight sm:pt-1 self-center">&bull; Docs template</span>
    </template>

    <template #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton label="" class="lg:hidden" />
      <UButton
        aria-label="Docs template on GitHub"
        to="https://github.com/nuxt-ui-pro/docs"
        icon="i-simple-icons-github"
        target="_blank"
        color="gray"
        variant="ghost"
      />
    </template>
  </UHeader>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UFooter>
    <template #right>
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
