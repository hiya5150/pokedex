import {Pokemon} from './pokemon';

export class Evolution {
  evolutionDetails: string;
  evolvesTo: string;
  chain: Chain;
  }

export interface  Chain {
  species: Species;
}

export interface Species {
  name: string;
  }
