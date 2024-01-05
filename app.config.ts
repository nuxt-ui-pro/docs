export default defineAppConfig({
  ui: {
    primary: 'pink',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Standards-Hub Docs',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/standards-hub',
      target: '_blank',
      'aria-label': 'S-H on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-nuxtdotjs',
      to: 'https://nuxt.com',
      target: '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/standards-hub',
      target: '_blank',
      'aria-label': 'S-H on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-heroicons-globe-alt',
        label: 'Official S-H website',
        to: 'https://www.standardshub.io/',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Nuxt modules',
        to: 'https://nuxt.com/modules',
        target: '_blank',
      }]
    }
  }
})
