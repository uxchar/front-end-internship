//1. Console log the length of the array, console log the 3rd value of the array, console log the 5th vaulue of the array
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
console.log(myAlphabet.length);
console.log();

//2. Declare and initialize an array called Planets with 8 string values
let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
console.log();

// 3. For each item in this array console.log the item
let furniture = ["Table", "Chairs", "Couch"];
console.log(furniture[0]);
console.log(furniture[1]);
console.log(furniture[2]);
console.log();

//4. Loop over the array and if the value is "Math" console log "yuck"
let student1Courses = ["Math", "English", "Programming"];
const courseSearch = () => {
  for (let i = 0; i < student1Courses.length; i++) {
    if (student1Courses[i] === "Math") {
      return "yuck 🤮";
    } else {
      console.log("woohoo! 😁");
    }
  }
};

console.log(courseSearch());
console.log();

//5.  Create an array of 4 fruits, then add 2 fruits (kiwi, grapes) to the end of the array using the method learned. Display the result in the console.
// (Array becomes apple, orange, pear, banana, kiwi, grapes)

let fruits = ["apple", "orange", "pear", "banana"];
fruits.push("kiwi", "grapes");
console.log(fruits);
console.log();

//6. Remove the last value (grapes) from the array in #5. Display the result in the console.
// (Array becomes apple, orange, pear, banana, kiwi)

fruits.pop();
console.log(fruits);
console.log();

//7. Remove the first fruit (apple) from the array in #5. Display the result in the console.
// (Array becomes orange, pear, banana, kiwi)

fruits.shift();
console.log(fruits);
console.log();

//8.  Add a fruit (dragonfruit) to the beginning of the array in #5. Display the result in the console.
// (Array becomes dragonfruit, orange, pear, banana, kiwi)

fruits.unshift("dragonfruit");
console.log(fruits);
console.log();

//9.   Change the fruit 'orange' to be the fruit 'persimmon', and display the result in the console.
// (Array becomes dragonfruit, persimmon, pear, banana, kiwi)

const fruitSearch = () => {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "orange") {
      return (fruits[i] = "persimmon");
    }
  }
};

fruitSearch();
console.log(fruits);
console.log();

//10.  In our console, display the length of our fruit array from #9.  The output should read "My array has____items."

console.log(`My array has ${fruits.length} items.`);
console.log();
// Bonus:  Add a fruit (pomegranate) in the second location of your array. Display the result in the console. (Display should now read dragonfruit, pomegranate, persimmon, pear, banana, kiwi.)

fruits.splice(1, 0, "pomegranate");
console.log(fruits);
console.log();
