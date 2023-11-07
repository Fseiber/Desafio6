import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDBService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzc4NTI3ZjFlODM4MzViNDJjNGVmZmI1YjQ4MWM1MiIsInN1YiI6IjY1MmQ1OThmMzlhMWE2MDEwMDI5OWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dbYia4gDtP2c7xD4REO_NB7Cp0zaWi2uDpxCRfoQm1c';
  private apiUrl = 'https://api.themoviedb.org/3/trending/all';

  constructor(private http: HttpClient) {}

  getTrending() {
    const url = `${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovies() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getSeries() {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}