<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      <span v-if="footer?.credits" class="text-sm text-gray-500 dark:text-gray-400">
        {{ footer.credits }}
      </span>
      <span v-else class="text-sm text-gray-500 dark:text-gray-400">
        Nuxt UI Pro © {{ new Date().getFullYear() }}
      </span>
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="link"
          color="gray"
          variant="ghost"
        />
      </template>
      <UColorModeButton v-if="footer?.colorMode" />
    </template>
  </UFooter>
</template>
