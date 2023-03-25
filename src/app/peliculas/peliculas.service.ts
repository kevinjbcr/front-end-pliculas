import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageDTO, PeliculaCreacionDTO, PeliculaDTO, PeliculaPutGet, PeliculasPosGet } from './pelicula';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/peliculas'

  public posGet(): Observable<PeliculasPosGet> {
    return this.http.get<PeliculasPosGet>(`${this.apiURL}/postget`)
  }

  public obtenerPorId(id: number): Observable<PeliculaDTO> {
    return this.http.get<PeliculaDTO>(`${this.apiURL}/${id}`)
  }

  public obtenerLandingPage(): Observable<LandingPageDTO> {
    return this.http.get<LandingPageDTO>(this.apiURL)
  }

  public crear(pelicula: PeliculaCreacionDTO): Observable<number> {
    const formData = this.ConstruirFormData(pelicula)
    return this.http.post<number>(this.apiURL, formData)
  }

  public editar(id: number, pelicula: PeliculaCreacionDTO) {
    const formData = this.ConstruirFormData(pelicula)
    return this.http.put(`${this.apiURL}/${id}`, formData)
  }

  public putGet(id: number): Observable<PeliculaPutGet> {
    return this.http.get<PeliculaPutGet>(`${this.apiURL}/PutGet/${id}`)
  }

  private ConstruirFormData(pelicula: PeliculaCreacionDTO): FormData {
    const formData = new FormData()

    formData.append('titulo', pelicula.titulo)
    formData.append('resumen', pelicula.resumen)
    formData.append('trailer', pelicula.trailer)
    formData.append('enCines', String(pelicula.enCines))
    if (pelicula.fechaLanzamiento) {
      formData.append('fechaLanzamiento', formatearFecha(pelicula.fechaLanzamiento))
    }

    if (pelicula.poster) {
      formData.append('poster', pelicula.poster)
    }
    formData.append('generosIds', JSON.stringify(pelicula.generosIds))
    formData.append('cinesIds', JSON.stringify(pelicula.cinesIds))
    formData.append('actores', JSON.stringify(pelicula.actores))

    return formData
  }

  public filtrar(valores: any): Observable<any> {
    const params = new HttpParams({ fromObject: valores })
    return this.http.get<PeliculaDTO[]>(`${this.apiURL}/filtrar`, { params, observe: 'response' })
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`)
  }

}
