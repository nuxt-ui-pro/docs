---
title: Overview
description: ''
position: 1
category: Introduction
---
This wiki provides guidelines to build documents that are rendered in HTML or PDF by using two different applications:

* [MD2HTML](./md2html-application) Application, or
* [NUXTJS](./nuxtjs-application) Application

You will learn how to write and configure documents that are rendered by one of these two applications. Depending of the rendering application, the documents are built by a set of markdown, HTML, and customized constructors.

<alert>If the constructors are not representing correctly, the document may not display correctly in HTML or PDF. </alert>


## MD2HTML Application

* `Markdown to HTML` is an application that extracts a commit from a particular `Repository` and `branch` and renders the content as a `PDF` and `HTML.` The App also provides a delta between two commits.
* The advantage of this application is that there is no need to install any code in the GitHub repository. The only requirement is to create one folder per document and insert a file called [index.md](/md2html-setup#index). The `Index` document provides to the `MD2HTML` application some values and the order to assembly the markdown documents. 
* Some markdown constructors were designed to provide special features, e.g. a markdown instruction that embeds an external file into the final document.
* See [MD2HTML App](/md2html-introduction) section.


## NUXTJS Application

* [https://nuxtjs.org/](https://nuxtjs.org/) is an open source platform that can be used to create websites, and render automatically documents stored in a GitHub repository.
* This application requires to install the `Nuxt` code in the same repository as the content to render. The text to be rendered is stored in a particular folder inside of the repository called `content/en`.
* These guidelines are written with this `Nuxt` application. The content can be seen [here](https://github.com/standardshub/markdown_guidelines/tree/master/content/en).
* See [NuxtJS App](/nuxtjs) section.
