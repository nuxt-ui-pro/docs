---
title: Paragraph
description: ''
position: 150
category: MD2HTML App
---
This section describes how to use `paragraphs` constructors in markdown documents and how those constructors are rendered in `PDF` and `HTML`.

* Use the "Enter" key to separate two paragraphs.
* Inside of a `HTML` table use the element `<p>` text, text `</p>`.
* Do not use `<p>` tag in normal body text unless the paragraph is inside of a table (see above).

## Blockquote

This is how a `blockquote` is displayed:

> This is a blockquote text.

This is how a `blockquote` is written in markdown:

```md
> This is a blockquote text.
```
## Code
This is how `code` is displayed:

`code`

This is how `code` is written in markdown:

```md
`code`
```

## Preformatted Text

* Use (```) to indicate the beginning and end of `preformatted` text block.
* Use (```) with caution. Line breaks are not automatically inserted so in `PDF` text may not be fully displayed.
* Use `preformated` text, when you want to present the information without alignments, see below.

This is how `preformatted` text is displayed:

```
Text in this position
    other text dented to the right
  other text dented to the left

          other text
```

Preformatted text written in markdown:

````
```md
Text in this position
    other text dented to the right
  other text dented to the left
```
````

## Code With Syntax Highlighting

* To add `syntax with highlighting` text, specify a code type `keyword` next to the backticks <code>```xml</code> before the fenced code block.

* This is how, e.g., `xml` code block is displayed:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LWM2M xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" 
       xsi:noNamespaceSchemaLocation=
           "http://openmobilealliance.org/tech/profiles/LWM2M.xsd" >
                <Object ObjectType="MODefinition">
                                <Name>MyDevice</Name>
                                <ObjectID>44</ObjectID>
                                <LWM2MVersion>1.1</LWM2MVersion>
               </Object>
</LWM2M>
```
This is how XML code block is written in markdown:

````
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LWM2M xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" 
       xsi:noNamespaceSchemaLocation=
           "http://openmobilealliance.org/tech/profiles/LWM2M.xsd" >
                <Object ObjectType="MODefinition">
                                <Name>MyDevice</Name>
                                <ObjectID>44</ObjectID>
                                <LWM2MVersion>1.1</LWM2MVersion>
               </Object>
</LWM2M>
```
````

<alert>
For the list of keywords see https://highlightjs.org/ e.g. Java, JSON, XML. The text language should be indicated in order to enable this syntax highlighting functionality.
</alert>

<alert type='warning'>
Warning:
Syntax highlighting may be displayed differently after md is converted to HTML & PDF.
</alert>

## Line Breaks

### Single Line Break	
* This is how a line break is inserted in `HTML`.

End a line with two or more spaces or `(<br>)`, and then type return to create a line break or new line.

```html
<br>
```

**DO's**  
* Add two spaces after first paragraph to separate from the next.

* Add HTML tag `<br>` after first paragraph to separate from the next.

**DON'Ts**  
* Type a backslash `\` between paragraphs. 

* Nothing between adjacent paragraphs. 

Example:
```md
Paragraph one. <br>

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.
```
* This is how it is displayed:

Paragraph one.

Paragraph two. 
Another line immediately afterwards will be displayed starting on the same line as paragraph two.

## Non-breaking Space

* To insert a non-breaking space use:

```md
&nbsp;
```

For example:

```md
Resource&nbsp;Instance
```
* This is how it is rendered:

Resource&nbsp;Instance
