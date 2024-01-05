# Standards-Hub - Docs template; How to make your own site 

## Quick Start

If you want a fresh start, install Nuxt UI Pro

```bash [Terminal]
npx nuxi init -t github:nuxt-ui-pro/docs
```

or you can just fork it or clone it either from our site or from official site

```bash [Terminal]
git clone https://github.com/standards-hub/docs.git
```

## Setup

Make sure to install the dependencies after installing/cloning the app

```bash
# npm
npm install
```

## Changing environment from default state

### Changing the landing page
In this section we adress several things:
- Header (changing Logo)
- Main section (changing text and cards)
- Footer (changing text and links to social media)



## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Studio integration

Add `@nuxthq/studio` dependency to your package.json:

```bash
# npm
npm install --save-dev @nuxthq/studio
```

Add this module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/projects/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
