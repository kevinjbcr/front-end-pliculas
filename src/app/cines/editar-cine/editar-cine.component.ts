import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO = { nombre: 'Cinepolis', latitud: 10.256610256314035, longitud: -85.58451533317566 }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine)

  }
}
