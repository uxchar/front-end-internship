// 1. Create an alert when you open your page that says "Good morning!"
alert("Good morning!");
// 2. Create a prompt that asks what hour it is (0-23). Depending on what time the user inputs post an alert saying "Good morning", "good afternoon", or "good evening". Use the logic 4-12 (Good Moring), 1-8(Good Afternoon), 9-3(Good Evening).    (Hint, use an if statement)
const timePrompt = parseInt(prompt("What hour is it?", ""), 10);

if (timePrompt >= 4 && timePrompt < 12) {
  alert("Good morning!");
} else if (timePrompt >= 12 && timePrompt < 20) {
  alert("Good afternoon.");
} else {
  alert("Good evening!");
}
// 3. Create a prompt that asks for your favorite color. Create an h1 tag in your html with the id of color. Based on what the user typed into the prompt change the inner html of the h1 tag to say "Your favorite color is ${color}".
// prompt("What is your favorite color?");
userFavColor = prompt("What is your favorite color?");
document.getElementById(
  "color"
).innerHTML = `Your favorite color is ${userFavColor}`;
