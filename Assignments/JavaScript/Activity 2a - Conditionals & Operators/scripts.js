/* 1. Check if the number below is positive or negative.
If it is positive, console.log("The number is positive")
Otherwise, console.log("The number is negative")
    const num = -3

2. Add onto the last question incorporating a new case for when num is equal to zero.


3. Check if the color provided is equal to "purple"
If the color is purple, console.log("It is purple!!!)
Otherwise, do nothing
     const color = "yellow"


4. Declare two variables, x and y, and assign them each a number value. Create an if statement that checks if x is greater than y.
If true, console.log("x is greater than y")

5. Adding on to the last question, create cases for if x is less than y and if x is equal to y. */

const num = -3;

if (num > 0) {
  console.log("The number is positive");
} else if (num === 0) {
  console.log("The number is zero which is neither positive or negative");
} else {
  console.log("The number is negative");
}

const color = "yellow";

if (color === "purple") {
  console.log("It is purple!!!");
}

const x = 4;
const y = 2;

if (x === y) {
  console.log("x is equal to y");
} else if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}
