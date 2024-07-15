//  # JS Activity 3 - Switch Statements

// ## 📋 Instructions

// Create the following using switch statements:

// 1.  Write a program that accepts the name of a day ("Monday"), then shows the name of the following day ("Tuesday"). Incorrect inputs must be taken into account.

// 2.  Write a program that takes in a weather condition and prints a recommendation to the console. Remember to account for other/incorrect weather conditions.
//     - If it is sunny - bring your sunglasses
//     - If its raining - bring your raincoat
//     - If its snowing - wear your snowboots
//     - If its windy - wear your windbreaker

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("The follwing day is Tuesday.");
    break;
  case "Tuesday":
    console.log("The follwing day is Wednesday.");
    break;
  case "Wednesday":
    console.log("The follwing day is Thursday.");
    break;
  case "Thursday":
    console.log("The follwing day is Friday.");
    break;
  case "Friday":
    console.log("The follwing day is Saturday.");
    break;
  case "Saturday":
    console.log("The follwing day is Sunday.");
    break;
  case "Sunday":
    console.log("The follwing day is Monday.");
    break;
  default:
    console.log("Please input a day of the week.");
}

const weather = "Sunny";

switch (weather) {
  case "Sunny":
    console.log("Bring your sunglasses.");
    break;
  case "Raining":
    console.log("Bring your raincoat.");
    break;
  case "Snowing":
    console.log("Wear your snowboots.");
    break;
  case "Windy":
    console.log("Wear your windbreaker.");
    break;
  default:
    console.log("I'm not sure what you should do lol.");
}
