// # JS Activity 11 - Functions

// ## 📋 Instructions

// 1. Write a function that multiplies a number by 2 and divides it by 3
function multiplyAndDivide(num) {
  return (num * 2) / 3;
}
console.log(multiplyAndDivide(6));
console.log();

// 2. Write the function from #1 as a fat arrow function
const multiplyAndDivideArrow = (num) => (num * 2) / 3;
console.log(multiplyAndDivideArrow(6));
console.log();

// 3. Write a function that takes a name, age, and height and writes a console log using all of them
const info = (name, age, height) =>
  `${name} is ${age} years old and is ${height} ft tall.`;
console.log(info("Amy", 32, "5'10"));
console.log();

// 4. Write two functions, `add(a, b)` and `multiply(a, b)` that each take two variables and returns the summed or multiplied value

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(8, 16), multiply(8, 16));
console.log();

// BONUS: Write a function that uses the functions from #4 (add and multiply) to take a value and adds 2 and multiplies by 4. So, `addTwoMultiplyByFour(2)` would return `16` since `((2 + 2) x 4)`
const addAndMultiply = (num) => (num + 2) * 4;
console.log(addAndMultiply(10));
console.log();
