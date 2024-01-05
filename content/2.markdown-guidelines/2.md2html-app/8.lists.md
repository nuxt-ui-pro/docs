---
title: Lists
description: ''
position: 160
category: MD2HTML App
---

## Markdown Lists
### Ordered List
* This is how an `ordered list` is displayed:
1. First item
2. Second item
3. Third item

* This is how an `ordered list` is written in markdown:
```md
1. First item
2. Second item
3. Third item
```

### Unordered List
* This is how an `unordered list` is displayed:

- First item
- Second item
- Third item

* This is how an `unordered list` is written in markdown:
```md
- First item
- Second item
- Third item
```

### Nested List

* You can `nest` a list by indenting two spaces to the right e.g.

1. First item
2. Second item
   * Nested item 1
   * Nested item 2
     1. Nested item 1
     2. Nested item 2
3. Third item

* This is how a `nested list` is written in markdown:
```md
1. First item
2. Second item
   * Nested item 1
   * Nested item 2
     1. Nested item 1
     2. Nested item 2
3. Third item
```
## HTML Lists

### Ordered List
* These are the values to rendering `ordered lists`: 
  * type="1" - numbers (default)
  * type="A" - uppercase letters
  * type="a" - lowercase letters
  * type="I" - uppercase roman numbers
  * type="i" - lowercase roman numbers

* This is an `ordered list` written in HTML:
```html
<ol type = "1">
    <li>Requirements Document</li>
    <li>Core TS</li>
    <li>Transport TS</li>
</ol>
```
* This is how it is displayed:

<ol type = "1">
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ol>

### Unordered List

* This is `unordered list` written in HTML:
```html
<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>
```
* This is how it is displayed:

<ul>
  <li>Requirements Document</li>
  <li>Core TS</li>
  <li>Transport TS</li>
</ul>

### Nested Lists

* This is an example of `nested list` (list inside of list) written in HTML:

```html
<ul>
  <li>Requirements Document
     <ul>
        <li>Doc 1</li>
        <li>Doc 2</li>
      </ul>
  </li>
  <li>Core TS
     <ol>
      <li>TS 1</li>
      <li>TS 2</li>
     </ol>
  </li>
  <li>Transport TS</li>
</ul>
```
* This is how it is displayed:

<ul>
  <li>Requirements Document
     <ul>
        <li>Doc 1</li>
        <li>Doc 2</li>
      </ul>
  </li>
  <li>Core TS
     <ol>
      <li>TS 1</li>
      <li>TS 2</li>
     </ol>
  </li>
  <li>Transport TS</li>
</ul>
