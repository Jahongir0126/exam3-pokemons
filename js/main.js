let elForm = document.querySelector("form");
let elInput = document.querySelector("input");
let pokemonFilter =[];
var pokemonList=document.querySelector('.pokemon-list')


function createPokemonEl(pokemon) {
    let colEl = document.createElement('div');
    colEl.className = 'col-6 col-lg-3 col-md-6 col-sm-6 ';

    let cardEl = document.createElement('div');
    cardEl.className = 'card'

    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', pokemon.img);
    cardImg.setAttribute('onerror', "this.onerror=null;this.src='./img/image.png'");

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body ';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'pokemonTitle';
    cardTitle.textContent = pokemon.name;

    let cardType = document.createElement('h5');
    cardType.className = ' pokemontype';
    cardType.textContent = pokemon.type;
    
		
    let pokemonWeight = document.createElement('div')
    pokemonWeight.textContent=pokemon.weight;


    cardEl.appendChild(cardImg);
    cardEl.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardType);
    cardType.appendChild(pokemonWeight);
    colEl.appendChild(cardEl);
    return colEl;

}


renderPokemon(pokemons);

function renderPokemon(pokemons) {
    pokemonList.innerHTML=null;
    for (let i = 0; i < pokemons.length; i++) {
        let singlePokemonEl = createPokemonEl(pokemons[i]);
        pokemonList.appendChild(singlePokemonEl);
    }

}