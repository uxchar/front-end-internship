// # JS Activity 12 - Functions

// ## 📋 Instructions

// 1. Create a function that takes in a number of minutes. Convert the minutes to seconds and console log the result.
const minToSeconds = (min) => min * 60;
console.log(minToSeconds(4));
console.log();

// 2. Create a function that takes an array and return the first element.
const firstElement = (arr) => arr[0];
console.log(firstElement(["hello", "goodbye", "peace", "see ya"]));
console.log();

// 3. Create a function that takes a number as its parameter and returns `true` if it's less than or equal to zero, otherwise return `false`.
const isNegative = (num) => (num <= 0 ? true : false);
console.log(isNegative(-4));
console.log();

// 4. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. The first parameter of your function should be 2-pointers and the second parameter should be 3-pointers.
const pointsScored = (twoPointers, threePointers) => {
  twoPointers = twoPointers * 2;
  threePointers = threePointers * 3;
  return twoPointers + threePointers;
};
console.log(pointsScored(20, 15));
console.log();

// 5. Create a function that tells you if an array is empty or not. It should take an array as a parameter. If the array is empty return `true` otherwise return `false`.
const isEmpty = (arr) => (arr.length <= 0 ? true : false);
console.log(isEmpty([]));
console.log();
