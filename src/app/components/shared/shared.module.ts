import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { CardComponent } from './card/card.component';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    TabComponent,
    CardComponent,
    TabPreviewComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    CardComponent,
    TabPreviewComponent,
    SearchComponent
  ]
})
export class SharedModule { }