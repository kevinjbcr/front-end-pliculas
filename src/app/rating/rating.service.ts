import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/rating'

  rate(peliculaId: number, puntuacion: number) {
    return this.httpClient.post(this.apiURL, { peliculaId, puntuacion })
  }

}
