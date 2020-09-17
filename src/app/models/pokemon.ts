export class Pokemon {
  // this class contains properties that contain information on Pokemons
  public pokemonId: number;
  public name: string;
  public height: number;
  public weight: number;
  public abilities: string;
  public evolutionChainID: number;

  constructor(args?) {
    if (args) {
      this.pokemonId = args.id;
      this.name = args.name;
      this.height = args.height;
      this.weight = args.weight;
      this.abilities = args.abilities;
      this.evolutionChainID = args.evolutionChainID;

    }
  }
  pokemonUrl: string;

}
