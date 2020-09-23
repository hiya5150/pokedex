import {Component, OnInit, ViewChild} from '@angular/core';
import {Pokemon, PokemonData} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

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
  expandedElement: PokemonData | null;
  public dataSource: MatTableDataSource<Pokemon>;
  displayPokemonColumns: string[] = ['name', 'url', 'pokemonDetails'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  // function (which is called below)issues call to API. subscribes shows to the results that are returned. adds results to shows array
  onLoadPokemonList(): void {
  this.pokemonService.getPokemonList().subscribe(
    res => {
  this.pokemon = res;
  this.dataSource = new MatTableDataSource(res?.results);
  this.dataSource.paginator = this.paginator;


  // setTimeout(() => {
  //       this.dataSource.paginator = this.paginator;
  //
  //     });
  console.log(this.dataSource);
    });

  }

  ngOnInit(): void {
  this.onLoadPokemonList();

  }


}

