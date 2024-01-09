<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()

const links = [{
  label: 'Markdown',
  to: '/markdown-guidelines/introduction/'
}, {
  label: 'GitHub',
  to: '/github-guidelines/github/'
}]

</script>

<template>
  <UHeader >

    <template #logo>
      <Logo class="w-auto h-6" />
      <img src="/images/S-H logo.png" class="h-8 rounded-full" height="70" width="40" alt="Standards-Hub">
        Standards-Hub
    </template>

    <template #center>
      <UHeaderLinks :links="links" class="hidden lg:flex" /> <!-- this class allows links to be hidden in mobile preview -->
    </template>

    <template #right>
      <UDocsSearchButton label="" />
      <UColorModeButton />
      <UButton to="https://github.com/standards-hub" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel> <!-- panel that opens when clicking on the hamburger menu -->
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>

  </UHeader>
</template>