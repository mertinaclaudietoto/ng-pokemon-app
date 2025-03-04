import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonColorPipe } from '../pokemon-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  imports: [CommonModule,BorderCardDirective,PokemonColorPipe]

})
export class ListPokemonComponent implements OnInit {
  pokemonList:Pokemon[];
  constructor(private router:Router,private pokemonService:PokemonService){}
  ngOnInit(): void {
      this.pokemonList=this.pokemonService.getPokemonList();
  } 
 
  goTopokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }
}

