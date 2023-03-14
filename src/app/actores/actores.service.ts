import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actoreCreacionDTO } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private apiURL = 'https://localhost:7067/api/actores'

  constructor(private http: HttpClient) { }

  public crear(actor: actoreCreacionDTO){
    return this.http.post(this.apiURL, actor)
  }
}
