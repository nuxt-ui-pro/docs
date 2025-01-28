<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader :ui="{ center: 'flex-1' }">
    <UContentSearchButton
      v-if="header?.search"
      label="Search..."
      variant="outline"
      class="w-full"
    >
      <template #trailing>
        <div class="flex items-center gap-0.5 ms-auto">
          <UKbd value="meta" />
          <UKbd value="k" />
        </div>
      </template>
    </UContentSearchButton>

    <template #title>
      <div class="flex items-center gap-2">
        <LogoPro class="w-auto h-6 shrink-0" />
        <UDropdownMenu
          v-slot="{ open }"
          :modal="false"
          :items="[{
            label: `Starter`,
            to: 'https://starter-template.nuxt.dev/'
          }, {
            label: `Landing`,
            to: 'https://landing-template.nuxt.dev/'
          }, {
            label: `Docs`,
            to: 'https://docs-template.nuxt.dev/',
            checked: true,
            type: 'checkbox'
          }, {
            label: `SaaS`,
            to: 'https://saas-template.nuxt.dev/'
          }, {
            label: `Dashboard`,
            to: 'https://dashboard-template.nuxt.dev/'
          }]"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
          size="xs"
        >
          <UButton
            label="Docs"
            variant="subtle"
            trailing-icon="i-lucide-chevron-down"
            size="xs"
            class="-mb-[6px] font-semibold rounded-full truncate"
            :class="[open && 'bg-[var(--ui-primary)]/15 ']"
            :ui="{
              trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
            }"
          />
        </UDropdownMenu>
      </div>
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #content>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
