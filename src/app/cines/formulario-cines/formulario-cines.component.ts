import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDto, CineDto } from '../cines';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { Coordenada } from '../../compartidos/componentes/mapa/Coordenada';

@Component({
  selector: 'app-formulario-cines',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, RouterLink, MatButtonModule, MapaComponent],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css'
})
export class FormularioCinesComponent {
  @Input() modelo?: CineDto;
  @Output() onSave = new EventEmitter<CineCreacionDto>();
  private formBuilder = inject(FormBuilder);
  initialCoordinates: Coordenada[] = [];

  form = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required])
  });

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.initialCoordinates.push({
        latitude: this.modelo.latitud ?? 0,
        longitude: this.modelo.longitud ?? 0
      })
    }
  }

  getErrorFieldName(): string {
    let name = this.form.controls.nombre;
    if (name.hasError('required')) {
      return 'El campo es requerido';
    }
    return '';
  }

  saveChanges(): void {
    if (this.form.valid) {
      this.onSave.emit(this.form.value as CineCreacionDto);
    } else {
      return;
    }
  }

  coordinateSelected(coordinate: Coordenada): void {
    this.form.patchValue({
      latitud: coordinate.latitude,
      longitud: coordinate.longitude
    });
    console.log('Coordenada seleccionada:', coordinate);
  }
}
