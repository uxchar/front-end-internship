// Build a simple card game with this Deck of Cards API --> https://deckofcardsapi.com/

// This will be a simplified game of War. Your game should allow a user to click a button, and on that button click, the game draws a card for each player and evaluate who has the highest value card. Once your game determines the winner, update that player's score and show an alert that announces the winner.
// HINT: Think about how to handle the face cards when checking which player drew the highest card (King, Queen, Jack, Ace)

// You will use the "Draw a Card" endpoint listed in the documentation
// HINTS:
// Read the documentation for this request. It provides helpful tips regarding the route parameter and provides an explanation of what to expect in the response.
// Look through the object being returned. Make sure you understand its structure and how to access the properties you need for your game.
// The only properties needed from the response object are "image" and "value".

//Create a button that a user can
//Call api and get a response, console.log and check
//Create scoreboard and target
//Initialize points for each player
//Create a function to convert string value to number for cards
//Create conditional logic for game and increment score
//Update scoreboard

let playerOnePoints = 0;
let playerTwoPoints = 0;

const playerOneScoreboard = document.getElementById("player-one-score");
const playerTwoScoreboard = document.getElementById("player-two-score");
const playerOneContainer = document.getElementById("player-one-card-container");
const playerTwoContainer = document.getElementById("player-two-card-container");

document.getElementById("play-btn").addEventListener("click", () => {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
    .then((response) => response.json())
    .then((cardGame) => {
      console.log(cardGame);

      playerOneContainer.innerHTML = "";
      playerTwoContainer.innerHTML = "";

      const playerOneCard = document.createElement("img");
      const playerTwoCard = document.createElement("img");

      playerOneCard.src = cardGame.cards[0].image;
      playerTwoCard.src = cardGame.cards[1].image;

      const convertCard = (value) => {
        if (value === "ACE") {
          return 14;
        } else if (value === "KING") {
          return 13;
        } else if (value === "QUEEN") {
          return 12;
        } else if (value === "JACK") {
          return 11;
        } else {
          return parseInt(value);
        }
      };

      let playerOneValue = convertCard(cardGame.cards[0].value);
      let playerTwoValue = convertCard(cardGame.cards[1].value);

      playerOneContainer.appendChild(playerOneCard);
      playerTwoContainer.appendChild(playerTwoCard);

      if (playerOneValue === playerTwoValue) {
        alert("We have a tie!");
      } else if (playerOneValue > playerTwoValue) {
        alert("Player 1 wins!");
        playerOnePoints++;
      } else {
        alert("Player 2 wins!");
        playerTwoPoints++;
      }

      playerOneScoreboard.textContent = ` ${playerOnePoints}`;
      playerTwoScoreboard.textContent = ` ${playerTwoPoints}`;
    });
});
