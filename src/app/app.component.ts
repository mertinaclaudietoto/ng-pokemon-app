import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Liste de pokemon !</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
 
  ngOnInit(): void {
      console.table(POKEMONS)
      this.selectPokemon(POKEMONS[1])
  }
  selectPokemon(pokemonName:Pokemon){
    console.log(`Vous avez clique sur le pokemon ${pokemonName.name}`)
  }
}
