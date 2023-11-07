import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrendingReponse } from '../../app/models/trending.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl: string = 'https://api.themoviedb.org/3/' //declaramos la URL de la API que vamos a usar

  constructor(private _http: HttpClient) { //declaramos el uso del protocolo que nos va a permitir conectarnos a una API externa
  }

  getTrending(): Observable<ITrendingReponse> {
    let params = { language: 'es-ES' }; //declaramos parametros para el idioma
    let headers = { //declaramos encabezados necesarios para la petición a la API
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }
    return this._http.get<ITrendingReponse>(this.apiUrl + 'trending/all/week', {
      params: params,
      headers: headers
    }) //hacemos uso de los valores declarados y los enviamos en el body de la petición
  }
}