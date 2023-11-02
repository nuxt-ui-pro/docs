export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'slate',
  },
  header: {
    logo: {
      path: '',
      alt: ''
    },
    search: true,
    links: [{
      icon: 'i-heroicons-book-open',
      to: 'https://ui.nuxt.com/getting-started',
      target: '_blank',
      'aria-label': 'Nuxt UI docs'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt-ui-pro/docs',
      target: '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    credits: '',
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt-ui-pro/docs',
      target: '_blank',
      'aria-label': 'Nuxt UI Pro Docs on GitHub'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/nuxt_js',
      target: '_blank',
      'aria-label': 'Nuxt on X'
    }]
  }
})
