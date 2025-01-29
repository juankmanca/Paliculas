import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterMayus } from '../../compartidos/componentes/validaciones';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButton, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  // Inyección de dependencias
  router = inject(Router);
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required, firstLetterMayus()], updateOn: 'blur' }],
  });

  ObtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if(nombre.hasError('firstLetterMayus')) {
      return nombre.getError('firstLetterMayus').text;
    }

    return '';
  }

  saveChanges(): void {
    // this.router.navigate(['/generos']);
    console.log('this.form.value >>:', this.form.value);

  }

  guardarCambios(): void {

  }
}
