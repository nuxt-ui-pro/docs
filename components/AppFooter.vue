<script setup lang="ts">
const { footer } = useAppConfig()
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
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer.links"
          :key="index"
          v-bind="link"
          color="gray"
          variant="ghost"
        />
      </template>
      <UColorModeButton />
    </template>
  </UFooter>
</template>
