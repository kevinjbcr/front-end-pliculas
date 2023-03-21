import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor(private peliculasServices: PeliculasService, private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }
  pelicula: PeliculaDTO
  fechaLanzamiento: Date
  trailerURL: SafeResourceUrl
  coordenadas: CoordenadaConMensaje[]

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (params) => {
        this.peliculasServices.obtenerPorId(params.id).subscribe({
          next: (pelicula) => {
            console.log(pelicula)
            
            this.pelicula = pelicula
            this.fechaLanzamiento = new Date(this.pelicula.fechaLanzamiento)
            this.trailerURL = this.generarURLYoutubeEmbed(this.pelicula.trailer)
            this.coordenadas = pelicula.cines.map(cine => {
              return {longitud: cine.longitud, latitud: cine.latitud, mensaje: cine.nombre}
            })
          }
        })
      }
    })
  }

  generarURLYoutubeEmbed(url: any) {
    if (!url) { return '' }

    var video_id = url.split('v=')[1]
    var posicionAmpersand = video_id.indexOf('&')
    if (posicionAmpersand !== -1) {
      video_id = video_id.substring(0, posicionAmpersand)
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`)
  }

}
