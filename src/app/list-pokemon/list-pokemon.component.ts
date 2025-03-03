import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonColorPipe } from '../pokemon-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  imports: [CommonModule,BorderCardDirective,PokemonColorPipe]

})
export class ListPokemonComponent {
  pokemonList=POKEMONS;
}

