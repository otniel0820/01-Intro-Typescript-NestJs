
export const pokemonIds = [1,20,30,34,66]

interface Pokemon {
    id: number;
    name: string;
    age?: number
}
export const bulbasur: Pokemon = {
    id:1,
    name:"Bulbasaur",
}
export const charmander: Pokemon = {
    id:1,
    name:"Charmander",
}

export const pokemons: Pokemon[] = []

pokemons.push(bulbasur, charmander)

console.log(pokemons);

