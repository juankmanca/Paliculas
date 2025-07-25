import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, Marker, marker, MarkerOptions, tileLayer, Map } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordenada } from './Coordenada';


@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  @Output() coordinateSelected = new EventEmitter<Coordenada>();
  @Input() initialCoordinates?: Coordenada[] = [];
  map!: Map;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(46.879966, -121.726909)
  }

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png'
    })
  }
  capas: Marker<any>[] = [];

  ngOnInit(): void {
    if (this.initialCoordinates) {
      this.capas = this.initialCoordinates.map(coord =>
        marker([coord.latitude, coord.longitude], { ...this.markerOptions, title: coord.text })
      );

      const first = this.initialCoordinates[0];
      if (this.map) {
        this.map.setView([first.latitude, first.longitude], 15);
      }
    }


  }

  onMapClick(event: LeafletMouseEvent): void {
    this.capas = []
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.capas.push(marker([latitude, longitude], this.markerOptions))
    this.coordinateSelected.emit({ latitude, longitude, text: 'Ubicación seleccionada' });
  }

  onMapReady(map: Map) {
    this.map = map;

    // Centrar si ya hay coordenadas cargadas
    if (this.initialCoordinates && this.initialCoordinates.length > 0) {
      const first = this.initialCoordinates[0];
      this.map.flyTo([first.latitude, first.longitude], 15, {
        animate: true,
        duration: 5
      });
    }
  }

}
