import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from './views/pokemon/pokemon.component';
import {PokemonDataComponent} from './views/pokemon-data/pokemon-data.component';
import {EvolutionComponent} from './views/evolution/evolution.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [

{path: 'pokemon/', component: PokemonComponent},
{path: 'pokemonData/:name', component: PokemonDataComponent},
// {path: 'evolution', component: EvolutionComponent}
  {path: 'evolution/:id', component: EvolutionComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PokemonComponent, PokemonDataComponent, EvolutionComponent];
