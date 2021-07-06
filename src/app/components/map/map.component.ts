import { Component, OnInit } from '@angular/core';
// import {MouseEvent} from "@agm/core";
// import {MapService} from "../../service/map.service";
import {Place} from "../../model/place.model";
import {PlaceService} from "../../service/place.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'Get inspired';
  lat = 52.068487910382366;
  lng = 19.47964484087672;

  public places: Place[] = [];

  constructor(
    private placesService: PlaceService,
    private router: Router) {
    placesService.showPlaces().subscribe(
      (places: Place[]) => {
        this.places = places;
      });
  }

  ngOnInit(): void {
  }

  onGoToThisPlace(name: string) {
    this.router.navigate(['/','places','all',name]);
  }
}

//do uruchomienia mpy z agm
// export class MapComponent implements OnInit {
//
//   title = 'Get inspired';
//   lat = 52.068487910382366;
//   lng = 19.47964484087672;
//
//   public places: Place[] = [];
//
//   constructor(
//     private placesService: PlaceService,
//     private router: Router) {
//     placesService.showPlaces().subscribe(
//       (places: Place[]) => {
//         this.places = places;
//       });
//   }
//
//   ngOnInit(): void {
//   }
//
//   onGoToThisPlace(name: string) {
//     this.router.navigate(['/','places','all',name]);
//   }
// }




// latitude = 52.068487910382366;
// longitude = 19.47964484087672;
// zoom: number = 7 ;

// clickedMarker(label: string, index: number) {
//   console.log(`clicked the marker: ${label || index}`)
// }

// mapClicked($event: MouseEvent) {
//   this.markers.push({
//     lat: $event.coords.lat,
//     lng: $event.coords.lng,
//     draggable: true
//   });
// }

// markerDragEnd(m: marker, $event: MouseEvent) {
//   console.log('dragEnd', m, $event);
// }

// markers: marker[] = [
//   {
//     lat: 51.673858,
//     lng: 19.815982,
//     label: 'A',
//     draggable: true
//   },
//   {
//     lat: 51.373858,
//     lng: 18.215982,
//     label: 'B',
//     draggable: false
//   },
//   {
//     lat: 51.723858,
//     lng: 21.895982,
//     label: 'C',
//     draggable: true
//   }
// ]

// onChoseLocation(event){
//   this.latitude = event.coords.lat;
//   this.longitude = event.coords.lng;
// }
