import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  mostrar : boolean = false;

  @Output() enviarNombre = new EventEmitter<string>();
  nombre: string = '';

  ocultarBusqueda(){
    this.mostrar = true;
  }

  mostrarBusqueda(){
    this.mostrar = false;
  }

  enviar(){
    this.enviarNombre.emit(this.nombre);
  }

}
