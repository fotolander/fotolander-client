import { Component, OnInit } from '@angular/core';
import {Place} from "../../model/place.model";
import {PlaceService} from "../../service/place.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public places: Place[] = [];
  constructor(
    private placesService: PlaceService,
      private router: Router)
    {
      placesService.showPlaces().subscribe(
        (places: Place[]) => {this.places = places;
        }
      );
    }

  ngOnInit(): void {
  }

  onGoToThisPlace(name: string) {
    this.router.navigate(['/','places','all',name]);
  }
}
