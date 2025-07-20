import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroCreaacionDTO, GeneroDTO } from '../Genero';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";

@Component({
  selector: 'app-editar-generos',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({transform: numberAttribute})
  id!: number

  genero: GeneroDTO = {id: this.id, nombre: 'Drama'};

  SaveChanges(genero: GeneroCreaacionDTO){
    console.log(genero);
  }
}
