import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  // http call
  private baseUrl = 'https://pokeapi.co/api/v2/';

  // // get list of Pokemons based on search query
  // getPokemon(query): Observable<any[]> {
  //   return this.http.get<any[]>(this.baseUrl + 'search/pokemon?q=' + query);
  // }
  // get list of PokemonsPo
  // private pokemons: Pokemon;
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl + `pokemon?offset=1&limit=150`);
  //     .pipe(map(this.pokemons: Pokemon[]) =>
  // this.pokemons.map(pokemon => pokemon.name));

  }

  getPokemonDetail(name: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'pokemon/' + name);
  }

}
