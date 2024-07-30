// 1. Create a form that will collect the information from your user, and once submitted, return an alert reflecting the selected information. Form Guidelines:
//    Form should collect a users first and last name using text boxes
//    Using radio buttons a user can select from three different languages
//    Using radio buttons a user can select from three hobbies.
//    On clicking the submit button a user should see an alert referencing their selection

//    Alert example: "Hello [Chris]! It looks like you're interested in learning more about [Spanish, Swahili, German]. Can't wait to see your website about [skiing, swimming, cooking] and other cool stuff!"

const formSubmit = () => {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;

  const language = document.querySelector(
    'input[name="language"]:checked'
  ).value;
  const hobby = document.querySelector('input[name="hobby"]:checked').value;

  alert(
    `Hello ${firstName} ${lastName}! It looks like you're interested in learning more about ${language}. Can't wait to see your website about ${hobby} and other cool stuff!`
  );
};

// 2. Recreate Cookie Clicker! In this exercise have an h1 tag on the page that starts at 0. Under the h1 tag have a button the user can click. Each time the user clicks the button increment the number inside the h1 tag by 1.
let clickBtn = document.getElementById("clickBtn");
clickBtn.style.width = "100px";
clickBtn.style.height = "40px";
clickBtn.style.marginBottom = "20px";

let cookies = document.getElementById("cookies");
let totalCookies = 0;
let cookieCounter = 0;
const cookieClick = () => {
  cookieCounter++;
  totalCookies = cookieCounter;
  cookies.innerHTML = totalCookies;
};

// 3. Using Javascript create an h1 tag. Set the text of the h1 tag "Hello World". Make the background color of the h1 tag blue and text red. Add this tag you created to your html page.
let h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.style.color = "red";
h1.style.backgroundColor = "blue";
h1.style.marginTop = "30px";
document.body.appendChild(h1);

// 4. Using Javascript create an h2 tag. Give it a class of goodnight-world. Create a class rule in your CSS file for goodnight-world that sets the background color to purple and the text color to white. Add the tag you created to your html page.
let h2 = document.createElement("h2");
h2.classList.add("goodnight-world");
h2.textContent = "Goodnight World";
document.body.appendChild(h2);

// 5. Create the XCA Pets list! A user should be able to type in the name of their pet and press submit. When they press submit the name they typed in should be added to a list of pets that displayed in the HTML file.
let h3 = document.createElement("h3");
h3.textContent = "XCA Pet List";
document.body.appendChild(h3);

let list = document.createElement("ul");
document.body.appendChild(list);

const submitName = () => {
  let pet = document.getElementById("petname").value;
  let listItem = document.createElement("li");
  listItem.textContent = pet;
  if (pet !== "") {
    list.appendChild(listItem);
    document.getElementById("petname").value = "";
  }
};
