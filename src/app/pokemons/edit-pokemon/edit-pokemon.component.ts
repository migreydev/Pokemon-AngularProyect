import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
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
              private router : Router,
              private route : ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getAllTypes();
    this.route.params.subscribe(param => {
      const id = param['id'];

      if(id){
        this.modeEdit = true;
        this.getPokemonById();
      }
    })
  }

  id !: string;
  typeSelect : string[] = [];
  modeEdit : boolean = false;

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
    name: this.nameEdit,
    type: this.typeEdit,
    base: this.baseEdit
  };
  

  getAllTypes() {
    this.typeSelect = Object.values(Type);
  }

  getPokemonById() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.pokemonService.getPokemonById(id).subscribe({
        next: pokemon => {
          this.pokemonEdit = pokemon;
        },
        error: error => {
          console.error('Error:', error);
        }
      });
    });
  }
  


  onSubmit(){
    this.route.params.subscribe(params =>{
      const id = params['id'];

      if(this.modeEdit){
      this.pokemonService.editPokemon(this.pokemonEdit).subscribe({
        next: () =>{
          this.router.navigate(['/']);
        },
        error: error =>{
          console.error('Error al editar un pokemon ', error);
        }
      })

      }else {

        this.pokemonService.addPokemon(this.pokemon).subscribe({
          next: pokemon => {
            this.router.navigate(['/']);
          },
          error: error =>{
            console.error('Error al añadir un pokemon ', error);
          }
        })
      }
    })
  }
  
}




