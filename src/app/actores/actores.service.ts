import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actoreCreacionDTO } from './actor';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private apiURL = 'https://localhost:7067/api/actores'

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
}
