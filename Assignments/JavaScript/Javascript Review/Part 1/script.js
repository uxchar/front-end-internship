// Part 1

//1. Create a variable that is a string with a value of your name
const name = "Chauncey";
console.log(name);
console.log();

//2. Create a variable that is a number with a value of 20
const num = 20;
console.log(num);
console.log();

//3. Write a JavaScript program to get the length of a JavaScript array.
const arr = ["green", "blue", "purple"];
const arrLength = () => {
  if (arr != []) {
    return arr.length;
  }
};
console.log(arrLength());
console.log();

//4. Create an if statement so that if a string is equal to "cold" then log to the console "bring a jacket"
const str = "cold";
const isCold = () => {
  if (str === "cold") {
    return "bring a jacket.";
  }
};
console.log(isCold());
console.log();

//5. Create an if statement so that if a number is negative (less than 0) it will console log "the number is negative" if not console log "the number is positive."
const anotherNum = -1;
const isNegative = () => {
  if (anotherNum < 0) {
    return "the number is negative.";
  } else {
    return "the number is positive.";
  }
};
console.log(isNegative());
console.log();

//6. Create a switch statement that takes in a day of the week. If the day is Monday-Friday console log "its a weekday" if it's Saturday or Sunday console log "it's the weekend"
let day = "tuesday";
switch (day) {
  case "monday":
    console.log("it's a weekday.");
    break;
  case "tuesday":
    console.log("it's a weekday.");
    break;
  case "wednesday":
    console.log("it's a weekday.");
    break;
  case "thursday":
    console.log("it's a weekday.");
    break;
  case "friday":
    console.log("it's a weekday.");
    break;
  case "saturday":
    console.log("it's the weekend.");
    break;
  case "sunday":
    console.log("it's the weekend.");
    break;
  default:
    console.log("input typed not recognized");
}
console.log();

//7. Write a function to reverse a number. Show the result in the console.
// Breakdown: toSting turns number into String, split then splits characters into an Array,
// reverse method then reverses that Array, and the join method joins the characters back into a string.

// parseFloat method then takes the string and converts it back into a number and lastly the Math.sign
// mulitplies the new number by the sign of the orignal number.

const reverseNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reverseNum(5783));
console.log();

//8. Create a for loop that console logs the string "pizza" 8 times
const printPizza = () => {
  for (let i = 0; i < 8; i++) {
    console.log("pizza");
  }
};

printPizza();
console.log();

//9.  Write a JavaScript program to list the properties of a JavaScript object.
const book = {
  author: "",
  title: "",
  numofPages: null,
  genre: "",
};

//learned the for in loop today from mdn web docs
const listProps = (obj) => {
  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
};
listProps(book);
console.log();

//10.  Create a constant that is a boolean that has a value of false
const isTrue = false;
console.log(isTrue);
console.log();

//11.Create a variable that is equal to the number 0. Create a for loop that runs 10 times. Everytime the loop runs add 1 to the variable. After the loop runs console log the value of the variable
let counter = 0;
const countTo10 = () => {
  for (let i = 0; i < 10; i++) {
    counter++;
  }
  console.log(counter);
};
countTo10();
console.log();

//12. Create a loop that runs from 0-5. If the number is 1, 3, or 5 console log "odd number". If the number is 0, 2, 4 console log "even number"
const countTo5 = () => {
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      console.log(`${i} even number`);
    } else {
      console.log(`${i} odd number`);
    }
  }
};
countTo5();
console.log();

//13.  Create a while loop that console logs all the numbers from 0-100
let i = 1;
while (i <= 100) {
  console.log(i++);
}
console.log();
//14. Write a function that generates a random number

const numGenerator = () => {
  console.log(Math.round(Math.random() * 1000));
};
numGenerator();
console.log();

// BONUS:  Write a function that checks if a number is a prime number.  If it is it console log should show '____ is a prime number.'  If it is not, console should show   '____ is not a prime number.'
