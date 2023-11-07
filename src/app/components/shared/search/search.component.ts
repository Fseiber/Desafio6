import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() handleSearchEvent = new EventEmitter<string>() //declaración del evento el cuál nos habilita a poder enviarle data al componente 'padre'

  search(value: any) {
    this.handleSearchEvent.emit(value.target.value) //hacemos uso del evento y emitimos el valor al componente 'padre'
  }

}