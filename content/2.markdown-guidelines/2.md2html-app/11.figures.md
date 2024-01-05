---
title: Images
description: ''
position: 190
category: MD2HTML App
---


## Image in Markdown
This is how an `image` is displayed:

![alt text](https://www.markdownguide.org/assets/images/tux.png)

This is how an `image` is written in markdown:

```md
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```
or
```md
![image](https://user-images.githubusercontent.com/3258579/124534970-30fdbe00-ddca-11eb-8a95-ca7dd82eba41.png)

```

In addition to using this markdown constructor, it is possible to use an `HTML` constructor `<figure>`. This constructor integrates the image in the `Table of Figures` as described in [`Document Structure`](document_structure#indexes)  and applies the same `Cascade Style Sheets` across all the figures. 

Please take a look at the next section for further details.

## Extended Images

Figures MUST be referenced using `HTML`.

* Images need to be uploaded to the `images` folder.
* For MD2HTML assembly correctly the images, each technical document should have its own `images` folder.
* The src parameter controls the location of the `image``.
* If you are using [Inkscape](https://inkscape.org/) for creating `.svg` images, then please use  [`guidelines`](./SVG_Guidelines2.docx.pdf)<base target="_blank"> when creating a new image from scratch.

<alert>When incorporating images created by [Inkscape](https://inkscape.org/), some lines may not be displayed correctly in GitHub. This depends on the image's lines thickness, the SVG scaling factor, and the browser zoom setting.
This problem can be mitigated by increasing the browser zoom setting. </alert>

* The `HTML` code to insert an `image` is:

```html
<figure>
    <img src="images/image-name.svg" alt="Figure-Title">
    <figcaption>Figure-Title</figcaption>
</figure>
```



**DO's**

* Use the `HTML` constructor as listed above.
* Use the same title as a value for `<figcaption>` and `alt` elements.
    * The `alt` value will show the title of the figure in case the figure is not displayed correctly. Search Engines also use it.
* Ensure contiguous text is in a single text box, not multiple text boxes. 
    * If multiple text boxes are used, the figures may render incorrectly in the PDF version.

**DON'Ts**

* DON'T use markdown constructors to insert a `figure`.
* DON'T use parameters to center or to define the `width` and `height` of the `figure`. The `MD2HTML` tool will apply a predefined `CSS` that contains all the necessary styles to ensure the best possible `PDF` quality.
* DON'T insert a link inside the `<figcaption>` element (`Figure-Title`) as the link won't work.
