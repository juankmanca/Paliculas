import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GeneroCreaacionDTO } from '../../generos/Genero';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { DateCantBeFuture } from '../../compartidos/functions/validations';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  @Input() modelo?: ActorDTO;
  @Output() onSaveChanges = new EventEmitter<ActorCreacionDTO>();
  private formBuilder = inject(FormBuilder);
  public form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required]
    }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, DateCantBeFuture()]
    }),
    foto: new FormControl<File | string | null>(null)
  });

  GetErrorFieldBornDate(): string {
    let field = this.form.controls.fechaNacimiento;
    if (field.hasError('future')) {
      return field.getError('future')?.message || '';
    }
    if (field.hasError('required')) {
      return 'El campo es requerido';
    }

    return '';
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  GetErrorFieldName(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El campo es requerido';
    }

    return '';
  }

  SaveChanges(): void {
    if (!this.form.valid) return;
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();

    if(typeof actor.foto === 'string') {
      actor.foto = null; // If the foto is a string, we set it to
    }
    this.onSaveChanges.emit(actor);

  }

  imageSelected(file: File): void {
    this.form.patchValue({ foto: file });
  }
}
