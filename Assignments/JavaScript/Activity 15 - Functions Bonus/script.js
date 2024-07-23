// # JS Activity 15 - BONUS Functions

// ## 📋 Instructions

// 1. The Puppy Age Calculator - You know how old your dog is in human years, but what about dog years? Calculate it!

//     Write a function named `calculateDogAge` that:
//     - Takes 1 argument: your puppy's age
//     - Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//     - Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//     - Call the function three times with different sets of values
//     - Add an additional argument to the function that takes the conversion rate of human to dog years

// 2. The Fortune Teller - Why pay a fortune teller when you can just program your fortune yourself?

//     Write a function named `tellFortune` that:
//     - Takes 4 arguments: number of children, partner's name, geographic location, job title
//     - Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids"
//     - Call that function 3 times with 3 different values for the arguments

function calculateDogAge(puppyAge) {
  const dogAge = puppyAge * 7;
  console.log(`Your doggie is ${dogAge} years old in dog years!`);
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(5);
console.log();

function tellFortune(numOfChildren, partnerName, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`
  );
}

tellFortune(4, "Mary", "Chicago", "Banker");
tellFortune(2, "John", "Denver", "Teacher");
tellFortune(6, "Lisa", "Miami", "Marketer");
console.log();
