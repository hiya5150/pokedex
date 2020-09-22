import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Pokemon, PokemonData} from '../pokemon';
import {Evolution} from '../evolution';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  // http call
  private baseUrl = 'https://pokeapi.co/api/v2/';

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl + `pokemon?limit=150`);

  }

  getPokemonbyName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>((this.baseUrl + 'pokemon/' + `${name}`));

  }

  getEvolutionData(id: string): Observable<Evolution> {
  return this.http.get<Evolution>((this.baseUrl + 'evolution-chain/' + `${id}`));
  }
  //
  // getPokemonbyId(id: string): Observable<Pokemon> {
  //   return this.http.get<Pokemon>((this.baseUrl + 'pokemon/' + `${id}`));
  //
  // }




}
