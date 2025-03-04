import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ngIF,ngfor
import { PokemonColorPipe } from './pokemon-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// const pokemonroutes: Routes = [
//   {path:'pokemons',component:ListPokemonComponent},
//   {path:'pokemon/:id',component:DetailPokemonComponent},

// ];

@NgModule({
  // declaration seulement pour les imports specifique aux module
  declarations: [
  ],
  imports: [
    CommonModule,
    ListPokemonComponent,
    PokemonColorPipe,
    DetailPokemonComponent,
    FormsModule
    // NgForm
    // RouterModule.forChild(pokemonroutes)
  ]
})
export class PokemonModule { }
