<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.path">
        <img
          :src="header.logo.path"
          :alt="header.logo.alt"
        >
      </template>
      <template v-else>
        <Logo class="hidden sm:block h-5 w-auto self-center" />
        <LogoOnly class="sm:hidden h-5 w-auto self-center" />
        <LogoBadge>Docs template</LogoBadge>
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton v-if="header?.search" label="" class="lg:hidden" />
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
