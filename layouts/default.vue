<script setup>
const { data: navigation } = useNuxtData('navigation')
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UAside>
            <template #top>
              <UDocsSearchButton size="md" />
            </template>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
          </UAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
