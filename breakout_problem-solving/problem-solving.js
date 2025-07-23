/**
 * Sums two numbers
 *
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * @return {number} Sum of the two parameters
 */
const sumTwoNums = function (num1, num2) {
  // Check num1 and num2 are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return;
  }

  return num1 + num2;
};

console.log('sumTwoNums(1, 2) =', sumTwoNums(1, 2)); // Expecting: 3
console.log('sumTwoNums(1, "hello") =', sumTwoNums(1, 'hello')); // Expecting: undefined
