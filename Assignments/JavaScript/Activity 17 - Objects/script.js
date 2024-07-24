//1.  Create a javascript object and list the properties of a JavaScript object.
const audioSpeaker = {
  price: null,
  volume: null,
  bass: null,
  treble: null,
  balance: null,
};
//2.  Write a JavaScript program to get the length of the previous object.
let objectSize = Object.keys(audioSpeaker).length;
console.log(objectSize);
console.log();

//3.  Find the value of the price property and if it is greater than 100, discount it by 10%.
//  If that’s not the case, discount it by 7%. Update the object with the new property - discount
//  and the corresponding value (7% or 10%) and the new price.

let product = {
  name: "Macbook Pro",
  price: 2900,
  year: 2023,
  color: "space grey",
};

const discount = () => {
  if (product.price > 100) {
    return (product.price = product.price - (product.price * 0.1) / 100);
  } else {
    return (product.price = product.price - (product.price * 0.07) / 100);
  }
};

console.log(discount());

/* 4. Create an object for a car that has:
Make
Model
Number of tires
Transmission
Number of Doors
Horn Sound
A method that makes the car "HONK"
*/

const car = {
  make: null,
  model: null,
  numOfTires: null,
  transmission: null,
  numofDoors: null,
  hornSound: null,
  horn() {
    console.log("HONK");
  },
};
