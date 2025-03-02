import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorPipe } from './pokemon-color.pipe';
PokemonColorPipe
BorderCardDirective
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styles: [],
  imports: [CommonModule,BorderCardDirective,PokemonColorPipe]
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
  pokemonList=POKEMONS;
  ngOnInit(): void {
      console.table(POKEMONS)
      // this.selectPokemon(POKEMONS[1])
  }
  selectPokemon(pokemonID:string){
    const pokemonselected :Pokemon|undefined= POKEMONS.find(pokemon => pokemon.id==+pokemonID);
    console.log(`Vous avez clique sur le pokemon ${pokemonselected?.name}`)
  }
}
