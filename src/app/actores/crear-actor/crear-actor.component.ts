import { Component } from '@angular/core';
import { actorDTO, actoreCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {

  guardarCambios(actor: actorDTO) {
    console.log(actor)

  }

}
