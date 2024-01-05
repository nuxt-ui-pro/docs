---
title: Formatting
description: ''
position: 120
category: MD2HTML App
---
This section explains how to use constructors to manage document formats.

* Formatting instructions should be done using CSS and NOT `MD` or `HTML.`
* No style should be introduced on any of the HTML constructors.

## Page Break

* To introduce a page break insert:

```md
{:page-break}
```

* Only use at the start of a line.
* Use where markdown is expected.
* Ensure `{:page-break}` is followed by a blank line.

## Horizontal Rule


This is how a `horizontal rule` is displayed:

---
This is how a `horizontal rule` is written in markdown:

```md
---
```
## Ignore Markdown Formatting

* To ignore markdown formatting, insert a  backslash `\` character before the markdown character e.g.

```md
\[RFC6655\]
```

\[RFC6655\]
