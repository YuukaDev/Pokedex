const container = document.getElementById('pokemon-container');

let colors = {
    fire: "#ff867c",
    grass: '#98ee99',
    electric: '#ffee58',
    water: '#6ff9ff',
    ground: '#be9c91',
    rock: '#d5d5d4',
    fairy: '#ff77a9',
    poison: '#66ffa6',
    bug: '#ffd95b',
    psychic: '#eaeda1',
    fighting: '#a7c0cd',
    normal: 'F5F5F5',
    ghost: '#8e8e8e'
}

const getPokemons = async () => {
  for(let i = 1; i < 101; i++) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      createPokemonCard(pokemon);
      console.log(pokemon)

    } catch(error) {
        console.log(error);
    }
}
};

const createPokemonCard = ((pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('card');
    const { id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const color = colors[type]
    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
    <div class="img-container">
      <img src="${sprites.front_default}" alt="${name}" />
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <hr>
      <h3 class="name">${name.toUpperCase()}</h3>
      <small class="type">Type - <strong><span>${type}</span></strong></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
      container.appendChild(pokemonEl);
});
  
getPokemons();
