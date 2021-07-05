# Read: 05 - Dynamic web pages with JavaScript

topics

* [What is JavaScript?](#what-is-javascript?)
* [Learning References](#learning-references)
  * [For complete beginners](#for-complete-beginners)
  * [JavaScript Guide](#javascript-guide)
  * [Intermediate](#intermediate)
  * [Advanced](#advanced)
* [Reference](#reference)
* [Tools and Resources](#tools-and-resources)
* [Input and Output in JS](#input-and-output-in-js)

## What is JavaScript?

**JavaScript** : "a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."
[MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

   Or, in the Common Tongue 😉 : a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.[MDN Web Docs: JavaScript — Dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

## Learning Tutorials

Click [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)] to access the full version on the below JS tutorials

### For complete beginners

This MDN module includes:

1. JS first steps
2. JS building blocks
3. JS objects
4. Asynchronous JS
5. Client-side web APIs

### JavaScript guide

*A detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.

### Intermediate

This MDN module includes:

1. Understanding client-side JS frameworks
2. A re-intro to JS
3. JS data structures
4. Equality comparisons and sameness
5. Closures

### Advanced

This MDN module includes:

1. Inheritance and the prototype chain
2. Strict mode
3. JS typed arrays
4. Memory Management
5. Concurrency model and event loop

## Reference

* [Standard Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [Statements and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

## Tools and Resources

* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [JavaScript Shells](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Shells)
* [Learn JavaScript](https://learnjavascript.online/)
* [TogetherJS](https://togetherjs.com/)
* [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
* [JS Fiddle](https://jsfiddle.net/)
* [Plunker](https://plnkr.co/)
* [JSBin](https://jsbin.com/?html,output)
* [Codepen](https://codepen.io/)
* [StackBlitz](https://stackblitz.com/)
* [RunJS](https://runjs.app/)

## Input and Output in JS

Creating applications via HTML is cumbersome and difficult to read. The solution to this was to create templating engines.
Basically, a "template" would be an **HTML snippet** with some **place holders** and then a **function call** that gets the HTML snippet (the template) as a **parameter**, and gets several key-value pairs. The function then returns a *new* **HTML snippet** in which the **place holders** were *replaced* by the value of the appropriate key. [Input Output in plain JavaScript](https://code-maven.com/input-output-in-plain-javascript)

## JavaScript Terms

**variable** :  a container for storing data (values).

>*ex.*:
>var x = 5;
>var y = 6;
>var z = x + y;

From the example above, you can expect:

* x stores the value 5
* y stores the value 6
* z stores the value 11

**identifier** : unique names to identify JS variables. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter
* Names can also begin with $ and _ (but we will not use it in this tutorial)
* Names are case sensitive (y and Y are different variables)
* Reserved words (like JavaScript keywords) cannot be used as names

**assignment operator** : the equal sign (=) is an "assignment" operator, not an "equal to" operator.
  *"equal to"* is written *"=="* in JS

**declaring variables** : creating a variable is called "declaring".
You can use "var", "let", or "const" (var carName;). After the declaration, the variable has the value of "undefined".
  *It's a good programming practice to declare all variables at the beginning of a script*

  __*undefined*__ : varibles can be declared w/o a value, and wouldhave the value *"undefined"*. After the execution of a statement, a variable will be undefined.

  **redeclaring** : if a variable is redeclared, it will not lose it's value.
    *ex.*
    var carName = "Volvo";
    var carName;

### JavaScript Data Types

JavaScript variables can hold **numbers** like 100 and text values like **"John Doe"**.

In programming, text values are called text __*"strings"*__.

*Strings are written inside double ("") or single ('') quotes. Numbers are written without quotes. If you put a number in quotes ('5' or 'five'), it will be treated as a text string.*

### JavaScript Arithmetic

As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

* You can also add strings (""), but strings will be concatenated.
  *If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.*

back to [main page](README.md)
