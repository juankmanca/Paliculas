import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'generos',
    component: IndiceGenerosComponent
  },{
    path: 'generos/crear',
    component: IndiceGenerosComponent
  }
];
