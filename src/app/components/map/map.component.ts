import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 52.07131995110451;
  longitude = 19.48128799511309;
  //52.07131995110451, 19.48128799511309
  constructor() { }

  ngOnInit(): void {
  }

}
