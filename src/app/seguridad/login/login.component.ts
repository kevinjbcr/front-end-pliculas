import { Component } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Router } from '@angular/router';
import { credencialesUsuario } from '../seguridad';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private seguridadService: SeguridadService, private router: Router) { }

  errores: string[] = []

  login(credenciales: credencialesUsuario) {
    this.seguridadService.login(credenciales)
      .subscribe({
        next: (respuesta) => {
          this.seguridadService.guardarToken(respuesta)
          this.router.navigate(['/'])
        },
        error: (errores) => this.errores = parsearErroresAPI(errores)
      })
  }

}
