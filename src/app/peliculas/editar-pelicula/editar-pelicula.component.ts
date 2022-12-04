import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  modelo: PeliculaDTO = {
    titulo: 'Naruto', trailer: 'https://youtu.be/MK1uU3sfKfs', enCines: true, resumen: 'resumen...',
    fechaLanzamiento: new Date(), poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula)
  }
}
