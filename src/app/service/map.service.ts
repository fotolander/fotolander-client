// import { Injectable } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl';
// import { environment } from "src/environments/environment";
// import {map} from "rxjs/operators";
// @Injectable({
//   providedIn: 'root'
// })
// export class MapService {
//   map: mapboxgl.Map;
//   style = 'mapbox://styles/zolleander/ckqkp1l434bfm17pfy41pfmiy';
//   lat = 52.068487910382366;
//   lng = 19.47964484087672;
//   zoom = 6
//   constructor() {
//     mapboxgl.accessToken = environment.mapbox.accessToken;
//   }
//   buildMap() {
//     this.map = new mapboxgl.Map({
//       container: 'map',
//       style: this.style,
//       zoom: this.zoom,
//       center: [this.lng, this.lat]
//     })
//     this.map.addControl(new mapboxgl.NavigationControl());
//     this.newMarker(18.643798828125, 54.351754357424696)
//   }
//
//   newMarker(lng: number, lat: number) {
//     const marker = new mapboxgl.Marker({
//       draggable:false
//     })
//       .setLngLat([lng,lat])
//       .addTo(this.map);
//   }
//
// }
