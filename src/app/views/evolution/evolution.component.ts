import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PokemonService} from '../../models/services/pokemon.service';
import {PokemonData} from '../../models/pokemon';
import {Chain, Evolution, Species} from '../../models/evolution';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {

evolution: Evolution;
species: Species;
chain: Chain;
private id: string;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

   getEvolutionDetails(): void {
    this.pokemonService.getEvolutionData(this.id).subscribe((
      res => {
        console.log(this.id);
        this.evolution = JSON.parse(JSON.stringify(res));
        console.log(this.evolution);
      }
    ));

   }
  ngOnInit(): void {
    this.getEvolutionDetails();
  }

}
