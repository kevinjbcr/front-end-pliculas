import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../seguridad/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL + 'rating'

  rate(peliculaId: number, puntuacion: number) {
    return this.httpClient.post(this.apiURL, { peliculaId, puntuacion })
  }

}
