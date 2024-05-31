import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EditPokemonComponent } from '../edit-pokemon/edit-pokemon.component';
import { PokemonsService } from '../../services/pokemons.service';
import { Main } from '../../interfaces/pokemon';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterOutlet, EditPokemonComponent],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit{

  constructor(private pokemonService : PokemonsService,
              private router: Router,
  ){}

  pokemons : Main[] = [];

  ngOnInit(): void {
    this.getPokemons();
    
  }

  getPokemons(){
    this.pokemonService.getPokemons().subscribe((respuesta: Main[]) =>{
      this.pokemons = respuesta;
    });
  }

  editPokemon(id: string){
    this.router.navigate(['/pokemons',id]);
  }

}
