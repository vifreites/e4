const buscarPokemon = () => {
    const pokemonNumber = document.getElementById("pokemonNumber").value;

    if (pokemonNumber === "") {
      mostrarError("Por favor, ingrese un número de Pokémon.");
      return;
    }

    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => mostrarPokemon(data))
      .catch(error => mostrarError("No se encontró ningún Pokémon."));
  };

  const mostrarPokemon = pokemon => {
    const pokemonContainer = document.getElementById("pokemonContainer");
    pokemonContainer.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const types = document.createElement("p");
    types.textContent = "Tipos: " + pokemon.types.map(type => type.type.name).join(", ");

    const height = document.createElement("p");
    height.textContent = "Altura: " + (pokemon.height / 10) + " metros";

    const weight = document.createElement("p");
    weight.textContent = "Peso: " + (pokemon.weight / 10) + " kilogramos";

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;

    card.appendChild(name);
    card.appendChild(types);
    card.appendChild(height);
    card.appendChild(weight);
    card.appendChild(image);

    pokemonContainer.appendChild(card);
  };

  const mostrarError = mensaje => {
    const pokemonContainer = document.getElementById("pokemonContainer");
    pokemonContainer.innerHTML = "";

    const error = document.createElement("p");
    error.className = "error";
    error.textContent = mensaje;

    pokemonContainer.appendChild(error);
  };