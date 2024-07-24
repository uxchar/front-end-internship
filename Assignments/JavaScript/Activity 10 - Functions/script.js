// # JS Activity 10 - Functions

// ## 📋 Instructions

// 1. Create a function that takes a string as a parameter. If the string is equal to `ping`, log `pong` to the console.
const pingPong = (str) => (str === "ping" ? "pong" : "nope");
console.log(pingPong("ping"));
console.log();

// 2. Create a function that takes in a number. Console log that number squared
const squareNum = (num) => num * num;
console.log(squareNum(8));
console.log();

// 3. Create a function that console logs every number from `1-20`
const counter = () => {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
};
counter();
console.log();

// 4. Create a function that console logs every odd number from `1-20`
const counterOdd = () => {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};
counterOdd();
console.log();

// 5. Create a function that takes a `number` as a parameter. Console log every number from `1` to that `number`.
const countTo = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
countTo(44);
console.log();
