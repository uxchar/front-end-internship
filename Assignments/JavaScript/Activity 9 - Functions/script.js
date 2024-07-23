// # JS Activity 9 - Functions

// ## 📋 Instructions

// 1. Create a function called `myFunction` that console logs the text `"Hello World"`

// 2. Execute the function declared above

// 3. Create a function that takes a number as a parameter. This function should return a number that is double the number in the parameter

// 4. Create a function that takes 2 numbers and multiplies them together

// 5. Create a function that takes a string and IF the string is rainy, console logs "Bring an umbrella!"

// 6. Write out what you think this will print:

// ```
// console.log(1)
// console.log(2)

// function callMe() {
//     console.log(3)
// }

// console.log(4)
// blondie()
// callMe()

// function blondie() {
//     console.log(5)
// }

// console.log(6)
// callMe()
// console.log(7)
// ```

function myFunction() {
  return "Hello World";
}
console.log(myFunction());
console.log();

function doubleNum(num) {
  return num * 2;
}
console.log(doubleNum(4));
console.log();

function multiplyNums(a, b) {
  return a * b;
}
console.log(multiplyNums(5, 10));
console.log();

function isRainy(weather) {
  if (weather === "rainy") {
    console.log("Bring an umbrella!");
  } else {
    console.log("Looks like no rain today.");
  }
}
isRainy("rainy");
console.log();

// 1;
// 2;
// 4;
// 5;
// 3;
// 6;
// 3;
// 7;
