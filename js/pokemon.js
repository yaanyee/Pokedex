const pokemonDetails = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    weight: 69,
    base_experience: 64,
    types: ["grass", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    id: 2,
    name: "ivysaur",
    height: 10,
    weight: 130,
    base_experience: 142,
    types: ["grass", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
  {
    id: 3,
    name: "venusaur",
    height: 20,
    weight: 1000,
    base_experience: 236,
    types: ["grass", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
  },
  {
    id: 4,
    name: "charmander",
    height: 6,
    weight: 85,
    base_experience: 62,
    types: ["fire"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  },
  {
    id: 5,
    name: "charmeleon",
    height: 11,
    weight: 190,
    base_experience: 142,
    types: ["fire"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
  },
  {
    id: 6,
    name: "charizard",
    height: 17,
    weight: 905,
    base_experience: 240,
    types: ["fire", "flying"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  },
  {
    id: 7,
    name: "squirtle",
    height: 5,
    weight: 90,
    base_experience: 63,
    types: ["water"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
  },
  {
    id: 8,
    name: "wartortle",
    height: 10,
    weight: 225,
    base_experience: 142,
    types: ["water"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
  },
  {
    id: 9,
    name: "blastoise",
    height: 16,
    weight: 855,
    base_experience: 239,
    types: ["water"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
  },
  {
    id: 10,
    name: "caterpie",
    height: 3,
    weight: 29,
    base_experience: 39,
    types: ["bug"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
  },
  {
    id: 11,
    name: "metapod",
    height: 7,
    weight: 99,
    base_experience: 72,
    types: ["bug"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  },
  {
    id: 12,
    name: "butterfree",
    height: 11,
    weight: 320,
    base_experience: 178,
    types: ["bug", "flying"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
  },
  {
    id: 13,
    name: "weedle",
    height: 3,
    weight: 32,
    base_experience: 39,
    types: ["bug", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    },
  },
  {
    id: 14,
    name: "kakuna",
    height: 6,
    weight: 100,
    base_experience: 72,
    types: ["bug", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    },
  },
  {
    id: 15,
    name: "beedrill",
    height: 10,
    weight: 295,
    base_experience: 178,
    types: ["bug", "poison"],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    },
  },
];


const pokemonListContainer = document.getElementById("tarjetas")

function getPokemons (lista){

  const tarjetas = ( lista.map(pokemon => 
    { 
      const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      const types = (pokemon.types.map(type => type.charAt(0).toUpperCase() + type.slice(1)))
      const id = `#${String(pokemon.id).padStart(3,"0")}`
      const elements = (types.map(elemento => 
        `<div class="elemento ${elemento}">
            <img class="icono" src="imagenes/iconos/${elemento.toLowerCase()}.svg" alt="Simbolo ${elemento}"/>
            <p>${elemento}</p>
        </div>`
      ))
      const height = pokemon.height/10;
      const weight = pokemon.weight/10;

      return `<div class="card ${pokemon.types[0]}">
                    <header>
                        <h2 class="nombre">${name}</h2>
                        <p class="id">${id}</p>
                    </header>
                    <img class="pokemon" src="${pokemon.sprites.front_default}" alt="Foto del pokemon 001">
                    <div class="card caracteristicas">
                        <div class="elementos">
                            ${elements}
                        </div>
                        <div class="medidas">
                            <div class="medida">
                                <img class="icono" src="imagenes/iconos/bascula.svg" alt="Peso del pokemon"/>
                                <p class="peso" aria-label="${height} kilogramos">${height} kg</p>
                            </div>
                            <p class="separador">|</p>
                            <div class="medida">
                                <img class="icono" src="imagenes/iconos/regla.svg" alt="Medida del pokemon"/>
                                <p class="tamano" aria-label="${weight} metros">${weight} m</p>
                            </div>
                        </div>
                        <section class="habilidades">
                            <section class="hp">
                                <p class="caracteristica" aria-label="Health">HP</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                            <section class="atk">
                                <p class="caracteristica" aria-label="Attack">ATK</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                            <section class="def">
                                <p class="caracteristica" aria-label="Defense">DEF</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                            <section class="sat">
                                <p class="caracteristica" aria-label="Special attack">SAT</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                            <section class="sdf">
                                <p class="caracteristica" aria-label="Special defense">SDF</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                            <section class="spd">
                                <p class="caracteristica" aria-label="Speed">SPD</p>
                                <p class="nivel" aria-label="45 sobre 255">045</p>
                                <div class="barra" aria-hidden="true">
                                    <div class="relleno"></div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>`}
  ).join(""))
  pokemonListContainer.innerHTML = tarjetas
}

getPokemons(pokemonDetails);

