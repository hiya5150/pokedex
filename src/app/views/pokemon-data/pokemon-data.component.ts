import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonData} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';



@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css']
})
export class PokemonDataComponent implements OnInit {
  @Input() id: string;
  public pokemonData: PokemonData[];


  constructor(pokemonService: PokemonService, private route: ActivatedRoute) { }
  getPokemonDetail(): void {
    this.pokemonService.getPokemonDetail(this.id).subscribe(
      res2 => {
        this.pokemonData = JSON.parse(JSON.stringify(res2));
        console.log(this.pokemonData);

      }
    );
  }
  ngOnInit(): void {
  }

}
