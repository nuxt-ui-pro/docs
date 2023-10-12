---
title: 'Introduction'
description: 'Welcome to Nuxt UI Pro documentation template.'
hero:
  title: '[Nuxt UI Pro]{.text-primary} :br Docs template'
  description: 'Create your documentation in seconds with this template!'
  orientation: horizontal
  links:
    - label: 'Use this template'
      icon: 'i-simple-icons-github'
      to: 'https://github.com/nuxt-ui-pro/docs'
      target: '_blank'
      size: lg
    - label: 'Documentation'
      icon: 'i-simple-icons-nuxtdotjs'
      color: 'white'
      to: 'https://ui.nuxt.com/pro'
      target: '_blank'
      size: lg
  code: |
    ```vue [app.vue]
    <template>
      <UMain>
        <UContainer>
          <UPage>
            <template #left>
              <UAside>
                <UNavigationTree :links="links" />
              </UAside>
            </template>

            <NuxtPage />
          </UPage>
        </UContainer>
      </UMain>
    </template>
    ```
---

## Features

- Write pages in Markdown with [Nuxt Content](https://content.nuxt.com)
- Auto-generated sidebar navigation
- Beautiful Typography
- Surround navigation
- Multi-level sidebar
- Powered by [Nuxt 3](https://nuxt.com)
- And more...