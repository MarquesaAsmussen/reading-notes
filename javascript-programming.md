# Read: 07 - Programming with JavaScript

topics

* [Expressions and Operators](#expressions-and-operators)
  * [Operators](#operators)
  * [Expressions](#expressions)
* [Functions](#functions)
* [Control flow](#control-flow)

## [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

### Operators

**operator** : JavaScript has the following types of operators.

* Assignment operators
  * Return value and chaining
  * Destructuring
* Comparison operators
* Arithmetic operators
* Bitwise operators
  * Bitwise logical operators
  * Bitwise shift operators
  * Logical operators
  * Short-circuit evaluation
* String operators
* Conditional (ternary) operator
* Comma operator
* Unary operators
  * delete
  * typeof
  * void
* Relational operators
  * in
  * instanceof

#### Operator precedence

A detailed table, complete with links to additional details about each operator, may be found [here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

### Expressions

**expression** : any valid unit of code that resolves to a value. JavaScript has the following expression categories:

* Arithmetic
* String
* Logical
* Primary expressions
* Left-hand-side expressions

#### Primary expressions

Basic keywords and general expressions in JavaScript.

* this

##### Grouping operator

The grouping operator ( ) controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.

#### Left-hand-side expressions

Left values are the destination of an assignment.

* new
* super

## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)

**function** : A function in JavaScript is ****similar to a procedure—a set of statements that performs a task or calculates a value. To qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

### Defining functions

#### Function declarations

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

* The name of the function.
* A list of parameters to the function, enclosed in parentheses and separated by commas.
* The JavaScript statements that define the function, enclosed in curly brackets, {...}.

#### Function expressions

### Calling functions

Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

### Function scope

### Scope and the function stack

#### Nested functions and closures

#### Preservation of variables

#### Multiply-nested functions

#### Name conflicts

### Closures

### Using the arguments object

### Function parameters

#### Default parameters

##### Without default parameters (pre-ECMAScript 2015)

##### With default parameters (post-ECMAScript 2015)

#### Rest parameters

### Arrow functions

#### Shorter functions

#### No separate "this"

### Predefined functions

JavaScript has several top-level, built-in functions:

**eval()**
The eval() method evaluates JavaScript code represented as a string.

**uneval()**
The uneval() method creates a string representation of the source code of an Object.

**isFinite()**
The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

**isNaN()**
The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

**parseFloat()**
The parseFloat() function parses a string argument and returns a floating point number.

**parseInt()**
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

**decodeURI()**
The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

**decodeURIComponent()**
The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

**encodeURI()**
The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

**encodeURIComponent()**
The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

**escape()**
The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead.

**unescape()**
The deprecated unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Because unescape() is deprecated, use decodeURI() or decodeURIComponent instead.

## [Control Flow](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)

**control flow** : the order in which the computer executes statements in a script.

back to [main page](README.md)
