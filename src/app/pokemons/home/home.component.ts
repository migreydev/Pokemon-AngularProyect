import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ListPokemonComponent } from "../list-pokemon/list-pokemon.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [RouterLink, SearchComponent, ListPokemonComponent]
})
export class HomeComponent {

    nombre: string = '';


}
