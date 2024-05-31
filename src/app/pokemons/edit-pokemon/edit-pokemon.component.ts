import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { Base, Main, Name, Type } from '../../interfaces/pokemon';
import { FormsModule } from '@angular/forms';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit{

  constructor (private pokemonService : PokemonsService,
              private router : Router
  ) {}


  ngOnInit(): void {
    this.getAllTypes();
  }

  id !: string;
  typeSelect : string[] = [];;

  name : Name = {
    english:  '',
    japanese: '',
    chinese:  '',
    french:   ''
}

  base: Base = {
    HP: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Attack": 0,
    "Sp. Defense": 0,
    Speed: 0
  }

  type: Type[] = [
    
  ];

  pokemon: Omit<Main, 'id'> = {
    name: this.name,
    type: this.type,
    base: this.base
  };

  nameEdit : Name = {
    english:  '',
    japanese: '',
    chinese:  '',
    french:   ''
}

  baseEdit: Base = {
    HP: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Attack": 0,
    "Sp. Defense": 0,
    Speed: 0
  }

  typeEdit: Type[] = [];

  pokemonEdit: Main = {
    id: '',
    name: this.name,
    type: this.typeEdit,
    base: this.base
  };

  getAllTypes() {
    this.typeSelect = Object.values(Type);
  }


  onSubmit(){
    this.pokemonService.addPokemon(this.pokemon).subscribe({
      next: pokemon => {
        this.router.navigate(['/']);
      },
      error: error =>{
        console.error('Error: ', error);
      }
    })
  }
  
}




