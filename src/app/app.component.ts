import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';
import { BorderCardDirective } from './pokemon/border-card.directive';
import { PokemonColorPipe } from './pokemon/pokemon-color.pipe';
// import { routes } from './app.routes';
PokemonColorPipe
BorderCardDirective
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styles: [],
  imports: [RouterOutlet]
})
export class AppComponent  {
  title = 'ng-pokemon-app';
  pokemonList=POKEMONS;
}
