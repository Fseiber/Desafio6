import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private movieService: MoviesService) {

  }

  ngOnInit(): void {
    this.movieService.getTrending().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

}