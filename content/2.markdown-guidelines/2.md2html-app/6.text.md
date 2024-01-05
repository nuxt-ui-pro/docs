---
title: Text
description: ''
position: 140
category: MD2HTML App
---

This section describes `markdown` and `HTML` constructors that can be used in documents stored in GitHub. These documents can be rendered in GitHub or by using the  `MD2HTML application`. 

## Markdown Text
### Bold
This is how `bold` text is displayed:

**MD2HTML**

* This is how a `bold` text is written in markdown:

```md
**MD2HTML**
```
or

```md
__MD2HTML__
```
* This is how the text is displayed:

__MD2HTML__

### Italic

* This is how an `italicized` text is written in markdown:

```md
*MD2HTML*
```
or

```md
_MD2HTML_
```

* This is how an `italicized` text is displayed:

_MD2HTML_

### Bold & Italic

* This is how `combined bold and italic` text is written in markdown:

```md
**MD2HTML and _MD2HTML_**
```
* This is how it is displayed:

**MD2HTML and _MD2HTML_**

### Strikethrough

* Strikethrough uses two tildes:

```md
~~MD2HTML.~~
```
* This is how it is displayed:
~~MD2HTML~~

## HTML Text

Markdown text inside of an HTML constructor will render incorrectly.

<alert type="warning">These HTML tags are only used when the text is inside an HTML table.</alert>

### Bold
* This is how `strong,` the equivalent to `bold` in markdown, is written in `HTML.`

```html
<strong>MD2HTML</strong>
```
* This is how bold text is rendered in HTML:
<strong>MD2HTML</strong>

### Italic 
* This is how `emphasized` text, the equivalent to `italic` in markdown, is written in `HTML.`

```html
<em>MD2HTML</em>
```
* This is how it is displayed:
<em>MD2HTML</em>

### Bold & Italic 
* This is how `strong` and `emphasized` text, the equivalent to `bold` and `italic` in markdown, is written in `HTML.`

```html
<strong>MD2HTML and <em>MD2HTML</em></strong>
```
* This is how it is displayed:
<strong>MD2HTML and <em>MD2HTML</em></strong>

### Highlighted
* This is how `highlighted` text is written in `HTML`:

```html
<mark>MD2HTML</mark>
```
* This is how it is rendered:

<mark>MD2HTML</mark>

### Strikethrough
* This is how `strikethrough` text is written in `HTML.`
```html
<del>MD2HTML</del>
```
* This is how it is rendered in `HTML`:
<del>MD2HTML</del>

### Small	
* This is how `small` text is written in `HTML`:
```html
<small>MD2HTML</small>
```
* This is how it is rendered:
Compared with MD2HTML, <small>MD2HTML</small> looks like this.

### Subscripted
* This is how `subscripted` text is written in `HTML`:
```html
<sub>MD2HTML</sub>
```
* This is how it is rendered:
Compared with other text <sub>MD2HTML</sub>, this is how it looks.

### Superscripted
* This is how `superscripted` text is written in `HTML`:
```html
<sup>MD2HTML</sup>
```
* This is how it is rendered:
Compared with other text <sup>MD2HTML</sup>, this is how it looks.