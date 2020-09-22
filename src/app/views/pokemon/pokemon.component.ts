import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Pokemon, PokemonData} from '../../models/pokemon';
import {PokemonService} from '../../models/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, AfterViewInit {
  public pokemon: Pokemon[];
  pokemonData: PokemonData[];
  public name: string;
  public url: string;
  public type: string;
  public results: Pokemon[];
  expandedElement: PokemonData | null;
  dataSource = new MatTableDataSource();
  // dataSource: MatTableDataSource<Pokemon>;
  displayPokemonColumns: string[] = ['name', 'url', 'pokemonDetails'];
  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;
  //
  // // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  //
  }

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  // function (which is called below)issues call to API. subscribes shows to the results that are returned. adds results to shows array
  onLoadPokemonList(): void {
  this.pokemonService.getPokemonList().subscribe(
    res => {
  this.pokemon = JSON.parse(JSON.stringify(res));
  this.dataSource.data = this.pokemon;
  console.log(this.pokemon);


    });

  }

  ngOnInit(): void {
  this.onLoadPokemonList();

  }


}

