<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
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
      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="link"
          color="gray"
          variant="ghost"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
