import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocationMapsPage } from './geolocation-maps';

@NgModule({
  declarations: [
    GeolocationMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocationMapsPage),
  ],
})
export class GeolocationMapsPageModule {}
