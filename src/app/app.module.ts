import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { PokemonDataComponent } from './views/pokemon-data/pokemon-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
