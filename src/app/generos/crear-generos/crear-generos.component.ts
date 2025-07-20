import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { firstLetterMayus } from '../../compartidos/componentes/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreaacionDTO } from '../Genero';

@Component({
  selector: 'app-crear-generos',
  imports: [ FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  standalone: true
})
export class CrearGenerosComponent {
  // Inyección de dependencias

  SaveChanges(gender: GeneroCreaacionDTO){
    console.log(gender);
  }
 
}
