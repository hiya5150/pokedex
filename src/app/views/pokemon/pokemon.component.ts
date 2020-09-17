import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonData, Result} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon[];
  public name: string;
  public url: string;
  public type: string;
  // public results: Result[];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }
  // function (which is called below)issues call to API. subscribes shows to the results that are returned. adds results to shows array
  getPokemonList(): void {
  //   this.pokemonService.getPokemonList().pipe(map(data => data.name) {
  //   ).subscribe();
  this.pokemonService.getPokemonList().subscribe(
    res => {
  // this.pokemon = (res as Pokemon[]);
  this.pokemon = JSON.parse(JSON.stringify(res));

  console.log(this.pokemon);



  // res.forEach((item) => {
  //   item = new Pokemon(item);
  //   this.pokemons.push(item);
  // });
  // console.log(this.pokemon);
  // res.map(item => {
  // const temp = new Pokemon(item);
  // this.pokemons.push(temp);
});
// });
}


  ngOnInit(): void {
  this.getPokemonList();
  // this.getPokemonDetail();
  }

}
