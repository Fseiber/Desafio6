import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() options: any[] = [] //hacemos uso del decorador de entrada para recibir las opciones a mostrar
  @Input() active: string = '' // hacemos uso del decorador de entrada para recibir el valor del botón activo
  @Output() handleSelectOption = new EventEmitter<string>(); //hacemos uso del decorador de salida para declarar el evento que nos va a permitir comunicar al componente padre el valor del nuevo tab

  selectOption(value: any) {
    return this.handleSelectOption.emit(value)
  }

}