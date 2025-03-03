import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonColorPipe } from '../pokemon-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  imports: [CommonModule,BorderCardDirective,PokemonColorPipe]

})
export class ListPokemonComponent {
  constructor(private router:Router){}
  pokemonList=POKEMONS;
  goTopokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }
}

