import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from './views/pokemon/pokemon.component';

const routes: Routes = [

{path: 'pokemon/', component: PokemonComponent}

];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PokemonComponent];
