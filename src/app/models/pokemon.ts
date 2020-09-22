export class Pokemon {
  // this class contains properties that contain information on Pokemons
  name: string;
  url: string;
  results: Result[];

}

export interface Result {
  results: Result[];
}
export class PokemonData {
  pokemonId: number;
  pokemonUrl: string;
  name: string;
  height: number;
  weight: number;
  id: number;
  // abilities: string;
  // public evolutionChainID: number;
  }


