import { name, age } from "@/bases/01-types";
import { bulbasur, pokemonIds, pokemons } from "@/bases/02-object";
// import { charmander } from "@/bases/03-clases";
// import { charmander } from "@/bases/04-injection";
import { charmander } from "@/bases/06-decorators-method";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>Hellow World Nest</p>
     <p>{charmander.name}</p>
    </main>
  );
}
