import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [
    ListadoGenericoComponent,
    MatButtonModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  title = 'angular-peliculas';
  date: Date = new Date()

  @Input({ required: true })
  peliculas!: any[];

  ngOnInit(): void {
  }



}
