/* 1. Write a conditional that checks if the number provided is between 0 and 100 (inclusive):
If it is between 0 and 100, console.log("Number is between 0 and 100")
Otherwise, console.log("Number is less than 0 or greater than 100")
    const number = 77


2. Create a conditional that checks if either of the expressions below are true or false.
If they are both true, console log that they are true. 
If one is true and the other is false, log that one of them is true.
If they are both false, log that they are false. 
    const expression1 = 51 >= 50
    const expression2 = 24 > 14


3. Write a conditional that checks that "today" is NOT a weekend day ("Saturday" or "Sunday")
If it is not a weekend day, console log "GO TO WORK"
    const today = "Wednesday"


4. With the information below, suggest the appropriate activity given the current temperature.
Suggest "swimming" if the temperature is 80 degrees or higher
Suggest "tennis" if the temperature is equal to 60 degrees (or more) and less than 80 degrees
Suggest "golf" if the temperature is equal to 40 degrees (or more) and less than 60 degrees
Suggest "skiiing" if the temperature is below 40 degrees
    const temperature = 44


5. Given a month, check if the season is "Fall", " Winter", "Spring", or. "Summer"
September, October, or November, the season is Fall
December, January, or February, the season is Winter
March, April, or May, the season is Spring
June, July, or August, the season is Summer
     const month = "february" */

const number = 77;

if (number >= 0 && number <= 100) {
  console.log("Number is between 0 and 100");
} else {
  console.log("Number is less than 0 or greater than 100");
}

const expression1 = 51 >= 50;
const expression2 = 24 > 14;

if (expression1 === true && expression2 === true) {
  console.log("They are both true");
} else if (expression1 === true || expression2 === true) {
  console.log("One of these is true");
} else {
  console.log("Both are false");
}

const today = "Wednesday";

if (today != "Saturday" && today != "Sunday") {
  console.log("GO TO WORK");
}

const temperature = 44;
if (temperature >= 80) {
  console.log("You should go swimming today.");
} else if (temperature >= 60 && temperature <= 80) {
  console.log("You should play tennis today.");
} else if (temperature >= 40 && temperature <= 60) {
  console.log("You should play golf today.");
} else {
  console.log("You should go skiing today.");
}

const month = "february";
if (month === "december" || month === "january" || month === "february") {
  console.log("The season is winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is summer.");
} else if (
  month === "september" ||
  month === "october" ||
  month === "november"
) {
  console.log("The season is fall.");
} else {
  console.log("Please input a month.");
}
