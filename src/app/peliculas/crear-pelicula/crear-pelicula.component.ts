import { Component } from "@angular/core";
import { PeliculaCreacionDTO } from "../peliculas";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleModeloDto } from "../../compartidos/componentes/selector-multiple/SelectorMultipleModelo";


@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
 
  SelectedGenres: SelectorMultipleModeloDto[] = [];

  notSelectedGenres: SelectorMultipleModeloDto[] = [
    { key: 1, value: 'Acción' },
    { key: 2, value: 'Comedia' },
    { key: 3, value: 'Drama' },
    { key: 4, value: 'Terror' }
  ];

 saveChanges(pelicula: PeliculaCreacionDTO): void {
    console.log('Cambios guardados',pelicula );
  }

}
