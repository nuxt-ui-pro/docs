<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])
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
        aria-label="Nuxt UI docs"
        to="https://ui.nuxt.com/getting-started"
        icon="i-heroicons-book-open"
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
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
