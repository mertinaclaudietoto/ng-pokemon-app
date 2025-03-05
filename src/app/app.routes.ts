// import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// export const routes: Routes = [
//     {path:'',redirectTo:'pokemons',pathMatch:'full'},
//     {path:'**',component:PageNotFoundComponent},

// ];
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { PokemonModule } from './pokemon/pokemon.module';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
export const routes: Routes = [
  {path:'edit/pokemon/:id',component:EditPokemonComponent},
  {path:'',redirectTo:'pokemons',pathMatch:'full'},
  {path:'pokemons',component:ListPokemonComponent},
  {path:'pokemon/:id',component:DetailPokemonComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  // declaration seulement pour les imports specifique aux module
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
    // RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
