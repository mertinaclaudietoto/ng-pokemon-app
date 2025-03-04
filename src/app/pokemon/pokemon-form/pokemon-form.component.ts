import { Component ,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../pokemon';
import { PokemonColorPipe } from '../pokemon-color.pipe';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-form',
  imports: [CommonModule, FormsModule,PokemonColorPipe],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ["./pokemon-form.component.css"]
})
export class PokemonFormComponent implements OnInit {
 
  @Input() pokemon:Pokemon;

  types:string[];
  constructor(private pokemonService:PokemonService,
    private router :Router){}
  ngOnInit(): void {
      this.types=this.pokemonService.getPokemonTypeList();
  }

  hasType(type :string) :boolean{
    return this.pokemon.types.includes(type);
  }
  selectType($event:Event,type:string){
    const isChecked=($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type)
    }else{
      // mon code
      this.pokemon.types.filter(type1=> type1!=type)
      // code senior
      // const index=this.pokemon.types.indexOf(type);
      // this.pokemon.types.splice(index,1);
    }
  }
  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length==1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length>2 && !this.hasType(type)){
      return false;
    }

    return true;
  }
  onSubmit(){
    console.log('submit forme');
    this.router.navigate(['/pokemon',this.pokemon.id])
  }
}
