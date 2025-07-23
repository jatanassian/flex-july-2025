# Variables

### Definition

A way to assign data, assign a value.
A container, or storage for, a value.

### Related Terms

- **const**: a variable that doesn't change (cannot be re-assigned)
- **let**: a variable that can be re-assigned
- **var**: function-scoped variable, can be re-assigned like `let`
- **function-scoped**: only accessible in the function it is defined in
- **block-scoped**: within a set of curly braces

### Examples

```js
/**
 * Writing variables
 */

// Can be re-assigned, function-scoped
var myBool = true;

// Can be re-assigned, block-scoped
let myNum = 3;
myNum = 5;
myNum = false;

// Can't be re-assigned, block-scoped
const name = 'bob';
```
