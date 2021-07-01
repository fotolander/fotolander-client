import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Place} from "../../model/place.model";
import {PlaceService} from "../../service/place.service";

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  public place: Place;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) { }

  ngOnInit(): void {
    console.log(this.route);

    let s = this.route.snapshot.paramMap.get('name') || '';
    this.placeService.showPlace(s).subscribe(
      (place: Place)=> {
      this.place = place;
      }
    );
  }
}
