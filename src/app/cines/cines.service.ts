import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cineCreacionDTO } from './cine';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7067/api/cines'

  public crear(cine: cineCreacionDTO) {
    return this.http.post(this.apiURL, cine)
  }
  
}
