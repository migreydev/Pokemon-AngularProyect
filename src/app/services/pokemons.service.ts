import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Main, Type } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000/pokemons';

  getPokemons(): Observable<Main[]>{
    return this.http.get<Main[]>(this.url);
  }

  addPokemon(pokemon: Omit<Main, 'id'>){
    return this.http.post<Main>(this.url, pokemon);
  }

  getAllTypes(): Observable<Type> {
    return this.http.get<Type>(this.url);
  }


}
