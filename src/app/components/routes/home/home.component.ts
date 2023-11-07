import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/trending.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true //variable que manipula la aparición del spinner en momentos de carga
  listFilms: IMovie[] = [] //variable la cuál usaremos para manipular la data según las acciones del usuario
  listOriginalFilms: IMovie[] = [] //variable para servir de soporte/auxiliar al manipular la data según las acciones del usuario

  optionsTab: any[] = [ //variable creada para proporcionar estructura al componente tab
    {
      label: 'Todos',
      value: 'all',
    },
    {
      label: 'Peliculas',
      value: 'movie',
    },
    {
      label: 'Series',
      value: 'tv',
    },
  ]

  tabValue: any = {
    label: 'Todos',
    value: 'all'
  }

  constructor(private movieService: MoviesService ) { //declaración del servicio usado

  }

  ngOnInit(): void { //ngOnInit se ejecuta cuando el componente carga por primera vez (investigar ciclo de vida de componentes de Angular)
    this.getTrending()
  }

  getTrending() { //función que logra guardar la data necesaria por medio de la conexión al servicio
    this.movieService.getTrending().subscribe({
      next: (response) => {
        this.listFilms = response.results
        this.listOriginalFilms = response.results
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  getTabSelected(value: any) { //guarda el nuevo tab elegido y filtra con respecto al valor
    this.tabValue = value 
    this.filterFilms(this.tabValue.value)
  }

  searchFilm(value: string) { //realiza una búsqueda de acuerdo al valor devuelto por el componente search
    if (!value.length) return this.filterFilms(this.tabValue.value)
    return this.listFilms = this.listFilms.filter((item: IMovie) => item.title ? item.title.toLowerCase().match(value.toLocaleLowerCase()) : item.name?.toLowerCase().match(value.toLocaleLowerCase()))
  }

  filterFilms(value: string) { //filtra la data principal de acuerdo al tab elegido
    if (value === 'all') return this.listFilms = this.listOriginalFilms
    else {
      return this.listFilms = this.listOriginalFilms.filter((item: IMovie) => item.media_type === value)
    }
  }
}