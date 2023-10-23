<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()

const links = computed(() =>  Object.entries(header?.links || {}).map(([key, value]) => ({ key, ...value })))
</script>

<template>
  <UHeader>
    <template #logo>
      <Logo class="hidden sm:block h-5 w-auto self-center" />
      <LogoOnly class="sm:hidden h-5 w-auto self-center" />
      <LogoBadge>Docs template</LogoBadge>
    </template>

    <template #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton label="" class="lg:hidden" />
      <UButton
        v-for="link of links"
        :key="link.key"
        v-bind="link"
        color="gray"
        variant="ghost"
      />
      <UColorModeButton v-if="header.colorMode" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
