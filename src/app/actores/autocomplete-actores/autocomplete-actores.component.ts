import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  control: FormControl = new FormControl()

  actores = [
    { nombre: 'Kevin', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
    { nombre: 'Juan', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
    { nombre: 'Mauricio', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
  ]

  actoresOriginal = this.actores
  actoresSeleccionados = []

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1)
    })
  }


  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value)
    this.control.patchValue('')
  }
}
