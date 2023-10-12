<script setup>
const { data: navigation } = useNuxtData('navigation')
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
          </UAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
