import { Injectable } from '@angular/core';
import {Place} from "../model/place.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) {}

  public showPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>('http://localhost:8080/places/all');
  }

  public showPlace(name: string): Observable<Place>{
    return this.http.get<Place>('http://localhost:8080/places/all/'+name);
  }
}
