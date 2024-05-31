import { Component } from '@angular/core';
import { HomeComponent } from '../../pokemons/home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [HomeComponent, RouterLink ],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

}
