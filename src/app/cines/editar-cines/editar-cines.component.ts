import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDto, CineDto } from '../cines';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';

@Component({
  selector: 'app-editar-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent {
  @Input({transform: numberAttribute})
  id!: number

  cine: CineDto = { id: 1, nombre: 'Cine Ejemplo', latitud: 6.259646989315406, longitud: -75.55818699301575};

  SaveChanges(cine: CineCreacionDto) {
    console.log('Cine actualizado:', cine);
  }
}
