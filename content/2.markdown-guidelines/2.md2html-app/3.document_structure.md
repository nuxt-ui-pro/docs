---
title: Document Structure
description: ''
position: 110
category: MD2HTML App
---

This section describes the markdown constructors that define the document's structure.

## Front Page
The document `index.md` or `index.yaml` contain the information displayed on the document's first page. In version MD2HTML v2.0, these properties are extended. See [Setup Index File](/md2html-setup) for further details.

## Legal Disclaimer
### MD2HTML v1.x
In this version, the legal disclaimer text is inserted automatically by the md2html tool inside the TS document when generating the HTML document.

<alert> OMA-License.txt file is added to the repository as a reference. The MD2HTML tool uses its License file.</alert>

### MD2HTML v2.x
In this version of the tool, the license document is added to the list of files. See [Setup Index File](/md2html-setup) for further details. 

## Header
The MD2HTML tool automatically adds a header to generated PDFs.

## Footer
The MD2HTML tool automatically adds a footer to generated PDFs.

## Indexes

* Table of Content
* Table of Tables
* Table of Figures

This content doesn't exist in the markdown documents.
It is constructed automatically by the conversion tool, and only appears in the HTML & PDF generated documents.

* Choose unique titles for the sections, subsections, tables, and figures.
* Avoid using special characters in the titles. It makes it difficult to establish links inside of the document to a particular section.
* Try to create titles for sections, figures, and tables that are short and without special characters.


## Scope

## References

### Normative References

### Informative References

## Terminology and Conventions
### Conventions
The features described in this section are only available in MD2HTML v2.1.x. 
Previous versions cannot render `definitions` and `descriptions` features as described here.



* The first step is to create a section on the markdown document to store `definitions` and `abbreviations`. We recommend calling this section `Terminology and Conventions`. 
* This new section should contain two subsections:
   * `Definitions`, and 
   * `Abbreviations`.

### Definitions
This is how a `definition` section is defined on the markdown document:

```html

 <dl data-caption="Definitions" data-term-column-title="Term" data-description-column-title="Description">
        <dt>Git</dt>
        <dd>Git is a distributed version control system that tracks changes in any set of text files.</dd>
        <dt>Firewall</dt>
        <dd>In computing, a firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.</dd>
 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.

This is how a `definition` section is displayed on `HTML` or `PDF`:

<figure>
<embed style="width: 100%" src="images/definition-table-example.png" alt="Definitions">
    <figcaption></figcaption>
</figure>

This is how a singular or plural `definition` terms are used in a section text.

```html
bla, bla, bla, 
<a>Git</a> is a free and open-source distributed version control system designed to handle everything from small to very large projects quickly and efficiently.
bla, bla, bla. 
Network security is monitored by <a title= "firewall">firewalls</a> which control ...
```
* To use a `definition` in singular, insert the `definition` term inside of the anchor `<a>`, e.g., `<a>firewall</a>`.
* To use a `definition` term in plural, insert the `title` property inside of the anchor element, and the plural inside of the anchor `<a>`, e.g. `<a title= "firewall">firewalls</a>`.
* When positioning a `mouse pointer` over the `definition` word, a `tooltip` is displayed with the `definition` in singular and a click on the word will render the page on the `definition` term.


This is how a `definition` term is displayed on `HTML` and `PDF` documents.

![image](https://user-images.githubusercontent.com/3258579/217131695-5f364607-2a04-47bd-a538-d223b2be895e.png)


### Abbreviations
This is how an `abbreviation` section is written on markdown documents:

```html
 <dl data-caption="Abbreviations" data-term-column-title="Term" data-description-column-title="Description">
        <dt>SH</dt>
        <dd>Standards Hub</dd>
        <dt>TS</dt>
        <dd>Technical Specification</dd>
        <dt>AD</dt>
        <dd>Architecture Document</dd>
 </dl>
```
Where:
    `<dl>` = definition list;
    `<dt>` = definition title;
    `<dd>` = definition description.

This is how an `abbreviation` section is displayed on `HTML` or `PDF`.

<figure>
<embed style="width: 100%" src="images/abbreviation-table-example.png" alt="Abbrevations">
    <figcaption></figcaption>
</figure>

This is how a singular and plural `abbreviation` terms are used in a section text.

```html
bla, bla, bla, 
bla, bla, <abbr>SH</abbr> is a Service Management Association that provides Standards Organizations with an end-to-end service, from organization formation to publication of the organization outputs.
such as <abbr title= "TS">TS's</abbr> and <abbr title= "AD">AD's</abbr>
```
* To use an `abbreviation` term in singular, insert the `abbreviation_word` inside of the element, e.g. `<abbr>TS</abbr>`.
* To use an `abbreviation` term in plural, insert the `title` property with a singular value and the plural value inside of the `<anchor>`, e.g. `<abbr title= "TS">TS's</abbr>`.
* When positioning a `mouse pointer` over the `abbreviation` word, a `tooltip` is displayed with the `abbreviation` expanded.

* This is how an `abbreviation` term is displayed on `HTML` and `PDF` document.

![image](https://user-images.githubusercontent.com/3258579/217131339-f6f4be08-4319-41af-bbc9-f6da5970a248.png)

<alert>MD2HTML uses the same constructors `dl`, `dt`, `dd` to write a <i>definition</i> or an <i>abbreviation.</i></alert>

## Introduction

