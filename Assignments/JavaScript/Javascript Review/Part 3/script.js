// 1. Create an object called user with the following properties:
//    - username (string, e.g. "john_doe")
//    - email (string, e.g. "john@gmail.com")
//    - password (string, e.g. "password1234")

// Add the following methods:
//    1. updateEmail
//        - This method should take a new email address as a parameter and update the email property of the user object

// Once the object is created, we want you to:
//    1. Call the updateEmail method to change the email address from "john@gmail.com" to "john.new@hotmail.com".
//    2. Console log the user object.

const user = {
  username: "john_doe",
  email: "john@gmail.com",
  password: "password1234",
  updateEmail(newEmail) {
    this.email = newEmail;
  },
};

user.updateEmail("john.new@hotmail.com");
console.log(user);
console.log();

// 2. Create an object called book with the following properties:
//    - title (string, e.g. "")
//    - author (string, e.g. "")
//    - isRead (boolean, e.g. false)

// Add the following methods:
//    1. markAsRead
//        - This method should update the isRead property to true

// Once the object is created, we want you to:
//    1. Call the markAsRead method
//    2. Console log the updated book object

const book = {
  title: "",
  author: "",
  isRead: false,
  markAsRead() {
    this.isRead = true;
  },
};

book.markAsRead();
console.log(book);
console.log();

// 3. Create an object called product with the following properties:
//    - name (string, e.g. "Macbook Pro")
//    - price (number, e.g. 999.99)
//    - quantity (number, e.g. 25)

// Add the following methods to your object:
//    1. restock
//        - This method takes a number of units as a parameter and adds this number to the quantity property

// Once the object is created, we want you to:
//    1. Call the restock method to add 20 more units to the products quantity
//    2. Console log the updated product object

const product = {
  name: "Macbook Pro",
  price: 999.99,
  quantity: 25,
  restock(units) {
    this.quantity += units;
  },
};

product.restock(20);
console.log(product);
console.log();

// 4. Start with the object below:

const todoList = {
  name: "Daily Tasks",
  tasks: [],
  addTasks(task) {
    this.tasks.push(task);
  },
  removeTasks(task) {
    const i = this.tasks.indexOf(task);
    this.tasks.splice(i, 1);
  },
};

todoList.addTasks("vacuum");
todoList.addTasks("wipe counters");
todoList.addTasks("clean shower");
console.log(todoList);
console.log();
todoList.removeTasks("wipe counters");
console.log(todoList);
console.log();

// Add the following methods to the object above:
//    1. addTask
//        - This method should accept a task (string) as a parameter and add that task to the tasks array
//    2. removeTask
//        - This method should accept a task (string) as a parameter and remove that task from the tasks array

// Once the object is created, we want you to:
//    1. Add 3 tasks to the todoList (using the addTask method)
//    2. Console log the updated todoList
//    3. Remove an item from the todoList (using the removeTask method)
//    4. Console log the updated todoList

/*
BONUS:
Create an object called playlist that represents a music playlist.

The object should have the following properties:
   - name (string, e.g. "Favorite Songs")
   - songs (an array of song objects, each containing title and artist properties) -> starts out as empty array
   - duration (number representing the total duration of the playlist in minutes) -> starts out as 0

Add the following methods to the object:
   1. addSong
       - This method should accept two parameters, a song object (with title and artist properties) and a song duration
       - The song passed in should be added the songs array
   2. getTotalDuration
       - This method returns the total duration of all songs in the playlist

Demonstrate the usage of these methods by adding 3 songs to the playlist and logging the playlist duration.*/
