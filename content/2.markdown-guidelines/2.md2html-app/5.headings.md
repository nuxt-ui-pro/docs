---
title: Headings
description: ''
position: 130
category: MD2HTML App
---
* The highest section title level starts with two #s, i.e. `##` (level 1)

* It is recommended to use section titles up to `#####` (level 4), with an upper limit of `######` (level 5)
* DON'T start the section title with one `#`. Otherwise, the MD2HTML tool will fail to build the document.
* DON'T use more than `######,` i.e., level 5 (as level 6 and above will not be rendered in PDF and are not allowed).
* DON'T duplicate any of the section, figures, or tables titles. This will create problems with any reference links due to the duplications.
* DON'T add a section, figure, or table numbers manually.

## Titles
This is how a `title` is displayed:
![image](https://user-images.githubusercontent.com/3258579/124534360-f6dfec80-ddc8-11eb-8735-db82b5d5cb41.png)

This is how a `title` is written at each level:

```md
## Title Level 1
### Title Level 2
#### Title Level 3
##### Title Level 4
###### Title Level 5
```
<alert> The `level 1` header contains two `##` instead of one `#`. The MD2HTML will fail to build the PDF and HTML version of the document if the title contains one `#`.</alert>

<alert> The MD2HTML app only displays titles from `level 1` to `Level 5`.</alert>

## Section Numbers
* Section numbers don't exist in the markdown version of the documents

## Appendixes

* After inserting an `appendix title`, subsequent subsections  will be labeled with the `appendix` letter prefix by default:

```md
        ## Appendix title
        ### Subsection heading title
```
Example:

**Appendix A. title**

**A.1 Subsection heading title**

