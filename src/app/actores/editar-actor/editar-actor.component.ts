import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO, actoreCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Kevin', fechaNacimiento: new Date(), foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //TODO:

    })
  }

  guardarCambios(actor: actoreCreacionDTO) {
    console.log(actor)

  }

}
