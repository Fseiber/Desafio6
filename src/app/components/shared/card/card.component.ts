import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/trending.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() dataOfMovie: IMovie = {} as IMovie //decorador que nos permite recibir información del componente 'padre'

  constructor() {

  }

  

}