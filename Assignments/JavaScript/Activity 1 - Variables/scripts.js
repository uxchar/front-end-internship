// 1. Write an improved version of hello world that says
//    `hello {firstName} {lastName}`

let firstName = "Chauncey";
let lastName = "Harlan";

console.log(`hello ${firstName} ${lastName}`);

// 2. Display the sum of `5 + 10`, using two variables: `x` and
// `y`.
let x = 5;
let y = 10;
let sum = x + y;

console.log(sum);

// 3. Create a variable called `z`, assign `x + y` to it, and log
// the result.
let z = x + y;

console.log(z);

// 4. Write a program that takes a temperature in Celsius
// degrees, then logs it in Fahrenheit degrees. The conversion formula is `[°F] =
// [°C] x 9/5 + 32`.

let celsius = 22;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(
  `The temperature for today will be ${fahrenheit}°F with a slight chance of rain`
);

// 5. Look at the following code and try to predict the final
// values of its variables. Run the code to see if you were correct

let myAnswers = "a = 2, b = 10, c = 102, d = 30, e = 40, f = 10, g = 10 ";

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = (a * b) / a;
const g = (b / a) * a;
console.log(a, b, c, d, e, f, g);

// 6. Bonus: Swap the values of the 2 variables below without creating any new variables.

// ```
//     let firstNumber = 4;
//     let secondNumber = 9;
// ```

firstNumber = 4;
secondNumber = 9;
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log(firstNumber, secondNumber);
