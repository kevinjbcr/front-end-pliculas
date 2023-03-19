import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorDTO, actoreCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private router: Router, private actoressServices: ActoresService, private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO;
  errores: string[] = []

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.actoressServices.obtenerPorId(params.id)
        .subscribe({
          next: (genero) => this.modelo = genero,
          error: () => this.router.navigate(['/actores'])
        })
    })
  }

  guardarCambios(actor: actoreCreacionDTO) {    

    this.actoressServices.editar(this.modelo.id, actor)
      .subscribe({
        next: () => {this.router.navigate(['/actores'])},
        error: (error) => this.errores = parsearErroresAPI(error)
      })


    this.router.navigate(['/actores'])
  }

}
