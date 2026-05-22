import { Component } from '@angular/core';
import { MainGameButtonComponent } from '../main-game-button/main-game-button.component';
import { CoffeeButtonComponent } from '../main-game/coffee-button/coffee-button.component';

@Component({
  selector: 'app-not-found',
  imports: [MainGameButtonComponent, CoffeeButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
