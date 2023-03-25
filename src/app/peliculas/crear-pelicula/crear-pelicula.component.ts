import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculasService } from '../peliculas.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private peliculasService: PeliculasService, private router: Router) { }

  generosNoSeleccionados: MultipleSelectorModel[]
  cinesNoSeleccionados: MultipleSelectorModel[]
  errores: string[] = []

  ngOnInit(): void {
    this.peliculasService.posGet()
      .subscribe({
        next: (resultado) => {

          this.generosNoSeleccionados = resultado.generos.map(genero => {
            return <MultipleSelectorModel>{ llave: genero.id, valor: genero.nombre }
          })

          this.cinesNoSeleccionados = resultado.cines.map(cine => {
            return <MultipleSelectorModel>{ llave: cine.id, valor: cine.nombre }
          })

        },
        error: (error) => console.log(error)

      })
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.crear(pelicula)
      .subscribe({
        next: (id: number) => this.router.navigate(['/pelicula/' + id]),
        error: (error) => this.errores = parsearErroresAPI(error)
      })
  }

}
