export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'slate',
  },
  header: {
    colorMode: false,
    links: {
      'nuxt-ui-docs': {
        icon: 'i-heroicons-book-open',
        to: 'https://ui.nuxt.com/getting-started',
        target: '_blank',
        'aria-label': 'Nuxt UI docs'
      },
      'nuxt-ui-pro': {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/nuxt-ui-pro/docs',
        target: '_blank',
        'aria-label': 'Docs template on GitHub'
      }
    }
  },
  footer: {
    colorMode: true,
    links: {
      'nuxt-ui-pro': {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/nuxt-ui-pro/docs',
        target: '_blank',
        'aria-label': 'Nuxt UI Pro Docs on GitHub'
      },
      'nuxt-twitter': {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/nuxt_js',
        target: '_blank',
        'aria-label': 'Nuxt on X'
      }
    }
  }
})
