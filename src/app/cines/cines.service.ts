import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cineCreacionDTO, cineDTO } from './cine';
import { Observable } from 'rxjs';
import { generoDTO } from '../generos/genero';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/cines'

  public crear(cine: cineCreacionDTO) {
    return this.http.post(this.apiURL, cine)
  }

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<cineDTO[]>(this.apiURL, { observe: 'response', params })
  }
  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  
}
