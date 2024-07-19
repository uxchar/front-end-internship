// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "Fizz Buzz" instead for numbers divisible both by 3 AND by 5.

for (x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log(`Fizz Buzz`);
  } else if (x % 3 == 0) {
    console.log(`Fizz`);
  } else if (x % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(x);
  }
}

console.log();
