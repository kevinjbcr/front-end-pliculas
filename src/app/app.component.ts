import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date(),
          precio: 300.99
        }

      ]
    }, 500);
  }


  title = 'Peliculas';

  peliculasEnCines
  peliculasProximosEstrenos = [
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99
    }

  ]

  duplicarNumero(valor: number): number {
    return valor * 2
  }

  manejarRated(voto: number): void{
    alert(voto)
  }

}
