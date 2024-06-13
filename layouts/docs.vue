<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'
import type { Lang } from '~/types/Lang'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const { navigation, refreshNavigation } = inject<Ref<NavItem[]>>('navigation')
const languages = config.public.languages.map((lang: Lang) => ({
  name: lang.name,
  value: lang.code
}))
const language = ref(languages.find((lang) => lang.value === route.fullPath.split('/')[1] && lang.value)?.value || config.public.defaultLanguage)

watch(language, (value) => {
  router.push(
    route.fullPath.replace(`/${route.fullPath.split('/')[1]}/`, `/${value}/`)
  )
  refreshNavigation()
})

onMounted(() => {
  refreshNavigation()
})
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <USelect
            v-model="language"
            :options="languages"
            option-attribute="name"
            class="mb-2"
          />
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
