// 1: Create a loop that counts every other number from 105 - 1
for (y = 105; y >= 1; y -= 2) {
  console.log(y);
}
console.log();

// 2: Create a while loop that console logs every odd number from 1 - 100
let i = 1;
while (i <= 100) {
  console.log(i);
  i += 2;
}
console.log();

// 3: Create a for loop that console logs every fifth number from 1 - 40
for (z = 1; z <= 40; z += 5) {
  console.log(z);
}
console.log();

// 4: Create a for loop that counts every number from 0  - -100
for (x = 0; x >= -100; x--) {
  console.log(x);
}
console.log();

// 5: Create a for loop that counts every number from -100 to 100 and console logs if its positive or negative and also if its even or odd
for (x = -100; x <= 100; x++) {
  if (x < 0 && x % 2 == 0) {
    console.log(`${x} is negative and an even number`);
  } else if (x < 0 && x % 2 == 1) {
    console.log(`${x} is negative and an odd number`);
  } else if (x > 0 && x % 2 == 0) {
    console.log(`${x} is positive and an even number`);
  } else if (x > 0 && x % 2 == 1) {
    console.log(`${x} is positive and an odd number`);
  }
}
console.log();
