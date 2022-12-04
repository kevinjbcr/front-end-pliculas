import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Acción' },
    { id: 3, nombre: 'Comedia' },
  ]

  peliculas = [
    { titulo: 'Dragon Ball', enCines: false, proximosEstrenos: false, generos: [1, 2], poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
    { titulo: 'Naruto', enCines: true, proximosEstrenos: true, generos: [3], poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
    { titulo: 'One Pice', enCines: true, proximosEstrenos: false, generos: [1, 3], poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png' },
  ]

  peliculasOriginal = this.peliculas

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal)

    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal
      this.buscarPeliculas(valores)
    })
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }
    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
    }
  }

  limpiar() { 
    this.form.patchValue(this.formularioOriginal)
  }




}
