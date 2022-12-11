import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/generos'

  public obtenerTodos(): Observable<generoDTO[]> {
    return this.http.get<generoDTO[]>(this.apiURL)
  }

  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiURL, genero)
  }
}
