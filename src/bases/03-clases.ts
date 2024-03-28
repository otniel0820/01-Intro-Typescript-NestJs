import { Move, PokeapiResponse } from "@/interfaces/pokeapi-response.interface";
import axios from "axios";

export class Pokemon {
 
    get imgUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

  constructor(
    public readonly id: number, 
    public readonly name: string,
    // public imgUrl: string
    ) {}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);  
    }
    speak(){
        console.log(`${this.name}, ${this.name}!!!`);  
    }

    async getMoves(): Promise<Move[]>{

        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves[0].move.name);
        
        return data.moves
        
    }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
console.log(charmander.getMoves());

