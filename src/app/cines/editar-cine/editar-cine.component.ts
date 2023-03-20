import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';
import { ActivatedRoute, Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private router: Router, private cinesServices: CinesService, private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO;
  errores: string[] = []

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cinesServices.obtenerPorId(params.id)
        .subscribe({
          next: (genero) => this.modelo = genero,
          error: () => this.router.navigate(['/cines'])
        })
    })
  }

  guardarCambios(cine: cineCreacionDTO) {    

    this.cinesServices.editar(this.modelo.id, cine)
      .subscribe({
        next: () => {this.router.navigate(['/cines'])},
        error: (error) => this.errores = parsearErroresAPI(error)
      })


    this.router.navigate(['/cines'])
  }

}