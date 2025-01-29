import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'generos', component: IndiceGenerosComponent },
  { path: 'generos/crear', component: CrearGenerosComponent },
  { path: 'generos/editar/:id', component: EditarGenerosComponent },
  { path: 'actores', component: IndiceActoresComponent },
  { path: 'actores/crear', component: CrearActoresComponent },
  { path: 'actores/editar/:id', component: EditarActoresComponent },
  { path: 'cines', component: IndiceCinesComponent },
  { path: 'cines/crear', component: CrearCinesComponent },
  { path: 'cines/editar/:id', component: EditarCinesComponent },
  { path: 'peliculas/crear', component: CrearPeliculaComponent },
  { path: 'peliculas/editar/:id', component: EditarPeliculasComponent },
  {path: '**', component: NotFoundComponent}
];
