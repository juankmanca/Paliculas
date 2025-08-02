import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-editar-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-peliculas.component.html',
  styleUrl: './editar-peliculas.component.css'
})
export class EditarPeliculasComponent {
  @Input({transform: numberAttribute})
  id!: number

  pelicula: PeliculaDTO = {
    titulo: 'Pelicula de prueba',
    fechaEstreno: new Date(),
    trailer: 'https://www.youtube.com/watch?v=example',
    poster: 'https://example.com/poster.jpg',
    id: 1
  }

  saveChanges(pelicula: PeliculaDTO): void {
    console.log('Cambios guardados', pelicula);
    // Aquí podrías llamar a un servicio para actualizar la película
  }

}
