---
title: Table
description: ''
position: 170
category: MD2HTML App
---

## Markdown Tables

* This is how a `table` is displayed:

| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   | Text        |

* This is how a `table` is written in markdown:

```md
| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   |       Text  |
```

<alert type="warning">If the table is large with `cells` merged among rows and columns, then it is advisable to create tables using `HTML`.
Also, if it is important that the tables are incorporated in the Index of the document, then you must construct your tables using `HTML`.</alert>

## HTML Tables

* It is recommended to build `tables` using HTML constructors only. This is because tables will be added automatically to the `Index` section, as long as the `table` is defined with the `caption` property.

```html
<table>
  <caption>Table Title</caption>
  <thead>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th><th>Header3</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Cell 1-1</td> <td>Cell 1-2</td> 
        <td>Cell 1-3</td>
    </tr>
    <tr>
        <td colspan="2">Cell 3-1 & 3-2</td> 
        <td>Cell 3-3</td>
    </tr>
    <tr>
        <td>Cell 4-1</td> 
        <td rowspan="2">Cell 4-2 & 5-2</td> 
        <td>Cell 4-3</td>
    </tr>
    <tr>
        <td>Cell 5-1</td> 
        <td>Cell 5-2</td>
    </tr>
</tbody>
</table>
```

* Use `<caption>` to provide table title or name
* Use `<thead>` to define the title of the columns
* Use `<rowspan>` to merge cells on the same column among different raws
* Use `<colspan>` to merge cells on the same raw among different columns
* Use `<class="xxx">` to indicate the width of each column
* Inside of HTML table is not possible to use markdown constructors. They won't display correctly. If you need to add text formatting such as (e.g., strong|bold or emphasis|italic), then refer to the [`text`](text) section of this document.