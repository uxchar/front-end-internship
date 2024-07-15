// 1. Create a loop that runs from 0 to 9.

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log();

// 2. Create a loop that runs from 9 to 0.

for (let i = 9; i >= 0; i--) {
  console.log(i);
}
console.log();
// 3. Create a while loop that runs as long as i is less than 10.

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
console.log();

// 4. Create a while loop that runs as long as i is less than 100,  but increases i by 2 each time.

let x = 0;

while (x < 100) {
  console.log(x);
  x += 2;
}
console.log();

// 5. Using the example below, Create a loop from 1  to 20 that will print out if that number is odd or even.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd.`);
  }
}
