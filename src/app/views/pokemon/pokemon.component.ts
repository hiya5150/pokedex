import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonData} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon[];
  pokemonData: PokemonData[];
  public name: string;
  public url: string;
  public type: string;
  public results: Pokemon[];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, ) {
  }
  // function (which is called below)issues call to API. subscribes shows to the results that are returned. adds results to shows array
  onLoadPokemonList(): void {

  this.pokemonService.getPokemonList().subscribe(
    res => {
  // this.pokemon = (res as Pokemon[]);
  this.pokemon = JSON.parse(JSON.stringify(res));

  console.log(this.pokemon);

});

  this.name = this.route.snapshot.paramMap.get('name');
  }
  onLoadPokemonByName(): void {
    this.pokemonService.getPokemonbyName(this.name).subscribe(
      res => {
        console.log(this.name);
        this.pokemonData = JSON.parse(JSON.stringify(res));
        console.log(this.pokemonData);
      }
    );

}
//
// openModal(): void {
//     const dialogConfig = new MatDialogConfig();
//
//     dialogConfig.disableClose = false;
//     dialogConfig.autoFocus = true;
//     dialogConfig.width = '400px';
//     // dialogConfig.data = this.pokemon?.name;
//
//     this.dialog.open(PokemonData, dialogConfig);
//
// }

  ngOnInit(): void {
  this.onLoadPokemonList();
  }

}
