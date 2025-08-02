import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MapaComponent } from '../../compartidos/componentes/mapa/mapa.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, RouterLink, MatButtonModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent {
 

   @Input() modelo?: PeliculaDTO;
  @Output() onSave = new EventEmitter<PeliculaDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', Validators.required],
    fechaEstreno: new FormControl<Date | null>(null, Validators.required),
    trailer: [''],
    poster: new FormControl<File | string | null>(null, Validators.required)
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File): void {
    this.form.controls.poster.setValue(archivo);
  }

  saveChanges(): void {
    if (this.form.valid) {
      const pelicula = this.form.value as PeliculaCreacionDTO;
      pelicula.fechaEstreno = moment(pelicula.fechaEstreno).toDate();
      this.onSave.emit(this.form.value as PeliculaDTO);
    } else {
      return;
    }
  }

  getErrorTitulo(): string {
    let titulo = this.form.controls.titulo;
    if (titulo.hasError('required')) {
      return 'El campo es requerido';
    }
    return '';
  }

  getErrorFechaEstreno(): string {
    let fechaEstreno = this.form.controls.fechaEstreno;
    if (fechaEstreno.hasError('required')) {
      return 'El campo es requerido';
    }
    return '';
  }
}
