# Functions

## Definition

Reusable code, a block of code that performs an action; container for code

## Related terms

- **non-primitive**: objects or functions - complex data that is not stored or accessed by value, but instead by reference
- **parameters**: inputs for our functions; placeholders for arguments
- **arguments**: the value we pass into a function during execution
- **return**: output from our function (when we run our function, this value is given back), defaults to `undefined`
- **anonymous function**: a function with no name
- **hoisting**: pushes certain code to the top, scans for functions DECLARATIONS before running our code
- **callback**: a function passed to another as an argument / parameter

## Examples

```js
/**
 * Writing functions
 */

// Declaration-based functions are hoisted; we can call them before they are defined in our code
myFunction(3, 'hello'); // Values passed in are arguments

// Declaration
function myFunction(param1, param2) {
  // Placeholder names are parameters
  // Logic goes here
  return; // Returns undefined by default
}

// Expression
const myOtherFunction = function () {
  // We store an anonymous function in a variable
  // Logic goes here
  return; // Returns undefined by default
};

// Arrow function
const myArrowFunction = () => {
  // We store an anonyous function in a variable
  // Logic goes here
  return; // Returns undefined by default
};

// Callback example
const myHigherOrderFunction = function (otherFunction) {
  otherFunction();
};

myHigherOrderFunction(function () {
  console.log('Hello');
});
```
