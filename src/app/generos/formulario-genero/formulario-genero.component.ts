import { Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstLetterMayus } from '../../compartidos/componentes/validaciones';
import { GeneroCreaacionDTO, GeneroDTO } from '../Genero';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButton , MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css',
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required, firstLetterMayus()], updateOn: 'blur' }],
  });
  @Output() onSaveChanges = new EventEmitter<GeneroCreaacionDTO>();
  @Input() modelo?: GeneroDTO ;

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
    const genero = this.form.value as GeneroCreaacionDTO;
    this.onSaveChanges.emit(genero);
  }

}
