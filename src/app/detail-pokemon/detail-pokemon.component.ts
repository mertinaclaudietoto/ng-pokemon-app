import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { PokemonColorPipe } from '../pokemon-color.pipe';
@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule,PokemonColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {
  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;
  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.pokemonList=POKEMONS;
    const pokemonId:string|null= this.route.snapshot.paramMap.get('id');
    this.pokemon=this.pokemonList.find(pokemon=>pokemon.id == (pokemonId!=undefined ? pokemonId :0))
  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }
}
