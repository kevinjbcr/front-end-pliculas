import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorDTO, actoreCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  //Emite hacia al componente padre
  @Output()
  OnSubmit: EventEmitter<actorDTO> = new EventEmitter<actorDTO>()

  //Parametros del componente
  @Input()
  modelo: actorDTO

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    })

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }

  cambioMarkdown(event: string){
    this.form.get('biografia').setValue(event)

  }

  onSubmit() {
    this.OnSubmit.emit(this.form.value)
  }

  archivoSeleccionado(file) {
    this.form.get('foto').setValue(file)
  }




}
