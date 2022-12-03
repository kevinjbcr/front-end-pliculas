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
          precio: 1400.99,
          poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date(),
          precio: 300.99,
          poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
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
      precio: 1400.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Hulk',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'Naruto',
      fechaLanzamiento: new Date(),
      precio: 300.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    },
    {
      titulo: 'One Piece',
      fechaLanzamiento: new Date(),
      precio: 562.99,
      poster: 'https://cdn.pixabay.com/photo/2022/08/07/07/50/skateboard-7370081__340.png'
    }

  ]

  duplicarNumero(valor: number): number {
    return valor * 2
  }

  manejarRated(voto: number): void{
    alert(voto)
  }

}
