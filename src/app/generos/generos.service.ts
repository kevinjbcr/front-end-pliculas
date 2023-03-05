import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/generos'

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response', params})
  }

  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiURL, genero)
  }
}
