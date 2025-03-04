import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { PokemonColorPipe } from '../pokemon-color.pipe';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule,PokemonColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {
  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;
  constructor(private route:ActivatedRoute,private router:Router,
    private pokemonService :PokemonService){}
  ngOnInit(): void {
    const pokemonId:string|null= this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon=this.pokemonService.getPokemonId(pokemonId!=undefined ? +pokemonId :0);
    }
    

  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }
}
