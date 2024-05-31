import { Routes } from '@angular/router';
import { HomeComponent } from './pokemons/home/home.component';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'pokemons', component: ListPokemonComponent,
        children: [
            {path: ':id', component: EditPokemonComponent},
        ]
    },
    {path: 'add', component: EditPokemonComponent},
    {path: '**', component: HomeComponent}
];
