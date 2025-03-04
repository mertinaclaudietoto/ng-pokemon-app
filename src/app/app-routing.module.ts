import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Gestion des erreurs (Page Not Found)


const routes: Routes = [
    {path:'',redirectTo:'pokemons',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot pour la racine de l'application
  exports: [RouterModule]
})
export class AppRoutingModule { }
