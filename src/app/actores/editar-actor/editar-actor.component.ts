import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actoreCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actoreCreacionDTO = {nombre: 'Kevin', fechaNacimiento: new Date()}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //TODO:

    })
  }

  guardarCambios(actor: actoreCreacionDTO) {
    console.log(actor)

  }

}
