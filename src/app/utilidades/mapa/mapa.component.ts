import { Component } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: latLng(10.259355331031399, -85.586194396019),
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: ''
    })
  }

  capas: Marker<any>[] = []

  manejarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat
    const longitud = event.latlng.lng
    console.log({ latitud, longitud })
    this.capas = []

    this.capas.push(marker([latitud, longitud]))

  }

}
