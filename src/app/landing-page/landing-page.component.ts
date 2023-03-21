import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas/peliculas.service';
import { PeliculaDTO } from '../peliculas/pelicula';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasServices: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasServices.obtenerLandingPage().subscribe({
      next: (landingPage => {
        this.peliculasEnCines = landingPage.enCines
        this.peliculasProximosEstrenos = landingPage.proximosEstrenos
      })
    })
  }


  title = 'Peliculas';

  peliculasEnCines: PeliculaDTO[]
  peliculasProximosEstrenos: PeliculaDTO[]
}
