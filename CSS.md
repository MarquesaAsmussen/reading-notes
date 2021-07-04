# Read: 05 - CSS
**topics**
* [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)

* [How to Add CSS](https://www.w3schools.com/css/css_howto.asp)

* [CSS Color Property](https://www.w3schools.com/cssref/pr_text_color.asp)

* [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* [Myers Web Reset Stylesheet](https://meyerweb.com/eric/tools/css/reset/)

## What is CSS?

 **CSS** (Cascading Style Sheets): "a declarative language that controls how webpages look in the browser. The browser applies CSS style declarations to selected elements to display them properly. A style declaration contains the properties and their values, which determine how a webpage looks."
    - [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS)

## How to Add CSS

* **External CSS** - external file referenced within **< link >** element in the **< head >** section of HTML file; affects entire site

* **Internal CSS** - used if one single HTML page has a unique style. The internal style is defined inside the **< style >** element, inside the **< head >** section.

* **Inline CSS** - used to apply a unique style for a single element. Added to the relevant element in the **< body >** section.

* **Multiple Style Sheets** - If some properties have been defined for the same selector (element) in different style sheets, the value from the *last* read style sheet will be used.
  * If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange".

  * However, if the internal style is defined before the link to the external style sheet, the <h1> elements will be "navy".

* **Cascading Order** - Styles "cascade" into a new "virtual" style sheet with the following prioritization:
  1. Inline style (inside an HTML element)
  2. External and internal style sheets (in the head section)
  3. Browser default

  As is shown, browser default will be applied first, unless there is an external or internal style sheet (which will be applied, unless there is an inline style).
  *Inline style is the __"black queen"__* # :princess: :chess_pawn: :crown:

## CSS Color Property

* **"color" property** - specifies text color


## CSS Reference

## Myers Web Reset Stylesheet

back to [main page](README.md)