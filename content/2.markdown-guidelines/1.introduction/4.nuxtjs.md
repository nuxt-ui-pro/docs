---
title: NUXTJS App
description: ''
position: 30
category: Introduction
---
The purpose of this document is to provide hands-on information on creating and deploying the documentation type website using the [nuxt-content-docs](https://www.npmjs.com/package/@nuxt/content-theme-docs) template package and [GitHub pages](https://pages.github.com/) capabilities.

The goal is to provide more detailed information in order to deliver the promise of the `nuxt-content-docs`:

> Create your documentation with @nuxt/content docs theme in seconds!

## Creating the project

To create a project you can utilise `yarn` or `npm` package manager.

<code-group>
  <code-block label="Yarn" active>

  ```bash
# Yarn
yarn create nuxt-content-docs <project-name>
  ```
  </code-block>
  <code-block label="NPM">

  ```bash
# NPX
npx create-nuxt-content-docs <project-name>
  ```
  </code-block>
</code-group>


> Note: `<project-name>` is the name of the repository already created in GitHub.

### Example 

To create `my-project-docs` use the command:

```bash
npx create-nuxt-content-docs my-project-docs
```
Once the initial project template is downloaded a set of questions to configure the project are presented. The default answers can be taken if you do not have prepared the specific ones in advance.
The most important is the selection of the package manager as you must have it installed on your system.
If you have already installed `node` then `npm` is already available. [Yarn](https://yarnpkg.com/) needs to be installed separately.

```bash
✨  Generating @nuxt/content documentation in my-project-docs
? Project name: (my-project-docs)
? Project title: (Nuxt Content)
? Documentation url:
? GitHub repository (owner/name): (jpradocueva/md2html_guidelines)
? Twitter username (@username): (@jpradocueva1)
? Package manager: (Use arrow keys)

❯ Yarn
  Npm
```
After selecting the package manager, `npm` in this example, the installation of dependencies will start.

```bash
  Installing packages with npm
```
Once the installation process is done you should change to the newly created folder.

```bash
cd my-project-docs/
```

In order to verify that everything is working as expected run the following command:

```bash
npm run dev
```

The above command will build the `development` version of this project and run the web server making this web documentation available on your local machine at `http://localhost:3000/` address. Navigate your web browser to this URL and you should see the `nuxt/content` initial documentation page with the information:

> Your documentation has been created successfully!

## Link Local with Upstream Repository

> At this moment you have created a local repository, e.g. `md2html_guidelines` and you want to sync this content with the upstream repository, `https://github.com/jpradocueva/md2html_guidelines.git`, which was created in a separate step.

Add the remote repository in GitHub as a remote `upstream`

`git remote add upstream https://github.com/jpradocueva/md2html_guidelines.git`

Then, commit all the changes to your local host:

`git add .` and then

`git commit -m "first commit"`

Then, push the content from the local repository upstream (assuming the branch is called `master`).

`git push --set-upstream upstream master`

Then, confirm that the setup is correct by running:

`git remote show upstream`

The printout of this command should indicate that the local repository is connected to the upstream.

## Customizing project configuration

The project customizations are achieved by adjusting `nuxt.config.js`, `tailwind.config.js` and `content/settings.json` file.

> Note: each time that `nuxt.config.js` file is modified, you may need to force a reset in the GitHub pages Settings by switching off and on the content in the `Source` section. See below.

### nuxt.config.js

This configuration file is a general Nuxt configuration file. The setup of the project `nuxt.config.js` allows you to add or override the default *theme* config.

An example of how `nuxt.config.js` is structured and adjusted can be find at https://content.nuxtjs.org/themes/docs#nuxtconfigjs

### tailwind.config.js

This project is using the [tailwind](https://tailwindcss.com/) CSS framework for styling.

You can change the default *theme* styling by creating your own `tailwind.config.js` at the root of the project.
The whole *theme* styling is generated around **primary** colour in order to be easily adjustable. Take look at [default](https://github.com/nuxt/content/blob/dev/packages/theme-docs/src/tailwind.config.js) styling if you want to learn how to change fonts, typography or other aspects of web page styling.

### content/settings.json

Use the [settings](https://content.nuxtjs.org/themes/docs#settings) file in the `content` folder to adjust the logo image, Twitter account or default layout of the documentation among the other *theme* parameters.

## Creating content

Writing the content is the main activity. There are several basic aspects of [writing documentation in Markdown](https://content.nuxtjs.org/writing/#markdown) format.

In addition, the Nuxt content documentation project provides additional capabilities for more elaborate presentation elements. The *theme* provides some general Vue.js [components](https://content.nuxtjs.org/themes/docs#components) that you can use directly in your markdown content.

Content should be organized in files based on supported [locals](https://content.nuxtjs.org/themes/docs#locales) and desired [routing](https://content.nuxtjs.org/themes/docs#routing). The *theme* default local is `en` so the documents for this local are located in `./content/en/` folder.

Every document must provide a set of parameters in the document [front-matter](https://content.nuxtjs.org/themes/docs#front-matter) in order for a *theme* to work properly. The **required** ones are:

* title - The title of the page will be injected in meta tags of the HTML page
* description - The description of the page will be injected in meta tags of the HTML page
* *position* - Number used in sorting the documents in the navigation

A list of optional fields is defined [here](https://content.nuxtjs.org/themes/docs#front-matter).

## Deploy

Since this is a Nuxt project it should follow the deployment recommendations from the official Nuxt documentation. There are multiple [deployment targets](https://nuxtjs.org/deployments) explained there but the one for the GitHub pages will be the one we will be using in this document.

To deploy via GitHub Actions, create or adjust the workflow which pushes the generated files from the `dist` folder to your default GitHub Pages branch `gh-pages`.

With an existing workflow, add the following step:

```markdown
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

For a new workflow, paste the following content into a new file called cd.yml in .github/workflows directory:

> Note: Also, in the GitHub repository activate the GitHub Pages by go into `Settings` \ `Pages` and in the `Source` section select:

> ![image](https://user-images.githubusercontent.com/3258579/172229815-0382216f-4b42-4dce-a004-5396143be1b5.png)

> Note: There is no need for you to create the branch `gh-pages`. This branch will be created automatically by the content in the `cd.yml` file.


```markdown
name: cd

on: [push, pull_request]

jobs:
  cd:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest]
        node: [14]

    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Setup node env
        uses: actions/setup-node@v2.1.2
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: yarn

      - name: Generate
        run: yarn generate

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then commit these changes to your repository. Once complete, you'll see your gh-pages branch updated as well as your site.

## Front Matter
### Required fields

- `title` (`String`)
  - The title of the page will be injected in metas
- `description` (`String`)
  - The description of the page will be injected in metas
- `position` (`Number`)
  - This will be used to sort the documents in the navigation

### Optional fields

- `category` (`String`)
  - This will be used to group the documents in the navigation (defaults to `""`)
  - If `category` is falsy or not a string, it is coerced to be an empty string, and isn't renderd in the sidebar.
- `version` (`Float`)
  - Alert users that the page is new with a badge. Once the page is seen, the version is stored in the local storage until you increment it
- `fullscreen` (`Boolean`)
  - Grows the page and hides the table of contents
- `menuTitle` (`String`) <badge>v0.4.0+</badge>
  - Overwrites the title of the page that will be displayed in the left menu (defaults to `title`)
- `subtitle` (`String`) <badge>v0.5.0+</badge>
  - Adds a subtitle under the page title
- `badge` (`String`) <badge>v0.5.0+</badge>
  - Adds a badge next to the page title

### Example

```bash[content/en/index.md]
---
title: 'Introduction'
description: 'Empower your NuxtJS application with this awesome module.'
position: 1
category: 'Getting started'
version: 1.4
fullscreen: false
menuTitle: 'Intro'
---

Introducing my awesome Nuxt module!
```

## Extended Constructors
These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.


### Fenced Code Block
This is how a `Fenced Code Block` is displayed:

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

This is how a `Fenced Code Block` is written in markdown:
~~~md
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
~~~

### Footnote
This is how a `footnote` is displayed:
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

> Note: please go to the bottom of the page to see the [footnote](/#twitter).

This is how a `footnote` is written in markdown:
```md
Here's a sentence with a footnote. [^1]
...
[^1]: This is the footnote.
```
### Strikethrough
This is how a `strikethrough text` is displayed:

~~The world is flat.~~

This is how a `strikethrough text` is written in markdown:

```md
~~The world is flat.~~
```


### Task List
This is how a `task list` is displayed:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

This is how a `task list` is written in markdown:

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

### Alert

This is how an `Info Alert` is displayed:
<alert>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how an `Info Alert` is written:
```md
<alert>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>

```

This is how a `Success Alert` is displayed:
<alert type= 'success'>
Check out an success alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Success Alert` is written:
```md
<alert type= 'success'>
Check out an success alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```


This is how a `Warning Alert` is displayed:
<alert type= 'warning'>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Warning Alert` is written:
```md
<alert type= 'warning'>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```

This is how a `Danger Alert` is displayed:
<alert type = 'danger'>
Check out an danger alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Danger Alert` is written:
```md
<alert type = 'danger'>
Check out an danger alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```

### List

This is how a `list` is displayed:

<list :items="['Item1', 'Item2', 'Item3']"></list>


This is how a `list` is written in markdown:

```md
---
items:
  - Item1
  - Item2
  - Item3
---

<list :items="items"></list>
```

### Badge

This is how a `badge` is displayed:
<badge>v1.2+</badge>

This is how a `badge` is written in markdown:
```md
<badge>v1.2+</badge>
```

### Code Block

This is how a `code-block` is displayed:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  ```

  </code-block>
</code-group>

This is how a `code-block` is written in markdown:

```html
# Backslashes are for demonstration

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  \```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  \```

  </code-block>
</code-group>
```
### Code Sandbox
This is how a `code-sandbox` is displayed:
<code-sandbox src="https://codesandbox.io/embed/nuxt-content-docs-theme-playground-inwxb?hidenavigation=1&theme=dar"></code-sandbox>

This is how a `code-sandbox` is written in markdown:
```md
<code-sandbox src="https://codesandbox.io/embed/nuxt-content-docs-theme-playground-inwxb?hidenavigation=1&theme=dar"></code-sandbox>
```

### Videos

This is how a `video` is displayed:

<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>

This is how a `video` is written in markdown:

```md
<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>
```

### Twitter

This is how a `twitt` is displayed:
<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></a></blockquote>


This is how a `twitt` is written in markdown:

```html
<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></a></blockquote>
```

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### YouTube
This is how a `youtube` reference is displayed:
<YoutubeSubscribeButton identifier="my-subscribe-button" channel="GoogleDevelopers"></YoutubeSubscribeButton>

This is how a `youtube` reference is written in markdown:

```html
<YoutubeSubscribeButton identifier="my-subscribe-button" channel="GoogleDevelopers"></YoutubeSubscribeButton>
```

