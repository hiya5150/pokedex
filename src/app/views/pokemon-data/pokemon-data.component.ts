import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonData} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css']
})
export class PokemonDataComponent implements OnInit {
  // @Input() id: string;
  pokemonData: PokemonData[];
  // pokemonData: PokemonData;

  private name: string;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
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
  ngOnInit(): void {
    this.onLoadPokemonByName();
  }

}
