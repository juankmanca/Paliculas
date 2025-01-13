import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ListadoPeliculasComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  peliculasEnCine!: any[];
  peliculasEnProximosEstrenos!: any[];

  ngOnInit(): void {
    this.peliculasEnCine = [
      {
        titulo: ''
      }
    ];
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Berserk',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berserk_anime_logo.png/280px-Berserk_anime_logo.png'
        }
      ]

      this.peliculasEnCine = [
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Berserk',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berserk_anime_logo.png/280px-Berserk_anime_logo.png'
        }
      ]
      
      this.peliculasEnProximosEstrenos = [
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'The Penguin',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SDCc_2012_-_The_Penguin_%287567636090%29.jpg/480px-SDCc_2012_-_The_Penguin_%287567636090%29.jpg'
        },
        {
          titulo: 'Spider-man 2',
          fechaLanzamiento: new Date(),
          precio: 13.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Venom 2',
          fechaLanzamiento: new Date(),
          precio: 15.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg/375px-San_Diego_Comic-Con_2014_-_Venom_%2814584927619%29.jpg'
        },
        {
          titulo: 'Berserk',
          fechaLanzamiento: new Date(),
          precio: 123.99,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berserk_anime_logo.png/280px-Berserk_anime_logo.png'
        }
      ]
  }, 1000); 
  }

  clickBoton(): void {
    alert('Hola Mundo!');
  }

}

