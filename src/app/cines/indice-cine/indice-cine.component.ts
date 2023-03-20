import { Component, OnInit } from '@angular/core';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-cine',
  templateUrl: './indice-cine.component.html',
  styleUrls: ['./indice-cine.component.css']
})
export class IndiceCineComponent implements OnInit{

  constructor(private cinesService: CinesService) { }

  cines: cineDTO[]
  columnasAMostrar = ['id', 'nombre', 'acciones']
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe({
        next: (respuesta: HttpResponse<cineDTO[]>) => {
          this.cines = respuesta.body,
            this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros")
        },
        error: (error) => console.error(error)

      })
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1
    this.cantidadRegistrosAMostrar = datos.pageSize
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  borrar(id: number) {
    this.cinesService.borrar(id)
      .subscribe({
        next: () => this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar),
        error: (error) => console.log(error)
      })
  }
  
}
