const greeting = document.getElementById("greeting");
/// 1. Create an h1 tag with the id "greeting". Using Javascript change the tags innerhtml to say "Good Morning!"
greeting.innerHTML = "Good Morning!";

// 2. Using Javascript change the color of the h1 tag from the previous question to blue.
greeting.style.color = "blue";
// 3. Create 4 div's in your html. Using the getElementsByTagName method apply the style properties: height of 50px, a width of 50px, and a background color of red. (You will need a loop and you should have 4 red boxes on your page if done correctly)
const elements = document.getElementsByTagName("div");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = "50px";
  elements[i].style.height = "50px";
  elements[i].style.backgroundColor = "red";
  elements[i].style.marginBottom = "10px";
}
// 4. Create three p tags. Give the first p tag an id of "first-tag". Using Javascript give the first p tag a color of purple and the other p tags a color of orange. (Don't give the other two p tags an id).
const firstTag = document.getElementById("first-tag");
firstTag.style.backgroundColor = "purple";
const texts = document.getElementsByTagName("p");
for (let i = 1; i < texts.length; i++) {
  texts[i].style.backgroundColor = "orange";
}
