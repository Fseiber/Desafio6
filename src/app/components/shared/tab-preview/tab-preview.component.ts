import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-preview',
  templateUrl: './tab-preview.component.html',
  styleUrls: ['./tab-preview.component.css']
})
export class TabPreviewComponent {

  @Input() size: number = 0;
  @Input() tabLabelSelected: string = ''

}