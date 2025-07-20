import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actores',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actores.component.html',
  styleUrl: './editar-actores.component.css'
})
export class EditarActoresComponent {
  @Input({transform: numberAttribute})
  id!: number

  actor: ActorDTO = {id:1, nombre: 'Tom', fechaNacimiento: new Date()};

  SaveChanges(actor: ActorCreacionDTO){
    console.log(actor);
  }
}
