<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()

const page = inject<Ref<ParsedContent>>('page')
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  titleTemplate: '%s - Nuxt UI Pro - Docs template',
  title: page.value.title,
  ogTitle: `${page.value.title} - Nuxt UI Pro - Docs template`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const headline = computed(() => findPageHeadline(page.value))

const communityLinks = computed(() => [{
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `https://github.com/nuxt-ui-pro/docs/edit/main/content/${page?.value?._file}`,
  target: '_blank',
}, {
  icon: 'i-heroicons-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank',
}, {
  icon: 'i-simple-icons-nuxtdotjs',
  label: 'Purchase UI Pro',
  to: 'https://ui.nuxt.com/pro/purchase',
  target: '_blank',
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <hr v-if="surround?.length">

      <UDocsSurround :surround="(surround as ParsedContent[])" />
    </UPageBody>

    <template v-if="page.body?.toc?.links?.length" #right>
      <UDocsToc :links="page.body.toc.links">
        <template #bottom>
          <div class="hidden lg:block space-y-6 !mt-6">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks title="Community" :links="communityLinks" />
          </div>
        </template>
      </UDocsToc>
    </template>
  </UPage>
</template>
