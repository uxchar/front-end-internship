//1. Create a loop that counts backwards from 10
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log();

//2. Create an array that contains 6 different animals
const animals = ["elephant", "rhino", "gorilla", "lion", "giraffe", "human 😁"];
console.log(animals);

//3. Loop through the array of animals and console log each animal
for (let i = 0; i >= animals.length; i++) {
  console.log(animals[i]);
}
console.log();

//4. Delete the third animal in the array
animals.splice(2, 1);
console.log(animals);
console.log();

//5. Add a new animal "penguin" to the end of the array
animals.push("penguin");
console.log(animals);
console.log();

//6 Console table the animal array
console.table(animals);
console.log();

//7. Console log the length of the array
console.log(animals.length);
console.log();

//8. Create an program that evaluates if a string is equal to "ping" if it is console log pong
const str = "ping";
if (str === "ping") {
  console.log("pong");
}
console.log();

//9. Create two constants that are any number. Create a third variable that is equal to the sum of the two previous contants
const num1 = 3;
const num2 = 9;
let sum = num1 + num2;
console.log(sum);
console.log();

//10. Console log the numbers 1-100. If the number is even console log "even" if it's odd console log "odd"
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i}, even`);
  } else {
    console.log(`${i}, odd`);
  }
}
console.log();
