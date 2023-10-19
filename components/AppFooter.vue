<script setup lang="ts">
const { footer } = useAppConfig()

const links = computed(() =>  Object.entries(footer?.links || {}).map(([key, value]) => ({ key, ...value })))
</script>

<template>
  <UFooter>
    <template #left>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        Published under
        <NuxtLink href="https://github.com/nuxt/ui" target="_blank" class="text-gray-900 dark:text-white">MIT License</NuxtLink>
      </span>
    </template>

    <template #right>
      <UButton
        v-for="link of links"
        :key="link.key"
        v-bind="link"
        color="gray"
        variant="ghost"
      />
      <UColorModeButton v-if="footer.colorMode" />
    </template>
  </UFooter>
</template>
