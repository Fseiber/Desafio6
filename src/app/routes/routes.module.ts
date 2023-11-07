import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SharedModule } from "../shared/shared.module";
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
    declarations: [
        PeliculasComponent,
        InicioComponent,
        SeriesComponent,
        IngresarComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class RoutesModule { }