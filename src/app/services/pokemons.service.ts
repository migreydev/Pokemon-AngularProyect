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

  getPokemonById(id: string): Observable<Main>{
    const urlCompleta = `${this.url}/${id}`;
    return this.http.get<Main>(urlCompleta);
  }

  editPokemon(pokemon: Main): Observable<Main> {
    const urlCompleta = `${this.url}/${pokemon.id}`;
    return this.http.put<Main>(urlCompleta, pokemon);
  }
  
  searchPokemonByName(name: string): Observable<Main[]> {
    const urlCompleta = `${this.url}?name.english=${name}`;
    return this.http.get<Main[]>(urlCompleta);
  }

}
