import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actorDTO, actorPeliculaDTO, actoreCreacionDTO } from './actor';
import { formatearFecha } from '../utilidades/utilidades';
import { Observable } from 'rxjs';
import { environment } from '../seguridad/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private apiURL = environment.apiURL + 'actores'

  constructor(private http: HttpClient) { }

  public crear(actor: actoreCreacionDTO) {
    const formData = this.construirFormData(actor)
    return this.http.post(this.apiURL, formData)
  }

  private construirFormData(actor: actoreCreacionDTO): FormData {

    const formData = new FormData();
    formData.append('nombre', actor.nombre)

    if (actor.biografia) {
      formData.append('biografia', actor.biografia)
    }

    if (actor.fechaNacimiento) {
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento))
    }

    if (actor.foto) {
      formData.append('foto', actor.foto)
    }

    return formData;

  }

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<actorDTO[]>(this.apiURL, { observe: 'response', params })
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  public obtenerPorId(id: number): Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`)
  }

  public editar(id: number, actor: actoreCreacionDTO) {
    const formData = this.construirFormData(actor)
    return this.http.put(`${this.apiURL}/${id}`, formData)
  }

  public obtenerPorNombre(nombre: string): Observable<actorPeliculaDTO[]> {
    const headers = new HttpHeaders('Content-Type: application/json')
    return this.http.post<actorPeliculaDTO[]>(`${this.apiURL}/buscarPorNombre`, JSON.stringify(nombre), { headers })
  }

}
