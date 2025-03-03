import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorPipe } from './pokemon-color.pipe';
import { routes } from './app.routes';
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
