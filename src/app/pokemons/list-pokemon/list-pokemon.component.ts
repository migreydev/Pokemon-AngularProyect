import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ListPokemonComponent implements OnInit, OnChanges {

  constructor(private pokemonService : PokemonsService,
              private router: Router,
  ){}


  pokemons : Main[] = [];

  @Input() nombre: string = '';
  @Input() hp : number = 0; 

  mensaje : string = '';

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nombre']){
      this.searchPokemonByName();
    }
  }

  getPokemons(){
    this.pokemonService.getPokemons().subscribe((respuesta: Main[]) =>{
      this.pokemons = respuesta;
    });
  }

  editPokemon(id: string){
    this.router.navigate(['/pokemons',id]);
  }

  searchPokemonByName(): void {
    if (this.nombre) {

      this.pokemonService.searchPokemonByName(this.nombre).subscribe({
        next: (pokemons: Main[]) => {

          if(pokemons.length === 0){
            this.mensaje = `Error, no se ha encontrado nigún pokemon con el nombre ${this.nombre}`;
          }
          this.pokemons = pokemons;
        },
        error: error => {
          console.error('Error al buscar los Pokemon:', error);
        }
      });
    } else {
      this.getPokemons();
    }
  }

}
