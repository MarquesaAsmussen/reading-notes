# Read: 05 - CSS

 topics

* [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
* [How to Add CSS](https://www.w3schools.com/css/css_howto.asp)
* [CSS Color Property](https://www.w3schools.com/cssref/pr_text_color.asp)
* [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Myers Web Reset Stylesheet](https://meyerweb.com/eric/tools/css/reset/)

## What is CSS?

 **CSS** (Cascading Style Sheets): "a declarative language that controls how webpages look in the browser. The browser applies CSS style declarations to selected elements to display them properly. A style declaration contains the properties and their values, which determine how a webpage looks."
    - [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS)
    ![css selector path](https://res.cloudinary.com/practicaldev/image/fetch/s--Uvc4p-Vs--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/edojfcbz6sr7j0b2l6v1.jpg)

## Basic CSS Terms

 **element** : in an HTML document, everthing between an opening and a closing tag

 *ex.*: < h1 >hello, world!</ h1 >
 *everything from the first "<" to the last ">" is an element. In this case, it is an h1, with the **content** "hello, world!"*

 **selector** : selects the HTML element that we are going to style

 **declarations** : property and value pairs, set inside of curly braces
 *in the example below, everything between the 2 {} are declarations*

 **property** : specifies which aspect of the selected element we want to affect

 **value** : specifies how we want to affect the selected element

*ex. 1*:
*selector* {
*property*: *value*;
*property*: *value*;
*property*: *value*;
}

*ex. 2*:
h1 {
    color: red;
    text-align: center;
    margin: 5px;
}

## How to Add CSS

* **External CSS** - external file referenced within **< link >** element in the **< head >** section of HTML file; affects entire site

* **Internal CSS** - used if one single HTML page has a unique style. The internal style is defined inside the **< style >** element, inside the **< head >** section.

* **Inline CSS** - used to apply a unique style for a single element. Added to the relevant element in the **< body >** section.

* **Multiple Style Sheets** - If some properties have been defined for the same selector (element) in different style sheets, the value from the *last* read style sheet will be used.
  * If the internal style is defined after the link to the external style sheet, the < h1 > elements will be "orange".

  * However, if the internal style is defined before the link to the external style sheet, the < h1 > elements will be "navy".

* **Cascading Order** - Styles "cascade" into a new "virtual" style sheet with the following prioritization:
  1. Inline style (inside an HTML element)
  2. External and internal style sheets (in the head section)
  3. Browser default

  As is shown, browser default will be applied first, unless there is an external or internal style sheet (which will be applied, unless there is an inline style).
  *Inline style is the __"black queen"__* 👑 ♟️ 👸

## CSS Color Property

* **"color" property** - specifies text color

*can be defined using color codes, such as:* **color keywords** (red), **RGB/RGBA** (rgb(120, 80, 200) or rgb(100%, 100%, 100%)), **hexadecimal (hex)** (#000000), **HSL/HSLA**(), **LCH**(), or **the _color()_ functional notation** (for predefined or custom color spaces)

* **CSS Syntax** - color: *color*|initial|inherit;

* *[color](https://www.w3schools.com/cssref/css_colors_legal.asp)* : Specifies the text color.
* [initial](https://www.w3schools.com/cssref/css_initial.asp): Sets this property to its default value
* [inherit](https://www.w3schools.com/cssref/css_inherit.asp): Inherits its property from its parent element.

## CSS Reference

An alphabetical index of all of the standard CSS properties, pseudo-classes, pseudo-elements, data types, functional notations and at-rules can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

## Myers Web Reset Stylesheet

A link to a reset stylesheet can be found [here](https://meyerweb.com/eric/tools/css/reset/).
This can be used as a jumping-off point to reset your style sheet to a generic baseline.

back to [main page](README.md)
