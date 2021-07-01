import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { PlacesComponent } from './components/places/places.component';
import { MapComponent } from './components/map/map.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { PlaceItemComponent } from './components/place-item/place-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    MapComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    PlaceItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd8SRKrl55NpRdHuNcEovUI9nPwLdTEEs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
