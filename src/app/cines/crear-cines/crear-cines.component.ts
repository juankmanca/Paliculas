import { Component } from '@angular/core';
import { CineCreacionDto } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css'
})
export class CrearCinesComponent {
  SaveChanges(actor: CineCreacionDto): void {
    console.log('creando cine' + actor);
  }
}
