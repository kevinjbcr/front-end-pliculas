import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasPosGet } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/peliculas'

  public posGet(): Observable<PeliculasPosGet> {
    return this.http.get<PeliculasPosGet>(`${this.apiURL}/postget`)
  }

}
