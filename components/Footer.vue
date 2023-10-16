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
</template>
