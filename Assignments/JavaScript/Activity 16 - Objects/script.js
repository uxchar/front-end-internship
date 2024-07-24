// 1. Create a dog object that has the properties height, breed, weight, and a method called bark that logs "Woof" to the console
const dog = {
  height: null,
  weight: null,
  bark() {
    console.log("Woof!!");
  },
};

dog.bark();
console.log();

// 2. Create a house object that has properties squareFootage, numberOfBedrooms, and numberOfBathrooms. Log these three properties to the console.
const house = {
  squareFootage: 1250,
  numberOfBedrooms: 2,
  numberOfBathrooms: 2,
};
console.log(
  house.squareFootage,
  house.numberOfBedrooms,
  house.numberOfBathrooms
);
console.log();

// 3. Create an account object with the following characteristics:
// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A debit method that subtracts the value passed as an argument from the account balance.
// A describe method logging the account balance
// Use this object to log its balance, crediting 250, debiting 80, then log its balance again.
const account = {
  name: "Alex",
  balance: 0,
  credit(capital) {
    this.balance += capital;
  },
  debit(expense) {
    this.balance -= expense;
  },
  describe() {
    console.log(
      `Hello ${this.name}, your current account balance is: ${this.balance}`
    );
  },
};

account.credit(250);
account.debit(80);
account.describe();
console.log();
