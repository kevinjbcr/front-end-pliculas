import { Component } from '@angular/core';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private seguridadService: SeguridadService, private router: Router) { }

  errores: string[] = []

  registrar(credenciales: credencialesUsuario) {
    this.seguridadService.registrar(credenciales)
      .subscribe({
        next: (respuesta) => {
          this.seguridadService.guardarToken(respuesta)
          this.router.navigate(['/'])
        },
        error: (errores) => this.errores = parsearErroresAPI(errores)

      })
  }

}
