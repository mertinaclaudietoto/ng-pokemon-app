import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
 
  ngOnInit(): void {
      console.table(POKEMONS)
      // this.selectPokemon(POKEMONS[1])
  }
  selectPokemon(pokemonID:string){
    const pokemonselected :Pokemon|undefined= POKEMONS.find(pokemon => pokemon.id==+pokemonID);
    console.log(`Vous avez clique sur le pokemon ${pokemonselected?.name}`)
  }
}
