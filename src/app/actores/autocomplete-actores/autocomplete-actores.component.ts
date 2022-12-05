import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  control: FormControl = new FormControl()

  actores = [
    { nombre: 'Kevin', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png', personaje: '' },
    { nombre: 'Juan', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png', personaje: '' },
    { nombre: 'Mauricio', foto: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png', personaje: '' },
  ]

  actoresOriginal = this.actores
  actoresSeleccionados = []

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones']
  @ViewChild(MatTable) table: MatTable<any>

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
    if (this.table !== undefined) {
      this.table.renderRows()
    }
  }

  eliminar(actor) {
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre)
    this.actoresSeleccionados.splice(indice, 1)
    this.table.renderRows()
  }

  finalizarArratre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data)
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex)
    this.table.renderRows()
  }
}
