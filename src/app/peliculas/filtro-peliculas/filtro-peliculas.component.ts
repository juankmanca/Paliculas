import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPelicula } from './filtroPelicula';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent {

  private formBuilder = inject(FormBuilder)
  private location = inject(Location);
  private activedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    titulo: '',
    enCines: false,
    proximosEstrenos: false,
    generoId: 0
  });

  generos = [
    { id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Drama' },
    { id: 4, nombre: 'Terror' }
  ];

  originalMovies = [
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

  filteredMovies = this.originalMovies;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getValuesURL();
    this.searchMovies(this.form.value as FiltroPelicula);
    this.form.valueChanges.subscribe(valores => {
      this.filteredMovies = this.originalMovies;
      this.searchMovies(valores as FiltroPelicula);
      this.writeParametersQueryInUrl(valores as FiltroPelicula);
    });
  }

  searchMovies(filter: FiltroPelicula): void {
    if (!filter) return;
    if (filter.titulo) {
      this.filteredMovies = this.filteredMovies.filter(movie =>
        filter.titulo ? movie.titulo.toLowerCase().includes(filter.titulo.toLowerCase()) : true
      );
    }
  }

  clear(): void {
    this.form.reset();
    this.filteredMovies = this.originalMovies;
  }


  writeParametersQueryInUrl(values: FiltroPelicula): void {
    let queryStrings = [];

    // Agregar query string según los valores del filtro
    if (values.titulo) {
      queryStrings.push(`titulo=${encodeURIComponent(values.titulo)}`);
    }

    this.location.replaceState(`peliculas/filtrar`, queryStrings.join('&'));
  }

  getValuesURL(): void {
    this.activedRoute.queryParams.subscribe(params => {
      if (params['titulo']) {
        this.form.patchValue({ titulo: params['titulo'] });
      }
    });
  }
}
