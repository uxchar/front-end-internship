// Using the PokeAPI create a simple webpage that has a text input field and a button. A user should be able to type in the name of a pokemon and when they click the button a picture of the pokemon should appear on the screen. You can use the route: https://pokeapi.co/api/v2/pokemon/{name}/

// Pass the name they type into the box into the {name} portion of the routes url.
document
  .getElementById("pokemon-search")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document
      .getElementById("query-input")
      .value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const pokemonInfo = document.getElementById("pokemon-info");

    pokemonInfo.innerHTML = " ";

    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        console.log(pokemon);

        const pokemonName = document.createElement("h2");
        const pokemonSprite = document.createElement("img");

        pokemonName.innerHTML = `${pokemon.name.toUpperCase()}`;
        pokemonSprite.src = `${pokemon.sprites.front_default}`;

        pokemonInfo.appendChild(pokemonName);

        pokemonInfo.appendChild(pokemonSprite);
      });
  });
