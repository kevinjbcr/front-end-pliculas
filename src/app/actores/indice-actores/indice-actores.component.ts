import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';
import { actorDTO } from '../actor';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  constructor(private actoresServices: ActoresService) { }

  actores: actorDTO[]
  columnasAMostrar = ['id', 'nombre', 'acciones']
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.actoresServices.obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe({
        next: (respuesta: HttpResponse<actorDTO[]>) => {
          this.actores = respuesta.body,
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
    this.actoresServices.borrar(id)
      .subscribe({
        next: () => this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar),
        error: (error) => console.log(error)
      })
  }

}
