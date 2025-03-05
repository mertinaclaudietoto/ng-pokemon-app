import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-edit-pokemon',
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center">
    Edite pokemon {{pokemon?.name}}!
    </h2>
    <p *ngIf='pokemon' class="center">
       <img [src]="pokemon?.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
    pokemon:Pokemon|undefined;
    constructor(private route:ActivatedRoute,
      private pokemonService:PokemonService){}
    ngOnInit() {
      const pokemonId :string|null =this.route.snapshot.paramMap.get('id');
     if(pokemonId){
      this.pokemonService.getPokemonId(+pokemonId).subscribe(pokemon => this.pokemon=pokemon);
     }
    }
}
