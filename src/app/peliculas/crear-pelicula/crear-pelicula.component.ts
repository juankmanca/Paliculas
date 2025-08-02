import { Component } from "@angular/core";
import { PeliculaCreacionDTO } from "../peliculas";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";


@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
 
 saveChanges(pelicula: PeliculaCreacionDTO): void {
    console.log('Cambios guardados',pelicula );
  }

}
