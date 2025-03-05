
import { Injectable, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
// import { POKEMONS } from './mock-pokemon-list';
import { Observable, catchError,of,tap } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{
  headers=new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
  }
  getPokemonList(): Observable<Pokemon[]|undefined> {
    return this.http.get<Pokemon[]>('api/pokemons', { headers: this.headers }).pipe(
      tap((pokemonList)=> this.log(pokemonList)),
      catchError((error)=>this.handleError(error,[]))
    )
    // tap equivalent de console.log
    // return POKEMONS;
  }
 
  getPokemonId(pokemonId:number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemon/:${pokemonId}`, { headers: this.headers }).pipe(
      tap((pokemon)=> this.log(pokemon)),
      catchError((error)=>this.handleError(error,undefined))
    )
    // return POKEMONS.find(pokemon=>pokemon.id==pokemonId);
  }
  private log(response:Pokemon[]|Pokemon|undefined){
    console.table(response);
  }
  private handleError(error:Error,errorValue:any){
    console.error(error);
    return of(undefined);
  }
  getPokemonTypeList():string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
